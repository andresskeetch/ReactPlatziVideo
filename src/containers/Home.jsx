import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mis Favoritos'>
          <Carousel>
            {myList && myList.map((item) => {
            // eslint-disable-next-line react/jsx-props-no-spreading
              return (<CarouselItem isList key={item.id} {...item} />);
            })}
          </Carousel>
        </Categories>
      )}
      <Categories title='Categorias'>
        <Carousel>
          {trends && trends.map((item) => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return (<CarouselItem key={item.id} {...item} />);
          })}
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          {originals && originals.map((item) => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return (<CarouselItem key={item.id} {...item} />);
          })}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
