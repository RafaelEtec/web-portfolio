function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}
ism = isMobile()
if (ism) {
    console.log("Mobile device detected");
} else {
    console.log("Desktop device detected");
}

var servix = {
    periodo: "Ago 2022 - Jun 2024",
    cargo: "Estagiário",
    empresa: "Servix Informática Ltda",
    descricao: ""
};
var tecnico_informatica = {
    periodo: "Jan 2021 - o momento",
    cargo: "Técnico de Informática",
    empresa: "Autônomo",
    descricao: ""
};
const experiencias = {servix, tecnico_informatica};

var portfolio = {
    titulo: "Portfólio WEB",
    descricao: "Website pessoal construído com HTML, CSS, JavaScript, Vue.js e Anime.js, atualmente hospedado no GitHub Pages"
};
var infosec = {
    titulo: "InfoSec - Guardiões da noite",
    descricao: "Protótipo de aplicativo de controle defuncionários, destinado a profissionais de segurança de bairro noturnos. Elaborado em grupo como projeto de final de curso. Acreditamos no avanço da ideia"
};
var hackthebox = {
    titulo: "HackTheBox Machines Tutorial",
    descricao: "Elaboração de um guia em formato de página web ensinando a completar os desafios da plataforma de Hacking"
};
const projetos = {portfolio, infosec, hackthebox};


new Vue({
    el: ".main",
    data() {
        return {
            isMobile: ism,
            show: false,
            experiencias,
            projetos
        }
    }
});