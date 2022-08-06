var noAngkot = 1;
var angkotBeroperasi = 6;
var jmLAngkot = 10;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik.");
  noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmLAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " Tidak Beroperasi Dengan Baik.");
}
