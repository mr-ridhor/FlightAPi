<!-- # Flight Search API Documentation

Welcome to the Flight Search API documentation. This API allows you to search for flight information based on specific parameters.

## Base URL

The base URL for the API is: `http://localhost:8000/api/`

## Authentication

Authentication is not required for this API.

## Endpoints

### Search Flights

Search for flight information based on specific parameters.

- **URL**: `/search`
- **Method**: `POST`

#### Request Body

| Parameter  | Type   | Required | Description                    |
|------------|--------|----------|--------------------------------|
| departure  | String | Yes      | Departure airport code         |
| arrival    | String | Yes      | Arrival airport code           |
| date       | String | Yes      | Date of the flight (YYYY-MM-DD)|
| adult      | Number | Yes      | Number of adult passengers     |


#### Response

- **Status**: 200 OK
- **Example**:

```json
{
  "flightData": [
    {
      "flightNumber": "ABC123",
      "departure": "LAX",
      "arrival": "JFK",
      "departureTime": "2023-08-21T08:00:00Z",
      "arrivalTime": "2023-08-21T15:00:00Z",
      "fare": 250.00,
      "currency": "USD"
    },
    // ... other flight data
  ]
} -->
Flight Search API Documentation
Base URL= http://localhost:8000 

API Endpoint
Search Flights
Endpoint: /api/search

Method: POST

Description: This endpoint allows you to search for flight data based on specific criteria.

| Parameter  | Type   | Required | Description                    |
|------------|--------|----------|--------------------------------|
| departure  | String | Yes      | Departure airport code         |
| arrival    | String | Yes      | Arrival airport code           |
| date       | String | Yes      | Date of the flight (YYYY-MM-DD)|
| adult      | Number | Yes      | Number of adult passengers     |

Example Request
json
Copy code
{
  "from": "JFK",
  "to": "LAX",
  "date": "2023-09-01",
  "adult": 1,
}


Example Response
json
Copy code
{
  "data": [
    {
      "flightNumber": "ABC123",
      "departure": "JFK",
      "arrival": "LAX",
      "departureTime": "2023-09-01T08:00:00",
      "arrivalTime": "2023-09-01T11:00:00",
      "fare": 250.0,
      "currency": "USD"
    },
    // More flight options...
  ]
}
Error Responses
If any required parameter is missing or invalid:

json
Copy code
{
  "error": "Please provide valid search parameters."
}
If an error occurs while fetching flight data:

json
Copy code
{
  "error": "An error occurred while fetching flight data."
}
Using the API
Install Dependencies: Make sure you have Node.js and npm installed. Run npm install to install required dependencies (express, axios, and dotenv).

Set Environment Variables: Create a .env file in the root directory with the following content:

makefile
Copy code
RAPIDAPI_KEY=your_rapidapi_key_here
PORT=8000  (or your desired port)
Start the Server: Run node your_script_name.js to start the Express server.

Make API Requests: Use your preferred tool (e.g., cURL, Postman, or frontend code) to send POST requests to the /api/search endpoint with the required parameters in the request body.


That's it! You now have a functional flight search API that can be used to retrieve flight data based on the provided search parameters.






