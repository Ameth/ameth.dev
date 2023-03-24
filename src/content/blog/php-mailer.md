---
title: "Cómo enviar correos electrónicos en PHP con PHPMailer"
date: "2022-11-21"
description: "Enviar correos de forma sencilla utilizando PHPMailer"
---

PHPMailer es quizás la biblioteca de código abierto más popular para enviar correos electrónicos en PHP. Fue lanzada por primera vez en 2001, y desde entonces se ha convertido en la forma favorita de los desarrolladores de PHP para enviar correos electrónicos de forma programada.

En este artículo, hablaremos acerca de por qué deberías usar PHPMailer en lugar de la función mail() de PHP, y mostraremos algunos ejemplos de código sobre cómo usar esta biblioteca.

#### ¿Es una alternativa a la función mail() de PHP?
En la mayoría de los casos, es una alternativa a la función `mail()` de PHP, pero hay muchos otros casos en los que la función `mail()` simplemente no es lo suficientemente flexible para lograr lo que necesitas.

En primer lugar, **PHPMailer provee una interfaz orientada a objetos**, mientras que `mail()` no está orientada a objetos. Los desarrolladores de PHP generalmente odian crear cadenas de $headers mientras envían correos electrónicos usando la función `mail()` porque requieren mucho escape. PHPMailer hace que esto sea muy fácil. Los desarrolladores también necesitan escribir código sucio (caracteres de escape, codificación y formato) para enviar adjuntos y correos electrónicos basados en HTML cuando usan la función `mail()`, mientras que PHPMailer hace que esto sea muy sencillo.

Además, la función `mail()` requiere un servidor de correo local para enviar los correos electrónicos, que no siempre es fácil de configurar. PHPMailer puede usar un servidor de correo no local (SMTP) si tiene autenticación.

Otras ventajas para enviar correos electrónicos en PHP con PHPMailer incluyen:

- Puede imprimir varios tipos de mensajes de error en más de 40 idiomas cuando no puede enviar un correo electrónico.
- Tiene integrado el soporte del protocolo SMTP y la autenticación a través de SSL y TLS.
- Puede enviar una versión alternativa de texto plano de correo electrónico para clientes de correo electrónico no HTML.
- Tiene una comunidad de desarrolladores muy activa que lo mantiene seguro y actualizado.

PHPMailer también es usado por populares sistemas de administración de contenido PHP como **WordPress, Drupal y Joomla**.

#### Instalando PHPMailer

Puedes instalar PHPMailer usando Composer para enviar correos electrónicos en PHP:

```
composer require phpmailer/phpmailer
```

#### Enviar correos electrónicos en PHP desde un servidor web local usando PHPMailer
Aquí está el ejemplo más simple de enviar correos electrónicos en PHP desde un servidor web local usando PHPMailer:

```
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

//PHPMailer Object
$mail = new PHPMailer(true);

//La dirección de correo electrónico y el nombre
$mail->From = "de@tudominio.com";
$mail->FromName = "Nombre completo";

//A la dirección y el nombre
$mail->addAddress("destinatario1@tudominio.com", "Nombre del destinatario");
$mail->addAddress("destinatario1@tudominio.com"); //El nombre del destinatario es opcional

//Dirección a la que responderá el destinatario
$mail->addReplyTo("info@tudominio.com", "Respuesta");

//CC y BCC
$mail->addCC("cc@ejemplo.com");
$mail->addBCC("bcc@ejemplo.com");

//Envía un correo electrónico en HTML o en texto plano
$mail->isHTML(true);

$mail->Subject = "Texto del asunto";
$mail->Body = "<i>Cuerpo del correo en HTML</i>";
$mail->AltBody = "Esta es la versión de texto simple del contenido del correo electrónico";

try {
    $mail->send();
    echo "El mensaje ha sido enviado correctamente";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
```

El código y los comentarios deben ser lo suficientemente claros para explicar todo lo que está pasando.

#### Enviar correos electrónicos en PHP con archivos adjuntos
Aquí tienes un ejemplo de cómo enviar un correo electrónico con archivos adjuntos usando PHPMailer:

```
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

$mail = new PHPMailer;

$mail->From = "de@tudominio.com";
$mail->FromName = "Nombre completo";

$mail->addAddress("destinatario1@ejemplo.com", "Nombre del destinatario");

//Proporciona la ruta del archivo y el nombre de los archivos adjuntos
$mail->addAttachment("archivo.txt", "Archivo.txt");        
$mail->addAttachment("imagen/perfil.png"); //El nombre del archivo es opcional

$mail->isHTML(true);

$mail->Subject = "Texto del asunto";
$mail->Body = "<i>Cuerpo del correo en HTML</i>";
$mail->AltBody = "Esta es la versión de texto simple del contenido del correo electrónico";

try {
    $mail->send();
    echo "El mensaje ha sido enviado correctamente";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
```

Aquí, estamos adjuntando dos archivos: `archivo.txt`, que reside en el mismo directorio que el script, e `imágenes/perfil.png`, que reside en el directorio de imágenes del directorio del script.

Para agregar archivos adjuntos al correo electrónico, **sólo tenemos que llamar a la función `addAttachment()` del objeto PHPMailer** pasando la ruta del archivo como parámetro. Para adjuntar varios archivos, necesitamos llamarla varias veces.

#### Solución de problemas
En nuestros dos ejemplos, **usamos la clase PHPMailer’s Exception para la depuración**, así que cualquier error que se arroje nos ayudará a depurar cualquier problema que pueda ocurrir. También añadimos el parámetro true al constructor de PHPMailer, para obtener excepciones de mayor nivel y más descriptivas.

Dependiendo del sistema que utilicemos, probablemente el error más frecuente que veremos estará relacionado con la ejecución de la función `mail()` en segundo plano:

