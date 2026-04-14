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
        document.getElementById("list-barang").innerHTML += `<div class="col-lg-4 col-md-6"> <img src="${element.ImageURL}" class="img-fluid"> <h4 class="text-primary">${element.NamaBarang}</h4> <h6 class="text-danger">${element.JumlahBarang}</h6> </div>`
        
    });

}
<div class="card" style="width: 18rem;">
  <img src="${element.ImageURL}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
//Jalankan function tampil()
tampil()