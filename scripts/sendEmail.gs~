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
  var panel = app.createVerticalPanel();
  
  // Crea un label y un textBox para el email
  var emailLB = app.createLabel('Set Email');
  var emailTB = app.createTextBox().setId('setEmail').setName('setEmail');
  
  // Crea un label y un textBox para el tema del correo
  var subjectLB = app.createLabel('Set Subject');
  var subjectTB = app.createTextBox().setId('setSubject').setName('setSubject');
  
  // Crea un label y un textBox para el mensaje del correo
  var messageLB = app.createLabel('Set Message');
  var messageTB = app.createTextBox().setId('setMessage').setName('setMessage');
  
  // Añade un botón para enviar el correo
  var button = app.createButton('Enviar');

  // Se crea un handler
  var handler = app.createServerHandler('_processSubmittedData');

  // Se asocia el handler al botón
  handler.addCallbackElement(panel);
  button.addMouseUpHandler(handler);
  panel.add(emailLB)
  .add(emailTB)
  .add(subjectLB)
  .add(subjectTB)
  .add(messageLB)
  .add(messageTB)
  .add(button);
  app.add(panel);
  return app;
}

function _processSubmittedData(e)
{
  // Se obtienen los valores de los textBox
  var email = e.parameter.setEmail;
  var subject = e.parameter.setSubject;
  var message = e.parameter.setMessage;
  
  // Envia el correo electrónico
  MailApp.sendEmail(email, subject, message);
}
