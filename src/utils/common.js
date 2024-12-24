export const sliderSettings = {
    slidesPerView: 1, // Default number of slides visible
    spaceBetween: 50, // Space between slides
    breakpoints: { // Fix: Corrected from 'breakPoints' to 'breakpoints'
      480: {
        slidesPerView: 1, // 1 slide visible for screens >= 480px
      },
      600: {
        slidesPerView: 2, // 2 slides visible for screens >= 600px
      },
      750: {
        slidesPerView: 3, // 3 slides visible for screens >= 750px
      },
      1100: {
        slidesPerView: 4, // 4 slides visible for screens >= 1100px
      },
    },
  };
  