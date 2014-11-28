
# google app srcipt sync. 
# allows to pull/push project files.

import httplib2
import pprint
import os
import json

from common import load_project_info, write_manifest, get_drive_files
import sys
reload(sys)
sys.setdefaultencoding("utf-8")

# sync project info to file system

for i in get_drive_files():
  print(i['name']+" - "+i['id'])
  pid = i['id']

  if(i['mime'] != "application/vnd.google-apps.script"):
    print('    ^ skipped')
    continue 

  project_info = load_project_info(pid)
  folder_name = project_info['name']

  # clean files in project folder
  if (os.path.exists(folder_name)):
    local_files = [ f for f in os.listdir(folder_name) if os.path.isfile(os.path.join(folder_name, f)) ]
    for local_file in local_files:
      os.remove(os.path.join(folder_name, local_file))	
  else: 
    os.mkdir(folder_name)

  # write project files into local files
  for file_info in project_info['files']:
    extension = '.html'
    if file_info['type'] == 'server_js':
      extension = '.gs'
    filename = file_info['name'] + extension
    with open(os.path.join(folder_name, filename), 'wb') as temp_file:
      temp_file.write(file_info['source'])

  # save manifest with project info
  write_manifest(project_info)


