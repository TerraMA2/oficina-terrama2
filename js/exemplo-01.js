var centroDoMapa = L.latLng({
    lat: -23.2069378,
    lng: -45.8633681
});

var opcoesDoMapa = {
    center: centroDoMapa,
    zoom: 8,
};

var mapa = L.map('mapa', opcoesDoMapa);

var camadaDeBaseOSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

camadaDeBaseOSM.addTo(mapa);
