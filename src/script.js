document.addEventListener("DOMContentLoaded", function () {
    const scrollingSection = document.querySelector(".scs");
    const flexCol = document.querySelector(".scr");

    let isStatic = false;

    // Function to check if all elements in flex-col have scrolled to the end
    function checkScroll() {
        const isAtBottom = flexCol.scrollHeight - flexCol.clientHeight <= flexCol.scrollTop;

        if (!isStatic && isAtBottom) {
            scrollingSection.style.position = "static";
            isStatic = true;
        } else if (isStatic && !isAtBottom) {
            scrollingSection.style.position = "relative";
            isStatic = false;
        }
    }

    // Add a scroll event listener to the flex-col element
    flexCol.addEventListener("scroll", checkScroll);

    // Initial check
    checkScroll();
});

// Select all elements with the 'element' class
const elements = document.querySelectorAll('.elementa');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
      // Stop observing this element once it becomes visible (optional)
      observer.unobserve(entry.target);
    }
  });
});

// Observe each element
elements.forEach((element) => {
  observer.observe(element);
});


console.log(elements);