var tanya = true;
while (tanya) {
    // menamngkap pilihan playe 
    var p = prompt('pilih : gajah, semut, orang');
    // menamgkap piliha computer 

    // mengenerate bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'SERTI!';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukkan pilihan yang salah';
    }

    // tampilkan hasil
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\n Maka hasilnya adalah ' + hasil);

    tanya = confirm('Lagi ?');
}

alert('Terima kasih sudah bermain suit jawa!');