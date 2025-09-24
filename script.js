let keranjang = ["mangga", "melon", "nanas"];
console.log("Awal:", keranjang);

keranjang.push("semangka");
console.log("Setelah push:", keranjang);

keranjang.unshift("pisang");
console.log("Setelah unshift:", keranjang);

keranjang.pop();
console.log("Setelah pop:", keranjang);

keranjang.shift();
console.log("Setelah shift:", keranjang);

console.log("Isi keranjang:");
for(let i = 0; i < keranjang.length; i++) {
    console.log((i + 1)+ ". " + keranjang[i]);
}

const produk = [
    {nama : "Beras", harga: 60000},
    {nama : "Minyak", harga: 15000},
];

produk.push({nama: "Gula", harga: 17000});

produk.pop();

console.table(produk);

function tambahProduk(nama, harga) {
    produk.push({nama, harga});   
    console.log("Produk ditambahkan:", nama); 
}

function hitungTotalHarga() {
    let total = 0;
    for(let i = 0; i < produk.length; i++) {
        total += produk[i].harga;
    }
    return total;
}

if(produk.length > 0) {
    console.log("Produk tersedia.");
} else {
    console.log("Produk kosong.");
}

tambahProduk("Daging", 40000);
console.table(produk);
console.log("Total harga semua produk:", hitungTotalHarga());
hitungTotalHarga();

let hari = 1;
switch(hari) {
    case 0: console.log("Minggu"); break;
    case 1: console.log("Senin"); break;
    case 2: console.log("Selasa"); break;
    case 3: console.log("Rabu"); break;
    case 4: console.log("Kamis"); break;
    case 5: console.log("Jumat"); break;
    case 6: console.log("Sabtu"); break;
    default: console.log("Hari tidak valid");   
}
