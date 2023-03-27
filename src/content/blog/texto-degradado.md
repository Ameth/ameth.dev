---
title: "Texto con degradado de color en CSS"
date: "2022-12-22"
description: "Texto con degradado de color en CSS"
---

#### Como crear un texto con degradado de color en CSS.

Los desarrolladores web conocen la lucha que todos hemos tenido para mejorar las fuentes en la web. Ya se trate del tiempo de carga, de estrategias extrañas para usar fuentes personalizadas, o simplemente de encontrar la fuente correcta, embellecer el texto en una pagina web nunca ha sido fácil.

Eso me hizo pensar en **fuentes y degradados CSS**, ya que los degradados también tenían una difícil introducción a la web. Veamos cómo podemos usar **fuentes degradadas con sólo CSS**!

Para mostrar un degradado para una fuente dada, en lugar de un color sólido, necesitará usar algunas propiedades prefijadas de la vieja escuela `-webkit-`:

```css
.texto-degradado {
  /* standard gradient background */
  background: linear-gradient(red, blue);

  /* clip informático */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Aquí te dejo como se vería el código anterior:

![](/assets/blog/ejemplo-de-texto-con-degradado-en-css.jpg)



Esta mezcla de CSS específico de `-webkit-` y fondo de degradado general se descubrió hace diez años, pero sigue siendo la mejor manera de **conseguir un fondo de CSS puro, incluso con fuentes personalizadas**. Ten en cuenta que a pesar del prefijo `-webkit`, Firefox sigue renderizando correctamente la fuente de degradado. También ten en cuenta que la eliminación del prefijo rompe el renderizado correcto.

Con todo lo complicado que pueden llegar a ser las fuentes, es increíble que tengamos un hack CSS bastante simple para lograr texto con degradado de color en CSS. Es una pena que evitar el prefijo `-webkit` rompa la funcionalidad, pero como siempre digo **¡bienvenido al mundo de CSS!**

Si te ha gustado este artículo, te recomiento leer [Aplicar estilos solo a las viñetas de listas ordenadas con CSS](estilos-listas-css)