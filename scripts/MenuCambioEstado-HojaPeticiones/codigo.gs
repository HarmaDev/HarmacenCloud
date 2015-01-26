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
    { name: "Mover a inventario", functionName: "moverAInventario" },
    { name: "Reciclar", functionName: "reciclar" },
    { name: "Tirar", functionName: "tirar" }
  ];
  ss.addMenu("Procesar petición", menuEntries);
}

function moverAInventario() {
  procesarElemento(0);
}
function reciclar() {
  procesarElemento(1);
}
function tirar() {
  procesarElemento(2);
}

function procesarElemento(caso) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var historial = ss.getSheetByName(nombresHojas.historial),
      peticiones = ss.getSheetByName(nombresHojas.peticiones),
      tirar = ss.getSheetByName(nombresHojas.tirar),
      reciclar = ss.getSheetByName(nombresHojas.reciclar),
      inventario = ss.getSheetByName(nombresHojas.inventario);
  
  var row = ss.getActiveCell().getRow();
  var numColumns = ss.getRowHeight(row);
  
  var rango = peticiones.getRange(row, 1, 1, numColumns);
  var values = rango.getValues();
  
  // Se copia al historial
  var lastRowHistorial = historial.getLastRow()+1;
  historial.getRange(lastRowHistorial, 1, 1, numColumns).setValues(values);
  var color;
  switch (caso) {
      case 0: color = colores.inventario; break;
      case 1: color = colores.reciclar; break;
      case 2: color = colores.tirar; break;
  }
  historial.getRange(lastRowHistorial, 1, 1, numColumns).setBackground(color);
  
  // Se eliminan los campos no deseados
  values[0].splice(0,9);
  
  // Copiar el elemento al lugar correcto
  switch (caso) {
      case 0:
        inventario.getRange(inventario.getLastRow()+1, 1, 1, numColumns-9).setValues(values);
      break;
      case 1: 
        reciclar.getRange(reciclar.getLastRow()+1, 1, 1, numColumns-9).setValues(values);
      break;
      case 2: 
        tirar.getRange(tirar.getLastRow()+1, 1, 1, numColumns-9).setValues(values); break;
  }
  
  peticiones.deleteRow(row);
}
