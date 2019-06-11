$(document).ready(() => {
	// Submit comment post

	var posini = 1
	var lastPos = 1

	var qTable = [
		{
			s : 1 ,
			a : 12,
			r : 0
		},
		{
			s: 1,
			a : 10,
			r  : 0
		},
		{
			s : 2,
			a : 23,
			r  : 0
		},
		{
			s : 2,
			a : 29,
			r  : 0
		},
		{
			s : 2,
			a : 21,
			r  : 0
		},
		{
			s : 3,
			a : 38,
			r  : 0
		},
		{
			s : 3,
			a : 34,
			r  : 0
		},
		{
			s : 3,
			a : 32,
			r  : 0
		},
		{
			s : 4,
			a : 45,
			r  : 0
		},
		{
			s : 4,
			a : 47,
			r  : 0
		},
		{
			s : 4, 
			a : 43,
			r  : 0
		},
		{
			s : 5, 
			a : 56,
			r  : 0
		},
		{
			s : 5, 
			a : 54,
			r  : 0
		},
		{
			s : 6, 
			a : 615,
			r  : 0
		},
		{
			s : 6, 
			a : 67,
			r  : 0
		},
		{
			s : 6, 
			a : 65,
			r  : 0
		},
		{
			s : 7, 
			a : 714,
			r  : 0
		},
		{
			s : 7, 
			a : 74,
			r  : 0
		},
		{
			s : 7, 
			a : 78,
			r  : 0
		},
		{
			s : 7, 
			a : 76,
			r  : 0
		},
		{
			s : 8, 
			a : 813,
			r  : 0
		},
		{
			s : 8, 
			a : 89,
			r  : 0
		},
		{
			s : 8, 
			a : 83,
			r  : 0
		},
		{
			s : 8, 
			a : 87,
			r  : 0
		},
		{
			s : 9, 
			a : 912,
			r  : 0
		},
		{
			s : 9, 
			a : 910,
			r  : 0
		},
		{
			s : 9, 
			a : 92,
			r  : 0
		},
		{
			s : 9, 
			a : 98,
			r  : 0
		},
		{
			s : 10, 
			a : 1011,
			r  : 0
		},
		{
			s : 10, 
			a : 101,
			r  : 0
		},
		{
			s : 11, 
			a : 1120,
			r  : 0
		},
		{
			s : 11, 
			a : 1112,
			r  : 0
		},
		{
			s : 11, 
			a : 1110,
			r  : 0
		},
		{
			s : 12, 
			a : 1219,
			r  : 0
		},
		{
			s : 12, 
			a : 1211,
			r  : 0
		},
		{
			s : 12, 
			a : 129,
			r  : 0
		},
		{
			s : 12, 
			a : 1213,
			r  : 0
		},
		{
			s : 13, 
			a : 1318,
			r  : 0
		},
		{
			s : 13, 
			a : 1312,
			r  : 0
		},
		{
			s : 13, 
			a : 138,
			r  : 0
		},
		{
			s : 13, 
			a : 1314,
			r  : 0
		},
		{
			s : 14, 
			a : 1417,
			r  : 0
		},
		{
			s : 14, 
			a : 1413,
			r  : 0
		},
		{
			s : 14, 
			a : 147,
			r  : 0
		},
		{
			s : 14, 
			a : 1415,
			r  : 0
		},
		{
			s : 15, 
			a : 1516,
			r  : 0
		},
		{
			s : 15, 
			a : 1514,
			r  : 0
		},
		{
			s : 15, 
			a : 156,
			r  : 0
		},
		{
			s : 16, 
			a : 1625,
			r  : 0
		},
		{
			s : 16, 
			a : 1617,
			r  : 0
		},
		{
			s : 16, 
			a : 1615,
			r  : 0
		},
		{
			s : 17, 
			a : 1724,
			r  : 0
		},
		{
			s : 17, 
			a : 1718,
			r  : 0
		},
		{
			s : 17, 
			a : 1714,
			r  : 0
		},
		{
			s : 17, 
			a : 1716,
			r  : 0
		},
		{
			s : 18, 
			a : 1823,
			r  : 0
		},
		{
			s : 18, 
			a : 1819,
			r  : 0
		},
		{
			s : 18, 
			a : 1813,
			r  : 0
		},
		{
			s : 18, 
			a : 1817,
			r  : 0
		},
		{
			s : 19, 
			a : 1920,
			r  : 0
		},
		{
			s : 19, 
			a : 1918,
			r  : 0
		},
		{
			s : 19, 
			a : 1912,
			r  : 0
		},
		{
			s : 19, 
			a : 1922,
			r  : 0
		},
		{
			s : 20, 
			a : 2019,
			r  : 0
		},
		{
			s : 20, 
			a : 2021,
			r  : 0
		},
		{
			s : 20, 
			a : 2011,
			r  : 0
		},
		{
			s : 21, 
			a : 2120,
			r  : 0
		},
		{
			s : 21, 
			a : 2122,
			r  : 0
		},
		{
			s : 21, 
			a : 2130,
			r  : 0
		},
		{
			s : 22, 
			a : 2219,
			r  : 0
		},
		{
			s : 22, 
			a : 2221,
			r  : 0
		},
		{
			s : 22, 
			a : 2223,
			r  : 0
		},
		{
			s : 22, 
			a : 2229,
			r  : 0
		},
		{
			s : 23, 
			a : 2322,
			r  : 0
		},
		{
			s : 23, 
			a : 2318,
			r  : 0
		},
		{
			s : 23, 
			a : 2324,
			r  : 0
		},
		{
			s : 23, 
			a : 2328,
			r  : 0
		},
		{
			s : 24, 
			a : 2425,
			r  : 0
		},
		{
			s : 24, 
			a : 2417,
			r  : 0
		},
		{
			s : 24, 
			a : 2423,
			r  : 0
		},
		{
			s : 24, 
			a : 2427,
			r  : 0
		},
		{
			s : 25, 
			a : 2516,
			r  : 0
		},
		{
			s : 25, 
			a : 2526,
			r  : 0
		},
		{
			s : 25, 
			a : 2524,
			r  : 0
		},
		{
			s : 26, 
			a : 2625,
			r  : 0
		},
		{
			s : 26, 
			a : 2635,
			r  : 0
		},
		{
			s : 26, 
			a : 2627,
			r  : 0
		},
		{
			s : 27, 
			a : 2726,
			r  : 0
		},
		{
			s : 27, 
			a : 2728,
			r  : 0
		},
		{
			s : 27, 
			a : 2724,
			r  : 0
		},
		{
			s : 27, 
			a : 2734,
			r  : 0
		},
		{
			s : 28, 
			a : 2827,
			r  : 0
		},
		{
			s : 28, 
			a : 2829,
			r  : 0
		},
		{
			s : 28, 
			a : 2823,
			r  : 0
		},
		{
			s : 28, 
			a : 2833,
			r  : 0
		},
		{
			s : 29, 
			a : 2922,
			r  : 0
		},
		{
			s : 29, 
			a : 2932,
			r  : 0
		},
		{
			s : 29, 
			a : 2928,
			r  : 0
		},
		{
			s : 29, 
			a : 2930,
			r  : 0
		},
		{
			s : 30, 
			a : 3029,
			r  : 0
		},
		{
			s : 30, 
			a : 3031,
			r  : 0
		},
		{
			s : 30, 
			a : 3021,
			r  : 0
		},
		{
			s : 31, 
			a : 3130,
			r  : 0
		},
		{
			s : 31, 
			a : 3132,
			r  : 0
		},
		{
			s : 31, 
			a : 3140,
			r  : 0
		},
		{
			s : 32, 
			a : 3231,
			r  : 0
		},
		{
			s : 32, 
			a : 3233,
			r  : 0
		},
		{
			s : 32, 
			a : 3229,
			r  : 0
		},
		{
			s : 32, 
			a : 3239,
			r  : 0
		},
		{
			s : 33, 
			a : 3332,
			r  : 0
		},
		{
			s : 33, 
			a : 3328,
			r  : 0
		},
		{
			s : 33, 
			a : 3338,
			r  : 0
		},
		{
			s : 33, 
			a : 3334,
			r  : 0
		},
		{
			s : 34, 
			a : 3433,
			r  : 0
		},
		{
			s : 34, 
			a : 3435,
			r  : 0
		},
		{
			s : 34, 
			a : 3437,
			r  : 0
		},
		{
			s : 34, 
			a : 3427,
			r  : 0
		},
		{
			s : 35, 
			a : 3534,
			r  : 0
		},
		{
			s : 35, 
			a : 3536,
			r  : 0
		},
		{
			s : 35, 
			a : 3526,
			r  : 0
		},
		{
			s : 36, 
			a : 3635,
			r  : 0
		},
		{
			s : 36, 
			a : 3637,
			r  : 0
		},
		{
			s : 36, 
			a : 3645,
			r  : 0
		},
		{
			s : 37, 
			a : 3736,
			r  : 0
		},
		{
			s : 37, 
			a : 3738,
			r  : 0
		},
		{
			s : 37, 
			a : 3734,
			r  : 0
		},
		{
			s : 37, 
			a : 3744,
			r  : 0
		},
		{
			s : 38, 
			a : 3837,
			r  : 0
		},
		{
			s : 38, 
			a : 3839,
			r  : 0
		},
		{
			s : 38, 
			a : 3933,
			r  : 0
		},
		{
			s : 38, 
			a : 3843,
			r  : 0
		},
		{
			s : 39, 
			a : 3938,
			r  : 0
		},
		{
			s : 39, 
			a : 3940,
			r  : 0
		},
		{
			s : 39, 
			a : 3942,
			r  : 0
		},
		{
			s : 39, 
			a : 3932,
			r  : 0
		},
		{
			s : 40, 
			a : 4041,
			r  : 0
		},
		{
			s : 40, 
			a : 4039,
			r  : 0
		},
		{
			s : 40, 
			a : 4031,
			r  : 0
		},
		{
			s : 41, 
			a : 4140,
			r  : 0
		},
		{
			s : 41, 
			a : 4142,
			r  : 0
		},
		{
			s : 41, 
			a : 4150,
			r  : 100
		},
		{
			s : 42, 
			a : 4241,
			r  : 0
		},
		{
			s : 42, 
			a : 4243,
			r  : 0
		},
		{
			s : 42, 
			a : 4239,
			r  : 0
		},
		{
			s : 42, 
			a : 4249,
			r  : 0
		},
		{
			s : 43, 
			a : 4338,
			r  : 0
		},
		{
			s : 43, 
			a : 4348,
			r  : 0
		},
		{
			s : 43, 
			a : 4342,
			r  : 0
		},
		{
			s : 43, 
			a : 4344,
			r  : 0
		},
		{
			s : 44, 
			a : 4443,
			r  : 0
		},
		{
			s : 44, 
			a : 4445,
			r  : 0
		},
		{
			s : 44, 
			a : 4437,
			r  : 0
		},
		{
			s : 44, 
			a : 4447,
			r  : 0
		},
		{
			s : 45, 
			a : 4544,
			r  : 0
		},
		{
			s : 45, 
			a : 4546,
			r  : 0
		},
		{
			s : 45, 
			a : 4536,
			r  : 0
		},
		{
			s : 46, 
			a : 4645,
			r  : 0
		},
		{
			s : 46, 
			a : 4647,
			r  : 0
		},
		{
			s : 47, 
			a : 4746,
			r  : 0
		},		
		{
			s : 47, 
			a : 4748,
			r  : 0
		},
		{
			s : 47, 
			a : 4744,
			r  : 0
		},
		{
			s : 48, 
			a : 4847,
			r  : 0
		},
		{
			s : 48, 
			a : 4849,
			r  : 0
		},
		{
			s : 48, 
			a : 4843,
			r  : 0
		},
		{
			s : 49, 
			a : 4948,
			r  : 0
		},
		{
			s : 49, 
			a : 4942,
			r  : 0
		},
		{
			s : 49, 
			a : 4950,
			r  : 100
		}

	]
		
	$(".frmcomments").submit(function(e){
		e.preventDefault();
		$(".frmcomments textarea").each(function(){
			console.log(this.value);
			if(this.value != ""){
				var strId = this.id;

				var strLengthId = strId.substr(strId.length - 1, 1);
				var strDiv = "#divPost" + strLengthId;

				var parentdiv = $(strDiv).parent();
				var date = new Date();

				//var strCommentary = "#commentary";
				//$("#commentary")
				//commentary + strLengthId + " id="commentary + strLengthId +  + "

				var conteudo = '<div class="row line-post">\
														<div class="col-md02 divPost">\
															<p>' + this.value + '</p>\
															<p class="stilaoDaPorra">' + date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + '</p>\
														</div>\
													</div>';

				parentdiv.prepend(conteudo);

			}


		});
	});

	$('.algoritmo-qlearning').on('click', (click) => {
	
		var rTable = [
			{s: 1, p: 0}, {s: 11, p: -1}, {s:21, p: -100}, {s:31, p: -100}, {s:41, p: -100},
			{s: 2, p: -1}, {s: 12, p: -1}, {s:22, p: -1}, {s:32, p: -1}, {s:42, p: -1},
			{s: 3, p: -1}, {s: 13, p: -1}, {s:23, p: -1}, {s:33, p: -1}, {s:43, p: -1},
			{s: 4, p: -1}, {s: 14, p: -100}, {s:24, p: -100}, {s:34, p: -1}, {s:44, p: -1},
			{s: 5, p: -1}, {s: 15, p: -1}, {s:25, p: -1}, {s:35, p: -1}, {s:45, p: -1},
			{s: 6, p: -1}, {s: 16, p: -1}, {s:26, p: -1}, {s:36, p: -1}, {s:46, p: -1},
			{s: 7, p: -100}, {s: 17, p: -1}, {s:27, p: -100}, {s:37, p: -100}, {s:47, p: -1},
			{s: 8, p: -1}, {s: 18, p: -1}, {s:28, p: -1}, {s:38, p: -1}, {s:48, p: -1},
			{s: 9, p: -1}, {s: 19, p: -100}, {s:29, p: -1}, {s:39, p: -100}, {s:49, p: -1},
			{s: 10, p: -100}, {s: 20, p: -100}, {s:30, p: -100}, {s:40, p: -100}, {s:50, p: 100}
		]
	
		var gama = 0.8
		var posicoes = []
		// var posini = $('#qlearning_val').val()
	
		// for (let i = 0; i < 100; i++) {
			// var controle = 0 

			// qTable.forEach(e => {
			// 	if (e.s == parseInt(posini)) {
			// 		posicoes.push({
			// 			posicao : controle,
			// 			r : e.r
			// 		})
			// 	}

			// 	controle += 1
			// })

			// var goTo = null
			// var valoresIguais = this.valoresIguais(posicoes)

			// if (valoresIguais == false) {

			// 	posicoes.forEach(p => {
			// 		if (goTo == null) {
			// 			goTo = p
			// 		}

			// 		if (goTo.r < p.r) {
			// 			goTo = p
			// 		}
			// 	})

			// } else {
			// 	pos = this.randomIntFromInterval(0, posicoes.length - 1)
			// 	goTo = posicoes[pos]
			// }
			var goTo = this.valoresQAcao(qTable, posini)
			console.log(qTable[goTo.posicao])
			goTo = qTable[goTo.posicao]
			var valorAcao = this.buscaValorAcao(rTable, goTo.a)
			console.log(goTo)
			console.log(valorAcao)
		// }
	})
})

