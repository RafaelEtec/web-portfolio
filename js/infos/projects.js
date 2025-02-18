var portfolio = {
    titulo: "Portfólio WEB",
    descricao: {
        'https://github.com/RafaelEtec/web-portfolio': "Website pessoal construído com HTML, CSS, JavaScript, Vue.js, Anime.js e P5.js, atualmente hospedado no GitHub Pages"
    }
};

var go_game = {
    titulo: "Jogos em Golang - Ebiten 2D Game Engine",
    descricao: {
        'https://github.com/RafaelEtec/go_chess': "Xadrez",
        'https://github.com/RafaelEtec/go_minesweeper': "Campo minado",
        'https://github.com/RafaelEtec/go_sudoku': "SUDOKU",
        'https://github.com/RafaelEtec/go_tictactoe': "Jogo da Velha",
        'https://github.com/RafaelEtec/go_game': "RPG"
    }
};

var go_api = {
    titulo: "APIs RESTful",
    descricao: {
        'https://github.com/RafaelEtec/parking-lot': "Estacionamento - Golang - Gin - MySQL"
    }
};

var java = {
    titulo: "Aplicações em Java",
    descricao: {
        'https://github.com/RafaelEtec/PI4': "E-Commerce - Disciplina Musical",
        'https://github.com/RafaelEtec/Jogo_da_Velha': "Jogo da Velha"
    }
};

var react = {
    titulo: "Aplicações em React Native",
    descricao: {
        'https://github.com/RafaelEtec/react-native-segueolider': "Segue o Líder"
    }
}

const projetos = {portfolio, go_game, go_api, java, react};

new Vue({
    el: "#col-projetos",
    data() {
        return {
            projetos
        }
    }
});