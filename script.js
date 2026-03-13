window._isAdmin = false;

var _$_=id=>document.getElementById(id);
const DB=[
  ["Arroz branco cozido",128,2.5,28.1,0.2],["Arroz integral cozido",124,2.6,25.8,1.0],
  ["Arroz parboilizado cozido",143,2.8,30.0,0.5],["Feijão carioca cozido",76,4.8,13.6,0.5],
  ["Feijão preto cozido",77,4.5,14.0,0.5],["Feijão branco cozido",114,8.7,20.4,0.4],
  ["Feijão fradinho cozido",99,7.4,18.0,0.5],["Lentilha cozida",93,6.3,16.0,0.4],
  ["Grão de bico cozido",164,8.9,27.4,2.6],["Ervilha cozida",81,5.4,14.5,0.4],
  ["Soja cozida",141,14.0,11.9,6.4],["Aveia em flocos",394,13.9,66.6,8.5],
  ["Aveia em flocos finos",380,14.0,64.0,7.0],["Macarrão cozido",149,4.5,30.0,0.9],
  ["Macarrão integral cozido",140,5.3,27.0,1.1],["Pão francês",300,8.0,58.6,3.1],
  ["Pão integral",253,8.0,48.0,3.4],["Pão de forma branco",267,8.0,49.0,4.5],
  ["Pão de forma integral",240,9.0,44.0,3.5],["Pão sírio",285,8.5,57.0,1.2],
  ["Tapioca hidratada",100,0.1,24.5,0.1],["Tapioca seca goma",347,0.2,85.0,0.2],
  ["Cuscuz de milho cozido",101,2.0,22.0,0.3],["Fubá de milho",351,7.8,74.0,1.3],
  ["Milho cozido",86,3.2,19.0,1.2],["Milho verde enlatado",83,2.4,18.4,0.8],
  ["Pipoca sem óleo",325,9.0,66.0,4.0],["Biscoito cream cracker",424,8.5,65.0,14.0],
  ["Biscoito de arroz",387,7.0,83.0,2.5],["Granola",408,8.9,65.0,12.0],
  ["Muesli",357,9.0,60.0,7.0],["Cereal matinal cornflake",371,7.0,84.0,0.4],
  ["Quinoa cozida",120,4.4,21.3,1.9],["Batata doce cozida",77,1.4,18.4,0.1],
  ["Batata inglesa cozida",52,1.2,11.9,0.1],["Batata inglesa assada",93,2.1,21.0,0.1],
  ["Batata inglesa frita",290,3.0,35.0,15.0],["Mandioca cozida",125,0.6,30.1,0.3],
  ["Inhame cozido",116,1.5,27.0,0.2],["Cará cozido",108,1.2,25.0,0.2],
  ["Carne bovina patinho cozido",219,21.4,0.0,14.2],["Carne bovina alcatra grelhada",175,22.0,0.0,9.5],
  ["Carne bovina acém cozido",223,19.6,0.0,15.5],["Carne bovina contra filé grelhado",213,26.0,0.0,11.8],
  ["Carne bovina filé mignon grelhado",207,28.0,0.0,10.0],["Carne bovina músculo cozido",225,22.0,0.0,14.8],
  ["Carne bovina costela cozida",360,22.0,0.0,30.0],["Carne bovina picanha grelhada",282,24.0,0.0,20.0],
  ["Carne bovina moída refogada",203,24.0,0.0,11.4],["Carne bovina fígado grelhado",152,22.0,4.5,4.4],
  ["Carne bovina coração cozido",158,26.0,2.0,5.5],["Carne suína lombo assado",197,22.4,0.0,11.8],
  ["Carne suína costela assada",340,19.0,0.0,29.0],["Carne suína pernil assado",248,22.0,0.0,17.0],
  ["Bacon frito",541,33.0,0.3,45.0],["Linguiça toscana grelhada",260,14.0,2.0,22.0],
  ["Linguiça calabresa frita",305,15.0,2.0,26.5],["Presunto",130,18.0,2.0,5.5],
  ["Salame",336,20.0,2.0,27.0],["Mortadela",260,13.0,3.0,22.0],
  ["Peito de peru defumado",109,18.0,2.0,3.5],["Apresuntado",108,15.0,4.0,4.2],
  ["Salsicha cozida",273,12.0,3.0,24.0],
  ["Frango peito sem pele grelhado",163,31.0,0.0,3.6],["Frango peito com pele grelhado",187,28.0,0.0,8.0],
  ["Frango coxa sem pele grelhada",164,22.0,0.0,8.1],["Frango coxa com pele grelhada",185,24.0,0.0,9.7],
  ["Frango sobrecoxa sem pele cozida",154,20.0,0.0,8.0],["Frango asa grelhada",222,20.0,0.0,15.5],
  ["Frango inteiro assado",167,24.0,0.0,7.4],["Frango peito cozido desfiado",150,29.0,0.0,3.2],
  ["Nugget de frango frito",245,15.0,18.0,12.0],
  ["Tilápia filé grelhado",128,26.2,0.0,2.7],["Salmão grelhado",206,28.0,0.0,10.0],
  ["Atum em conserva em água",131,28.0,0.0,1.9],["Atum em conserva em óleo",196,25.0,0.0,10.5],
  ["Sardinha enlatada",166,24.0,0.0,7.7],["Sardinha grelhada",178,22.0,0.0,9.5],
  ["Camarão cozido",99,21.0,0.9,1.1],["Bacalhau cozido",145,32.5,0.0,1.2],
  ["Merluza grelhada",95,21.0,0.0,1.2],["Cação grelhado",114,23.0,0.0,2.3],
  ["Filé de peixe grelhado",102,22.0,0.0,1.5],
  ["Ovo inteiro cozido",146,13.3,0.6,9.5],["Ovo inteiro mexido",179,12.0,1.0,13.5],
  ["Ovo inteiro frito",196,12.5,0.5,15.5],["Ovo inteiro cru",143,12.6,0.7,9.5],
  ["Clara de ovo cozida",52,11.0,0.7,0.2],["Clara de ovo crua",52,10.9,0.7,0.2],
  ["Gema de ovo cozida",322,15.9,0.4,27.7],
  ["Leite integral",61,3.2,4.5,3.3],["Leite semidesnatado",46,3.4,4.7,1.5],
  ["Leite desnatado",35,3.5,4.9,0.1],["Leite condensado",321,7.4,56.0,8.0],
  ["Leite em pó integral",488,24.5,38.5,26.0],["Leite em pó desnatado",361,35.0,52.0,0.7],
  ["Iogurte natural integral",61,3.2,4.9,3.3],["Iogurte natural desnatado",43,4.1,6.0,0.2],
  ["Iogurte grego integral",97,9.0,4.0,5.0],["Iogurte grego zero",68,9.5,5.0,0.5],
  ["Queijo mussarela",300,22.0,2.4,22.8],["Queijo prato",358,24.0,1.5,28.0],
  ["Queijo parmesão",393,33.0,3.0,28.0],["Queijo minas frescal",264,17.4,3.2,20.2],
  ["Queijo cottage",98,11.1,3.4,4.3],["Queijo ricota",134,9.7,3.5,9.2],["Requeijão light",230,12.0,3.0,19.0],["Requeijão cremoso",234,8.0,2.5,21.0],["Requeijão zero lactose",220,10.0,3.0,18.5],
  ["Requeijão cremoso",255,7.5,3.8,23.5],["Creme de leite",329,2.7,4.0,33.9],
  ["Manteiga",726,0.5,0.1,80.5],["Margarina",538,0.7,0.5,59.0],
  ["Coalhada",61,3.9,3.8,3.1],
  ["Whey protein concentrado",370,75.0,10.0,5.0],["Whey protein isolado",360,90.0,2.0,1.0],
  ["Whey protein hidrolisado",370,88.0,4.0,1.5],["Caseína proteína",360,80.0,8.0,2.0],
  ["Albumina em pó",373,84.0,1.5,0.5],["Proteína vegana ervilha arroz",370,75.0,8.0,4.0],
  ["Maltodextrina",375,0.2,95.0,0.1],["Dextrose",375,0.0,95.0,0.0],
  ["Creatina monohidratada",0,0.0,0.0,0.0],["BCAA pó",370,85.0,0.0,0.0],
  ["Hipercalórico mass gainer",380,17.0,70.0,4.0],["Proteína de soja isolada",338,80.0,3.0,0.5],
  ["Banana prata",92,1.3,23.8,0.1],["Banana nanica",87,1.4,22.3,0.1],
  ["Maçã fuji",56,0.3,15.6,0.1],["Laranja pera",47,1.0,11.5,0.1],
  ["Mamão papaia",40,0.5,10.4,0.1],["Mamão formosa",38,0.6,9.6,0.1],
  ["Manga tommy",64,0.4,16.4,0.3],["Morango",32,0.7,7.7,0.3],
  ["Uva rubi",69,0.6,17.3,0.1],["Abacate",160,2.0,6.0,14.7],
  ["Abacaxi",48,0.9,12.3,0.1],["Melancia",30,0.6,7.5,0.1],
  ["Melão cantaloupe",29,0.9,6.6,0.1],["Pera williams",55,0.5,15.0,0.1],
  ["Pêssego",39,0.9,9.4,0.1],["Kiwi",61,0.9,14.7,0.4],
  ["Goiaba",54,2.3,12.0,0.5],["Caju",43,1.3,9.0,0.5],
  ["Açaí polpa",70,1.2,3.0,5.0],["Acerola",33,0.8,7.7,0.2],
  ["Ameixa fresca",56,0.5,12.6,0.3],["Framboesa",52,1.2,11.9,0.7],
  ["Mirtilo blueberry",57,0.7,14.5,0.3],["Limão tahiti",29,1.1,7.3,0.3],
  ["Tangerina ponkan",38,0.8,9.5,0.1],["Maracujá polpa",97,2.2,23.8,0.7],
  ["Romã",83,1.7,18.7,1.2],
  ["Brócolis cozido",35,2.4,6.6,0.4],["Brócolis cru",34,2.8,6.6,0.4],
  ["Couve-flor cozida",22,1.9,4.5,0.2],["Couve manteiga refogada",42,3.3,7.7,0.5],
  ["Espinafre cozido",23,2.9,3.4,0.3],["Espinafre cru",22,2.7,3.6,0.4],
  ["Cenoura crua",34,0.9,7.7,0.2],["Cenoura cozida",41,0.9,9.6,0.3],
  ["Tomate",15,0.9,3.1,0.2],["Tomate cereja",22,1.1,4.8,0.3],
  ["Alface crespa",11,1.3,1.7,0.2],["Alface americana",14,0.9,3.3,0.2],
  ["Abobrinha cozida",21,1.5,3.5,0.2],["Abobrinha crua",17,1.2,3.1,0.2],
  ["Chuchu cozido",22,0.6,5.1,0.1],["Beterraba cozida",45,1.6,10.0,0.1],
  ["Pepino",13,0.7,2.7,0.1],["Cebola crua",40,1.2,9.4,0.1],
  ["Cebola refogada",41,1.0,9.2,0.5],["Alho",136,6.4,30.0,0.5],
  ["Pimentão vermelho",31,0.9,7.2,0.2],["Pimentão verde",24,0.9,5.0,0.2],
  ["Berinjela cozida",22,0.8,5.1,0.2],["Vagem cozida",25,1.5,5.2,0.2],
  ["Quiabo cozido",25,1.8,4.5,0.3],["Palmito em conserva",28,2.7,4.8,0.5],
  ["Repolho cru",24,1.4,5.4,0.1],["Couve de bruxelas cozida",36,2.4,7.1,0.5],
  ["Rúcula crua",25,2.6,3.7,0.7],["Agrião cru",22,2.6,2.4,0.7],
  ["Azeitona verde",145,1.0,3.8,15.0],["Azeitona preta",115,0.8,6.3,11.0],
  ["Amendoim torrado sem sal",567,26.0,16.0,49.0],["Amendoim cru",567,25.7,16.1,49.2],
  ["Pasta de amendoim integral",598,25.0,20.0,50.0],["Pasta de amendoim cremosa",588,24.0,22.0,50.0],
  ["Castanha do Pará",643,14.3,15.1,63.5],["Castanha de caju torrada",570,18.5,28.0,46.9],
  ["Amêndoa",579,21.2,21.7,49.9],["Nozes",654,15.2,13.7,65.2],
  ["Pistache",560,20.0,27.0,45.0],["Macadâmia",718,7.9,13.8,75.8],
  ["Semente de abóbora",559,30.0,11.0,49.0],["Semente de chia",486,16.5,42.1,30.7],
  ["Semente de linhaça",534,18.3,28.9,42.2],["Semente de gergelim",573,17.7,23.4,49.7],
  ["Azeite de oliva extravirgem",884,0.0,0.0,100.0],["Óleo de coco",892,0.0,0.0,99.1],
  ["Óleo de girassol",884,0.0,0.0,100.0],["Óleo de canola",884,0.0,0.0,100.0],
  ["Óleo de soja",884,0.0,0.0,100.0],["Ghee manteiga clarificada",876,0.3,0.0,99.5],
  ["PVT soja granulada seca",335,53.0,32.0,2.0],["PVT soja granulada hidratada",100,16.0,9.5,0.6],
  ["Tofu firme",76,8.1,1.9,4.8],["Tofu sedoso",55,5.0,3.0,2.8],
  ["Tempeh",193,19.0,9.4,11.0],["Seitan",370,75.0,14.0,1.9],
  ["Suco de laranja natural",43,0.7,10.0,0.2],["Suco de uva integral",75,0.6,18.0,0.3],
  ["Leite de amêndoa sem açúcar",15,0.6,0.3,1.2],["Leite de aveia",48,1.3,7.0,1.5],
  ["Leite de soja",33,3.0,2.5,1.8],["Café preto",2,0.3,0.0,0.0],
  ["Chá verde",1,0.2,0.2,0.0],["Água de coco",19,0.7,3.7,0.2],
  ["Mel",309,0.3,84.0,0.0],["Açúcar refinado",394,0.0,99.5,0.0],
  ["Açúcar mascavo",380,0.3,95.0,0.1],["Adoçante stévia",0,0.0,0.0,0.0],
  ["Chocolate 70 cacau",546,5.0,60.0,32.0],["Chocolate 85 cacau",590,5.0,48.0,43.0],
  ["Chocolate ao leite",533,7.5,59.0,29.0],["Chocolate em pó 50 cacau",345,19.0,55.0,13.0],
  ["Achocolatado em pó",387,6.0,82.0,3.5],["Pasta de avelã nutella",547,6.3,57.5,30.9],
  ["Geleia de morango",250,0.4,65.0,0.1],["Sorvete de creme",207,3.5,23.6,11.0],
  ["Molho shoyu",60,6.0,5.5,0.0],["Molho de tomate industrializado",68,1.8,14.5,0.8],
  ["Ketchup",112,1.4,28.0,0.1],["Mostarda",66,3.7,6.4,3.9],
  ["Maionese",680,1.5,2.4,74.0],["Maionese light",290,1.5,5.0,30.0],
  ["Hambúrguer bovino grelhado",222,20.0,0.0,15.0],["Hambúrguer frango grelhado",163,22.0,0.0,8.0],
  ["Frango com legumes refogado",120,15.0,5.0,4.5],["Feijão cozido temperado",90,5.5,15.0,1.5],
].map(([n,k,p,c,g])=>({nome:n,kcal:k,prot:p,carbo:c,gord:g}));
const OBJETIVOS = {
  musculacao:    {label:"Musculação",    prot_kg:1.8, carbo_pct:0.45, gord_pct:null, ajuste_kcal:{perda:-400,manutencao:0,ganho:300}},
  fisiculturismo:{label:"Fisiculturismo",prot_kg:2.2, carbo_pct:0.40, gord_pct:null, ajuste_kcal:{perda:-500,manutencao:0,ganho:350}},
  emagrecimento: {label:"Emagrecimento", prot_kg:1.8, carbo_pct:0.30, gord_pct:0.25, ajuste_kcal:{perda:-500,manutencao:-200,ganho:0}},
  corrida:       {label:"Corrida",       prot_kg:1.6, carbo_pct:0.55, gord_pct:null, ajuste_kcal:{perda:-300,manutencao:0,ganho:200}},
  saude:         {label:"Saúde geral",   prot_kg:1.4, carbo_pct:0.50, gord_pct:null, ajuste_kcal:{perda:-400,manutencao:0,ganho:250}},
  pouco_ativo:   {label:"Pouco ativo",   prot_kg:1.2, carbo_pct:0.45, gord_pct:null, ajuste_kcal:{perda:-600,manutencao:-100,ganho:0}},
  lutas:         {label:"Lutas",         prot_kg:1.8, carbo_pct:0.50, gord_pct:null, ajuste_kcal:{perda:-300,manutencao:0,ganho:250}},
};
const _LUTA_ICONS = {
  muay_thai: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8IS0tIGJyYcOnbyBzdXBlcmlvciAtLT4KICA8cmVjdCB4PSI2IiB5PSIxIiB3aWR0aD0iNCIgaGVpZ2h0PSI1IiBmaWxsPSIjZWNlOWU0Ii8+CiAgPCEtLSBjb3RvdmVsbyBlbSBkZXN0YXF1ZSAtLT4KICA8cmVjdCB4PSI1IiB5PSI1IiB3aWR0aD0iNiIgaGVpZ2h0PSIzIiBmaWxsPSIjZjM5YzEyIi8+CiAgPHJlY3QgeD0iNCIgeT0iNiIgd2lkdGg9IjgiIGhlaWdodD0iMiIgZmlsbD0iI2ZmZDU0ZiIvPgogIDwhLS0gcG9udGEgZG8gY290b3ZlbG8gLS0+CiAgPHJlY3QgeD0iMiIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjEiIHk9IjgiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9IiNjMDM5MmIiLz4KICA8IS0tIGJyYcOnbyBpbmZlcmlvciAtLT4KICA8cmVjdCB4PSI1IiB5PSI4IiB3aWR0aD0iNCIgaGVpZ2h0PSI1IiBmaWxsPSIjZWNlOWU0Ii8+CiAgPCEtLSBsaW5oYXMgZGUgaW1wYWN0byAtLT4KICA8cmVjdCB4PSIwIiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZkNTRmIi8+CiAgPHJlY3QgeD0iMCIgeT0iOSIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iI2ZmZDU0ZiIvPgo8L3N2Zz4=" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
  bjj: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiMzNDk4ZGIiLz4KICA8cmVjdCB4PSI1IiB5PSIzIiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgZmlsbD0iIzI5ODBiOSIvPgogIDxyZWN0IHg9IjkiIHk9IjMiIHdpZHRoPSIyIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjk4MGI5Ii8+CiAgPHJlY3QgeD0iMyIgeT0iNyIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmYiLz4KICA8cmVjdCB4PSI2IiB5PSIxIiB3aWR0aD0iNCIgaGVpZ2h0PSIzIiBmaWxsPSIjZWNlOWU0Ii8+Cjwvc3ZnPg==" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
  judo: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI5IiB5PSIxIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIiBmaWxsPSIjZWNlOWU0Ii8+CiAgPHJlY3QgeD0iNyIgeT0iMyIgd2lkdGg9IjUiIGhlaWdodD0iNCIgZmlsbD0iI2YzOWMxMiIvPgogIDxyZWN0IHg9IjMiIHk9IjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjMiIGZpbGw9IiNlY2U5ZTQiLz4KICA8cmVjdCB4PSI1IiB5PSI4IiB3aWR0aD0iNCIgaGVpZ2h0PSI1IiBmaWxsPSIjZjM5YzEyIi8+CiAgPHJlY3QgeD0iMiIgeT0iMTMiIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiBmaWxsPSIjNTU1Ii8+CiAgPHJlY3QgeD0iMSIgeT0iMTIiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmQ1NGYiLz4KICA8cmVjdCB4PSIxMiIgeT0iMTIiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmQ1NGYiLz4KPC9zdmc+" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
  boxing: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIyIiB5PSI0IiB3aWR0aD0iNyIgaGVpZ2h0PSI5IiBmaWxsPSIjZTc0YzNjIi8+CiAgPHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjciIGhlaWdodD0iMSIgZmlsbD0iIzkyMmIyMSIvPgogIDxyZWN0IHg9IjEiIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjYiIGZpbGw9IiNjMDM5MmIiLz4KICA8cmVjdCB4PSI5IiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSI2IiBmaWxsPSIjYzAzOTJiIi8+CiAgPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjQiIHk9IjIiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9IiNjMDM5MmIiLz4KICA8cmVjdCB4PSIxMCIgeT0iNiIgd2lkdGg9IjUiIGhlaWdodD0iNCIgZmlsbD0iI2ZmZDU0ZiIgZmlsbC1vcGFjaXR5PSIuNiIvPgogIDxyZWN0IHg9IjExIiB5PSI3IiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiBmaWxsPSIjZjM5YzEyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
  mma: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI1IiB5PSIxIiB3aWR0aD0iNiIgaGVpZ2h0PSIxNCIgZmlsbD0iIzMzMyIvPgogIDxyZWN0IHg9IjEiIHk9IjUiIHdpZHRoPSIxNCIgaGVpZ2h0PSI2IiBmaWxsPSIjMzMzIi8+CiAgPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzIi8+CiAgPHJlY3QgeD0iNiIgeT0iMiIgd2lkdGg9IjQiIGhlaWdodD0iMTIiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSIyIiB5PSI2IiB3aWR0aD0iMTIiIGhlaWdodD0iNCIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSI2IiB5PSI2IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjYzAzOTJiIi8+CiAgPHJlY3QgeD0iNyIgeT0iNyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMyIvPgo8L3N2Zz4=" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
  capoeira: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI5IiB5PSIwIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIiBmaWxsPSIjNWMzMzE3Ii8+CiAgPHJlY3QgeD0iOSIgeT0iMCIgd2lkdGg9IjMiIGhlaWdodD0iMSIgZmlsbD0iIzFhMGEwMCIvPgogIDxyZWN0IHg9IjciIHk9IjMiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmNWM1MTgiLz4KICA8cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiBmaWxsPSIjNWMzMzE3Ii8+CiAgPHJlY3QgeD0iMyIgeT0iMSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzVjMzMxNyIvPgogIDxyZWN0IHg9IjIiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI3IiB3aWR0aD0iMiIgaGVpZ2h0PSIzIiBmaWxsPSIjM2ExZTBhIi8+CiAgPHJlY3QgeD0iNyIgeT0iMTAiIHdpZHRoPSIyIiBoZWlnaHQ9IjMiIGZpbGw9IiMzYTFlMGEiLz4KICA8cmVjdCB4PSI2IiB5PSIxMyIgd2lkdGg9IjMiIGhlaWdodD0iMSIgZmlsbD0iIzIyMiIvPgogIDxyZWN0IHg9IjExIiB5PSI0IiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiBmaWxsPSIjNWMzMzE3Ii8+CiAgPHJlY3QgeD0iNCIgeT0iNSIgd2lkdGg9IjMiIGhlaWdodD0iMiIgZmlsbD0iIzVjMzMxNyIvPgogIDxyZWN0IHg9IjAiIHk9IjEiIHdpZHRoPSIyIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmQ1NGYiLz4KICA8cmVjdCB4PSIxIiB5PSIzIiB3aWR0aD0iMiIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZkNTRmIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
  wrestling: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIxIiB5PSIzIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIiBmaWxsPSIjZWNlOWU0Ii8+CiAgPHJlY3QgeD0iMSIgeT0iNiIgd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsbD0iIzM0OThkYiIvPgogIDxyZWN0IHg9IjMiIHk9IjkiIHdpZHRoPSIzIiBoZWlnaHQ9IjQiIGZpbGw9IiMzNDk4ZGIiLz4KICA8cmVjdCB4PSIxMCIgeT0iMyIgd2lkdGg9IjMiIGhlaWdodD0iMyIgZmlsbD0iI2VjZTllNCIvPgogIDxyZWN0IHg9IjkiIHk9IjYiIHdpZHRoPSI0IiBoZWlnaHQ9IjUiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSI5IiB5PSI5IiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiBmaWxsPSIjZTc0YzNjIi8+CiAgPHJlY3QgeD0iNSIgeT0iNyIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzg4OCIvPgogIDxyZWN0IHg9IjQiIHk9IjYiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIGZpbGw9IiM2NjYiLz4KPC9zdmc+" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
  karate: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIyIiB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgZmlsbD0iI2VjZTllNCIvPgogIDxyZWN0IHg9IjYiIHk9IjIiIHdpZHRoPSIyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjZGRkIi8+CiAgPHJlY3QgeD0iOCIgeT0iMiIgd2lkdGg9IjIiIGhlaWdodD0iMTIiIGZpbGw9IiNkZGQiLz4KICA8cmVjdCB4PSI0IiB5PSI3IiB3aWR0aD0iOCIgaGVpZ2h0PSIyIiBmaWxsPSIjMTExIi8+CiAgPHJlY3QgeD0iNiIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iMyIgZmlsbD0iI2VjZTllNCIvPgogIDxyZWN0IHg9IjExIiB5PSI1IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiBmaWxsPSIjZWNlOWU0Ii8+Cjwvc3ZnPg==" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
  sumo: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8IS0tIGNvcnBvIGxhcmdvIGRvIHN1bcO0IC0tPgogIDxyZWN0IHg9IjMiIHk9IjciIHdpZHRoPSIxMCIgaGVpZ2h0PSI3IiBmaWxsPSIjZWNlOWU0Ii8+CiAgPCEtLSBjYWJlw6dhIC0tPgogIDxyZWN0IHg9IjUiIHk9IjIiIHdpZHRoPSI2IiBoZWlnaHQ9IjUiIGZpbGw9IiNlY2U5ZTQiLz4KICA8IS0tIG1hd2FzaGkgKGNpbnRvKSAtLT4KICA8cmVjdCB4PSIzIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIiIGZpbGw9IiNmMzljMTIiLz4KICA8cmVjdCB4PSIzIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmQ1NGYiLz4KICA8IS0tIGJyYcOnb3MgbGFyZ29zIC0tPgogIDxyZWN0IHg9IjEiIHk9IjciIHdpZHRoPSIzIiBoZWlnaHQ9IjQiIGZpbGw9IiNlY2U5ZTQiLz4KICA8cmVjdCB4PSIxMiIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iNCIgZmlsbD0iI2VjZTllNCIvPgogIDwhLS0gdG9wa25vdCAoY29xdWUpIC0tPgogIDxyZWN0IHg9IjciIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjMiIGZpbGw9IiMzMzMiLz4KICA8cmVjdCB4PSI2IiB5PSIxIiB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSIjMzMzIi8+CiAgPCEtLSBwZXJuYXMgLS0+CiAgPHJlY3QgeD0iMyIgeT0iMTMiIHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNlY2U5ZTQiLz4KICA8cmVjdCB4PSI5IiB5PSIxMyIgd2lkdGg9IjQiIGhlaWdodD0iMyIgZmlsbD0iI2VjZTllNCIvPgogIDwhLS0gZXhwcmVzc8OjbyBzw6lyaWE6IG9saG9zIC0tPgogIDxyZWN0IHg9IjYiIHk9IjQiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiLz4KICA8cmVjdCB4PSI5IiB5PSI0IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:18px;height:18px;margin-right:5px;image-rendering:pixelated">`,
};
const _UP = `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px">`;
const _DN = `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px">`;
const LUTAS = {
  muay_thai: {
  label:"Muay Thai",
  prot_kg:1.8, carbo_pct:0.52, gord_pct:null,
  ajuste_kcal:{perda:-250,manutencao:150,ganho:350},
  desc:`<b>Muay Thai</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">A arte das 8 armas — socos, chutes, cotoveladas e joelhadas.</span><br>Altíssimo gasto calórico por sessão (600–900 kcal/h). O cardio intenso dos rounds exige reservas de glicogênio abastecidas. Proteína essencial para recuperar o impacto muscular dos clinches e golpes.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+8% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+5% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−4% gord</span></span>`
  },
  bjj: {
  label:"BJJ / Jiu-Jitsu",
  prot_kg:2.0, carbo_pct:0.42, gord_pct:null,
  ajuste_kcal:{perda:-300,manutencao:0,ganho:250},
  desc:`<b>BJJ</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">O xadrez do chão — quem pensa mais rápido vence.</span><br>Arte marcial de grappling no solo. Alta demanda proteica para recuperação muscular intensa dos treinos. Carboidrato moderado para energia nos rounds.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+6% prot</span> &nbsp;<span style="color:#7a9abf">carbo moderado</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−2% gord</span></span>`
  },
  judo: {
  label:"Judô",
  prot_kg:1.9, carbo_pct:0.46, gord_pct:null,
  ajuste_kcal:{perda:-300,manutencao:0,ganho:300},
  desc:`<b>Judô</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Máxima eficiência com o mínimo de esforço.</span><br>Arte marcial de arremessos e imobilizações. Esforço explosivo exige carboidrato rápido disponível. Proteína para recuperação das quedas e trações.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+5% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+3% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−3% gord</span></span>`
  },
  boxing: {
  label:"Boxe",
  prot_kg:1.8, carbo_pct:0.52, gord_pct:null,
  ajuste_kcal:{perda:-250,manutencao:100,ganho:300},
  desc:`<b>Boxe</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Float like a butterfly, sting like a bee.</span><br>Arte marcial de socos com alto componente aeróbico e anaeróbico. Rounds intensos drenam glicogênio rapidamente. Proteína para recuperar ombros, costas e braços.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+7% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+4% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−4% gord</span></span>`
  },
  mma: {
  label:"MMA",
  prot_kg:2.0, carbo_pct:0.46, gord_pct:null,
  ajuste_kcal:{perda:-200,manutencao:100,ganho:350},
  desc:`<b>MMA</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Seja imprevisível. Seja completo.</span><br>Esporte mais completo do combate. Combina striking, grappling e luta no solo. Demanda nutricional máxima entre todas as modalidades de luta.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+7% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+5% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−3% gord</span></span>`
  },
  capoeira: {
  label:"Capoeira",
  prot_kg:1.8, carbo_pct:0.50, gord_pct:null,
  ajuste_kcal:{perda:-300,manutencao:50,ganho:250},
  desc:`<b>Capoeira</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Dança, Luta & liberdade.</span><br>Arte marcial brasileira com alto gasto energético aeróbico. Movimentos acrobáticos exigem leveza corporal — carboidrato como combustível primário.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+9% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+4% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−3% gord</span></span>`
  },
  wrestling: {
  label:"Wrestling / Luta Olímpica",
  prot_kg:2.1, carbo_pct:0.43, gord_pct:null,
  ajuste_kcal:{perda:-300,manutencao:0,ganho:350},
  desc:`<b>Wrestling</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">A luta que derruba montanhas.</span><br>Luta livre com foco em takedowns e controle. Altíssima demanda proteica para força explosiva e recuperação muscular. Carboidrato para resistência nos rounds.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+8% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+4% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−3% gord</span></span>`
  },
  karate: {
  label:"Karatê / Taekwondo",
  prot_kg:1.7, carbo_pct:0.48, gord_pct:null,
  ajuste_kcal:{perda:-300,manutencao:0,ganho:250},
  desc:`<b>Karatê / TKD</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">O karatê é como água quente: se não receber calor constantemente, torna-se água fria.</span><br>Artes marciais de striking com foco em técnica e velocidade. Golpes explosivos requerem potência muscular rápida. Carboidrato para manter a velocidade dos katas e kumitê.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+5% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+4% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−2% gord</span></span>`
  },
  sumo: {
  label:"Sumô",
  prot_kg:2.2, carbo_pct:0.48, gord_pct:null,
  ajuste_kcal:{perda:-200,manutencao:200,ganho:500},
  desc:`<b>Sumô</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Não é o maior que vence — é o mais firme.</span><br>Arte marcial japonesa milenar de base larga e explosão máxima. Alta demanda calórica para manter massa e potência. Proteína elevada para suportar impactos e treinos de força; carboidrato como combustível dos empurrões explosivos.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+9% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+6% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−2% gord</span></span>`
  },
};
let lutaAtual = null;
let refeicoes = [
  {nome:"Desjejum",            kcal:100,prot:6, carbo:15,gord:4},
  {nome:"Café da manhã líquido",kcal:470,prot:30,carbo:69,gord:10},
  {nome:"Café da manhã sólido", kcal:260,prot:12,carbo:35,gord:10},
  {nome:"Almoço",               kcal:560,prot:35,carbo:75,gord:16},
  {nome:"Lanche da tarde",      kcal:350,prot:20,carbo:40,gord:10},
  {nome:"Pós-treino líquido",   kcal:250,prot:18,carbo:30,gord:2},
  {nome:"Janta",                kcal:550,prot:25,carbo:70,gord:15},
  {nome:"Ceia",                 kcal:210,prot:5, carbo:15,gord:8},
];
let userRefeicoes = refeicoes.map(()=>[]);
let ingredientesTemp = [];
let selecionado = null;
let editando=false, totaisVisiveis=false, tabelaVisivel=false, modoExcluir=false;
let objAtual=null, goalAtual=null;
let aguaML=0, aguaMeta=2500;
let gerenciarTemp = [];
let dragActive = false;
const refColapsadas = new Set();
let macrosDiarios = {kcal:0, prot:0, carbo:0, gord:0};
function tv(v){const n=parseFloat(String(v||0).replace(',','.'));return isNaN(n)?0:n}
function n2(v){return Math.round(tv(v)*10)/10}
function norm(s){return String(s||'').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function abrirPopup(id){_$_(id).style.display='block'}
function fecharPopup(id){_$_(id).style.display='none'}
function abrirModal(id){
  const el = _$_(id);
  el.classList.add('ativo');
  if(id === 'modal-levelup') {
  const vid = _$_('levelup-video');
  if(vid) { vid.currentTime=0; vid.play().catch(()=>{}); }
  const cvIcon = _$_('levelup-icon-canvas');
  if(cvIcon) drawLevelIcon(cvIcon.getContext('2d'), xpData.level+1 <= 10 ? xpData.level+1 : xpData.level, 48);
  const shopIc = _$_('shop-btn-icon');
  if(shopIc) {
  const sx = shopIc.getContext('2d'); const ss = 14/10;
  const rr=(x,y,w,h,c)=>{sx.fillStyle=c;sx.fillRect(x*ss,y*ss,w*ss,h*ss)};
  rr(1,4,8,7,'#e74c3c');rr(5,2,4,3,'#c0392b');rr(6,1,2,2,'#922b21');rr(9,4,4,6,'#c0392b');rr(4,5,2,3,'#ffd54f');rr(8,5,2,3,'#ffd54f');
  }
  }
}
function fecharModal(id){
  const el = _$_(id);
  el.classList.remove('ativo');
  if(id === 'modal-levelup') {
  const vid = _$_('levelup-video');
  if(vid) { vid.pause(); vid.currentTime=0; }
  const audio = _$_('victory-audio');
  if(audio) { audio.pause(); audio.currentTime=0; }
  }
}
const htip=document.createElement('div');
htip.style.cssText='position:fixed;background:#111;color:#f66;border:1px solid #444;padding:6px 10px;border-radius:6px;font-size:13px;display:none;z-index:9999;pointer-events:none';
document.body.appendChild(htip);
function selObj(el){
  document.querySelectorAll('.obj-card').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  objAtual=el.dataset.obj;
  const sub=_$_('submenu-lutas');
  const descDiv=_$_('obj-desc');
  if(objAtual==='lutas'){
  sub.style.display='block';
  descDiv.style.display='none';
  } else {
  sub.style.display='none';
  lutaAtual=null;
  document.querySelectorAll('.luta-card').forEach(c=>c.classList.remove('sel'));
  _$_('luta-desc').innerHTML='';
  const objDescs = {
  musculacao: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIxIiB5PSI2IiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiBmaWxsPSIjZTc0YzNjIi8+PHJlY3QgeD0iMyIgeT0iNSIgd2lkdGg9IjIiIGhlaWdodD0iNiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjEyIiB5PSI2IiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiBmaWxsPSIjZTc0YzNjIi8+PHJlY3QgeD0iMTEiIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjYiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSI1IiB5PSI3IiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiBmaWxsPSIjZjM5YzEyIi8+CiAgPHJlY3QgeD0iMCIgeT0iNyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2MwMzkyYiIvPjxyZWN0IHg9IjE0IiB5PSI3IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjYzAzOTJiIi8+CiAgPCEtLSBicmHDp28vbcO6c2N1bG8gLS0+CiAgPHJlY3QgeD0iNiIgeT0iNCIgd2lkdGg9IjQiIGhlaWdodD0iMiIgZmlsbD0iI2ZjYTVhNSIvPgo8L3N2Zz4=" style="vertical-align:middle;width:16px;height:16px;margin-right:4px;image-rendering:pixelated" aria-hidden="true"><b>Musculação</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">A arte da força.</span><br>Treino de força com pesos para hipertrofia e aumento de força. Alta demanda proteica para síntese muscular. Carboidrato essencial para energia nos treinos.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+3% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+2% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−2% gord</span></span>`,
  fisiculturismo: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8IS0tIHRyb2bDqXUgLS0+CiAgPHJlY3QgeD0iNSIgeT0iMSIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0iI2YzOWMxMiIvPjxyZWN0IHg9IjMiIHk9IjIiIHdpZHRoPSIzIiBoZWlnaHQ9IjQiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSIxMCIgeT0iMiIgd2lkdGg9IjMiIGhlaWdodD0iNCIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjYiIHk9IjciIHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9IiNmMzljMTIiLz48cmVjdCB4PSI1IiB5PSI5IiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iNCIgeT0iMTEiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIGZpbGw9IiNmMzljMTIiLz4KICA8cmVjdCB4PSI3IiB5PSIzIiB3aWR0aD0iMiIgaGVpZ2h0PSIzIiBmaWxsPSIjZmZmOSIvPgogIDwhLS0gZXN0cmVsYSBubyB0b3BvIC0tPgogIDxyZWN0IHg9IjciIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmQ1NGYiLz4KPC9zdmc+" style="vertical-align:middle;width:16px;height:16px;margin-right:4px;image-rendering:pixelated" aria-hidden="true"><b>Fisiculturismo</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Esculpir o corpo através da dor.</span><br>Preparação para competição com extrema definição muscular. Proteína máxima para preservar massa no deficit. Ciclos de carbo controlados.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+5% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−8% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−3% gord</span></span>`,
  emagrecimento: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8IS0tIGNoYW1hIGRlIGZvZ28gcGl4ZWwgLS0+CiAgPHJlY3QgeD0iNyIgeT0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMyIgZmlsbD0iI2ZmZDU0ZiIvPgogIDxyZWN0IHg9IjUiIHk9IjIiIHdpZHRoPSI2IiBoZWlnaHQ9IjMiIGZpbGw9IiNmMzljMTIiLz4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iOCIgaGVpZ2h0PSI0IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMyIgeT0iNyIgd2lkdGg9IjEwIiBoZWlnaHQ9IjQiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSI0IiB5PSIxMSIgd2lkdGg9IjgiIGhlaWdodD0iMyIgZmlsbD0iI2MwMzkyYiIvPgogIDxyZWN0IHg9IjYiIHk9IjEzIiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiBmaWxsPSIjOTIyYjIxIi8+CiAgPCEtLSBjZW50cm8gY2xhcm8gLS0+CiAgPHJlY3QgeD0iNiIgeT0iNiIgd2lkdGg9IjQiIGhlaWdodD0iMyIgZmlsbD0iI2ZmZDU0ZiIvPgo8L3N2Zz4=" style="vertical-align:middle;width:16px;height:16px;margin-right:4px;image-rendering:pixelated" aria-hidden="true"><b>Emagrecimento</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Gaste mais do que come, com moderação e saúde.</span><br>Perda de gordura com preservação de massa magra. Deficit calórico controlado, proteína alta anti-catabolismo, carboidrato reduzido.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−15% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+3% prot</span> &nbsp;<span style="color:#e67e22">gordura ~25%</span></span>`,
  corrida: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8IS0tIGJvbmVjbyBjb3JyZW5kbyAtLT4KICA8cmVjdCB4PSI4IiB5PSIxIiB3aWR0aD0iMyIgaGVpZ2h0PSIzIiBmaWxsPSIjZWNlOWU0Ii8+PCEtLSBjYWJlw6dhIC0tPgogIDxyZWN0IHg9IjciIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNlNzRjM2MiLz48IS0tIGNvcnBvIC0tPgogIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjMiIGZpbGw9IiNlY2U5ZTQiLz48IS0tIGJyYcOnbyBmcmVudGUgLS0+CiAgPHJlY3QgeD0iMTEiIHk9IjMiIHdpZHRoPSIyIiBoZWlnaHQ9IjMiIGZpbGw9IiNlY2U5ZTQiLz48IS0tIGJyYcOnbyB0csOhcyAtLT4KICA8cmVjdCB4PSI2IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIzIiBmaWxsPSIjZTc0YzNjIi8+PCEtLSBwZXJuYSB0csOhcyAtLT4KICA8cmVjdCB4PSI5IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIzIiBmaWxsPSIjZTc0YzNjIi8+PCEtLSBwZXJuYSBmcmVudGUgLS0+CiAgPHJlY3QgeD0iNCIgeT0iMTEiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIGZpbGw9IiNlY2U5ZTQiLz4KICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIGZpbGw9IiNlY2U5ZTQiLz4KPC9zdmc+" style="vertical-align:middle;width:16px;height:16px;margin-right:4px;image-rendering:pixelated" aria-hidden="true"><b>Corrida</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">RUN FOREST, RUN!</span><br>Esporte de endurance aeróbico. Alto consumo de glicogênio muscular — carboidrato é o combustível principal. Proteína moderada para recuperação de fibras.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjAiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI4IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#2ecc71">+10% carbo</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−2% prot</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−4% gord</span></span>`,
  saude: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8IS0tIGNydXogZGEgc2HDumRlIHZlcmRlIC0tPgogIDxyZWN0IHg9IjYiIHk9IjIiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMmVjYzcxIi8+CiAgPHJlY3QgeD0iMiIgeT0iNiIgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIGZpbGw9IiMyZWNjNzEiLz4KICA8cmVjdCB4PSI3IiB5PSIzIiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgZmlsbD0iIzZlZTdiNyIvPgogIDxyZWN0IHg9IjMiIHk9IjciIHdpZHRoPSIxMCIgaGVpZ2h0PSIyIiBmaWxsPSIjNmVlN2I3Ii8+Cjwvc3ZnPg==" style="vertical-align:middle;width:16px;height:16px;margin-right:4px;image-rendering:pixelated" aria-hidden="true"><b>Saúde Geral</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Saúde estável e qualidade de vida.</span><br>Bem-estar global, prevenção de doenças e qualidade de vida. Macros equilibrados seguindo diretrizes nutricionais. Dieta variada e sustentável.<br><span style="color:var(--ink-m);font-size:.8em"><span style="color:#2ecc71">distribuição equilibrada de todos os macros</span></span>`,
  pouco_ativo: `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8IS0tIHNvZsOhIHBpeGVsIC0tPgogIDxyZWN0IHg9IjEiIHk9IjgiIHdpZHRoPSIxNCIgaGVpZ2h0PSI2IiBmaWxsPSIjNTU1Ii8+PHJlY3QgeD0iMSIgeT0iOCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjEiIGZpbGw9IiM3NzciLz4KICA8cmVjdCB4PSIxIiB5PSI2IiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiBmaWxsPSIjNjY2Ii8+PHJlY3QgeD0iMTIiIHk9IjYiIHdpZHRoPSIzIiBoZWlnaHQ9IjQiIGZpbGw9IiM2NjYiLz4KICA8cmVjdCB4PSIzIiB5PSI3IiB3aWR0aD0iMTAiIGhlaWdodD0iMyIgZmlsbD0iIzg4OCIvPgogIDwhLS0gYm9uZWNvIGRlaXRhZG8gLS0+CiAgPHJlY3QgeD0iNCIgeT0iNSIgd2lkdGg9IjMiIGhlaWdodD0iMyIgZmlsbD0iI2VjZTllNCIvPjxyZWN0IHg9IjciIHk9IjYiIHdpZHRoPSI1IiBoZWlnaHQ9IjIiIGZpbGw9IiNlNzRjM2MiLz4KICA8IS0tIHp6enogLS0+CiAgPHJlY3QgeD0iMTEiIHk9IjIiIHdpZHRoPSIzIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMzljMTIiLz48cmVjdCB4PSIxMiIgeT0iMyIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iI2YzOWMxMiIvPgogIDxyZWN0IHg9IjExIiB5PSI0IiB3aWR0aD0iMyIgaGVpZ2h0PSIxIiBmaWxsPSIjZjM5YzEyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:16px;height:16px;margin-right:4px;image-rendering:pixelated" aria-hidden="true"><b style="color:#e74c3c">Vida Sedentária</b><br><span style="color:#ffd54f;font-style:italic;font-family:var(--font-vt);font-size:.95rem;letter-spacing:.04em">Por que não tentar uma caminhada?</span><br>Baixíssimo gasto calórico. Risco aumentado para doenças metabólicas. Se escolhido, as calorias são drasticamente reduzidas.<br><span style="color:var(--ink-m);font-size:.8em"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−10% kcal</span> &nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI0IiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSI3IiBmaWxsPSIjZTY3ZTIyIi8+CiAgPHJlY3QgeD0iMiIgeT0iOCIgd2lkdGg9IjYiIGhlaWdodD0iMiIgZmlsbD0iI2U2N2UyMiIvPgogIDxyZWN0IHg9IjAiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNjdlMjIiLz4KICA8cmVjdCB4PSI4IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTY3ZTIyIi8+Cjwvc3ZnPg==" style="vertical-align:middle;width:10px;height:12px;image-rendering:pixelated;margin:0 2px"><span style="color:#e67e22">−2% prot</span></span>`,
  };
  if(objDescs[objAtual]) {
  descDiv.innerHTML = objDescs[objAtual];
  descDiv.style.display = 'block';
  } else {
  descDiv.style.display = 'none';
  }
  }
  salvarPerfil();
}
function selLuta(el){
  document.querySelectorAll('.luta-card').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  lutaAtual=el.dataset.luta;
  const L=LUTAS[lutaAtual];
  _$_('luta-desc').innerHTML=L?L.desc:'';
  salvarPerfil();
}
function selGoal(g){
  document.querySelectorAll('.goal-btn').forEach(b=>b.classList.remove('sel'));
  _$_('gbtn-'+g).classList.add('sel');
  goalAtual=g;
  salvarPerfil();
}
function calcularTudo(){
  const peso=tv(_$_('input-peso').value);
  const alturaCm=tv(_$_('input-altura').value);
  const idade=tv(_$_('input-idade').value);
  const sexo=_$_('input-sexo').value;
  const nivel=tv(_$_('input-atividade').value);
  const metaPeso=tv(_$_('input-meta-peso').value);
  if(!peso||!alturaCm||!idade){
  _$_('resultado-imc').innerHTML='<div class="warn-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="13" height="13" fill="none" style="vertical-align:middle;margin-right:3px"><rect x="7" y="2" width="2" height="8" fill="#fcd34d"/><rect x="3" y="10" width="10" height="2" fill="#fcd34d"/><rect x="1" y="12" width="14" height="2" fill="#fcd34d"/><rect x="3" y="10" width="2" height="2" fill="#fcd34d"/><rect x="7" y="10" width="2" height="2" fill="#0c0c0c"/></svg> Preencha peso, altura e idade.</div>';
  return;
  }
  const imc=peso/((alturaCm/100)**2);
  const imcStr=imc<18.5?'<span style="color:#7dd3fc;font-weight:700">◈ Abaixo do peso</span>':imc<25?'<span style="color:#6ee7b7;font-weight:700">◆ Normal</span>':imc<30?'<span style="color:#fcd34d;font-weight:700">◆ Sobrepeso</span>':'<span style="color:#fca5a5;font-weight:700">◈ Obesidade</span>';
  const bmr=sexo==='m'
  ?(10*peso + 6.25*alturaCm - 5*idade + 5)
  :(10*peso + 6.25*alturaCm - 5*idade - 161);
  const tdee=bmr*nivel;
  const protMin=sexo==='m'?0.8*peso:0.8*peso;
  const protOtimo=(objAtual&&OBJETIVOS[objAtual])?(OBJETIVOS[objAtual].prot_kg*peso):(1.2*peso);
  const protLabel=sexo==='m'?'Homem: 1.6–2.2g/kg':'Mulher: 1.4–2.0g/kg';
  aguaMeta=Math.round(peso*35);
  if(nivel>=1.55) aguaMeta+=500;
  if(nivel>=1.725) aguaMeta+=500;
  if(objAtual==='lutas') aguaMeta+=500;
  atualizarAgua();
  _$_('agua-meta-txt').textContent=`Meta de água: ${aguaMeta} ml/dia (baseada no seu peso e atividade)`;
  const obConfig = (objAtual==='lutas' && lutaAtual && LUTAS[lutaAtual])
  ? LUTAS[lutaAtual]
  : (objAtual && OBJETIVOS[objAtual] ? OBJETIVOS[objAtual] : null);
  let kcalMeta=tdee;
  let prot=protOtimo, carboPct=0.45;
  if(obConfig){
  prot=obConfig.prot_kg*peso;
  carboPct=obConfig.carbo_pct;
  const goal=goalAtual||'manutencao';
  kcalMeta=tdee+(obConfig.ajuste_kcal[goal]||0);
  } else if(goalAtual){
  kcalMeta=goalAtual==='perda'?tdee-400:goalAtual==='ganho'?tdee+300:tdee;
  }
  const kcalProt=prot*4;
  const kcalCarbo=kcalMeta*carboPct;
  const carbo=kcalCarbo/4;
  const gordKcal=(obConfig&&obConfig.gord_pct!=null)
  ?kcalMeta*obConfig.gord_pct
  :kcalMeta-kcalProt-kcalCarbo;
  const gord=Math.max(0,gordKcal)/9;
  macrosDiarios={kcal:Math.round(kcalMeta), prot:Math.round(prot*10)/10, carbo:Math.round(carbo*10)/10, gord:Math.round(gord*10)/10};
  let objLabel = objAtual ? (OBJETIVOS[objAtual]?.label||objAtual) : '—';
  if(objAtual==='lutas' && lutaAtual && LUTAS[lutaAtual]) objLabel='Lutas — '+LUTAS[lutaAtual].label;
  else if(objAtual==='lutas') objLabel='Lutas (selecione a modalidade)';
  const goalLabel=goalAtual==='perda'?'Perda de Peso':goalAtual==='ganho'?'Ganho de Massa':goalAtual==='manutencao'?'Manutenção':'—';

  // ── Smart Goal Analysis ──────────────────────────────────────────
  let goalAnalysisHtml = '';
  if(goalAtual && metaPeso && metaPeso !== peso) {
    const diff = metaPeso - peso;
    const querPerder = diff < 0;
    const querGanhar = diff > 0;
    const absDiff = Math.abs(diff);

    // Conflict detection
    let conflito = '';
    let aviso = '';
    let dica = '';
    let cor = '';
    let icon = '';

    if(goalAtual === 'perda') {
      if(querGanhar) {
        conflito = '[!] CONFLITO DETECTADO';
        aviso = `Sua meta de peso (${metaPeso} kg) é <b>maior</b> que o peso atual (${peso} kg), mas você selecionou <b>Perda de Peso</b>. Isso é contraditório!`;
        dica = 'Para perder peso sua meta deve ser MENOR que o peso atual. Considere trocar para <b>Ganho de Massa</b> ou ajustar sua meta.';
        cor = '#fca5a5';
        icon = '▲';
      } else {
        const semanas = absDiff / 0.5;
        const calDeficit = obConfig ? Math.abs(obConfig.ajuste_kcal['perda']||400) : 400;
        icon = '▽';
        cor = '#fca5a5';
        dica = `
          <div style="margin-top:6px;line-height:2">
            ▼ <b>Objetivo:</b> perder <b>${absDiff.toFixed(1)} kg</b><br>
            ◷ <b>Estimativa:</b> ~<b>${Math.round(semanas)} semanas</b> ao ritmo seguro de 0,5 kg/sem<br>
            ▽ <b>Déficit calórico:</b> −${calDeficit} kcal/dia em relação ao TDEE<br>
            ► <b>Estratégia:</b> priorizar proteína para preservar massa muscular<br>
            <div style="margin-top:4px;padding:6px 10px;background:rgba(192,57,43,.1);border-left:2px solid var(--red-l);border-radius:2px;font-size:.88em">
              ◈ Modificadores aplicados:<br>
              &nbsp;→ Proteína: <span style="color:#fca5a5">+${((obConfig?obConfig.prot_kg:1.8)-1.2).toFixed(1)}g/kg</span> acima do mínimo<br>
              &nbsp;→ Gordura: <span style="color:#fca5a5">controlada</span> para criar déficit<br>
              &nbsp;→ Carboidrato: <span style="color:#fca5a5">reduzido</span> para respeitar calorias
            </div>
          </div>`;
      }
    } else if(goalAtual === 'ganho') {
      if(querPerder) {
        conflito = '[!] CONFLITO DETECTADO';
        aviso = `Sua meta de peso (${metaPeso} kg) é <b>menor</b> que o peso atual (${peso} kg), mas você selecionou <b>Ganho de Massa</b>. Isso é contraditório!`;
        dica = 'Para ganhar massa sua meta deve ser MAIOR que o peso atual. Considere trocar para <b>Perda de Peso</b> ou ajustar sua meta.';
        cor = '#fcd34d';
        icon = '▲';
      } else {
        const semanas = absDiff / 0.3;
        const calSuperavit = obConfig ? (obConfig.ajuste_kcal['ganho']||300) : 300;
        icon = '△';
        cor = '#6ee7b7';
        dica = `
          <div style="margin-top:6px;line-height:2">
            ▲ <b>Objetivo:</b> ganhar <b>${absDiff.toFixed(1)} kg</b> de massa<br>
            ◷ <b>Estimativa:</b> ~<b>${Math.round(semanas)} semanas</b> ao ritmo seguro de 0,3 kg/sem<br>
            △ <b>Superávit calórico:</b> +${calSuperavit} kcal/dia em relação ao TDEE<br>
            ► <b>Estratégia:</b> alto aporte proteico + carboidrato como combustível<br>
            <div style="margin-top:4px;padding:6px 10px;background:rgba(26,188,156,.08);border-left:2px solid var(--green-l);border-radius:2px;font-size:.88em">
              ◈ Modificadores aplicados:<br>
              &nbsp;→ Proteína: <span style="color:#6ee7b7">+${((obConfig?obConfig.prot_kg:1.8)-1.2).toFixed(1)}g/kg</span> para síntese muscular<br>
              &nbsp;→ Carboidrato: <span style="color:#6ee7b7">elevado</span> para energia e recuperação<br>
              &nbsp;→ Gordura: <span style="color:#6ee7b7">moderada</span> para suporte hormonal
            </div>
          </div>`;
      }
    } else if(goalAtual === 'manutencao') {
      if(absDiff > 2) {
        aviso = `Sua meta (${metaPeso} kg) difere ${absDiff.toFixed(1)} kg do peso atual. Em modo <b>Manutenção</b> o objetivo é estabilizar, não mudar peso significativamente.`;
        cor = '#fcd34d';
        icon = '⊜';
        dica = `
          <div style="margin-top:6px;line-height:2">
            ⊜ <b>Modo manutenção:</b> calorias = TDEE (sem déficit/superávit)<br>
            ◉ Dica: se quer mudar ${absDiff.toFixed(1)} kg, considere trocar para <b>${querPerder ? 'Perda de Peso' : 'Ganho de Massa'}</b><br>
            ► <b>Estratégia:</b> manter composição corporal e hábitos saudáveis<br>
            <div style="margin-top:4px;padding:6px 10px;background:rgba(41,128,185,.08);border-left:2px solid var(--blue-l);border-radius:2px;font-size:.88em">
              ◈ Macros equilibrados:<br>
              &nbsp;→ Proteína: <span style="color:#7dd3fc">moderada</span> para manutenção muscular<br>
              &nbsp;→ Carboidrato: <span style="color:#7dd3fc">normal</span> para energia diária<br>
              &nbsp;→ Gordura: <span style="color:#7dd3fc">balanceada</span>
            </div>
          </div>`;
      } else {
        cor = '#7dd3fc';
        icon = '⊜';
        dica = `<div style="margin-top:4px;line-height:2">⊜ Você está próximo da meta! Manutenção ideal.<br>► <b>Estratégia:</b> manter calorias no TDEE, macros equilibrados.</div>`;
      }
    }

    if(conflito) {
      goalAnalysisHtml = `
      <div class="warn-box" style="margin-top:8px;border-left-color:#fca5a5">
        <b style="color:#fca5a5">${conflito}</b><br>
        ${aviso}<br>
        <span style="color:var(--ink-m);font-size:.9em"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="11" height="11" fill="none" style="vertical-align:middle;margin-right:2px"><rect x="6" y="0" width="4" height="2" fill="#fcd34d"/><rect x="4" y="2" width="8" height="4" fill="#fcd34d"/><rect x="3" y="6" width="10" height="3" fill="#fcd34d"/><rect x="5" y="9" width="6" height="2" fill="#f39c12"/><rect x="6" y="11" width="4" height="2" fill="#e67e22"/><rect x="6" y="13" width="4" height="1" fill="#555"/></svg> ${dica}</span>
      </div>`;
    } else {
      goalAnalysisHtml = `
      <div style="background:rgba(255,255,255,.02);border:1px solid var(--line-s);border-left:3px solid ${cor};border-radius:2px;padding:8px 12px;margin-top:8px;font-size:.95rem">
        <b style="color:${cor}">${icon} Análise do objetivo: ${goalLabel}</b>
        ${dica}
      </div>`;
    }
  } else if(goalAtual && (!metaPeso || metaPeso === peso)) {
    const calAjuste = obConfig ? (obConfig.ajuste_kcal[goalAtual]||0) : 0;
    if(goalAtual === 'manutencao') {
      goalAnalysisHtml = `<div style="background:rgba(41,128,185,.06);border:1px solid rgba(41,128,185,.2);border-left:3px solid var(--blue-l);border-radius:2px;padding:7px 12px;margin-top:8px;font-size:.92rem;color:var(--ink-m)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="none" style="vertical-align:middle;margin-right:3px"><rect x="7" y="1" width="2" height="12" fill="#7dd3fc"/><rect x="3" y="13" width="10" height="2" fill="#3498db"/><rect x="1" y="5" width="5" height="1" fill="#7dd3fc"/><rect x="10" y="5" width="5" height="1" fill="#7dd3fc"/><rect x="0" y="6" width="7" height="2" fill="#2980b9"/><rect x="9" y="6" width="7" height="2" fill="#2980b9"/><rect x="4" y="1" width="8" height="2" fill="#3498db"/><rect x="7" y="0" width="2" height="2" fill="#7dd3fc"/></svg> <b style="color:#7dd3fc">Manutenção</b> — Calorias = TDEE. Macros balanceados para manter peso e composição.</div>`;
    } else if(goalAtual === 'perda') {
      goalAnalysisHtml = `<div style="background:rgba(192,57,43,.06);border:1px solid rgba(231,76,60,.2);border-left:3px solid var(--red-l);border-radius:2px;padding:7px 12px;margin-top:8px;font-size:.92rem;color:var(--ink-m)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="none" style="vertical-align:middle;margin-right:3px"><rect x="7" y="0" width="2" height="3" fill="#ffd54f"/><rect x="5" y="2" width="6" height="3" fill="#f39c12"/><rect x="4" y="4" width="8" height="4" fill="#e67e22"/><rect x="3" y="7" width="10" height="4" fill="#e74c3c"/><rect x="4" y="11" width="8" height="3" fill="#c0392b"/><rect x="6" y="13" width="4" height="2" fill="#922b21"/><rect x="6" y="6" width="4" height="3" fill="#ffd54f"/></svg> <b style="color:#fca5a5">Perda de Peso</b> — Déficit de ${Math.abs(calAjuste)} kcal/dia. Preencha a meta de peso para ver a estimativa de tempo.</div>`;
    } else if(goalAtual === 'ganho') {
      goalAnalysisHtml = `<div style="background:rgba(26,188,156,.06);border:1px solid rgba(46,204,113,.2);border-left:3px solid var(--green-l);border-radius:2px;padding:7px 12px;margin-top:8px;font-size:.92rem;color:var(--ink-m)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="none" style="vertical-align:middle;margin-right:3px"><rect x="1" y="6" width="3" height="4" fill="#2ecc71"/><rect x="3" y="5" width="2" height="6" fill="#2ecc71"/><rect x="12" y="6" width="3" height="4" fill="#2ecc71"/><rect x="11" y="5" width="2" height="6" fill="#2ecc71"/><rect x="5" y="7" width="6" height="2" fill="#27ae60"/><rect x="6" y="4" width="4" height="2" fill="#6ee7b7"/></svg> <b style="color:#6ee7b7">Ganho de Massa</b> — Superávit de +${calAjuste} kcal/dia. Preencha a meta de peso para ver a estimativa de tempo.</div>`;
    }
  }
  // ────────────────────────────────────────────────────────────────

  _$_('resultado-imc').innerHTML=`
  <div class="info-box">
  <b>IMC:</b> ${imc.toFixed(1)} — ${imcStr}<br>
  <b>TMB (Mifflin):</b> ${bmr.toFixed(0)} kcal &nbsp;|&nbsp; <b>TDEE:</b> ${tdee.toFixed(0)} kcal<br>
  <b>Objetivo:</b> ${objLabel} &nbsp;|&nbsp; <b>Meta:</b> ${goalLabel}<br>
  <b>Kcal diária recomendada:</b> <span style="color:#7cf;font-size:15px"><b>${Math.round(kcalMeta)} kcal</b></span><br>
  <b>Proteína:</b> ${prot.toFixed(0)} g/dia &nbsp;<span class="muted">(${protLabel} — ideal: ${(obConfig?obConfig.prot_kg:1.2).toFixed(1)}g/kg)</span><br>
  <b>Carboidratos:</b> ${carbo.toFixed(0)} g/dia &nbsp;|&nbsp; <b>Gorduras:</b> ${gord.toFixed(0)} g/dia<br>
  <b>Água:</b> ${aguaMeta} ml/dia
  </div>${goalAnalysisHtml}`;
  salvarPerfil();
}
function addAgua(ml){
  aguaML=Math.max(0,aguaML+ml);
  atualizarAgua();
  salvarDados();
}
function addAguaCustom(sinal){
  const v=parseInt(_$_('agua-custom').value)||0;
  if(!v||v<=0) return;
  aguaML=Math.max(0,aguaML+(sinal*v));
  atualizarAgua();
  salvarDados();
}
function resetAgua(){aguaML=0;atualizarAgua();salvarDados()}
function atualizarAgua(){
  const pct=aguaMeta>0?Math.min(100,(aguaML/aguaMeta)*100):0;
  const bar=_$_('agua-bar');
  bar.style.width=pct+'%';
  bar.textContent=pct>=8?pct.toFixed(0)+'%':'';
  _$_('agua-txt').innerHTML=
  `<b>${aguaML} ml</b> / <b>${aguaMeta} ml</b> &nbsp; ${aguaML>=aguaMeta?'✓ Meta atingida!':('Faltam: '+(aguaMeta-aguaML)+' ml')}`;
  verificarMetaAgua(aguaML, aguaMeta);
}
function abrirGerenciarRefeicoes(){
  gerenciarTemp=refeicoes.map(r=>({...r}));
  renderGerenciar();
  abrirPopup('popup-gerenciar');
}
function renderGerenciar(){
  const div=_$_('gerenciar-lista');
  div.innerHTML='';
  gerenciarTemp.forEach((r,i)=>{
  const row=document.createElement('div');
  row.className='ref-lista-item';
  row.dataset.idx=i;
  row.draggable=false;
  row.innerHTML=`
  <span class="drag-handle" title="Arraste para reordenar" style="cursor:grab;margin-right:8px;padding:4px 6px;user-select:none;flex-shrink:0;display:flex;align-items:center;opacity:.6">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIyIiB5PSIzIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0iIzU1NSIvPgogIDxyZWN0IHg9IjIiIHk9IjciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiBmaWxsPSIjNTU1Ii8+CiAgPHJlY3QgeD0iMiIgeT0iMTEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiBmaWxsPSIjNTU1Ii8+Cjwvc3ZnPg==" style="width:14px;height:14px;display:block" aria-hidden="true">
  </span>
  <input type="text" value="${r.nome}" oninput="gerenciarTemp[${i}].nome=this.value" style="flex:1;min-width:80px;margin-right:6px">
  <div style="display:flex;gap:4px;flex-shrink:0">
    <button class="btn-blue ger-btn-icon" onclick="duplicarRefTemp(${i})" title="Duplicar">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJub25lIj4KICA8IS0tIGZvbGhhIGRlIHRyw6FzIC0tPgogIDxyZWN0IHg9IjQiIHk9IjMiIHdpZHRoPSI5IiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWYxZjFmIiBzdHJva2U9IiMzNDk4ZGIiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjQiIHk9IjMiIHdpZHRoPSI5IiBoZWlnaHQ9IjEiIGZpbGw9IiMzNDk4ZGIiLz4KICA8IS0tIGZvbGhhIGRhIGZyZW50ZSAtLT4KICA8cmVjdCB4PSIyIiB5PSI1IiB3aWR0aD0iOSIgaGVpZ2h0PSIxMCIgZmlsbD0iIzE3MTcxNyIgc3Ryb2tlPSIjN2RkM2ZjIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8cmVjdCB4PSIyIiB5PSI1IiB3aWR0aD0iOSIgaGVpZ2h0PSIxIiBmaWxsPSIjN2RkM2ZjIi8+CiAgPCEtLSBsaW5oYXMgZGUgY29udGXDumRvIC0tPgogIDxyZWN0IHg9IjQiIHk9IjgiIHdpZHRoPSI1IiBoZWlnaHQ9IjEiIGZpbGw9IiM0MmE1ZjUiLz4KICA8cmVjdCB4PSI0IiB5PSIxMCIgd2lkdGg9IjUiIGhlaWdodD0iMSIgZmlsbD0iIzQyYTVmNSIvPgogIDxyZWN0IHg9IjQiIHk9IjEyIiB3aWR0aD0iMyIgaGVpZ2h0PSIxIiBmaWxsPSIjNDJhNWY1Ii8+Cjwvc3ZnPg==" style="width:14px;height:14px;display:block" aria-hidden="true">
    </button>
    <button class="btn-red ger-btn-icon" onclick="excluirRefTemp(${i})" title="Excluir">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIyIiB5PSIxIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjUiIHk9IjAiIHdpZHRoPSI2IiBoZWlnaHQ9IjIiIGZpbGw9IiNjMDM5MmIiLz4KICA8cmVjdCB4PSIyIiB5PSIzIiB3aWR0aD0iMTIiIGhlaWdodD0iMTEiIGZpbGw9IiM3YjFhMWEiLz4KICA8cmVjdCB4PSIzIiB5PSI0IiB3aWR0aD0iMTAiIGhlaWdodD0iOSIgZmlsbD0iIzZiMTUxNSIvPgogIDwhLS0gbGluaGFzIGludGVybmFzIC0tPgogIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjYiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSI4IiB5PSI1IiB3aWR0aD0iMSIgaGVpZ2h0PSI2IiBmaWxsPSIjZTc0YzNjIi8+CiAgPHJlY3QgeD0iMTEiIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjYiIGZpbGw9IiNlNzRjM2MiLz4KPC9zdmc+" style="width:14px;height:14px;display:block" aria-hidden="true">
    </button>
  </div>
  `;
  const handle=row.querySelector('.drag-handle');
  handle.addEventListener('mousedown',()=>{row.draggable=true;});
  handle.addEventListener('mouseleave',()=>{if(!dragActive)row.draggable=false;});
  row.addEventListener('dragstart',e=>{
  dragActive=true;
  e.dataTransfer.setData('text/plain',i);
  row.style.opacity='.4';
  handle.style.cursor='grabbing';
  });
  row.addEventListener('dragend',()=>{
  dragActive=false;
  row.draggable=false;
  row.style.opacity='1';
  handle.style.cursor='grab';
  });
  row.addEventListener('dragover',e=>{e.preventDefault();row.style.borderColor='#aaa'});
  row.addEventListener('dragleave',()=>{row.style.borderColor='#333'});
  row.addEventListener('drop',e=>{
  e.preventDefault(); row.style.borderColor='#333';
  const from=parseInt(e.dataTransfer.getData('text/plain'));
  const to=i;
  if(from===to)return;
  const moved=gerenciarTemp.splice(from,1)[0];
  gerenciarTemp.splice(to,0,moved);
  const movedData=userRefeicoes.splice(from,1)[0];
  userRefeicoes.splice(to,0,movedData);
  renderGerenciar();
  });
  let touchDragFrom=null,touchDragEl=null,touchClone=null;
  handle.addEventListener('touchstart',e=>{
  e.stopPropagation();
  e.preventDefault();
  touchDragFrom=i;
  touchDragEl=row;
  row.style.opacity='.5';
  document.body.style.overflow='hidden';
  document.documentElement.style.overflow='hidden';
  touchClone=row.cloneNode(true);
  touchClone.style.cssText='position:fixed;left:0;top:0;z-index:9999;pointer-events:none;opacity:.85;width:'+row.offsetWidth+'px;background:#1f1f1f;border:1px solid #e74c3c;border-radius:2px;padding:8px;box-shadow:0 4px 20px rgba(0,0,0,.7)';
  document.body.appendChild(touchClone);
  },{passive:false});
  handle.addEventListener('touchmove',e=>{
  if(touchDragFrom===null)return;
  e.preventDefault();
  const t=e.touches[0];
  if(touchClone){touchClone.style.transform='translate('+t.clientX+'px,'+(t.clientY-30)+'px)';}
  const el=document.elementFromPoint(t.clientX,t.clientY);
  const targetRow=el?.closest('.ref-lista-item');
  document.querySelectorAll('.ref-lista-item').forEach(r=>r.style.borderColor='');
  if(targetRow&&targetRow!==row) targetRow.style.borderColor='#e74c3c';
  },{passive:false});
  handle.addEventListener('touchend',e=>{
  if(touchDragFrom===null)return;
  if(touchClone){touchClone.remove();touchClone=null;}
  row.style.opacity='1';
  document.querySelectorAll('.ref-lista-item').forEach(r=>r.style.borderColor='');
  const t=e.changedTouches[0];
  const el=document.elementFromPoint(t.clientX,t.clientY);
  const targetRow=el?.closest('.ref-lista-item');
  if(targetRow&&targetRow!==touchDragEl){
    const to=parseInt(targetRow.dataset.idx);
    const from=touchDragFrom;
    if(from!==to){
      const moved=gerenciarTemp.splice(from,1)[0];
      gerenciarTemp.splice(to,0,moved);
      const movedData=userRefeicoes.splice(from,1)[0];
      userRefeicoes.splice(to,0,movedData);
      renderGerenciar();
    }
  }
  touchDragFrom=null;touchDragEl=null;
  document.body.style.overflow='';
  document.documentElement.style.overflow='';
  });
  div.appendChild(row);
  });
}
function excluirRefTemp(i){
  if(userRefeicoes[i]&&userRefeicoes[i].length>0){
  if(!confirm(`A refeição "${gerenciarTemp[i].nome}" tem ${userRefeicoes[i].length} alimento(s). Excluir mesmo assim?`)) return;
  }
  gerenciarTemp.splice(i,1);
  userRefeicoes.splice(i,1);
  renderGerenciar();
}
function duplicarRefTemp(i){
  const copia={...gerenciarTemp[i], nome: gerenciarTemp[i].nome+' (cópia)'};
  gerenciarTemp.splice(i+1,0,copia);
  userRefeicoes.splice(i+1,0,[]);
  renderGerenciar();
}
function adicionarNovaRefeicao(){
  gerenciarTemp.push({nome:'Nova Refeição',kcal:300,prot:20,carbo:35,gord:8});
  userRefeicoes.push([]);
  renderGerenciar();
}
function salvarGerenciarRefeicoes(){
  refeicoes=gerenciarTemp.map(r=>({...r}));
  while(userRefeicoes.length<refeicoes.length) userRefeicoes.push([]);
  userRefeicoes=userRefeicoes.slice(0,refeicoes.length);
  montarTabela();
  atualizarSelectRefeicao();
  fecharPopup('popup-gerenciar');
  calcular();
  salvarDados();
}
function montarTabela(){
  const tbody=_$_('table-body');
  tbody.innerHTML='';
  refeicoes.forEach((r,i)=>{
  const tr=document.createElement('tr');
  tr.innerHTML=`<td data-label="Refeição">${r.nome}</td>
  <td data-label="Meta kcal"><input type="number" class="meta" id="meta-kcal-${i}" value="${r.kcal}" readonly></td>
  <td data-label="Meta Prot"><input type="number" class="meta" id="meta-prot-${i}" value="${r.prot}" readonly></td>
  <td data-label="Meta Carbo"><input type="number" class="meta" id="meta-carbo-${i}" value="${r.carbo}" readonly></td>
  <td data-label="Meta Gord"><input type="number" class="meta" id="meta-gord-${i}" value="${r.gord}" readonly></td>
  <td data-label="Consumido kcal"><input type="number" id="kcal-${i}" value="0" ${window._isAdmin ? '' : 'readonly style="opacity:.55;cursor:not-allowed"'}></td>
  <td data-label="Consumido Prot"><input type="number" id="prot-${i}" value="0" ${window._isAdmin ? '' : 'readonly style="opacity:.55;cursor:not-allowed"'}></td>
  <td data-label="Consumido Carbo"><input type="number" id="carbo-${i}" value="0" ${window._isAdmin ? '' : 'readonly style="opacity:.55;cursor:not-allowed"'}></td>
  <td data-label="Consumido Gord"><input type="number" id="gord-${i}" value="0" ${window._isAdmin ? '' : 'readonly style="opacity:.55;cursor:not-allowed"'}></td>`;
  tbody.appendChild(tr);
  ['kcal','prot','carbo','gord'].forEach(k=>{
  _$_(`${k}-${i}`).addEventListener('input',()=>{calcular();salvarDados()});
  });
  });
}
function atualizarSelectRefeicao(){
  const sel=_$_('select-refeicao');
  sel.innerHTML='';
  refeicoes.forEach((r,i)=>{
  const o=document.createElement('option');
  o.value=i; o.textContent=r.nome;
  sel.appendChild(o);
  });
}
function buscarLocal(q){
  const termos=norm(q).split(/\s+/).filter(Boolean);
  if(!termos.length) return [];
  return DB
  .map(a=>{
  const n=norm(a.nome);
  let score=termos.reduce((s,t)=>n.includes(t)?s+t.length:s,0);
  return {score,a};
  })
  .filter(x=>x.score>0)
  .sort((a,b)=>b.score-a.score)
  .slice(0,8)
  .map(x=>({...x.a,fonte:'local'}));
}
const apiCache=new Map();
let abortCtrl=null;
async function buscarOFF(q){
  const key=norm(q);
  if(apiCache.has(key)) return apiCache.get(key);
  if(abortCtrl) abortCtrl.abort();
  abortCtrl=new AbortController();
  const tid=setTimeout(()=>abortCtrl.abort(),9000);
  try{
  const url=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(q)}&search_simple=1&action=process&json=1&page_size=10&fields=product_name,brands,nutriments,lang`;
  const r=await fetch(url,{signal:abortCtrl.signal});
  clearTimeout(tid);
  const d=await r.json();
  const lista=((d&&d.products)||[]).map(p=>{
  const nu=p.nutriments||{};
  let kcal=parseFloat(nu['energy-kcal_100g']||nu['energy-kcal']||0);
  if(!kcal&&nu['energy_100g']){
    kcal=(nu['energy_unit']||'kJ')==='kcal'?nu['energy_100g']:nu['energy_100g']/4.184;
  }
  const prot=parseFloat(nu['proteins_100g'])||0;
  const carbo=parseFloat(nu['carbohydrates_100g'])||0;
  const gord=parseFloat(nu['fat_100g'])||0;
  if(!kcal&&!prot) return null;
  const nome=((p.product_name||'Produto').trim()+(p.brands?(' — '+p.brands.split(',')[0].trim()):'')).trim();
  return {nome,kcal:Math.round(kcal),prot,carbo,gord,fonte:'web'};
  }).filter(Boolean).slice(0,6);
  apiCache.set(key,lista);
  return lista;
  }catch(e){
  clearTimeout(tid);
  if(e.name==='AbortError') return null;
  return [];
  }
}
const inpIng=_$_('input-ingredient');
const inpQtd=_$_('input-quantity');
const boxSug=_$_('sugestoes');
const prevDiv=_$_('preview-porcao');
const statusEl=_$_('search-status');
inpIng.addEventListener('input',()=>{
  selecionado=null; prevDiv.style.display='none';
  const q=inpIng.value.trim();
  if(q.length<2){boxSug.innerHTML='';statusEl.innerHTML='';return}
  const res=buscarLocal(q);
  renderSug(res);
  statusEl.innerHTML=res.length
  ?`<span style="color:#4a9">✓ ${res.length} resultado(s) local(is)</span> — ou clique [WEB] para buscar na internet`
  :`<span style="color:#888">Sem resultados locais.</span> Clique em [WEB] para buscar na internet`;
});
inpQtd.addEventListener('input',mostrarPreview);
_$_('btn-buscar-web').addEventListener('click',async()=>{
  const q=inpIng.value.trim();
  if(q.length<2){statusEl.innerHTML='<span style="color:#f88">Digite ao menos 2 caracteres.</span>';return}
  statusEl.innerHTML='Buscando no Open Food Facts… <span class="spinner"></span>';
  const res=await buscarOFF(q);
  if(res===null){statusEl.innerHTML='<span style="color:#f88">! Sem resposta (timeout). Tente novamente.</span>';return}
  if(!res.length){statusEl.innerHTML='<span style="color:#f88">Nenhum resultado encontrado na internet.</span>';return}
  const locais=buscarLocal(q);
  const nLocais=new Set(locais.map(a=>norm(a.nome)));
  const novos=res.filter(a=>!nLocais.has(norm(a.nome)));
  const tudo=[...locais,...novos].slice(0,10);
  renderSug(tudo);
  statusEl.innerHTML=`<span style="color:#4a9">✓ ${locais.length} locais</span> + <span style="color:#aaa">${novos.length} da internet</span>`;
});
function renderSug(itens){
  if(!itens.length){boxSug.innerHTML='';return}
  const lista=document.createElement('div'); lista.className='sugestoes-lista';
  itens.forEach(item=>{
  const el=document.createElement('div'); el.className='sug-item';
  const left=document.createElement('div');
  left.style.cssText='display:flex;gap:5px;align-items:center;min-width:0;overflow:hidden';
  const badge=document.createElement('span');
  badge.className='sug-badge '+(item.fonte==='local'?'badge-local':'badge-web');
  badge.textContent=item.fonte==='local'?'BR':'WEB';
  const nome=document.createElement('span'); nome.className='sug-nome';
  nome.textContent=item.nome; nome.style.overflow='hidden'; nome.style.textOverflow='ellipsis'; nome.style.whiteSpace='nowrap';
  left.appendChild(badge); left.appendChild(nome);
  const right=document.createElement('div'); right.className='sug-macros';
  right.textContent=`kcal ${item.kcal.toFixed?item.kcal.toFixed(0):item.kcal} | P ${(item.prot||0).toFixed(1)} | C ${(item.carbo||0).toFixed(1)} | G ${(item.gord||0).toFixed(1)} /100g`;
  el.appendChild(left); el.appendChild(right);
  el.addEventListener('click',()=>{
  inpIng.value=item.nome;
  selecionado={nome:item.nome,per100:{kcal:item.kcal,prot:item.prot,carbo:item.carbo,gord:item.gord}};
  boxSug.innerHTML=''; statusEl.innerHTML=''; mostrarPreview();
  });
  lista.appendChild(el);
  });
  boxSug.innerHTML=''; boxSug.appendChild(lista);
}
function mostrarPreview(){
  if(!selecionado){prevDiv.style.display='none';return}
  const q=tv(inpQtd.value);
  if(!q||q<=0){prevDiv.style.display='none';return}
  const p=selecionado.per100,f=q/100;
  prevDiv.style.display='block';
  prevDiv.innerHTML=`<b>${selecionado.nome}</b> — ${q}g/ml<br>
  <span class="muted">Por 100g → kcal ${(p.kcal||0).toFixed(0)} | P ${(p.prot||0).toFixed(1)} | C ${(p.carbo||0).toFixed(1)} | G ${(p.gord||0).toFixed(1)}</span><br>
  kcal <b>${n2(p.kcal*f)}</b> | P <b>${n2(p.prot*f)}g</b> | C <b>${n2(p.carbo*f)}g</b> | G <b>${n2(p.gord*f)}g</b>`;
}
function adicionarIngrediente(){
  const nome=(inpIng.value||'').trim();
  const qtd=tv(inpQtd.value);
  if(!nome||!qtd||qtd<=0) return;
  ingredientesTemp.push({nome,qtd,per100:selecionado?selecionado.per100:null});
  renderLista();
  inpIng.value=''; inpQtd.value=''; selecionado=null;
  boxSug.innerHTML=''; statusEl.innerHTML=''; prevDiv.style.display='none';
}
function finalizarRefeicao(){
  const idx=parseInt(_$_('select-refeicao').value);
  ingredientesTemp.forEach(ing=>{
  let p=ing.per100;
  if(!p){
  const loc=buscarLocal(ing.nome);
  p=loc.length?{kcal:loc[0].kcal,prot:loc[0].prot,carbo:loc[0].carbo,gord:loc[0].gord}:{kcal:0,prot:0,carbo:0,gord:0};
  }
  const f=ing.qtd/100;
  const m={nome:ing.nome,qtd:ing.qtd,kcal:(p.kcal||0)*f,prot:(p.prot||0)*f,carbo:(p.carbo||0)*f,gord:(p.gord||0)*f};
  userRefeicoes[idx].push(m);
  ['kcal','prot','carbo','gord'].forEach(k=>{
  const el=_$_(`${k}-${idx}`);
  if(el) el.value=n2(tv(el.value)+m[k]);
  });
  });
  ingredientesTemp=[]; renderLista(); fecharPopup('popup-add'); calcular();
  // Registrar hora da 1ª refeição do dia
  if (window._firstMealHour === null || window._firstMealHour === undefined) {
    const _now = new Date();
    window._firstMealHour = _now.getHours() + _now.getMinutes() / 60;
  }
  salvarDados();
}
function renderLista(){
  const div=_$_('ingredient-list');
  if(!ingredientesTemp.length){div.innerHTML='<span>Nenhum ingrediente adicionado.</span>';return}
  div.innerHTML='';
  let tot={kcal:0,prot:0,carbo:0,gord:0};
  ingredientesTemp.forEach((i,idx)=>{
  const add=i.per100?{kcal:(i.per100.kcal||0)/100*i.qtd,prot:(i.per100.prot||0)/100*i.qtd,carbo:(i.per100.carbo||0)/100*i.qtd,gord:(i.per100.gord||0)/100*i.qtd}:{kcal:0,prot:0,carbo:0,gord:0};
  tot.kcal+=add.kcal; tot.prot+=add.prot; tot.carbo+=add.carbo; tot.gord+=add.gord;
  const l=document.createElement('div');
  l.style.cssText='display:flex;justify-content:space-between;gap:8px;margin-bottom:5px;align-items:center;padding:4px 6px;background:#1a1a28;border-radius:4px';
  const sp=document.createElement('span'); sp.style.cursor='default';
  sp.textContent=`${i.nome} — ${i.qtd}g`;
  if(i.per100){
  sp.addEventListener('mouseenter',e=>{
    htip.innerHTML=`<b>${i.nome}</b><br>${i.qtd}g → kcal <b>${n2(add.kcal)}</b> | P <b>${n2(add.prot)}g</b> | C <b>${n2(add.carbo)}g</b> | G <b>${n2(add.gord)}g</b>`;
    htip.style.left=(e.clientX+12)+'px'; htip.style.top=(e.clientY+12)+'px'; htip.style.display='block';
  });
  sp.addEventListener('mousemove',e=>{htip.style.left=(e.clientX+12)+'px'; htip.style.top=(e.clientY+12)+'px'});
  sp.addEventListener('mouseleave',()=>htip.style.display='none');
  }
  const btn=document.createElement('button'); btn.textContent='✕';
  btn.style.cssText='padding:2px 7px;background:#701313;margin:0';
  btn.onclick=()=>{ingredientesTemp.splice(idx,1);renderLista()};
  l.appendChild(sp); l.appendChild(btn); div.appendChild(l);
  });
  const t=document.createElement('div');
  t.style.cssText='margin-top:8px;padding:6px 8px;background:#192a19;border-radius:4px;font-size:13px';
  t.innerHTML=`<b>Total da lista:</b> kcal <b>${n2(tot.kcal)}</b> | P <b>${n2(tot.prot)}g</b> | C <b>${n2(tot.carbo)}g</b> | G <b>${n2(tot.gord)}g</b>`;
  div.appendChild(t);
}
function visualizarRefeicoes(){
  const div=_$_('view-refeicoes');
  const det=_$_('detalhe-item');
  det.style.display='none'; div.innerHTML='';
  div.style.cssText='max-height:60vh;overflow-y:auto;overflow-x:hidden';
  refeicoes.forEach((r,idx)=>{
  const colapsado=refColapsadas.has(idx);
  const tot={kcal:0,prot:0,carbo:0,gord:0};
  userRefeicoes[idx].forEach(x=>{tot.kcal+=x.kcal;tot.prot+=x.prot;tot.carbo+=x.carbo;tot.gord+=x.gord});
  const nAlim=userRefeicoes[idx].length;
  const bloco=document.createElement('div');
  bloco.style.cssText='border-top:1px solid #333;padding:0;margin:0';
  const titRow=document.createElement('div');
  titRow.style.cssText='display:flex;align-items:center;cursor:pointer;padding:8px 6px;gap:6px;user-select:none;';
  titRow.title='Clique para '+(colapsado?'expandir':'minimizar');
  const arrow=document.createElement('span');
  arrow.textContent=colapsado?'▶':'▼';
  arrow.style.cssText='font-size:11px;color:#888;flex-shrink:0;width:14px';
  const nomeEl=document.createElement('span');
  nomeEl.style.cssText='font-weight:bold;font-size:14px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:55%';
  nomeEl.textContent=r.nome;
  nomeEl.title=r.nome;
  const macroEl=document.createElement('span');
  macroEl.style.cssText='font-size:11px;color:#aaa;flex-shrink:0;text-align:right';
  macroEl.textContent=nAlim
  ? `${n2(tot.kcal)}kcal · P${n2(tot.prot)} · C${n2(tot.carbo)} · G${n2(tot.gord)}`
  : '— vazio';
  titRow.appendChild(arrow);
  titRow.appendChild(nomeEl);
  titRow.appendChild(macroEl);
  titRow.addEventListener('click',()=>{
  if(refColapsadas.has(idx)) refColapsadas.delete(idx);
  else refColapsadas.add(idx);
  visualizarRefeicoes();
  });
  bloco.appendChild(titRow);
  if(!colapsado){
  const corpo=document.createElement('div');
  corpo.style.cssText='padding:0 8px 10px 22px';
  if(!nAlim){
    const p=document.createElement('p');
    p.className='muted'; p.style.cssText='font-size:13px;margin:4px 0';
    p.textContent='Nenhum alimento registrado.'; corpo.appendChild(p);
  } else {
    userRefeicoes[idx].forEach((ing,iIdx)=>{
      const l=document.createElement('div');
      l.style.cssText='display:flex;align-items:center;gap:6px;margin-bottom:4px;padding:4px 6px;background:#1a1a2a;border-radius:4px;overflow:hidden';
      const sp=document.createElement('span');
      sp.style.cssText='font-size:13px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;text-decoration:underline dotted';
      sp.textContent=`${ing.nome} (${ing.qtd}g)`;
      sp.title=`kcal: ${n2(ing.kcal)} | P: ${n2(ing.prot)}g | C: ${n2(ing.carbo)}g | G: ${n2(ing.gord)}g`;
      sp.addEventListener('click',()=>{
        if(modoExcluir) {
          const key = JSON.stringify({idx,iIdx});
          const existingIdx = selecionadosParaExcluir.findIndex(s=>s.idx===idx&&s.iIdx===iIdx);
          if(existingIdx >= 0) {
            selecionadosParaExcluir.splice(existingIdx,1);
            l.style.background='#1a1a2a';
            cb.checked = false;
          } else {
            selecionadosParaExcluir.push({idx,iIdx});
            l.style.background='rgba(231,76,60,.18)';
            cb.checked = true;
          }
          _atualizarContadorExcluir();
          return;
        }
        det.style.display='block';
        det.innerHTML=`<b>${ing.nome}</b> — ${ing.qtd}g<br>kcal <b>${n2(ing.kcal)}</b> | P <b>${n2(ing.prot)}g</b> | C <b>${n2(ing.carbo)}g</b> | G <b>${n2(ing.gord)}g</b>`;
      });
      l.appendChild(sp);
      if(modoExcluir){
        const cb=document.createElement('input');
        cb.type='checkbox';
        cb.style.cssText='flex-shrink:0;cursor:pointer;width:16px;height:16px;accent-color:#e74c3c';
        const alreadySel = selecionadosParaExcluir.some(s=>s.idx===idx&&s.iIdx===iIdx);
        cb.checked = alreadySel;
        if(alreadySel) l.style.background='rgba(231,76,60,.18)';
        cb.addEventListener('click',(e)=>{
          e.stopPropagation();
          const existingIdx = selecionadosParaExcluir.findIndex(s=>s.idx===idx&&s.iIdx===iIdx);
          if(existingIdx >= 0) {
            selecionadosParaExcluir.splice(existingIdx,1);
            l.style.background='#1a1a2a';
          } else {
            selecionadosParaExcluir.push({idx,iIdx});
            l.style.background='rgba(231,76,60,.18)';
          }
          _atualizarContadorExcluir();
        });
        l.appendChild(cb);
      }
      corpo.appendChild(l);
    });
  }
  bloco.appendChild(corpo);
  }
  div.appendChild(bloco);
  });
  abrirPopup('popup-view');
  _$_('aviso-apagar').style.display='none';
}
let selecionadosParaExcluir = [];
function toggleModoExcluir(){
  modoExcluir = true;
  selecionadosParaExcluir = [];
  const normal = _$_('view-btns-normal');
  const excluir = _$_('view-btns-excluir');
  if(normal) normal.style.display = 'none';
  if(excluir) excluir.style.display = 'flex';
  visualizarRefeicoes();
}
function cancelarModoExcluir(){
  modoExcluir = false;
  selecionadosParaExcluir = [];
  const normal = _$_('view-btns-normal');
  const excluir = _$_('view-btns-excluir');
  if(normal) normal.style.display = 'flex';
  if(excluir) excluir.style.display = 'none';
  visualizarRefeicoes();
}
function confirmarExcluirSelecionados(){
  if(selecionadosParaExcluir.length === 0) { cancelarModoExcluir(); return; }
  selecionadosParaExcluir.sort((a,b) => a.idx !== b.idx ? b.idx - a.idx : b.iIdx - a.iIdx);
  selecionadosParaExcluir.forEach(({idx, iIdx}) => {
  if(userRefeicoes[idx] && userRefeicoes[idx][iIdx] !== undefined) {
  userRefeicoes[idx].splice(iIdx, 1);
  }
  });
  refeicoes.forEach((_,i)=>{
  const t={kcal:0,prot:0,carbo:0,gord:0};
  userRefeicoes[i].forEach(x=>{t.kcal+=x.kcal;t.prot+=x.prot;t.carbo+=x.carbo;t.gord+=x.gord});
  ['kcal','prot','carbo','gord'].forEach(k=>{const el=_$_(k+'-'+i);if(el)el.value=n2(t[k]);});
  });
  salvarDados(); calcular();
  cancelarModoExcluir();
  showToast(`${selecionadosParaExcluir.length} item(ns) excluído(s).`, 'amber', 2500);
}
function _atualizarContadorExcluir(){
  const el = _$_('excluir-count-label');
  if(el) el.textContent = selecionadosParaExcluir.length + ' selecionado(s)';
}
function toggleTotais(){
  totaisVisiveis=!totaisVisiveis;
  if(totaisVisiveis) calcular();
  _$_('totais').style.display=totaisVisiveis?'block':'none';
  _$_('titulo-totais').style.display=totaisVisiveis?'block':'none';
  const btnT=_$_('btn-totais');
  const svgEl=btnT.querySelector('img');
  btnT.innerHTML='';
  if(svgEl){btnT.appendChild(svgEl);btnT.appendChild(document.createTextNode(' '));}
  btnT.appendChild(document.createTextNode(totaisVisiveis?'Esconder Totais':'Totais'));
}
function toggleTabela(){
  tabelaVisivel=!tabelaVisivel;
  if(tabelaVisivel) gerarTabela();
  _$_('tabela-ajustada').style.display=tabelaVisivel?'block':'none';
  _$_('titulo-tabela').style.display=tabelaVisivel?'block':'none';
  const btnTb=_$_('btn-tabela');
  const svgEl2=btnTb.querySelector('img');
  btnTb.innerHTML='';
  if(svgEl2){btnTb.appendChild(svgEl2);btnTb.appendChild(document.createTextNode(' '));}
  btnTb.appendChild(document.createTextNode(tabelaVisivel?'Esconder Tabela':'Tabela'));
}
function editarMetasDeGerenciar(){
  fecharPopup('popup-gerenciar');
  editarMetas();
}
function calcular(){
  let tm={kcal:0,prot:0,carbo:0,gord:0},tc={kcal:0,prot:0,carbo:0,gord:0};
  refeicoes.forEach((_,i)=>{
  ['kcal','prot','carbo','gord'].forEach(k=>{
  const me=_$_('meta-'+k+'-'+i), ce=_$_(k+'-'+i);
  if(me) tm[k]+=tv(me.value);
  if(ce) tc[k]+=tv(ce.value);
  });
  });
  _$_('totais').innerHTML=
  `Meta: <b>${n2(tm.kcal)} kcal</b> | ${n2(tm.prot)}g prot | ${n2(tm.carbo)}g carbo | ${n2(tm.gord)}g gord<br>
 Consumido: <b>${n2(tc.kcal)} kcal</b> | ${n2(tc.prot)}g prot | ${n2(tc.carbo)}g carbo | ${n2(tc.gord)}g gord<br>
 Faltando: <b>${n2(tm.kcal-tc.kcal)} kcal</b> | ${n2(tm.prot-tc.prot)}g prot | ${n2(tm.carbo-tc.carbo)}g carbo | ${n2(tm.gord-tc.gord)}g gord`;
  if(tabelaVisivel) gerarTabela();
  verificarMetasMacros(tm, tc);
}
function gerarTabela(){
  let h=`<table>
  <tr>
  <th>Refeição</th>
  <th>Meta kcal</th><th>Falta kcal</th><th>Cons kcal</th>
  <th>Meta Prot</th><th>Falta Prot</th><th>Cons Prot</th>
  <th>Meta Carbo</th><th>Falta Carbo</th><th>Cons Carbo</th>
  <th>Meta Gord</th><th>Falta Gord</th><th>Cons Gord</th>
  </tr>`;
  refeicoes.forEach((r,i)=>{
  const mk=tv(_$_('meta-kcal-'+i)?.value),mp=tv(_$_('meta-prot-'+i)?.value);
  const mc=tv(_$_('meta-carbo-'+i)?.value),mg=tv(_$_('meta-gord-'+i)?.value);
  const ck=tv(_$_('kcal-'+i)?.value),cp=tv(_$_('prot-'+i)?.value);
  const cc=tv(_$_('carbo-'+i)?.value),cg=tv(_$_('gord-'+i)?.value);
  const fk=mk-ck,fp=mp-cp,fc=mc-cc,fg=mg-cg;
  const col=(v)=>v<0?'color:#f66;font-weight:700':v===0?'color:#6f6;font-weight:700':'color:#fa3';
  h+=`<tr>
  <td style="text-align:left;padding-left:8px;font-weight:700">${r.nome}</td>
  <td>${n2(mk)}</td><td style="${col(fk)}">${n2(fk)}</td><td>${n2(ck)}</td>
  <td>${n2(mp)}</td><td style="${col(fp)}">${n2(fp)}</td><td>${n2(cp)}</td>
  <td>${n2(mc)}</td><td style="${col(fc)}">${n2(fc)}</td><td>${n2(cc)}</td>
  <td>${n2(mg)}</td><td style="${col(fg)}">${n2(fg)}</td><td>${n2(cg)}</td>
  </tr>`;
  });
  _$_('tabela-ajustada').innerHTML=h+'</table>';
}
function editarMetas(){
  editando=!editando;
  document.querySelectorAll('.meta').forEach(el=>{
  el.classList.toggle('editando',editando);
  editando?el.removeAttribute('readonly'):el.setAttribute('readonly','readonly');
  el.style.pointerEvents=editando?'auto':'none';
  });
  const mainSaveBtn = _$_('btn-salvar-dados');
  if(editando){
  // Highlight the main save button to indicate save metas mode
  mainSaveBtn.dataset.metasMode = '1';
  mainSaveBtn.classList.add('btn-primary');
  mainSaveBtn.classList.remove('btn-green');
  mainSaveBtn.title = 'Salvar metas editadas';
  } else {
  mainSaveBtn.dataset.metasMode = '';
  mainSaveBtn.classList.remove('btn-primary');
  mainSaveBtn.classList.add('btn-green');
  mainSaveBtn.title = '';
  salvarDados();
  showToast('Novas metas salvas!', 'green', 2500);
  }
}
function exportar(){
  const pn=(n,l)=>n.length>l?n.slice(0,l-3)+'...':n.padEnd(l);
  const pv=v=>(v<0?v.toFixed(1):(' '+v.toFixed(1))).padStart(8);
  let c="=== CALCULADORA DE MACROS — EXPORTAÇÃO ===\n\n";
  c+=pn("Refeição",26)+"| KcalM  | KcalC  | KcalR  |  ProtM  |  ProtC  |  ProtR  | CarboM | CarboC | CarboR | GordM  | GordC  | GordR\n";
  refeicoes.forEach((r,i)=>{
  const mk=tv(_$_('meta-kcal-'+i)?.value),mp=tv(_$_('meta-prot-'+i)?.value);
  const mc=tv(_$_('meta-carbo-'+i)?.value),mg=tv(_$_('meta-gord-'+i)?.value);
  const ck=tv(_$_('kcal-'+i)?.value),cp=tv(_$_('prot-'+i)?.value);
  const cc=tv(_$_('carbo-'+i)?.value),cg=tv(_$_('gord-'+i)?.value);
  c+=pn(r.nome,26)+[mk,ck,mk-ck,mp,cp,mp-cp,mc,cc,mc-cc,mg,cg,mg-cg].map(pv).join('|')+'\n';
  });
  c+="\n=== ALIMENTOS REGISTRADOS ===\n\n";
  userRefeicoes.forEach((r,i)=>{
  c+=refeicoes[i].nome+':\n';
  if(!r.length) c+='  (vazio)\n';
  else r.forEach(x=>c+=`  ${x.nome} (${x.qtd}g) → kcal:${n2(x.kcal)}, P:${n2(x.prot)}, C:${n2(x.carbo)}, G:${n2(x.gord)}\n`);
  c+='\n';
  });
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([c],{type:'text/plain;charset=utf-8'}));
  a.download=`macros_${new Date().toLocaleDateString('pt-BR').replace(/\//g,'-')}.txt`; a.click();
}
function abrirReset(){
  _$_('reset-aviso').style.display  = 'none';
  _$_('reset-opcoes').style.display = 'flex';
  resetTipo = null;
  abrirModal('modal-reset');
}
function abrirResetPerfil() {
  abrirModal('modal-reset-perfil');
}
function confirmarResetPerfil() {
  ['input-peso','input-meta-peso','input-altura','input-idade'].forEach(id => {
  const el = _$_(id);
  if (el) el.value = '';
  });
  _$_('input-sexo').value     = 'm';
  _$_('input-atividade').value = '1.2';
  document.querySelectorAll('.obj-card,.goal-btn').forEach(el => el.classList.remove('sel'));
  _$_('submenu-lutas').style.display = 'none';
  _$_('luta-desc').innerHTML = '';
  _$_('obj-desc').style.display = 'none';
  objAtual = null; goalAtual = null; lutaAtual = null;
  _$_('resultado-imc').innerHTML = '';
  macrosDiarios = { kcal:0, prot:0, carbo:0, gord:0 };
  localStorage.removeItem('perfil');
  fecharModal('modal-reset-perfil');
}
let resetTipo = null;
const RESET_MSGS = {
  consumidos: '[!] Essa ação é irreversível e apaga todos os alimentos registrados do dia. Deseja excluir?',
  metas:      '[!] Essa ação é irreversível e apaga todas as metas registradas. Deseja excluir?',
  tudo:       '[!] Essa ação é irreversível e apaga todos os alimentos e todas as metas. Deseja excluir?',
};
function pedirConfirmacaoReset(tipo) {
  resetTipo = tipo;
  _$_('reset-aviso-txt').textContent = RESET_MSGS[tipo];
  _$_('reset-aviso').style.display  = 'block';
  _$_('reset-opcoes').style.display = 'none';
}
function cancelarConfirmacaoReset() {
  _$_('reset-aviso').style.display  = 'none';
  _$_('reset-opcoes').style.display = 'flex';
  resetTipo = null;
}
function confirmarReset() {
  const keys = ['kcal','prot','carbo','gord'];
  if (resetTipo === 'consumidos' || resetTipo === 'tudo') {
  userRefeicoes = refeicoes.map(() => []);
  refeicoes.forEach((_, i) =>
  keys.forEach(k => { const el = _$_(`${k}-${i}`); if (el) el.value = 0; })
  );
  }
  if (resetTipo === 'metas' || resetTipo === 'tudo') {
  refeicoes.forEach((_, i) =>
  keys.forEach(k => { const el = _$_(`meta-${k}-${i}`); if (el) el.value = 0; })
  );
  }
  salvarDados();
  calcular();
  fecharModal('modal-reset');
  _$_('reset-aviso').style.display  = 'none';
  _$_('reset-opcoes').style.display = 'flex';
  resetTipo = null;
}
function apagarTodosConsumidos() {
  _$_('aviso-apagar').style.display = 'block';
}
function cancelarApagarConsumidos() {
  _$_('aviso-apagar').style.display = 'none';
}
function confirmarApagarConsumidos() {
  userRefeicoes = refeicoes.map(() => []);
  refeicoes.forEach((_, i) => {
  ['kcal','prot','carbo','gord'].forEach(k => {
  const el = _$_(`${k}-${i}`);
  if (el) el.value = 0;
  });
  });
  _$_('aviso-apagar').style.display = 'none';
  fecharPopup('popup-view');
  calcular();
  salvarDados();
}
let _notifAgua = false;
let _notifMacros = {kcal:false, prot:false, carbo:false, gord:false, all:false};
let _xpFoodCompleted = false;
let _xpFoodXPGiven = false;
let _xpMacrosDone = {kcal:false, prot:false, carbo:false, gord:false};
let _xpWaterCompleted = false;
let _xpWaterXPGiven = false;
let _xpFirstCheckDone = false;
function showToast(msg, tipo='green', duracao=4000) {
 let container=_$_('toast-container');if(!container){container=document.createElement('div');container.id='toast-container';document.body.appendChild(container);}
  const el = document.createElement('div');
  el.className = 'toast-msg ' + tipo;
  el.innerHTML = msg;
  el.style.cursor='pointer';
  const dismiss=()=>{if(!el.classList.contains('exit')){el.classList.add('exit');el.addEventListener('animationend',()=>el.remove(),{once:true});}};
  el.addEventListener('click',dismiss);
  container.appendChild(el);
  setTimeout(dismiss, duracao);
}
function verificarMetaAgua(ml, meta) {
  const bar = _$_('agua-bar');
  if(ml >= meta && meta > 0) {
  bar.classList.add('completa');
  if(!_notifAgua) {
  _notifAgua = true;
  setTimeout(()=>{
    showToast(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="13" height="13" fill="none" style="vertical-align:middle;margin-right:4px"><rect x="7" y="1" width="2" height="2" fill="#42a5f5"/><rect x="5" y="3" width="6" height="2" fill="#42a5f5"/><rect x="3" y="5" width="10" height="2" fill="#42a5f5"/><rect x="2" y="7" width="12" height="4" fill="#42a5f5"/><rect x="3" y="11" width="10" height="2" fill="#42a5f5"/><rect x="5" y="13" width="6" height="1" fill="#42a5f5"/><rect x="4" y="7" width="2" height="2" fill="#90caf9"/></svg> <b>META DE ÁGUA ATINGIDA!</b><br>' +
      'Parabéns, sua meta de água diária foi concluída!<br>' +
      meta + ' ml bebidos hoje! Meta atingida!',
      'blue', 5000
    );
  }, 400);
  if(typeof ganharXP === 'function' && !_xpWaterXPGiven) {
    _xpWaterXPGiven = true;
    _xpWaterCompleted = true;
    setTimeout(()=>ganharXP(5, 'ÁGUA!'), 600);
  }
  }
  } else {
  bar.classList.remove('completa');
  if(ml < meta * 0.9) {
  _notifAgua = false;
  if(_xpWaterXPGiven && typeof perderXP === 'function') {
    _xpWaterXPGiven = false;
    _xpWaterCompleted = false;
    showToast('Meta de água perdida! -5 XP descontados.', 'blue', 3500);
    setTimeout(()=>perderXP(5, 'ÁGUA'), 300);
  }
  }
  }
}
const MACRO_LABELS = {
  kcal: {nome:'Calorias',  unit:'kcal', cor:'amber'},
  prot: {nome:'Proteínas', unit:'g',    cor:'green'},
  carbo:{nome:'Carboidratos',unit:'g',  cor:'blue'},
  gord: {nome:'Gorduras',  unit:'g',    cor:'red'},
};
function verificarMetasMacros(tm, tc) {
  const macros = ['kcal','prot','carbo','gord'];
  if(!_xpFirstCheckDone) {
  _xpFirstCheckDone = true;
  let allAlreadyDone = true;
  const algumMeta2 = macros.some(k => tm[k] > 0);
  macros.forEach(k => {
  if(tm[k] <= 0) { allAlreadyDone = false; return; }
  if(tc[k] >= tm[k] * 0.99) {
    _xpMacrosDone[k] = true;
    _xpMacrosDone['_gave_'+k] = false;
    _notifMacros[k] = true;
  } else { allAlreadyDone = false; }
  });
  if(allAlreadyDone && algumMeta2) {
  _xpFoodCompleted = true;
  _xpFoodXPGiven   = false;
  _notifMacros.all = true;
  }
  return;
  }
  let allDone = true;
  let novas   = [];
  macros.forEach(k => {
  if(tm[k] <= 0) { allDone = false; return; }
  const lb       = MACRO_LABELS[k];
  const concluido = tc[k] >= tm[k] * 0.99;
  if(concluido && !_notifMacros[k]) {
  _notifMacros[k] = true;
  let faltam = macros
    .filter(j => j!==k && tm[j]>0 && tc[j] < tm[j]*0.99)
    .map(j => `${MACRO_LABELS[j].nome}: ${n2(Math.max(0,tm[j]-tc[j]))}${MACRO_LABELS[j].unit}`);
  let msg = `${k==='kcal'?'◆':k==='prot'?'◈':k==='carbo'?'△':'▽'} <b>META DE ${lb.nome.toUpperCase()} CONCLUÍDA!</b><br>${n2(tc[k])}${lb.unit} de ${n2(tm[k])}${lb.unit}`;
  if(faltam.length) msg += '<br><span style="font-size:.85em;opacity:.75">Faltam ainda: ' + faltam.join(' | ') + '</span>';
  else msg += '<br><span style="color:#6ee7b7">Todos os macros atingidos! ◆◆◆</span>';
  novas.push({msg, cor: lb.cor});
  if(!_xpMacrosDone['_gave_'+k]) {
    _xpMacrosDone[k] = true;
    _xpMacrosDone['_gave_'+k] = true;
    setTimeout(()=>ganharXP(1, lb.nome), novas.length*600+200);
  }
  }
  if(!concluido) {
  allDone = false;
  if(tc[k] < tm[k] * 0.80) {
    _notifMacros[k] = false;
    if(_xpMacrosDone[k] && _xpMacrosDone['_gave_'+k]) {
      _xpMacrosDone[k] = false;
      _xpMacrosDone['_gave_'+k] = false;
      setTimeout(()=>perderXP(1, lb.nome), 200);
    }
  }
  }
  });
  novas.forEach((t,i) => setTimeout(()=>showToast(t.msg, t.cor, 5500), i*600));
  if(allDone && !_notifMacros.all) {
  const algumMeta = macros.some(k=>tm[k]>0);
  if(algumMeta) {
  _notifMacros.all = true;
  setTimeout(()=>abrirCelebracao(), novas.length*600+800);
  if(!_xpFoodXPGiven) {
    _xpFoodXPGiven = true;
    _xpFoodCompleted = true;
    setTimeout(()=>ganharXP(10, 'DIA COMPLETO!'), novas.length*600+1400);
  }
  }
  }
  if(_notifMacros.all && _xpFoodXPGiven) {
  const anyBelow = macros.some(k => tm[k] > 0 && tc[k] < tm[k] * 0.80);
  if(anyBelow) {
  _notifMacros.all = false;
  _xpFoodXPGiven   = false;
  _xpFoodCompleted = false;
  let xpDeduct = 10;
  macros.forEach(k => {
    if(tm[k]>0 && tc[k] < tm[k]*0.80 && _xpMacrosDone['_gave_'+k]) {
      xpDeduct += 1;
      _xpMacrosDone[k] = false;
      _xpMacrosDone['_gave_'+k] = false;
    }
  });
  showToast(`<b>Metas perdidas!</b> -${xpDeduct} XP descontados.`, 'red', 4500);
  setTimeout(()=>perderXP(xpDeduct, 'METAS'), 400);
  }
  }
  macros.forEach(k => { if(tm[k]>0 && tc[k] < tm[k]*0.80) _notifMacros[k] = false; });
}
function abrirCelebracao() {
  const overlay = _$_('celebration-overlay');
  if(!overlay) return;
  const _cm = _$_('cel-msg');
  if(_cm) _cm.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="13" height="13" fill="none" style="vertical-align:middle;margin-right:3px"><rect x="3" y="1" width="10" height="7" fill="#f39c12"/><rect x="1" y="2" width="3" height="4" fill="#e67e22"/><rect x="12" y="2" width="3" height="4" fill="#e67e22"/><rect x="5" y="8" width="6" height="2" fill="#f39c12"/><rect x="4" y="10" width="8" height="2" fill="#fcd34d"/><rect x="3" y="12" width="10" height="2" fill="#e67e22"/><rect x="4" y="3" width="2" height="1" fill="#fcd34d"/></svg> TODOS OS MACROS DO DIA CONCLUÍDOS!<br><br>Você atingiu todas as suas metas nutricionais hoje.<br>Continue assim — resultados são construídos dia a dia!<br><br>';
  overlay.classList.add('show');
  const bgVid = _$_('cel-bg-video');
  if(bgVid) { bgVid.currentTime = 0; bgVid.play().catch(()=>{}); }
  gerarConfetti();
  const audioEl = _$_('victory-audio');
  if(audioEl) {
  audioEl.currentTime = 0;
  audioEl.play().catch(()=>{});
  }
}
function fecharCelebracao() {
  const overlay = _$_('celebration-overlay');
  overlay.classList.remove('show');
  const bgVid = _$_('cel-bg-video');
  if(bgVid) { bgVid.pause(); bgVid.currentTime = 0; }
  const audioEl = _$_('victory-audio');
  if(audioEl) { audioEl.pause(); audioEl.currentTime = 0; }
  overlay.querySelectorAll('.confetti-piece').forEach(el=>el.remove());
}
function gerarConfetti() {
  const overlay = _$_('celebration-overlay');
  if(!overlay) return;
  const colors = ['#e74c3c','#f39c12','#2ecc71','#3498db','#e67e22','#ffd54f','#1abc9c','#c0392b'];
  for(let i=0;i<60;i++){
  const el=document.createElement('div');
  el.className='confetti-piece';
  el.style.cssText=`
  left:${Math.random()*100}%;
  background:${colors[Math.floor(Math.random()*colors.length)]};
  animation-duration:${2+Math.random()*3}s;
  animation-delay:${Math.random()*2}s;
  width:${4+Math.random()*8}px;
  height:${4+Math.random()*8}px;
  transform:rotate(${Math.random()*360}deg);
  `;
  overlay.appendChild(el);
  }
}
function salvarPerfil(){
  const p={
  peso:_$_('input-peso').value,
  metaPeso:_$_('input-meta-peso').value,
  altura:_$_('input-altura').value,
  idade:_$_('input-idade').value,
  sexo:_$_('input-sexo').value,
  atividade:_$_('input-atividade').value,
  obj:objAtual, goal:goalAtual, luta:lutaAtual
  };
  localStorage.setItem('perfil',JSON.stringify(p));
}
function carregarPerfil(){
  const p=JSON.parse(localStorage.getItem('perfil')||'null');
  if(!p) return;
  if(p.peso) _$_('input-peso').value=p.peso;
  if(p.metaPeso) _$_('input-meta-peso').value=p.metaPeso;
  if(p.altura) _$_('input-altura').value=p.altura;
  if(p.idade) _$_('input-idade').value=p.idade;
  if(p.sexo) _$_('input-sexo').value=p.sexo;
  if(p.atividade) _$_('input-atividade').value=p.atividade;
  if(p.obj){
  objAtual=p.obj;
  const el=document.querySelector(`.obj-card[data-obj="${p.obj}"]`);
  if(el) el.classList.add('sel');
  if(p.obj==='lutas'){
  _$_('submenu-lutas').style.display='block';
  }
  }
  if(p.luta){
  lutaAtual=p.luta;
  const el=document.querySelector(`.luta-card[data-luta="${p.luta}"]`);
  if(el){ el.classList.add('sel'); const L=LUTAS[p.luta]; if(L) _$_('luta-desc').innerHTML=L.desc; }
  }
  if(p.goal){
  goalAtual=p.goal;
  const el=_$_('gbtn-'+p.goal);
  if(el) el.classList.add('sel');
  }
}
function salvarDados(){
  const metas=refeicoes.map((_,i)=>['kcal','prot','carbo','gord'].reduce((o,k)=>{
  const el=_$_(`meta-${k}-${i}`);
  o[k]=el?tv(el.value):0; return o;
  },{}));
  const cons=refeicoes.map((_,i)=>['kcal','prot','carbo','gord'].reduce((o,k)=>{
  const el=_$_(`${k}-${i}`);
  o[k]=el?tv(el.value):0; return o;
  },{}));
  localStorage.setItem('dadosMacros',JSON.stringify({
  refeicoes, userRefeicoes, metas, cons, agua:aguaML, aguaMeta,
  firstMealHour: window._firstMealHour !== undefined ? window._firstMealHour : null,
  lastResetDate: window._lastResetDate || null
  }));
}
function carregarDados(){
  const d=JSON.parse(localStorage.getItem('dadosMacros')||'null');
  if(!d) return;
  if(d.refeicoes&&d.refeicoes.length) refeicoes=d.refeicoes;
  if(d.userRefeicoes&&d.userRefeicoes.length) userRefeicoes=d.userRefeicoes;
  while(userRefeicoes.length<refeicoes.length) userRefeicoes.push([]);
  userRefeicoes=userRefeicoes.slice(0,refeicoes.length);
  montarTabela();
  atualizarSelectRefeicao();
  if(d.metas) d.metas.forEach((m,i)=>['kcal','prot','carbo','gord'].forEach(k=>{
  const el=_$_(`meta-${k}-${i}`); if(el) el.value=tv(m[k])||0;
  }));
  if(d.cons) d.cons.forEach((c,i)=>['kcal','prot','carbo','gord'].forEach(k=>{
  const el=_$_(`${k}-${i}`); if(el) el.value=n2(tv(c[k]));
  }));
  else {
  userRefeicoes.forEach((r,i)=>{
  const t={kcal:0,prot:0,carbo:0,gord:0};
  r.forEach(x=>{t.kcal+=x.kcal;t.prot+=x.prot;t.carbo+=x.carbo;t.gord+=x.gord});
  ['kcal','prot','carbo','gord'].forEach(k=>{const el=_$_(`${k}-${i}`);if(el)el.value=n2(t[k])});
  });
  }
  if(d.agua!==undefined) aguaML=d.agua;
  if(d.aguaMeta) aguaMeta=d.aguaMeta;
  // Restaurar controle de reset diário
  window._firstMealHour = (d.firstMealHour !== undefined && d.firstMealHour !== null) ? d.firstMealHour : null;
  window._lastResetDate = d.lastResetDate || null;
  // Verificar se deve resetar consumidos (novo "dia" baseado na hora da 1ª refeição)
  const _agora = new Date();
  const _hoje = _agora.toDateString();
  const _horaAtual = _agora.getHours() + _agora.getMinutes() / 60;
  const _resetHour = (window._firstMealHour !== null) ? window._firstMealHour : 0;
  if (window._lastResetDate && window._lastResetDate !== _hoje) {
    // É um dia diferente — só reseta se já passou da hora da 1ª refeição
    if (_horaAtual >= _resetHour || !window._firstMealHour) {
      userRefeicoes = refeicoes.map(() => []);
      refeicoes.forEach((_, i) => ['kcal','prot','carbo','gord'].forEach(k => { const el=_$_(`${k}-${i}`); if(el) el.value=0; }));
      window._lastResetDate = _hoje;
      window._firstMealHour = null; // resetar para nova 1ª refeição
    }
  } else if (!window._lastResetDate) {
    window._lastResetDate = _hoje;
  }
  atualizarAgua();
  calcular();
}
let distribuicaoTemp = [];
function distribuirMacros(){
  if(!macrosDiarios || !macrosDiarios.kcal || macrosDiarios.kcal===0){
  showToast('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="13" height="13" fill="none" style="vertical-align:middle;margin-right:3px"><rect x="7" y="2" width="2" height="8" fill="#fcd34d"/><rect x="3" y="10" width="10" height="2" fill="#fcd34d"/><rect x="1" y="12" width="14" height="2" fill="#fcd34d"/><rect x="3" y="10" width="2" height="2" fill="#fcd34d"/><rect x="7" y="10" width="2" height="2" fill="#0c0c0c"/></svg> Preencha o Perfil & Metas e clique em Calcular antes de distribuir macros.','red',4000);
  const sec=document.querySelector('#sec-imc');if(sec)sec.scrollIntoView({behavior:'smooth',block:'start'});
  return;
  }
  const totMeta = macrosDiarios;
  const n = refeicoes.length;
  function pesoRefeicao(nome, idx, total){
  const nm = norm(nome);
  const kw = [
  {k:['desjejum','jejum'],           w:0.6},
  {k:['manha','manhã'],              w:0.9},
  {k:['cafe','café'],                w:0.85},
  {k:['shake','liquido','líquido'],  w:0.75},
  {k:['lanche','snack'],             w:0.7},
  {k:['almoco','almoço'],            w:2.0},
  {k:['jantar','janta','dinner'],    w:1.6},
  {k:['pos','pós','treino','pre','pré','workout'], w:1.1},
  {k:['noite','noturno'],            w:0.8},
  {k:['ceia','late'],                w:0.5},
  ];
  for(const {k,w} of kw){
  if(k.some(x=>nm.includes(x))) return w;
  }
  const pos = total<=1 ? 0.5 : idx/(total-1);
  const bell = 0.5 + 1.5 * Math.exp(-Math.pow((pos-0.4)*3,2));
  return bell;
  }
  const pesos = refeicoes.map((r,i) => pesoRefeicao(r.nome, i, n));
  const somaP = pesos.reduce((a,b)=>a+b, 0);
  distribuicaoTemp = refeicoes.map((r,i) => {
  const frac = pesos[i] / somaP;
  return {
  nome:  r.nome,
  kcal:  Math.round(totMeta.kcal  * frac),
  prot:  Math.round(totMeta.prot  * frac * 10) / 10,
  carbo: Math.round(totMeta.carbo * frac * 10) / 10,
  gord:  Math.round(totMeta.gord  * frac * 10) / 10,
  };
  });
  const diffKcal = totMeta.kcal - distribuicaoTemp.reduce((s,d)=>s+d.kcal,0);
  if(diffKcal!==0){
  const maxIdx = distribuicaoTemp.reduce((mi,d,i,arr)=>d.kcal>arr[mi].kcal?i:mi,0);
  distribuicaoTemp[maxIdx].kcal += diffKcal;
  }
  let h = `<p style="font-size:12px;color:#8cf;margin-bottom:8px">
  Macros do perfil: <b>${totMeta.kcal} kcal | ${totMeta.prot}g prot | ${totMeta.carbo}g carbo | ${totMeta.gord}g gord</b>
  — distribuídos em <b>${n} refeição${n>1?'s':''}</b>.
  </p>`;
  h += `<table>
  <tr><th>Refeição</th><th>kcal</th><th>Prot (g)</th><th>Carbo (g)</th><th>Gord (g)</th><th>% dia</th></tr>`;
  distribuicaoTemp.forEach((d,i) => {
  const pct = Math.round(pesos[i]/somaP*100);
  h += `<tr>
  <td style="text-align:left;padding-left:8px">${d.nome}</td>
  <td>${d.kcal}</td><td>${d.prot}</td><td>${d.carbo}</td><td>${d.gord}</td>
  <td style="color:#aaa;font-size:11px">${pct}%</td>
  </tr>`;
  });
  const totD = distribuicaoTemp.reduce((s,d)=>({kcal:s.kcal+d.kcal,prot:s.prot+d.prot,carbo:s.carbo+d.carbo,gord:s.gord+d.gord}),{kcal:0,prot:0,carbo:0,gord:0});
  h += `<tr style="font-weight:bold;background:#1a2a1a">
  <td style="text-align:left;padding-left:8px">TOTAL</td>
  <td>${totD.kcal}</td><td>${Math.round(totD.prot*10)/10}</td>
  <td>${Math.round(totD.carbo*10)/10}</td><td>${Math.round(totD.gord*10)/10}</td>
  <td style="color:#aaa;font-size:11px">100%</td>
  </tr></table>`;
  _$_('distribuir-preview').innerHTML = h;
  _$_('distribuir-aviso').style.display='none';
  _$_('distribuir-botoes').style.display='flex';
  abrirPopup('popup-distribuir');
}
function temMetasPreenchidas() {
  return refeicoes.some((_, i) =>
  ['kcal','prot','carbo','gord'].some(k => {
  const el = _$_(`meta-${k}-${i}`);
  return el && tv(el.value) > 0;
  })
  );
}
function setMetaVal(i, k, v) {
  const el = _$_(`meta-${k}-${i}`);
  if (!el) return;
  const wasRO = el.hasAttribute('readonly');
  el.removeAttribute('readonly');
  el.value = v;
  if (wasRO) el.setAttribute('readonly','readonly');
}
function clicarDistribuicaoMantendo() {
  distribuicaoTemp.forEach((d, i) => {
  const temMeta = ['kcal','prot','carbo','gord'].some(k => {
  const el = _$_(`meta-${k}-${i}`);
  return el && tv(el.value) > 0;
  });
  if (!temMeta) {
  ['kcal','prot','carbo','gord'].forEach(k => setMetaVal(i, k, d[k]));
  }
  });
  fecharPopup('popup-distribuir');
  calcular();
  salvarDados();
}
function clicarDistribuicaoTotal() {
  if (temMetasPreenchidas()) {
  _$_('distribuir-aviso').style.display  = 'block';
  _$_('distribuir-botoes').style.display = 'none';
  } else {
  confirmarDistribuicaoTotal();
  }
}
function confirmarDistribuicaoTotal() {
  distribuicaoTemp.forEach((d, i) =>
  ['kcal','prot','carbo','gord'].forEach(k => setMetaVal(i, k, d[k]))
  );
  fecharPopup('popup-distribuir');
  calcular();
  salvarDados();
}
function cancelarAvisoDistribuicao() {
  _$_('distribuir-aviso').style.display  = 'none';
  _$_('distribuir-botoes').style.display = 'flex';
}
function aplicarDistribuicao() { confirmarDistribuicaoTotal(); }
montarTabela();
atualizarSelectRefeicao();
_$_('btn-add-refeicao').addEventListener('click', () => {
  abrirPopup('popup-add');
  renderLista();
});
_$_('btn-visualizar-refeicoes').addEventListener('click', visualizarRefeicoes);
_$_('btn-salvar-dados').addEventListener('click', () => {
  if(_$_('btn-salvar-dados').dataset.metasMode === '1') {
    editarMetas(); // calls salvarDados + shows "Novas metas salvas"
  } else {
    salvarDados(); salvarPerfil();
    showToast('Suas informações foram salvas!', 'green', 2500);
  }
});
_$_('btn-resetar').addEventListener('click', abrirReset);
window.onload = () => {
  carregarPerfil();
  carregarDados();
};

/* ============================================================ */

var _$_=id=>document.getElementById(id);
const FRASES = [
 ["Levante-se cedo, trabalhe duro, encontre petróleo.", "J. Paul Getty"],
];
let fraseIdx    = Math.floor(Math.random() * FRASES.length);
let pausado     = false;
let intervaloId = null;
let animId      = null;
const elBanner = _$_('banner-motivacional');
const elTrack  = _$_('banner-track');
const elFrase  = _$_('frase-atual');
const elAutor  = _$_('frase-autor');
function renderFrase(comFade) {
  const texto = FRASES[fraseIdx][0];
  const autor = FRASES[fraseIdx][1];
  cancelAnimationFrame(animId);
  elFrase.style.animation = 'none';
  elFrase.style.transition = 'none';
  if (comFade) {
  elFrase.style.opacity   = '0';
  elFrase.style.transform = 'translateY(8px)';
  }
  elAutor.textContent = '— ' + autor;
  elFrase.style.left  = '0';
  elFrase.style.width = 'max-content';
  elFrase.textContent = '"'  + texto + '"';
  requestAnimationFrame(() => requestAnimationFrame(() => {
  const textoW = elFrase.offsetWidth;
  const trackW = elTrack.clientWidth;
  if (!pausado && textoW > trackW + 2) {
  const pxPorSeg  = 55;
  const distTotal = textoW + trackW;
  const durMs     = (distTotal / pxPorSeg) * 1000;
  let   startTs   = null;
  let   posInicio = trackW;
  elFrase.style.transform = 'none';
  elFrase.style.opacity   = '1';
  function tick(ts) {
    if (!startTs) startTs = ts;
    if (pausado) { startTs = ts - (posInicio > 0 ? 0 : (ts - startTs)); animId = requestAnimationFrame(tick); return; }
    const elapsed  = ts - startTs;
    const progress = elapsed / durMs;
    if (progress >= 1) {
      startTs = null;
      posInicio = trackW;
    }
    const x = trackW - (elapsed / durMs) * distTotal;
    elFrase.style.left = x + 'px';
    animId = requestAnimationFrame(tick);
  }
  if (comFade) {
    elFrase.style.left = trackW + 'px';
    elFrase.style.transition = 'opacity 0.4s';
    setTimeout(() => {
      elFrase.style.opacity = '1';
      elFrase.style.transition = '';
      animId = requestAnimationFrame(tick);
    }, 60);
  } else {
    elFrase.style.left = trackW + 'px';
    animId = requestAnimationFrame(tick);
  }
  } else {
  elFrase.style.left  = '0';
  elFrase.style.width = 'auto';
  elFrase.style.transition = comFade ? 'opacity 0.4s, transform 0.4s' : 'none';
  setTimeout(() => {
    elFrase.style.opacity   = '1';
    elFrase.style.transform = 'translateY(0)';
  }, 30);
  }
  }));
}
function irParaFrase(novoIdx) {
  cancelAnimationFrame(animId);
  elFrase.style.transition = 'opacity 0.3s, transform 0.3s';
  elFrase.style.opacity    = '0';
  elFrase.style.transform  = 'translateY(-8px)';
  setTimeout(() => {
  fraseIdx = ((novoIdx % FRASES.length) + FRASES.length) % FRASES.length;
  renderFrase(true);
  reiniciarIntervalo();
  }, 320);
}
function proximaFrase()    { irParaFrase(fraseIdx + 1); }
function anteriorFrase()   { irParaFrase(fraseIdx - 1); }
let fraseShuffled = [];
let fraseShuffleIdx = 0;
function shuffleFrases() {
  fraseShuffled = Array.from({length: FRASES.length}, (_,i)=>i);
  for(let i=fraseShuffled.length-1;i>0;i--){
  const j=Math.floor(Math.random()*(i+1));
  [fraseShuffled[i],fraseShuffled[j]]=[fraseShuffled[j],fraseShuffled[i]];
  }
  if(fraseShuffled[0]===fraseIdx && fraseShuffled.length>1){
  const tmp=fraseShuffled[0];fraseShuffled[0]=fraseShuffled[1];fraseShuffled[1]=tmp;
  }
  fraseShuffleIdx=0;
}
function proximaFraseAleatoria() {
  if(!fraseShuffled.length || fraseShuffleIdx>=fraseShuffled.length) shuffleFrases();
  irParaFrase(fraseShuffled[fraseShuffleIdx++]);
}
function reiniciarIntervalo() {
  clearInterval(intervaloId);
  intervaloId = setInterval(() => { if (!pausado) proximaFraseAleatoria(); }, 10000);
}
function pausarBanner() {
  pausado = true;
  elBanner.style.borderTopColor = '#555';
}
function retomarBanner() {
  pausado = false;
  elBanner.style.borderTopColor = '#701313';
}
elBanner.addEventListener('mousedown',   pausarBanner);
elBanner.addEventListener('touchstart',  pausarBanner, { passive: true });
elBanner.addEventListener('mouseup',     retomarBanner);
elBanner.addEventListener('mouseleave',  retomarBanner);
elBanner.addEventListener('touchend',    retomarBanner);
elBanner.addEventListener('touchcancel', retomarBanner);
let clickCount = 0;
let clickTimer = null;
elBanner.addEventListener('click', () => {
  clickCount++;
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
  if      (clickCount === 2) proximaFrase();
  else if (clickCount >= 3)  anteriorFrase();
  clickCount = 0;
  }, 300);
});
renderFrase(false);
reiniciarIntervalo();
const LEVELS = [
  { lvl:1,  xpReq:0,    titulo:"Novato em Macro",    tituloF:"Novata em Macro",    icon:"",  emoji:""  },
  { lvl:2,  xpReq:15,   titulo:"Amador de Macro",    tituloF:"Amadora de Macro",   icon:"",  emoji:""  },
  { lvl:3,  xpReq:80,   titulo:"Guerreiro do Macro",  tituloF:"Guerreira do Macro", icon:"",  emoji:""  },
  { lvl:4,  xpReq:250,  titulo:"Monge do Macro",      tituloF:"Monja do Macro",     icon:"",  emoji:""  },
  { lvl:5,  xpReq:600,  titulo:"Mago do Macro",       tituloF:"Maga do Macro",      icon:"",  emoji:""  },
  { lvl:6,  xpReq:1200, titulo:"Troll do Macro",      tituloF:"Troll do Macro",     icon:"",  emoji:""  },
  { lvl:7,  xpReq:2200, titulo:"Orc do Macro",        tituloF:"Orc do Macro",       icon:"",  emoji:""  },
  { lvl:8,  xpReq:3800, titulo:"Cerberus do Macro",   tituloF:"Cerberus do Macro",  icon:"",  emoji:""  },
  { lvl:9,  xpReq:6200, titulo:"Dragão do Macro",     tituloF:"Dragoa do Macro",    icon:"",  emoji:""  },
  { lvl:10, xpReq:9800, titulo:"Deus do Macro",        tituloF:"Deusa do Macro",     icon:"",  emoji:""  },
];
const AVATARS = [
  { id:'rookie_m',   nome:'Novato',       custo:0,    lvlMin:1,  genero:'M' },
  { id:'rookie_f',   nome:'(F) Novata',       custo:0,    lvlMin:1,  genero:'F' },
  { id:'gym_m1',     nome:'Karateka',     custo:30,   lvlMin:2,  genero:'M' },
  { id:'gym_f2',     nome:'(F) Karateka',  custo:30,   lvlMin:2,  genero:'F' },
  { id:'gym_m2',     nome:'Boxeador',     custo:45,   lvlMin:2,  genero:'M' },
  { id:'gym_f1',     nome:'(F) Boxeadora', custo:45,   lvlMin:2,  genero:'F' },
  { id:'warrior_m1', nome:'Cavaleiro',    custo:80,   lvlMin:3,  genero:'M' },
  { id:'warrior_f1', nome:'(F) Cavaleira', custo:80,   lvlMin:3,  genero:'F' },
  { id:'warrior_m2', nome:'Berserker',    custo:110,  lvlMin:3,  genero:'M' },
  { id:'warrior_f2', nome:'(F) Valquíria', custo:110,  lvlMin:3,  genero:'F' },
  { id:'monk_m1',    nome:'Monge',        custo:180,  lvlMin:4,  genero:'M' },
  { id:'monk_f1',    nome:'(F) Xamã',     custo:180,  lvlMin:4,  genero:'F' },
  { id:'monk_m2',    nome:'Sensei',       custo:220,  lvlMin:4,  genero:'M' },
  { id:'monk_f2',    nome:'(F) Ocultista', custo:220,  lvlMin:4,  genero:'F' },
  { id:'mage_m1',    nome:'Mago',         custo:300,  lvlMin:5,  genero:'M' },
  { id:'mage_f1',    nome:'(F) Maga',     custo:300,  lvlMin:5,  genero:'F' },
  { id:'mage_m2',    nome:'Bruxo',        custo:380,  lvlMin:5,  genero:'M' },
  { id:'mage_f2',    nome:'(F) Bruxa',    custo:380,  lvlMin:5,  genero:'F' },
  { id:'troll_m1',   nome:'Troll',        custo:500,  lvlMin:6,  genero:'M' },
  { id:'troll_f1',   nome:'(F) Troll',    custo:500,  lvlMin:6,  genero:'F' },
  { id:'troll_m2',   nome:'Ciclope',      custo:620,  lvlMin:6,  genero:'M' },
  { id:'troll_f2',   nome:'(F) Ciclope',  custo:620,  lvlMin:6,  genero:'F' },
  { id:'orc_m1',     nome:'Orc',          custo:800,  lvlMin:7,  genero:'M' },
  { id:'orc_f1',     nome:'(F) Orc',      custo:800,  lvlMin:7,  genero:'F' },
  { id:'orc_m2',     nome:'Orc Chefe',    custo:950,  lvlMin:7,  genero:'M' },
  { id:'orc_f2',     nome:'(F) Orc Rainha', custo:950,  lvlMin:7,  genero:'F' },
  { id:'cerb_m1',    nome:'Cerberus',     custo:1200, lvlMin:8,  genero:'M' },
  { id:'cerb_f1',    nome:'(F) Banshee',  custo:1200, lvlMin:8,  genero:'F' },
  { id:'cerb_m2',    nome:'Demônio',      custo:1400, lvlMin:8,  genero:'M' },
  { id:'cerb_f2',    nome:'(F) Espectro', custo:1400, lvlMin:8,  genero:'F' },
  { id:'dragon_m1',  nome:'Dragão Vermelho', custo:1800, lvlMin:9,  genero:'M' },
  { id:'dragon_f1',  nome:'(F) Dragão Branco', custo:1800, lvlMin:9,  genero:'F' },
  { id:'dragon_m2',  nome:'Dragão Negro',    custo:2100, lvlMin:9,  genero:'M' },
  { id:'dragon_f2',  nome:'(F) Dragão Azul',  custo:2100, lvlMin:9,  genero:'F' },
  { id:'god_m1',     nome:'Odin',         custo:2800, lvlMin:10, genero:'M' },
  { id:'god_f1',     nome:'(F) Frigga',   custo:2800, lvlMin:10, genero:'F' },
  { id:'god_m2',     nome:'Zeus',         custo:3200, lvlMin:10, genero:'M' },
  { id:'god_f2',     nome:'(F) Atena',    custo:3200, lvlMin:10, genero:'F' },
];
function drawAvatar(ctx, id, size=72) {
  const s = size / 16;
  const r = (x,y,w,h,c) => { ctx.fillStyle=c; ctx.fillRect(x*s,y*s,w*s,h*s); };
  ctx.clearRect(0,0,size,size);
  const bg = (c='#111') => r(0,0,16,16,c);
  const head = (x,y,w,h,skin,hair,eyeC='#111') => {
  r(x,y,w,h,skin);
  r(x,y,w,2,hair);
  r(x+1,y+2,2,1,eyeC); r(x+w-3,y+2,2,1,eyeC);
  };
  switch(id) {
      case 'rookie_m': {
  bg('#0d0d18');
  // CORPO - roupa preta
  r(4,6,8,5,'#1a1a1a');
  r(3,7,2,4,'#111');
  r(11,7,2,4,'#111');
  r(3,9,2,1,'#c4956a');
  r(11,9,2,1,'#c4956a');
  r(5,11,3,5,'#1a1a1a');
  r(8,11,3,5,'#1a1a1a');
  r(4,15,3,1,'#2a2a2a');
  r(9,15,3,1,'#2a2a2a');
  r(6,6,4,1,'#252525');
  r(5,9,6,1,'#222');
  // ROSTO
  r(5,2,6,4,'#c4956a');
  r(7,5,2,1,'#aa7a52');
  r(6,3,1,1,'#3a1f0a');
  r(9,3,1,1,'#3a1f0a');
  r(7,4,2,1,'#c9906a');
  // CABELO - castanho escuro, curto, mullet sutil
  r(5,1,6,2,'#4a2a0a');
  r(4,1,2,3,'#3d2008');
  r(10,1,1,3,'#3d2008');
  r(11,1,1,2,'#3d2008');
  r(5,0,6,1,'#5a3412');
  r(6,0,1,1,'#6b4018');
  r(9,0,1,1,'#6b4018');
  r(4,3,1,1,'#3d2008');
  r(11,3,1,1,'#3d2008');
  r(10,4,2,1,'#2e1605');
  break;
  }
      case 'rookie_f': {
  bg('#0d0d18');
  // CORPO feminino - blusa lilás, saia/legging
  r(4,6,8,5,'#7c4dff');
  r(3,7,2,4,'#651fff');
  r(11,7,2,4,'#651fff');
  r(3,9,2,1,'#c4956a');
  r(11,9,2,1,'#c4956a');
  r(5,11,2,5,'#4a148c');
  r(9,11,2,5,'#4a148c');
  r(7,11,2,5,'#4a148c');
  r(4,15,3,1,'#311b92');
  r(9,15,3,1,'#311b92');
  r(6,6,4,1,'#b39ddb');
  r(5,10,6,1,'#7c4dff');
  // cintura detalhes saia
  r(4,11,8,1,'#9c27b0');
  r(5,12,6,3,'#6a1b9a');
  // laço na blusa
  r(7,7,2,1,'#f48fb1');
  // ROSTO feminino
  r(5,2,6,4,'#c4956a');
  r(7,5,2,1,'#c09070');
  r(6,3,1,1,'#3a1f0a');
  r(9,3,1,1,'#3a1f0a');
  r(6,4,1,1,'#e88aaa');
  r(9,4,1,1,'#e88aaa');
  r(7,5,1,1,'#d47070');
  r(8,5,1,1,'#d47070');
  // cílios
  r(6,2,1,1,'#2a1a0a');
  r(7,2,1,1,'#2a1a0a');
  r(9,2,1,1,'#2a1a0a');
  r(10,2,1,1,'#2a1a0a');
  // CABELO cacheado castanho escuro longo
  r(4,0,8,3,'#4a2a0a');
  r(3,1,2,8,'#3d2008');
  r(11,1,2,8,'#3d2008');
  r(2,3,2,6,'#2e1605');
  r(12,3,2,6,'#2e1605');
  r(5,0,6,1,'#5a3412');
  r(6,0,1,1,'#6b4018');
  r(9,0,1,1,'#6b4018');
  r(3,7,1,1,'#4a2a0a');
  r(12,7,1,1,'#4a2a0a');
  r(2,5,1,1,'#5a3412');
  r(13,5,1,1,'#5a3412');
  r(3,9,1,1,'#3d2008');
  r(12,9,1,1,'#3d2008');
  break;
  }
  case 'gym_m1': {
  bg('#0a0a14');
  r(5,1,6,4,'#d4a76a');
  r(5,1,6,1,'#1a1a1a');
  r(6,3,1,1,'#1a1a1a'); r(9,3,1,1,'#1a1a1a');
  r(3,5,10,8,'#f0f0f0');
  r(2,5,2,7,'#e0e0e0'); r(12,5,2,7,'#e0e0e0');
  r(5,5,6,1,'#c0c0c0');
  r(6,5,2,3,'#e8c49a');
  r(8,5,2,3,'#c8a480');
  r(5,9,6,2,'#e74c3c');
  r(5,13,2,3,'#f0f0f0'); r(9,13,2,3,'#f0f0f0');
  r(4,15,3,1,'#333'); r(9,15,3,1,'#333');
  r(1,9,2,3,'#e8c49a'); r(13,9,2,3,'#e8c49a');
  break;
  }
  case 'gym_m2': {
  bg('#0a0a14');
  r(5,1,6,5,'#e8c49a');
  r(5,1,6,2,'#1a1a1a');
  r(6,3,1,1,'#333'); r(9,3,1,1,'#333');
  r(7,5,2,1,'#e8c49a');
  r(4,6,8,5,'#f39c12');
  r(2,7,3,5,'#f39c12'); r(11,7,3,5,'#f39c12');
  r(1,11,3,3,'#c0392b'); r(12,11,3,3,'#c0392b');
  r(0,10,2,1,'#e74c3c'); r(13,10,2,1,'#e74c3c');
  r(5,11,3,4,'#1a1a1a'); r(8,11,3,4,'#1a1a1a');
  r(4,14,3,2,'#333'); r(9,14,3,2,'#333');
  r(6,10,4,1,'#fff');
  r(5,6,2,1,'#d4a76a'); r(9,6,2,1,'#d4a76a');
  break;
  }
  case 'gym_f1': {
  bg('#0a0a14');
  r(5,1,6,5,'#f5c6a0');
  r(4,0,8,3,'#8b4513');
  r(4,3,1,3,'#8b4513'); r(11,3,1,3,'#8b4513');
  r(13,1,2,5,'#8b4513');
  r(6,3,1,1,'#555'); r(9,3,1,1,'#555');
  r(4,6,8,4,'#e91e63');
  r(2,7,3,4,'#f5c6a0'); r(11,7,3,4,'#f5c6a0');
  r(1,10,3,3,'#e91e63'); r(12,10,3,3,'#e91e63');
  r(0,9,2,1,'#ff80ab'); r(13,9,2,1,'#ff80ab');
  r(5,10,6,3,'#2c3e50');
  r(4,13,3,3,'#e91e63'); r(9,13,3,3,'#e91e63');
  r(6,8,4,1,'#ff4081');
  break;
  }
  case 'gym_f2': {
  bg('#0a0a14');
  r(5,1,6,4,'#e8b88a');
  r(5,0,6,2,'#1a1a1a');
  r(4,0,2,3,'#1a1a1a'); r(11,0,2,3,'#1a1a1a');
  r(6,3,1,1,'#333'); r(9,3,1,1,'#333');
  r(3,5,10,8,'#f5f5f5');
  r(2,5,2,7,'#e8e8e8'); r(12,5,2,7,'#e8e8e8');
  r(6,5,2,3,'#e8b88a');
  r(8,5,2,3,'#d4a070');
  r(5,5,6,1,'#d0d0d0');
  r(5,9,6,2,'#2980b9');
  r(5,13,2,3,'#f5f5f5'); r(9,13,2,3,'#f5f5f5');
  r(4,15,3,1,'#444'); r(9,15,3,1,'#444');
  r(1,9,2,3,'#e8b88a'); r(13,9,2,3,'#e8b88a');
  break;
  }
  case 'warrior_m1': {
  bg('#0c0c0c');
  r(4,1,8,2,'#90a4ae');
  r(3,3,10,3,'#78909c');
  r(4,2,8,2,'#b0bec5');
  r(5,5,6,2,'#cfd8dc');
  r(6,6,1,1,'#333'); r(9,6,1,1,'#333');
  r(5,5,6,1,'#90a4ae');
  r(3,7,10,5,'#546e7a');
  r(2,7,2,6,'#607d8b'); r(12,7,2,6,'#607d8b');
  r(4,7,8,1,'#b0bec5');
  r(6,9,4,2,'#f39c12');
  r(4,12,3,4,'#455a64'); r(9,12,3,4,'#455a64');
  r(3,15,3,1,'#546e7a'); r(10,15,3,1,'#546e7a');
  r(13,6,3,7,'#ccc');
  r(13,4,3,3,'#e0e0e0');
  r(12,8,2,1,'#f39c12');
  break;
  }
  case 'warrior_m2': {
  bg('#0c0c0c');
  r(4,1,8,5,'#5d4037');
  r(6,2,4,4,'#795548');
  r(4,0,2,2,'#8d6e63'); r(10,0,2,2,'#8d6e63');
  r(5,6,6,2,'#c47c2a');
  r(6,7,1,1,'#e74c3c'); r(9,7,1,1,'#e74c3c');
  r(7,8,2,1,'#c47c2a');
  r(3,8,10,5,'#4a2c0a');
  r(2,8,2,6,'#4a2c0a'); r(12,8,2,6,'#4a2c0a');
  r(1,13,2,2,'#777'); r(13,13,2,2,'#777');
  r(1,11,2,4,'#8b8b8b'); r(13,11,2,4,'#8b8b8b');
  r(5,9,6,2,'#e74c3c');
  r(4,13,3,3,'#3a1a00'); r(9,13,3,3,'#3a1a00');
  r(3,15,3,1,'#555'); r(10,15,3,1,'#555');
  break;
  }
  case 'warrior_f1': {
  bg('#0c0c0c');
  r(4,0,8,3,'#90a4ae');
  r(4,0,8,1,'#b0bec5');
  r(6,0,4,2,'#e74c3c');
  r(5,3,6,3,'#e8c49a');
  r(6,4,1,1,'#333'); r(9,4,1,1,'#333');
  r(4,6,8,5,'#78909c');
  r(4,6,8,1,'#b0bec5');
  r(3,7,2,4,'#90a4ae'); r(11,7,2,4,'#90a4ae');
  r(6,8,4,2,'#e74c3c');
  r(5,11,6,4,'#546e7a');
  r(4,14,3,2,'#455a64'); r(9,14,3,2,'#455a64');
  r(1,8,2,6,'#aaa');
  r(0,7,3,1,'#f39c12'); r(0,13,3,1,'#f39c12');
  break;
  }
  case 'warrior_f2': {
  bg('#0c0c0c');
  r(4,1,8,5,'#f0d4b0');
  r(4,0,8,3,'#ffd54f');
  r(3,2,2,5,'#ffd54f'); r(11,2,2,5,'#ffd54f');
  r(6,3,1,1,'#1a6fbf'); r(9,3,1,1,'#1a6fbf');
  r(3,0,2,2,'#f5f5f5'); r(11,0,2,2,'#f5f5f5');
  r(3,1,2,3,'#e0e0e0'); r(11,1,2,3,'#e0e0e0');
  r(4,6,8,5,'#78909c');
  r(3,7,2,4,'#90a4ae'); r(11,7,2,4,'#90a4ae');
  r(3,6,10,1,'#b0bec5');
  r(6,8,4,2,'#f39c12');
  r(5,11,6,4,'#546e7a');
  r(4,14,3,2,'#455a64'); r(9,14,3,2,'#455a64');
  r(1,8,2,6,'#ccc');
  r(0,7,3,1,'#ffd54f'); r(0,13,3,1,'#ffd54f');
  break;
  }
  case 'monk_m1': {
  bg('#0c0c0c');
  r(5,2,6,4,'#d4956a');
  r(6,3,1,1,'#333'); r(9,3,1,1,'#333');
  r(7,5,2,1,'#d4956a');
  r(3,6,10,7,'#1abc9c');
  r(2,7,2,5,'#16a085'); r(12,7,2,5,'#16a085');
  r(1,11,2,3,'#d4956a'); r(13,11,2,3,'#d4956a');
  r(5,9,6,1,'#f39c12');
  r(5,13,2,3,'#1abc9c'); r(9,13,2,3,'#1abc9c');
  r(4,15,3,1,'#0d7a68'); r(9,15,3,1,'#0d7a68');
  r(7,0,2,2,'#2ecc71');
  break;
  }
  case 'monk_m2': {
  bg('#0c0c0c');
  r(5,2,6,4,'#c8955a');
  r(5,2,6,1,'#f5f5f5');
  r(4,2,2,3,'#f5f5f5'); r(12,2,2,3,'#f5f5f5');
  r(6,6,4,1,'#f5f5f5');
  r(6,3,1,1,'#555'); r(9,3,1,1,'#555');
  r(3,6,10,7,'#ffffff');
  r(2,7,2,5,'#e0e0e0'); r(12,7,2,5,'#e0e0e0');
  r(5,9,6,1,'#f39c12');
  r(5,13,2,3,'#f5f5f5'); r(9,13,2,3,'#f5f5f5');
  r(14,6,2,8,'#8b6914');
  r(14,5,2,2,'#f39c12');
  break;
  }
  case 'monk_f1': {
  bg('#0c0c0c');
  r(5,2,6,4,'#d4a574');
  r(4,0,8,4,'#5d4037');
  r(3,3,2,5,'#5d4037'); r(11,3,2,5,'#5d4037');
  r(6,3,1,1,'#e74c3c'); r(9,3,1,1,'#e74c3c');
  r(3,6,10,7,'#3e2723');
  r(2,7,2,5,'#4e342e'); r(12,7,2,5,'#4e342e');
  r(5,9,6,1,'#e74c3c');
  r(5,13,2,3,'#3e2723'); r(9,13,2,3,'#3e2723');
  r(7,8,2,1,'#ffd54f'); r(6,9,4,1,'#ffd54f');
  r(0,9,2,2,'#e74c3c');
  r(14,9,2,2,'#f39c12');
  r(7,0,2,1,'#fff'); r(7,1,2,1,'#e0b060');
  break;
  }
  case 'monk_f2': {
  bg('#0c0c0c');
  r(5,2,6,4,'#e8b88a');
  r(4,1,8,3,'#1a1a1a');
  r(7,0,2,2,'#1a1a1a');
  r(6,3,1,1,'#9c27b0'); r(9,3,1,1,'#9c27b0');
  r(3,6,10,7,'#1a0a2e');
  r(2,7,2,5,'#2a0a3e'); r(12,7,2,5,'#2a0a3e');
  r(1,11,2,3,'#e8b88a'); r(13,11,2,3,'#e8b88a');
  r(5,9,6,1,'#9c27b0');
  r(5,13,2,3,'#1a0a2e'); r(9,13,2,3,'#1a0a2e');
  r(6,7,4,1,'#ce93d8');
  r(7,8,2,2,'#ffd54f');
  r(0,8,2,4,'#7b1fa2');
  r(14,8,2,4,'#9c27b0');
  break;
  }
  case 'mage_m1': {
  bg('#0d0d2b');
  r(4,0,8,4,'#2980b9');
  r(6,0,4,6,'#3498db');
  r(7,0,2,2,'#ffd54f');
  r(5,5,6,3,'#e8c49a');
  r(5,7,6,1,'#e8e8e8');
  r(6,6,1,1,'#333'); r(9,6,1,1,'#333');
  r(3,8,10,5,'#2980b9');
  r(2,9,2,5,'#2471a3'); r(12,9,2,5,'#2471a3');
  r(5,9,6,1,'#9b59b6');
  r(5,13,2,3,'#1a5276'); r(9,13,2,3,'#1a5276');
  r(14,9,2,6,'#8b6914');
  r(14,7,2,3,'#ffd54f');
  break;
  }
  case 'mage_m2': {
  bg('#0d0d2b');
  r(5,1,6,5,'#c9a46a');
  r(4,0,8,2,'#1a1a1a');
  r(5,0,6,7,'#212121');
  r(5,0,3,2,'#3d2080'); r(8,0,3,2,'#3d2080');
  r(6,3,1,1,'#9c27b0'); r(9,3,1,1,'#9c27b0');
  r(6,5,4,1,'#c9a46a');
  r(3,6,10,7,'#1a0a2e');
  r(2,7,2,5,'#2a0a3e'); r(12,7,2,5,'#2a0a3e');
  r(4,6,8,1,'#ce93d8');
  r(6,9,4,2,'#ffd54f');
  r(5,13,2,3,'#0d0020'); r(9,13,2,3,'#0d0020');
  r(0,7,2,5,'#9c27b0');
  r(14,7,2,5,'#e91e63');
  r(5,7,6,1,'#e8e0d0');
  break;
  }
  case 'mage_f1': {
  bg('#0d0d2b');
  r(4,0,8,5,'#e91e63');
  r(5,0,6,7,'#f06292');
  r(7,0,2,3,'#ffd54f');
  r(5,6,6,3,'#f5c6a0');
  r(6,7,1,1,'#333'); r(9,7,1,1,'#333');
  r(4,9,8,4,'#e91e63');
  r(3,10,2,4,'#e91e63'); r(11,10,2,4,'#e91e63');
  r(5,9,6,1,'#ffd54f');
  r(5,13,2,3,'#c2185b'); r(9,13,2,3,'#c2185b');
  r(14,9,2,6,'#ad1457');
  r(13,7,3,3,'#ffd54f');
  break;
  }
  case 'mage_f2': {
  bg('#0d0d2b');
  r(5,1,6,5,'#ddb892');
  r(4,0,8,3,'#1a1a1a');
  r(5,0,6,7,'#212121');
  r(4,1,2,2,'#ffd54f'); r(10,1,2,2,'#ffd54f');
  r(6,3,1,1,'#76ff03'); r(9,3,1,1,'#76ff03');
  r(3,6,10,7,'#1a1a1a');
  r(2,7,2,5,'#212121'); r(12,7,2,5,'#212121');
  r(5,9,6,1,'#76ff03');
  r(5,13,2,3,'#1a1a1a'); r(9,13,2,3,'#1a1a1a');
  r(0,9,2,2,'#76ff03');
  r(14,9,2,2,'#e91e63');
  break;
  }
  case 'troll_m1': {
  bg('#0c0c0c');
  r(3,2,10,5,'#2d6a2d');
  r(4,1,8,4,'#3d8b3d');
  r(4,4,2,3,'#1a4d1a'); r(10,4,2,3,'#1a4d1a');
  r(5,3,2,1,'#e74c3c'); r(9,3,2,1,'#e74c3c');
  r(5,5,2,2,'#f5f5f5'); r(9,5,2,2,'#f5f5f5');
  r(3,7,10,5,'#8b3a3a');
  r(2,7,2,5,'#7b2929'); r(12,7,2,5,'#7b2929');
  r(4,7,8,1,'#c0392b');
  r(2,11,2,2,'#555'); r(12,11,2,2,'#555');
  r(4,12,3,4,'#2d6a2d'); r(9,12,3,4,'#2d6a2d');
  r(3,15,3,1,'#4a4a4a'); r(10,15,3,1,'#4a4a4a');
  r(0,8,2,5,'#7b5e37');
  r(0,6,2,3,'#5d4037');
  break;
  }
  case 'troll_m2': {
  bg('#0c0c0c');
  r(2,2,12,5,'#5d4037');
  r(3,1,10,4,'#6d4c41');
  r(3,4,2,4,'#4e342e'); r(11,4,2,4,'#4e342e');
  r(5,3,6,3,'#f5f5f5');
  r(7,3,2,3,'#1565c0');
  r(7,4,2,2,'#0d47a1');
  r(8,4,1,1,'#000');
  r(7,3,2,1,'#42a5f5');
  r(4,6,4,2,'#8d6e63');
  r(8,6,4,2,'#795548');
  r(2,7,12,6,'#3e2723');
  r(1,8,2,5,'#4e342e'); r(13,8,2,5,'#4e342e');
  r(4,8,8,1,'#795548');
  r(3,12,3,4,'#5d4037'); r(10,12,3,4,'#5d4037');
  r(2,15,4,1,'#333'); r(10,15,4,1,'#333');
  r(14,7,2,7,'#4e342e');
  r(13,5,3,3,'#3e2723');
  break;
  }
  case 'troll_f1': {
  bg('#0c0c0c');
  r(4,2,8,5,'#388e3c');
  r(4,1,8,2,'#2e7d32');
  r(3,2,2,4,'#2e7d32'); r(11,2,2,4,'#2e7d32');
  r(5,3,2,1,'#ffd54f'); r(9,3,2,1,'#ffd54f');
  r(7,5,2,1,'#ff8c00');
  r(5,6,2,2,'#e8f5e9'); r(9,6,2,2,'#e8f5e9');
  r(4,7,8,6,'#880e4f');
  r(3,8,2,4,'#880e4f'); r(11,8,2,4,'#880e4f');
  r(5,7,6,1,'#ad1457');
  r(6,9,4,1,'#ffd54f');
  r(5,13,3,3,'#1b5e20'); r(8,13,3,3,'#1b5e20');
  r(4,15,3,1,'#333'); r(9,15,3,1,'#333');
  r(1,11,2,2,'#388e3c'); r(13,11,2,2,'#388e3c');
  break;
  }
  case 'troll_f2': {
  bg('#0c0c0c');
  r(4,2,8,5,'#4a6741');
  r(4,1,8,2,'#2d4a2a');
  r(3,2,2,5,'#2d4a2a'); r(11,2,2,5,'#2d4a2a');
  r(13,1,2,6,'#2d4a2a');
  r(5,3,6,3,'#e8e8e8');
  r(7,3,2,3,'#c62828');
  r(7,4,2,1,'#b71c1c');
  r(8,4,1,1,'#000');
  r(7,3,1,1,'#ef9a9a');
  r(4,6,8,7,'#263238');
  r(2,7,2,5,'#37474f'); r(12,7,2,5,'#37474f');
  r(5,9,6,1,'#546e7a');
  r(5,13,2,3,'#1c2e38'); r(9,13,2,3,'#1c2e38');
  r(1,10,2,2,'#4a6741'); r(13,10,2,2,'#4a6741');
  r(3,15,10,1,'#37474f');
  break;
  }
  case 'orc_m1': {
  bg('#0c0c0c');
  r(3,2,10,5,'#388e3c');
  r(4,1,8,4,'#43a047');
  r(3,3,2,3,'#2e7d32'); r(11,3,2,3,'#2e7d32');
  r(5,3,2,1,'#e53935'); r(9,3,2,1,'#e53935');
  r(5,6,2,2,'#f5f5f5'); r(9,6,2,2,'#f5f5f5');
  r(2,7,12,6,'#b71c1c');
  r(1,8,2,5,'#c62828'); r(13,8,2,5,'#c62828');
  r(4,7,8,1,'#ef9a9a');
  r(6,9,4,2,'#ffd54f');
  r(3,13,4,3,'#388e3c'); r(9,13,4,3,'#388e3c');
  r(2,15,4,1,'#555'); r(10,15,4,1,'#555');
  r(0,7,2,8,'#607d8b');
  r(-1,5,3,3,'#78909c');
  break;
  }
  case 'orc_m2': {
  bg('#0c0c0c');
  r(2,1,12,5,'#1b5e20');
  r(3,0,10,4,'#2e7d32');
  r(2,2,2,4,'#1b5e20'); r(12,2,2,4,'#1b5e20');
  r(4,2,3,1,'#d32f2f'); r(9,2,3,1,'#d32f2f');
  r(4,5,4,2,'#fff'); r(8,5,4,2,'#fff');
  r(3,0,2,2,'#795548'); r(11,0,2,2,'#795548');
  r(1,6,14,7,'#880e4f');
  r(0,7,2,6,'#ad1457'); r(14,7,2,6,'#ad1457');
  r(4,6,8,1,'#f48fb1');
  r(5,9,6,3,'#ffd54f');
  r(3,13,4,3,'#1b5e20'); r(9,13,4,3,'#1b5e20');
  r(2,15,4,1,'#880e4f'); r(10,15,4,1,'#880e4f');
  break;
  }
  case 'orc_f1': {
  bg('#0c0c0c');
  r(4,2,8,5,'#4caf50');
  r(4,1,8,3,'#e91e63');
  r(3,3,2,4,'#e91e63'); r(11,3,2,4,'#e91e63');
  r(6,3,1,1,'#ff8f00'); r(9,3,1,1,'#ff8f00');
  r(6,6,2,2,'#f5f5f5'); r(9,6,1,2,'#f5f5f5');
  r(3,7,10,6,'#880e4f');
  r(2,8,2,5,'#880e4f'); r(12,8,2,5,'#880e4f');
  r(6,9,4,1,'#ffd54f');
  r(5,13,2,3,'#4caf50'); r(9,13,2,3,'#4caf50');
  r(4,15,3,1,'#555'); r(9,15,3,1,'#555');
  r(13,8,3,5,'#aaa');
  break;
  }
  case 'orc_f2': {
  bg('#0c0c0c');
  r(4,2,8,5,'#388e3c');
  r(3,1,10,3,'#ffd54f');
  r(6,0,4,2,'#ffd54f');
  r(5,0,2,2,'#ffd54f'); r(9,0,2,2,'#ffd54f');
  r(6,3,1,1,'#1a237e'); r(9,3,1,1,'#1a237e');
  r(6,6,2,2,'#fffde7');
  r(2,7,12,7,'#4a148c');
  r(1,8,2,5,'#6a1b9a'); r(13,8,2,5,'#6a1b9a');
  r(4,7,8,1,'#ce93d8');
  r(5,10,6,2,'#ffd54f');
  r(4,14,3,2,'#4a148c'); r(9,14,3,2,'#4a148c');
  r(3,15,4,1,'#ce93d8'); r(9,15,4,1,'#ce93d8');
  break;
  }
  case 'cerb_m1': {
  bg('#0c0c0c');
  r(1,1,4,4,'#424242');
  r(6,0,4,5,'#212121');
  r(11,1,4,4,'#424242');
  r(1,2,4,2,'#616161'); r(6,1,4,3,'#333'); r(11,2,4,2,'#616161');
  r(2,3,1,1,'#e53935'); r(4,3,1,1,'#e53935');
  r(7,2,1,1,'#e53935'); r(10,2,1,1,'#e53935');
  r(12,3,1,1,'#e53935'); r(14,3,1,1,'#e53935');
  r(2,5,12,7,'#212121');
  r(1,6,2,5,'#333'); r(13,6,2,5,'#333');
  r(4,12,3,4,'#212121'); r(9,12,3,4,'#212121');
  r(0,9,2,2,'#e53935');
  r(14,9,2,2,'#e53935');
  r(5,6,6,4,'#e53935');
  break;
  }
  case 'cerb_m2': {
  bg('#0c0c0c');
  r(4,2,8,5,'#8b0000');
  r(4,2,8,2,'#c62828');
  r(3,0,2,4,'#5d0000'); r(11,0,2,4,'#5d0000');
  r(2,0,2,2,'#7b0000'); r(12,0,2,2,'#7b0000');
  r(1,1,2,1,'#5d0000'); r(13,1,2,1,'#5d0000');
  r(5,3,2,1,'#ff6f00'); r(9,3,2,1,'#ff6f00');
  r(5,3,1,1,'#ffd54f'); r(9,3,1,1,'#ffd54f');
  r(6,6,1,1,'#f5f5f5'); r(9,6,1,1,'#f5f5f5');
  r(3,7,10,7,'#1a1a1a');
  r(1,8,3,6,'#212121'); r(12,8,3,6,'#212121');
  r(4,7,8,1,'#e53935');
  r(5,10,6,2,'#ff6f00');
  r(5,14,2,2,'#1a1a1a'); r(9,14,2,2,'#1a1a1a');
  r(0,10,2,4,'#e53935'); r(14,10,2,4,'#ff6f00');
  r(0,9,1,2,'#ffd54f'); r(15,9,1,2,'#ffd54f');
  break;
  }
  case 'cerb_f1': {
  bg('#0c0c0c');
  r(4,2,8,5,'#b0bec5');
  r(3,0,10,4,'#eceff1');
  r(2,3,2,7,'#eceff1'); r(12,3,2,7,'#eceff1');
  r(6,3,1,1,'#1de9b6'); r(9,3,1,1,'#1de9b6');
  r(7,6,2,1,'#ef5350');
  r(3,7,10,6,'#eceff1');
  r(1,8,3,7,'#cfd8dc'); r(12,8,3,7,'#cfd8dc');
  r(4,7,8,1,'#1de9b6');
  r(5,10,6,2,'#1de9b6');
  r(5,14,2,2,'rgba(0,0,0,0)'); r(9,14,2,2,'rgba(0,0,0,0)');
  r(3,14,10,2,'#b0bec5');
  break;
  }
  case 'cerb_f2': {
  bg('#0c0c0c');
  r(5,2,6,5,'#37474f');
  r(4,1,8,3,'#263238');
  r(3,2,2,5,'#263238'); r(11,2,2,5,'#263238');
  r(6,3,1,1,'#76ff03'); r(9,3,1,1,'#76ff03');
  r(3,7,10,7,'#263238');
  r(1,8,3,6,'#37474f'); r(12,8,3,6,'#37474f');
  r(4,7,8,1,'#76ff03');
  r(6,9,4,3,'#76ff03');
  r(4,14,3,2,'#263238'); r(9,14,3,2,'#263238');
  r(0,9,2,3,'#76ff03'); r(14,9,2,3,'#76ff03');
  break;
  }
  case 'dragon_m1': {
  bg('#0c0c0c');
  r(3,2,10,5,'#c62828');
  r(4,1,8,5,'#e53935');
  r(3,1,2,3,'#b71c1c'); r(11,1,2,3,'#b71c1c');
  r(1,0,2,3,'#922b21'); r(13,0,2,3,'#922b21');
  r(5,3,2,1,'#ffd54f'); r(9,3,2,1,'#ffd54f');
  r(4,6,8,6,'#c62828');
  r(2,7,2,6,'#b71c1c'); r(12,7,2,6,'#b71c1c');
  r(0,8,3,5,'#e53935'); r(13,8,3,5,'#e53935');
  r(4,12,4,4,'#b71c1c'); r(8,12,4,4,'#b71c1c');
  r(3,15,4,1,'#922b21'); r(9,15,4,1,'#922b21');
  r(3,6,2,2,'#f57f17');
  r(1,7,2,2,'#ffd54f');
  r(0,8,1,2,'#fff');
  break;
  }
  case 'dragon_m2': {
  bg('#0c0c0c');
  r(3,2,10,5,'#1a1a1a');
  r(4,1,8,5,'#212121');
  r(3,1,2,3,'#000'); r(11,1,2,3,'#000');
  r(1,0,2,3,'#212121'); r(13,0,2,3,'#212121');
  r(5,3,2,1,'#9c27b0'); r(9,3,2,1,'#9c27b0');
  r(4,6,8,6,'#212121');
  r(2,7,2,6,'#1a1a1a'); r(12,7,2,6,'#1a1a1a');
  r(0,8,3,5,'#212121'); r(13,8,3,5,'#212121');
  r(4,12,4,4,'#1a1a1a'); r(8,12,4,4,'#1a1a1a');
  r(3,15,4,1,'#333'); r(9,15,4,1,'#333');
  r(3,6,2,2,'#9c27b0');
  r(1,7,3,2,'#ce93d8');
  r(5,5,6,1,'#424242');
  break;
  }
  case 'dragon_f1': {
  bg('#0a0a1a');
  r(3,1,10,5,'#f0f0f0');
  r(4,0,8,4,'#ffffff');
  r(2,0,3,3,'#e0e0e0'); r(11,0,3,3,'#e0e0e0');
  r(1,0,2,2,'#c8c8c8'); r(13,0,2,2,'#c8c8c8');
  r(4,0,2,2,'#d0d0d0'); r(10,0,2,2,'#d0d0d0');
  r(5,2,2,1,'#00cfff'); r(9,2,2,1,'#00cfff');
  r(5,2,1,1,'#ffffff'); r(9,2,1,1,'#ffffff');
  r(5,4,6,1,'#c8e8ff');
  r(3,5,3,2,'#a0d8ef'); r(0,6,4,2,'#d0eeff');
  r(4,6,8,7,'#f5f5f5');
  r(2,7,3,6,'#e8e8e8'); r(11,7,3,6,'#e8e8e8');
  r(0,8,3,5,'#f0f0f0'); r(13,8,3,5,'#f0f0f0');
  r(1,7,2,2,'#c8e8ff'); r(13,7,2,2,'#c8e8ff');
  r(4,13,4,3,'#e0e0e0'); r(8,13,4,3,'#e0e0e0');
  r(3,15,4,1,'#b0b0b0'); r(9,15,4,1,'#b0b0b0');
  r(5,5,6,1,'#e8f8ff');
  r(6,8,4,2,'#c0e0ff');
  break;
  }
  case 'dragon_f2': {
  bg('#0c0c0c');
  r(3,2,10,5,'#01579b');
  r(4,1,8,5,'#0288d1');
  r(4,0,2,3,'#004d6f'); r(10,0,2,3,'#004d6f');
  r(5,3,2,1,'#e1f5fe'); r(9,3,2,1,'#e1f5fe');
  r(4,6,8,6,'#01579b');
  r(2,7,2,6,'#004d6f'); r(12,7,2,6,'#004d6f');
  r(0,8,3,5,'#0288d1'); r(13,8,3,5,'#0288d1');
  r(4,12,4,4,'#004d6f'); r(8,12,4,4,'#004d6f');
  r(3,15,4,1,'#01579b'); r(9,15,4,1,'#01579b');
  r(3,6,3,2,'#e1f5fe');
  r(1,7,3,3,'#b3e5fc');
  r(6,5,4,1,'#80d8ff');
  break;
  }
  case 'god_m1': {
  bg('#0a0a1a');
  r(4,2,8,5,'#e8d5b0');
  r(4,1,8,2,'#c0c0c0');
  r(3,2,2,5,'#c0c0c0'); r(11,2,2,5,'#c0c0c0');
  r(4,5,8,2,'#d0d0d0');
  r(3,6,10,1,'#c8c8c8');
  r(6,3,2,1,'#4a3520');
  r(9,3,1,1,'#111'); r(8,3,2,1,'#2a1a0a');
  r(4,0,8,2,'#546e7a');
  r(3,0,2,2,'#607d8b'); r(11,0,2,2,'#607d8b');
  r(2,7,12,7,'#1a1a3a');
  r(1,8,2,6,'#1e1e40'); r(13,8,2,6,'#1e1e40');
  r(4,7,8,1,'#546e7a');
  r(6,10,4,2,'#ffd54f');
  r(5,14,2,2,'#1a1a3a'); r(9,14,2,2,'#1a1a3a');
  r(14,0,2,15,'#8b6914');
  r(13,0,3,3,'#c0c0c0');
  r(14,2,2,1,'#e0e0e0');
  r(0,8,2,2,'#212121'); r(0,10,1,1,'#e0e0e0');
  break;
  }
  case 'god_m2': {
  bg('#0a0a20');
  r(5,2,6,5,'#fff9f0');
  r(4,1,8,3,'#f5f5f5');
  r(3,2,2,5,'#f5f5f5'); r(11,2,2,5,'#f5f5f5');
  r(5,5,6,3,'#f0f0f0');
  r(6,3,1,1,'#e3f2fd'); r(9,3,1,1,'#e3f2fd');
  r(6,3,1,1,'#64b5f6'); r(9,3,1,1,'#64b5f6');
  r(5,1,6,1,'#ffd54f');
  r(6,0,1,2,'#ffd54f'); r(8,0,1,2,'#ffd54f'); r(10,0,1,2,'#ffd54f');
  r(3,8,10,6,'#0d47a1');
  r(2,9,2,5,'#1565c0'); r(12,9,2,5,'#1565c0');
  r(4,8,8,1,'#42a5f5');
  r(6,10,4,2,'#ffd54f');
  r(5,14,2,2,'#0d47a1'); r(9,14,2,2,'#0d47a1');
  r(3,15,10,1,'#1976d2');
  r(14,4,2,10,'#ffd54f');
  r(13,3,3,3,'#fff9c4');
  r(13,2,3,2,'#ffe082');
  r(0,8,2,2,'#e3f2fd'); r(1,10,1,2,'#90caf9');
  r(0,12,2,2,'#42a5f5');
  break;
  }
  case 'god_f1': {
  bg('#0a0a1a');
  r(5,2,6,5,'#f5e6c8');
  r(4,0,8,3,'#ffd54f');
  r(3,1,2,6,'#ffd54f'); r(11,1,2,6,'#ffd54f');
  r(4,0,2,2,'#f5e682'); r(10,0,2,2,'#f5e682');
  r(6,3,1,1,'#1565c0'); r(9,3,1,1,'#1565c0');
  r(3,7,10,7,'#f5f0e0');
  r(2,8,2,5,'#e8e0d0'); r(12,8,2,5,'#e8e0d0');
  r(4,7,8,1,'#ffd54f');
  r(6,9,4,1,'#ffd54f'); r(5,11,6,1,'#ffd54f');
  r(7,10,2,2,'#1565c0');
  r(5,14,2,2,'#f5f0e0'); r(9,14,2,2,'#f5f0e0');
  r(3,15,10,1,'#e8e0d0');
  r(5,0,6,1,'#ffd54f'); r(7,0,2,1,'#fff9c4');
  r(0,7,2,8,'#8b6914');
  r(0,6,2,2,'#ffd54f');
  break;
  }
  case 'god_f2': {
  bg('#0a0a1a');
  r(5,3,6,5,'#f5e8c8');
  r(4,0,8,4,'#90a4ae');
  r(3,0,3,2,'#b0bec5'); r(10,0,3,2,'#b0bec5');
  r(6,0,4,1,'#e74c3c');
  r(7,0,2,3,'#c0392b');
  r(6,4,1,1,'#558b2f'); r(9,4,1,1,'#558b2f');
  r(3,3,2,7,'#c8a45a'); r(11,3,2,7,'#c8a45a');
  r(3,8,10,6,'#b0bec5');
  r(2,9,2,5,'#90a4ae'); r(12,9,2,5,'#90a4ae');
  r(4,8,8,1,'#ffd54f');
  r(6,10,4,2,'#ffd54f');
  r(7,10,2,1,'#fff9c4');
  r(5,14,2,2,'#78909c'); r(9,14,2,2,'#78909c');
  r(3,15,10,1,'#546e7a');
  r(0,8,3,7,'#90a4ae');
  r(0,8,3,1,'#ffd54f'); r(0,14,3,1,'#ffd54f');
  r(1,10,1,2,'#ffd54f');
  r(14,1,2,13,'#c0c0c0');
  r(13,0,3,2,'#ffd54f');
  break;
  }
  default: {
  bg('#1a1a1a');
  r(5,3,6,6,'#e74c3c');
  r(6,5,1,1,'#fff'); r(9,5,1,1,'#fff');
  r(6,8,4,1,'#fff');
  }
  }
}
let xpData = {
  totalXP: 0,
  level: 1,
  xpThisLevel: 0,
  playerName: 'GUERREIRO',
  equippedAvatar: 'rookie_m',
  unlockedAvatars: ['rookie_m'],
  pendingLevelUp: false,
  equippedTitle: null,
  equippedBackground: null,
  unlockedBackgrounds: ['bg_default'],
};

// ── Lista de fundos disponíveis ─────────────────────────────────
// Para adicionar um fundo: preencha o campo 'img' com o caminho da imagem.
// Ex: img: 'assets/backgrounds/floresta.png'
// BACKGROUNDS definido em wallpapers.js

// desenharFundoNoCanvas — implementada em wallpapers.js

function aplicarFundoAvatar() {
  // O fundo agora é desenhado diretamente no canvas (via desenharFundoNoCanvas)
  // Esta função só limpa o background CSS do frame para evitar duplicação
  const frame = document.querySelector('.xp-avatar-frame');
  if (!frame) return;
  frame.style.backgroundImage = '';
}
function salvarXPPerfil() {
  const name = _$_('xp-name-input').value.trim();
  if(name) xpData.playerName = name.toUpperCase();
  localStorage.setItem('xpData', JSON.stringify(xpData));
  renderXPCard();
}
function carregarXP() {
  const d = JSON.parse(localStorage.getItem('xpData') || 'null');
  if(d) {
  xpData = {...xpData, ...d};
  if(!xpData.unlockedAvatars) xpData.unlockedAvatars = ['rookie_m'];
  ['rookie_m', 'rookie_f'].forEach(id => { if(!xpData.unlockedAvatars.includes(id)) xpData.unlockedAvatars.push(id); });
  if(!xpData.unlockedBackgrounds) xpData.unlockedBackgrounds = ['bg_default'];
  if(!xpData.unlockedBackgrounds.includes('bg_default')) xpData.unlockedBackgrounds.unshift('bg_default');
  if(xpData.equippedBackground === undefined) xpData.equippedBackground = null;
  if(xpData.equippedAvatar === 'warrior') xpData.equippedAvatar = 'rookie_m';
  if(!xpData.equippedAvatar) xpData.equippedAvatar = 'rookie_m';
  if(xpData.equippedTitle === undefined) xpData.equippedTitle = null;
  }
  _$_('xp-name-input').value = xpData.playerName || '';
  renderXPCard();
}
function getLevelData(lvl) {
  return LEVELS.find(l => l.lvl === lvl) || LEVELS[LEVELS.length-1];
}
function getNextLevelData(lvl) {
  return LEVELS.find(l => l.lvl === lvl+1) || null;
}
function renderXPCard() {
  const ld = getLevelData(xpData.level);
  const next = getNextLevelData(xpData.level);
  _$_('xp-player-name-display').textContent = xpData.playerName || 'SEU NOME';
  const displayTituloLvl = (xpData.equippedTitle !== null && xpData.equippedTitle !== undefined) ? xpData.equippedTitle : xpData.level;
  const displayTituloData = getLevelData(displayTituloLvl);
  // Detect gender from equipped avatar id (ends in _f or contains _f)
  const isFemAvatar = xpData.equippedAvatar && xpData.equippedAvatar.includes('_f');
  const tituloDisplay = isFemAvatar && displayTituloData.tituloF ? displayTituloData.tituloF : displayTituloData.titulo;
  _$_('xp-title-display').textContent = tituloDisplay;
  _$_('xp-level-display').textContent = `LVL ${xpData.level}`;
  const iconCanvas = _$_('xp-level-icon-canvas');
  if(iconCanvas) {
  const ictx = iconCanvas.getContext('2d');
  drawLevelIcon(ictx, xpData.level, 20);
  }
  let pct = 0, barLabel = '';
  if(next) {
  const xpProgress = xpData.totalXP;
  const xpCost = next.xpReq;
  pct = Math.max(0, Math.min(100, (xpProgress / xpCost) * 100));
  if(xpProgress >= xpCost) {
  barLabel = `${xpData.totalXP} XP — ▲ Pronto para upar!`;
  } else {
  barLabel = `${xpData.totalXP} / ${xpCost} XP para LVL ${next.lvl}`;
  }
  } else {
  pct = 100;
  barLabel = `${xpData.totalXP} XP — MAX LEVEL!`;
  }
  _$_('xp-bar').style.width = pct + '%';
  _$_('xp-bar-label').textContent = barLabel;
  const canvas = _$_('avatar-canvas');
  const SZ = 96;
  canvas.width = SZ; canvas.height = SZ;
  const ctx = canvas.getContext('2d');
  // desenharFundoNoCanvas desenha o fundo; se async (img real) chama drawAvatar no onload
  // Para fundo síncrono (gradiente), desenhamos a skin logo em seguida
  const bgId = xpData.equippedBackground;
  const bg = BACKGROUNDS.find(b => b.id === bgId);
  if (bg && bg.img) {
    // Assíncrono — desenharFundoNoCanvas cuida de tudo
    desenharFundoNoCanvas(ctx, bgId, SZ);
  } else {
    // Síncrono — fundo primeiro, skin em cima
    desenharFundoNoCanvas(ctx, bgId, SZ);
    drawAvatar(ctx, xpData.equippedAvatar, SZ);
  }
  aplicarFundoAvatar();
}
function mostrarXPGain(amount, positivo=true, label='') {
  const el = document.createElement('div');
  el.className = 'xp-gain-popup' + (positivo ? '' : ' xp-lose-popup');
  const sign = positivo ? '+' : '';
  el.textContent = `${sign}${amount} XP${label ? ' '+label : ''}`;
  const card = _$_('xp-player-card');
  const rect = card.getBoundingClientRect();
  el.style.left = (rect.left + rect.width/2 - 40 + Math.random()*60-30) + 'px';
  el.style.top  = (rect.top + window.scrollY + 20) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}
function ganharXP(amount, label='') {
  if(amount === 0) return;
  xpData.totalXP += amount;
  mostrarXPGain(amount, true, label);
  verificarLevelUp();
  localStorage.setItem('xpData', JSON.stringify(xpData));
  renderXPCard();
}
function perderXP(amount, label='') {
  if(amount === 0) return;
  xpData.totalXP -= amount;
  if(xpData.totalXP < 0) xpData.totalXP = 0;
  mostrarXPGain(amount, false, label);
  verificarLevelDown();
  localStorage.setItem('xpData', JSON.stringify(xpData));
  renderXPCard();
}
function verificarLevelDown() {
  if(xpData.level <= 1) return;
  const ld = getLevelData(xpData.level);
  const threshold = ld.xpReq - 15;
  if(xpData.totalXP < threshold) {
  const prevLevel = xpData.level - 1;
  xpData.level = prevLevel;
  if(xpData.equippedTitle !== null && xpData.equippedTitle > prevLevel) {
  xpData.equippedTitle = prevLevel;
  }
  localStorage.setItem('xpData', JSON.stringify(xpData));
  renderXPCard();
  const prevLd = getLevelData(prevLevel);
  _$_('leveldown-title').textContent = '▼ LEVEL DOWN!';
  _$_('leveldown-msg').textContent = 'Você voltou para "' + prevLd.titulo + '" (LVL ' + prevLevel + ')';
  const cvDown = _$_('leveldown-icon-canvas');
  if(cvDown) drawLevelIcon(cvDown.getContext('2d'), prevLevel, 48);
  abrirModal('modal-leveldown');
  setTimeout(verificarLevelDown, 400);
  }
}
function verificarLevelUp() {
  const next = getNextLevelData(xpData.level);
  if(!next) return;
  if(xpData.totalXP >= next.xpReq && !xpData.pendingLevelUp) {
  xpData.pendingLevelUp = true;
  setTimeout(() => mostrarModalLevelUp(next), 800);
  }
}
function tentarUparNivel() {
  const next = getNextLevelData(xpData.level);
  if(!next) { showToast('Você já está no nível máximo!', 'amber', 2500); return; }
  if(xpData.totalXP < next.xpReq) {
  const falta = next.xpReq - xpData.totalXP;
  showToast('[X] XP insuficiente! Faltam <b>' + falta + ' XP</b> para o nível ' + next.lvl + '.', 'red', 3000);
  return;
  }
  mostrarModalLevelUp(next);
}
function mostrarModalLevelUp(nextLevel) {
  _$_('levelup-title').textContent = 'LEVEL ' + nextLevel.lvl + '!';
  const _isFemForLvlup = xpData.equippedAvatar && xpData.equippedAvatar.includes('_f');
  _$_('levelup-msg').textContent = 'Você se tornará um "' + (_isFemForLvlup && nextLevel.tituloF ? nextLevel.tituloF : nextLevel.titulo) + '" por ' + nextLevel.xpReq + ' XP!';
  const cvIcon = _$_('levelup-icon-canvas');
  if(cvIcon) drawLevelIcon(cvIcon.getContext('2d'), nextLevel.lvl, 48);
  abrirModal('modal-levelup');
}
function confirmarLevelUp() {
  const next = getNextLevelData(xpData.level);
  if(!next) { fecharModal('modal-levelup'); return; }
  if(xpData.totalXP < next.xpReq) {
  showToast('XP insuficiente para evoluir!', 'red', 3000);
  fecharModal('modal-levelup');
  return;
  }
  xpData.totalXP -= next.xpReq;
  if(xpData.totalXP < 0) xpData.totalXP = 0;
  xpData.level = next.lvl;
  xpData.pendingLevelUp = false;
  const audio = _$_('victory-audio');
  if(audio) { audio.currentTime = 0; audio.play().catch(()=>{}); }
  const _lvlupIcon = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJub25lIj48cmVjdCB4PSI3IiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSI5IiBmaWxsPSIjZmZkNTRmIi8+PHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2ZmZDU0ZiIvPjxyZWN0IHg9IjkiIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmQ1NGYiLz48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZkNTRmIi8+PHJlY3QgeD0iMTEiIHk9IjMiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmQ1NGYiLz48cmVjdCB4PSI1IiB5PSIxIiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZkNTRmIi8+PHJlY3QgeD0iNyIgeT0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2ZmZjk3YiIvPjwvc3ZnPg==" style="vertical-align:middle;width:14px;height:14px;image-rendering:pixelated;margin-right:4px">';
  showToast(_lvlupIcon + '<b>LEVEL UP!</b> Você evoluiu para o n\u00edvel <b style="color:var(--amber-l)">' + next.lvl + '</b>! Seu novo t\u00edtulo \u00e9: <span style="color:var(--amber-l)">' + (isFemAvatar && next.tituloF ? next.tituloF : next.titulo) + '</span>', 'amber', 5000);
  localStorage.setItem('xpData', JSON.stringify(xpData));
  renderXPCard();
  fecharModal('modal-levelup');
  // Re-render levels modal if it's open
  if(_$_('modal-levels') && _$_('modal-levels').classList.contains('ativo')) {
    const body = _$_('levels-modal-body');
    if(body) {
      const hic = _$_('levels-header-icon');
      if(hic) drawLevelIcon(hic.getContext('2d'), xpData.level, 32);
      body.innerHTML = '';
      const btnUp = _$_('btn-upar-nivel');
      LEVELS.forEach(ld => {
        const unlocked = xpData.level >= ld.lvl;
        const isCurrent = xpData.level === ld.lvl;
        const currentTituloLvl = xpData.equippedTitle !== null ? xpData.equippedTitle : xpData.level;
        const isEquippedTitle = unlocked && ld.lvl === currentTituloLvl;
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 12px;margin-bottom:4px;background:' + (isCurrent ? 'rgba(243,156,18,.1)' : unlocked ? 'rgba(46,204,113,.05)' : 'rgba(0,0,0,.2)') + ';border:1px solid ' + (isCurrent ? 'var(--amber)' : unlocked ? 'rgba(46,204,113,.2)' : 'var(--line)') + ';border-radius:2px;cursor:' + (unlocked ? 'default' : 'default') + ';';
        const ic = document.createElement('canvas'); ic.width=32; ic.height=32;
        ic.style.cssText='image-rendering:pixelated;flex-shrink:0';
        if(unlocked) drawLevelIcon(ic.getContext('2d'), ld.lvl, 32);
        else { const x=ic.getContext('2d'); x.fillStyle='#2a2a2a'; x.fillRect(0,0,32,32); x.fillStyle='#1a1a1a'; x.fillRect(13,8,10,12); x.fillRect(10,14,16,12); }
        row.appendChild(ic);
        const info = document.createElement('div'); info.style.cssText='flex:1;min-width:0;';
        const title = document.createElement('div');
        title.style.cssText = 'font-family:var(--font-pixel);font-size:.42rem;letter-spacing:.06em;color:' + (isCurrent ? 'var(--amber-l)' : unlocked ? 'var(--ink)' : '#3a3a3a') + ';margin-bottom:4px;';
        title.textContent = unlocked ? 'LVL ' + ld.lvl + ' — ' + ld.titulo : 'LVL ' + ld.lvl + ' — ????';
        info.appendChild(title);
        const sub = document.createElement('div');
        sub.style.cssText = 'font-family:var(--font-vt);font-size:.85rem;color:var(--ink-m);';
        if(isCurrent) sub.innerHTML = '<span style="color:var(--amber-l)">▶ Nível atual — ' + xpData.totalXP + ' XP acumulados</span>';
        else if(unlocked) sub.innerHTML = '<span style="color:var(--green-l)">✓ Desbloqueado</span>';
        else { const xpFalta = ld.xpReq - xpData.totalXP; sub.innerHTML = '<span style="color:#444">Requer ' + ld.xpReq + ' XP — faltam ' + (xpFalta > 0 ? xpFalta + ' XP' : '0 XP') + '</span>'; }
        info.appendChild(sub);
        row.appendChild(info);
        const badge = document.createElement('div');
        badge.style.cssText = 'font-family:var(--font-pixel);font-size:.32rem;padding:3px 6px;border:1px solid;border-radius:2px;';
        const isEqT = unlocked && ld.lvl === currentTituloLvl;
        badge.textContent = isEqT ? '⚔ EQUIPADO' : isCurrent ? '◄ ATUAL' : unlocked ? '✓ ATINGIDO' : '[X]';
        if(isEqT) badge.style.background='rgba(255,215,0,.15)', badge.style.borderColor='#ffd54f', badge.style.color='#ffd54f';
        else if(isCurrent) badge.style.background='rgba(243,156,18,.1)', badge.style.borderColor='var(--amber)', badge.style.color='var(--amber-l)';
        else if(unlocked) badge.style.background='rgba(46,204,113,.08)', badge.style.borderColor='rgba(46,204,113,.3)', badge.style.color='var(--green-l)';
        else badge.style.background='rgba(0,0,0,.2)', badge.style.borderColor='var(--line)', badge.style.color='#444';
        row.appendChild(badge);
        body.appendChild(row);
      });
      if(btnUp) {
        const next = getNextLevelData(xpData.level);
        btnUp.disabled = !next || xpData.totalXP < (next ? next.xpReq : Infinity);
        btnUp.style.opacity = btnUp.disabled ? '.4' : '1';
      }
    }
  }
}
function lojaTab(tab) {
  const isSkins = tab === 'skins';
  _$_('loja-panel-skins').style.display = isSkins ? '' : 'none';
  _$_('loja-panel-wallpapers').style.display = isSkins ? 'none' : '';
  const tSkins = _$_('loja-tab-skins');
  const tWall = _$_('loja-tab-wallpapers');
  if (tSkins) {
    tSkins.style.borderBottomColor = isSkins ? 'var(--amber)' : 'transparent';
    tSkins.style.background = isSkins ? 'var(--card)' : 'transparent';
    tSkins.style.color = isSkins ? 'var(--amber-l)' : 'var(--ink-f)';
  }
  if (tWall) {
    tWall.style.borderBottomColor = !isSkins ? 'var(--amber)' : 'transparent';
    tWall.style.background = !isSkins ? 'var(--card)' : 'transparent';
    tWall.style.color = !isSkins ? 'var(--amber-l)' : 'var(--ink-f)';
  }
  if (isSkins) renderAvatarGrid();
  else { renderBackgroundGrid(); }
  _$_('shop-xp-display').textContent = xpData.totalXP;
}
function abrirAvatarShop(aba) {
  _$_('shop-xp-display').textContent = xpData.totalXP;
  abrirModal('modal-avatar-shop');
  lojaTab(aba || 'skins');
}
function abrirBackgroundShop() {
  abrirAvatarShop('wallpapers');
}

function renderBackgroundGrid() {
  const grid = _$_('background-grid');
  grid.innerHTML = '';
  BACKGROUNDS.forEach(bg => {
    const isUnlocked = xpData.unlockedBackgrounds.includes(bg.id);
    const isEquipped = xpData.equippedBackground === bg.id || (bg.id === 'bg_default' && !xpData.equippedBackground);
    const lvlOk = xpData.level >= bg.lvlMin;
    const canAfford = xpData.totalXP >= bg.custo;
    const locked = !isUnlocked && (!lvlOk || !canAfford);
    const item = document.createElement('div');
    item.className = 'avatar-item' + (isEquipped ? ' equipped' : '') + (locked ? ' locked' : '');
    item.style.position = 'relative';
    // Preview do fundo
    const preview = document.createElement('div');
    preview.style.cssText = 'width:56px;height:56px;margin:0 auto 6px;border-radius:2px;border:1px solid var(--line-s);display:flex;align-items:center;justify-content:center;font-size:1.4rem;overflow:hidden;';
    if (bg.img) {
      preview.style.backgroundImage = 'url("' + bg.img + '")';
      preview.style.backgroundSize = 'cover';
      preview.style.backgroundPosition = 'center';
      preview.textContent = '';
    } else if (bg.id === 'bg_default') {
      preview.style.background = 'var(--surface)';
      preview.innerHTML = '<span style="font-size:.45rem;font-family:var(--font-pixel);color:var(--ink-f)">DEF</span>';
    } else {
      const placeholders = { bg_dungeon:'linear-gradient(135deg,#2d1a08,#0d0a06)', bg_arena:'linear-gradient(135deg,#3d0e0e,#0d0505)', bg_forest:'linear-gradient(135deg,#0e3d14,#050d07)', bg_volcano:'linear-gradient(135deg,#7a2e00,#1a0800)', bg_sky:'linear-gradient(135deg,#1a3d7a,#050d1a)', bg_void:'linear-gradient(135deg,#1a0a3d,#050208)', bg_olympus:'linear-gradient(135deg,#7a6200,#1a1500)' };
      preview.style.background = placeholders[bg.id] || 'var(--surface)';
      preview.innerHTML = '<span style="font-size:.5rem">🖼</span>';
    }
    if (locked) {
      preview.style.filter = 'brightness(0.3) grayscale(1)';
    }
    const name = document.createElement('span');
    name.className = 'av-name';
    name.textContent = bg.nome;
    const cost = document.createElement('span');
    cost.className = 'av-cost';
    cost.textContent = bg.custo === 0 ? 'GRÁTIS' : bg.custo + ' XP';
    const desc = document.createElement('span');
    desc.style.cssText = 'font-family:var(--font-vt);font-size:.72rem;color:var(--ink-f);display:block;margin-top:2px;line-height:1.3';
    desc.textContent = bg.desc;
    if (!lvlOk && !isUnlocked) {
      const lvlReq = document.createElement('span');
      lvlReq.className = 'av-lvlreq';
      lvlReq.textContent = 'LVL ' + bg.lvlMin + ' req.';
      item.appendChild(preview); item.appendChild(name); item.appendChild(cost); item.appendChild(lvlReq);
    } else {
      item.appendChild(preview); item.appendChild(name); item.appendChild(cost); item.appendChild(desc);
    }
    if (isEquipped) {
      const eq = document.createElement('span');
      eq.style.cssText = 'position:absolute;top:3px;right:5px;font-family:var(--font-pixel);font-size:.28rem;color:var(--green-l)';
      eq.textContent = '✓';
      item.appendChild(eq);
    }
    item.addEventListener('click', () => {
      if (locked) { showToast('Nível ou XP insuficiente!', 'red', 2500); return; }
      if (isEquipped) return;
      if (!isUnlocked) {
        // Comprar
        if (!canAfford) { showToast('XP insuficiente!', 'red', 2500); return; }
        if (confirm('Comprar fundo "' + bg.nome + '" por ' + bg.custo + ' XP?')) {
          xpData.totalXP = Math.max(0, xpData.totalXP - bg.custo);
          xpData.unlockedBackgrounds.push(bg.id);
          xpData.equippedBackground = bg.id;
          localStorage.setItem('xpData', JSON.stringify(xpData));
          aplicarFundoAvatar();
          renderXPCard();
          renderBackgroundGrid();
          _$_('shop-xp-display').textContent = xpData.totalXP;
          showToast('Fundo equipado: <b>' + bg.nome + '</b>!', 'amber', 3000);
        }
      } else {
        // Equipar
        xpData.equippedBackground = bg.id === 'bg_default' ? null : bg.id;
        localStorage.setItem('xpData', JSON.stringify(xpData));
        aplicarFundoAvatar();
        renderXPCard();
        renderBackgroundGrid();
        showToast('Fundo: <b>' + bg.nome + '</b>!', 'amber', 2000);
        setTimeout(() => fecharModal('modal-avatar-shop'), 500);
      }
    });
    grid.appendChild(item);
  });
}

function mostrarModalSkin(av, acao) {
  const wrap = _$_('skin-confirm-canvas-wrap');
  wrap.innerHTML = '';
  const cv = document.createElement('canvas');
  cv.width = 72; cv.height = 72;
  cv.style.cssText = 'image-rendering:pixelated;width:72px;height:72px;display:block';
  wrap.appendChild(cv);
  if(xpData.unlockedAvatars.includes(av.id)) {
  drawAvatar(cv.getContext('2d'), av.id, 72);
  } else {
  drawAvatarSilhouette(cv.getContext('2d'), av.id, 72);
  }
  const title = _$_('skin-confirm-title');
  const msg = _$_('skin-confirm-msg');
  if(acao === 'comprar') {
  title.textContent = 'COMPRAR SKIN';
  msg.innerHTML = 'Deseja comprar a skin:<br><b style="color:var(--amber-l)">' + av.nome + '</b><br>por <b style="color:var(--amber-l)">' + av.custo + ' XP</b>?';
  } else {
  title.textContent = 'EQUIPAR SKIN';
  msg.innerHTML = 'Deseja equipar a skin:<br><b style="color:var(--amber-l)">' + av.nome + '</b>?';
  }
  _$_('skin-confirm-yes').onclick = () => {
  fecharModal('modal-skin-confirm');
  if(acao === 'comprar') executarComprarSkin(av);
  else executarEquiparSkin(av);
  };
  abrirModal('modal-skin-confirm');
}
const _EQUIP_ICON_B64 = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJub25lIj48cmVjdCB4PSIxIiB5PSI1IiB3aWR0aD0iMTQiIGhlaWdodD0iNiIgZmlsbD0iI2Y5YTgyNSIvPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxMCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZkNTRmIi8+PHJlY3QgeD0iNSIgeT0iMSIgd2lkdGg9IjYiIGhlaWdodD0iMyIgZmlsbD0iI2ZmZjk3YiIvPjxyZWN0IHg9IjYiIHk9IjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmY5N2IiLz48cmVjdCB4PSI0IiB5PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSI0IiBmaWxsPSIjYWQ3ZjI2Ii8+PHJlY3QgeD0iMTAiIHk9IjkiIHdpZHRoPSIyIiBoZWlnaHQ9IjQiIGZpbGw9IiNhZDdmMjYiLz48L3N2Zz4=" style="vertical-align:middle;width:14px;height:14px;image-rendering:pixelated;margin-right:4px">';
function executarComprarSkin(av) {
  xpData.totalXP = Math.max(0, xpData.totalXP - av.custo);
  xpData.unlockedAvatars.push(av.id);
  xpData.equippedAvatar = av.id;
  localStorage.setItem('xpData', JSON.stringify(xpData));
  _$_('shop-xp-display').textContent = xpData.totalXP;
  renderXPCard();
  renderAvatarGrid();
  showToast('Skin equipada: <b>' + av.nome + '</b>!', 'amber', 3000);
  setTimeout(() => fecharModal('modal-avatar-shop'), 600);
}
function executarEquiparSkin(av) {
  xpData.equippedAvatar = av.id;
  localStorage.setItem('xpData', JSON.stringify(xpData));
  renderXPCard();
  renderAvatarGrid();
  showToast('Skin equipada: <b>' + av.nome + '</b>!', 'amber', 2000);
  setTimeout(() => fecharModal('modal-avatar-shop'), 600);
}
function abrirEquiparTitulo() {
  const list = _$_('title-list');
  list.innerHTML = '';
  const currentTituloLvl = (xpData.equippedTitle !== null && xpData.equippedTitle !== undefined) ? xpData.equippedTitle : xpData.level;
  LEVELS.forEach(ld => {
  if(ld.lvl > xpData.level) return;
  const btn = document.createElement('button');
  const isActive = ld.lvl === currentTituloLvl;
  btn.style.cssText = 'font-family:var(--font-pixel);font-size:.38rem;padding:8px 12px;text-align:left;background:' + (isActive ? 'rgba(46,204,113,.15)' : 'rgba(255,255,255,.04)') + ';border:1px solid ' + (isActive ? 'var(--green-l)' : 'var(--line-s)') + ';border-radius:6px;color:' + (isActive ? 'var(--green-l)' : 'var(--ink-m)') + ';cursor:pointer;transition:all .15s;width:100%';
  btn.innerHTML = 'LVL ' + ld.lvl + ' \u2014 <span style="color:var(--amber-l)">' + ld.titulo + '</span>' + (isActive ? ' <span style="color:var(--green-l)">\u2713</span>' : '');
  btn.addEventListener('click', () => {
  xpData.equippedTitle = ld.lvl;
  localStorage.setItem('xpData', JSON.stringify(xpData));
  renderXPCard();
  fecharModal('modal-title-equip');
  showToast('Título equipado: <b>' + ld.titulo + '</b>', 'amber', 2500);
  });
  list.appendChild(btn);
  });
  abrirModal('modal-title-equip');
}
function drawAvatarSilhouette(ctx, id, size) {
  const tmpC = document.createElement('canvas');
  tmpC.width = size; tmpC.height = size;
  drawAvatar(tmpC.getContext('2d'), id, size);
  ctx.clearRect(0, 0, size, size);
  ctx.drawImage(tmpC, 0, 0);
  ctx.globalCompositeOperation = 'source-atop';
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'source-over';
}
function renderAvatarGrid() {
  const grid = _$_('avatar-grid');
  grid.innerHTML = '';
  const byLevel = {};
  AVATARS.forEach(av => {
  if(!byLevel[av.lvlMin]) byLevel[av.lvlMin] = [];
  byLevel[av.lvlMin].push(av);
  });
  Object.keys(byLevel).sort((a,b)=>+a-+b).forEach(lvl => {
  const levelUnlocked = xpData.level >= +lvl;
  const hdr = document.createElement('div');
  hdr.style.cssText = 'grid-column:1/-1;font-family:var(--font-pixel);font-size:.3rem;color:var(--amber-l);letter-spacing:.08em;padding:6px 0 2px;border-bottom:1px solid var(--line-s);margin-bottom:4px';
  if(levelUnlocked) {
  const ldh = getLevelData(+lvl);
  hdr.textContent = 'LVL ' + lvl + ' \u2014 ' + ldh.titulo + ' \u2713';
  } else {
  hdr.textContent = 'LVL ' + lvl + ' \u2014 \u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588 \ud83d\udd12';
  hdr.style.color = 'var(--ink-m)';
  }
  grid.appendChild(hdr);
  byLevel[lvl].forEach(av => {
  const item = document.createElement('div');
  const isUnlocked = xpData.unlockedAvatars.includes(av.id);
  const isEquipped = xpData.equippedAvatar === av.id;
  const lvlOk = xpData.level >= av.lvlMin;
  const canAfford = xpData.totalXP >= av.custo;
  const _cantBuy = !isUnlocked && (!canAfford || !lvlOk);
item.className = 'avatar-item' + (isEquipped ? ' equipped' : '') + (_cantBuy ? ' locked' : '');
  item.style.position = 'relative';
  const canvas = document.createElement('canvas');
  canvas.width = 56; canvas.height = 56;
  canvas.style.cssText = 'image-rendering:pixelated;display:block;margin:0 auto 6px;width:56px;height:56px';
  const ctx2 = canvas.getContext('2d');
  if(isUnlocked) {
    drawAvatar(ctx2, av.id, 56);
  } else {
    drawAvatar(ctx2, av.id, 56);
    const imgData = ctx2.getImageData(0, 0, 56, 56);
    const d = imgData.data;
    for(let i = 0; i < d.length; i += 4) {
      if(d[i+3] > 10) { d[i]=0; d[i+1]=0; d[i+2]=0; d[i+3]=200; }
    }
    ctx2.putImageData(imgData, 0, 0);
  }
  item.appendChild(canvas);
  const nameEl = document.createElement('span');
  nameEl.className = 'av-name';
  if(isUnlocked) {
    nameEl.textContent = av.nome;
  } else {
    nameEl.textContent = av.nome;
    nameEl.style.color = 'var(--ink-m)';
  }
  item.appendChild(nameEl);
  if(!isUnlocked) {
    const lock = document.createElement('span');
    lock.className = 'av-lock';
    lock.textContent = !lvlOk ? '\ud83d\udd12' : (!canAfford ? '\ud83d\udcb8' : '\ud83e\ude99');
    item.appendChild(lock);
    const cost = document.createElement('span');
    cost.className = 'av-cost';
    cost.style.color = canAfford && lvlOk ? 'var(--green-l)' : 'var(--red-l)';
    cost.textContent = av.custo === 0 ? 'Grátis' : av.custo + ' XP';
    item.appendChild(cost);
    item.addEventListener('click', () => {
      if(!lvlOk) { showToast('Requer Level ' + av.lvlMin + '!', 'red', 3000); return; }
      if(av.custo > 0 && !canAfford) { showToast('XP insuficiente! Precisa de ' + av.custo + ' XP (voc\u00ea tem ' + xpData.totalXP + ').', 'red', 3000); return; }
      if(av.custo === 0) { executarComprarSkin(av); }
      else { mostrarModalSkin(av, 'comprar'); }
    });
  } else {
    const eq = document.createElement('span');
    eq.className = 'av-cost';
    eq.style.color = isEquipped ? 'var(--green-l)' : 'var(--ink-m)';
    eq.textContent = isEquipped ? '\u2713 Equipado' : (av.custo === 0 ? 'Grátis' : av.custo + ' XP');
    item.appendChild(eq);
    if(!isEquipped) {
      item.addEventListener('click', () => mostrarModalSkin(av, 'equipar'));
    }
  }
  grid.appendChild(item);
  });
  });
}
function drawLevelIcon(ctx, lvl, size=20) {
  ctx.clearRect(0,0,size,size);
  const s = size/10;
  const r = (x,y,w,h,c) => { ctx.fillStyle=c; ctx.fillRect(x*s,y*s,w*s,h*s); };
  const themes = {
  1:  ()=>{ r(3,2,4,4,'#a0a0a0'); r(4,2,2,1,'#d0d0d0'); r(3,6,1,3,'#777'); r(6,6,1,3,'#777'); r(2,9,6,1,'#555'); },
  2:  ()=>{ r(3,2,4,3,'#f5c6a0'); r(2,3,2,3,'#e8803a'); r(6,3,2,3,'#e8803a'); r(3,5,4,5,'#e74c3c'); r(4,9,1,1,'#555'); r(5,9,1,1,'#555'); },
  3:  ()=>{ r(2,1,6,2,'#c0392b'); r(1,0,2,2,'#922b21'); r(7,0,2,2,'#922b21'); r(3,3,4,3,'#e8c49a'); r(2,6,6,4,'#c0392b'); r(3,5,4,1,'#e74c3c'); r(4,9,2,1,'#555'); },
  4:  ()=>{ r(3,1,4,3,'#1abc9c'); r(4,0,2,2,'#16a085'); r(2,4,6,5,'#1abc9c'); r(4,4,2,1,'#f39c12'); r(3,8,1,2,'#1abc9c'); r(6,8,1,2,'#1abc9c'); },
  5:  ()=>{ r(4,0,2,4,'#3498db'); r(3,0,4,2,'#2980b9'); r(7,0,2,2,'#ffd54f'); r(3,4,4,5,'#2980b9'); r(2,5,2,3,'#1a5276'); r(6,5,2,3,'#1a5276'); r(4,8,2,2,'#ffd54f'); },
  6:  ()=>{ r(2,1,6,4,'#2d6a2d'); r(1,2,2,3,'#27ae60'); r(7,2,2,3,'#27ae60'); r(4,3,1,1,'#e74c3c'); r(5,3,1,1,'#e74c3c'); r(3,5,1,2,'#f5f5f5'); r(6,5,1,2,'#f5f5f5'); r(2,5,6,5,'#8b3a3a'); },
  7:  ()=>{ r(1,1,8,4,'#27ae60'); r(0,2,2,3,'#1e8449'); r(8,2,2,3,'#1e8449'); r(3,3,1,1,'#e74c3c'); r(6,3,1,1,'#e74c3c'); r(3,5,1,2,'#fffde7'); r(5,5,2,2,'#fffde7'); r(1,5,8,5,'#c0392b'); r(3,8,1,2,'#27ae60'); r(6,8,1,2,'#27ae60'); },
  8:  ()=>{ r(0,1,4,4,'#333'); r(3,1,4,4,'#1a1a1a'); r(6,1,4,4,'#333'); r(1,2,2,1,'#e53935'); r(4,2,2,1,'#e53935'); r(7,2,2,1,'#e53935'); r(1,5,8,5,'#212121'); r(3,9,2,1,'#e53935'); r(5,9,2,1,'#e53935'); },
  9:  ()=>{ r(1,1,8,4,'#c62828'); r(0,0,2,3,'#922b21'); r(2,0,2,2,'#922b21'); r(6,0,2,2,'#922b21'); r(8,0,2,3,'#922b21'); r(3,3,1,1,'#ffd54f'); r(6,3,1,1,'#ffd54f'); r(1,5,8,5,'#c62828'); r(0,6,2,4,'#e53935'); r(8,6,2,4,'#e53935'); r(2,9,6,1,'#b71c1c'); },
 10:  ()=>{ r(3,0,4,1,'#ffd54f'); r(2,0,2,1,'#ffd54f'); r(6,0,2,1,'#ffd54f'); r(1,0,2,2,'#ffd54f'); r(7,0,2,2,'#ffd54f'); r(3,1,4,3,'#fff9c4'); r(3,4,1,1,'#e65100'); r(6,4,1,1,'#e65100'); r(2,5,6,4,'#ffd54f'); r(1,6,2,4,'#f9a825'); r(7,6,2,4,'#f9a825'); r(3,8,4,2,'#ffd54f'); },
  };
  (themes[lvl] || themes[1])();
}
function abrirModalLevels() {
  const body = _$_('levels-modal-body');
  body.innerHTML = '';
  const hic = _$_('levels-header-icon');
  if(hic) drawLevelIcon(hic.getContext('2d'), xpData.level, 32);
  LEVELS.forEach(ld => {
  const unlocked = xpData.level >= ld.lvl;
  const isCurrent = xpData.level === ld.lvl;
  const row = document.createElement('div');
  row.style.cssText = `display:flex;align-items:center;gap:16px;padding:12px 14px;margin-bottom:8px;border:1px solid ${isCurrent?'var(--amber)':unlocked?'var(--line-s)':'var(--line)'};border-radius:3px;background:${isCurrent?'rgba(230,126,34,.12)':unlocked?'var(--surface)':'#0a0a0a'};transition:all .2s;`;
  const ic = document.createElement('canvas');
  ic.width=36; ic.height=36; ic.style.cssText='image-rendering:pixelated;flex-shrink:0;';
  if(unlocked) { drawLevelIcon(ic.getContext('2d'), ld.lvl, 36); }
  else {
  const x=ic.getContext('2d');
  x.fillStyle='#111';x.fillRect(0,0,36,36);
  x.fillStyle='#2a2a2a';x.fillRect(13,8,10,12);x.fillRect(10,14,16,12);
  x.fillStyle='#1a1a1a';x.fillRect(15,11,6,5);
  }
  row.appendChild(ic);
  const info = document.createElement('div');
  info.style.cssText = 'flex:1;min-width:0;';
  const title = document.createElement('div');
  title.style.cssText = `font-family:var(--font-pixel);font-size:.42rem;letter-spacing:.06em;color:${isCurrent?'var(--amber-l)':unlocked?'var(--ink)':'#3a3a3a'};margin-bottom:4px;`;
  title.textContent = unlocked ? `LVL ${ld.lvl} — ${ld.titulo}` : `LVL ${ld.lvl} — ????`;
  info.appendChild(title);
  const sub = document.createElement('div');
  sub.style.cssText = `font-family:var(--font-vt);font-size:.92rem;color:${unlocked?'var(--ink-m)':'#333'};`;
  if(unlocked) {
  if(isCurrent) {
    const nextLd = LEVELS.find(l => l.lvl === ld.lvl + 1);
    if(nextLd) {
      const xpFalta = nextLd.xpReq - xpData.totalXP;
      if(xpFalta > 0) {
        sub.innerHTML = `<span style="color:var(--amber-l)">${xpData.totalXP} XP</span> — faltam <span style="color:var(--red-l)">${xpFalta} XP</span> para LVL ${nextLd.lvl} (custo: ${nextLd.xpReq} XP)`;
      } else {
        sub.innerHTML = `<span style="color:var(--green-l)">✓ Pronto para upar! Clique em "Upar de Nível"</span>`;
      }
    } else {
      sub.innerHTML = `<span style="color:var(--green-l)">${xpData.totalXP} XP — Nível máximo!</span>`;
    }
  } else {
    sub.textContent = `Atingido — ${ld.xpReq} XP gastos`;
  }
  } else {
  const xpFalta = ld.xpReq - xpData.totalXP;
  sub.innerHTML = `<span style="color:#444">Requer ${ld.xpReq} XP — faltam ${xpFalta > 0 ? xpFalta + ' XP' : '0 XP'}</span>`;
  }
  info.appendChild(sub);
  row.appendChild(info);
  const badge = document.createElement('div');
  badge.style.cssText = `font-family:var(--font-pixel);font-size:.3rem;padding:4px 10px;border-radius:2px;flex-shrink:0;${isCurrent?'background:rgba(230,126,34,.2);border:1px solid var(--amber);color:var(--amber-l);':unlocked?'background:rgba(46,204,113,.1);border:1px solid var(--green-l);color:var(--green-l);':'background:#111;border:1px solid #333;color:#444;'}`;
  const currentTituloLvl = (xpData.equippedTitle !== null && xpData.equippedTitle !== undefined) ? xpData.equippedTitle : xpData.level;
  const isEquippedTitle = unlocked && ld.lvl === currentTituloLvl;
  badge.textContent = isEquippedTitle ? '⚔ EQUIPADO' : isCurrent ? '◄ ATUAL' : unlocked ? '✓ ATINGIDO' : '[X]';
  if(isEquippedTitle) badge.style.background = 'rgba(255,215,0,.15)', badge.style.borderColor = '#ffd54f', badge.style.color = '#ffd54f';
  row.appendChild(badge);
  if(unlocked) {
  row.style.cursor = 'pointer';
  row.title = 'Clique para equipar este título';
  row.addEventListener('click', () => {
    xpData.equippedTitle = ld.lvl;
    localStorage.setItem('xpData', JSON.stringify(xpData));
    renderXPCard();
    abrirModalLevels();
    showToast('Título equipado: <b>' + ld.titulo + '</b>', 'amber', 2500);
  });
  }
  body.appendChild(row);
  });
  abrirModal('modal-levels');
}
function aplicarXPDebug() {
  const val = parseInt(_$_('xp-debug-input').value, 10);
  if(isNaN(val)) return;
  if(val > 0) ganharXP(val, 'DEBUG');
  else if(val < 0) perderXP(Math.abs(val), 'DEBUG');
  _$_('xp-debug-input').value = '';
}
carregarXP();

/* ============================================================ */

document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("._i0").forEach(e=>{e.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTc0YzNjIi8+CiAgPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSI3IiB5PSI3IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTc0YzNjIi8+CiAgPHJlY3QgeD0iOSIgeT0iOSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjExIiB5PSIxMSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjEzIiB5PSIxMyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjExIiB5PSIxIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTc0YzNjIi8+CiAgPHJlY3QgeD0iOSIgeT0iMyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjciIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNzRjM2MiLz4gPCEtLSBjZW50cm8gZHVwbGljYWRvIC0tPgogIDxyZWN0IHg9IjUiIHk9IjciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSIzIiB5PSI5IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZTc0YzNjIi8+CiAgPHJlY3QgeD0iMSIgeT0iMTEiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNlNzRjM2MiLz4KPC9zdmc+";e.setAttribute("style","vertical-align:middle")});document.querySelectorAll("._i1").forEach(e=>{e.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSI3IiB5PSIyIiB3aWR0aD0iMiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzJlY2M3MSIvPgogIDxyZWN0IHg9IjIiIHk9IjciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMmVjYzcxIi8+Cjwvc3ZnPg==";e.setAttribute("style","vertical-align:middle")});document.querySelectorAll("._i2").forEach(e=>{e.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJub25lIj4KICA8cmVjdCB4PSIyIiB5PSIxIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0iI2U3NGMzYyIvPgogIDxyZWN0IHg9IjUiIHk9IjAiIHdpZHRoPSI2IiBoZWlnaHQ9IjIiIGZpbGw9IiNjMDM5MmIiLz4KICA8cmVjdCB4PSIyIiB5PSIzIiB3aWR0aD0iMTIiIGhlaWdodD0iMTEiIGZpbGw9IiM3YjFhMWEiLz4KICA8cmVjdCB4PSIzIiB5PSI0IiB3aWR0aD0iMTAiIGhlaWdodD0iOSIgZmlsbD0iIzZiMTUxNSIvPgogIDwhLS0gbGluaGFzIGludGVybmFzIC0tPgogIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjYiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSI4IiB5PSI1IiB3aWR0aD0iMSIgaGVpZ2h0PSI2IiBmaWxsPSIjZTc0YzNjIi8+CiAgPHJlY3QgeD0iMTEiIHk9IjUiIHdpZHRoPSIxIiBoZWlnaHQ9IjYiIGZpbGw9IiNlNzRjM2MiLz4KPC9zdmc+";e.setAttribute("style","vertical-align:middle")});});

/* ============================================================ */


(function(){
  const TUT_KEY = 'mq_tutorial_done';
  const TUT_SKIP_KEY = 'mq_tutorial_skip';
  // Show tutorial prompt on every load UNLESS user checked "não perguntar novamente"
  if(!localStorage.getItem(TUT_SKIP_KEY)) {
    document.getElementById('tut-overlay').style.display = 'block';
  }

  const STEPS = [
    {
      id: 'sec-imc',
      title: 'SEU PERFIL',
      text: 'Comece preenchendo seu <b>peso, altura, idade e sexo</b>. O app vai calcular seu gasto energético (TDEE) e gerar sua meta de macros automaticamente.',
      pos: 'bottom'
    },
    {
      id: 'input-atividade',
      title: 'NÍVEL DE ATIVIDADE',
      text: 'Escolha seu nível de atividade física. <b>Atividade maior = mais calorias</b>. Seja honesto — isso impacta diretamente nos seus macros!',
      pos: 'bottom'
    },
    {
      id: 'obj-grid',
      title: 'OBJETIVO',
      text: 'Selecione seu objetivo: <b>Musculação, Emagrecimento, Esporte</b> etc. Cada um ajusta os macros de forma diferente — proteína, carbo e gordura se adaptam.',
      pos: 'bottom'
    },
    {
      id: 'goal-btns',
      title: 'META',
      text: 'Escolha se quer <b>Perder Peso, Manter</b> ou <b>Ganhar Massa</b>. Isso vai ajustar o déficit ou superávit calórico dos seus macros.',
      pos: 'bottom'
    },
    {
      id: 'sec-refeicoes',
      title: 'TABELA DE REFEIÇÕES',
      text: 'Aqui ficam suas refeições do dia. Cada linha é uma refeição. Você pode ajustar as <b>quantidades de calorias por refeição</b> direto na tabela.',
      pos: 'top'
    },
    {
      id: 'btn-adicionar',
      title: 'ADICIONAR ALIMENTOS',
      text: 'Clique em <b>Adicionar</b> para buscar um alimento e registrar o que você comeu em qual refeição. O app calcula os macros automaticamente.',
      pos: 'top'
    },
    {
      id: 'btn-distribuir',
      title: 'DISTRIBUIR MACROS',
      text: 'Clique em <b>Distribuir Macros</b> para dividir automaticamente suas metas de proteína, carbo e gordura entre todas as refeições do dia.',
      pos: 'top'
    },
    {
      id: 'btn-gerenciar',
      title: 'GERENCIAR REFEIÇÕES',
      text: 'Em <b>Gerenciar</b> você pode renomear, criar, reordenar ou excluir suas refeições. Arraste pelo ícone para mudar a ordem.',
      pos: 'top'
    },
    {
      id: 'sec-agua',
      title: 'HIDRATAÇÃO',
      text: 'Registre sua ingestão de água ao longo do dia. A meta é calculada com base no seu peso. <b>Hidratação é fundamental!</b>',
      pos: 'bottom'
    },
    {
      id: 'xp-player-card',
      title: 'SEU PERFIL RPG',
      text: 'Cada ação no app te dá <b>XP</b>. Acumule XP para evoluir de nível, desbloquear títulos e comprar skins de avatar na loja. <b>Bora começar!</b> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="none" style="vertical-align:middle"><rect x="1" y="4" width="14" height="8" fill="#2980b9"/><rect x="1" y="4" width="14" height="1" fill="#7dd3fc"/><rect x="3" y="7" width="1" height="3" fill="#7dd3fc"/><rect x="2" y="8" width="3" height="1" fill="#7dd3fc"/><rect x="11" y="7" width="1" height="2" fill="#fcd34d"/><rect x="13" y="8" width="1" height="1" fill="#fca5a5"/><rect x="7" y="9" width="2" height="1" fill="#555"/></svg>',
      pos: 'bottom'
    },
  ];

  let tutStep = 0;

  window.tutEscolha = function(jasei) {
    document.getElementById('tut-welcome').style.display = 'none';
    if(jasei) {
      tutFinalizar();
    } else {
      document.getElementById('tut-card').style.display = 'block';
      tutStep = 0;
      tutRender();
    }
  };

  window.tutNext = function() {
    tutStep++;
    if(tutStep >= STEPS.length) { tutFinalizar(); return; }
    tutRender();
  };

  window.tutPrev = function() {
    if(tutStep > 0) { tutStep--; tutRender(); }
  };

  window.tutPular = function() { tutFinalizar(); };

  function tutFinalizar() {
    localStorage.setItem(TUT_KEY, '1');
    // Check "não perguntar novamente" checkbox
    const skipCb = document.getElementById('tut-skip-forever');
    if(skipCb && skipCb.checked) {
      localStorage.setItem(TUT_SKIP_KEY, '1');
    }
    const overlay = document.getElementById('tut-overlay');
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity .4s ease';
    setTimeout(()=>{ overlay.style.display='none'; }, 400);
    const sp = document.getElementById('tut-spotlight');
    sp.style.display = 'none';
    document.querySelectorAll('.tut-target').forEach(el => el.classList.remove('tut-target'));
  }

  function tutRender() {
    const step = STEPS[tutStep];
    const total = STEPS.length;

    // Update text
    document.getElementById('tut-step-indicator').textContent = 'PASSO ' + (tutStep+1) + ' DE ' + total;
    document.getElementById('tut-title').innerHTML = step.title;
    document.getElementById('tut-text').innerHTML = step.text;
    document.getElementById('tut-prog-bar').style.width = ((tutStep+1)/total*100) + '%';

    // Buttons
    const prevBtn = document.getElementById('tut-prev');
    const nextBtn = document.getElementById('tut-next');
    const skipBtn = document.getElementById('tut-skip');
    prevBtn.style.display = tutStep > 0 ? 'block' : 'none';
    nextBtn.textContent = tutStep === total-1 ? '▶ COMEÇAR!' : 'PRÓXIMO ►';
    skipBtn.style.display = tutStep === total-1 ? 'none' : 'block';

    // Spotlight
    let targetEl = document.getElementById(step.id);
    if(!targetEl) targetEl = document.querySelector('[data-tut="' + step.id + '"]');
    if(!targetEl && step.id === 'action-btns-tut') {
      targetEl = document.querySelector('.action-btns');
    }
    const sp = document.getElementById('tut-spotlight');
    const card = document.getElementById('tut-card');

    if(targetEl) {
      // Scroll element into view, then wait for scroll to fully settle
      targetEl.scrollIntoView({behavior:'smooth', block:'center'});
      const doPosition = () => {
        const rect = targetEl.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const pad = 8;
        // Clamp spotlight to visible viewport area
        const spLeft = Math.max(4, rect.left - pad);
        const spTop  = Math.max(4, rect.top  - pad);
        const spW    = Math.min(rect.width  + pad*2, vw - spLeft - 4);
        const spH    = Math.min(rect.height + pad*2, vh - spTop  - 4);
        sp.style.display = 'block';
        sp.style.left   = spLeft + 'px';
        sp.style.top    = spTop  + 'px';
        sp.style.width  = spW   + 'px';
        sp.style.height = spH   + 'px';
        sp.className = 'tut-pulse';
        // Position card relative to the CLAMPED spotlight rect
        const clampedRect = { left:spLeft, top:spTop, width:spW, height:spH, bottom:spTop+spH, right:spLeft+spW };
        positionCard(card, clampedRect, step.pos);
      };
      // Wait for smooth scroll to finish (smooth scroll ~700ms on mobile, longer for safety)
      const scrollDelay = window.innerWidth <= 600 ? 750 : 500;
      setTimeout(doPosition, scrollDelay);
    } else {
      sp.style.display = 'none';
      // No target: just center the card
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const isMobile = vw <= 600;
      const PAD = isMobile ? 10 : 16;
      const cardW = Math.min(isMobile ? vw - PAD*2 : 340, vw - PAD*2);
      card.style.width = cardW + 'px';
      card.style.left = ((vw - cardW) / 2) + 'px';
      card.style.top = Math.max(PAD, (vh - (card.offsetHeight||220)) / 2) + 'px';
      card.style.transform = 'none';
      card.style.opacity = '1';
    }
  }

  function positionCard(card, targetRect, pref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isMobile = vw <= 600;
    const PAD = isMobile ? 8 : 16;
    const GAP = isMobile ? 8 : 14;
    const cardW = Math.min(isMobile ? vw - PAD*2 : 340, vw - PAD*2);
    card.style.width = cardW + 'px';
    card.style.maxWidth = cardW + 'px';
    // Force a reflow to get accurate height
    card.style.visibility = 'hidden';
    card.style.display = 'block';
    const cardH = card.offsetHeight || (isMobile ? 200 : 200);
    card.style.visibility = '';

    let top, left;

    const spaceBelow = vh - targetRect.bottom - GAP;
    const spaceAbove = targetRect.top - GAP;

    if(pref === 'bottom' && spaceBelow >= cardH) {
      top = targetRect.bottom + GAP;
    } else if(pref === 'top' && spaceAbove >= cardH) {
      top = targetRect.top - GAP - cardH;
    } else if(spaceBelow >= cardH) {
      top = targetRect.bottom + GAP;
    } else if(spaceAbove >= cardH) {
      top = targetRect.top - GAP - cardH;
    } else {
      // Not enough space either side: on mobile push to bottom of viewport, desktop center
      if(isMobile) {
        top = vh - cardH - PAD;
      } else {
        top = Math.max(PAD, (vh - cardH) / 2);
      }
    }

    // Clamp top to viewport with padding
    top = Math.max(PAD, Math.min(top, vh - cardH - PAD));

    // Horizontal: center on target, clamp to screen
    left = targetRect.left + targetRect.width/2 - cardW/2;
    left = Math.max(PAD, Math.min(left, vw - cardW - PAD));

    card.style.transform = 'none';
    card.style.top = top + 'px';
    card.style.left = left + 'px';

    // Animate in
    card.style.opacity = '0';
    card.style.transition = 'none';
    requestAnimationFrame(()=>{
      card.style.transition = 'opacity .25s ease, top .35s cubic-bezier(.4,0,.2,1), left .35s cubic-bezier(.4,0,.2,1)';
      card.style.opacity = '1';
    });
  }

  // Hide card initially
  document.getElementById('tut-card').style.display = 'none';

  // Keyboard support
  document.addEventListener('keydown', e => {
    if(document.getElementById('tut-overlay').style.display === 'none') return;
    if(e.key === 'ArrowRight' || e.key === 'Enter') window.tutNext();
    if(e.key === 'ArrowLeft') window.tutPrev();
    if(e.key === 'Escape') window.tutPular();
  });

})();


/* ============================================================ */


window.abrirConfiguracoes = function() {
  document.getElementById('modal-configuracoes').classList.add('ativo');
};

window.abrirADM = function() {
  // Se for o admin logado, entrar sem senha
  if (window._isAdmin) {
    document.getElementById('modal-configuracoes').classList.remove('ativo');
    admRefresh();
    document.getElementById('modal-adm').classList.add('ativo');
    if(typeof showToast === 'function') showToast('⚡ Bem-vindo, ADM!', 'green');
    return;
  }
  // Fallback: senha para outros (não deve aparecer para usuários normais)
  document.getElementById('modal-configuracoes').classList.remove('ativo');
  setTimeout(function() {
    const senha = prompt('[ ADM ] Senha:');
    if(senha === null) {
      document.getElementById('modal-configuracoes').classList.add('ativo');
      return;
    }
    if(senha === 'Gui14092006') {
      admRefresh();
      document.getElementById('modal-adm').classList.add('ativo');
      if(typeof showToast === 'function') showToast('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\" width=\"12\" height=\"12\" fill=\"none\" style=\"vertical-align:middle;margin-right:4px\"><rect x=\"1\" y=\"6\" width=\"2\" height=\"2\" fill=\"#6ee7b7\"/><rect x=\"3\" y=\"8\" width=\"2\" height=\"2\" fill=\"#6ee7b7\"/><rect x=\"5\" y=\"10\" width=\"2\" height=\"2\" fill=\"#6ee7b7\"/><rect x=\"7\" y=\"8\" width=\"2\" height=\"2\" fill=\"#6ee7b7\"/><rect x=\"9\" y=\"6\" width=\"2\" height=\"2\" fill=\"#6ee7b7\"/><rect x=\"9\" y=\"4\" width=\"2\" height=\"2\" fill=\"#6ee7b7\"/></svg> Acesso ADM liberado!', 'green');
    } else {
      document.getElementById('modal-configuracoes').classList.add('ativo');
      if(typeof showToast === 'function') showToast('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\" width=\"12\" height=\"12\" fill=\"none\" style=\"vertical-align:middle;margin-right:4px\"><rect x=\"2\" y=\"2\" width=\"2\" height=\"2\" fill=\"#fca5a5\"/><rect x=\"4\" y=\"4\" width=\"2\" height=\"2\" fill=\"#fca5a5\"/><rect x=\"6\" y=\"6\" width=\"2\" height=\"2\" fill=\"#fca5a5\"/><rect x=\"4\" y=\"8\" width=\"2\" height=\"2\" fill=\"#fca5a5\"/><rect x=\"2\" y=\"10\" width=\"2\" height=\"2\" fill=\"#fca5a5\"/><rect x=\"8\" y=\"2\" width=\"2\" height=\"2\" fill=\"#fca5a5\"/><rect x=\"8\" y=\"10\" width=\"2\" height=\"2\" fill=\"#fca5a5\"/></svg> Senha incorreta!', 'red');
    }
  }, 150);
};

function admRefresh() {
  const xd = typeof xpData !== 'undefined' ? xpData : {};
  const lvl = xd.level || 1;
  const total = xd.totalXP || 0;
  const pending = xd.pendingLevelUp || false;
  const el = document.getElementById('adm-debug-content');
  el.innerHTML = `
    <div style="background:var(--surface);border:1px dashed var(--amber);border-radius:3px;padding:12px;font-family:var(--font-vt);font-size:1rem;color:var(--ink);letter-spacing:.06em;line-height:2;text-align:left">
      <div>◈ <b>Level:</b> <span style="color:var(--amber-l)">${lvl}</span></div>
      <div>◆ <b>Total XP:</b> <span style="color:var(--amber-l)">${total}</span></div>
      <div>◉ <b>Pending Level-Up:</b> <span style="color:${pending ? '#6ee7b7' : '#fca5a5'}">${pending ? 'SIM' : 'NÃO'}</span></div>
    </div>
  `;
}

function admAddXP() {
  if(typeof ganharXP === 'function') { ganharXP(50, 'ADM +50'); admRefresh(); }
}
function admRemXP() {
  if(typeof perderXP === 'function') { perderXP(50, 'ADM -50'); admRefresh(); }
}
function admResetXP() {
  if(confirm('[ADM] Resetar todo o XP? Esta acao e irreversivel.')) {
    if(typeof xpData !== 'undefined') {
      xpData.totalXP = 0;
      xpData.level = 1;
      xpData.pendingLevelUp = false;
      if(typeof salvarXP === 'function') salvarXP();
      if(typeof renderXP === 'function') renderXP();
      admRefresh();
      showToast('XP resetado com sucesso!', 'amber');
    }
  }
}
function admAddCustomXP() {
  const v = parseInt(document.getElementById('adm-xp-custom').value);
  if(!v || v <= 0) { showToast('Digite um valor válido!', 'red'); return; }
  if(typeof ganharXP === 'function') { ganharXP(v, 'ADM +' + v); admRefresh(); showToast('+' + v + ' XP adicionados!', 'green'); }
}
function admRemCustomXP() {
  const v = parseInt(document.getElementById('adm-xp-custom').value);
  if(!v || v <= 0) { showToast('Digite um valor válido!', 'red'); return; }
  if(typeof perderXP === 'function') { perderXP(v, 'ADM -' + v); admRefresh(); showToast('-' + v + ' XP removidos!', 'amber'); }
}
function admSetXP() {
  const v = parseInt(document.getElementById('adm-xp-custom').value);
  if(v === undefined || v === null || isNaN(v) || v < 0) { showToast('Digite um valor válido (>= 0)!', 'red'); return; }
  if(typeof xpData !== 'undefined') {
    xpData.totalXP = v;
    // Recalculate level
    if(typeof LEVELS !== 'undefined') {
      let newLvl = 1;
      for(let i = LEVELS.length - 1; i >= 0; i--) {
        if(v >= LEVELS[i].xpReq) { newLvl = LEVELS[i].lvl; break; }
      }
      xpData.level = newLvl;
    }
    xpData.pendingLevelUp = false;
    if(typeof salvarXP === 'function') salvarXP();
    if(typeof renderXPCard === 'function') renderXPCard();
    admRefresh();
    showToast('XP definido para ' + v + '!', 'amber');
  }
}

window.reiniciarTutorial = function() {
  localStorage.removeItem('mq_tutorial_done');
  localStorage.removeItem('mq_tutorial_skip');
  document.getElementById('modal-configuracoes').classList.remove('ativo');
  location.reload();
};
