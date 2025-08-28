/*
 * Ручна реалізація "drag-to-scroll" слайдера.
 *
 * У сучасній розробці для цього зазвичай використовують готові бібліотеки,
 * оскільки вони надійніші і мають більше можливостей (напр., підтримку touch).
 *
 * Рекомендовані альтернативи:
 * - Swiper.js: Найпопулярніший і найпотужніший варіант.
 * - Flickity: Чудова фізика руху, ідеальний для мобільних пристроїв.
 * - Tiny Slider 2: Легкий та швидкий, коли важлива продуктивність.
 */

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleav", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
