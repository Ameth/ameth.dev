---
title: "Aplicar estilos solo a las viñetas de listas ordenadas con CSS"
date: "2023-01-22"
description: "Aplicar estilos solo a las viñetas de listas ordenadas con CSS"
---

Para aplicar el estilo de letra negrita solo al número de una lista ordenada HTML, puedes utilizar la propiedad CSS `list-style-type` y establecerla en `none`. Luego, puedes agregar un pseudo-elemento `::before` al elemento `li` y aplicar el estilo de letra negrita a ese pseudo-elemento.

Aquí hay un ejemplo de código CSS que muestra cómo lograr esto:

```css
ol {
  list-style-type: none;
}

li::before {
  content: counter(list-item) ". ";
  font-weight: bold;
}
```

En este ejemplo, establecemos la propiedad `list-style-type` en `none` para la lista ordenada (`<ol>`). Luego, usamos el pseudo-elemento `::before` para agregar un punto y espacio después del número de la lista, y aplicamos el estilo de letra negrita al número de la lista utilizando la propiedad `font-weight`. La propiedad `content` se utiliza para agregar el número de la lista.

Puedes probar este código en una página HTML con una lista ordenada:

```html
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>
```

Este código CSS aplicará letra negrita solo al número de cada elemento de la lista, sin afectar el texto del elemento.

Ahora, tambien puedes aplicar el estilo solo al marcador de una lista desordenada HTML y, por ejemplo, aplicar un color diferente al marcador. Puedes utilizar la propiedad CSS `list-style` para personalizar el aspecto del marcador. Luego, puedes agregar un pseudo-elemento `::before` al elemento `li` y aplicar el estilo de letra negrita a ese pseudo-elemento.

Aquí hay un ejemplo de código CSS que muestra cómo lograr esto:

```css
ul {
  list-style: none;
}

li::before {
  content: "\2022";
  color: blue;
  margin-right: 0.5em;
}
```

En este ejemplo, establecemos la propiedad `list-style` en `none` para la lista desordenada (`<ul>`). Luego, usamos el pseudo-elemento `::before` para agregar un círculo como marcador de la lista. La propiedad `content` se utiliza para agregar el marcador a cada elemento de la lista. Además, utilizamos la propiedad `color` para establecer el color del marcador y la propiedad `margin-right` para separar el marcador del texto del elemento.

Puedes probar este código en una página HTML con una lista desordenada:

```html
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ul>
```

Este código CSS aplicará solo al marcador de cada elemento de la lista y cambiará el color del marcador a azul, sin afectar el texto del elemento.

Si te ha gustado este artículo, te recomiento leer [Texto con degradado de color en CSS](texto-degradado)