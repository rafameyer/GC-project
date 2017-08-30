function verifica(){
	senha = document.getElementById("senha").value;
	forca = 0;
	mostra = document.getElementById("mostra");
	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length>7){
		forca += 25;
	}
	if(senha.match(/[a-z]+/)){
		forca += 10;
	}
	if(senha.match(/[A-Z]+/)){
		forca += 20;
	}
	if(senha.match(/d+/)){
		forca += 20;
	}
	if(senha.match(/W+/)){
		forca += 25;
	}
	return mostra_res();
}
function mostra_res(){
	if(forca < 30){
		mostra.innerHTML = '<div class="determinate" style="width: 30%"></div>';
	}else if((forca >= 30) && (forca < 60)){
		mostra.innerHTML = '<div class="determinate" style="width: 45%"></div>';
	}else if((forca >= 60) && (forca < 85)){
		mostra.innerHTML = '<div class="determinate" style="width: 70%"></div>';        
    }else{
		mostra.innerHTML = '<div class="determinate" style="width: 100%"></div>';        
	}
}