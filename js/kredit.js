function hitung(){

let harga = document.getElementById("harga").value
let dp = document.getElementById("dp").value
let tenor = document.getElementById("tenor").value

let pinjaman = harga - dp
let bunga = 0.05

let cicilan = (pinjaman + (pinjaman*bunga)) / tenor

document.getElementById("hasil").innerText =
"Rp " + Math.round(cicilan).toLocaleString() + "/bulan"

}