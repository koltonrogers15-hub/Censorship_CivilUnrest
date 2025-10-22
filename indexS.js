
let map;
// The following codes are for the demo 1, loading the google map
/*
async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");

    const myLatlng = { lat: 41.3114, lng: -105.5911  };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: myLatlng,
      mapId:"Your map-ID",
    });
   
  }
  initMap();

*/

  // The following demo 2 shows adding a marker for the map
/*

async function initMap() {

    const position = { lat: 41.3114, lng: -105.5911 };

    // Request needed libraries
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");



  map = new Map(document.getElementById("map"), {
    center: { lat: 41.3114, lng: -105.5911 },
    zoom: 8,
    
    mapId: "Your map-ID here",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Laramie",
  });

}

//add a marker


initMap();

*/

// The following codes are for the demo 3, designing the event for the marker



async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const myLatlng = { lat: 41.3114, lng: -105.5911  };


    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatlng,
      mapId: "eafba4ec82525c27f1e235cc",
    });


    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: myLatlng,
      map,
      title: "Click to zoom",
    });

  
    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(() => {
        map.panTo(marker.position);
      }, 3000);
    });
    
    marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(marker.position);
    });
  }
  
  initMap();

