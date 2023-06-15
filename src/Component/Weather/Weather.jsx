// import React, { useState } from "react";
// import {
//   getWeatherDetails,
//   getWeatherDayForecast,
// } from "../../Shared/Api/WeatherApi";
// import Input from "../../Shared/Input";
// import Button from "../../Shared/Button";
// import img from "./175965.jpg";
// import moment from "moment";
// import Loader from "../../Shared/Loader";
// import { useEffect } from "react";
// import WeatherDetailsBox from "./WeatherDetailsBox";
// import { WeatherCurrentDetails } from "./WeatherCurrentDetails";

// const Weather = () => {
//   const [cityname, setCityName] = useState("");
//   const [checkTempDegree, setCheckTempDegree] = useState("c");
//   const [toggleClass, setToggleClass] = useState(false);
//   const [weatherDetails, setWeatherDetails] = useState({
//     current: {
//       condition: {},
//     },
//     location: {},
//   });
//   const [weatherForecastData, setWeatherForecastData] = useState({
//     location: {},
//     forecast: {
//       forecastday: [
//         {
//           hour: [],
//         },
//       ],
//     },
//     current: {},
//   });

//   const [loader, setLoader] = useState(true);

//   const getCurrentWeatherHandler = async () => {
//     setLoader(true);
//     const weatherDetails = await getWeatherDetails(cityname);
//     const weatherForecast = await getWeatherDayForecast(cityname);
//     const weatherForeCastData = (await weatherForecast.data) || {};
//     const weatherData = (await weatherDetails.data) || {};
//     setWeatherDetails({ ...weatherData });
//     setWeatherForecastData({ ...weatherForeCastData });
//     setLoader(false);
//   };

//   const cityNameHandler = (event) => {
//     setCityName(event.target.value);
//   };

//   const toggleTempHandler = (temp) => {
//     setCheckTempDegree(temp);
//     setToggleClass(!toggleClass); 
//   };

//   useEffect(() => {
//     console.log(weatherForecastData);
//   }, [weatherForecastData]);

//   return (
//     <>
//      <div className=" bg-evening bg-cover bg-center h-screen">
//       {/* search city input */}
//       {/* <div className=" bg-evening bg-cover bg-center h-screen"> */}
//       <div className="md:text-8xl text-center md:p-10  font-serif text-white sm:p-7 sm:text-7xl xs:text-5xl xs:p-7">Weather Forecasting</div>
//       <div className="flex justify-center items-center m-5 p-5">
//         <Input
//           placeholder="Enter city"
//           className="input border border-white rounded input-md sm:input-sm md:input-md xs:input-xs bg-transparent text-gray-light" //to increase the size of input box we can use input-lg
          
//           onChange={cityNameHandler}
//           value={cityname}
//           type="text"
//         />
        
//         {getWeatherDetails.error && (
//           <div className="text-red-500 text-sm">City not found</div>)}
//           {getWeatherDayForecast.error && (
//           <div className="text-red-500 text-sm">City not found</div>)}


//         <div className="p-2">
//           <Button buttonname="search" onClick={getCurrentWeatherHandler} />
//         </div>
//       </div>
//       {/* </div> */}


//        {/* toggle between temp */}
//        {!loader && (
//         <div className="flex justify-center">
//           <label className="label cursor-pointer">
//             <input
//               type="radio"
//               value="f"
//               checked={checkTempDegree === "f"}
//               onChange={() => toggleTempHandler("f")}
//               className="radio-input radio radio-accent p-3 m-2"
//             />
//             <span className="m-2 p-2 label-text md:text-xl sm:text-sm text-gray"> Farenheit</span>
//           </label>
//           <label className="label cursor-pointer">
//             <input
//               type="radio"
//               value="c"
//               checked={checkTempDegree === "c"}
//               onChange={() => toggleTempHandler("c")}
//               className="radio-input radio radio-accent p-3 m-2"
//             />
//             <span className="rm-2 p-2 label-text md:text-xl sm:text-sm text-gray">Centigrade</span>
//           </label>
//         </div>
//       )}

//       {/* weather details box */}
//       {!loader && <WeatherDetailsBox location={weatherDetails.location} />}
//       {/* weather details box */}
//       {!loader && (
//         <WeatherCurrentDetails
//           current={weatherDetails.current}
//           forecast={weatherForecastData.forecast}
//           checkTemp={checkTempDegree}
//         />
//       )}
//      </div>
      
