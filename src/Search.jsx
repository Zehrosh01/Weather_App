// import React, { useState } from 'react'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import { Info } from '@mui/icons-material';

// const Search = ({updateInfo}) => {

//     let [city, setCity] = useState("");
//     let [error, setError] = useState(false);

//     const API_URL = "https://api.openweathermap.org/data/2.5/weather";

//     const API_KEY="5b64b11d0bc47807c38dc14ab8f887a6";

//     let getWeatherInfo = async () =>{
//       try{
//         let response  = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//         let jsonResponse = await response.json();
//         console.log(jsonResponse);
//         let result ={
//             city: city,
//             temp: jsonResponse.main.temp,
//             tempMax: jsonResponse.main.temp_max,
//             tempMin: jsonResponse.main.temp_min,
//             feelsLike:jsonResponse.main.feels_like,
//             grndLevel:jsonResponse.main.grnd_level,
//             humidity:jsonResponse.main.humidity,
//             weather: jsonResponse.weather[0].description,
//         }
//         console.log(result);
//         return result;
//       }
      
//       catch(error){
//         throw error;
//       }
        
        
        
//     }

//     let handleChange =(evt)=>{
//         setCity(evt.target.value);
//     }


//     let handleSubmit = async (evt) =>{
//         try{
//           evt.preventDefault();
//         console.log(city);
//         setCity("");
//         let newInfo = await getWeatherInfo();
//         updateInfo(newInfo);
//         }
//         catch(error){
//           setError("No such Place Found In Our Website")
//         }
        
//     }

//   return (


//     <div>
//       <form onSubmit={handleSubmit}>
//       <TextField id="city" label="enter city" variant="outlined" required value={city} onChange={handleChange}/><br /><br />

    
// <Button variant="contained" type='submit'>
//   Send
// </Button>

//     {error && <p>No Such Place Exist!</p>}
//       </form>
//     </div>
//   )
// }

// export default Search


// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import InfoIcon from '@mui/icons-material/Info';

// const Search = ({ updateInfo }) => {
//   const [city, setCity] = useState('');
//   const [error, setError] = useState(false);

//   const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
//   const API_KEY = '5b64b11d0bc47807c38dc14ab8f887a6';

//   const getWeatherInfo = async () => {
//     try {
//       const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       const jsonResponse = await response.json();
//       const result = {
//         city,
//         temp: jsonResponse.main.temp,
//         tempMax: jsonResponse.main.temp_max,
//         tempMin: jsonResponse.main.temp_min,
//         feelsLike: jsonResponse.main.feels_like,
//         grndLevel: jsonResponse.main.grnd_level,
//         humidity: jsonResponse.main.humidity,
//         weather: jsonResponse.weather[0].description,
//       };
//       return result;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   const handleSubmit = async (evt) => {
//     try {
//       evt.preventDefault();
//       setCity('');
//       const newInfo = await getWeatherInfo();
//       updateInfo(newInfo);
//     } catch (error) {
//       setError('No such Place Found In Our Website');
//     }
//   };

//   return (
//     <div className="search-container">
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="Enter City"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//           error={error}
//           helperText={error}
//           className="search-field"
//         />
//         <Button variant="contained" type="submit" endIcon={<SendIcon />}>
//           Search
//         </Button>
//       </form>
//       {error && <p className="error-message">No Such Place Found!</p>}
//     </div>
//   );
// };

// export default Search;


import React, { useState } from 'react';
import './Search.css'; // Import the CSS file

const Search = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5b64b11d0bc47807c38dc14ab8f887a6";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        feelsLike: jsonResponse.main.feels_like,
        grndLevel: jsonResponse.main.grnd_level,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError("No such Place Found In Our Website");
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          id="city"
          className="search-input"
          placeholder="Enter city"
          required
          value={city}
          onChange={handleChange}
        /><br /><br />
        <button type="submit" className="search-button">Send</button>
        {error && <p className="error-message">No Such Place Exists!</p>}
      </form>
    </div>
  );
};

export default Search;

