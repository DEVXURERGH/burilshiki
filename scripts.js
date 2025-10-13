const form = document.getElementById("emailForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // чтобы форма не перезагружала страницу

  // Можно сюда добавить отправку email на сервер через fetch/ajax

  // Показать toast
  toast.classList.add("show");

  // Скрыть через 3 секунды
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // Очистить input
  form.reset();
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});