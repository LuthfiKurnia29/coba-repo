// Insert angka ke display
function insertnum(num){
    document.getElementById('input').value = document.getElementById('input').value + num;
}

// Dihitung
function hitung(){
    var hasil = document.getElementById('input').value;
    document.getElementById('input').value = eval(hasil);
}

//Clear inputan
function clean(){
    document.getElementById('input').value = "";
}

//Delete
function back(){
    var hasil = document.getElementById('input').value;
    document.getElementById('input').value = hasil.substring(0,hasil.length-1);
}