document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // เพิ่มคลาสเมื่อเลื่อนเข้ามาในหน้าจอ
                entry.target.classList.add("fade-in");
            } else {
                // ลบคลาสเมื่อออกจากหน้าจอ
                entry.target.classList.remove("fade-in");
            }
        });
    });

    // เลือกองค์ประกอบทั้งหมดที่ต้องการอนิเมชัน
    const hiddenElements = document.querySelectorAll(".fade-in-target");
    hiddenElements.forEach((el) => observer.observe(el));
});


const animeTitle = (element) => {
    const arrayText = element.innerHTML.split("");
    element.innerHTML = "";
    arrayText.forEach((letter, index) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 135 * index);
    });
  };
  
  const h1 = document.querySelector("h1.title-header");
  animeTitle(h1);
  

   // Connecting Dots Script
  //  var canvasDots = function () {
  //   var canvas = document.querySelector('canvas'),
  //     ctx = canvas.getContext('2d'),
  //     colorDot = '#CECECE',
  //     color = '#CECECE';
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   ctx.fillStyle = colorDot;
  //   ctx.lineWidth = 0.1;
  //   ctx.strokeStyle = color;

  //   var mousePosition = {
  //     x: 30 * canvas.width / 100,
  //     y: 30 * canvas.height / 100
  //   };

  //   var dots = {
  //     nb: 600,
  //     distance: 60,
  //     d_radius: 100,
  //     array: []
  //   };

  //   function Dot() {
  //     this.x = Math.random() * canvas.width;
  //     this.y = Math.random() * canvas.height;

  //     this.vx = -.5 + Math.random();
  //     this.vy = -.5 + Math.random();

  //     this.radius = Math.random();
  //   }

  //   Dot.prototype = {
  //     create: function () {
  //       ctx.beginPath();
  //       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //       ctx.fill();
  //     },

  //     animate: function () {
  //       for (i = 0; i < dots.nb; i++) {
  //         var dot = dots.array[i];

  //         if (dot.y < 0 || dot.y > canvas.height) {
  //           dot.vx = dot.vx;
  //           dot.vy = -dot.vy;
  //         } else if (dot.x < 0 || dot.x > canvas.width) {
  //           dot.vx = -dot.vx;
  //           dot.vy = dot.vy;
  //         }
  //         dot.x += dot.vx;
  //         dot.y += dot.vy;
  //       }
  //     },

  //     line: function () {
  //       for (i = 0; i < dots.nb; i++) {
  //         for (j = 0; j < dots.nb; j++) {
  //           i_dot = dots.array[i];
  //           j_dot = dots.array[j];

  //           if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
  //             if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
  //               ctx.beginPath();
  //               ctx.moveTo(i_dot.x, i_dot.y);
  //               // ctx.lineTo(j_dot.x, j_dot.y);
  //               ctx.stroke();
  //               ctx.closePath();
  //             }
  //           }
  //         }
  //       }
  //     }
  //   };

  //   function createDots() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     for (i = 0; i < dots.nb; i++) {
  //       dots.array.push(new Dot());
  //       dot = dots.array[i];

  //       dot.create();
  //     }

  //     dot.line();
  //     dot.animate();
  //   }

  //   window.onmousemove = function (parameter) {
  //     mousePosition.x = parameter.pageX;
  //     mousePosition.y = parameter.pageY;
  //   };

  //   setInterval(createDots, 1000 / 30);
  // };

  // window.onload = function () {
  //   canvasDots();
  // };