/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE

// - Type Error: error yang menunjukan bahwa terjadi nya kesalahan pada tipe data
// - Reference Error:  error yang menunjukan bahwa suatu variable yang di panggil tidak ada
// - Range Error: error yang menunjukan jika angka yang di passing di luar nilai yang di izinkan
// - Syntax Error: error yang menunjukan adanya kesalahan pada penulisan syntax

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE

// Jika kita menjalankan code dibawah akan terjadi error
// Error yang akan muncul adalah Reference Error
// Error terjadi dikarenakan kita memanggil suatu variable sebelum variable itu di buat

console.log(salaryWithVar);
console.log(salaryWithConst);

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
