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



// ================= BÀI 4 =================

const b4Btn = document.querySelector(".btn-4");

b4Btn.addEventListener("click", function(){
   let a = parseFloat(document.querySelector("#b4_a").value);
   let b = parseFloat(document.querySelector("#b4_b").value);
   let c = parseFloat(document.querySelector("#b4_c").value);
   const result = document.querySelector("#b4_result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.innerText = "Vui lòng nhập đủ ba số!";
    result.style.color = "red";
    return;
  }

  let arr = [a,b,c];
  arr.sort((a, b) => a - b);

   result.innerText = "Sau khi sắp xếp là: " + arr.join(", ");
  result.style.color = "green";

  });


  // ================= BÀI 5 =================
const b5Btn = document.querySelector(".btn-5");
b5Btn.addEventListener("click", function () {
  let numberKm = parseFloat(document.querySelector("#b5_index").value);
  const result = document.querySelector("#b5_result");

  if (isNaN(numberKm)) {
    result.innerText = "Vui lòng nhập dữ liệu!";
    result.style.color = "red";
    return;
  }
  let price = 0;
  if (numberKm <= 1) {
    price = numberKm * 15000;
  } else if (numberKm <= 5) {
    price = numberKm * 13500;
  } else if (numberKm <= 120) {
    price = numberKm * 11000;
  } else {
    let prePrice = numberKm * 11000;
    price = prePrice * 0.9;
  }

  result.innerText = `Chi phí là: ${price} VND`;
  result.style.color = "green";
});

// ================= BÀI 6 =================
const b6Btn = document.querySelector(".btn-6");

b6Btn.addEventListener("click", function() {
    let kwh = parseFloat(document.querySelector("#b6_kwh").value);
    const result = document.querySelector("#b6_result");
    let total = 0;

    if (isNaN(kwh) || kwh < 0) {
        result.innerText = "Vui lòng nhập số điện hợp lệ!";
        result.style.color = "red";
        return;
    }

    // Tính toán theo từng bậc dựa trên bảng giá của bạn
    if (kwh <= 50) {
        total = kwh * 1678;
    } else if (kwh <= 100) {
        total = (50 * 1678) + (kwh - 50) * 1734;
    } else if (kwh <= 200) {
        total = (50 * 1678) + (50 * 1734) + (kwh - 100) * 2014;
    } else if (kwh <= 300) {
        total = (50 * 1678) + (50 * 1734) + (100 * 2014) + (kwh - 200) * 2536;
    } else if (kwh <= 400) {
        total = (50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + (kwh - 300) * 2834;
    } else {
        total = (50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + (100 * 2834) + (kwh - 400) * 2927;
    }

    // Định dạng hiển thị tiền tệ (VNĐ)
    let formattedTotal = new Intl.NumberFormat('vi-VN').format(total);
    
    result.innerText = "Số tiền phải đóng là: " + formattedTotal + " VNĐ";
    result.style.color = "blue";
});

// ================= BÀI 7 =================

const b7Btn = document.querySelector(".btn-7");

b7Btn.addEventListener("click", function(){
    let n = parseFloat(document.querySelector("#b7_number").value);
    const result = document.querySelector("#b7_result");

     if (isNaN(n)) {
        result.innerText = "Vui lòng nhập dữ liệu!";
        result.style.color = "red";
        return;
    }
  
    let answer = 0;

    for(let i = 1; i <= n; i++){
      answer += i * (i + 1);
    }
    result.innerText = `Giá trị là: ${answer}`;
    result.style.color = "green";


} ); 


// ================= BÀI 8 =================

const b8Btn = document.querySelector(".btn-8");

b8Btn.addEventListener("click", function(){
    let n = parseFloat(document.querySelector("#b8_number").value);
    const result = document.querySelector("#b8_result");

     if (isNaN(n)) {
        result.innerText = "Vui lòng nhập dữ liệu!";
        result.style.color = "red";
        return;
    }
  
     if (n < 2) {
    result.innerText = n + " không phải là số nguyên tố";
    result.style.color = "red";
    return;
  }
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    result.innerText = n + " là số nguyên tố";
    result.style.color = "green";
  } else {
    result.innerText = n + " không phải là số nguyên tố";
    result.style.color = "red";
  }


} ); 


// ================= BÀI 9 =================
const b9Btn = document.querySelector(".btn-9");

b9Btn.addEventListener("click", function () {
  const result = document.querySelector("#b9_result");

  let leftCol = "";
  let rightCol = "";

  for (let i = 1; i <= 5; i++) {
    leftCol += `<div class="table-title">Bảng ${i}</div>`;
    for (let j = 1; j <= 10; j++) {
      leftCol += `<div>${i} x ${j} = ${i * j}</div>`;
    }
    leftCol += "<br>";
  }

  for (let i = 6; i <= 10; i++) {
    rightCol += `<div class="table-title">Bảng ${i}</div>`;
    for (let j = 1; j <= 10; j++) {
      rightCol += `<div>${i} x ${j} = ${i * j}</div>`;
    }
    rightCol += "<br>";
  }

  result.innerHTML = `
    <div class="column">${leftCol}</div>
    <div class="column">${rightCol}</div>
  `;
});