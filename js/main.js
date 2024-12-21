var zz= document.querySelector("form .sear");

function search(){
var f =zz.value
if(f){
    add(f)
}
}

zz.addEventListener("input",function(){
    search()
})

     let n = [];
async function add(dodo) {
    try {
        n=[]
        let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=66765443d36a4acd955201708241912&q=${dodo}&days=7`);
        let data = await response.json();

        n.push(data); // إضافة البيانات إلى المصفوفة
        console.log(n); // عرض المصفوفة في وحدة التحكم

        display(); // استدعاء دالة العرض
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function display() {
    let cartona = "";

    for (let i = 0; i < n.length; i++) {
        cartona += `
            <div class="col-md-4 h-100">
                <div class="titleone">
                    <p>${n[i].location.country}</p>
                    <p>${n[i].current.last_updated}</p>
                </div>
                <div class="main_one d-flex flex-column">
                    <p>${n[i].location.name}</p>
                    <p>${n[i].current.temp_c}°C</p>
                    <img src="http:${n[i].current.condition.icon}" alt="Weather Icon" >
                    <p>${n[i].current.condition.text}</p>
                </div>
            </div>

                 
          <div class="col-md-4">
            <div class="titleone">
              <p>${n[i].
                forecast.
                forecastday[0]
                .date}</p>
             
            </div>
            <div class="main_one d-flex flex-column">
              <img src="http:${n[0].
                forecast.
                forecastday[0]
                .day.condition.icon
            }"/>
                 <p>${n[i].
                    forecast.
                    forecastday[0]
                    .day.
                    maxtemp_c}</p>
                 <p>${n[i].
                    forecast.
                    forecastday[0]
                    .day.
                    maxtemp_f}</p>
                 <p>${n[i].
                    forecast.
                    forecastday[0]
                    .day.condition.text
                }</p>

            </div>

 
          </div>
                <div class="col-md-4">
            <div class="titleone">
              <p>${n[i].
                forecast.
                forecastday[1]
                .date}</</p>
             
            </div>
            <div class="main_one d-flex flex-column">
              <img src="http:${n[i].
                forecast.
                forecastday[1]
                .day.condition.icon
            }"/>
                 <p>${n[i].
                    forecast.
                    forecastday[1]
                    .day.
                    maxtemp_c}</p>
                 <p>${n[i].
                    forecast.
                    forecastday[1]
                    .day.
                    maxtemp_f}</p>
                 <p>${n[i].
                    forecast.
                    forecastday[1]
                    .day.condition.text
                }</p>

            </div>

 
          </div>
        `;
    }

    document.getElementById("kk").innerHTML = cartona;
}

add("cairo"); // استدعاء الدالة الرئيسية


