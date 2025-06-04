// Dark Mode Toggle
document.getElementById('toggleTheme').addEventListener('change', function () {
  document.body.classList.toggle('dark');
});

// Flip Card
function flipCard(card) {
  card.classList.toggle('flipped');
}

// Typing Animation
const text = "Proud of u!";
let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}
typeText();

// 🎉 Celebrate Button Click
function celebrate() {
  playMusic();         // Aktifkan musik
  startConfetti();     // Jalankan konfeti
}

// 🔊 Music Player
function playMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play().catch(error => {
      console.warn("Autoplay blocked. Music will start after user interacts.");
    });
  }
}

// 🎊 Confetti Generator
function startConfetti() {
  const duration = 1500;
  const end = Date.now() + duration;
  const colors = ['#f9a8d4', '#fbcfe8', '#c084fc', '#a5f3fc'];

  (function frame() {
    if (Date.now() > end) return;
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '0px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = 999;
    confetti.style.opacity = 0.9;
    confetti.style.animation = 'fall 2s linear';

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
    requestAnimationFrame(frame);
  })();
}

// 🌈 Inject CSS Keyframes
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);

function startFlowerRain() {
  const duration = 3000; // Durasi 3 detik
  const end = Date.now() + duration;
  const flowerEmojis = ['🌸', '💐', '🌼', '🌺', '🌻'];

  (function frame() {
    if (Date.now() > end) return;
    const flower = document.createElement('div');
    flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    flower.style.position = 'fixed';
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.top = '-30px';
    flower.style.fontSize = `${Math.random() * 20 + 20}px`;
    flower.style.animation = 'fall-flower 4s linear';
    flower.style.zIndex = 999;

    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 4000);
    requestAnimationFrame(frame);
  })();
}
function celebrate() {
  playMusic();
  startConfetti();
  startFlowerRain(); // 🌸 efek bunga!
}
function celebrate() {
  playMusic();
  startConfetti();
  startFlowerRain();

  // Trigger karakter jalan
  const student = document.querySelector('.student');
  student.style.animation = 'walkToSchool 10s linear forwards';
}
let score = 0;
let gameInterval;
let gameTime = 15000; // 15 detik

function startGame() {
  document.getElementById("gameArea").style.display = "block";
  score = 0;
  document.getElementById("score").textContent = score;

  gameInterval = setInterval(spawnTarget, 600);

  setTimeout(() => {
    clearInterval(gameInterval);
    alert("⏰ Waktu Habis!\nSkor kamu: " + score);
    document.getElementById("gameArea").innerHTML = `<p>🎯 Skor akhir: <strong>${score}</strong></p>`;
  }, gameTime);
}

function spawnTarget() {
  const gameArea = document.getElementById("gameArea");
  const target = document.createElement("div");
  target.textContent = "🎓";
  target.className = "target";

  const x = Math.random() * (gameArea.clientWidth - 40);
  const y = Math.random() * (gameArea.clientHeight - 40);
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  target.addEventListener("click", () => {
    score++;
    document.getElementById("score").textContent = score;
    target.remove();
  });

  gameArea.appendChild(target);

  setTimeout(() => target.remove(), 1000);
}
