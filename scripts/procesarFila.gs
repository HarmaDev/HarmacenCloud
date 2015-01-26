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

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [ 
    { name: "Procesar Fila", functionName: "procesar" }
  ];
  ss.addMenu("Cambiar estado de petición a...", menuEntries);
}

function procesar(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var fila=ss.getActiveCell().getRow();
  var range = sheet.getRange(fila,1,1,sheet.getLastColumn()-1);
  var values = range.getValues();
  //Quitamos a partir de la posicion 1, 2 columnas
  values[0].splice(1,2);
  Browser.msgBox("You have selected row " + values);
}
