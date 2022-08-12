import {useState} from "react"
import {useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {Link} from "react-router-dom";

function CountryDetails() {

  const {country} = useParams()

  const [countryDetails, setCountryDetails] = useState(null)

  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getCountryDetails()
  }, [country])

  const getCountryDetails = async () => {
    const response = await axios(`https://ih-countries-api.herokuapp.com/countries/${country}`)

    setCountryDetails(response.data)
    setIsFetching(false)
  }
  
  if(isFetching === true){
    return <h3>...Loading</h3>
  }


  return (

    <div>
      <h2>Country Details</h2>

      <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt="flag" width={200} />

      <p>{countryDetails.name.common}</p>

      <p>Capital: {countryDetails.capital}</p>

      <p>Area: {countryDetails.area} km</p>

      <p>Borders:</p>
        {countryDetails.borders.map((eachBorder)=>{
          return(

            <li><Link to={`/${eachBorder}`}>{eachBorder}</Link> </li>
           
          )

          

      })}
    
    </div>
  )
}

export default CountryDetails