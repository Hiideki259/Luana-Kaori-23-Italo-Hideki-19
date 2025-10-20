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

function exibir() {
    let peso = parseFloat(document.getElementById("btnPeso").value)
    let altura = parseFloat(document.getElementById("btnAltura").value)

    let imc = (peso * 10000) / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    Swal.fire({
        title: "IMC",
        html: "Seu IMC é: " + imc.toFixed(1) + "<br>" + classificacao,
        icon: "success",
        background: "#272727",
        color: "#fff",
        confirmButtonColor: '#1c1c1c  ',
    });
}

// nao arrumar o que tá funcionando tlgd
function Cancelar() {
    document.getElementById("btnAltura").value = null;
    document.getElementById("btnAltura").focus();
    document.getElementById("btnPeso").value = null;
    document.getElementById("btnPeso").focus();
}
