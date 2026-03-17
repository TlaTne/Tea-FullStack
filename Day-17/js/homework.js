// ================= BÀI 1 =================

const b1Btn = document.querySelector(".btn-1");


b1Btn.addEventListener("click", function(){
   let a = parseFloat(document.querySelector("#b1_a").value);
   let b = parseFloat(document.querySelector("#b1_b").value);
   const result = document.querySelector("#b1_result");

    if (isNaN(a) || isNaN(b)) {
    result.innerText = "Vui lòng nhập đủ hai số!";
    result.style.color = "red";
    return;
  }
  //Hoán vị ko dùng biến trung gian

  a = a+b;
  b = a-b;
  a = a-b;

  result.innerText = `Sau khi hoán vị: A = ${a}, B = ${b}`;
  result.style.color = "green";
    
});


// ================= BÀI 2 =================

const b2Btn = document.querySelector(".btn-2");

b2Btn.addEventListener("click", function(){
   let a = parseFloat(document.querySelector("#b2_a").value);
   let b = parseFloat(document.querySelector("#b2_b").value);
   let c = parseFloat(document.querySelector("#b2_c").value);
   const result = document.querySelector("#b2_result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.innerText = "Vui lòng nhập đủ ba số!";
    result.style.color = "red";
    return;
  }

  let max = a;
  if (max < b) {
    max = b;
  }
  if(max < c){
    max = c;
  }

   result.innerText = `Số lớn nhất: ${max}`;
  result.style.color = "green";

  });


  // ================= BÀI 3 =================

const b3Btn = document.querySelector(".btn-3");


b3Btn.addEventListener("click", function(){
   let a = parseFloat(document.querySelector("#b3_a").value);
   let b = parseFloat(document.querySelector("#b3_b").value);
   const result = document.querySelector("#b3_result");

    if (isNaN(a) || isNaN(b)) {
    result.innerText = "Vui lòng nhập đủ hai số!";
    result.style.color = "red";
    return;
  }
  //kiêm tra số cùng dấu

let ans = a * b;

if (ans < 0) {
    result.innerText = "Hai số khác dấu";
    result.style.color = "green";
}else if (ans > 0) {
    result.innerText = "Hai số cùng dấu";
    result.style.color = "green";
  } else {
    result.innerText = "Undefined";
    result.style.color = "green";
  }
    
});