# React Weather App

<div align="center">
  <img src="./src/assets/weather.gif" />
</div>

## About the Project

This project, created with React, is a website that utilizes the OpenWeatherMap API to display both weekly and real-time weather forecasts for any desired location.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Skeleton](#project-skeleton)
- [Screenshots](#screenshots)

## Live Demo

[React Weather App](https://react-weather-app-omega-pink.vercel.app/)

## Features

- Instant and weekly weather forecast for a specific location.
- Each day can be expanded to view detailed weather information.
- Shows information such as temperature, felt temperature, humidity, wind speed, and pressure.
- When the location button is clicked, it redirects to the [OpenWeatherMap](https://openweathermap.org/) page containing information about the entered location.
- It provides a warning when an invalid location is entered

## Usage

- Get an API key from [OpenWeatherMap](https://openweathermap.org/) and replace process.env.REACT_APP_API_KEY in Guncel.jsx and Haftalik.jsx with your API key.

## Technologies Used

- React
- Axios for API requests
- [OpenWeatherMap API](https://openweathermap.org/) for weather data
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Styling with CSS (module)
- Sweetalert2 for alert 

## Project Skeleton

```
React Weather App (folder)
|
|----readme.md         
SOLUTION
├── public
│     └── index.html
├── src
│    ├── assets
│    │       └── [images]
│    ├── components
│    │       ├── guncel
│    │       │     ├── Guncel.css 
│    │       │     └── Guncel.jsx 
│    │       ├── haftalik     
│    │       │     ├── Haftalik.css 
│    │       │     └── Haftalik.jsx   
│    │       └── search     
│    │             ├── Search.css 
│    │             └── Search.jsx 
│    ├── pages
│    │       └── Home.jsx
│    ├── App.js
│    ├── App.css
│    └── index.js
├── package.json
└── yarn.lock
```

## Screenshots

<div align="center">
  <img src="./src/assets/Screenshot_1.jpg"  width="35%" height="500" />
  <img src="./src/assets/Screenshot_2.jpg"  width="55%" height="600" />
  <img src="./src/assets/Screenshot_3.jpg"  width="90.5%" height="450" />
</div>

## Compatibility

The project is compatible with both wide-screen computers and mobile devices.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
