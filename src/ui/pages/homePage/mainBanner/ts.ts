
const handleScroll = (): void => {
  const scrollY = window.scrollY;
  const slideHeight = slideHeightRef.current;
  const totalSlideHeight = slideHeight * totalSlidesRef.current;
  const snapScrollY = totalSlideHeight; // 420vh for 4 slides of 100vh each

  scrollTimeout = setTimeout(() => {
    if (scrollY < totalSlideHeight) {

      // Ensure slider stays visible and resets translateY
      setSliderVisible(true);
      sliderRef.current!.style.transform = `translateY(0)`;
    } else if (
      scrollY > totalSlideHeight &&
      scrollY < totalSlideHeight + slideHeight
    ) {
      // Scrolling past the last slide
      setSliderVisible(true);

      // Move slider up by -100vh
      sliderRef.current!.style.transition = "transform 0.5s ease-out";
      sliderRef.current!.style.transform = `translateY(-100vh)`;

      // Enforce scroll position to snap back to 420vh
      window.scrollTo({
        top: snapScrollY,
        behavior: "smooth",
      });
    } else if (scrollY >= totalSlideHeight + slideHeight) {
      // User tries to scroll far past the snap point
      window.scrollTo({
        top: snapScrollY,
        behavior: "smooth",
      });
    } else {
      // Fully scrolled into the content section
      setSliderVisible(false);
    }
  }, 50);