import React from 'react';
import './Search.scss';

import {WeatherContext} from '../../../../../../context/context';

const Search = () => {
  const s = React.useRef('');
  const [searchResult, setSearchResult] = React.useState(null);
  const {dispatchWeather, autoComplete, weather} = React.useContext(WeatherContext);
  const filterData = (data, value) => data.filter( obj => obj.LocalizedName.toLowerCase().includes(value.toLowerCase()) ); 
  function handleChange() { 
    if(s.current.value.length > 2){
      // Make API Request
      fetch(`${window.location.origin}/database/search.json`)
      .then( res => res.json())
      .then(data => {
        // console.log(data)
        let filtered = filterData(data, s.current.value);

        console.log(filtered)

        // if we dont have the city in our saved database then go fetch from the api
        if( !filtered.length ){
          console.log('search not found in our database')
          console.log(autoComplete(s.current.value));
          fetch(autoComplete(s.current.value))
            .then( res => res.json())
            .then(dataFromAPI => {
              console.log('dataFromAPI:',dataFromAPI)
              if ( dataFromAPI.length ) {
                setSearchResult(dataFromAPI);
              } else {
                console.log('Nothing found wadataFromAPI:',dataFromAPI)
                // results not found..
              }
            });//// END fetch(autoComplete(s.current.value))
        } else {
          // search result found in our database then give it to the user
          setSearchResult(filtered);
        }
        // data.filter( obj => console.log(obj.LocalizedName,s.current.value, obj.LocalizedName.toLowerCase().includes(s.current.value.toLowerCase())) )
      })////END fetch(`${window.location.origin}/database/search.json`)
      .catch(e=>console.warn(e))

    } else {
      setSearchResult(null);
      s.current.placeholder = '3 characters required';
    }
  }

  /**
   * handleClick
   */
  const handleClick = ({ target }, selectedCity, key, searched) => {
    dispatchWeather({
      type: 'select_city', 
      data: { 
        selectedCity, 
        key, 
        searched 
      } 
    });

    console.log('weather:', weather);
  }

  return (
    <React.Fragment>
      {/* INPUT */}
      <div className="Search">
        <input 
          onChange={()=>handleChange()}
          ref={s}
          className="Search__field" type="text" name="s" placeholder="Search" />
        {/* Search results */}
        {searchResult && 
          <div className="Search__results">
            {searchResult.map(c=> <div onClick={(evnt)=>handleClick(evnt, c.LocalizedName, c.Key, s.current.value)} key={c.Key} className="Search__results-item">{c.LocalizedName}</div>)}
          </div>
        }

      </div>
    </React.Fragment>
  );
}

export default Search;
