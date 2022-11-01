import ReactAnimatedWeather from "react-animated-weather";

export function displayEmoji(weatherConditions, size) {
  let newEmoji = "";

  switch (weatherConditions) {
    case "Clear":
      newEmoji = "CLEAR_DAY";
      break;
    case "Thunderstorm":
      newEmoji = "SLEET";
      break;
    case "Drizzle":
      newEmoji = "RAIN";
      break;
    case "Rain":
      newEmoji = "SLEET";
      break;
    case "Snow":
      newEmoji = "SNOW";
      break;
    case "Mist":
      newEmoji = "FOG";
      break;
    case "Fog":
      newEmoji = "FOG";
      break;
    case "Tornado":
      newEmoji = "WIND";
      break;
    case "Clouds":
      newEmoji = "CLOUDY";
      break;

    default:
      newEmoji = "Did not find emoji for: " + weatherConditions;
  }
  return (
    <ReactAnimatedWeather
      icon={newEmoji}
      color="white"
      size={size}
      animate={true}
    />
  );
}
