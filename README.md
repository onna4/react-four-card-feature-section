# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![React four card feature section project screenshot](/four-card-feature-section-master/react-four-card-feature-section.png?raw=true "Project screenshot")


### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/react-four-card-feature-section-_xpEXCR6Iw)
- Live Site URL: [live site URL](https://onna4.github.io/react-four-card-feature-section)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

In this project I learned to use props to style my components by adding different className for each item in my array of data.

```jsx
function Card(props) {
  return (
    <article className={`card ${props.cardType}`} >
      <h1 className='cardHead'>{props.heading}</h1>
      <p className='paragraph'>{props.paragraph}</p>
      <img src={props.image} alt={props.alt} />
    </article>
  )
}
```
```css
.karma {
  border-top: 4px solid var(--Orange);
}
```
```js
{
        heading: "Karma" ,
        paragraph: "Regularly evaluates our talent to ensure quality",
        image: "images/icon-karma.svg",
        alt: "karma icon",
        cardType: "karma"
    }
```

## Author

- Frontend Mentor - [@onna4](https://www.frontendmentor.io/profile/onna4)
- LinkedIn - [@Omnia Abdelwahab](https://www.linkedin.com/in/omnia-abdelwahab-170306249)

## Acknowledgments

I got help from the Freecodecamp forum for using props to add the classNames for each item in my array of data.
