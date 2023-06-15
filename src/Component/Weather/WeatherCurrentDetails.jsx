import moment from "moment";
import React from "react";

export const WeatherCurrentDetails = ({ current, forecast, checkTemp }) => {
  return (
    <div
      className="bg-weather
  bg-no-repeat bg-center bg-cover p-8
  mt-5rem
  rounded-lg
  text-white
  "
    >
      <div className="flex justify-around align-top">
        <div className="flex justify-center items-center flex-row-reverse">
          <p>{current.condition.text}</p>
          <figure>
            <img
              height={100}
              width={100}
              src={"https:" + current.condition.icon}
              alt="weatherimage"
            />
          </figure>
        </div>
        <div className="flex-col justify-center items-center text-center p-4">
          <p>Wind: {current.wind_kph} kmph</p>
          <p>Precip: {current.precip_in} in</p>
          <p>Pressure: {current.pressure_in} in</p>
          <p className="text-3xl ">
            {checkTemp === "c" && <span>{current.temp_c} &deg;C</span>}{" "}
            {checkTemp === "f" && <span>{current.temp_f} &deg;F</span>}{" "}
          </p>
        </div>
      </div>
      {forecast.forecastday[0].hour.map((ele) => (
        <>
      </>
      ))}
      <div className="font-semibold grid grid-cols-6 gap-2 my-5rem mx-2rem justify-content-evenly">

        {forecast.forecastday[0].hour.map((ele) => (
          <>
            <p>
              {moment
                .unix(ele.time_epoch)
                .format("h:mm:ss A")}
            </p>
            <p>{checkTemp === "c" && <span>{ele.temp_c} &deg;C</span>}
              {checkTemp === "f" && <span>{ele.temp_f} &deg;F</span>} </p>
            <figure>
              {ele.condition.text}
              <img src={"https:" + ele.condition.icon} alt="noimagefound" />
            </figure>
          </>
        ))}
      </div>
    </div>
  );
};













// import moment from "moment";
// import React from "react";

// export const WeatherCurrentDetails = ({ current, forecast, checkTemp }) => {
//   const renderTimeColumn = () => {
//     return forecast.forecastday[0].hour.map((ele) => (
//       <td key={ele.time_epoch} className="border-l p-3 bg-blue bg-opacity-30 text-sm md:text-xl">
//         {moment.unix(ele.time_epoch).format("h:mm a")}
//       </td>
//     ));
//   };

//   const renderIconColumn = () => {
//     return forecast.forecastday[0].hour.map((ele) => (
//       <td key={ele.time_epoch} className="border-l p-4">
//         <img src={"https:" + ele.condition.icon} alt="weather icon" className="h-10 max-w-fit" />
//       </td>
//     ));
//   };

//   const renderTempColumn = () => {
//     return forecast.forecastday[0].hour.map((ele) => (
//       <td key={ele.time_epoch} className="border-l p-4">
//         {ele.temp_c} &deg;C
//       </td>
//     ));
//   };

//   return (
//     <div className="bg-weather bg-no-repeat bg-center bg-cover p-5 md:p-15 rounded-lg text-white">
//       <div className="flex justify-around align-top">
//         <div className="flex justify-center items-center flex-row-reverse">
//           <p>{current.condition.text}</p>
//           <figure>
//             <img
//               height={100}
//               width={100}
//               src={"https:" + current.condition.icon}
//               alt="weather image"
//             />
//           </figure>
//         </div>
//         <div className="flex-col justify-center items-center text-center">
//           <p>Wind: {current.wind_kph} kmph</p>
//           <p>Precip: {current.precip_in} in</p>
//           <p>Pressure: {current.pressure_in} in</p>
//           <p className="text-3xl">
//             {checkTemp === "c" && <span>{current.temp_c} &deg;C</span>}{" "}
//             {checkTemp === "f" && <span>{current.temp_f} &deg;F</span>}{" "}
//           </p>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="border border-r-2 mx-2 my-2 md:p-4 sm:p-1 sm:mx-1 sm:my-1 table-auto">
//           <tbody>
//             <tr className="border-2">
//               <th className="border px-4 py-2 bg-green bg-opacity-30">Time</th>
//               {renderTimeColumn()}
//             </tr>
//             <tr className="border border-1">
//               <th className="border px-4 py-2 bg-green bg-opacity-30">Icon</th>
//               {renderIconColumn()}
//             </tr>
//             <tr className="border border-1">
//               <th className="border px-4 py-2 bg-green bg-opacity-30">Temp</th>
//               {renderTempColumn()}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };











