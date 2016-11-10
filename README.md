# microservicioEmails
Microservicio para el envio de emails basico. Hecho con NodeJS

## Instalación.

Clonar el repositorio:

	> git clone git@github.com:Lapicher/microservicioEmails.git
	
Ya terminado, redirigirse dentro de la carpeta clonada, he instalar las dependencias del proyecto para su funcionamiento.

Ejecutar el siguiente comando:

	> npm install
	

## Uso.

Para utilizar el multiservicio solamente es necesario ponerlo a correr:

	> npm start
	
Y listo, el multiservicio se encuentra listo para recibir peticiones POST y enviar la notificacion al email indicado en el json de la peticion.

HEADERS:
	Content-type : application/json

el formato de la peticion solo tiene que ser POST y recibe un json como el siguiente ejemplo:

	{
	    "from": "WoldHero",
	    "to": "natalyjanethcon@gmail.com", 
	    "subject": "Hello, You have been mentioned in a post creation ✔", 
	    "text": "Hello world ?",
	    "html": "<b>Hola Usuario, te avisamos que has sido mencionado en un post. ver</b>"
	}
	
Y la respuesta tendrá la siguiente pinta:

	Peticion procesada, se intentara enviar el email :)
	
	
	
FIN