$(document).ready(function () {

    slide()
    // initSwiper()
    // โหลดคอนเทนต์เมื่อคลิกลิงก์
    $("#Privacy").on("click", function () {
        $("#content-all").load("Privacy_Policy.html");
    });

    $("#FAQ").on("click", function () {
        $("#content-all").load("FAQ.html");
    });

    $("#contact_us").on("click", function () {
        $("#content-all").load("Contact.html");
        setActiveTab("#contact_us");
    });

    $("#service").on("click", function () {
      $("#content-all").load("service.html");
      setActiveTab("#service");
    });

    $("#about").on("click", function () {
        $("#content-all").load("about.html");
        setActiveTab("#about");
    });
    $("#work").on("click", function () {
        $("#content-all").load("Work.html");
        setActiveTab("#work");
    });
    $("#contact_us-phone").on("click", function () {
        $("#content-all").load("Contact.html");
        setActiveTab("#contact_us");
    });

    $("#service-phone").on("click", function () {
      $("#content-all").load("service.html");
      setActiveTab("#service");
    });

    $("#about-phone").on("click", function () {
        $("#content-all").load("about.html");
        setActiveTab("#about");
    });
    $("#work-phone").on("click", function () {
        $("#content-all").load("Work.html");
        setActiveTab("#work");
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
   
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

});

function slide(){
  
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,  // จำนวนสไลด์ที่แสดงพร้อมกันบนหน้าจอใหญ่
        spaceBetween: 20,   // ระยะห่างระหว่างสไลด์
        loop: true,         // ให้สไลด์วนรอบ
        autoplay: {
          delay: 3000,      // ระยะเวลาในการสไลด์อัตโนมัติ (มิลลิวินาที)
          disableOnInteraction: false,  // การเลื่อนจะไม่หยุดหากมีการโต้ตอบ
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1, // แสดงเพียง 1 รูป
          },
          768: {
            slidesPerView: 3, // แสดง 3 
            spaceBetween: 20, // ระยะห่างระหว่างรูป
          },
        },
      });
       var swiper1 = new Swiper(".mySwiper1", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,      // ระยะเวลาในการสไลด์อัตโนมัติ (มิลลิวินาที)
        disableOnInteraction: false,  // การเลื่อนจะไม่หยุดหากมีการโต้ตอบ
      },
    });
   
}
