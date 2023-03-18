---
title: "Mi pimer post en Astro"
date: "2023-01-17"
description: "Primer post para compartir en Astro"
---

## Hola Astro

En Stack Overflow, la comunidad de desarrolladores más grande del mundo, se publican preguntas y respuestas sobre programación. En este post, vamos a ver las 5 preguntas más populares de JavaScript en Stack Overflow.
5. ¿Cómo comprobar que una cadena de texto incluye otra?

Solución: usar el método `String.prototype.includes`.

[https://ameth.dev](https://ameth.dev)

Devuelve un booleano cuando la cadena de texto que se le pasa como argumento es parte de la cadena que lo llama.

Ejemplo:
```
const string = "midudev"
const substring = "midu"

// la mejor
string.includes(substring) // true

// forma antigua
string.indexOf(substring) !== -1 // true
```