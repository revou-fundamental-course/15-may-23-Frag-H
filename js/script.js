const notNumber = '<br><p style="font-size: small; color: red;">Masukkan angka!</p>'
const ifEmpty = '<br><p style="font-size: small; color: red;">Belum ada nilai sisinya!</p>'
//Hitung luas
function hitungLuas(){
    var sisiLuas = document.getElementById("sisi-luas").value;
    if(Number(sisiLuas)){
        document.getElementById("output_luas").innerHTML = '<br><p class="output">L = S x S<br>L = '+sisiLuas+' x '+sisiLuas+'<br>L = '+sisiLuas**2+'</p>'//If the input is number then dispalay square area calculation
    }else if(sisiLuas == 0){
        document.getElementById("output_luas").innerHTML = ifEmpty//Memberitahu ga ada input
    }else{
        document.getElementById("output_luas").innerHTML = notNumber//Memberitahu input yang dimasuk bukan angka
    }
    document.getElementById("sisi-luas").value = ''//mereset kalkulator untuk luas
}
//Tombol Reset luas
function resetLuas(){
    document.getElementById("output_luas").innerHTML = ''
    document.getElementById("sisi-luas").value = ''
}
//Hitung keliling
function hitungKeliling(){
    var sisiKeliling = document.getElementById("sisi-keliling").value
    if(Number(sisiKeliling)){
        document.getElementById("output_keliling").innerHTML = '<br><p class="output">K = 4 x S<br>K = 4 x '+sisiKeliling+'<br>K = '+sisiKeliling*4+'</p>'//If the input is number then dispalay square circumference calculation
    }else if(sisiKeliling == 0){
        document.getElementById("output_keliling").innerHTML = ifEmpty//Memberitahu ga ada input
    }else{
        document.getElementById("output_keliling").innerHTML = notNumber//If the input is not number then display this massage
    }
    document.getElementById("sisi-keliling").value = ''//mereset kalkulator untuk keliling
}
//Tombol Reset keliling
function resetKeliling(){
    document.getElementById("output_keliling").innerHTML = ''
    document.getElementById("sisi-keliling").value = ''
}
