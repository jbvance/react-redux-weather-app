# React Redux Weather History Chart

A react app that allows you to enter cities in the U.S. and display charts of the past five days of weather information (temperature,  pressure, and  humidity).

### Getting Started

You will need an API key from [OpenWeatherMap](http://openweathermap.org/forecast5). Then, you will need to create a file called 'config.js' at the root of the project and add the following code:
```
const config = {
    api_key: '[YOUR_API_KEY]'
}

export default config;
```

#### Installing dependencies
```
> npm install
> npm start
```