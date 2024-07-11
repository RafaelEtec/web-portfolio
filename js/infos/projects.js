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
    el: "#col-projetos",
    data() {
        return {
            projetos
        }
    }
});