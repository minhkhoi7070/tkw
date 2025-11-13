// Nội dung file global.js

// 1. Chờ trang web tải xong
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

// 2. Hàm kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
    // Lấy thông tin người dùng từ localStorage
    const currentUserJSON = localStorage.getItem('currentUser');
    
    // Lấy các mục menu
    const guestMenu = document.getElementById('user-guest-menu');
    const memberMenu = document.getElementById('user-member-menu');
    const welcomeMessage = document.getElementById('welcome-message');

    if (currentUserJSON) {
        // ĐÃ ĐĂNG NHẬP
        const currentUser = JSON.parse(currentUserJSON);
        
        // Ẩn menu khách, hiện menu thành viên
        if (guestMenu) guestMenu.style.display = 'none';
        if (memberMenu) memberMenu.style.display = 'list-item'; // 'list-item' để hiển thị đúng
        
        // Hiển thị tên người dùng
        if (welcomeMessage) welcomeMessage.innerText = 'Chào, ' + currentUser.name;

    } else {
        // CHƯA ĐĂNG NHẬP
        // Hiện menu khách, ẩn menu thành viên
        if (guestMenu) guestMenu.style.display = 'list-item';
        if (memberMenu) memberMenu.style.display = 'none';
    }
}

// 3. Hàm Đăng xuất
function logout() {
    // Xóa người dùng hiện tại khỏi localStorage
    localStorage.removeItem('currentUser');
    
    // Chuyển hướng về trang chủ
   
    window.location.href = '/Home Page/src/HomePage.html'; // Sửa lại link trang chủ nếu cần
}