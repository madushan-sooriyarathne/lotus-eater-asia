// Clamp a given number between 2 values (min & max)
const clamp = (num: number, min: number, max: number) => {
  const rangeSize = max - min;
  return ((((num - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// return the current temperature of given coordinates in celsius format.
const fetchTemp = async (lng: number, lat: number): Promise<number> => {
  try {
    // fetch data
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await result.json();

    if (data && data.main.temp) {
      return data.main.temp as number;
    } else {
      // if the data doesn't fetched as intended, return pre-defined number
      return 27;
    }
  } catch (error: any) {
    console.error(
      `Error occurred while fetching weather data - ${error.message}`
    );
    return 27;
  }
};

export { clamp, fetchTemp };
