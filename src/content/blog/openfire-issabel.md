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

```cmd
MariaDB [(none)]> show databases;
MariaDB [(none)]> quit
```

8. Creamos la estructura de la base de datos:

```cmd
[root@issabel database]# cat openfire_mysql.sql |mysql openfire -p
```

9. Ingresamos a la consola de MySQL y le damos provilegios al usuario de openfire:

```cmd
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

#### Notas
- Si ocurre algún problema durante la configuración del openfire, como con las cookies, reiniciar el servidor y volver a configurar.
- Una vez finalizada la instalación, crear los usuarios en el administrador.
- Se puede utilizar los clientes XMPP `Spark` o `Jitsi` que se pueden descargar de sus páginas web y conectarse con los usuarios creados.
- Cuando se conecten los usuarios, permitir que puedan conectarse sin tener firmado el certificado SSL del servidor.