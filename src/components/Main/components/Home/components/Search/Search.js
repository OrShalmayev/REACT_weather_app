import React from 'react';
import './Search.scss';

/**
* Context
**/
import {WeatherContext} from '../../../../../../context/context';

const Search = () => {
  const s = React.useRef('');
  const {dispatchWeather, autoComplete, weather} = React.useContext(WeatherContext);

  const [searchResult, dispatch] = React.useReducer(function(searchResult, action){
    if ( action.type==='SEARCH' ) {
      console.log('Component:Search.js',action)
      return action.payload;

    } else if ( action.type==='CHOOSED_CITY' ) {
      dispatchWeather({
        type: 'select_city', 
        data: {...action.cityPayload}
      });
      s.current.value = '';
      s.current.placeholder = '';

      return null;

    } else if ( action.type==='CLEAR_SEARCH' ) {
      s.current.placeholder = '3 characters required';
      return null;
    } 
  }, null);
  
  const filterData = (data, value) => data.filter( obj => obj.LocalizedName.toLowerCase().includes(value.toLowerCase()) ); 
  
  React.useEffect( () => {
    // Effect when our state is changed
  },[searchResult])

  function handleChange() { 
    if(s.current.value.length > 2){
      // Make API Request
      fetch(`${window.location.origin}/database/search.json`)
      .then( res => res.json())
      .then(data => {
        // console.log(data)
        let filtered = filterData(data, s.current.value);

        console.log('Component:Search.js',filtered)

        // if we dont have the city in our saved database then go fetch from the api
        if( !filtered.length ){
          console.log('Component:Search.js','search not found in our database')
          console.log('Component:Search.js',autoComplete(s.current.value));
          fetch(autoComplete(s.current.value))
            .then( res => res.json())
            .then(dataFromAPI => {
              console.log('dataFromAPI:',dataFromAPI)
              if ( dataFromAPI.length ) {
                dispatch({
                  type: 'SEARCH', 
                  payload: dataFromAPI
                });
              } else {
                console.log('Nothing found wadataFromAPI:',dataFromAPI)
                // results not found..
                dispatch({
                  type: 'CLEAR_SEARCH', 
                });
              }
            });//// END fetch(autoComplete(s.current.value))
        } else {
          // search result found in our database then give it to the user
          dispatch({
            type: 'SEARCH', 
            payload: filtered
          });
        }
      })////END fetch(`${window.location.origin}/database/search.json`)
      .catch(e=>console.warn(e))

    } else {
      dispatch({
        type: 'CLEAR_SEARCH', 
      });
    }
  }

  /**
   * handleClick
   */
  const handleClick = ({ target }, selectedCity, key, searched) => {
    dispatch({
      type: 'CHOOSED_CITY',
      cityPayload: {
        selectedCity,
        key,
        searched
      }
    })
    console.log('Component:Search.js', weather);
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
        {searchResult && searchResult.length && 
          <div className="Search__results">
            {searchResult.map(c=> <div onClick={(evnt)=>handleClick(evnt, c.LocalizedName, c.Key, s.current.value)} key={c.Key} className="Search__results-item">{c.LocalizedName}</div>)}
          </div>
        }
      </div>
    </React.Fragment>
  );
}

export default Search;
