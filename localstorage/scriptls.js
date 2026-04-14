let ImageURL = document.getElementById("ImageURL");
let NamaBarang = document.getElementById("NamaBarang");
let JumlahBarang = document.getElementById("JumlahBarang");

function simpan() {
    console.log(ImageURL.value)
    console.log(NamaBarang.value)
    console.log(JumlahBarang.value)

    // jika local storage belum ada isi/value 
    if(localStorage.getItem("Barang")===null){
        // simpan array kosong []
        localStorage.setItem("Barang", "[]")
    }

    // panggil local storage (konversi string --> object)
    let data = JSON.parse(localStorage.getItem("Barang"))
    console.log(data)

    // simpan value jumlah dan nama ke dalam object data
    data.push({
        ImageURL: ImageURL.value,
        NamaBarang: NamaBarang.value,
        JumlahBarang: JumlahBarang.value,
    })
    console.log(data)

    // simpan data terbaru ke dalam local storage 
    // konversi dari object menjadi string
    localStorage.setItem("Barang", JSON.stringify(data))
    tampil()
}

function tampil() {
    //panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem("Barang"))

    // clear element ul id =list-barang
    document.getElementById("list-barang").innerHTML = ""
    //lakukkan perulangan (foreach)
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-barang").innerHTML += `<div class="col-lg-3 col-md-5">
  <img src="${element.ImageURL}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="text-primary">${element.NamaBarang}</h5>
    <p class="text-danger">${element.JumlahBarang}</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>`
        
    });

}

//Jalankan function tampil()
tampil()