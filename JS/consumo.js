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
  // O consumo de creatina é calculado multiplicando o peso por 0,6g de creatina.
  //CREATINA
  function exibir() {
    let peso = parseFloat(document.getElementById("btnPeso1").value)
    let creatina = peso * 0.06

    Swal.fire({
      title: "Creatina",
      html: "Você deve consumir " + creatina.toFixed(1) + " gramas de creatina por dia." + "<br>",
      icon: "success",
        background: "#272727",
        color: "#fff",
        confirmButtonColor: '#1c1c1c  ',
    });
  }

  // nao arrumar o que tá funcionando tlgd
  function Cancelar() {
    document.getElementById("btnPeso1").value = null;
    document.getElementById("btnPeso1").focus();
  }

  //AGUA
  // Para jovens até os 17 anos é recomendado 40 mL por cada kg, para adultos 35 mL por cada kg e para idosos entre 25 a 30 mL para cada kg de peso corporal. 

  function exibir2() {
    let idade = parseFloat(document.getElementById("btnIdade").value);
    let peso2 = parseFloat(document.getElementById("btnPeso2").value);

    let qtde_agua;

    if (idade <=  17) {
      qtde_agua = 40;
    } else if (idade >= 18 && idade <= 59) {
      qtde_agua = 35;
    } else {
      qtde_agua = 25;
    }

    let agua = (peso2 * qtde_agua) / 1000;

    Swal.fire({
      title: "Água",
      html: "Você deve beber cerca de " + agua.toFixed(1) + " litros de água." + "<br>",
      icon: "success",
      background: "#272727",
      color: "#fff",
      confirmButtonColor: '#1c1c1c',
    });
  }

  // nao arrumar o que tá funcionando tlgd
  function Cancelar2() {
    document.getElementById("btnIdade").value = null;
    document.getElementById("btnPeso2").value = null;
    document.getElementById("btnIdade").focus();
  }  