//       {/* {loader && (
//         <div className="justify-center items-center">
//           <div className="text-6xl text-center md:m-4 md:p-10 sm:m-2 sm:p-4 font-serif">
//             Weather Forecasting
//             <Loader loaderType={"progress"} />
//           </div>
//           <div className="flex justify-center items-center">
//             <img src={img} alt="weather" className="opacity-30 h-60 w-auto" />
//           </div>
//         </div>
//       )} */}
//     </>
//   );
// };

// export default Weather;







import React, { useState } from "react";
import {
  getWeatherDetails,
  getWeatherDayForecast,
} from "../../Shared/Api/WeatherApi";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import img from "./175965.jpg";
import moment from "moment";
import Loader from "../../Shared/Loader";
import { useEffect } from "react";
import WeatherDetailsBox from "./WeatherDetailsBox";
import { WeatherCurrentDetails } from "./WeatherCurrentDetails";

const Weather = () => {
  const [cityname, setCityName] = useState("");
  const [checkTempDegree, setCheckTempDegree] = useState("c");
  const [toggleClass, setToggleClass] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState({
    current: {
      condition: {},
    },
    location: {},
  });
  const [weatherForecastData, setWeatherForecastData] = useState({
    location: {},
    forecast: {
      forecastday: [
        {
          hour: [],
        },
      ],
    },
    current: {},
  });

  const [loader, setLoader] = useState(true);
  const [cityNotFoundError, setCityNotFoundError] = useState(false);

  const getCurrentWeatherHandler = async () => {
    setLoader(true);
    setCityNotFoundError(false);

    if (cityname.trim() === "") {
      setCityNotFoundError(true);
      setLoader(false);
      return;
    }

    try {
      const weatherDetailsResponse = await getWeatherDetails(cityname);
      const weatherForecastResponse = await getWeatherDayForecast(cityname);
      const weatherForeCastData = weatherForecastResponse.data || {};
      const weatherData = weatherDetailsResponse.data || {};
      setWeatherDetails({ ...weatherData });
      setWeatherForecastData({ ...weatherForeCastData });
    } catch (error) {
      setCityNotFoundError(true);
    }

    setLoader(false);
  };

  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  };

  const toggleTempHandler = (temp) => {
    setCheckTempDegree(temp);
    setToggleClass(!toggleClass);
  };

  useEffect(() => {
    console.log(weatherForecastData);
  }, [weatherForecastData]);

  return (
    <>
      <div className="bg-evening bg-cover bg-center h-screen">
        <div className="md:text-8xl text-center md:p-10  font-serif text-white sm:p-7 sm:text-7xl xs:text-5xl xs:p-7">
          Weather Forecasting
        </div>
        <div className="flex justify-center items-center m-5 p-5">
          <Input
            placeholder="Enter city"
            className="input border border-white rounded input-md sm:input-sm md:input-md xs:input-xs bg-transparent text-gray-light"
            onChange={cityNameHandler}
            value={cityname}
            type="text"
          />

          <div className="p-2">
            <Button buttonname="search" onClick={getCurrentWeatherHandler} />
          </div>
        </div>

        {!loader && !cityNotFoundError && (
          <div className="flex justify-center">
            <label className="label cursor-pointer">
              <input
                type="radio"
                value="f"
                checked={checkTempDegree === "f"}
                onChange={() => toggleTempHandler("f")}
                className="radio-input radio radio-accent p-3 m-2"
              />
              <span className="m-2 p-2 label-text md:text-xl sm:text-sm text-gray">
                Farenheit
              </span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                value="c"
                checked={checkTempDegree === "c"}
                onChange={() => toggleTempHandler("c")}
                className="radio-input radio radio-accent p-3 m-2"
              />
              <span className="m-2 p-2 label-text md:text-xl sm:text-sm text-gray">
                Centigrade
              </span>
            </label>
          </div>
        )}

        {cityNotFoundError && (
            <div className="text-center text-5xl  font-semibold text-red underline p-3">Location not found</div>
          )}

        {!loader && !cityNotFoundError && <WeatherDetailsBox location={weatherDetails.location} />}
        {!loader && !cityNotFoundError && (
          <WeatherCurrentDetails
            current={weatherDetails.current}
            forecast={weatherForecastData.forecast}
            checkTemp={checkTempDegree}
          />
        )}
      </div>
    </>
  );
};

export default Weather;
