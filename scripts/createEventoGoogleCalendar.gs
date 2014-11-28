function doGet() {
  var app = UiApp.createApplication().setTitle('Insertar en Calendar desde Form');
  
  //Creamos el panel que contiene el form
  var panel = app.createVerticalPanel().setId('panel');
  
  //Create the form elelemnts
  var eventDateLabel = app.createLabel('Fecha:');
  var evenDate = app.createDateBox().setId('dateBoxFecha');
  var eventTitleLabel = app.createLabel('Titulo del evento:');
  //Manolete es como podemos coger el contenido del titulo
  var eventTitle = app.createTextBox().setName('manolete').setId('textBoxTituloEvento');
  var eventDeatilLabel = app.createLabel('Descripcion:');
  
  //ManoleteDescripcion podemos coger el contenido de la descripcion
  var eventDetail = app.createTextArea()
      .setSize('200', '100').setId('textAreaDescripcion').setName('manoleteDescripcion');
    var btn = app.createButton('Crear evento');
  
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
    .add(eventDeatilLabel)
    .add(eventDetail)
    .add(btn);
  
  // Añadimos el panel a la aplicacion
  app.add(panel);
  
  return app;
}

//Crea el evento en Google Calendar
function createEvents(e){
  
  //Get the active application
  var app = UiApp.getActiveApplication();
  
  try{
    //get the entries;
    var eventDate = e.parameter.dateBoxFecha;
    var eventTitle = e.parameter.manolete;
    var eventDetails = e.parameter.manoleteDescripcion;

    
    //Obtenemos el calendar
    var cal = CalendarApp.getDefaultCalendar();
    var eventStartTime = eventDate;
    var eventEndTime = new Date(eventDate.valueOf()+60*60*1000);
    //Creamos el evento en el Google Calendar
    cal.createEvent(eventTitle, eventStartTime,eventEndTime );
    
    //Mostramos un mensaje de ok
    app.add(app.createLabel('Evento creado gorrión'));
    
    //Ocultamos el panel
    app.getElementById('panel').setVisible(false);
    return app;
  }
  
  catch(e){
    app.add(app.createLabel('A tomar por culo la bicicleta: '+e));
    return app;
  }
}