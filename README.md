# SkyForecast



SkyForecast
SkyForecast is an advanced weather forecasting web application designed to provide users with real-time and accurate weather information. This project integrates modern web technologies with a sleek, futuristic design to create an engaging and user-friendly weather dashboard.

Overview
SkyForecast allows users to access current weather conditions and daily forecasts for any city worldwide. The application uses the OpenWeatherMap API to fetch weather data and presents it through a visually appealing interface with dynamic animations and interactive elements. The project demonstrates the integration of front-end and back-end technologies, providing a comprehensive example of modern web development practices.

Key Features
Real-Time Weather Data: Users can enter a city name to retrieve current weather conditions, including temperature, humidity, wind speed, and a brief description of the weather.

Daily Forecast: The application provides a 7-day weather forecast, displaying temperature trends, weather icons, and additional details for each day.

Modern User Interface: The application features a sleek, futuristic design with particle animations and smooth transitions, creating an engaging user experience.

Responsive Design: The interface is fully responsive, ensuring optimal usability across various devices, including desktops, tablets, and smartphones.

Error Handling: The application includes robust error handling to manage issues such as invalid city names or API request failures.

Technologies Used
Frontend:

HTML: Markup language used to structure the web pages.
CSS: Stylesheets used for designing the application, including layout, color schemes, and animations.
JavaScript: Scripting language used to handle user interactions, API requests, and dynamic content updates.
Anime.js: A lightweight JavaScript animation library used for creating smooth and customizable animations.
Particles.js: A library used to create interactive particle effects in the background.
Backend:

Express.js: A web application framework for Node.js used to create the server and handle API requests.
Axios: A promise-based HTTP client used for making requests to the OpenWeatherMap API.
OpenWeatherMap API: Provides weather data including current conditions and forecasts.
CORS: Middleware used to enable Cross-Origin Resource Sharing, allowing the frontend and backend to communicate securely.
How It Works
User Input: Users enter the name of a city in the search box on the frontend.

API Request: The frontend sends a request to the backend server with the city name as a query parameter.

Weather Data Retrieval: The backend server processes the request and uses Axios to fetch weather data from the OpenWeatherMap API.

Data Processing: The backend formats the data and sends it back to the frontend.

Data Display: The frontend receives the data and updates the user interface to display the current weather conditions and forecast.

Installation and Setup
To run SkyForecast locally:

Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/skyforecast.git
cd skyforecast
Install Dependencies:

Navigate to the backend directory and run:
bash
Copy code
npm install
Navigate to the frontend directory and install any necessary dependencies (if applicable).
Set Up Environment Variables:

Create a .env file in the backend directory and add your OpenWeatherMap API key:
env
Copy code
API_KEY=your_openweathermap_api_key
Run the Backend Server:

bash
Copy code
cd backend
npm start
Open the Frontend:

Open the index.html file from the frontend directory in your browser or deploy it using a web server.
Usage
Enter the name of a city in the search box.
Press Enter or click the search icon to fetch and display weather data.
View the current weather and daily forecast.
