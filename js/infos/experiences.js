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

new Vue({
    el: "#col-experiencia",
    data() {
        return {
            experiencias
        }
    }
});