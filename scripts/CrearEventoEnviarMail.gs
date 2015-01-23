function doGet() {
  var app = UiApp.createApplication().setTitle('Insertar en Calendar desde Form');
  
  //Creamos el panel que contiene el form
  var panel = app.createVerticalPanel().setId('panel');
  
  //Create the form elelemnts
  var eventDateLabel = app.createLabel('Fecha:');
  var evenDate = app.createDateBox().setId('dateBoxFecha');
  
  var eventTitleLabel = app.createLabel('Correo:');
  var eventTitle = app.createTextBox().setName('manoleteCorreo').setId('textBoxTituloEvento');
  
  var eventCalleLabel = app.createLabel('Calle:');
  var eventCalle = app.createTextBox().setName('manoleteCalle').setId('textBoxCalleEvento');
  
  var eventDeatilLabel = app.createLabel('Descripcion:');
  var eventDetail = app.createTextArea()
      .setSize('200', '100').setId('textAreaDescripcion').setName('manoleteDescripcion');
    var btn = app.createButton('Enviar correo');
  
  // Creamos un handler que ejecutara el metodo "createEvents"
  var handler = app.createServerHandler('createEvents');
  // Añadimos el handler al panel
  handler.addCallbackElement(panel);
  // Indicamos que al pulsar el boton se ejecute un handler
  btn.addClickHandler(handler);
  
  // Añadimos los elemntos al panel
  panel.add(eventDateLabel)
    .add(evenDate)
    .add(eventTitleLabel)
    .add(eventTitle)
    .add(eventCalleLabel)
    .add(eventCalle)
    .add(eventDeatilLabel)
    .add(eventDetail)
    .add(btn);
  
  // Añadimos el panel a la aplicacion
  app.add(panel);
  
  evenDate.setValue(new Date("January 2, 2014"));
  
  
  return app;
}

//Crea el evento en Google Calendar
function createEvents(e){
  
  //Get the active application
  var app = UiApp.getActiveApplication();
  
  try{
    //get the entries;
    var eventDate = e.parameter.dateBoxFecha;
    var correo = e.parameter.manoleteCorreo;
    var descripcion = e.parameter.manoleteDescripcion;
    var calle = e.parameter.manoleteCalle;
    var contenido = "Lugar: "+calle + "\n Descripcion: "+descripcion

    
    //Obtenemos el calendar
    var cal = CalendarApp.getDefaultCalendar();
    var eventStartTime = eventDate;
    var eventEndTime = new Date(eventDate.valueOf()+60*60*1000);
    //Creamos el evento en el Google Calendar
    cal.createEvent("Recogida", eventStartTime,eventEndTime );
    
    //Mostramos un mensaje de ok
    app.add(app.createLabel(contenido));
    
    //Ocultamos el panel
    app.getElementById('panel').setVisible(false);
    MailApp.sendEmail(correo, "Recogida de la OSL", contenido);
    return app;
  }
  
  catch(e){
    app.add(app.createLabel('A tomar por culo la bicicleta: '+e));
    return app;
  }
}