import { useEffect } from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

import axios from "axios";

function CountriesList() {

    const [ allCountries, setAllCountries] = useState([])

    const [ isFetching, setIsFetching] = useState(true)

    useEffect(() =>{
        getAllCountries();
    }, [])

    const getAllCountries = async () => {

        const response = await axios("https://ih-countries-api.herokuapp.com/countries")
        console.log(response.data)
        setAllCountries(response.data)
        setIsFetching(false)
    }

    if(isFetching === true){
        return <h3>...Loading</h3>
    }




  return (
    <div>

        <h1>Countries List</h1>


        {allCountries.map((eachCountry) =>{
            return (

                <div key={eachCountry.alpha3Code}>

                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="flag" width={100} /> 
                    <br />
                    <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>


                </div>


            )
        })}
        {/* <div class="container">
        
            <div class="row">
                <div className="col-5" style="max-height: 90vh; overflow: scroll">
                        <div className="list-group">
                        <a className="list-group-item list-group-item-action" href="/ABW"
                            >🇦🇼 Aruba</a>
                        </div>
                </div>
            </div>

        </div> */}
    </div>
  )
}

export default CountriesList