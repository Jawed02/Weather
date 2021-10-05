
function getWeather(){
    
    var city = document.getElementById("city").value;
    // console.log(city);
    
    url = "https://api.weatherapi.com/v1/current.json?key=dbda815ce1f644a4b5c91555210210&q= "+ city +"&aqi=no";
    // url = "api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b45b5ca9ea48bd610f3f7fdbd99f3b54";


    fetch(url)
    .then(function(response){
      return response.json();
      
    }).then(function(data){
        var city_name = data.location.name;
        var state = data.location.region;
        var region = data.location.region;
        var country = data.location.country;
        var condition = data.current.condition.text;
        var condition_image = data.current.condition.icon;
        var temp_c = data.current.temp_c;
        var last_update = data.current.last_updated;
       var local_date = data.location.localtime;
       var date = local_date.substring(0,10);

        document.getElementById("city_name").innerHTML = city_name;
        document.getElementById("country_name").innerHTML = state+","+country;
        document.getElementById("condition").innerHTML =  condition;
        document.getElementById("condition_image").src = condition_image;
        document.getElementById("temperature").innerHTML = temp_c;
        document.getElementById("last_updated").innerHTML ="Last Updated on : " +last_update;


        // console.log(date);
        // console.log(region);
        // console.log(country);
        // console.log(condition);
   
        var time_zone = "http://api.weatherapi.com/v1/astronomy.json?key=dbda815ce1f644a4b5c91555210210&q=" + city + "&dt=" + date;
        
        fetch(time_zone)
    .then(function(response){
      return response.json();
      
    }).then(function(datas){
        var sunrise = datas.astronomy.astro.sunrise;
        var sunset = datas.astronomy.astro.sunset;
        var moon_rise = datas.astronomy.astro.moonrise;
        var moon_set = datas.astronomy.astro.moonset;
        var moon_phase = datas.astronomy.astro.moon_phase;
       




        document.getElementById("sunrise").innerHTML = "Sunrise : "+sunrise;
        document.getElementById("sunset").innerHTML = "Sunset : "+sunset;
        document.getElementById("moon_rise").innerHTML = "Moon Rise : "+moon_rise;
        document.getElementById("moon_set").innerHTML = "Moon Set : "+moon_set;
        document.getElementById("moon_phase").innerHTML = "Moon Phase : "+moon_phase;

       
        // console.log(sunrise);




    }).catch(function(error){
        console.log("Error" + error);
    })









    }).catch(function(error){
        console.log("Error" + error);
    })

};