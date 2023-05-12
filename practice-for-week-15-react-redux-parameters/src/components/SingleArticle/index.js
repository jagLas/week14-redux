import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './SingleArticle.css';

const SingleArticle = ({articles}) => {
  const {id} = useParams()
  const {title, imageUrl, body} = articles.find(article => {
    return article.id === id
  })

  return (
    <div className='singleArticle'>
      <h1>{title}</h1>
      <img
        src={imageUrl}
        alt='home'
      />
      <p>
        {body}
      </p>
    </div>
  );
};

export default SingleArticle;