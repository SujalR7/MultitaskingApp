import React from 'react';
import './News.css';
const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <h3>{article.title}</h3>
      {article.image_url &&<img src={article.image_url} height="200px" width="200px" alt={article.title} /> }
      <p>{article.description}</p>
      <a href={article.link} target="_blank">Read More</a>
    </div>
  );
};

export default NewsItem;