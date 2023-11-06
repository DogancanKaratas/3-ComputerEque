// ? main

// icon1 ve icon1-content öğelerini seçin
const icon1 = document.querySelector(".main-icon1 i");
const icon1Content = document.querySelector(".icon1-content");

// icon1 öğesine tıklama olayı ekleyin
icon1.addEventListener("click", function () {
  // icon1-content'in görünürlüğünü kontrol edin
  if (icon1Content.style.display === "none") {
    icon1Content.style.display = "block"; // Görünmez yap
  } else if (icon1Content.style.display === "block") {
    icon1Content.style.display = "none"; // Görünür yap
  } else {
    icon1Content.style.display = "none";
  }
});
// Sayfa üzerine herhangi bir yere tıklandığında tetiklenecek işlem
document.addEventListener("click", function (event) {
  // Eğer tıklanan öğe icon1 veya icon1-content ise bir şey yapma
  if (event.target === icon1 || event.target === icon1Content) {
    return;
  }

  // Başka bir yere tıklanırsa icon1-content'i gizle (display: none)
  icon1Content.style.display = "none";
});

const icon2 = document.querySelector(".main-icon2 i");
const icon2Content = document.querySelector(".icon2-content");

// icon1 öğesine tıklama olayı ekleyin
icon2.addEventListener("click", function () {
  // icon1-content'in görünürlüğünü kontrol edin
  if (icon2Content.style.display === "block") {
    icon2Content.style.display = "none"; // Görünmez yap
  } else {
    icon2Content.style.display = "block"; // Görünür yap
  }
});
// Sayfa üzerine herhangi bir yere tıklandığında tetiklenecek işlem
document.addEventListener("click", function (event) {
  // Eğer tıklanan öğe icon1 veya icon1-content ise bir şey yapma
  if (event.target === icon2 || event.target === icon2Content) {
    return;
  }

  // Başka bir yere tıklanırsa icon1-content'i gizle (display: none)
  icon2Content.style.display = "none";
});

// ? main

// btn1 butonunu seçin
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

// main ve case elementlerini seçin
const main = document.querySelector(".main");
const caseElement = document.querySelector(".case");
const monitor = document.querySelector(".monitor");

// btn1 butonuna tıklama olayını ekleyin
btn1.addEventListener("click", function () {
  // main elementini gizle (display: none)
  main.style.display = "none";

  // case elementini görünür yap (display: block)
  caseElement.style.display = "block";
});
btn2.addEventListener("click", function () {
  // main elementini gizle (display: none)
  main.style.display = "none";
  caseElement.style.display = "none";

  // cmonitor elementini görünür yap (display: block)
  monitor.style.display = "block";
});

// case
const ekranTxt = document.querySelector(".ekrankarti p");
const ekrankarti = document.querySelector(".ekrankarti");

ekrankarti.addEventListener("click", function () {
  if (ekranTxt.style.display === "none") {
    ekranTxt.style.display = "block";
  } else {
    ekranTxt.style.display = "none";
  }
});

// ram
const ramTxt = document.querySelector(".ram p");
const ram = document.querySelector(".ram");

ram.addEventListener("click", function () {
  if (ramTxt.style.display === "none") {
    ramTxt.style.display = "block";
    ram.style.width = "35%";
  } else {
    ramTxt.style.display = "none";
    ram.style.width = "4.5%";
  }
});
// cpu
const cpuTxt = document.querySelector(".cpu p");
const cpu = document.querySelector(".cpu");

cpu.addEventListener("click", function () {
  if (cpuTxt.style.display === "none") {
    cpuTxt.style.display = "block";
    cpu.style.width = "29%";
    cpu.style.left = "13%";
  } else {
    cpuTxt.style.display = "none";
    cpu.style.width = "15%";
    cpu.style.left = "27%";
  }
});

// fan
const fanTxt = document.querySelector(".fan p");
const fan = document.querySelector(".fan");

fan.addEventListener("click", function () {
  if (fanTxt.style.display === "none") {
    fanTxt.style.display = "block";
    fan.style.height = "12%";
  } else {
    fanTxt.style.display = "none";
    fan.style.height = "8%";
  }
});

// psu
const pcuTxt = document.querySelector(".pcu p");
const pcu = document.querySelector(".pcu");

pcu.addEventListener("click", function () {
  if (pcuTxt.style.display === "none") {
    pcuTxt.style.display = "block";
    pcu.style.width = "44%";
    pcuTxt.style.color = "yellow";
  } else {
    pcuTxt.style.display = "none";
    pcu.style.width = "21.5%";
  }
});

// icon
const iconHome = document.querySelector(".icon-home");

iconHome.addEventListener("click", function () {
  main.style.display = "block";

  caseElement.style.display = "none";
  monitor.style.display = "none";
});

// monitor icon

const mbtn1 = document.querySelector(".mbtn1");
const lcdTxt = document.querySelector(".lcd-txt");

mbtn1.addEventListener("click", function () {
  if (lcdTxt.style.display === "none") {
    lcdTxt.style.display = "block";
  } else if (lcdTxt.style.display === "block") {
    lcdTxt.style.display = "none";
  } else {
    lcdTxt.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (event.target === mbtn1 || event.target === lcdTxt) {
    return;
  }

  lcdTxt.style.display = "none";
});
const mbtn2 = document.querySelector(".mbtn2");
const ledTxt = document.querySelector(".led-txt");

mbtn2.addEventListener("click", function () {
  if (ledTxt.style.display === "none") {
    ledTxt.style.display = "block";
  } else if (ledTxt.style.display === "block") {
    ledTxt.style.display = "none";
  } else {
    ledTxt.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (event.target === mbtn2 || event.target === ledTxt) {
    return;
  }

  ledTxt.style.display = "none";
});
const mbtn3 = document.querySelector(".mbtn3");
const oledTxt = document.querySelector(".oled-txt");

mbtn3.addEventListener("click", function () {
  if (oledTxt.style.display === "none") {
    oledTxt.style.display = "block";
  } else if (oledTxt.style.display === "block") {
    oledTxt.style.display = "none";
  } else {
    oledTxt.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (event.target === mbtn3 || event.target === oledTxt) {
    return;
  }

  oledTxt.style.display = "none";
});
