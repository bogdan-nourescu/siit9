//detalii.js
function adaugaInCos(){
	let cosStr = localStorage.getItem("cart");
	let cos;
	if(cosStr===null){
		cos = [];
	}else{
		cos = JSON.parse(cosStr);
	}

	var cantitate = document.querySelector("[name='cantitate']").value;
	//validare

	let found = false;
	for(let i =0;i<cos.length;i++){
		if(cos[i].idProdus === idProdus){
			//cantitate<=stoc
			cos[i].cantitate += cantitate;
			found=true;
		}
	}
	//cantitate<=stoc
	if(!found){
		var produsDeAdaugatInCos = {
			cantitate,
			idProdus,
			pret,
			stoc,
			nume,
			imagine
		}
		cos.push(produsDeAdaugatInCos);
	}
	localStorage.setItem("cart", JSON.stringify(cos));
}


//cos.js
function drawCos(){
	let cosStr = localStorage.getItem("cart");
	let cos;
	if(cosStr===null){
		cos = [];
	}else{
		cos = JSON.parse(cosStr);
	}
	var str = "";
	for(let i=0;i<cos.length;i++){
		str+=`<tr><td>${} ....</tr>`
	}
	document.querySelector("table tbody").innerHTML = str;
}

function maresteCantitate(idx){
	let cosStr = localStorage.getItem("cart");
	let cos;
	if(cosStr===null){
		cos = [];
	}else{
		cos = JSON.parse(cosStr);
	}
	cos[idx].cantitate++;
	if(cos[idx].cantitate <= cos[idx].stoc){
		localStorage.setItem("cart", JSON.stringify(cos));
		drawCos();
	}else{
		alert("Cantitatea depaseste stocul");
	}
}
