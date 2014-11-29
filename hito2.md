HarmacenCloud
=============

## Componentes del equipo

- [David González Sola](https://github.com/DavidGSola)
- [Jorge González Peregrín](https://github.com/Georgevik)
- [Jorge León Fernández](https://github.com/jorgeles)
- [Jose Manuel Rosell Sánchez](https://github.com/jmrosell)
- [Antonio Toro Fernández](https://github.com/antorof)

## Pasos realizados en el Hito 2

El *primer paso* para este hito, fue decidir como realizar la implementación de la aplicación. Teniamos dos opciones principales, por un lado Google AppEngine, y por el otro Google App Script (GAS). Tras investigar las dos posibilidades a fondo, comparando las ventajas e incovenientes de ambas en nuestros problema, decidimos elegir **Google App Script**. Debido a que en la gestión del almacen se utilizan hojas de cálculo de Google Drive, vimos que GAS se adapta perfectamente a nuestro problema, ya que nos proporciona una gran cantidad de herramientas para el tratamiento de estos ficheros de una forma sencilla y cómoda.

En el *segundo paso* de este segundo hito, creamos unos cuantos script para comprobar el funcionamiento de GAS y habituarnos a su uso. Todos los script creados son script de prueba que se mejoran en los hitos sucesivos. En concreto, hemos desarrollado cuatro scripts, que pasamos a enumerar a continuación:

* [**Crear Evento**](https://github.com/HarmaDev/HarmacenCloud/blob/master/scripts/createEventoGoogleCalendar.gs): Es un pequeño formulario que simula la creación de un evento. Para crear el evento, primero se introduce la fecha del mismo, el titulo y una pequeña descripción del evento.

* [**Formulario1**](https://github.com/HarmaDev/HarmacenCloud/blob/master/scripts/Formulario1.gs): Es un formulario en el que se introducen los datos para solicitar una recogida. Además, le hemos añadido una parte dinámica en la que ir añadiendo tantas lineas de material como sean necesarias, con solo pulsar un botón más que aparece a la derecha de la caja de texto.

* [**Elementos de un formulario**](https://github.com/HarmaDev/HarmacenCloud/blob/master/scripts/elementosForm.gs): Es un script con algunos de los elementos más utilizados a la hora de crear formularios. Este script es un ejemplo para probar como insertar los elementos más comunes dentro de los formularios, no tiene ninguna funcionalidad adicional.

* [**Enviar email**](https://github.com/HarmaDev/HarmacenCloud/blob/master/scripts/sendEmail.gs): Es un formulario de prueba mediante el cual se puede mandar un correo con un asunto y un mensaje personalizado a cualquier persona. Es similar a enviar un correo desde cualquier gestor de correo.

Todos los scripts los podemos encontrar en la carpeta [scripts](https://github.com/HarmaDev/HarmacenCloud/tree/master/scripts) del [repositorio del proyecto](https://github.com/HarmaDev/HarmacenCloud) en GitHub.

Para el *tercer paso*, hemos realizado unos test de prueba a dos de los cuatro script desarrollados anteriormente. En concreto, hemos creado estos test para los scripts de *Crear Evento* y *Formulario1*. Estos test de prueba se han realizado mediante *QUnit*. Estos nuevos scripts para los test los hemos llamado [*TestCalendar*](https://github.com/HarmaDev/HarmacenCloud/blob/master/Test/TestCalendar.gs) y [*TestFormulario1*](https://github.com/HarmaDev/HarmacenCloud/blob/master/Test/TestFormulario1.gs).

El *cuarto paso* ha sido el despliegue de la aplicación, el cual hemos realizado de dos formas diferentes. En primer lugar, hemos creado un tutorial para explicar como se despliegan lso scripts, ya que no es necesario un script de despligues puesto que es un proceso automático que se realiza desde la propia interfaz del script. El [tutorial de despliegue](https://github.com/HarmaDev/HarmacenCloud/blob/master/Tutoriales/DeploymentTutorial.md) se puede encontrar en el repositorio del proyecto. Y por otro lado, hemos creado un [sitio de Google](https://sites.google.com/site/harmacen/), donde se mostrará todo lo relacionado con la gestión del almacen. Actualmente, este sitio solo es una prueba que se irá refinando en los siguientes hitos. El sitio muestra el formulario de solicitud de recogida, así como todos los scripts de Google que hemos desarrollado a lo largo de este hito.

El *quinto y último paso* ha sido el de integración continua de la aplicación.

