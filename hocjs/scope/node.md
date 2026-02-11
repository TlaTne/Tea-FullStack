Khái niệm Phạm vi (Scope) trong JavaScript
1. Scope là gì?
Xác định khả năng truy cập (tầm nhìn) của các biến trong mã nguồn.

2. Các loại Scope chính
Local Scope (Cục bộ)

• Function Scope: Biến trong hàm (khai báo với `var`, `let`, `const`).

• Block Scope: Biến trong `{ }` (chỉ với `let`, `const`).

• Đặc điểm: Chỉ truy cập được từ bên trong nơi khai báo.

Global Scope (Toàn cục)

• Khai báo ngoài tất cả các hàm/khối.

• Đặc điểm: Truy cập được từ mọi nơi trong chương trình.

3. Lưu ý quan trọng
• Hạn chế Global Scope: Tránh xung đột tên và lãng phí bộ nhớ.

• Ưu tiên Local Scope: Giúp mã nguồn an toàn, dễ bảo trì và giải phóng bộ nhớ tốt hơn.

• Sử dụng `let`/`const`: Thay thế cho `var` để quản lý phạm vi chặt chẽ hơn.
Ví dụ dễ hiểu cho người mới
1. Biến Toàn cục (Global)

Giống như biển báo giao thông: Ai cũng thấy và phải tuân theo.

```

let name = "An"; // Biến toàn cục

function hello() {

  console.log("Chào " + name); // Ok!

}

```

2. Biến Cục bộ (Local)

Giống như mật khẩu điện thoại: Chỉ bạn biết và dùng được trong máy của bạn.

```

function login() {

  let pass = "1234"; // Biến cục bộ

  console.log(pass); // Ok!

}

// console.log(pass); // Lỗi! Bên ngoài không biết pass là gì

```

3. Block Scope (Phạm vi khối)

Giống như đồ ăn trong tủ lạnh: Chỉ dùng được khi ở trong bếp.

```

if (true) {

  let food = "Pizza"; // Block scope

}

// console.log(food); // Lỗi! Đã ra khỏi "tủ lạnh"

```