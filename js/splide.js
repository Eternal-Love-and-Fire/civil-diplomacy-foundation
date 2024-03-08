document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    drag    : "free",
    autoplay: "pause",
    interval: 7000,
    intersection: {
        inView: {
          autoplay: true,
        },
        outView: {
          autoplay: false,
        },
      },
  }).mount(window.splide.Extensions);
});
