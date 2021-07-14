'use strict';

const ACTIVE_CLASS = 'active';

function titleClickHandler(event){
  event.preventDefault();
  const activeLinks = document.querySelectorAll('.titles a.' + ACTIVE_CLASS);

  for(let activeLink of activeLinks){
    activeLink.classList.remove(ACTIVE_CLASS);
  }

  const clickedElement = this;
  clickedElement.classList.add(ACTIVE_CLASS);

  const activeArticles = document.querySelectorAll('.posts .post.' + ACTIVE_CLASS);

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove(ACTIVE_CLASS);
  }

  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);

  targetArticle.classList.add(ACTIVE_CLASS);
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}