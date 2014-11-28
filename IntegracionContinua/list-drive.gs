/**
* Copyright 2014 HARMACEN CLOUD
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


function doGet(e){
  return listFilesInFolder();
}

/**
 * Lista los ficheros de una carpeta y además devuelve un json con información relevante
 * sobre ellos.
 */
function listFilesInFolder(id) {
  var id  = "0B354-B3oM05ucElvQWlDbk9SMjA";
  var folder = DriveApp.getFolderById(id);
  var contents = folder.getFiles();
  var file;
  var name;
  var jsonFile = [];

  while(contents.hasNext()) {
    file = contents.next();
    name = file.getName();
    Logger.log(name);
    
    jsonFile.push({
      "name":name,
      "content":file.getUrl(),
      "id":file.getId(),
      "modDate":file.getLastUpdated(),
      "mime":file.getMimeType()
    });
    
  }
    return ContentService.createTextOutput(JSON.stringify(jsonFile)).setMimeType(ContentService.MimeType.JSON);
};
