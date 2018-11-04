import React from 'react';

import {
  NewsArticle,
  NewsArticleContentHeading1Element,
  NewsArticleContentParagraphElement
} from 'lib/api/news';

export default function(props: { article: NewsArticle }) {
  const { article } = props;

  return (
    <article className="m-news-article">
      {article.content.map((content, index) => {
         switch (content.nodeType) {
           case 'heading-1':
             return <h1 key={index}>{(content as NewsArticleContentHeading1Element).content[0].value}</h1>;
           case 'paragraph':
             return <p key={index}>{(content as NewsArticleContentParagraphElement).content[0].value}</p>;
         }
      })}
    </article>
  );
}
