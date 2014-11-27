function doGet() {
   var app = UiApp.createApplication();
  
  var panel = app.createVerticalPanel()
  
  //Check Box
   var handler = app.createServerHandler("change");
   var check = app.createCheckBox("Checkeame").addValueChangeHandler(handler);
   panel.add(check);
  
  //lista
   var lista= app.createListBox().setName("listBox").addItem("Opcion 1").addItem("Opcion 2").addItem("Manolete");
  panel.add(lista);
  
  //boton
 var button = app.createButton("Pulsar Manolete").setId("button");
   button.addClickHandler(app.createServerHandler("handlerFunction"));
   panel.add(button);
  
  //Imagen
  var imagen = app.createImage("http://www.google.com/logos/googleburn.jpg");
  panel.add(imagen);

  //boton en popup panel
  var popupPanel = app.createPopupPanel(false, true);
   popupPanel.add(app.createButton()).setWidth("100px").setHeight("100px")
       .setPopupPosition(400, 100);
   popupPanel.show();
  
  //incrustar HTML
  panel.add(app.createHTML("<b>Hello World!</b>"));
  
  //cuadro de texto para varias lineas
  var text = app.createTextArea().setText("Busque, compare y si encuentra algo mejor cómprelo");
  panel.add(text);
  
  //date picker
  var picker = app.createDatePicker();
   panel.add(picker);
  
  
  app.add(panel);
   return app;
 }


function dialog(e){
  var app = UiApp.getActiveApplication();
 
}

function handlerFunction(eventInfo) {
   var app = UiApp.getActiveApplication();
   app.add(app.createLabel("Has pulsado a manolete"));
   dialog.show(); 
   return app;
 }
 

 function change() {
   var app = UiApp.getActiveApplication();
   app.add(app.createLabel("Has pulsado a manolete"));
   return app;
 }