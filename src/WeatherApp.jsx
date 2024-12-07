// import React, { useState } from 'react'
// import Search from './Search'
// import { Button } from '@mui/material'
// import InfoBox from './InfoBox'

// const WeatherApp = () => {

//     const [weatherInfo, setWeatherInfo] = useState({
//         city:"Hyd",       
//         feelsLike: 20.06,
//         grndLevel: 950,
//         humidity: 88,
//         temp: 19.73,
//         tempMax: 19.73,
//         tempMin: 19.73,
//         weather : "mist",
//         })

//         let updateInfo = (result) =>{
//             setWeatherInfo(result);
//         }

//   return (
//     <div>
//         <h1>weather app</h1>
//       <Search updateInfo={updateInfo}></Search>
//       <Button></Button>
//       <InfoBox info={weatherInfo}></InfoBox>
//     </div>
//   )
// }

// export default WeatherApp


// import React, { useState } from 'react';

// import Search from './Search';
// import Button from '@mui/material/Button';
// import InfoBox from './InfoBox';

// const WeatherApp = () => {
//   const [weatherInfo, setWeatherInfo] = useState({
//     city: "Hyd",
//     feelsLike: 20.06,
//     grndLevel: 950,
//     humidity: 88,
//     temp: 19.73,
//     tempMax: 19.73,
//     tempMin: 19.73,
//     weather: "mist",
//   });

//   const updateInfo = (result) => {
//     setWeatherInfo(result);
//   };

//   return (
//     <div className="App">
//       <h1 className="text-3xl font-bold mb-4">Weather App</h1>
//       <Search updateInfo={updateInfo} />
      
//       <InfoBox info={weatherInfo} />
//     </div>
//   );
// };

// export default WeatherApp;



import React, { useState } from 'react';

import Search from './Search';
import InfoBox from './InfoBox';
import './WeatherApp.css'; // Import the CSS file

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Hyd",
    feelsLike: 20.06,
    grndLevel: 950,
    humidity: 88,
    temp: 19.73,
    tempMax: 19.73,
    tempMin: 19.73,
    weather: "mist",
  });

  const updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>
      <Search updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
