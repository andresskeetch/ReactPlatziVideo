import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';
const Player = (props) => {
  const { id } = props.match.params;
  // eslint-disable-next-line react/destructuring-assignment
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);
  const handleBack = () => {
    props.history.goBack();
  };
  return hasPlaying ? (
    <div className='Player'>
      <video controls>
        <source src={props.playing.source} type='vide/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={handleBack}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  }
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
