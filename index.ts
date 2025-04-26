/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_add_map]
// Initialize and add the map
let myMap: any;

async function initializeMap() {
  // [START maps_add_map_instantiate_map]
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const Marker = google.maps.Marker;

  // The map, centered at Uluru
  myMap = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // [END maps_add_map_instantiate_map]
  // [START maps_add_map_instantiate_marker]
  // The marker, positioned at Uluru
  const marker = new Marker({
    map: myMap,
    position: position,
    title: "Uluru",
  });
  // [END maps_add_map_instantiate_marker]
}

initializeMap();
// [END maps_add_map]