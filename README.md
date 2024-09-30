▶️ Pasos para configurar y construir el contenedor Docker de la API

➡️ Configuracion

Primero debemos instalar Docker en nuestra máquina, si no lo tienes instalado visita su sitio oficial y te descargas la versión para tu sistema operativo, link del sitio: https://docs.docker.com/engine/install/, una vez hecho esto debemos crear un archivo Dockerfile, .dockerignore y docker-compose en la carpeta raíz del proyecto
![image](https://github.com/user-attachments/assets/f6f93ac4-54bc-452c-a2f8-99c475ca7a00)
Asi debe lucir nuestro proyecto ya incluyendo los archivos de Docker

1.1. Configuración del Dockerfile

- Dentro de Dockerfile debemos configurar que versión del lenguaje de programación se esta utilizando, en nuestro caso estamos utilizando Node.js
- Luego establecer el directorio de trabajo que utilizara Docker para ejecutarse
- Hacemos una copia de todos los archivos que contiene nuestro proyecto al contenedor
- Le decimos a Docker que instale los node_modules, estos archivos son necesarios para la correcta ejecución de la API
- Definimos en que puerto se va a exponer el contenedor
- Por último, definimos el conmando para ejecutar la aplicación, utilizamos la paqueteria de instalación npm
![image](https://github.com/user-attachments/assets/dda0ca8b-c1c5-4bd0-8139-d95cb795860c)

1.2. Configuración del docker-compose

- Utilizamos la versión 3 de Docker
- Definimos un rango de puertos en los cuales puede ser expuesto el contenedor
- configuramos las variables de entorno que utiliza la API
- Definimos el comando para la ejecución cuando se cree la imagen
![image](https://github.com/user-attachments/assets/98c4df7b-9e01-49c4-a759-6dfd31a6bec9)

1.3. Configuraciónn del .dockerignore

- Debemos configurar el .dockerignore para indicarle al contenedor que ignore completamente los node_modules, .gitignore porque dentro del contenedor al momento de su ejecución esos archivos no son importantes excepto los node_modules pero estos los instala el automaticamente porque ya se lo hemos indicado en el Dockerfile.
![image](https://github.com/user-attachments/assets/67adb666-628b-4ab6-acf0-6ebf5106e310)

➡️ Contruir el contenedor Docker

Para la construcción del contenedor Docker tenemos dos alternativas, la primera es mediante la extensión de Docker que puede ser instalada en VS CODE y seguir una serie de pasos, la segunda es en base a una serie de comandos. Acontinuación se muestran los pasos mediante el uso de la extensión de Docker en VS CODE:

▶️ Pasos para construir el contenedor mediante la extensión de Docker en VS CODE:

1- En tu VS CODE en el apartado de extensiones debemos buscar "Docker", y instalamos la extensión desarrollada por Microsoft.
![image](https://github.com/user-attachments/assets/382cf19e-f232-443c-91b9-4e3bde76c4ca)

2- Una vez intalada nos aparecera en la barra lateral izquierda, damos click sobre ella y podremos ver todas las imagenes que tenemos y contenedores que esten corriendo en nuestra máquina.
![image](https://github.com/user-attachments/assets/637cf1a8-efa7-4758-a443-71e43951b91a)

3- Luego debemos hacer click derecho sobre nuestro Dockerfile y seleccionar la opción de "Build image"
![image](https://github.com/user-attachments/assets/68ac354e-e340-4cd3-9552-88a2ae96a276)

4- Nos mostrara un apartado donde podemos colocar el nombre que queramos para nuestra imagen del contenedor, luego damos ENTER y comenzara a construirse, esto tardara dependiendo de la velocidad del internet.

5- Una vez finalizado el proceso, nos vamos a nuestra extensión y podemos observar que en el apartado de "IMAGES" estara la imagen que hemos construido con su respectivo nombre, desplegamos la imagen y aparecera el lastest de la imagen, para construir el contenedor damos click derecho sobre el y seleccionamos la opción de RUN
![image](https://github.com/user-attachments/assets/a1e16ba0-a92d-49c9-a25f-a277304630bf)

6- Una vez hecho estos nos aparecera en el apartado de "CONTAINERS" el contenedor que hemos creado y vemos que su status es run junto con el puerto en el que esta expuesto, significa que ya podemos hacer uso de el, el proceso de construcción ah sido un éxito.
![image](https://github.com/user-attachments/assets/61659f95-c5bd-41f6-b5f4-2b5def0245bd)

▶️ Pasos para construir el contenedor mediante comandos Docker:

1- Para constuir la imagen de Docker, en la consola de nuestro VS CODE debemos escribir el comando "docker build ." damos ENTER y se comenzara a construir.
![image](https://github.com/user-attachments/assets/93aa023e-885f-4ac9-abdb-d3c1bd7c5fde)

2- Una vez finalizado el proceso, escribimos "docker run REFERENCIA_IMAGEN" sustituir REFERENCIA_IMAGEN por tu imagen creada.
![image](https://github.com/user-attachments/assets/082d5d4c-9909-4532-bf12-ad5a807cabea)

3- Para visualizar las imagenes que tenemos creadas ejecutamos el comando "docker image ls"
![image](https://github.com/user-attachments/assets/b41cef93-7c7b-4c13-8f4b-49589cb55d17)

Todos estos comandos los podemos encontrar en la documentación oficial de Docker en el apartado de "Build images", link del sitio oficial: https://docs.docker.com/get-started/docker-concepts/building-images/build-tag-and-publish-an-image/

▶️ YA TENEMOS NUESTRO CONTENEDOR DE LA API DESPLEGADO LISTO PARA SER USADO PERO... ¿COMO LO UTILIZAMOS?

Si tenemos instalado Docker Desktop en nuestra máquina, podemos observar que tenemos un contenedor corriendo en el puerto 3001 o otro puerto dependiendo si no esta siendo utilzado, damos un click ahi y se nos abrira el enlace de la API en nuestro navegardor.
![image](https://github.com/user-attachments/assets/9710cafa-52c7-4e76-8c31-6a7b93ef9e5e)

Nos mostrara esto:
![image](https://github.com/user-attachments/assets/cc243055-5204-4a37-995e-1064ecbf968c)

Nos mostrara un error porque estamos visitando un endpoint que no existe en la API, acontinuación se muestran los diferentes endpoints que ofrece la API

- /api/test (endpoint para saber si la API esta funcionando correctamente)

😲 NOTA: para visitar los demás endpoint primero debemos logearnos en el servidor.

🙁 ¿Como logearse?

Para poder logearse necesitamos una aplicación cliente que este mandando solicitudes HTTP al servidor, para poder omitir eso podemos utilizar clientes REST como thunderclient o postman, para esta demostración se estará utilizando thunderclient.

▶️ Pasos para logearse:

1- Primero debemos crearnos un usuario, para eso visitemos el endpoint "/api/adduser", cambiamos a peticion POST y colocamos el cuerpo de la petición, luego damos click en el boton send, la siguiente imagen representa como debe lucirse la petición.
![image](https://github.com/user-attachments/assets/6fbcb382-b766-47b6-9629-9466079efae2)

El servidor nos responde y nos dice que revisemos nuestro correo electronico que hemos ingresado (ojo este correo debe ser accesible)
![image](https://github.com/user-attachments/assets/7902e7fe-7aa3-4767-98c4-21d828379324)

El correo luce de la siguiente manera, debemos copiar ese código de verificación.
![image](https://github.com/user-attachments/assets/684936e4-1393-42b9-b8ae-dbc70d94e7cd)

2- Luego de recibir el código, debemos verificarnos, para ello visitamos el endpoint "/api/verifyuser", la petición debe lucir de la siguiente manera (el código que aparece en la imagen debe ser el tuyo), luego damos click en send:
![image](https://github.com/user-attachments/assets/1eceb739-6e4b-49aa-b475-111e61412cb0)

El servidor respondera de la siguiente manera: 
![image](https://github.com/user-attachments/assets/bf153583-8f80-44f9-bb2e-5681df83dceb)

🥳 Significa que ya estamos registrados en el servidor.

3- Ya podemos logearnos en el servidor, para ser eso visitamos el endpoint "/api/login", el cuerpo de la petición debe lucir de la siguiente manera (recuerda colocar tu contraseña):
![image](https://github.com/user-attachments/assets/210f7728-46fd-4cfb-9656-99037afb9219)

El servidor nos responde con un token de login. !IMPORTANTE SABER QUE ESTE TOKEN SOLO DURA 1 HORA, LUEGO DE PASAR ESE TIEMPO DEBEMOS LOGEARNOS OTRAVEZ AL SERVIDOR SIGUIENDO LOS MISMOS PASOS!  
![image](https://github.com/user-attachments/assets/c1b6b33b-2691-45a9-8801-45c5c662d7c7)

Ese token debemos copiarlo y pegarlo en "Auth" para tener permiso a los demás endpoints (recuerda pegar el token que se te ah otorgado).
![image](https://github.com/user-attachments/assets/ca794cb2-b3ef-4b24-9896-78619e1a3486)

🥳 !Listo ya tenemos acceso a todos los endpoint de la API!

▶️ endpoints que puedes visitar una vez logeado:
- /api/listuser (endpoint para ver los usuarios guardados en la base de datos de mongodb atlas)
- /api/updateuser/:id (endpoint para actualizar un usuario)
  Para hacer uso de este endpoint debemos sustituir "id" por un id de usuarios, podemos visitar el endpoint anterior y ver que usuarios estan registrados, podemos copiar y pegar su id y hacer la petición al servidor, la petición debe lucir de la siguiente manera:
  ![image](https://github.com/user-attachments/assets/8480f837-128f-4388-bc4d-bcc0d5358e8a)

  cambiamos el campo que queramos.
  
- /api/deleteuser/:id (endpoint para eliminar un usuario)
  ➡️ De igual manera para hacer uso de este enpoint debes seguir los pasos anteriores, solamente cambiar la petición a "DELETE"
  
- /api/deleteAllUsers (endpoint para borrar todos los usuarios)
- /api/listschedule (endpoint para ver los horarios)
- /api/addschedule (endpoint para crear horarios)
  Para crear un nuevo horario, el cuerpo de la petición debe lucir de la siguiente manera:
  ![image](https://github.com/user-attachments/assets/a8e4ed60-c68e-4f54-8ff9-15a3ce0c0cf7)

El servidor responde que ya fue creado el horario

- /api/updateschedule/:id (endpoint para actualizar un horario)
  ➡️ Hacer los pasos similares cuando estamos actualizando un usuario, cambiar "id" por un id de un horario que este creado previamente
- /api/deleteschedule/:id (endpoint para eliminar un horario)
  ➡️ Seguir pasos anteriores
- /api/listactivity (endpoint para ver actividades)
- /api/addactivity (endpoint para crear una actividad)
Para crear una actividad, el cuerpo de la petición debe lucir de la siguiente manera:
![image](https://github.com/user-attachments/assets/29450261-3601-4ccf-8873-86e79712f789)

El servidor dara respuesta que ya fue creada la actividad

- /api/updateactivity/:id (endpoint para actualizar una actividad)
  ➡️ Seguir mismos pasos de actualización
- /api/deleteactivity/:id (endpoint para eliminar una actividad)
  ➡️ Seguir mismos pasos de eliminación
- /api/logout (endpoint para deslogearse del servidor)
  ![image](https://github.com/user-attachments/assets/0b34461a-ee47-422a-a739-316339b28451)

  Recuerda colocar el email con el que te has logeado al servidor.

  ▶️ !Genial!, ya estamos utilizando nuestra API que se esta ejecutando dentro de un contenedor Docker.

  HAPPY HACKING 🎉

  ...








  






