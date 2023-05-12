import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './SingleArticle.css';
import { useEffect, useState } from 'react';

const SingleArticle = ({articles}) => {
  const {id} = useParams()
  const [article, setArticle ] = useState({title:'', imageUrl: '', body: ''});

  useEffect(() => {
    const article = articles.find(article => {
      return article.id === id
    })
    if(article) setArticle(article);
  },[articles, id])


  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt='home'
      />
      <p>
        {article.body}
      </p>
    </div>
  );
};

export default SingleArticle;