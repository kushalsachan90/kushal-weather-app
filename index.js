   const btn=document.getElementById("btn");
   const citydata=document.getElementById("inputtext");
      
   const weathercard=document.getElementById("weatherreport");
   const cityname=document.getElementById("cityname");
   const temperature=document.getElementById("temp");
    const humidity=document.getElementById("humidity");
   const feelslike=document.getElementById("Feels-Like");
   const condition=document.getElementById("conditions");
    const wind=document.getElementById("wind");



function fetchdata(city){
    return  fetch(`https://wttr.in/${city}?format=j1`).then((response)=>response.json())
}



   btn.addEventListener("click",(e)=>{
            e.preventDefault();
            const city=citydata.value;
            if(!city) return;
              fetchdata(city).then((data)=>{
                const weather=data.current_condition[0];
                cityname.textContent=city;
                temperature.textContent=weather.temp_C;
                feelslike.textContent=weather.FeelsLikeC;
                condition.textContent=weather.weatherDesc[0].value;
                humidity.textContent=weather.humidity;
                wind.textContent=weather.windspeedKmph;
                weathercard.classList.remove("hidden-box")
              })
              .catch((err) => {
      console.log("Failed to fetch weather data.");
    });
   })