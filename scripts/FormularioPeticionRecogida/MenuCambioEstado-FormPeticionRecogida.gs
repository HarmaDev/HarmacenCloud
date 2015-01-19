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

/**
 * Este script se crea desde la hoja de calculo de peticiones de recogida de material.
 * Añade un menu a la barra principal que permite cambiar el estado de una petición.
 */

var colores = {
  normal : '#ffffff',
  procesada : '#d9ead3',
  cancelada : '#f4cccc'
};

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [ 
    { name: "No procesada", functionName: "marcarNoProcesada" },
    { name: "Procesada", functionName: "marcarProcesada" },
    { name: "Cancelada", functionName: "marcarCancelada" }
  ];
  ss.addMenu("Cambiar estado de petición a...", menuEntries);
}

function marcarNoProcesada() {
  marcarFila(0);
}
function marcarProcesada() {
  marcarFila(1);
}
function marcarCancelada() {
  marcarFila(2);
}

function marcarFila(caso) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var range = ss.getActiveCell();
  //Browser.msgBox("You have selected row " + ss.getActiveCell().getRow());
  //var row = ss.getActiveCell().getRow();
  
  var color;
  switch (caso) {
      case 0: color = colores.normal; break;
      case 1: color = colores.procesada; break;
      case 2: color = colores.cancelada; break;
  }
  ss.getActiveRange().setBackground(color);
}
