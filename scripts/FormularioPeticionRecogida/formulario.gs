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

function doGet( e ) {
 /* QUnit.urlParams( e.parameter );
  QUnit.config({ title: "Unit tests for my project" });
  QUnit.load( doIt );
  return QUnit.getHtml();*/
  
  return doIt();
};

QUnit.helpers(this);

function doIt() {
  var app = UiApp.createApplication();
  //estilo
  app.setStyleAttribute("background", "Lavender");
  
  //elementos
 
  /**/
  
   var panel = app.createVerticalPanel()//.setWidth(920)
   .setStyleAttributes(css.body)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(4);
  var contactoLabel=app.createLabel('Datos de contacto:')
      .setStyleAttribute("font-size", "135%")
      .setStyleAttribute("" +"font-weight", "bold")
      .setStyleAttribute("line-height", "200%")
      .setStyleAttribute("background", "Silver");
  var panel1 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
 
  var nombreLB = app.createLabel('Nombre').setStyleAttribute("" +"font-weight", "italic")
      .setWidth(100)
      ;
  var nombreTB = app.createTextBox().setId('Nombre').setName('nombre')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
  panel1.add(app.createLabel('').setWidth(150)).add(nombreLB).add(nombreTB).add(app.createLabel('').setWidth(140));
  
  var panel2 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  
  var apellidosLB = app.createLabel('Apellidos').setWidth(100)
      ;
  var apellidosTB = app.createTextBox().setId('Apellidos').setName('apellidos')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
  
   panel2.add(app.createLabel('').setWidth(150)).add(apellidosLB).add(apellidosTB).add(app.createLabel('').setWidth(140));
   

  
 /* var panel3 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  
  var dniLB = app.createLabel('DNI').setWidth(100);
  var dniTB = app.createTextBox().setId('DNI').setName('dni')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
 
  panel3.add(app.createLabel('').setWidth(150)).add(dniLB).add(dniTB).add(app.createLabel('').setWidth(140));
  */
  var panel4 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  

  
  var correoLB = app.createLabel('Correo electrónico').setId('correolabel').setWidth(100);
  var correoTB = app.createTextBox().setId('Correo').setName('correo')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
  
  
  panel4.add(app.createLabel('').setWidth(150)).add(correoLB).add(correoTB).add(app.createLabel('').setWidth(140));
  
  /**/
  var panel5 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  
 
  
  var panel5 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  
  var organizacionLB = app.createLabel('Organización o centro').setWidth(100);
  var organizacionTB = app.createTextBox().setId('Organizacion').setName('organizacion')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
  
  
  panel5.add(app.createLabel('').setWidth(150)).add(organizacionLB).add(organizacionTB).add(app.createLabel('').setWidth(140));
  
 
  
  var panel6 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  
 var departamentoLB = app.createLabel('Departamento (si procede)').setWidth(100);
  var departamentoTB = app.createTextBox().setId('Departamento').setName('departamento')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
  
 
  panel6.add(app.createLabel('').setWidth(150)).add(departamentoLB).add(departamentoTB).add(app.createLabel('').setWidth(140));
  
  
   var panel7 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  
  var telefonoLB = app.createLabel('Teléfono').setWidth(100);
  var telefonoTB = app.createTextBox().setId('Telefono').setName('telefono')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
  
  
  panel7.add(app.createLabel('').setWidth(150)).add(telefonoLB).add(telefonoTB).add(app.createLabel('').setWidth(140));
  
  var panel8 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  
  var direccionLB = app.createLabel('Dirección de recogida').setWidth(100);
  var direccionTB = app.createTextBox().setId('Direccion').setName('direccion')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
  
  panel8.add(app.createLabel('').setWidth(150)).add(direccionLB).add(direccionTB).add(app.createLabel('').setWidth(140));
  
  
    var infoLabel = app.createLabel('Indique un código o contraseña para poder identificarnos como personas autorizadas al proceder con la recogida. No olvide este código y exíjalo en el momento de la recogida.')
      .setStyleAttribute("font-size", "105%")
      .setStyleAttribute("" +"font-weight", "bold")
      .setStyleAttribute("line-height", "200%")
      .setStyleAttribute("background", "Black")
    .setStyleAttribute("color","yellow");
  
  
  
   var panel10 = app.createHorizontalPanel().setWidth(920)
      .setStyleAttribute("background", "Lavender")
       .setStyleAttribute("font-size", "110%")
      .setVerticalAlignment(UiApp.VerticalAlignment.MIDDLE)
      .setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER)
      .setSpacing(7)
      .setBorderWidth(0);
  
  var codigoLB = app.createLabel('Código para la recogida').setId('CodigoLabel').setWidth(100);
  var codigoTB = app.createTextBox().setId('Codigo').setName('codigo')
      .setWidth(400)
      .setStyleAttribute("background", "WhiteSmoke");
  
  panel10.add(app.createLabel('').setWidth(150)).add(codigoLB).add(codigoTB).add(app.createLabel('').setWidth(140));
  
  
  var materialLabel = app.createLabel('Material a recoger:')
      .setStyleAttribute("font-size", "135%")
      .setStyleAttribute("" +"font-weight", "bold")
      .setStyleAttribute("line-height", "200%")
      .setStyleAttribute("background", "Silver");
  
  var notificacionLB = app.createLabel('').setId('notificacion').setStyleAttribute("font-size", "120%");
 
 
  var table = app.createFlexTable().setId('table').setTag('0').setHeight(150); //Here tag will count the number of members
  //Write the header for the table
  var headerArray = ['Tipo',' ','Ha seleccionado:', 'Modelo', 'Cantidad', 'Estado / notas'];
  for(var i=0; i<headerArray.length; i++){
    table.setWidget(0, i, app.createLabel(headerArray[i]));
  }
  //Add the first row of form elelments to input Member information
  addMemebrRow(app);
  
  
  //Add a button to submit the info
  var button = app.createButton('Enviar').setId('Enviar');
  var handler = app.createServerHandler('_processSubmittedData');
  handler.addCallbackElement(panel);
  button.addMouseUpHandler(handler);
  panel.add(app.createImage("http://osl.ugr.es/wp-includes/images/banner-osl.jpg"))
    .add(contactoLabel)
    .add(panel1)
    .add(panel2)
    .add(panel4)
    .add(panel5)
    .add(panel6)
    .add(panel7)
    .add(panel8)
    .add(infoLabel)
    .add(panel10)
    .add(materialLabel)
    .add(table)
    .add(notificacionLB)
    .add(button);
  
  app.add(panel);
  
  //TEST!!!!!
  /*
  *Testeamos que los paneles se han creado y no estan undefined
  */
    test("Panel 1 Creado", 1, function() {
    ok(panel1 != undefined);
  });
  
  test("Panel 2 Creado", 1, function() {
    ok(panel2 != undefined);
  });
  
  test("Panel 4 Creado", 1, function() {
    ok(panel4 != undefined);
  });
  
  test("Panel 5 Creado", 1, function() {
    ok(panel5 != undefined);
  });
  
  test("Panel 6 Creado", 1, function() {
    ok(panel6 != undefined);
  });
  
  test("Panel 7 Creado", 1, function() {
    ok(panel7 != undefined);
  });
  
  test("Panel 8 Creado", 1, function() {
    ok(panel8 != undefined);
  });
  
  test("Panel 10 Creado", 1, function() {
    ok(panel10 != undefined);
  });
  
  test("Panel InfoLabel Creado", 1, function() {
    ok(infoLabel != undefined);
  });
  
  test("Panel materialLabel Creado", 1, function() {
    ok(materialLabel != undefined);
  });
  
  test("Panel notificacionLB Creado", 1, function() {
    ok(notificacionLB != undefined);
  });
  
  test("Panel button Creado", 1, function() {
    ok(button != undefined);
  });
  /*
  *Probamos la funcionalidad de los botones de añadir y eliminar
  */
  test("Añadida fila", 1, function() {
    var table = app.getElementById('table');
    var nRows = parseInt(table.getTag());
    addMemebrRow(app);
    
    var table2 = app.getElementById('table');
    var nRows2 = parseInt(table.getTag());
    ok(nRows+1 == nRows2);
  });
  
  test("Quitar fila", 1, function() {
    var table = app.getElementById('table');
    var nRows = parseInt(table.getTag());
    removeMemebrRow(app);
    
    var table2 = app.getElementById('table');
    var nRows2 = parseInt(table.getTag());
    ok(nRows-1 == nRows2);
  });
  
 
  return app;
}
 
