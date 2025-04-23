// Fungsi untuk menunjukkan pesan rahasia sebagai popup
function showHiddenMessage() {
  const hiddenMessage = document.getElementById("hiddenMessage");
  const button = document.querySelector("button");
  const popupMessage = document.getElementById("popupMessage");

  if (popupMessage.style.display === "none" || popupMessage.style.display === "") {
    // Menampilkan popup
    popupMessage.style.display = "block";
    button.textContent = "Pesan Terbuka 💖";
  } else {
    // Menyembunyikan popup
    popupMessage.style.display = "none";
    button.textContent = "Klik untuk Pesan Rahasia 💖";
  }
}

// Fungsi untuk menutup popup
function closePopup() {
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.style.display = "none";
}

// Love Calculator Function
document.getElementById('loveForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;
  
  if (name1 && name2) {
    const lovePercentage = calculateLovePercentage(name1, name2);
    displayLoveResult(lovePercentage);
  } else {
    alert('Tolong masukkan kedua nama!');
  }
});

// Fungsi untuk menghitung persentase cinta berdasarkan nama
function calculateLovePercentage(name1, name2) {
  const combinedNames = name1 + name2;
  let loveScore = 0;
  
  // Menjumlahkan nilai ASCII dari semua karakter nama
  for (let i = 0; i < combinedNames.length; i++) {
    loveScore += combinedNames.charCodeAt(i);
  }
  
  // Menggunakan sisa bagi 100 untuk menghasilkan persentase
  let lovePercentage = loveScore % 100;
  return lovePercentage;
}

// Fungsi untuk menampilkan hasil kalkulasi cinta
function displayLoveResult(lovePercentage) {
  const resultText = document.getElementById('result');
  resultText.textContent = `Cinta kalian: ${lovePercentage}% 💖`;
}
// Ambil elemen audio
let audio = document.getElementById('audioPlayer');

// Fungsi untuk memastikan audio siap sebelum diputar
audio.addEventListener('canplaythrough', function() {
  console.log("Audio siap diputar");
  // Anda dapat menambahkan logika lain jika dibutuhkan
});

// Event listener untuk mendeteksi saat halaman digeser
window.addEventListener('scroll', function() {
  // Jika halaman sudah digeser ke bawah sedikit, mulai memutar musik
  if (window.scrollY > 0 && audio.paused) {
    audio.play();
  }
});