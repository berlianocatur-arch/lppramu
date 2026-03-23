const id = new URLSearchParams(location.search).get("id")

fetch("data/cars.json")
.then(res => res.json())
.then(cars => {

const car = cars.find(c => c.id == id)

document.getElementById("detail").innerHTML = `
<h1>${car.name}</h1>
<img src="${car.image}" width="300">
<p>${car.description}</p>
`

window.selectedCar = car.name

})

function wa(){

let nama = document.getElementById("nama").value

let text = `Halo saya ${nama} tertarik dengan ${window.selectedCar}`

window.open(
`https://wa.me/628123456789?text=${encodeURIComponent(text)}`
)

}