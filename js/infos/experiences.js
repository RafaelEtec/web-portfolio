var servix = {
    periodo: "Ago 2022 - Jun 2024",
    cargo: "Estagiário",
    empresa: "Servix Informática Ltda",
    descricao: {
        topico1: "Academia Servix - 1600 horas de conteúdo e atividades práticas sobre os mais diversos temas da Infraestrutura. Desde simples protocolos de redes, à complexos equipamentos e estruturas de servidores",
        topico2: "Qualitor - Administração da plataforma de gerenciamento de chamados, estoque, clientes e contratos",
        topico3: "SQL - Extração de relatórios e criação de dashboards para visualização clara e amigável dos dados",
        topico4: "Selenium - Elaboração de automações para facilitar e agilizar o processo de atividades envolvendo as plataformas utilizadas pela empresa"
    }
};
var tecnico_informatica = {
    periodo: "Jan 2021 - o momento",
    cargo: "Técnico de Informática",
    empresa: "Autônomo",
    descricao: {
        topico1: "Recebendo computadores e notebooks em casa para manutenção, troca de peças, formatação, limpeza e atualização de SO",
        topico2: "Com pouca frequência, ainda exerço a função"
    }
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