// Toggle Dark Mode
const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

// Music Player Auto Play
const audio = document.querySelector('audio');
audio.play();

// Mendapatkan elemen audio
const audioPlayer = document.getElementById('audioPlayer');

// Menambahkan pengaturan autoplay dan looping
audioPlayer.autoplay = true; // Memulai pemutaran otomatis
audioPlayer.loop = true; // Memutar musik dalam mode looping

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to simulate a login check

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        // Simulate a successful login (You can integrate your backend login here)
        alert("Login Successful!");
        // Redirect to another page after successful login (e.g. dashboard)
        // window.location.href = "dashboard.html";
    }
});
const videoElement = document.getElementById('videoElement');

// Memastikan audio aktif meski autoplay
videoElement.addEventListener('canplay', () => {
  videoElement.play().catch(error => {
    console.error('Autoplay gagal. Memerlukan interaksi pengguna:', error);
  });
});

// Hindari masalah autoplay di beberapa browser dengan interaksi pengguna
document.body.addEventListener('click', () => {
  if (videoElement.paused) {
    videoElement.play();
  }
});
 // JavaScript untuk memperbarui tahun secara dinamis
 const year = new Date().getFullYear();
 document.getElementById("copyright").textContent = `Copyright ©arpandy aspar${year}`;

    // Check if both fields are filled out
    if (username === "" || password === "") {
      document.getElementById('error-message').style.display = 'block';
      return false; // Prevent form submission
    } else {
      document.getElementById('error-message').style.display = 'none';
      alert("Login successful!");
      // You can redirect or handle login logic here
      return true; // Proceed with form submission (or further actions)
    }
    // Menambahkan event listener untuk menampilkan pesan saat link diklik
    document.getElementById('link-to-index').addEventListener('click', function(event) {
        alert("You are being redirected to Index page.");
      });
