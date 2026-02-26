const eras = [
  // Capítulo I já existente
  {
    titulo: "Capítulo I — Fundação (1966–1983)",
    texto: `Fundada por Bruce McLaren, a equipe iniciou sua trajetória na Fórmula 1
    desenvolvendo seus próprios carros e conquistando espaço entre as grandes equipes.`,
    timeline: [
      { ano: "1963", imagem: "mcleras/mclaren1963.png", descricao: "Logo 1963" },
      { ano: "1966", imagem: "mcleras/M2B.jpg", descricao: "M2B – Primeiro carro da McLaren na F1" },
      { ano: "1968", imagem: "mcleras/m7a.jpg", descricao: "MA7 – Consolidação competitiva" },
      { ano: "1970", imagem: "mcleras/bruce.jpg", descricao: "Bruce McLaren" },
      { ano: "1973", imagem: "mcleras/m23.jpg", descricao: "M23 – Base para os primeiros grandes sucessos" }
    ]
  },

  // Capítulo II — Era de Ouro
  {
    titulo: "Capítulo II — Era de Ouro (1984–1991)",
    texto: `Durante a Era de Ouro, a McLaren dominou a Fórmula 1 com títulos mundiais
    de pilotos e construtores, contando com pilotos lendários como Ayrton Senna e Alain Prost.
    Carros icônicos como MP4/2, MP4/4 e MP4/5 definiram o padrão da equipe.`,
    timeline: [
	  { ano: "1981-90", imagem: "mcleras/mclaren1984-90.png", 
	  descricao: "Logo 1981-90" },
      { ano: "1984", imagem: "mcleras/mp4-4.jpg",
	  descricao: "MP4-4 o carro mais dominante da historia da F1" },
      { ano: "1988", imagem: "mcleras/senna.jpg",
	  descricao: "O inicio do Reinado" },
      { ano: "1989", imagem: "mcleras/prost.jpg",
	  descricao: "Deu prost,Titulo a contraersia" },
      { ano: "1990", imagem: "mcleras/mcleras/1990.jpg", 
	  descricao: "Senna da o troco" },
      { ano: "1991", imagem: "mcleras/1991.jpg",
	  descricao: "Dominancia e Constacia" }
    ]
  },
  
  
  
  {
    titulo: "Capítulo III — Motor Mercedes (1995–2014)",
    texto: `A Era Mercedes da McLaren é marcada por parcerias de sucesso com motores Mercedes, momentos de grandes conquistas e temporadas competitivas na Fórmula 1.
O destaque inicial veio em 1998, quando Mika Häkkinen conquistou o título mundial de pilotos com o MP4/13. Mais tarde, em 2008, Lewis Hamilton trouxe o campeonato de pilotos de volta à equipe, consolidando o legado da McLaren como uma potência na F1.
O período foi de competitividade sólida, mas sem dominar o campeonato...`,
    timeline: [
      { ano: "1998", imagem: "mcleras/1998.jpg",
	  descricao: "Primeiro titulo com motor novo" },
      { ano: "2008", imagem: "mcleras/2008.jpg",
	  descricao: "O inicio da lenda,Titulo doloroso para o povo brasileiro" },
      { ano: "2010", imagem: "mcleras/2010.jpg",
	  descricao: "Por um detalhe" },
      { ano: "2012", imagem: "mcleras/2012.jpg", 
	  descricao: "Falta de constancia" },
      { ano: "2013", imagem: "mcleras/2013.jpg",
	  descricao: "O pior esta por vim" }
    ]
  },
  
   {
    titulo: "Capítulo IV — A volta da Honda e o fracasso (2015–2017)",
    texto: `A McLaren iniciou 2015 com a retomada da parceria com a Honda, trazendo grandes expectativas de voltar a brigar pelo topo da Fórmula 1. O objetivo era reviver os tempos de glória da equipe, mas a realidade foi desafiadora: os motores Honda apresentaram problemas de confiabilidade e potência, deixando a equipe longe do pódio e dificultando as conquistas para pilotos como Fernando Alonso e Jenson Button. `,
    timeline: [
      { ano: "2015", imagem: "mcleras/2015.jpg",
	  descricao: "O Inicio do Desastre,GP2 ENGINER" },
      { ano: "2016", imagem: "mcleras/2016.jpg",
	  descricao: "Motor ok,resultados horriveis" },
      { ano: "2017", imagem: "mcleras/2017.jpg", 
	  descricao: "A pior temporada da historia,Adeus Honda" },
    ]
  },
  
  
  
  {
    titulo: "Capítulo V — Um novo motor,(2018–2020)",
    texto: `Depois do fracasso com a Honda,a McLaren resolveu ir para uum caminho mais seguro economicamente e fechou uma parceria para usar o motor da Renault.`,
    timeline: [
      { ano: "2018", imagem: "mcleras/2018.jpg",
	  descricao: "Motor novo,problemas antigos" },
      { ano: "2019", imagem: "mcleras/2019.jpg",
	  descricao: "Novos pilotos,resultados melhores" },
      { ano: "2020", imagem: "mcleras/2020.jpg", 
	  descricao: "Ressurgindo aos poucos" },
    ]
  },
  
   {
    titulo: "Capítulo VI — De volta ao topo,(2021–atual)",
    texto: `Em 2021 McLaren e Mercedes voltaram a fechar parceria de motores,com a McLaren em busca de volta ao topo depois de tantos anos com erros `,
    timeline: [
      { ano: "2021", imagem:" mcleras/2021.jpg",
	  descricao: "No caminho certo" },
      { ano: "2022", imagem: "mcleras/2022.jpg",
	  descricao: "Novo regulamento,mesma dificuldade" },
      { ano: "2023", imagem: "mcleras/2023.jpg", 
	  descricao: "Um passo para tras e 10 para frente" },
	   { ano: "2024", imagem: "mcleras/2024.jpg", 
	  descricao: "De volta as glorias" },
	   { ano: "2025", imagem: "mcleras/2025.jpg", 
	  descricao: "Bicampea" },
	    { ano: "2026", imagem: "mcleras/2026.jpg", 
	  descricao: "Em busca do TRI" },
    ]
   },
  
];

// Função para mostrar a era escolhida
function mostrarEra(index) {
    document.getElementById("tituloEra").innerText = eras[index].titulo;
    document.getElementById("textoEra").innerText = eras[index].texto;

    const timelineContainer = document.getElementById("mclaren-timeline");
    timelineContainer.innerHTML = "";

    eras[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="mclaren-timeline-item">
                <div class="mclaren-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });
}

// Mostra a primeira era automaticamente ao carregar
mostrarEra(0);