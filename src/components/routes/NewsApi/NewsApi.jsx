import React, { useEffect, useState } from "react";
import './NewsApi.css';

const NewsApi = () => {
  let [news, setNews] = useState([]);
  let source =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=b80a342c057c4d8c9a644ed182888d6c"

  useEffect(() => {
    let worldNews = async () => {
      let News = await fetch(source);
      News = await News.json();
      let data = News.articles;
      setNews(data);
      console.log(data);
    };
    worldNews();
  },[source]);
  return (
    <div className="newscard__page">
      
      {news.map(({ source, urlToImage, content, title, description }, index) => {
        
        return (
          <div key={index} className="newscard">
            <header className="newscard__header">
              <h2>{source.name}</h2>
            </header>
            <div className="newscard__main-1">
              <div className="newscard__img">
                <img
                  src={urlToImage}
                  height={"150px"}
                  alt="img"
                />
              </div>
              <div className="newscard__content">
                <h4>content</h4>
                <p>{content}</p>
              </div>
            </div>
            <div className="newscard__main-2">
              <div className="newscard__title">
                <h3>title</h3>
                <p>{title}
                </p>
              </div>
              <div className="newscard__description">
                <h3>description</h3>
                <p>{description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsApi;
