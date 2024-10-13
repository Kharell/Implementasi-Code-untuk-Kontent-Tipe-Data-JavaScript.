// TIPE DATA PRIMITIF

// 1. String
let nama = "Karolus Jone";
let lengkap = " Kalang";
let full = nama + lengkap;

console.log(`Nama Lengkap: ${full}`);

// 2. Number
let nilaiMid = 80;
let nilaiFinal = 70;
let nilaiAkhir = (nilaiMid + nilaiFinal) / 2;

console.log(`Nilai akhir anda adalah ${nilaiAkhir}`);

// 3. Boolean
let nilai1 = 30;
let nilai2 = 20;
let hasil = nilai1 > nilai2;
console.log(`Apakah nilai1 lebih besar dari nilai2? ${hasil}`); // true

// 4. Undefined
let user;
console.log(`User: ${user}`); // undefined

// 5. Null
let value = null;
console.log(`Value awal: ${value}`); // null

// Reassign atau menambahkan nilai baru
value = "Karel Ganteng";
console.log(`Value baru: ${value}`); // Karel Ganteng

// 6. Symbol
let uniqueID = Symbol("id");

// Menggunakan Symbol sebagai properti objek
let admin = {
  name: "Alice",
  [uniqueID]: "ID_100",
};

console.log(`Unique ID Admin: ${admin[uniqueID]}`); // Output: 'ID_100'

// 7. BigInt
let bigNumber = BigInt(123456789012345678901234567890);
let result = bigNumber * BigInt(2);

console.log(`Hasil operasi BigInt: ${result}`); // Output: 246913578024691357802469135780

// TIPE DATA NON PRIMITIF

// 1. Object
let dataSiswa = {
  nama: "Karolus Jone",
  umur: 20,
  alamat: "Jl. Kalang No. 1",
};

console.log(`Data Mahasiswa sebagai berikut:
  Nama: ${dataSiswa.nama}
  Umur: ${dataSiswa.umur}
  Alamat: ${dataSiswa.alamat}
`);

// 2. Array
let dataSiswaArray = [
  {
    nama: "Karolus Jone",
    umur: 20,
    alamat: "Jl. Kalang No. 1",
  },
  {
    nama: "Patrik Cuki",
    umur: 22,
    alamat: "Jl. Merdeka No. 10",
  },
  {
    nama: "Herul Ganteng",
    umur: 21,
    alamat: "Jl. Pahlawan No. 5",
  },
];

dataSiswaArray.forEach((siswa, index) => {
  console.log(`Data Mahasiswa ${index + 1}:`);
  console.log(`Nama: ${siswa.nama}`);
  console.log(`Umur: ${siswa.umur}`);
  console.log(`Alamat: ${siswa.alamat}`);
  console.log(""); // Tambahkan baris kosong sebagai pemisah
});

// 3. Function
function hitungNilaiAkhir(mid, final) {
  return (mid + final) / 2;
}

let nilaiAkhirSiswa = hitungNilaiAkhir(85, 75);
console.log(`Nilai akhir siswa: ${nilaiAkhirSiswa}`);
