function moverAProcesada(){
    //Obtenemos la hoja actual
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    //Obtenemso la fila marcada
    var filamarcada = ss.getActiveRange();
    var numerofilamarcada = ss.getActiveRange().getRow();
    //Guardamos en una variable la hoja Peticiones
    var Peticiones = ss.getSheetByName("Peticiones");
    //Guardamos en una variable la hoja Inventario
    var sheet = ss.getSheetByName("Inventario");
    var range = sheet.getDataRange();
    //Obtenemos la matriz de la hoja de inventario
    var casillas_destino = range.getValues();
    //Obtenemos la matriz de valores de la fila marcada
    var values_marcados = filamarcada.getValues();
    var fila=0;
    var fin = 0;
    //Recorremos la hoja inventario hasta llegar a una fila vacia
    for (var i = 0; i < casillas_destino.length; i++) {
        if (values[i][0]) {
            fila ++;
        }
        else{
            fin=1;
        }
    }
    //Insertamos los valores de la fila marcada en la hoja inventario
    sheet.getRange(fila+1, 1, 1, 26).setValues(values_marcados);
    sheet.getRange(fila+1, 1, 1, 26).setBackground('green');
    //Eliminamos de la hoja peticiones la fila marcada
    Peticiones.deleteRow(numerofilamarcada);
}