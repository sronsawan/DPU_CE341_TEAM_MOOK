document.getElementById('showImageBtn').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    
    // เปลี่ยนสถานะการแสดง/ซ่อนของรูปภาพ
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
})
document.getElementById('showIPBtn').addEventListener('click', function () {
    // ดึง IP address ของผู้เข้าชม
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            // แสดง IP address ที่ได้ใน console.log
            console.log('IP address:', data.ip);
            // แสดง IP address ใน alert
            alert('IP address: ' + data.ip);
        })
        .catch(error => {
            console.error('เกิดข้อผิดพลาดในการดึง IP address:', error);
        });
    });