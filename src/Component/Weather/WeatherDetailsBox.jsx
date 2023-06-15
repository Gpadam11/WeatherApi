import React from "react";

const WeatherDetailsBox = ({ location }) => {
  return (
    <div className="flex justify-center p-8">
        <span className="font-sans text-4xl text-gray-light font-semibold">
          {location.name} weather forecast,
        </span>
        <span className="text-gray text-3xl">
          {location.region} {location.country}
        </span>
      
    </div>
  );
};

export default WeatherDetailsBox;