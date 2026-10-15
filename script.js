‎/* ==================================================
‎   BIRTHDAY SURPRISE V3
‎================================================== */
‎
‎
‎/* ==================================================
‎   DEFAULT INFORMATION
‎
‎   এগুলো নিজের মতো পরিবর্তন করো।
‎================================================== */
‎
‎const DEFAULTS = {
‎
‎  name: "Sornaly Sorna",
‎
‎  sender: "Durjoy",
‎
‎  message:
‎    "আজকের দিনটা শুধু তোমার জন্মদিন নয়। আজকের দিনটা পৃথিবীতে তোমার আসার দিন। তোমার জীবনের প্রতিটি স্বপ্ন পূরণ হোক এবং তোমার হাসিটা সবসময় এমনই সুন্দর থাকুক। ❤️",
‎
‎  finalMessage:
‎    "তুমি যতটা ভাবো, তার থেকেও অনেক বেশি special। নিজের স্বপ্নের পিছনে ছুটতে থাকো এবং সবসময় নিজের মতো সুন্দর থেকো। ❤️"
‎
‎};
‎
‎
‎/* ==================================================
‎   URL DATA
‎
‎   Example:
‎
‎   ?name=Sadia&from=Durjoy
‎
‎================================================== */
‎
‎const params =
‎  new URLSearchParams(
‎    window.location.search
‎  );
‎
‎
‎const data = {
‎
‎  name:
‎    params.get("name") ||
‎    DEFAULTS.name,
‎
‎  sender:
‎    params.get("from") ||
‎    DEFAULTS.sender,
‎
‎  message:
‎    params.get("message") ||
‎    DEFAULTS.message,
‎
‎  finalMessage:
‎    params.get("final") ||
‎    DEFAULTS.finalMessage
‎
‎};
‎
‎
‎/* ==================================================
‎   ELEMENTS
‎================================================== */
‎
‎const screens = {
‎
‎  welcome:
‎    document.getElementById("welcome"),
‎
‎  name:
‎    document.getElementById("nameScreen"),
‎
‎  gift:
‎    document.getElementById("giftScreen"),
‎
‎  countdown:
‎    document.getElementById("countdownScreen"),
‎
‎  cake:
‎    document.getElementById("cakeScreen"),
‎
‎  wish:
‎    document.getElementById("wishScreen"),
‎
‎  photo:
‎    document.getElementById("photoScreen"),
‎
‎  letter:
‎    document.getElementById("letterScreen"),
‎
‎  secret:
‎    document.getElementById("secretScreen"),
‎
‎  final:
‎    document.getElementById("finalScreen")
‎
‎};
‎
‎
‎const readyBtn =
‎  document.getElementById("readyBtn");
‎
‎const continueBtn =
‎  document.getElementById("continueBtn");
‎
‎const giftBox =
‎  document.getElementById("giftBox");
‎
‎const blowBtn =
‎  document.getElementById("blowBtn");
‎
‎const photoBtn =
‎  document.getElementById("photoBtn");
‎
‎const letterBtn =
‎  document.getElementById("letterBtn");
‎
‎const secretBtn =
‎  document.getElementById("secretBtn");
‎
‎const finalBtn =
‎  document.getElementById("finalBtn");
‎
‎const countdown =
‎  document.getElementById("countdown");
‎
‎const flame =
‎  document.getElementById("flame");
‎
‎const blowText =
‎  document.getElementById("blowText");
‎
‎const music =
‎  document.getElementById("music");
‎
‎
‎/* ==================================================
‎   TEXT
‎================================================== */
‎
‎document.getElementById(
‎  "nameReveal"
‎).textContent =
‎  data.name;
‎
‎document.getElementById(
‎  "cakeName"
‎).textContent =
‎  `Dear ${data.name} ❤️`;
‎
‎document.getElementById(
‎  "wishTitle"
‎).textContent =
‎  `${data.name} ❤️`;
‎
‎document.getElementById(
‎  "photoName"
‎).textContent =
‎  `${data.name} ❤️`;
‎
‎document.getElementById(
‎  "letterName"
‎).textContent =
‎  data.name;
‎
‎document.getElementById(
‎  "sender"
‎).textContent =
‎  data.sender;
‎
‎document.getElementById(
‎  "finalName"
‎).textContent =
‎  data.name;
‎
‎document.getElementById(
‎  "finalBirthdayName"
‎).textContent =
‎  `${data.name} ❤️`;
‎
‎document.getElementById(
‎  "finalSender"
‎).textContent =
‎  data.sender;
‎
‎document.getElementById(
‎  "personalMessage"
‎).textContent =
‎  data.message;
‎
‎document.getElementById(
‎  "finalText"
‎).textContent =
‎  data.finalMessage;
‎
‎
‎/* ==================================================
‎   SCREEN NAVIGATION
‎================================================== */
‎
‎function show(screen) {
‎
‎  Object.values(screens)
‎    .forEach(item => {
‎
‎      item.classList.remove(
‎        "active"
‎      );
‎
‎    });
‎
‎  screen.classList.add(
‎    "active"
‎  );
‎
‎}
‎
‎
‎/* ==================================================
‎   MUSIC
‎
‎   Browser policy অনুযায়ী user interaction-এর
‎   পরে music চালানোর চেষ্টা করা হচ্ছে।
‎================================================== */
‎
‎function playMusic() {
‎
‎  try {
‎
‎    music.volume = .35;
‎
‎    music.play()
‎      .catch(() => {});
‎
‎  } catch(error) {}
‎
‎}
‎
‎
‎/* ==================================================
‎   READY
‎================================================== */
‎
‎readyBtn.addEventListener(
‎  "click",
‎  () => {
‎
‎    playMusic();
‎
‎    show(
‎      screens.name
‎    );
‎
‎  }
‎);
‎
‎
‎/* ==================================================
‎   NAME → GIFT
‎================================================== */
‎
‎continueBtn.addEventListener(
‎  "click",
‎  () => {
‎
‎    show(
‎      screens.gift
‎    );
‎
‎  }
‎);
‎
‎
‎/* ==================================================
‎   GIFT → COUNTDOWN
‎================================================== */
‎
‎giftBox.addEventListener(
‎  "click",
‎  () => {
‎
‎    giftBox.style.animation =
‎      "none";
‎
‎    show(
‎      screens.countdown
‎    );
‎
‎    startCountdown();
‎
‎  }
‎);
‎
‎
‎/* ==================================================
‎   COUNTDOWN
‎================================================== */
‎
‎function startCountdown() {
‎
‎  let number = 3;
‎
‎  countdown.textContent =
‎    number;
‎
‎  const timer =
‎    setInterval(() => {
‎
‎      number--;
‎
‎      if(number > 0) {
‎
‎        countdown.textContent =
‎          number;
‎
‎        countdown.style.animation =
‎          "none";
‎
‎        void countdown.offsetWidth;
‎
‎        countdown.style.animation =
‎          "pop 1s ease";
‎
‎      }
‎
‎      else {
‎
‎        clearInterval(timer);
‎
‎        countdown.textContent =
‎          "🎉";
‎
‎        setTimeout(
‎          () => {
‎
‎            show(
‎              screens.cake
‎            );
‎
‎          },
‎          800
‎        );
‎
‎      }
‎
‎    }, 1000);
‎
‎}
‎
‎
‎/* ==================================================
‎   BLOW CANDLE
‎================================================== */
‎
‎blowBtn.addEventListener(
‎  "click",
‎  () => {
‎
‎    flame.classList.add(
‎      "off"
‎    );
‎
‎    blowText.textContent =
‎      "✨ Wish made! ✨";
‎
‎    blowBtn.textContent =
‎      "🎉 Continue";
‎
‎    blowBtn.onclick =
‎      () => {
‎
‎        startConfetti();
‎
‎        show(
‎          screens.wish
‎        );
‎
‎      };
‎
‎  }
‎);
‎
‎
‎/* ==================================================
‎   WISH → PHOTO
‎================================================== */
‎
‎photoBtn.addEventListener(
‎  "click",
‎  () => {
‎
‎    show(
‎      screens.photo
‎    );
‎
‎  }
‎);
‎
‎
‎/* ==================================================
‎   PHOTO → LETTER
‎================================================== */
‎
‎letterBtn.addEventListener(
‎  "click",
‎  () => {
‎
‎    show(
‎      screens.letter
‎    );
‎
‎  }
‎);
‎
‎
‎/* ==================================================
‎   LETTER → SECRET
‎================================================== */
‎
‎secretBtn.addEventListener(
‎  "click",
‎  () => {
‎
‎    startConfetti();
‎
‎    show(
‎      screens.secret
‎    );
‎
‎  }
‎);
‎
‎
‎/* ==================================================
‎   SECRET → FINAL
‎================================================== */
‎
‎finalBtn.addEventListener(
‎  "click",
‎  () => {
‎
‎    startConfetti();
‎
‎    setTimeout(
‎      () => {
‎
‎        show(
‎          screens.final
‎        );
‎
‎      },
‎      500
‎    );
‎
‎  }
‎);
‎
‎
‎/* ==================================================
‎   CONFETTI
‎================================================== */
‎
‎const canvas =
‎  document.getElementById(
‎    "confetti"
‎  );
‎
‎const ctx =
‎  canvas.getContext("2d");
‎
‎let pieces = [];
‎
‎let animationRunning =
‎  false;
‎
‎
‎function resizeCanvas() {
‎
‎  canvas.width =
‎    window.innerWidth;
‎
‎  canvas.height =
‎    window.innerHeight;
‎
‎}
‎
‎
‎resizeCanvas();
‎
‎
‎window.addEventListener(
‎  "resize",
‎  resizeCanvas
‎);
‎
‎
‎function createConfetti() {
‎
‎  pieces = [];
‎
‎  for(
‎    let i = 0;
‎    i < 250;
‎    i++
‎  ) {
‎
‎    pieces.push({
‎
‎      x:
‎        Math.random() *
‎        canvas.width,
‎
‎      y:
‎        Math.random() *
‎        -canvas.height,
‎
‎      size:
‎        Math.random() * 8 + 4,
‎
‎      speed:
‎        Math.random() * 5 + 2,
‎
‎      rotation:
‎        Math.random() * 360,
‎
‎      rotationSpeed:
‎        Math.random() * 8 - 4,
‎
‎      hue:
‎        Math.random() * 360
‎
‎    });
‎
‎  }
‎
‎}
‎
‎
‎function drawConfetti() {
‎
‎  if(!animationRunning)
‎    return;
‎
‎  ctx.clearRect(
‎    0,
‎    0,
‎    canvas.width,
‎    canvas.height
‎  );
‎
‎
‎  pieces.forEach(
‎    piece => {
‎
‎      piece.y +=
‎        piece.speed;
‎
‎      piece.rotation +=
‎        piece.rotationSpeed;
‎
‎
‎      if(
‎        piece.y >
‎        canvas.height + 30
‎      ) {
‎
‎        piece.y = -20;
‎
‎        piece.x =
‎          Math.random() *
‎          canvas.width;
‎
‎      }
‎
‎
‎      ctx.save();
‎
‎      ctx.translate(
‎        piece.x,
‎        piece.y
‎      );
‎
‎      ctx.rotate(
‎        piece.rotation *
‎        Math.PI / 180
‎      );
‎
‎      ctx.fillStyle =
‎        `hsl(${piece.hue},90%,65%)`;
‎
‎      ctx.fillRect(
‎        -piece.size / 2,
‎        -piece.size / 2,
‎        piece.size,
‎        piece.size
‎      );
‎
‎      ctx.restore();
‎
‎    }
‎  );
‎
‎
‎  requestAnimationFrame(
‎    drawConfetti
‎  );
‎
‎}
‎
‎
‎function startConfetti() {
‎
‎  animationRunning = true;
‎
‎  createConfetti();
‎
‎  drawConfetti();
‎
‎}
‎
‎
‎/* ==================================================
‎   STOP CONFETTI AFTER 8 SECONDS
‎================================================== */
‎
‎function stopConfetti() {
‎
‎  animationRunning = false;
‎
‎  ctx.clearRect(
‎    0,
‎    0,
‎    canvas.width,
‎    canvas.height
‎  );
‎
‎}
‎
