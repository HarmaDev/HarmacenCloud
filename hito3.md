HarmacenCloud
=============

## Componentes del equipo

- [David González Sola](https://github.com/DavidGSola)
- [Jorge González Peregrín](https://github.com/Georgevik)
- [Jorge León Fernández](https://github.com/jorgeles)
- [Jose Manuel Rosell Sánchez](https://github.com/jmrosell)
- [Antonio Toro Fernández](https://github.com/antorof)

## Crear jaula o contenedor para hacer pruebas

En el caso de nuestro proyecto no tiene sentido crear una jaula o un contenedor, ya que trabajamos sobre GAS (Google App Script) y para ejecutar los script es necesario hacerlo sobre los servicios de Google. Por tanto, en nuestro caso las pruebas se hacen directamente sobre el propio entorno de ejecución de los script.

Ya que no es necesario para nuestro proyecto crear jaulas o contenedores, no es necesario crear script que automaticen la tarea de crear los contenedores o jaulas para hacer pruebas sobre ellos. En cuanto a las operaciones de [despliegue](https://sites.google.com/site/harmacen/) e integración continua ya las habiamos realizado en el hito anterior, por lo que en este hito nos vamos a dedicar a ampliar la funcionalidad de nuestra aplicación para gestión de un almacen.

## Funcionalidad añadida

### Envío de email en el formulario de recogida

El formulario de recodiga **Formulario1.gs** ahora envía un correo con el material a recoger así como la información rellenada por el usuario en el formulario a la siguiente dirección de correo electrónica: *harmacencloud@gmail.com*.

Si ha dado un error al leerse el formulario de recogida también enviará un correo electrónica a la misma dirección anterior con el fin de que *harmadev* pueda detectar algún posible fallo en el formulario.

### Envío de email y creación de calendario

Se trata de un formulario donde se introduce el correo, una localización para efectuar la recogida, una fecha y una descripcion. De este modo, se le enviará al correo indicado la descripción indicando la fecha y hora de recogida y al que rellenó el formulario insertará en su Google Calendar el evento de la recogida.

### Automatización de la gestión de Peticiones

Se ha automatizado la gestión de las peticiones, de manera que al realizar un cliente una petición se recoge en una hoja de calculo. Además cuando se realiza esta recogida se ha añadido un opción en la hoja de calculo que permite modificar el estado de la petición y mover los objetos ya recogidos de la hoja con las peticiones a la hoja que contiene el inventario.