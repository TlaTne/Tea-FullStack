Các hàm thông dụng trong JavaScript

1. alert()
   • Mục đích: Hiển thị một hộp thoại thông báo với một nội dung và nút "OK".

• Ví dụ: `alert("Chào mừng bạn!");`

2. confirm()
   • Mục đích: Hiển thị hộp thoại xác nhận với nút "OK" và "Cancel".

• Trả về: `true` nếu chọn OK, `false` nếu chọn Cancel.

• Ví dụ: `let xacNhan = confirm("Bạn có muốn xóa không?");`

3. setTimeout()
   • Mục đích: Thực hiện một hành động sau một khoảng thời gian chờ (chỉ chạy 1 lần).

• Cú pháp: `setTimeout(hàm, miligiây);`

• Ví dụ: `setTimeout(() => alert("Hiện sau 2 giây"), 2000);`

4. setInterval()
   • Mục đích: Lặp lại một hành động sau mỗi khoảng thời gian định kỳ.

• Cú pháp: `setInterval(hàm, miligiây);`

• Ví dụ: `setInterval(() => console.log("Lặp lại mỗi giây"), 1000);`

💡 Lưu ý nhanh
• 1 giây = 1000 miligiây.

• `alert` và `confirm` sẽ dừng việc thực thi code cho đến khi người dùng tương tác.
