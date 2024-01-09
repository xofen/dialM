document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.id === 'naoClique') {
        alert('NÃO CLIQUE, DIGITE!');
        event.preventDefault();  
    }
});

//var naoClique = document.getElementById('naoClique');
//
//    
//    naoClique.addEventListener('click', function() {
//      alert('NÃO CLIQUE, DIGITE!');
//    });


function handleInput(event) {
    if (event.key === "Enter") {
        executeCommand();
    }
}

function executeCommand() {
    const inputElement = document.getElementById("commandInput");
    const command = inputElement.value.toLowerCase();
    let outputElement = document.getElementById("output");
    let backgroundElement = document.querySelector('.background');
    let outputBGElement = document.querySelector('#output');
    
    switch (command) {
		case "menu":
			outputElement.innerHTML = '<p ><a href="#" id="naoClique">/Home</a><br><a href="#" id="naoClique">/Sobre</a><br><a href="#" id="naoClique">/Contato</a><br><a href="#" id="naoClique">/cor</a></p>';
            break;
        case "home":
            outputElement.innerHTML = '<h1>WEBSITE EM CONSTRUÇÃO</h1><p>aguarde...</p>';
            break;
        case "sobre":
            outputElement.innerHTML = '<h1>EM BREVE</h1><p>fica tranquilo.</p>';
            break;
        case "contato":
            outputElement.innerHTML = '<p>/whatsapp</p>';
            break;
        case "contato/whatsapp":
            window.open('https://wa.me/5511997757771', '_blank');
            break;
        case "cor":
            outputElement.innerHTML = '<p ><a href="#" id="naoClique">/original</a><br><a href="#" id="naoClique">/pb</a><br><a href="#" id="naoClique">/black</a><br><a href="#" id="naoClique">/white</a><br><a href="#" id="naoClique">/night</a><br><a href="#" id="naoClique">/day</a><br><a href="#" id="naoClique"><--menu</a></p>';
            break;

// PERSONALIZAÇÃO DE ESQUEMA DE COR

        case "cor/pb": 
            backgroundElement.style.animationName = 'colorChangeBackPB';
            outputBGElement.style.backgroundColor = 'black';
            break;
        case "cor/original":
            backgroundElement.style.animationName = 'colorChangeBack, colorChangeGrid';
            outputBGElement.style.backgroundColor = 'initial';
            document.documentElement.style.setProperty('--line-color1', '#da392c');
            break;
        case "cor/black":
            backgroundElement.style.animationName = 'initial';
            backgroundElement.style.backgroundColor = 'black';
            outputBGElement.style.backgroundColor = 'initial';
            break;
        case "cor/white":
            backgroundElement.style.animationName = 'initial';
            backgroundElement.style.backgroundColor = 'white';
            outputBGElement.style.backgroundColor = 'black';
            break;
        case "cor/night":
            backgroundElement.style.animationName = 'initial';
            backgroundElement.style.backgroundColor = '#100f21';
            outputBGElement.style.backgroundColor = 'initial';
            document.documentElement.style.setProperty('--line-color1', '#222047');
            break;
        case "cor/day":
            backgroundElement.style.animationName = 'initial';
            backgroundElement.style.backgroundColor = '#da392c';
            outputBGElement.style.backgroundColor = 'initial';
            document.documentElement.style.setProperty('--line-color1', '#100f21');
            break;

//EXTRA
        case "rick":
            outputElement.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/xvFZjo5PgG0?si=ERIuiZcWLHmDvHLZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            break;
        default:
            outputElement.innerHTML = '<p>Command not recognized. Try "Menu", "home", "sobre", or "contato".</p>';
    }

    
}



