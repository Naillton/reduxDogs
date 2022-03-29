import React from "react";
import { connect } from 'react-redux';
import { fetchDog } from '../src/redux/reducer';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading</p>
    : (
      <div className="container" style={{ width: 500}}>
        <button
          style={{ display: 'block' }}
          onClick={fetchDog}
          type="button"
        >
          Novo doguinho
        </button>
        <img style={{ width: '100%' }} src={src} alt="dog" />
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching});

const mapDispatchProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchProps)(App);