"use strict";
//forEaach
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


