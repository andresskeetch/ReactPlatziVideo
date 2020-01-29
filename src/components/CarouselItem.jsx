import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='../assets/static/img1.jpg' alt='People' />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='Play Item' />
        <img src={plusIcon} alt='Plus Item' />
      </div>
      <p className='carousel-item__details--title'>Titulo</p>
      <p className='carousel-item__details--subtitle'>Subtitulo asdasd asdasdasd asdasd asdasdasd</p>
    </div>
  </div>
);

export default CarouselItem;
