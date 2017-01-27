$ = jQuery;

function colorearImagen(el) {
  $ = jQuery;
  var colorThief1 = new ColorThief();
  var elColor = colorThief1.getColor(el);
	var cont = "";
	
	if ($(el).attr("id").length > 0) {
		cont = $(el).attr("id").split("_")[1];
	}
	
	//darkenShadow oscurecerá proporcionalmente los colores mientras al menos dos de ellos sean > 210
	elColor = darkenShadow(elColor);
	
	var stringColor = elColor.toString();
  $('#gradFrame_' + cont).css('background', '-moz-linear-gradient(top, rgba(' + stringColor + ',0) 0%, rgba(' + stringColor + ',1) 100%)');
  $('#gradFrame_' + cont).css('background', '-webkit-linear-gradient(top, rgba(' + stringColor + ',0) 0%, rgba(' + stringColor + ',1) 100%)');
  $('#gradFrame_' + cont).css('background', 'linear-gradient(to bottom, rgba(' + stringColor + ',0) 0%, rgba(' + stringColor + ',1) 100%)');
  
  $('#gradA_' + cont).css('background-color', 'rgb(' + stringColor + ')');	
}

function dosClaros(elColor) {
	var contClaros = 0;
	for (var i = 0; i < elColor.length; i++) {
		//210 como limite de claridad; se puede bajar si queremos que sea mas oscuro por defecto
		if (elColor[i] > 210) {
			contClaros++;
		}
	}
	return contClaros;
}

function darkenShadow(elColor) {
  darkenPercent = 10; //%
  var cuantosClaros = dosClaros(elColor);
  //si queremos cambiarlos solo cuando los 3 colores sean claros, poner aqui 3;
  //o 1 si un solo color muy claro nos parece ya mucha claridad...
  while (cuantosClaros >= 2) {
    //console.log("darkening...");
    for (var i = 0; i < elColor.length; i++) {
		  elColor[i] = Math.round(elColor[i] - (elColor[i] * (darkenPercent / 100)));
		}
    cuantosClaros = dosClaros(elColor);
  }
  return elColor;
}

$(window).load(function() {
  var colorThief = new ColorThief();
  
  $(".catchcolor").each(function() {
  	colorearImagen(this);  
  });
});