function valoresIguais(valoresEscolhidos) {
	var valoresIguais = true
	var valor = null
	
	valoresEscolhidos.forEach(e => {
		if (valor == null) {
			valor = e.r	
		}

		if (valor != e.r) {
			valoresIguais = false
		}
	})

	return valoresIguais
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Fazer função que busca o valor da tabela
function buscaValorAcao(tabelaR, a) {

	var valorAcao = null;
	console.log(a)
	for (const r of tabelaR) {
		console.log(r.s)
		if (r.s == a) {
			console.log("oitiseti")
			valorAcao = r.p
		} 
	}

	return valorAcao

}

// Verifica o segundo Q
function valoresQAcao(qTable, posicaoAtual) {
	
	var controleQTable = 0
	var posicoes = [] // posições dos elementos na tabela Q-Table (qTable)

	qTable.forEach(e => {
		if (e.s == parseInt(posicaoAtual)) {
			posicoes.push({
				posicao : controleQTable,
				r : e.r
			})
		}
		controleQTable += 1
	})

	var posicaoEscolhida = null
	var valoresIguais = this.valoresIguais(posicoes)

	if (valoresIguais == false) {
		posicoes.forEach(p => {
			if (posicaoEscolhida == null) {
				posicaoEscolhida = p
			}

			if (posicaoEscolhida.r < p.r) {
				posicaoEscolhida = p
			}
		})
	} else {
		pos = this.randomIntFromInterval(0, posicoes.length - 1)
		posicaoEscolhida = posicoes[pos]
	}

	return posicaoEscolhida

}