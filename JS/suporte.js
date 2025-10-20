window.onload = function () {
    window.scrollTo(0, 0);
};
var header = document.getElementById('header')
var navegadorheader = document.getElementById('navegador_header')
var content = document.getElementById('content')
var showSidebar = false

function ativarSidebar() { /*function nos buttons, para ativar a function onclick*/
showSidebar = !showSidebar;
if (showSidebar) {
  navegadorheader.style.marginLeft = '-10vw'; /*Aparecer a Sidebar*/
  navegadorheader.style.animationName = 'showSidebar'; /*Vai ativar a animação que a gente fez*/
  content.style.filter = 'blur(2px)' /*Vai ativar o blur no content*/
}
else {
  navegadorheader.style.marginLeft = '-100vw'; /*sumir a Sidebar*/
  navegadorheader.style.animationName = ''; /*Vai desativar a animação para conseguirmos ativar novamente*/
  content.style.filter = '' /*Desativar o blur no content*/
}
}

function closeSidebar() { /*fechar a Sidebar quando clicar no content*/
if (showSidebar) {
  ativarSidebar()
}
}

window.addEventListener('resize', function (event) { /*Desativa a Sidebar e o blur quando a página ficar grande de novo*/
if (window.innerWidth > 768 && showSidebar) {
  ativarSidebar();
}
})