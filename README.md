# Frontend Mentor - Single price grid component solution

Esta é uma solução para o [Desafio de componente de grade de preço único no Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação construindo projetos realistas.


### Screenshot

[<img src="images/preview-desktop-design.gif" alt="gif da tela inicial do projeto componente de grade de preço único">]

[<img src="images/preview-mobile-design.gif" alt="gif da tela inicial do projeto componente de grade de preço único">]


### Link


- URL do site ativo: [link aqui](https://single-prece-grid-component.netlify.app/)



### Criado com

- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- JavaScript




### O que aprendi

Aprendi a criar um efeito com javaScript no botão.

```js
    let btn =  document.querySelector(".subscription-button");

btn.onmousemove = function(e){
    let x = e.pageX - btn.offsetLeft;
    let y = e.pagey - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px');
    btn.style.setProperty('--eixoY', y + 'px');
}
```

### Desenvolvimento contínuo

Este é apenas mais um de muitos dos projetos de front end que fiz no Frontend Mento. Continuarei fazendo e me desenvolvendo ainda mais. Estou aprendendo cada dia mais, fazendo esses desafios, 