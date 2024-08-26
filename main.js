function getLocation(sampleFunk) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let coords = { lat: position.coords.latitude, lng: position.coords.longitude }
            sampleFunk(coords);
        });
    } else {
        console.assert("Geolocation is not supported by this browser.");
    }
}

getLocation(setMap)

function setMap(coords) {
    var map = L.map('map').setView([coords.lat, coords.lng], 18);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 23
    }).addTo(map);
}

function addCheckpoint(){
    let inpF = document.getElementsByClassName('dmt')[0];
    var fieldInput = document.createElement('input');
    fieldInput.setAttribute('type', 'text');
    fieldInput.setAttribute('placeholder', 'checkpoint');
    fieldInput.setAttribute('class', 'checkpoint-input w-20');
    fieldInput.setAttribute('onfocus', 'this.placeholder = ""');
    fieldInput.setAttribute('onblur', 'this.placeholder = "checkpoint"');
    inpF.append(fieldInput);
}
