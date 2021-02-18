let selecaoUsuario = 10;
const infoFilmes = [{
    id: 0,
    titulo: "The Umbrella Accademy",
    descricao: "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.",
    capa: "url(img/capa-umbrella.jpg)",
    trailer: "https://youtu.be/5_4SW8HHfUs"
},
{ 
    id: 1,
    titulo: "Star Wars: A Ascensão Skywalker",
    descricao: "Com o retorno do Imperador Palpatine, a Resistência toma a frente da batalha. Treinando para ser uma completa Jedi, Rey se encontra em conflito com passado e futuro, e teme pelas respostas que pode conseguir com Kylo Ren.",
    capa: "url(img/capa-star.jpg)",
    trailer: "https://youtu.be/Cmgv3fwoxQw"
},
{ 
    id: 2,
    titulo: "Pokemon",
    descricao: "Ash, treinador de pokémons, e seus companheiros têm a difícil tarefa de restaurar o equilíbrio das forças naturais na Terra para impedir que uma grande catástrofe aconteça. Para isso, precisam recuperar três pokémons que estão nas mãos de vilão.",
    capa: "url(img/capa-pokemon.jpg)",
    trailer: "https://youtu.be/c6205wjdN-g"
},
{ 
    id: 3,
    titulo: "Capitão América: Guerra Civil",
    descricao: "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
    capa: "url(img/capa-capitao.jpg)",
    trailer: "https://youtu.be/FRLYZn5PGuA"
},
{
    id: 4,
    titulo: "O Hobbit: A Batalha dos Cinco Exércitos",
    descricao: "Bilbo e os Anões assistem da Montanha Solitária o dragão Smaug incendiando a Cidade do Lago. ... Kíli confessa seu amor por Tauriel e ele e os outros anões se reúnem com sua companhia na Montanha Solitária; é revelado que Thorin foi infectado com a 'doença do dragão', já que ele procura a Pedra Arken.",
    capa: "url(img/capa-hobbit.jpg)",
    trailer: "https://youtu.be/VKkFW5TTB6g"
},
{
    id: 5,
    titulo: "Breakin Bad",
    descricao: "O quinto ano da série poderia receber o subtítulo de A Ascensão e a Queda de Heisenberg. Na primeira metade, Walter começa a tomar conta do crime. Ele se foca em tirar toda a concorrência do caminho e se estabelece como o rei do negócio. Para que isso ocorresse, é claro, Walter precisou despir-se de toda a decência.",
    capa: "url(img/capa-breaking.jpg)",
    trailer: "https://youtu.be/2-W6_6gJda0"
},
{
    id: 6,
    titulo: "Dr. House",
    descricao: "O cientista House (Hugh Laurie) é especializado em infectologia e nefrologia, realiza excelentes diagnósticos mantendo uma postura cética, distanciada e até mesmo mau humorada com os pacientes do fictício hospital de Princeton-Plainsboro.",
    capa: "url(img/capa-drhouse.jpg)",
    trailer: "https://youtu.be/5DIADh4lMq8"
}, 
{
    id: 7,
    titulo: "Sobrenatural",
    descricao: "Os irmãos Sam e Dean Winchester encaram cenários sinistros caçando monstros. Velhos truques, armas e esconderijos não funcionam mais e seus amigos os traem, forçando os irmãos a contar um com o outro enquanto enfrentam novos inimigos.",
    capa: "url(img/capa-supernatural.jpg)",
    trailer: "https://youtu.be/DX3PwNRAHck"
}, 
{
    id: 8,
    titulo: "SmallVille",
    descricao: "A temporada narra as primeiras aventuras do jovem Clark Kent a partir do momento em que seu planeta natal, Krypton, é destruido e ele cai em uma nave na cidade de Smallville (Pequenópolis, no Brasil), onde é adotado por Martha e Jonathan Kent.",
    capa: "url(img/capa-smallville.jpg)",
    trailer: "https://youtu.be/yBHfuph4WWY"
}, 
{
    id: 9,
    titulo: "Vingadores",
    descricao: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.",
    capa: "url(img/capa-vingadores.jpg)",
    trailer: "https://youtu.be/6ZfuNTqbHE8"
}, 
{
    id: 10,
    titulo: "House of Cards",
    descricao: "Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington.",
    capa: "url(img/capa-house.jpg)",
    trailer: "https://youtu.be/SvSkxBYuoQY"
}] 

function itemClicado(idfilmeSelecionado) {
    selecaoUsuario = idfilmeSelecionado
    const titulo = document.querySelector(".titulo");
    const descricao = document.querySelector(".descricao");
    const capa = document.querySelector(".filme-principal");
    
    titulo.innerHTML = infoFilmes[idfilmeSelecionado].titulo;
    descricao.innerHTML = infoFilmes[idfilmeSelecionado].descricao;
    capa.style.backgroundImage = infoFilmes[idfilmeSelecionado].capa;
};


function assistirAgora() {
    window.open(infoFilmes[selecaoUsuario].trailer)
    
}