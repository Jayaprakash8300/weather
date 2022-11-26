var rest=document.getElementById('rest')
 console.log(rest)


var res= fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>{
    data1.forEach((e) => {

        var lat = e.latlng[0]
        var lng = e.latlng[1]
        var div1 = document.createElement('div')
    
        div1.innerHTML = `
            
        <div class="card" style="width: 18rem;">
        <img src="${e.flags.png}" class="card-img-top" alt="...">
        <div class="card-body"style="background: linear-gradient(to left, #669999 0%, #99ccff 100%">
          <h3 class="card-title">${e.name.common}</h3>
          <p class="card-text">Captial:${e.capital}</p>
          <p class="card-text">Region: ${e.region}</p>
          <p class="card-text">Code: ${e.cca2}</p>
          <a href="https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=68e06f071ee721ea9999d0ff108c1dee" target="_blank"class="btn btn-primary">Weather</a>
        </div>
      </div>
            `
    
        rest.append(div1)
    })
})