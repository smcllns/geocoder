# Geocoder Service

A really basic (and brittle/hacky) endpoint to quickly convert addressess to latlng from server or browser. Requires a API Key for Google's Geocoder API

## Usage

Request

```js
fetch("[your-project-name].vercel.app/api/v1?address=1 Hacker Way, CA");
```

Response:

```json
{
  "lat": 37.485134,
  "lng": -122.1483749
}
```

## Deploy your own

1. Get a Google Geocoder API key
2. Add key as env variable:
3. Deploy on vercel

```
GEOCODE_API_KEY=your-key-here
```
