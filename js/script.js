'use strict';

function titleClickHandler(event){
  event.preventDefault();
  console.log(event);

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  
  const clickedElement = this;
  activeLink.clickedElement.add('active');
  console.log('clickedElement:', clickedElement);
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.titles .active');

  for(let activeArticle of activeArticles){
    
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector');

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = querySelector(href);

  /* add class 'active' to the correct article */
  
  activeLink.targetArticle.add('active');
  console.log('targetArticle');

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}