function addMemebrRow(app){
  var table = app.getElementById('table');
  var tag = parseInt(table.getTag());
  var numRows = tag+1;
  if(numRows >1){
    table.removeCell(numRows-1, 7);
    table.removeCell(numRows-1, 6);
  }
  var lb =app.createListBox(true).setId('fName'+numRows).setName('fName'+numRows)
      .setWidth(160).setHeight(100);
  
  table.setWidget(numRows, 0, lb);
  
   lb.setVisibleItemCount(1);
   lb.addItem('PC');
   lb.addItem('Portátil');
   lb.addItem('Pantalla');
   lb.addItem('Teclado');
   lb.addItem('Ratón');
   lb.addItem('Impresora');
   lb.addItem('Escáner');
   lb.addItem('Otro (indicar en modelo)');
  
  
  
 table.setWidget(numRows, 2, app.createTextBox().setId('elegido'+numRows).setName('elegido'+numRows)
      .setWidth(150)
      .setStyleAttribute("background", "WhiteSmoke").setReadOnly(true));
  
  table.setWidget(numRows, 3, app.createTextBox().setId('lName'+numRows).setName('lName'+numRows)
      .setWidth(120)
      .setStyleAttribute("background", "WhiteSmoke"));
  table.setWidget(numRows, 4, app.createTextBox().setId('dob'+numRows).setName('dob'+numRows)
      .setWidth(70)
      .setStyleAttribute("background", "WhiteSmoke"));
  table.setWidget(numRows, 5, app.createTextArea().setId('note'+numRows).setName('note'+numRows)
      .setWidth(270)
      .setStyleAttribute("background", "WhiteSmoke")); 
  table.setTag(numRows.toString());
  addButtons(app);
}
 
