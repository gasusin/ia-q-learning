$(document).ready(() => {
	// Submit comment post

	var posini = 1
	var nroInteracoes = 0

	var qTable = [
		{
			s : 1 ,
			a : 2,
			r : 0
		},
		{
			s: 1,
			a : 10,
			r  : 0
		},
		{
			s : 2,
			a : 3,
			r  : 0
		},
		{
			s : 2,
			a : 9,
			r  : 0
		},
		{
			s : 2,
			a : 1,
			r  : 0
		},
		{
			s : 3,
			a : 8,
			r  : 0
		},
		{
			s : 3,
			a : 4,
			r  : 0
		},
		{
			s : 3,
			a : 2,
			r  : 0
		},
		{
			s : 4,
			a : 5,
			r  : 0
		},
		{
			s : 4,
			a : 7,
			r  : 0
		},
		{
			s : 4, 
			a : 3,
			r  : 0
		},
		{
			s : 5, 
			a : 6,
			r  : 0
		},
		{
			s : 5, 
			a : 4,
			r  : 0
		},
		{
			s : 6, 
			a : 15,
			r  : 0
		},
		{
			s : 6, 
			a : 7,
			r  : 0
		},
		{
			s : 6, 
			a : 5,
			r  : 0
		},
		{
			s : 7, 
			a : 14,
			r  : 0
		},
		{
			s : 7, 
			a : 4,
			r  : 0
		},
		{
			s : 7, 
			a : 8,
			r  : 0
		},
		{
			s : 7, 
			a : 6,
			r  : 0
		},
		{
			s : 8, 
			a : 13,
			r  : 0
		},
		{
			s : 8, 
			a : 9,
			r  : 0
		},
		{
			s : 8, 
			a : 3,
			r  : 0
		},
		{
			s : 8, 
			a : 7,
			r  : 0
		},
		{
			s : 9, 
			a : 12,
			r  : 0
		},
		{
			s : 9, 
			a : 10,
			r  : 0
		},
		{
			s : 9, 
			a : 2,
			r  : 0
		},
		{
			s : 9, 
			a : 8,
			r  : 0
		},
		{
			s : 10, 
			a : 11,
			r  : 0
		},
		{
			s : 10, 
			a : 1,
			r  : 0
		},
		{
			s : 11, 
			a : 20,
			r  : 0
		},
		{
			s : 11, 
			a : 12,
			r  : 0
		},
		{
			s : 11, 
			a : 10,
			r  : 0
		},
		{
			s : 12, 
			a : 19,
			r  : 0
		},
		{
			s : 12, 
			a : 11,
			r  : 0
		},
		{
			s : 12, 
			a : 9,
			r  : 0
		},
		{
			s : 12, 
			a : 13,
			r  : 0
		},
		{
			s : 13, 
			a : 18,
			r  : 0
		},
		{
			s : 13, 
			a : 12,
			r  : 0
		},
		{
			s : 13, 
			a : 8,
			r  : 0
		},
		{
			s : 13, 
			a : 14,
			r  : 0
		},
		{
			s : 14, 
			a : 17,
			r  : 0
		},
		{
			s : 14, 
			a : 13,
			r  : 0
		},
		{
			s : 14, 
			a : 7,
			r  : 0
		},
		{
			s : 14, 
			a : 15,
			r  : 0
		},
		{
			s : 15, 
			a : 16,
			r  : 0
		},
		{
			s : 15, 
			a : 14,
			r  : 0
		},
		{
			s : 15, 
			a : 6,
			r  : 0
		},
		{
			s : 16, 
			a : 25,
			r  : 0
		},
		{
			s : 16, 
			a : 17,
			r  : 0
		},
		{
			s : 16, 
			a : 15,
			r  : 0
		},
		{
			s : 17, 
			a : 24,
			r  : 0
		},
		{
			s : 17, 
			a : 18,
			r  : 0
		},
		{
			s : 17, 
			a : 14,
			r  : 0
		},
		{
			s : 17, 
			a : 16,
			r  : 0
		},
		{
			s : 18, 
			a : 23,
			r  : 0
		},
		{
			s : 18, 
			a : 19,
			r  : 0
		},
		{
			s : 18, 
			a : 13,
			r  : 0
		},
		{
			s : 18, 
			a : 17,
			r  : 0
		},
		{
			s : 19, 
			a : 20,
			r  : 0
		},
		{
			s : 19, 
			a : 18,
			r  : 0
		},
		{
			s : 19, 
			a : 12,
			r  : 0
		},
		{
			s : 19, 
			a : 22,
			r  : 0
		},
		{
			s : 20, 
			a : 19,
			r  : 0
		},
		{
			s : 20, 
			a : 21,
			r  : 0
		},
		{
			s : 20, 
			a : 11,
			r  : 0
		},
		{
			s : 21, 
			a : 20,
			r  : 0
		},
		{
			s : 21, 
			a : 22,
			r  : 0
		},
		{
			s : 21, 
			a : 30,
			r  : 0
		},
		{
			s : 22, 
			a : 19,
			r  : 0
		},
		{
			s : 22, 
			a : 21,
			r  : 0
		},
		{
			s : 22, 
			a : 23,
			r  : 0
		},
		{
			s : 22, 
			a : 29,
			r  : 0
		},
		{
			s : 23, 
			a : 22,
			r  : 0
		},
		{
			s : 23, 
			a : 18,
			r  : 0
		},
		{
			s : 23, 
			a : 24,
			r  : 0
		},
		{
			s : 23, 
			a : 28,
			r  : 0
		},
		{
			s : 24, 
			a : 25,
			r  : 0
		},
		{
			s : 24, 
			a : 17,
			r  : 0
		},
		{
			s : 24, 
			a : 23,
			r  : 0
		},
		{
			s : 24, 
			a : 27,
			r  : 0
		},
		{
			s : 25, 
			a : 16,
			r  : 0
		},
		{
			s : 25, 
			a : 26,
			r  : 0
		},
		{
			s : 25, 
			a : 24,
			r  : 0
		},
		{
			s : 26, 
			a : 25,
			r  : 0
		},
		{
			s : 26, 
			a : 35,
			r  : 0
		},
		{
			s : 26, 
			a : 27,
			r  : 0
		},
		{
			s : 27, 
			a : 26,
			r  : 0
		},
		{
			s : 27, 
			a : 28,
			r  : 0
		},
		{
			s : 27, 
			a : 24,
			r  : 0
		},
		{
			s : 27, 
			a : 34,
			r  : 0
		},
		{
			s : 28, 
			a : 27,
			r  : 0
		},
		{
			s : 28, 
			a : 29,
			r  : 0
		},
		{
			s : 28, 
			a : 23,
			r  : 0
		},
		{
			s : 28, 
			a : 33,
			r  : 0
		},
		{
			s : 29, 
			a : 22,
			r  : 0
		},
		{
			s : 29, 
			a : 32,
			r  : 0
		},
		{
			s : 29, 
			a : 28,
			r  : 0
		},
		{
			s : 29, 
			a : 30,
			r  : 0
		},
		{
			s : 30, 
			a : 29,
			r  : 0
		},
		{
			s : 30, 
			a : 31,
			r  : 0
		},
		{
			s : 30, 
			a : 21,
			r  : 0
		},
		{
			s : 31, 
			a : 30,
			r  : 0
		},
		{
			s : 31, 
			a : 32,
			r  : 0
		},
		{
			s : 31, 
			a : 40,
			r  : 0
		},
		{
			s : 32, 
			a : 31,
			r  : 0
		},
		{
			s : 32, 
			a : 33,
			r  : 0
		},
		{
			s : 32, 
			a : 29,
			r  : 0
		},
		{
			s : 32, 
			a : 39,
			r  : 0
		},
		{
			s : 33, 
			a : 32,
			r  : 0
		},
		{
			s : 33, 
			a : 28,
			r  : 0
		},
		{
			s : 33, 
			a : 38,
			r  : 0
		},
		{
			s : 33, 
			a : 34,
			r  : 0
		},
		{
			s : 34, 
			a : 33,
			r  : 0
		},
		{
			s : 34, 
			a : 35,
			r  : 0
		},
		{
			s : 34, 
			a : 37,
			r  : 0
		},
		{
			s : 34, 
			a : 27,
			r  : 0
		},
		{
			s : 35, 
			a : 34,
			r  : 0
		},
		{
			s : 35, 
			a : 36,
			r  : 0
		},
		{
			s : 35, 
			a : 26,
			r  : 0
		},
		{
			s : 36, 
			a : 35,
			r  : 0
		},
		{
			s : 36, 
			a : 37,
			r  : 0
		},
		{
			s : 36, 
			a : 45,
			r  : 0
		},
		{
			s : 37, 
			a : 36,
			r  : 0
		},
		{
			s : 37, 
			a : 38,
			r  : 0
		},
		{
			s : 37, 
			a : 34,
			r  : 0
		},
		{
			s : 37, 
			a : 44,
			r  : 0
		},
		{
			s : 38, 
			a : 37,
			r  : 0
		},
		{
			s : 38, 
			a : 39,
			r  : 0
		},
		{
			s : 38, 
			a : 33,
			r  : 0
		},
		{
			s : 38, 
			a : 43,
			r  : 0
		},
		{
			s : 39, 
			a : 38,
			r  : 0
		},
		{
			s : 39, 
			a : 40,
			r  : 0
		},
		{
			s : 39, 
			a : 42,
			r  : 0
		},
		{
			s : 39, 
			a : 32,
			r  : 0
		},
		{
			s : 40, 
			a : 41,
			r  : 0
		},
		{
			s : 40, 
			a : 39,
			r  : 0
		},
		{
			s : 40, 
			a : 31,
			r  : 0
		},
		{
			s : 41, 
			a : 40,
			r  : 0
		},
		{
			s : 41, 
			a : 42,
			r  : 0
		},
		{
			s : 41, 
			a : 50,
			r  : 100
		},
		{
			s : 42, 
			a : 41,
			r  : 0
		},
		{
			s : 42, 
			a : 43,
			r  : 0
		},
		{
			s : 42, 
			a : 39,
			r  : 0
		},
		{
			s : 42, 
			a : 49,
			r  : 0
		},
		{
			s : 43, 
			a : 38,
			r  : 0
		},
		{
			s : 43, 
			a : 48,
			r  : 0
		},
		{
			s : 43, 
			a : 42,
			r  : 0
		},
		{
			s : 43, 
			a : 44,
			r  : 0
		},
		{
			s : 44, 
			a : 43,
			r  : 0
		},
		{
			s : 44, 
			a : 45,
			r  : 0
		},
		{
			s : 44, 
			a : 37,
			r  : 0
		},
		{
			s : 44, 
			a : 47,
			r  : 0
		},
		{
			s : 45, 
			a : 44,
			r  : 0
		},
		{
			s : 45, 
			a : 46,
			r  : 0
		},
		{
			s : 45, 
			a : 36,
			r  : 0
		},
		{
			s : 46, 
			a : 45,
			r  : 0
		},
		{
			s : 46, 
			a : 47,
			r  : 0
		},
		{
			s : 47, 
			a : 46,
			r  : 0
		},		
		{
			s : 47, 
			a : 48,
			r  : 0
		},
		{
			s : 47, 
			a : 44,
			r  : 0
		},
		{
			s : 48, 
			a : 47,
			r  : 0
		},
		{
			s : 48, 
			a : 49,
			r  : 0
		},
		{
			s : 48, 
			a : 43,
			r  : 0
		},
		{
			s : 49, 
			a : 48,
			r  : 0
		},
		{
			s : 49, 
			a : 42,
			r  : 0
		},
		{
			s : 49, 
			a : 50,
			r  : 100
		},
		{
			s : 50 ,
			a : 0,
			r : 0
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
	
		posini = 1
		nroInteracoes = 0

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
		// var posini = $('#qlearning_val').val()
		//for (let i = 0; i < 10000; i++) {
		while(posini != 50){
			var goTo = this.valoresQAcao(qTable, posini)
			var posicaoQTable = goTo.posicao
			goTo = qTable[goTo.posicao]

			var valorAcao = this.buscaValorAcao(rTable, goTo.a)

			if (goTo.a != 50) {
				var qLinha = this.valoresQAcao(qTable, goTo.a)
				var valorQ = valorAcao + gama * qTable[qLinha.posicao].r
			} else {
				var valorQ = valorAcao + gama * 0
			}

			qTable[posicaoQTable].r = valorQ
			
			if (goTo.a == 50) {
				nroInteracoes += 1
				console.log("nroInteracoes", nroInteracoes)
				console.log(qTable)
				posini = goTo.a
				//posini = 1
			} else {
				nroInteracoes += 1
				posini = goTo.a
			}
		}

		document.getElementById("divInteracoes").innerHTML = "<label for='totalInteracoes'> Número de Interações: " + nroInteracoes + "</label>"

		
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
	for (const r of tabelaR) {
		if (r.s == a) {
			valorAcao = r.p
		} 
	}

	return valorAcao

}

// Verifica o segundo Q
function valoresQAcao(qTable, posicaoAtual) {
	
	var controleQTable = 0
	var posicoes = [] // posições dos elementos na tabela Q-Table (qTable)

	/**
	 * Fazer o random de 30 a 70 para definir se pega o melhor caminho ou executa random
	 */

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

	randommax = this.randomIntFromInterval(0, 100);

	if(randommax <= 70) {
		return posicaoEscolhida
	} else {
		// posicoes.splice(posicaoEscolhida, 1)

		pos = this.randomIntFromInterval(0, posicoes.length - 1)
		posicaoEscolhida = posicoes[pos]
		return posicaoEscolhida
	}

}