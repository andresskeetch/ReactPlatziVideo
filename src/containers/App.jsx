import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist && initialState.mylist.lenght > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title='Categorias'>
        <Carousel>
          {initialState.trends && initialState.trends.map((item) => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return (<CarouselItem key={item.id} {...item} />);
          })}
        </Carousel>
      </Categories>
      <Categories title='Mi Lista 2'>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