function addButtons(app){
  var table = app.getElementById('table');
  var numRows = parseInt(table.getTag());
  
  //boton añadir seleccion
  var set = app.createButton('Seleccionar').setId('set').setTitle('Añadir selección').setWidth(90);
  table.setWidget(numRows, 1, set);
  var setHandler = app.createServerHandler('_elegidoMaterial');
  setHandler.addCallbackElement(table);
  set.addMouseUpHandler(setHandler);
  
  
  //Create handler to add/remove row
  var addRemoveRowHandler = app.createServerHandler('_addRemoveRow');
  addRemoveRowHandler.addCallbackElement(table);

  
  //Add row button and handler
  var addRowBtn = app.createButton('+').setId('addOne').setTitle('Add row');
  table.setWidget(numRows, 6, addRowBtn);
  addRowBtn.addMouseUpHandler(addRemoveRowHandler);
  
  //remove row button and handler
  var removeRowBtn = app.createButton('-').setId('removeOne').setTitle('Remove row');
  table.setWidget(numRows, 7, removeRowBtn);
  removeRowBtn.addMouseUpHandler(addRemoveRowHandler);
}
 
function _addRemoveRow(e){
  var app = UiApp.getActiveApplication();
  var table = app.getElementById('table');
  var tag = parseInt(e.parameter.table_tag);
  var source = e.parameter.source;
  if(source == 'addOne'){
    table.setTag(tag.toString());
    addMemebrRow(app);
  }
  else if(source == 'removeOne'){
    if(tag > 1){
      
      table.setTag(tag.toString());
      removeMemebrRow(app); 
    }
  }
  return app;
}

