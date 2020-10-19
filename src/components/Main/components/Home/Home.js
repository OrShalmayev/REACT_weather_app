import React from 'react';
import './Home.scss';

// Components
import Search from './components/Search/Search';

const Home = () => {

  React.useEffect(()=>{

  }, [])

  return (
  <section className="Home">
    {/* SEARCH */}
    <Search />
    {/* CITY SEARCHED FOR */}
    <div className="Home__results">
      {/* TOP */}
      <div className="top">
        <figure className="top__city">
          <img src="" alt="City Image"/>
          <figcaption className="city-name">
            city name
            <span className="city-celsious">38&#8451;</span>
          </figcaption>
        </figure>
        <div className="top__actions">
          <button>Add to Favorites</button>
        </div>
      </div>
      {/* MIDDLE */}
      <div className="middle">
        <h2>Scattered clouds</h2>
      </div>
      {/* BOTTOM */}
      <div className="bottom">
        {/* BOX #1 */}
        <div className="bottom__box">
          <div className="bottom__box-day">Sun</div>
          <div className="bottom__box-degree">38&#8451;</div>
        </div>

      </div>
    </div>
  </section>
  );
} ////END HOME



export default Home;
