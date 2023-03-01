import { useEffect, useState } from "react";
import axios from "axios"

const NewsFeed = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {

            
          const options = {
            method: 'GET',
            url: 'https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin',
            params: {max_articles: '10', last_n_hours: '48', top_n_keywords: '10'},
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP2_RAPID_API_KEY,
              'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
            }
          };
        
          axios.request(options).then( (response) => {
            console.log(response.data);
            setArticles(response.data);

          }).catch( (error) => {
            console.error(error);
          });
    });
    
    const articles10 = articles?.slice(0,7)

    return (
      <div className = " news-feed">
            <h2> Crypto NewsFeed </h2>
            {articles10?.map((article, _index) => (
                  <div key={_index}>
                    <a href={article.url}><p>{article.title}</p></a>
                  </div>))}
      </div>
    )
}    
  
  export default NewsFeed;
  