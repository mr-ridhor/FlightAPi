# API Documentation

## Get Flight Fare

You will need to rsubscribe to test this `https://flight-fare-search.p.rapidapi.com/v2/flights/` on rapid api
Retrieve flight fare information based on the provided parameters.

- **Method:** GET
- **Endpoint:** /search
- **Parameters:**
  - `from` (string, required): Departure airport code
  - `to` (string, required): Arrival airport code
  - `date` (string, required): Departure date (YYYY-MM-DD format)
  - `adult` (string, required): Number of adults

### Request Example

```http
GET /serach?from=LHR&to=DXB&date=2023-08-20&adult=1
```
