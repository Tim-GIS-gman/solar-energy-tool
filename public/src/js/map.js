import { calculateSolarPotential } from './solarCalculator.js';

export function initializeMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2F0c29udGQiLCJhIjoiY2xtM20wcDVoMjUwcTNlbzlmM3ozOTl0NiJ9.lvcIic9IZJ84R7QKFe73wA'; // Replace with your real token
    const map = new mapboxgl.Map({
        container: 'map', // The id of the div where the map will be displayed
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: [-104.9903, 39.7392], // Center on Denver, CO
        zoom: 12
    });

    map.on('click', (e) => {
        const { lat, lng } = e.lngLat;

        // Calculate solar potential for the clicked location
        const results = calculateSolarPotential(lat, lng);

        // Update the solar energy potential display
        document.getElementById('location').textContent = `Lat: ${lat.toFixed(4)}, Lon: ${lng.toFixed(4)}`;
        document.getElementById('energy-potential').textContent = `${results.kWh} kWh`;
        document.getElementById('cost-savings').textContent = `$${results.savings}`;
    });
}


