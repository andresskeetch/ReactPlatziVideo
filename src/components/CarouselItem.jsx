import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRating, duration, id,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img 
              src={playIcon}
              alt='Play Item'
            />
          </Link>
          {isList ?
            <img src={removeIcon} onClick={() => handleDeleteFavorite(id)} alt='Remove Item' /> :
            <img src={plusIcon} onClick={handleSetFavorite} alt='Plus Item' />}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};
export default connect(null, mapDispatchToProps)(CarouselItem);
