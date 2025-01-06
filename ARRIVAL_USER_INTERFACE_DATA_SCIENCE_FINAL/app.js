const csvFilePath = './arrival_predicted_delays.csv';

let predictionData = [];

// Fetch and load the CSV data
fetch(csvFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("CSV file loaded successfully.");
    return response.text();
  })
  .then(csvData => {
    // Parse CSV data
    predictionData = Papa.parse(csvData, { header: true }).data;

    // Extract unique values for dropdowns
    const months = [...new Set(predictionData.map(row => row.month))];
    const carriers = [...new Set(predictionData.map(row => row.carrier_name))];
    const airports = [...new Set(predictionData.map(row => row.airport_name))];

    // Populate dropdowns
    populateDropdown('month', months);
    populateDropdown('carrier', carriers);
    populateDropdown('airport', airports);
  })
  .catch(error => {
    console.error("Error loading CSV:", error);
    document.getElementById('error-message').textContent =
      "Failed to load flight delay data. Please try again later.";
  });

// Populate dropdown options
function populateDropdown(id, options) {
  const dropdown = document.getElementById(id);
  dropdown.innerHTML = options
    .map(option => `<option value="${option}">${option}</option>`)
    .join('');
}

// Handle the prediction button click
document.getElementById('predict-btn').addEventListener('click', () => {
  const selectedMonth = document.getElementById('month').value;
  const selectedCarrier = document.getElementById('carrier').value;
  const selectedAirport = document.getElementById('airport').value;

  // Find the matching row in the prediction data
  const match = predictionData.find(
    row =>
      row.month === selectedMonth &&
      row.carrier_name === selectedCarrier &&
      row.airport_name === selectedAirport
  );

  const resultDiv = document.getElementById('prediction-result');

  if (match) {
    const delay = parseFloat(match.predicted_arrival_delay);
    if (!isNaN(delay)) {
      const hours = Math.floor(delay / 60);  // Get hours by dividing by 60
      const minutes = Math.round(delay % 60);  // Get remainder as minutes and round to nearest minute
      resultDiv.textContent = `If there is an arrival delay, the expected delay will be ${hours} hours and ${minutes} minutes.`;
      resultDiv.style.color = 'green'; // Optional styling for success message
    } else {
      resultDiv.textContent = "Invalid delay data.";
      resultDiv.style.color = 'red';
    }
  } else {
    resultDiv.textContent = "No prediction available for the selected inputs.";
    resultDiv.style.color = 'red'; // Optional styling for error message
  }
});
