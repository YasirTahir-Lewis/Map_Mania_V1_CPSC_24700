function initMap() {
    const myLatlng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: myLatlng,
    });

    const marker = new google.maps.Marker({
        position: myLatlng,
        map,
        title: "Click to zoom",
    });


    map.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
            map.panTo(marker.getPosition());
        }, 6000);
    });
    marker.addListener("click", () => {
        map.setZoom(10);
        map.setCenter(marker.getPosition());
    });

    google.maps.event.addListener(map, "bounds_changed", function() {
        var bounds = map.getBounds();
        var NE = bounds.getNorthEast();
        var SW = bounds.getSouthWest();
        var strHTML = "North East: " + NE.lat() + ", " + NE.lng() + " </br>";
        strHTML += "South West: " + SW.lat() + ", " + SW.lng();
        document.getElementById("info").innerHTML = strHTML;
    });

    google.maps.event.addListener(map, 'click', function() {
        updateGame()
    });

    var marker1 = new google.maps.Marker({ position: { lat: 23.4241, lng: 53.8478 }, map: map });

    function updateGame() {
        console.log('function UpdateGame()!');
        var zoomLevel = map.getZoom();
        var inBounds = false;

        if (map.getBounds().contains({ lat: 23.4241, lng: 53.8478 })) {
            inBounds = true;
        }
        inBounds = false;
        console.log("inBounds:" + inBounds + " zoomLevel:" + zoomLevel);
    }

    function initApplication() {
        console.log('Map Mania V1 - Starting')
    }
}