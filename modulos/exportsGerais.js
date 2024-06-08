export class Jogador{
    constructor(riotID, dataInicio, nivel, campeaoMain, campeaoOdiado, modos, rotaMain, rank){
        this.riotID = riotID
        this.dataInicio = dataInicio
        this.nivel = nivel
        this.campeaoMain = campeaoMain
        this.campeaoOdiado = campeaoOdiado
        this.modos = modos
        this.rotaMain = rotaMain
        this.rank = rank
    }
}

export var campeoes = [
    "Nenhum/Vários", "Aatrox", "Ahri", "Akali", "Alistar", "Akshan", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol",
    "Azir", "Bardo", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki",
    "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora",
    "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi",
    "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista",
    "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled",
    "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite",
    "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus",
    "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke",
    "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble",
    "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed",
    "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah",
    "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch",
    "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir",
    "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi",
    "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
]

export var campeoesOption = campeoes.map(function(campeao) {
    return removerAcentos(campeao).toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s/g, '');
});

export var rotas = ["Não tenho", "Topo (Top)", "Caçador (Jungle)", "Meio (Mid)", "Atirador (ADC)", "Suporte (Sup)"]
export var rotasOption = ["n", "t", "j", "m", "a", "s"]
export var ranks = ["Nenhum", "Ferro", "Bronze", "Prata", "Ouro", "Platina", 
                    "Esmeralda", "Diamante", "Mestre", "Grão-Mestre", "Desafiante"]
export var ranksOption = ["ne", "fe", "br", "pr", "ou", "pl", "es", "di", "me", "gm", "df"]

function removerAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}