// icon1 ve icon1-content öğelerini seçin
const icon1 = document.querySelector(".main-icon1 i");
const icon1Content = document.querySelector(".icon1-content");

// icon1 öğesine tıklama olayı ekleyin
icon1.addEventListener("click", function () {
  // icon1-content'in görünürlüğünü kontrol edin
  if (icon1Content.style.display === "block") {
    icon1Content.style.display = "none"; // Görünmez yap
  } else {
    icon1Content.style.display = "block"; // Görünür yap
  }
});

// btn1 butonunu seçin
const btn1 = document.querySelector(".btn1");

// main ve case elementlerini seçin
const main = document.querySelector(".main");
const caseElement = document.querySelector(".case");

// btn1 butonuna tıklama olayını ekleyin
btn1.addEventListener("click", function () {
  // main elementini gizle (display: none)
  main.style.display = "none";

  // case elementini görünür yap (display: block)
  caseElement.style.display = "block";
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

// icon
const iconHome = document.querySelector(".icon-home");

iconHome.addEventListener("click", function () {
  main.style.display = "block";

  caseElement.style.display = "none";
});
