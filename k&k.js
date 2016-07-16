var stations = {
    "shibuya": {lat: 35.39287, long: 139.42059},
    "sapporo": {lat: 43.04071, long: 141.21027},
    "senndai": {lat: 38.15365, long: 140.52568},
    "niigata": {lat: 37.54434, long: 139.03423},
    "yokohama": {lat: 35.27544, long: 139.37131},
    "utunomiya": {lat: 36.33318, long: 139.53532},
    "nagoya": {lat: 35.10153, long: 136.52536},
    "kyouto": {lat: 34.59092, long: 135.45315},
    "sinnoosaka": {lat: 34.43594, long: 135.30008},
    "hirosima": {lat: 34.23520, long: 132.28312},
    "fukuoka": {lat: 33.35237, long: 130.25143},
    "kagosimatyuuou": {lat: 31.35016, long: 130.32284},
    "hakodateAirstation": {lat: 41.46322, long: 140.48548},
    "senndaiAirstation": {lat: 38.08228, long: 140.55011},
    "naritaAirstation": {lat: 35.46191, long: 140.23343},
    "tyuubuAirstation": {lat: 34.51327, long: 136.48527},
    "kannsaiAirstation": {lat: 34.25551, long: 135.13495},
    "nagasakiAirstation": {lat: 32.54491, long: 129.55065},
    "nahaAirstation": {lat:26.12231, long: 127.38476}
    
};

var vacation = {
    "meijijinnguu": {lat: 35.40350 , long: 139.41576},
    "fujisann": {lat: 35.21364 , long:138.43406},
    "sinnsaibasi": {lat: 34.67029, long: 135.500693},
    "nisikiitiba": {lat: 35.004474, long: 135.428954},
    "kaiyuukann": {lat: 34.654518, long: 135.428954},
    "sennsouji": {lat: 35.714748, long: 139.796677},
    "sibuyasennta-gai": {lat: 35.660274, long: 139.698946},
    "doutonnbori": {lat:34.6627, long: 135.501860},
    "narakouenn": {lat: 34.41062, long: 135.50349},
};
//vacationLocationlat;
//vacationLocationlong;

function getDistance(stationLocation, vacationLocation){
    
    return  6378.14 * Math.acos(Math.cos(radians(stationLocation.lat))*
    Math.cos(radians(vacationLocation.lat))*
    Math.cos(radians(vacationLocationlong)-radians(stationLocation.long))+
    Math.sin(radians(stationLocation.lat))*
    Math.sin(radians(vacationLocation.lat)));
}
   
function radians(deg){
    return deg * Math.PI/180;
}
    
    //alert(getDistance(stationLocation.lat,stationLocation.long,vacationLocation.lat,vacationLocation.long));
//  ボタンが押されたら呼ばれる
function clicked(){
    var select1 = document.querySelector("#selbox1"); 
    var stationLocation = stations[select1];

 
    var select2 = document.querySelector("#selbox2");
    var vacationLocation = vacation[select2];
     
    //  どの場所が指定されているか調べる
    alert(getDistance(stationLocation, vacationLocation));
    //  その緯度と経度をgetDistanceに投げる
    
}