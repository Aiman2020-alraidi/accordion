"use strict";
// forEaach
const message = document.querySelectorAll(".accordion-test");
const question = document.querySelectorAll(".accordion-question");
message.forEach((item) => {
  item.addEventListener("click", (e) => {
    const parentElement = e.currentTarget.parentElement.classList;
    if (parentElement.contains("show-accordion")) {
      parentElement.remove("show-accordion");
    } else {
      question.forEach((itemQuestion) => {
        if (itemQuestion !== item) {
          itemQuestion.classList.remove("show-accordion");
        }
        console.log("question ", itemQuestion);
        console.log("item ", item);
      });
      parentElement.add("show-accordion");
    }
  });
});

// const parentAccordion = document.querySelectorAll(".accordion-question");
// parentAccordion.forEach((accordion) => {
//   const btns = accordion.querySelector(".btns");
//   btns.addEventListener("click", (e) => {
//     parentAccordion.forEach((itemsAccordion) => {
//       if (itemsAccordion !== accordion) {
//         itemsAccordion.classList.remove("show-accordion");
//       }
//       console.log(itemsAccordion);
//     });
//     const accordionElemnt = accordion.classList;
//     if (accordionElemnt.contains("show-accordion")) {
//       accordionElemnt.remove("show-accordion");
//     } else {
//       accordionElemnt.add("show-accordion");
//     }
//   });
// });

// using button
// const btns = document.querySelectorAll(".btns");
// const question = document.querySelectorAll(".accordion-question");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const parentElement = e.currentTarget.parentElement.parentElement.classList;
//     if (!parentElement.contains("show-accordion")) {
//       question.forEach((items) => {
//         if (items !== btn) {
//           items.classList.remove("show-accordion");
//         }
//       });
//       parentElement.add("show-accordion");
//     } else {
//       parentElement.remove("show-accordion");
//     }
//   });
// });

// for
// const btns = document.querySelectorAll(".btns");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", (e) => {
//     const parentElement = e.currentTarget.parentElement.parentElement.classList;
//     if (!parentElement.contains("show-accordion")) {
//       for (let i = 0; i < btns.length; i++) {
//         btns[i].parentElement.parentElement.classList.remove("show-accordion");
//       }
//       parentElement.add("show-accordion");
//     } else {
//       parentElement.remove("show-accordion");
//     }
//   });
// }

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const elemAccordion = e.currentTarget.parentElement.parentElement;
//     elemAccordion.classList.toggle("show-accordion");
//   });
// });
