document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.js-tab-button');
  const tabs = document.querySelectorAll('.js-tab');

  for (const button of tabButtons) {
    button.addEventListener('click', function (event) {
      event.preventDefault();

      const { destination } = button.dataset;

      for (const button of tabButtons) {
        if (button.classList.contains('is-active')) {
          button.classList.remove('is-active');
        }
      }

      button.classList.add('is-active');
      for (const tab of tabs) {
        if (tab.id === destination) {
          tab.classList.add('is-active');
        } else {
          tab.classList.remove('is-active');
        }
      }
    });
  }
});
