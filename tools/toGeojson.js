const fs = require("fs");
const global = require("./path");

let geojson = {
  "type": "FeatureCollection",
  "features": []
}

for (let t in global.paths) {
  let point = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": global.paths[t].location
    },
    "properties": {
      "id": t
    }
  };
  for(let p in global.paths[t]){
    if("location" !==p){
      point.properties[p]=global.paths[t][p]
    }
  }

  geojson.features.push(point);
}

fs.writeFile('tem.geojson', JSON.stringify(geojson), 'utf8', console.log);
