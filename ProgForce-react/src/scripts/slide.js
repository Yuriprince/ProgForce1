let current = 0;

// Clear all images
function reset(sliderImages) {
  for(let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Show prev
function slideLeft(sliderImages) {
  reset(sliderImages);
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight(sliderImages) {
  reset(sliderImages);
  sliderImages[current + 1].style.display = "block";
  current++;
}

export function clickLeft(sliderImages) {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft(sliderImages);
}

export function clickRight(sliderImages) {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight(sliderImages);
}
