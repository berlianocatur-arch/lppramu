const params = new URLSearchParams(window.location.search)
const name = params.get("name")

let selectedCar = null

fetch("data/cars.json")
.then(res => res.json())
.then(cars => {

const car = cars.find(c => c.name === name)
selectedCar = car

if(!car){
document.body.innerHTML = "Mobil tidak ditemukan"
return
}

/* isi data */
/* isi data */
document.getElementById("name").innerText = car.name

let priceEl = document.getElementById("price")
let oldPriceEl = document.getElementById("oldPrice")

if(car.variants){

  let html = ""

  let cheapest = Math.min(...car.variants.map(v => v.price))

  car.variants.forEach(v => {
    html += `
      <div class="variant">
        <span class="variant-name">${v.name}</span>
        <span class="variant-price ${v.price === cheapest ? 'best' : ''}">
          Rp ${v.price.toLocaleString()}
        </span>
        ${v.price === cheapest ? '<span class="badge-best">BEST DEAL</span>' : ''}
      </div>
      `
  })

  priceEl.innerHTML = html
  oldPriceEl.style.display = "none"

} else {

  priceEl.innerText = "Rp " + car.price.toLocaleString()
  oldPriceEl.innerText = "Rp " + car.oldPrice.toLocaleString()

}

document.getElementById("desc").innerText = car.description
/* gambar utama */
if(car.images && car.images.length > 0){
  document.getElementById("mainImage").src = car.images[0]
}

/* gallery */
let gal = ""

if(car.images){
  car.images.forEach(img=>{
    gal += `<img src="${img}" onclick="changeImage('${img}')">`
  })
}

document.getElementById("gallery").innerHTML = gal

/* specs */
let specHtml = ""

if(car.specs){
  for(let key in car.specs){
    specHtml += `
    <tr>
      <td>${key}</td>
      <td>${car.specs[key]}</td>
    </tr>
    `
  }
}

document.getElementById("specs").innerHTML = specHtml

})

function changeImage(src){
document.getElementById("mainImage").src = src
}

/* WA */
function wa(){

let text = `Halo saya tertarik dengan ${selectedCar.name}`

window.open(
`https://wa.me/628123456789?text=${encodeURIComponent(text)}`
)

}