import './card.scss';
import {Link} from 'react-router-dom';



const Card = () => {
  return (
    <div className='card mt-4'>
      <img src={""} alt={""} className='card-img-top' />
      <div className="card-body">
        <h5 className="card-title">React JS</h5>
        <Link to={'profile/' + 'react'} className='btn btn-primary'>OPEN</Link>
      </div>
    </div>
  );
};

export default Card;