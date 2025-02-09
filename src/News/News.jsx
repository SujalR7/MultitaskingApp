import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
//   const apiKey ="6f844d4b3f1f49fcbbd9f43fd75162fb"; // Replace with your actual API key
  const apiUrl ='https://newsdata.io/api/1/news?apikey=pub_68548405d00600c144af8f1092028c51afdd4&q=technology&language=en&category=technology'; 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data.results);
        setArticles(response.data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
        // Handle error, e.g., display an error message
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div>Loading news...</div>;
  }

  return (
    <div className='news-container'>
      {articles.map((article,idx) => (
        <NewsItem key={idx} article={article} /> // Key is important for React lists
      ))}
    </div>
  );
};

export default News;