// 头像切换功能
document.getElementById('avatar-select').addEventListener('change', function() {
    const selectedAvatar = this.value;
    document.getElementById('avatar').src = selectedAvatar;
});

// 头像上传功能
document.getElementById('avatar-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatar').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// 保存功能（简单示例）
document.getElementById('save-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    alert(`保存成功！\n姓名: ${name}\n简介: ${bio}`);
});