AOS.init();
$(document).ready(function() {
    var submit = $("button[type='submit']");
    submit.click(function() {
        var data = $('form.boxSign').serialize();
        $.ajax({
            type: 'GET',
            url: 'https://script.google.com/macros/s/AKfycbzZ6ObABDCIpcsZkohwnyrbUJB0r-IdQB-6lg5zJQRduz9PMNkl/exec',
            dataType: 'json',
            crossDomain: true,
            data: data,
            success: function(data) {
                if (data == 'false') {
                    alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
                } else {
                    alert('Đã Đăng Ký Thành Công');
                }
            }

        });

        return false;
    });

});
$('.btn-danger').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('.form-signn').offset().top
    }, 400)
})
$('.setButton').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.boxSign').offset().top
    })
})