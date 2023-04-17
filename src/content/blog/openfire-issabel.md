---
title: "Configurar Openfire en Issabel PBX"
date: "2023-03-02"
description: "Configurar el sistema de mensajería instantanea Openfire en Issabel"
---

### OpenFire

OpenFire es un sistema de mensajería instantánea, hecho en java y que utiliza el protocolo XMPP, con él podrás tener tu propio servidor de mensajería, puedes administrar a tus usuarios, compartir archivos, auditar mensajes, mensajes offline, mensajes broadcast, grupos, etc y además contiene plugins gratuitos con diferentes funciones extras.

#### Instalación en Issabel

1. Descargar el instalador de la página web oficial de openfire:
[https://igniterealtime.org/downloads/](https://igniterealtime.org/downloads/)

Se debe descargar el archivo en formato `.rpm` y ponerlo en la carpeta `/tmp` del servidor. Se puede utilizar [WinSCP](https://winscp.net/eng/download.php) para este proceso.

2. Para instalar el paquete ejecutar (reemplazar el nombre del archivo según sea el caso):

```cmd
[root@issabel tmp]# yum -y install openfire-4.3.2-1.x86_64.rpm
```

3. Iniciar el servicio:

```cmd
[root@issabel tmp]# systemctl start openfire.service
[root@issabel tmp]# systemctl enable openfire.service
```

4. Ingresar a la carpeta de openfire para crear la base de datos:

```cmd
[root@issabel tmp]# cd /opt/openfire/resources/database
```

5. Creamos la base de datos:

```cmd
[root@issabel database]# mysqladmin create openfire -p
```

6. Ingresamos a la consola de MySQL:

```cmd
[root@issabel database]# mysql -u root -p
```

7. Ver las bases de datos activas:

```sql
MariaDB [(none)]> show databases;
MariaDB [(none)]> quit
```

8. Creamos la estructura de la base de datos:

```cmd
[root@issabel database]# cat openfire_mysql.sql |mysql openfire -p
```

9. Ingresamos a la consola de MySQL y le damos provilegios al usuario de openfire:

```sql
[root@issabel database]# mysql -u root -p

MariaDB [(none)]> use openfire;
MariaDB [openfire]> GRANT ALL PRIVILEGES ON openfire.* TO 'openfire'@'localhost' IDENTIFIED BY 'openfire';
MariaDB [openfire]> FLUSH PRIVILEGES;
MariaDB [openfire]> quit
```

10. Comprobamos que todo funciona vía web:

```cmd
http://ipserver:9090
```

#### Configuración inicial

1. Ingresar al navegador con la IP del servidor y el puerto especifico: `http://ipserver:9090`.

2. Seleccionar el idioma preferido:

![](/assets/blog/openfire_img_0.png)

3. Ingresar la dirección IP del servidor en el campo `Dominio`:

![](/assets/blog/openfire_img_1.png)

4. Seleccionar `Conexión Estandard` para la conexión a la base de datos:

![](/assets/blog/openfire_img_2.png)

5. En `Drivers predefinidos` seleccionar la conexión a `MySQL`. 

- En `URL de la base de datos` debemos modificar la cadena de conexión para realizar la conexión a la base de datos de forma local, por lo que debemos reemplazar los valores `HOSTNAME` y `BASENAME` con los valores del servidor, que es este caso serían `localhost` y `openfire` respectivamente, quedando así la cadena de conexión:

    _jdbc:mysql://`localhost`:3306/`openfire`?rewriteBatchedStatements=true&characterEncoding=UTF-8&characterSetResults=UTF-8&serverTimezone=UTC_

- En `Nombre de usuario` y `Contraseña` colocamos las credenciales que creamos en el paso 9 de la instalación: `openfire` para el usuario y la contraseña. Si haz configurado otro usuario u otra contraseña, debes ingresarlas aqui:

![](/assets/blog/openfire_img_3.png)

6. En `Configuración del perfil` dejamos seleccionado `Por defecto` para almacenar los usuarios y grupos en la base de datos local de Openfire:

![](/assets/blog/openfire_img_4.png)

7. En `Cuenta del Administrador` ingresamos una cuenta de correo válida y una contraseña para crear la cuenta administradora de Openfire:

![](/assets/blog/openfire_img_5.png)

8. Finalmente, luego de terminar la configuración podremos ingresar a la consola de administración de Openfire.

![](/assets/blog/openfire_img_6.png)

9. Para conectarnos a la consola de administración, debemos ingresar con el usuario `admin` y la contraseña que establecimos en el paso 7:

![](/assets/blog/openfire_img_7.png)

#### Notas
- Si ocurre algún problema durante la configuración del openfire, como con las cookies, reiniciar el servidor y volver a configurar.
- Una vez finalizada la instalación, crear los usuarios en el administrador.
- Se puede utilizar los clientes XMPP `Spark` o `Jitsi` que se pueden descargar de sus páginas web y conectarse con los usuarios creados.
- Cuando se conecten los usuarios, permitir que puedan conectarse sin tener firmado el certificado SSL del servidor.

#### Instalación del cliente `Spark`

1. Descargamos `Spark` desde la página ofician [https://igniterealtime.org/downloads/#spark](https://igniterealtime.org/downloads/#spark)

2. Descargamos el instalador según nuestro sistema operativo y realizamos la instalación normal.

3. Para iniciar sesión en `Spark`, ingresamos las credenciales de alguno de los usuario creados en Openfire:

    - **username**: Nombre de un usuario válido en Openfire
    - **domain**: Dirección IP del servidor
    - **password**: Contraseña del usuario

![](/assets/blog/openfire_img_8.png)

4. En las configuraciones avanzadas, podemos deshabilitar la verificación del certificado de seguridad del servidor, para no tener problemas con el SSL:

![](/assets/blog/openfire_img_9.png)

5. Luego de ingresar, podemos ver que el usuario ya se ha conectado y está en linea en la consola de administración:

![](/assets/blog/openfire_img_10.png)

![](/assets/blog/openfire_img_11.png)