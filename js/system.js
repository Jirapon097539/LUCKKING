$(document).ready(function () {

    // $("#service-phone").on("click", function () {
    //     $("#content-all").load("service.html");
    //     setActiveTab("#service");
    //   });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // ฟังก์ชันตั้งค่าคลาส active
    function setActiveTab(activeTabId) {
        $(".navbar-nav .nav-link").removeClass("active");
        $(activeTabId).addClass("active");
    }

    // ปิด Navbar เมื่อคลิกลิงก์
    $(".navbar-nav .nav-link").on("click", function () {
        const navbarCollapse = document.getElementById("navbarCollapse1");
        if ($(navbarCollapse).hasClass("show")) {
            new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    });
})