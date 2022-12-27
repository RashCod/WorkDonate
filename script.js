let animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemsHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemsHeight / animStart;

      if (animItemsHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemsHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemsHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (animItem.classList.contains("._anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}

$('a[href^="#"]').click(function () {
  let anchor = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(anchor).offset().top,
    },
    800
  );
});
