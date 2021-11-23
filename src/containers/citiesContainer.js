import { useSelector, useDispatch } from 'react-redux';
import { makeApiCall, moveToTop, setCityObject,setText } from '../redux/actions/textAction';
import React, { useEffect, useState } from 'react';
import axios from "axios";
// import PageChange from './components/pagination';
import CityCard from './components/cityCard';
import './components/style.css';
import {API_KEY} from "../app/constants"



const createCardsForAllCities = (cities)=>{
    return cities.cityObjects.map(
        (city)=>{
            console.log("testing " + city.name)
            return (
                <div key={city.name}>
                    <CityCard cityDetails={city} />
                    <hr/><br/>
                </div>
            )
        });
}


const CitiesContainer = () =>{

    const city = useSelector(state => state.searchCity.text)
    const cities = useSelector(state => state.allCities)
    const canCallApi = useSelector(state => state.apiCallable)

    const dispatch = useDispatch();
    const [state, setState] = useState()


    if (state !== city){
        console.log("state changed for "+ city)
        for (let index = 0; index < cities.cityObjects.length; index++) {
            if (city === cities.cityObjects[index].name){
                console.log("=======found==============")
                dispatch(moveToTop(cities.cityObjects[index]))
                dispatch(makeApiCall(false))
                dispatch(setText(""))
                break;
            }
        }
        setState(city)
    }

    const configureApiObjectToStateObject= (apiObject) => {
        const {temp, pressure, humidity} = apiObject.main
        return {
            name: city,
            temp: temp,
            pressure: pressure,
            humidity: humidity
        }
    }

       useEffect(() => {
            console.log("get api called")
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
            if((city!=="") && (canCallApi.check===true))
            {
                axios.get(url)
                .then(
                    (response) => {
                    dispatch(setCityObject(configureApiObjectToStateObject(response.data.list[0])))               
                    console.log("api response successful");
                    }
                ).catch(error => {
                    if (error) {
                      alert("city does not exists")
                    }
            
                  });;
                dispatch(setText(""))
            }
        }, [state]);
    
    if (cities.cityObjects.length<1)
        return <h1>Find Weather by City Name</h1>

    return (
        <div>
            {createCardsForAllCities(cities)}
        </div>
    )
}

export default CitiesContainer;
