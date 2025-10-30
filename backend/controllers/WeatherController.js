const weatherApp = async (req, res) => {
  const { city } = req.body;

  try {
    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City name is required.",
      });
    }

    const apiKey = process.env.WEATHER_API_KEY;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch weather data.");
    }

    const data = await response.json();
    res.status(200).json({
      success: true,
      data: {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      },
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { weatherApp };
