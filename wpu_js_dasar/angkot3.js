var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang beroperasi tidak baik.");
  }
}
