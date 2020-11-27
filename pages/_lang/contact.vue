<template>
  <a class="gmail-href" href="mailto:genazozulua49@gmail.com"
    >genazozulua49@gmail.com</a
  >
</template>

<script>
module.exports = {
  mounted() {
    T = this;

    $nuxt.$emit("init-cursor-hover");

    /*--------------------------------------------------
        Анимация загрузки страницы
    ---------------------------------------------------*/

    TweenMax.to(".text-lower-main", 0.5, {
      transform: "translateY(0px)",
    });
    TweenMax.to(".home", 0.1, {
      opacity: 0.65,
      overflow: "hidden",
      filter: "blur(" + 155 + "px)",
      pointerEvents: "none",
    });
    document.querySelector("header").setAttribute("about-contact", "");
    // TweenMax.to(".contact-form-container", 0.5, {
    //   css: { opacity: 1, pointerEvents: "all" },
    //   delay: 1,
    // });
    // setTimeout(function () {
    //   document
    //     .querySelector(".contact-form-container")
    //     .setAttribute("active", "");
    // }, 400);

    /*--------------------------------------------------
        Работа с формой связи - Inputs animation in contact form
    ---------------------------------------------------*/
    // elements = document.querySelectorAll(
    //   ".contact-form__input-wrapper input, textarea"
    // );
    // elements.forEach(function (x) {
    //   x.addEventListener("blur", function () {
    //     if (!x.val()) {
    //       let label = x.parent().find("label"),
    //         inputTitle = x.parent().find(".contact-form__input-title");
    //       TweenMax.to(inputTitle, 0.8, {
    //         css: { color: "rgba(255,255,255,.35)" },
    //       });
    //       TweenMax.to(label, 0.8, { css: { width: "0%" } });
    //     }
    //   });
    // });

    // elements = document.querySelectorAll(
    //   ".contact-form__input-wrapper input,textarea"
    // );
    // elements.forEach(function (x) {
    //   x.addEventListener("focus", function () {
    //     let label = x.parent().find("label"),
    //       inputTitle = x.parent().find(".contact-form__input-title");
    //     TweenMax.to(inputTitle, 0.8, { css: { color: "white" } });
    //     TweenMax.to(label, 0.8, { css: { width: "100%" } });
    //   });
    // });

    // setTimeout(function () {
    //   if (
    //     document
    //       .querySelector("#magic-cursor")
    //       .classList.contains("show-loader")
    //   )
    //     T.$emit("cursor-loading");
    // }, 900);

    // document.querySelectorAll(".button").forEach((button) => {
    //   let duration = 3000,
    //     svg = button.querySelector("svg:not(.arrow-right)");

    //   button.style.setProperty("--duration", duration);

    //   button.addEventListener("click", (e) => {
    //     e.preventDefault();

    //     if (!button.classList.contains("loading")) {
    //       button.classList.add("loading");

    //       setTimeout(() => {
    //         svg.innerHTML = getPath(0, 0, [
    //           [3, 14],
    //           [8, 19],
    //           [21, 6],
    //         ]);
    //       }, duration / 2);
    //     }
    //   });
    // });

    // function getPoint(point, i, a, smoothing) {
    //   let cp = (current, previous, next, reverse) => {
    //       let p = previous || current,
    //         n = next || current,
    //         o = {
    //           length: Math.sqrt(
    //             Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)
    //           ),
    //           angle: Math.atan2(n[1] - p[1], n[0] - p[0]),
    //         },
    //         angle = o.angle + (reverse ? Math.PI : 0),
    //         length = o.length * smoothing;
    //       return [
    //         current[0] + Math.cos(angle) * length,
    //         current[1] + Math.sin(angle) * length,
    //       ];
    //     },
    //     cps = cp(a[i - 1], a[i - 2], point, false),
    //     cpe = cp(point, a[i - 1], a[i + 1], true);
    //   return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
    // }

    // function getPath(update, smoothing, pointsNew) {
    //   let points = pointsNew
    //       ? pointsNew
    //       : [
    //           [4, 12],
    //           [12, update],
    //           [20, 12],
    //         ],
    //     d = points.reduce(
    //       (acc, point, i, a) =>
    //         i === 0
    //           ? `M ${point[0]},${point[1]}`
    //           : `${acc} ${getPoint(point, i, a, smoothing)}`,
    //       ""
    //     );
    //   return `<path d="${d}" />`;
    // }
    //   window.addEventListener("keyup", function (e) {
    //     if (e.key === "Enter") {
    //       checkForm();
    //     }
    //   });

    //   function checkForm() {
    //     let check = 0;
    //     document.querySelectorAll("input,textarea").forEach(function (x) {
    //       if (!x.val()) {
    //         check++;
    //         x.setAttribute(
    //           "placeholder",
    //           "Вы не ввели " + x.getAttribute("what")
    //         );
    //       } else {
    //         x.setAttribute("placeholder", "");
    //       }
    //     });
    //     let inputEmail = document.querySelector("[what='email']"),
    //       email = inputEmail.val();
    //     if (inputEmail.val()) {
    //       if (!validateEmail(email)) {
    //         let label = inputEmail.parent().find("label"),
    //           inputTitle = inputEmail.parent().find(".contact-form__input-title");
    //         TweenMax.to(inputTitle, 0.8, {
    //           css: { color: "rgba(255,255,255,.35)" },
    //         });
    //         TweenMax.to(label, 0.8, { css: { width: "0%" } });

    //         check++;
    //         inputEmail.val("");
    //         inputEmail.setAttribute("placeholder", "Email введен неверно");
    //       }
    //     }
    //     if (!check) {
    //       let name = document.querySelector("[what='имя']").val(),
    //         email = document.querySelector("[what='email']").val(),
    //         // phone = document.querySelector("[what='телефон']").parent().find('input').val(),
    //         message = document.querySelector("[what='сообщение']").val();

    //       $.ajax({
    //         type: "GET",
    //         url: "/php/sendMessage.php",
    //         data: { name: name, email: email, message: message },
    //         contentType: "html",
    //         success: function (data) {
    //           let input = document.querySelector("input, textarea"),
    //             label = document.querySelector("label"),
    //             inputTitle = document.querySelector(".contact-form__input-title");
    //           sendMessageBtn.setAttribute("success", "");
    //           input.val("");
    //           document
    //             .querySelector("[what='имя']")
    //             .setAttribute("placeholder", "Имя / Name");
    //           document
    //             .querySelector("[what='email']")
    //             .setAttribute("placeholder", "E-mail");
    //           document
    //             .querySelector("[what='сообщение']")
    //             .setAttribute("placeholder", "Сообщение / Message");
    //           input.blur();
    //           // TweenMax.to(inputTitle, .8, {css:{ color: 'rgba(255,255,255,.35)' }});
    //           // TweenMax.to(label, .8, {css:{ width: '0%' }});
    //           setTimeout(function () {
    //             sendMessageBtn.removeAttribute("success");
    //           }, 4000);
    //         },
    //       });
    //     }
    //   }

    //   function validateEmail(email) {
    //     let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email);
    //   }
  },
};
</script>