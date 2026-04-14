let ImageURL = document.getElementById("ImageURL");
let Nama = document.getElementById("Nama");
let NPM = document.getElementById("NPM");

function simpan() {
    console.log(ImageURL.value)
    console.log(Nama.value)
    console.log(NPM.value)

    // localStorage.setItem("NPM", NPM.value)
    // localStorage.setItem("Nama", Nama.value)

    // jika local storage belum ada isi/value 
    if(localStorage.getItem("mahasiswa")===null){
        // simpan array kosong []
        localStorage.setItem("mahasiswa", "[]")
    }

    // panggil local storage (konversi string --> object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    // simpan value npm dan nama ke dalam object data
    data.push({
        ImageURL: ImageURL.value,
        nama: Nama.value,
        npm: NPM.value,
    })
    console.log(data)

    // simpan data terbaru ke dalam local storage 
    // konversi dari object menjadu string
    localStorage.setItem("mahasiswa", JSON.stringify(data))
    tampil()
}

function tampil() {
    //panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    // clear element ul id =list-mhs
    document.getElementById("list-mhs").innerHTML = ""
    //lakukkan perulangan (foreach)
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<div class="col-lg-4 col-md-6"> <img src="${element.ImageURL}" class="img-fluid"> <h4 class="text-primary">${element.nama}</h4> <h6 class="text-danger">${element.npm}</h6> </div>`
        
    });

}

//Jalankan function tampil()
tampil()