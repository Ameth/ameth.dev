---
title: "PHP 8: Nuevas características y actualizaciones"
date: "2023-01-18"
description: "Todo lo nuevo que trae la nueva versión de PHP"
---

¡[PHP 8](https://www.php.net/releases/8.0/es.php) ya está disponible! 

PHP **es un lenguaje de programación de código abierto potente y ampliamente accesible** que se utiliza principalmente en el desarrollo de sitios web. A pesar de que constantemente vemos un aumento en todo tipo de tecnologías y software para la creación de sitios web, PHP sigue siendo uno de los lenguajes más utilizados, alimentando un asombroso número de sitios web. La nueva versión, PHP 8, promete aportar aún más potencia y velocidad permitiendo resultados aún mejores.

A diferencia de JavaScript, que es del lado del cliente, **PHP es del lado del servidor**. Cuando el navegador solicita información al servidor, éste ejecuta el código y envía el resultado al cliente. El navegador entonces usa esta información para crear una página web. PHP es relativamente fácil de aprender, rápido y compatible con casi todos los navegadores, lo que lo convierte en una poderosa herramienta para desarrolladores de todo tipo.

### ¿Cuáles son las mejoras y características de PHP 8?
PHP 8 se puso en marcha el **26 de noviembre del 2020** e introducirá muchas mejoras en la velocidad, seguridad y limpieza del código:

#### Ejecución más rápida del código
PHP 8 es la primera versión de PHP que **tiene un compilador (JIT)**, que cachea tu código interpretado y genera un código máquina como salida. El JIT, o compilador _just in time_ promete mejoras de velocidad para tareas y algoritmos complejos y abre nuevas oportunidades para que el lenguaje PHP amplíe su alcance y aplicaciones.

#### Código de mayor calidad
Una de las principales diferencias que notará con PHP 8 es que muchas de las advertencias y avisos que eran difíciles de captar ahora **se clasifican como excepciones de código o errores**, que pueden ser capturados y registrados. Es posible que debido a esta actualización, muchos problemas que permanecían ocultos como avisos con las versiones anteriores de PHP ahora salgan a la superficie.

#### Código más limpio y corto
Algunos de los nuevos elementos, como el operador de seguridad nula, mejoran enormemente la legibilidad del código, haciéndolo más corto y ordenado. El operador de seguridad nula proporciona una funcionalidad similar a la de la coalescencia nula, **pero también soporta llamadas a métodos**. En lugar de anidar varias declaraciones `if`, se puede utilizar el operador `null` para escribirlas todas en una sola línea de código.

#### La tendencia del _Union Type_
En versiones anteriores a PHP 8.0, sólo se podía declarar un único tipo para las propiedades, parámetros y tipos de retorno. En esta última versión, hay una característica llamada **_union types_** que es **una colección de dos o más tipos** que indican que cualquiera de ellos puede ser usado. Un union type declara esencialmente una condición ``OR`` para múltiples tipos en la declaración de tipo de argumento, tipo de retorno o tipo de propiedad.

#### Versión de PHP8 en pruebas
La versión candidata a la liberación ha estado disponible para ser probada desde hace un tiempo. La mayoría de las empresas de alojamiento de sitios web de calidad ya deberían tener una opción para que los desarrolladores la prueben en su plataforma. Dado que las versiones principales suelen incluir cambios que podrían romper la compatibilidad con versiones anteriores, **es mejor probar la versión candidata lo antes posible** y preparar el código si desea obtener todos los beneficios de la última actualización.

Mantenerse al día con las últimas versiones de PHP es esencial si quiere tener un código rápido y seguro. PHP 8 es una actualización importante y muy esperada, pero antes de actualizarla, se recomienda encarecidamente probarla primero en una versión de prueba de su sitio web, para corregir cualquier incompatibilidad o error de antemano.

Si te ha gustado este artículo, te recomiento leer [cómo enviar correos electrónicos en PHP con PHPMailer](php-mailer)