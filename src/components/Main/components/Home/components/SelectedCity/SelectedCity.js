import React from 'react';
import PropTypes from 'prop-types';
import './SelectedCity.scss';

const SelectedCity = ({weather}) => {
  console.log('SelectedCity.js: weather',weather);
  
  return (
    <React.Fragment>
      {/* TOP */}
      <div className="top">
        <figure className="top__city">
          <img src="" alt="City Image"/>
          <figcaption className="city-name">
            {weather.SelectedCity && weather.SelectedCity}
            <span className="city-celsious">38&#8451;</span>
          </figcaption>
        </figure>
        <div className="top__actions">
          <button>Add to Favorites</button>
        </div>
      </div>
      {/* MIDDLE */}
      <div className="middle">
        <h2>{weather.SelectedCityData.Headline && weather.SelectedCityData.Headline.text}</h2>
      </div>
      {/* BOTTOM */}
      <div className="bottom">
        {/* BOX # */}
        {weather.SelectedCityData.DailyForecasts && weather.SelectedCityData.DailyForecasts.map((val, index)=>{
          return (
            <div className="bottom__box">
              <div className="bottom__box-date">{new Date(val.Date).toDateString()}</div>
              <div className="bottom__box-degree">{`Minimum Temp: ${val.Temperature.Minimum.Value} ${val.Temperature.Minimum.Unit}`}</div>
              <div className="bottom__box-degree">{`Maximum Temp: ${val.Temperature.Maximum.Value} ${val.Temperature.Maximum.Unit}`}</div>
              <h4>Day:</h4>
              <div className="bottom__box-day">{val.Day.icon}</div>
              <div className="bottom__box-icon">val.Day.IconPhrase</div>
              <hr />
              <h4>Night:</h4>
              <div className="bottom__box-day">{val.Night.icon}</div>
              <div className="bottom__box-icon">val.Night.IconPhrase</div>
            </div>
          )
        })}

      </div>{/* END bottom */}
    </React.Fragment>
  );
}

SelectedCity.propTypes = {};

SelectedCity.defaultProps = {};

export default SelectedCity;
