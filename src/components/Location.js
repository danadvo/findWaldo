import React from 'react';
import './App.css';

function Location(props){

    var {isLoaded, data} = props.dataState;
    const dataForView = props.dataState.dataForView;

    if(!isLoaded){
        <h1>Looking for Waldo...</h1>
        
        if (setTimeout(()=> {
            <h1>I couldn't find you :( . Instead, here's the Eiffel Tower location...</h1>
        }
        ), 100000);
        return(
            <iframe width="400" height="300" loading="lazy" allowFullScreen frameBorder="0" src= "https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=Eiffel+Tour+France&zoom=15" ></iframe>
        );
    } 

    else {
        const url = "https://www.google.com/maps/embed/v1/place?key="+ props.mapKey +"&" + parseParams(data , props.dataState);
        return (
            <div className="Location">
                <h2>{data.country_name ? "Country: " + data.country_name : "Unfortunately couldn't find your country"}</h2> 
                <h2>{dataForView.city ? "City: " + dataForView.city.substring(1,) : "Unfortunately I could not locate the city"}</h2> 
                <iframe width="400" height="300" loading="lazy" allowFullScreen frameBorder="0" src= {url} ></iframe>
            </div>
        );
    } 
}

function parseParams(data, state){
    if(data){
        state.dataForView = {
            country: data.country_name,
            city: (data.city ? "+" + data.city : ''),
            latitude: data.latitude,
            longitude: data.longitude
        };
    }else{
      <h1>There is a problem</h1>
    }
    let coordinates = state.dataForView.latitude + "," +  state.dataForView.longitude ;
    return "q=" +  coordinates  + "&zoom=15";
  }

export default Location;
