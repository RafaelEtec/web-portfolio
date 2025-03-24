var portfolio = {
    titulo: "Portfólio WEB",
    descricao: {
        'https://github.com/RafaelEtec/web-portfolio': "Website pessoal construído com HTML, CSS, JavaScript, Vue.js, Anime.js e P5.js, atualmente hospedado no GitHub Pages"
    },
    img: "",
};

var go_game = {
    titulo: "Jogos em Golang - Ebiten 2D Game Engine",
    descricao: {
        'https://github.com/RafaelEtec/go_chess': "Xadrez",
        'https://github.com/RafaelEtec/go_minesweeper': "Campo minado",
        'https://github.com/RafaelEtec/go_sudoku': "SUDOKU",
        'https://github.com/RafaelEtec/go_tictactoe': "Jogo da Velha",
        'https://github.com/RafaelEtec/go_game': "RPG"
    },
    img: "",
};

var go_api = {
    titulo: "APIs RESTful",
    descricao: {
        'https://github.com/RafaelEtec/parking-lot': "Estacionamento - Golang - Gin - MySQL"
    },
    img: "",
};

var java = {
    titulo: "Aplicações em Java",
    descricao: {
        'https://github.com/RafaelEtec/PI4': "E-Commerce - Disciplina Musical",
        'https://github.com/RafaelEtec/Jogo_da_Velha': "Jogo da Velha"
    },
    img: "",
};

var react = {
    titulo: "Aplicações em React Native",
    descricao: {
        'https://github.com/RafaelEtec/segue-o-lider': "Segue o Líder - Este projeto React Native representa um marco no meu aprendizado sobre desenvolvimento mobile. Criado para armazenar a pontuação de jogadores em partidas presenciais, explora tecnologias como Expo, Appwrite e Nativewind. Conta com autenticação segura, navegação dinâmica, lista de amigos, upload de mídia e um design responsivo. Mais que uma aplicação funcional, é um estudo prático que consolidou meus conhecimentos na criação de apps móveis multiplataforma."
    },
    img: "/docs/images/segueolider.png",
}

var next = {
    titulo: "Aplicações em Next.js",
    descricao: {
        'https://github.com/RafaelEtec/bookstorm': "BookStorm - É uma plataforma moderna e escalável. Permite empréstimo de livros com notificações automáticas, gestão de usuários e análise de dados. Conta com uma interface intuitiva para usuários e um painel administrativo completo. Utiliza tecnologias avançadas para garantir desempenho, segurança e automação."
    },
    img: "/docs/images/bookstorm.png",
}

const projetos = {portfolio, react, next, go_game};

new Vue({
    el: "#col-projetos",
    data() {
        return {
            projetos
        }
    }
});