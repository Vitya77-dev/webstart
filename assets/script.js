// Поиск работает с готовыми HTML-карточками: данные не отправляются на сервер.
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('#lesson-search');
const cards = document.querySelectorAll('.lesson-card[data-search]');

function filterLessons() {
  const query = searchInput.value.trim().toLowerCase();
  let count = 0;
  cards.forEach(function (card) {
    const text = (card.textContent + ' ' + card.dataset.search).toLowerCase();
    const matches = text.includes(query);
    card.hidden = !matches;
    if (matches) count++;
  });
  document.querySelector('#search-count').textContent = 'Найдено уроков: ' + count;
  document.querySelector('#empty-result').hidden = count > 0;
}

if (searchForm && searchInput) {
  const parameters = new URLSearchParams(window.location.search);
  searchInput.value = parameters.get('q') || '';
  filterLessons();
  searchInput.addEventListener('input', filterLessons);
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    filterLessons();
  });
  searchForm.addEventListener('reset', function () {
    searchInput.value = '';
    filterLessons();
    searchInput.focus();
  });
}

// Учебный пример на странице JavaScript.
const helloButton = document.querySelector('#hello-button');
const helloText = document.querySelector('#hello-text');
if (helloButton && helloText) {
  helloButton.addEventListener('click', function () {
    helloText.textContent = 'Привет! JavaScript работает.';
  });
}