function removeMemebrRow(app){
  var table = app.getElementById('table');
  var tag = parseInt(table.getTag());
  
      //Dcrement the tag by one
      var numRows = tag-1;
      table.removeRow(tag);
      //Set the new tag of the table
      table.setTag(numRows.toString());
      //Add buttons in previous row
      addButtons(app);   
}
 
 
function _elegidoMaterial(e){
  var app = UiApp.getActiveApplication();
  var table = app.getElementById('table');
  var tag = parseInt(e.parameter.table_tag);
  var source = e.parameter.source;
 
 
  var elegido = app.getElementById('elegido'+tag);
  elegido.setText(e.parameter['fName'+tag]);
  
  
  return app;
 
 
}
 
 
 
 
function _processSubmittedData(e){
  var ss = SpreadsheetApp.openById(config.idSpreadSheet);
  var sheet = ss.getSheetByName(config.idSheet);
  var app = UiApp.getActiveApplication();
  
  var range = sheet.getDataRange().getValues();
  var numMaterial = parseInt(e.parameter.table_tag);
  var date = new Date();
  var nuevaRecogida = new Array();
  var datos='\n'+'[Cantidad'+', '+'Material'+', '+'Modelo'+', '+'Notas/estado]'+'\n';
  //Member info array
  for(var i=1; i<=numMaterial; i++){
    var material = new Array();
    material.push(new Date().toString("yyyy-MM-ddTHH:mm:ssZ"));
    
    material.push(e.parameter.nombre);
    material.push(e.parameter.apellidos);
   // material.push(e.parameter.dni);
    material.push(e.parameter.organizacion);
    material.push(e.parameter.departamento);
    material.push(e.parameter.correo);
    material.push(e.parameter.telefono);
    material.push(e.parameter.direccion);
    material.push(e.parameter.codigo);
   
    material.push(e.parameter['elegido'+i]);
    material.push(e.parameter['lName'+i]);
    material.push(e.parameter['dob'+i]);
    material.push(e.parameter['note'+i]);
    nuevaRecogida.push(material);
    if(e.parameter['elegido'+i]=="Otro (indicar en modelo)")
     datos=datos+ '\n'+e.parameter['dob'+i]+' '+e.parameter['lName'+i]+', '+' '+e.parameter['note'+i]; 
    else
      datos=datos+ '\n'+e.parameter['dob'+i]+' '+e.parameter['elegido'+i]+', '+e.parameter['lName'+i]+' '+e.parameter['note'+i];
    
  }
  
  datos=datos+'\n'+'\n'+'Datos recogida:'+'\n'+ 'Nombre: '+ e.parameter.nombre +' '+e.parameter.apellidos+'\n'+
    'Lugar: '+ e.parameter.organizacion+'   '+e.parameter.departamento +'\n'+  'Direccion: '+ e.parameter.direccion+'\n'+
    'Telefono: ' +e.parameter.telefono +  '\n'+ 'Correo de contacto: '+ e.parameter.correo +  '\n'+ 'Código de recogida: '+ e.parameter.codigo; 
  
  var emailSubject = "Información importante sobre la solicitud de recogida de material";
  
  if((e.parameter.codigo=="")){
    
   
     var codigo = app.getElementById('CodigoLabel');
    var codigotexto = app.getElementById('Codigo');
     codigo.setText("DEBE INDICAR UN CÓDIGO PARA LA RECOGIDA");
     codigotexto.setStyleAttribute("background", "salmon");
    return app;
  
  }else{
   try {
     var emailContent="Su petición ha sido procesada, recibirá un correo con la fecha de recogida lo más pronto posible. Nunca pasaremos a recoger el material sin antes enviarle un correo desde la dirección oslugr@gmail.com."
                       +'\n\n'
                       +"Por favor, tenga esto en cuenta para evitar fraudes."
                       +'\n\n'
                       +"No permita que personal no autorizado y ajeno a la UGR realice la recogida. Para ello es importante que nos exija el código proporcionado en el momento de la recogida:"
                       +e.parameter.codigo
                       +'\n\n'
                       +"En caso de duda pídanos a los responsables de la recogida una identificación con DNI y compruebe nuestra identidad. Los posibles encargados son:"
                       +'\n'+"Manuel Cogolludo Vallejo"
                       +'\n'+"Jose Alonso Arias Gonzalez"
                       +'\n'+"Renato Luis Ramírez Rivero"
                       +'\n\n'
                       +"Si la petición de recogida que acaba de realizar debería de realizarse prontamente en un plazo de menos de 1 semana aproximadamente notifíquelo en un correo electrónico a 'ayudasl@ugr.es' indicando en el asunto 'Recogida Urgente' y en el cuerpo del mensaje una pequeña descripción del motivo y el código de la recogida que ha aportado."
                       +'\n'
                       +"Nos pondremos en contacto con usted lo más pronto posible para concretar la recogida."
                       +'\n\n'
                       +"Muchas gracias."
                       +'\n'+"La Oficina de Software Libre::Universidad de Granada.";
     
     // MailApp.sendEmail(e.parameter.correo, emailSubject, emailContent);
        
       try{       
       
         //correo de notificación
         //MailApp.sendEmail(config.email, "Nueva recogida material", "Material a recoger: "+ '\n'+ datos);
        
 
         sheet.getRange(range.length+1,1, nuevaRecogida.length, nuevaRecogida[0].length).setValues(nuevaRecogida);
        
         var notif = app.getElementById('notificacion');
         notif.setText('La petición ha sido enviada correctamente.')
           .setStyleAttribute("background", "Silver");
         var boton = app.getElementById('Enviar');
         boton.setVisible(false);
         return app;
       }
  
       catch (f) {
         //enviar correo de error
         //MailApp.sendEmail(config.email, "Error report: ", "Ha habido un error en el formulario de recogidas. Mensaje:"+'\n'+e.message);
       }
   } 
   catch (f2) {
     var correo = app.getElementById('correolabel');
     var correotexto = app.getElementById('Correo');
     correo.setText("Correo electrónico DEBE INDICAR UN CORREO VÁLIDO");
     correotexto.setStyleAttribute("background", "salmon");
     return app;
 
   }
  }
  
  
    
}