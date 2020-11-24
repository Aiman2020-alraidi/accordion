"use strict";
const accordion = document.querySelectorAll(".accordion-question");
accordion.forEach((accordions) => {
  const btns = accordions.querySelector(".btns");
  btns.addEventListener("click", (e) => {
    accordion.forEach((item) => {
      if (item !== accordion) {
        item.classList.remove("show-accordion");
      }
    });
    if (!accordions.classList.contains("show-accordion")) {
      accordions.classList.add("show-accordion");
    } else {
      accordions.classList.remove("show-accordion");
    }
  });
});

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const elemAccordion = e.currentTarget.parentElement.parentElement;
//     if (!elemAccordion.classList.contains("show-accordion")) {
//       elemAccordion.classList.add("show-accordion");
//     } else {
//       elemAccordion.classList.remove("show-accordion");
//     }
//     // elemAccordion.classList.toggle("show-accordion");
//   });
// });
