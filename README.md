# Geocoder Service

A really basic (and brittle/hacky) endpoint to quickly convert addressess to latlng from server or browser. Requires a API Key for Google's Geocoder API

## Usage

Request

```js
fetch("[your-project-name].vercel.app/api/v1?address=1 Hacker Way, CA");
```

Response:

```json
geo: {
    lat: 37.485134,
    lng: -122.1483749
}
```
