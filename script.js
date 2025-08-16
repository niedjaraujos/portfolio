<<<<<<< HEAD
const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement; //pega todo o html

function changeTheme() {
  rootHtml.dataset.theme = rootHtml.dataset.theme === 'dark' ? 'light' : 'dark';

  toggleTheme.classList.toggle('la-sun');
  toggleTheme.classList.toggle('la-moon');
}
toggleTheme.addEventListener('click', changeTheme);
=======
const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement; //pega todo o html


  toggleTheme.classList.toggle('la-sun');
  toggleTheme.classList.toggle('la-moon');
}
toggleTheme.addEventListener('click', changeTheme);
>>>>>>> c3459fa21e001f406303dfcec5fd7db0c42a135f
