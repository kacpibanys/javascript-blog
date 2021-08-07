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



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }

  const titleList = querySelector(optTitleListSelector);
  function clearMessages(){
    titleList.innerHTML = '';
  }
  /* for each article */
  let html = '';
  const articles = querySelectorAll(optArticleSelector);
  for(let article of articles){

    /* get the article id */
    const articleId = article.getAttribute('id');
    /* find the title element */

    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  console.log(links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();
