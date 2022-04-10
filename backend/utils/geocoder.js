// import { NodeGeocoder } from "node-geocoder";
const NodeGeocoder = require("node-geocoder");

async function getCoords(address) {
  console.log(address, "______-------");
  const coords = {};
  const options = {
    provider: "google",

    // Optional depending on the providers

    apiKey: "AIzaSyArA-pEcXRa7yj7FRGCey9Qm8xmvSDYUrY", // for Mapquest, OpenCage, Google Premier
    formatter: null, // 'gpx', 'string', ...
  };

  const geocoder = NodeGeocoder(options);

  const res = await geocoder.geocode(address);

  if (res.length) {
    coords.lat = res[0].latitude;
    coords.lng = res[0].longitude;
  }
  console.log(coords, "+++++++++++");
  return coords;
}

module.exports = getCoords;
