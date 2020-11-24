"use strict";
const parentAccordion = document.querySelectorAll(".accordion-question");
parentAccordion.forEach((accordion) => {
  const btns = accordion.querySelector(".btns");
  btns.addEventListener("click", (e) => {
    parentAccordion.forEach((itemsAccordion) => {
      if (itemsAccordion !== accordion) {
        itemsAccordion.classList.remove("show-accordion");
      }
      console.log(itemsAccordion);
    });
    const accordionElemnt = accordion.classList;
    if (accordionElemnt.contains("show-accordion")) {
      accordionElemnt.remove("show-accordion");
    } else {
      accordionElemnt.add("show-accordion");
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
