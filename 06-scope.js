/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

// ada 3 tipe variabel scope di javascript, yaitu;
// - Block Scope: variable dengan tipe ini hanya dapat di akses di dalam block {} dimana ia di deklarasi kan.
// contoh nya :
// {
// 	let x = 2;
// }
// console.log(x); // output nya is not defined

// - Local Scope: variable yang di deklarasikan di dalam function (contoh nya) hanya dapat di akses oleh function tersebut dan akan menjadi local variable
// contoh nya:
// const greet = () => {
//   const greeting = 'hi'
// }
// variable greeting hanya dapat di akses di dalam fungsi greet

// - Global Scope: variable yang di deklarasikan di luar function
// contoh nya:
// let name = 'abri'
// const myName = () => {
//   console.log('hi ' + name) // variable name dapat kita gunakan di dalam fungsi myName karna tipe scope nya global
// }

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
// Yang akan di tampilkan oleh console adalah "Mariah"
// Alasan nya adalah karna name yang ada pada fungsi printFirstname adalah parameter fungsi tersebut, bukan memanggil variabel name
// dan kenapa hanya nama depan nya terpanggil ?, karna fungsi tersebut me return hasil dari argumen yang di gunakan oleh fungsi tersebut

const name = "John Watson";

function printFirstName(name) {
	return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
