async function loadCars(){

const res = await fetch("data/cars.json")
const cars = await res.json()

let html = ""

cars.forEach(car => {

html += `
<div class="card">
<img src="${car.image}">
<h3>${car.name}</h3>
<p>Rp ${car.price.toLocaleString()}</p>

<a href="detail.html?id=${car.id}">Detail</a>
</div>
`

})

document.getElementById("cars").innerHTML = html

}

loadCars()