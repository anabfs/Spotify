const baseMusicas = [{
        'name': 'Meet Me At Our Spot (Live Performance)',
        'artist': 'THE ANXIETY, WILLOW',
        'path': './musicas/WILLOW, THE ANXIETY, Tyler Cole - Meet Me At Our Spot (Live Performance).mp3',
        'foto': './imagens/meetMeAtOurSpot.jpg',
        'album': 'THE ANXIETY',
    },
    {
        'name': 'honey',
        'artist': 'Halsey',
        'path': './musicas/Halsey - honey.mp3',
        'foto': './imagens/ifICantHaveLoveIWantPower.jpg',
        'album': "If I Can't Have Love, I Want Power",
    },
    {
        'name': 'drivers license',
        'artist': 'jxdn',
        'path': './musicas/jxdn - drivers license.mp3',
        'foto': './imagens/driversLicense.jpg',
        'album': 'drivers license',
    },
    {
        'name': 'parents',
        'artist': 'YUNGBLUB',
        'path': './musicas/YUNGBLUD - Parents.mp3',
        'foto': './imagens/weird!.jpg',
        'album': 'weird!',
    },
    {
        'name': 'I WANNA BE YOUR SLAVE',
        'artist': 'Måneskin',
        'path': './musicas/Maneskin - I WANNA BE YOUR SLAVE.mp3',
        'foto': './imagens/teatroDira.jpg',
        'album': "Teatro d'ira - Vol. I",
    },
    {
        'name': "i am not a woman, i'm a god",
        'artist': 'Halsey',
        'path': './musicas/Halsey - I am not a woman, I m a god.mp3',
        'foto': './imagens/ifICantHaveLoveIWantPower.jpg',
        'album': "If I Can't Have Love, I Want Power",
    },
    {
        'name': "god save me, but don't drown me out",
        'artist': 'YUNGBLUD',
        'path': './musicas/YUNGBLUD - god save me, but don t drown me out.mp3',
        'foto': './imagens/weird!.jpg',
        'album': 'weird!',
    },
    {
        'name': 'queen of broken hearts',
        'artist': 'blackbear',
        'path': './musicas/blackbear - queen of broken hearts.mp3',
        'foto': './imagens/everythingMeansNothing.jpg',
        'album': 'everything means nothing',
    },
    {
        'name': 'ZITTI E BUONI',
        'artist': 'Måneskin',
        'path': './musicas/Måneskin - ZITTI E BUONI (Official Video – Sanremo & EUROVISION 2021 Winners)_48k.mp3',
        'foto': './imagens/teatroDira.jpg',
        'album': "Teatro d'ira - Vol. I",
    },
    {
        'name': "We'll Fight Together",
        'artist': 'Fresno',
        'path': './musicas/Fresno - we ll fight together.mp3',
        'foto': './imagens/suaAlegriaFoiCancelada.jpg',
        'album': 'Sua Alegria Foi Cancelada',
    },
    {
        'name': 'Lilith',
        'artist': 'Halsey',
        'path': './musicas/Halsey - Lilith.mp3',
        'foto': './imagens/ifICantHaveLoveIWantPower.jpg',
        'album': "If I Can't Have Love, I Want Power",
    }
];

const listaMusicas = document.querySelector('.listaMusicas');
const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];
tagAudio.src = primeiraMusica.path;
const foto = document.getElementById('fotoAlbum');
atualizaPlayer(baseMusicas[0].artist, baseMusicas[0].name, baseMusicas[0].foto)
const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('btnControlPlay');
const botaoPrev = document.getElementById('btnControlPrev');
const botaoNext = document.getElementById('btnControlNext');
const areaPlayerVolume = document.querySelector(".areaPlayerVolume input");

let musicaAtual = 0;

function construirPlaylist(musica, musicaId) {
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    musicaElemento.addEventListener('click', tocarMusica);

    listaMusicas.appendChild(musicaElemento);
}

for (let contador = 0; contador < baseMusicas.length; contador++) {
    construirPlaylist(baseMusicas[contador], contador);
}

function tocarMusica(evento) {
    const elementoClicodo = evento.currentTarget;


    if (elementoClicodo.tagName == 'LI') {
        const musicaId = elementoClicodo.dataset.id;
        const musicaSelecionado = baseMusicas[musicaId];
        tagAudio.src = musicaSelecionado.path;
        tagAudio.play();
        musicaAtual = Number(musicaId);
        let nomeArtista = baseMusicas[musicaAtual].artist;
        let nomeMusica = baseMusicas[musicaAtual].name;
        let foto = baseMusicas[musicaAtual].foto;

        atualizaPlayer(nomeArtista, nomeMusica, foto);
        botaoPlay.classList.add("pause");
    } else {
        if (tagAudio.paused) {
            tagAudio.play();
            botaoPlay.classList.add("pause");
        } else {
            tagAudio.pause();
            botaoPlay.classList.remove("pause");
        }

    }

}
botaoPlay.addEventListener('click', tocarMusica);

function pausarMusica() {
    tagAudio.pause();
    botaoPlay.classList.remove("pause");
}

botaoPausar.addEventListener('click', pausarMusica);

function tocarProximaMusica() {
    if (musicaAtual === baseMusicas.length - 1) {
        musicaAtual = 0;
    } else {
        musicaAtual++;
    }

    tagAudio.src = baseMusicas[musicaAtual].path;
    tagAudio.play();
    let nomeArtista = baseMusicas[musicaAtual].artist;
    let nomeMusica = baseMusicas[musicaAtual].name;
    let foto = baseMusicas[musicaAtual].foto;
    botaoPlay.classList.add("pause");
    atualizaPlayer(nomeArtista, nomeMusica, foto);

}
botaoNext.addEventListener('click', tocarProximaMusica);

function tocarMusicaAnterior() {
    if (musicaAtual === 0) {
        musicaAtual = baseMusicas.length - 1;
    } else {
        musicaAtual--;
    }
    tagAudio.src = baseMusicas[musicaAtual].path;
    tagAudio.play();

    let nomeArtista = baseMusicas[musicaAtual].artist;
    let nomeMusica = baseMusicas[musicaAtual].name;
    let foto = baseMusicas[musicaAtual].foto;
    atualizaPlayer(nomeArtista, nomeMusica, foto);
}
botaoPrev.addEventListener('click', tocarMusicaAnterior);

areaPlayerVolume.addEventListener("input", () => {

    tagAudio.volume = areaPlayerVolume.value
})

function atualizaPlayer(nome, musica, foto) {
    const nomeMusica = document.getElementById('nomeMusica');
    const nomeArtista = document.getElementById('nomeArtista');
    const fotoAlbum = document.getElementById('fotoAlbum');

    fotoAlbum.src = foto;
    nomeMusica.innerText = musica;
    nomeArtista.innerText = nome;
}