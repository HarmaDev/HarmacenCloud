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


function doGet() 
{
  // Crea la aplicación
  var app = UiApp.createApplication();
  var body = app.createFlowPanel();
  body.setStyleAttributes(css.body);
  
  // Crea un label y un textBox
  var label = app.createLabel('Label').setStyleAttributes(css.h1);
  var textBox = app.createTextBox().setId('tb').setName('tb');
  
  // Añade un boton y se le pone el estilo
  var button = app.createButton('Boton');
  button.setStyleAttributes(css["btn-blue"]);

  // Se construye la aplicacion y se devuelve
  body.add(label)
      .add(textBox)
      .add(button);
  app.add(body);
  
  return app;
}
