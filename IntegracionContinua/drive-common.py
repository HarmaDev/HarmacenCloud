
# google app srcipt sync. 
# authentification

import httplib2
import pprint
import os
import json

from apiclient.discovery import build
from oauth2client.client import OAuth2WebServerFlow
from oauth2client.file import Storage as CredentialStorage

CLIENT_ID = 'ID del usuario'
CLIENT_SECRET = 'Client secret del usuario'

PROJECT_ID='1nj7ps2oV0aATERzSmxdnhA3t-tAw-iDoSEn-7A311U92viOsCkit0jRj'

# Check https://developers.google.com/drive/scopes for all available scopes
OAUTH_SCOPE = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.scripts'

# Redirect URI for installed apps
REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob'

CREDENTIALS_FILE = 'credentials.json'

# returns google api service with user authentification. 
# if user isn't authentificated - requests access token
def get_authenticated_service():
  flow = OAuth2WebServerFlow(CLIENT_ID, CLIENT_SECRET, OAUTH_SCOPE, REDIRECT_URI)

  credential_storage = CredentialStorage(CREDENTIALS_FILE)
  credentials = credential_storage.get()
  if credentials is None or credentials.invalid:
    print 'Go to the following link: ' + flow.step1_get_authorize_url()
    code = raw_input('Enter verification code: ').strip()
    credentials = flow.step2_exchange(code)
    credential_storage.put(credentials)

  http = credentials.authorize(httplib2.Http())
  return build('drive', 'v2', http=http)

# loads all project files to file system. stores project info in manifest file
def load_project_info(PROJECT_ID):
  drive_service =	get_authenticated_service()
  project = drive_service.files().get(fileId=PROJECT_ID).execute()

  files_download_url = project['exportLinks']['application/vnd.google-apps.script+json']
  resp, content = drive_service._http.request(files_download_url)

  data = json.loads(content)
  return { 'name' : project['title'], 'files' : data['files'] }

def get_drive_files():
  drive_service =	get_authenticated_service()
  project = drive_service.files().get(fileId=PROJECT_ID).execute()

  files_download_url = "https://script.google.com/macros/s/AKfycby8cLOP0f8TJ7yisFh3Z8lw1duciCtzMAKzhRN2QfmixCJTpd5J/exec"
  resp, content = drive_service._http.request(files_download_url)
  return json.loads(content)

MANIFEST_FILE = 'manifest.json'


def write_manifest(project_info):
  for file_info in project_info['files']:	
    del file_info['source']
  with open(MANIFEST_FILE, 'wb') as manifest:
    manifest.write(json.dumps(project_info))

def read_manifest() :
  return json.loads(open(MANIFEST_FILE).read()) 


