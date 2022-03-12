export const carouselBreakpoints = {
  desktop: {
    breakpoint: { max: 3000, min: 1920 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptopMedium: {
    breakpoint: { max: 1440, min: 1150 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1150, min: 850 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  tabletSmall: {
    breakpoint: { max: 850, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};
