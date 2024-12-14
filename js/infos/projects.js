var portfolio = {
    titulo: "Portfólio WEB",
    descricao: {
        'https://github.com/RafaelEtec/web-portfolio': "Website pessoal construído com HTML, CSS, JavaScript, Vue.js e Anime.js, atualmente hospedado no GitHub Pages"
    }
};

var go_game = {
    titulo: "Jogos em Golang",
    descricao: {
        'https://github.com/RafaelEtec/go_tictactoe': "Jogo da Velha - DONE",
        'https://github.com/RafaelEtec/go_sudoku': "SUDOKU - DONE",
        'https://github.com/RafaelEtec/go_minesweeper': "Campo minado - DONE",
        'https://github.com/RafaelEtec/go_game': "RPG - IN PROGRESS"
    }
};

var java = {
    titulo: "Aplicações em Java",
    descricao: {
        'https://github.com/RafaelEtec/PI4': "E-Commerce - Disciplina Musical - DONE",
        'https://github.com/RafaelEtec/Jogo_da_Velha': "Jogo da Velha - DONE"
    }
};

const projetos = {portfolio, go_game, java};

new Vue({
    el: "#col-projetos",
    data() {
        return {
            projetos
        }
    }
});