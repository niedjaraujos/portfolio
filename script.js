// modo dark/light

const toggleTheme = document.querySelector('#toggleTheme');
const rootHtml = document.documentElement; //pega todo o html
//no html o tema ja esta escuro
// Função para aplicar o tema e salvar
function changeTheme() {
  const currentTheme = rootHtml.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  rootHtml.dataset.theme = newTheme; //atualiza o html
  toggleTheme.classList.toggle('la-sun');
  toggleTheme.classList.toggle('la-moon');

  localStorage.setItem('theme', newTheme); //salva no navegador
}
toggleTheme.addEventListener('click', changeTheme); //chama a função ao clicar no icone
