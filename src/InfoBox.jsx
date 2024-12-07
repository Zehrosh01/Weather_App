// // import React from 'react'
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Typography from '@mui/material/Typography';
// // import WbSunnyIcon from '@mui/icons-material/WbSunny';
// // import AcUnitIcon from '@mui/icons-material/AcUnit';
// // import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

// // const InfoBox = ({info}) => {

// //     let IMAGE_URL = "https://images.unsplash.com/photo-1722682956430-5414b76b341d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D";

// //   const HOT_URL = "https://images.unsplash.com/photo-1529348915581-73628f0cf212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHN1bW1lciUyMGhvdHxlbnwwfHwwfHx8MA%3D%3D";
// //   const COLD_URL = "https://images.unsplash.com/photo-1431036101494-66a36de47def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww";
// //   const RAIN_URL = "https://images.unsplash.com/photo-1695647950698-ac25454c8da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxyYWlufGVufDB8fDB8fHww";


// //   return (
// //     <div>
      

// //       <Card sx={{ maxWidth: 345 }}>
// //       <CardMedia
// //         sx={{ height: 140 }}
// //         image={info.humidity > 80 ? RAIN_URL : info.temp > 17 ? HOT_URL : COLD_URL}
// //         title="green iguana"
// //       />
// //       <CardContent>
// //         <Typography gutterBottom variant="h5" component="div">
// //           {info.city}{" "}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 17 ? <WbSunnyIcon/> : <AcUnitIcon/>}
// //         </Typography>
// //         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
// //           <p>Temperature : {info.temp}&deg;C</p>
// //           <p>Humidity : {info.humidity}</p>
// //           <p>Min Temp : {info.tempMin}</p>
// //           <p>Max Temp : {info.tempMax}</p>
// //           <p>The weather is described as {info.weather} feels like {info.feelsLike}</p>
// //         </Typography>
// //       </CardContent>
      
// //     </Card>
// //     </div>
// //   )
// // }

// // export default InfoBox

// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

// const InfoBox = ({ info }) => {
//   // Consider using a separate component or utility function for image logic
//   const getImageURL = () => {
//     if (info.humidity > 80) {
//       return 'https://images.unsplash.com/photo-1695647950698-ac25454c8da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxyYWlufGVufDB8fDB8fHww';
//     } else if (info.temp > 17) {
//       return 'https://images.unsplash.com/photo-1529348915581-73628f0cf212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHN1bW1lciUyMGhvdHxlbnwwfHwwfHx8MA%3D%3D';
//     } else {
//       return 'https://images.unsplash.com/photo-1431036101494-66a36de47def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww';
//     }
//   };

//   return (
//     <div>
//       <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 2 }}>
//         <CardMedia
//           sx={{ height: 140 }}
//           image={getImageURL()}
//           title="Weather Info"
//         />
//         <CardContent sx={{ padding: 2 }}>
//           <Typography gutterBottom variant="h5" component="div">
//             {info.city} {/* Conditionally render weather icon */}
//             {info.humidity > 80 && <ThunderstormIcon sx={{ color: 'primary.main' }} />}
//             {info.temp > 17 && <WbSunnyIcon sx={{ color: 'warning.main' }} />}
//             {info.temp <= 17 && <AcUnitIcon sx={{ color: 'secondary.main' }} />}
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
//             <p>Temperature: {info.temp}&deg;C</p>
//             <p>Humidity: {info.humidity}</p>
//             <p>Min Temp: {info.tempMin}</p>
//             <p>Max Temp: {info.tempMax}</p>
//             <p>Weather: {info.weather} feels like {info.feelsLike}</p>
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default InfoBox;

// import React from 'react';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

// const InfoBox = ({ info }) => {
//   const getImageURL = () => {
//     if (info.humidity > 80) {
//       return 'https://images.unsplash.com/photo-1695647950698-ac25454c8da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxyYWlufGVufDB8fDB8fHww';
//     } else if (info.temp > 17) {
//       return 'https://images.unsplash.com/photo-1529348915581-73628f0cf212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHN1bW1lciUyMGhvdHxlbnwwfHwwfHx8MA%3D%D';
//     } else {
//       return 'https://images.unsplash.com/photo-1431036101494-66a36de47def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww';
//     }
//   };

//   return (
//     <div>
//       <Card
//         sx={{
//           maxWidth: 345,
//           borderRadius: 4,
//           boxShadow: 3,
//           transition: 'transform 0.3s ease-in-out',
//           '&:hover': {
//             transform: 'scale(1.02)', // Subtle hover scale
//             boxShadow: 5, // Increased box-shadow on hover
//           },
//         }}
//       >
//         <CardMedia
//           sx={{ height: 140 }}
//           image={getImageURL()}
//           title="Weather Info"
//         />
//         <CardContent sx={{ padding: 2 }}>
//           <Typography gutterBottom variant="h5" component="div">
//             {info.city} {/* Conditionally render weather icon */}
//             {info.humidity > 80 && (
//               <ThunderstormIcon sx={{ color: 'primary.main' }} aria-label="Thunderstorm" />
//             )}
//             {info.temp > 17 && (
//               <WbSunnyIcon sx={{ color: 'warning.main' }} aria-label="Sunny" />
//             )}
//             {info.temp <= 17 && <AcUnitIcon sx={{ color: 'secondary.main' }} aria-label="Cold" />}
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
//             <p>Temperature: {info.temp}&deg;C</p>
//             <p>Humidity: {info.humidity}</p>
//             <p>Min Temp: {info.tempMin}</p>
//             <p>Max Temp: {info.tempMax}</p>
//             <p>Weather: {info.weather} feels like {info.feelsLike}</p>
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default InfoBox;



import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'; // Import the CSS file

const InfoBox = ({ info }) => {
  // Utility function to get the appropriate image URL
  const getImageURL = () => {
    if (info.humidity > 80) {
      return 'https://images.unsplash.com/photo-1695647950698-ac25454c8da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxyYWlufGVufDB8fDB8fHww';
    } else if (info.temp > 17) {
      return 'https://images.unsplash.com/photo-1529348915581-73628f0cf212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHN1bW1lciUyMGhvdHxlbnwwfHwwfHx8MA%3D%3D';
    } else {
      return 'https://images.unsplash.com/photo-1431036101494-66a36de47def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww';
    }
  };

  return (
    <div className="info-box-container">
      <Card className="info-box-card">
        <CardMedia
          className="info-box-media"
          image={getImageURL()}
          title="Weather Info"
        />
        <CardContent className="info-box-content">
          <Typography className="info-box-header">
            {info.city} 
            {info.humidity > 80 && <ThunderstormIcon className="info-box-icon" />}
            {info.temp > 17 && <WbSunnyIcon className="info-box-icon" />}
            {info.temp <= 17 && <AcUnitIcon className="info-box-icon" />}
          </Typography>
          <Typography className="info-box-details">
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}</p>
            <p>Min Temp: {info.tempMin}&deg;C</p>
            <p>Max Temp: {info.tempMax}&deg;C</p>
            <p>Weather: {info.weather} feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;

