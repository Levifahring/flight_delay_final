# Project 4 Flight Delay Prediction
________________________________________
## Project Overview

Flight Delay Prediction is a machine learning project aimed at predicting flight delays based on weather conditions and time of year. The project leverages historical flight and weather data to build predictive models that provide actionable insights for airlines and passengers. The final product is an interactive dashboard that allows users to explore delay predictions and better manage their travel plans. 
________________________________________
## Dataset Sources

We would like to acknowledge the data sources that made this project possible:
•	Flight Delay Data:

o	A clean dataset that includes flight details such as carrier, airport name, arr_delay, and weather_delay.

o	Source: Bureau of Transportation Statistics
•	Weather Data:

o	Weather-related data such as temperature, wind speed, and precipitation to help predict weather-related delays.

o	Source: Open-Meteo
________________________________________
## Prerequisites

•	Python 
•	PostgreSQL

Libraries:

•	Pandas
•	Scikit-learn
•	Plotly
•	Matplotlib
•	NumPy
•	Seaborn
•	API Requests
•	Open-Meteo Requests
________________________________________
## Machine Learning Models

Algorithms Used

Random Forest Classifier:

•	Captures non-linear relationships between flight delays and weather conditions.
•	Handles complex datasets and reduces overfitting, making it a reliable choice for categorical delay predictions.
Random Forest Regressor:
•	Predicts continuous delay times based on factors such as weather and airline data.
•	Like the classifier, it combines multiple decision trees to improve accuracy and prevent overfitting, ideal for regression tasks like delay time prediction.
________________________________________
## Dashboard Deployment

The machine learning models were integrated into a user-friendly dashboard, allowing users to input specific details (month, carrier, airport, etc.) and receive delay predictions. The dashboard provides a visual interface to explore the impact of different factors on flight delays.

1.	Clone the git repository –  https://github.com/Levifahring/flight_delay_final.git
2.	Navigate to the project directory
3.	Open the index.html to launch the dashboard application

Features of the Dashboard:

•	Interactive Input: Users can select different variables to see corresponding delay predictions.
•	Visualization: Graphical representation of prediction results.
•	Accessibility: Deployed on GitHub Pages for easy access.
________________________________________
## Contributors

o	Peiwen Chiu, Levi Fahring, and Jen Zapata
