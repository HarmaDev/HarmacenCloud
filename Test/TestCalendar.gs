
function doGet( e ) {
  QUnit.urlParams( e.parameter );
  QUnit.config({ title: "Unit tests for my project" });
  QUnit.load( justDoIt );
  return QUnit.getHtml();
  
  return justDoIt();
};

QUnit.helpers(this);


function justDoIt() {
  var app = UiApp.createApplication().setTitle('Insertar en Calendar desde Form');
  
  test("Crear Evento en calendario", 2, function(){
    var cal = CalendarApp.getDefaultCalendar();
    var eventStartTime = new Date("January 2, 2014");    
    var eventEndTime = new Date(eventStartTime.valueOf()+60*60*1000);
    //Creamos el evento en el Google Calendar
    var calendar = cal.createEvent("Prueba script", eventStartTime,eventEndTime );
    ok(calendar!=undefined);
    
    //Comprobamos que el evento creado se encuentra en el Google Calendar
    var arrayEvents = cal.getEvents(eventStartTime, eventEndTime);
    var evento;
    var encontrado = false;
    
    for(var i=0; i<arrayEvents.length; i++){
      //encontrado = true;
      evento = arrayEvents[i];
      if(evento.getTitle() == 'Prueba script'){
        encontrado = true;
      }
    }
    
    ok(encontrado);
    
    
  });
  
  return app;
}