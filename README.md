# Tabla de Contenidos
1. [Introducción](#Introduccion)
2. [Requisitos](#Requisitos)
3. [Instalación](#Instalación)
4. [Test](#Test)
5. [Documentación](#Documentación)

6. [Equipo de trabajo](#Equipo_de_trabajo)


## Introducción
Esta documentacion corresponde al trabajo práctico de aplicaciones interactivas

> Librerias utilizadas:

| Libreria | Doc |
| ------ | ------ |
|javascript| https://www.w3schools.com/js |
| material ui | https://mui.com/material-ui/ |
| reactjs | https://es.reactjs.org/docs/getting-started.html |

## Requisitos
Es necesario tener descargados back-end y front-end, los cuales pueden ser encontrados en: 

| Proyecto | Link |
| ------ | ------ |
| **FRONT** | https://github.com/abreuerUade/api-uade |
| **BACK** | https://github.com/abreuerUade/tpo-api-server |


## Instalación
1. [Instalar Visual Studio Code](https://code.visualstudio.com)
2. Abrir alguno de los dos proyectos  
3. Abrir una nueva terminal y el siguientes comando para instalar las dependencias 
    - ```sh
        npm install --legacy-peer-deps        
        ``` 
> Debemos realizar esto con **ambos** proyectos (**BACK Y FRONT**)

## Test

Para hacer funcionar la aplicación es necesario correr el servidor de manera local. Para ello, con el proyecto **BACK** abierto en 
**Visual Studio Code**, ejecutar lo siguiente en la terminal de comandos:
```sh
npm start
```

Ahora, tambien con **vscode** abierto en nuestro proyecto **FRONT**, ejecutar en una terminal:

```sh
npm start
```

## Documentación
#### *Requerimientos*

| Requerimiento | Descripcion |
| ------------- | ----------- |
| **SITIO INSTITUCIONAL** | *La aplicación debe incluir un sitio institucional en donde los usuarios pueden consultar y buscar distintas recetas*|
| **REGISTRO NUEVOS USUARIOS**| *Los usuarios podrán registrarse para utilizar la aplicación, para ello deberán completar un formulario con la siguiente información: **nombre y apellido, mail, número de teléfono**. No se permitirá registrar usuarios con el mismo mail.*|
| **INGRESO USUARIOS** | *Los usuarios podrán ingresar a la aplicación con su mail y contraseña. Tendrán la posibilidad de solicitar una nueva en caso de olvidarla mediante la opción **OLVIDE CONTRASEÑA**. Se recomienda utilizar algún criterio de validación para el reseteo de la misma.* |
| **PERFIL USUARIOS REGISTRADOS**| *Los usuarios registrados podrán gestionar su nombre y cambiar contraseña.*|
| **REGISTRO DE RECETAS** | Los usuarios podrán registrar nuevas recetas en el sitio. Cada receta debe contar con: **nombre**, **categoria**, **ingredientes**, **procedimiento**, **dificultad (calificada de 1 a 5)** e **imagenes**. Las recetas creadas quedaran registradas en el sistema en estado borrador hasta que el usuario decida publicarlas.
| **MODIFICACION DE RECETAS** |  Los usuarios podrán modificar el contenido de sus recetas, quitarlas de publicación o publicarlas nuevamente.|
| **ELIMINACION DE RECETAS** | Los usuarios podrán eliminar sus recetas del sitio.|
| **CALIFICAR RECETAS** | Los usuarios registrados podrán calificar las recetas publicadas. Esta calificación debe poder visualizarse en el sitio principal para que los usuarios puedan filtrar recetas.|


#### *Diagrama de clases conceptuales*

![diagrama de clases conceptuales](https://i.imgur.com/9PqEuVV.png)

#### *Diagrama **mongodb***

![diagrama mongo](https://i.imgur.com/0JeVxtI.png)
 
## Equipo de trabajo
- Andres Breuer
- Gianfranco Caneva
- Timoteo Güerini
