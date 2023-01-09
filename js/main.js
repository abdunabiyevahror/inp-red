var elnp1 = document.querySelector(".inp1");
var elnp2 = document.querySelector(".inp2");
var elBtn = document.querySelector(".btn");

elBtn.addEventListener("click", function () {
  var val = elnp1.value.split("");
  var arrL = val.length;

  if (
    val[arrL - 10] == "@" &&
    val[arrL - 9] == "g" &&
    val[arrL - 8] == "m" &&
    val[arrL - 7] == "a" &&
    val[arrL - 6] == "i" &&
    val[arrL - 5] == "l" &&
    val[arrL - 4] == "." &&
    val[arrL - 3] == "c" &&
    val[arrL - 2] == "o" &&
    val[arrL - 1] == "m"
  ) {
    elnp1.classList.add("inp__1");
  } else {
    elnp1.classList.remove("inp__1");
    elnp1.classList.add("inp__2");
  }

  var vall = elnp2.value;
  var a = vall.toLoveCase;
  var arr = [];
  arr.push(vall);

  arr.forEach((e, i) => {
    if (isNaN(e) == true && vall != a && vall.includes(".")) {
      elnp2.classList.add("inp__1");
    } else if (isNaN(e) == true || vall != a || vall.includes(".")) {
      elnp2.classList.remove("inp__1");
      elnp2.classList.add("inp__2");
    }
  });
});