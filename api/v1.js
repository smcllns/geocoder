const fetch = require("node-fetch");
const cors = require("cors");

const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;
const URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GEOCODE_API_KEY}&address=`;

function runCorsMiddleware(req, res) {
  const corsFn = cors();
  return new Promise((resolve, reject) => {
    corsFn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

module.exports = async (req, res) => {
  await runCorsMiddleware(req, res);

  if (!req.query.address)
    return res.status(400).send("missing `address` query parameter");

  const url = URL + req.query.address;

  let latlng = {};

  try {
    const resp = await fetch(url);
    const json = await resp.json();
    console.log("google api result", json.results);

    latlng =
      json.results && json.results.length > 0
        ? json.results[0].geometry.location
        : { lat: false, lng: false };
  } catch (e) {
    console.log("error", e);
    return res.status(400).send("Something went wrong with Google API", e);
  }

  res.json(latlng);
};
