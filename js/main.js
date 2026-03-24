async function loadCars(){

const res = await fetch("data/cars.json")
const cars = await res.json()

let html = ""

cars.forEach(car => {

html += `
<div class="card">

<img src="${car.images && car.images.length ? car.images[0] : 'images/default.jpg'}">

<h3>${car.name}</h3>

<p>Rp ${car.price.toLocaleString()}</p>

<a href="detail.html?name=${encodeURIComponent(car.name)}">Detail</a>

</div>
`

})

document.getElementById("cars").innerHTML = html

}

loadCars()