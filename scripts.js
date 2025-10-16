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

// Отправка email в Telegram
const TOKEN = "";      
const CHAT_ID = "1984897886";      

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const message = encodeURIComponent(`Новая почта с сайта: ${email}`);

  try {
    const res = await fetch(`${url}?chat_id=${CHAT_ID}&text=${message}`);
    if(res.ok){
      alert('Email отправлен в Telegram!');
      form.reset();
    } else {
      alert('Ошибка при отправке');
    }
  } catch(err) {
    console.error(err);
    alert('Ошибка при отправке');
  }
});
