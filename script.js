document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");
  const berandaSection = document.getElementById("beranda");

  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(berandaSection);
});
