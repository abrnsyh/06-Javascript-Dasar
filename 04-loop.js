/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 1; i <= 100; i++) {
	let isPrime = true;
	for (let j = 2; j < i; j++) {
		if (i % j === 0) {
			isPrime = false;
			break;
		}
	}
	if (i > 1 && isPrime === true) {
		console.log(i);
	}
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let i = 0;
while (primeCounter < 50) {
	let isPrime = true;
	let j = 2;
	while (j < i) {
		if (i % j === 0) {
			isPrime = false;
			break;
		}
		j++;
	}
	if (i > 1 && isPrime === true) {
		primeCounter++;
	}

	if (primeCounter === 50) {
		fiftiethPrime = i;
		console.log(fiftiethPrime);
	}
	i++;
}

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
i = 0;
do {
	if (i % 2) {
		oddCounter++;
	}
	if (oddCounter === 50) {
		fiftiethOdd = i;
		console.log(fiftiethOdd);
	}
	i++;
} while (oddCounter < 50);