```
Mailer Error: Could not instantiate mail function.
```

Si necesitamos más detalles sobre el error, también podemos añadir algo como esto a la cláusula de captura:

```
print_r(error_get_last());
```

Normalmente, el problema con la función de correo estará relacionado con la falta de configuración del servidor de correo, en cuyo caso la función `error_get_last()` devolverá algo como esto:

```
Array (
    [type] => 2
    [message] => mail(): Failed to connect to mailserver at "localhost" port 25, verify your "SMTP" and "smtp_port" setting in php.ini or use ini_set()
    [file] => OUR_PATH \vendor\phpmailer\phpmailer\src\PHPMailer.php
    [line] => 863
)
```

Este es el problema con el que probablemente nos encontraremos más a menudo, y podemos resolverlo fácilmente usando SMTP.

### Visualización de mensajes de error localizados

`$mail->ErrorInfo` puede devolver mensajes de error en 43 idiomas diferentes.

Para mostrar los mensajes de error en un idioma diferente, copia el directorio del idioma del código fuente de PHPMailer al directorio del proyecto.

Para devolver los mensajes de error en español, por ejemplo, pon el objeto PHPMailer en el idioma español usando la siguiente llamada al método:

```
$mail->setLanguage("es");
```

También puedes añadir tus propios archivos de idioma al directorio de idiomas.

#### Uso de SMTP (Enviar correos electrónicos en PHP)

Puedes usar el servidor de correo de otro host para enviar el correo electrónico, pero para esto primero necesitas tener una autenticación. Por ejemplo, para enviar un correo electrónico desde el servidor de correo de Gmail, necesitas tener una cuenta de Gmail.

SMTP es un protocolo utilizado por los clientes de correo para enviar una solicitud de envío de correo electrónico a un servidor de correo. Una vez que el servidor de correo verifica el correo electrónico, lo envía al servidor de correo de destino.

A continuación, se muestra un ejemplo de envío de un correo electrónico desde el servidor de correo de Gmail desde tu dominio. No necesitas un servidor de correo local para ejecutar el código. Utilizaremos el protocolo SMTP:

```
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

$mail = new PHPMailer(true);

//Habilitar la depuración de SMTP.
$mail->SMTPDebug = 3;                               
//Configurar PHPMailer para usar SMTP.
$mail->isSMTP();            
//Configurar el nombre de host SMTP                          
$mail->Host = "smtp.gmail.com";
//Pon esto en true si el host SMTP requiere autenticación para enviar el correo electrónico
$mail->SMTPAuth = true;                          
//Proporciona el nombre de usuario y la contraseña     
$mail->Username = "nombre@gmail.com";                 
$mail->Password = "super_contraseña_secreta";                           
//Si el SMTP requiere una encriptación TLS, entonces configúralo
$mail->SMTPSecure = "tls";                           
//Configurar el puerto TCP para conectarse a
$mail->Port = 587;                                   

$mail->From = "nombre@gmail.com";
$mail->FromName = "Nombre completo";

$mail->addAddress("nombre@ejemplo.com", "Nombre del destinatario");

$mail->isHTML(true);

$mail->Subject = "Texto del asunto";
$mail->Body = "<i>Cuerpo del correo en HTML</i>";
$mail->AltBody = "Esta es la versión de texto simple del contenido del correo electrónico";

try {
    $mail->send();
    echo "El mensaje ha sido enviado correctamente";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
```

**Gmail requiere la encriptación TLS sobre SMTP**, por lo que la configuramos de acuerdo a ello. Antes de enviar a través de SMTP, debes averiguar el nombre de host, el número de puerto, el tipo de cifrado, si es necesario, y si se requiere autenticación, también necesitas el nombre de usuario y la contraseña. Ten en cuenta que tener la autenticación de dos factores habilitada en Gmail no te permitirá utilizar su SMTP con el nombre de usuario y la contraseña. En su lugar, se requerirá una configuración adicional.

Una gran ventaja de utilizar el SMTP remoto sobre el correo local es que si utilizas la función `mail()` de PHP para enviar correo electrónico con el dominio de la dirección «De» configurado a cualquier otra cosa que no sea el nombre de dominio local (nombre del servidor), entonces los filtros de ataque del servidor de correo del destinatario lo marcarán como spam. Por ejemplo, si se envía un correo electrónico desde un servidor con el nombre de host real ejemplo.com con la dirección del remitente nombre@gmail.com a name@yahoo.com, entonces los servidores de Yahoo lo marcarán como spam o mostrarán un mensaje al usuario para que no confíe en el correo electrónico porque el origen del correo es ejemplo.com y, sin embargo, se presenta como si proviniera de gmail.com. Aunque seas el dueño de nombre@gmail.com, no hay forma de que Yahoo lo descubra.

#### Recuperación de correos electrónicos usando POP3

PHPMailer también permite la verificación de POP antes de SMTP para enviar correos electrónicos. En otras palabras, puedes autenticarte usando POP y enviar correos electrónicos usando SMTP. Lamentablemente, PHPMailer no soporta la recuperación de correos electrónicos de servidores de correo usando el protocolo POP3. Está limitado a sólo enviar correos electrónicos.

#### Conclusión

Si eres un desarrollador de PHP, hay pocas posibilidades de evitar tener que enviar correos electrónicos en PHP programáticamente. Aunque puedes optar por servicios de terceros como **Mandrill o SendGrid**, a veces eso no es una opción, y menos aún por tu propia biblioteca de envío de correo electrónico. Ahí es donde PHPMailer y sus alternativas (Zend Mail, Swift Mailer, etc.) entran en juego.

Puedes conocer las APIs de esta biblioteca en el wiki del repositorio, o en la [documentación oficial](http://phpmailer.github.io/PHPMailer/).