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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  //optTagsListSelector = '.tags.list',
  optAuthorSelector = '.post-author';


function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  /* for each article */
  let html = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const tagsWrapper = article.querySelectorAll(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-'+tag+'">'+tag+'</a></li>';
      /* [NEW] check if this link is NOT already in allTags */

      /* eslint-disable */
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      /* eslint-enable */

      /* add generated code to html variable */
      html = html + linkHTML;
    }
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;

  }
  /* END LOOP: for every article: */
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');
  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';
  /* [NEW] START LOOP  for each tag in allTags: */
  for(let tag in allTags){
    /*[NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += '<li><a href="#tag-'+tag+'">'+tag+'</a></li>' + '(' + allTags[tag] + ')';
  }
  /* [NEW] END LOOP: for each tag in allTags: */
  /* [NEW] add html from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeTaglinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for(let activeTaglink of activeTaglinks){
    /* remove class active */
    activeTaglink.classList.remove(ACTIVE_CLASS);
  }
  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */
  const equalHrefTagLinks = document.querySelectorAll('[href^="#tag-"]');
  /* START LOOP: for each found tag link */
  for(let equalHrefTagLink of equalHrefTagLinks){
    /* add class active */
    equalHrefTagLink.classList.add(ACTIVE_CLASS);
  }
  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const allLinksToTags = document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
  for(let eachLinkToTag of allLinksToTags){
    /* add tagClickHandler as event listener for that link */
    eachLinkToTag.addEventListener('click', tagClickHandler);
  }
  /* END LOOP: for each link */
}

addClickListenersToTags();

function generateAuthors(){
  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
    const authorsWrapper = article.querySelectorAll(optAuthorSelector);
    let html = '';
    const articleAuthors = article.getAttribute('post-author');
    html = html + articleAuthors;
    authorsWrapper.innerHTML = html;

  }
}

generateAuthors();

function addClickListenersToAuthors(){
  const allLinksToAuthors = document.querySelectorAll('.list.authors a');
  console.log('allLinksToAuthors', allLinksToAuthors);
  for(let eachLinkToAuthor of allLinksToAuthors){
    eachLinkToAuthor.addEventListener('click', authorClickHandler);
  }
}
addClickListenersToAuthors();

function authorClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  const allLinksToAuthors = document.querySelectorAll('.list.authors a');
  for(let author of allLinksToAuthors){
    /* remove class active */
    author.classList.remove(ACTIVE_CLASS);
  }

  clickedElement.classList.add(ACTIVE_CLASS);
}
