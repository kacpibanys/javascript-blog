'use strict';

const ACTIVE_CLASS = 'active';

function titleClickHandler(event){
  event.preventDefault();
  
  
  const activeLinks = document.querySelectorAll('.titles a.active');
  const activeLinks = document.querySelectorAll('.titles a.' + ACTIVE_CLASS);

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    activeLink.classList.remove(ACTIVE_CLASS);
  }
  

  const clickedElement = this;
  activeLink.clickedElement.add('active');
  
  
  const activeArticles = document.querySelectorAll('.titles .active');
  clickedElement.classList.add(ACTIVE_CLASS);

  const activeArticles = document.querySelectorAll('.posts .post.' + ACTIVE_CLASS);

  for(let activeArticle of activeArticles){

    activeArticle.classList.remove('active');
    activeArticle.classList.remove(ACTIVE_CLASS);
  }

  
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector');

  
  const targetArticle = querySelector(href);

 
  activeLink.targetArticle.add('active');
  console.log('targetArticle');
  const targetArticle = document.querySelector(articleSelector);

  targetArticle.classList.add(ACTIVE_CLASS);
}

const links = document.querySelectorAll('.titles a');

generateTitleLinks();