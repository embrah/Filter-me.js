//grayscale   - 0 - 100%
// sepia - 0 - 100%
//saturate - 0 - 100%
//hue-rotate - 0 - 360deg
//invert - 0 - 100%
//opacity -  0 - 100%
//brightness - 0 - 100%
//contrast - 0 - 100%
//blur - 0 - 50px





function loadFile() {
		var upload, reader, preview;
		upload = document.getElementById('upload');

    preview = document.getElementById('result');
    file = document.getElementById('upload').files[0];
    reader = new FileReader();
    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

}






function applyFilters () {
	var editor,effects,percentages,i,len,prop,grayscale,sepia,saturate,hueRotate,invert,opacity,brightness,contrast,blur,stringed,none;

	effects = {
    'grayscale': '',
    'sepia': '',
    'saturate': '',
    'hue-rotate': '',
    'invert': '',
    'opacity': '',
    'brightness': '',
    'contrast': '',
    'blur': ''
};
	editor = document.getElementById('editor');
	grayscale = document.getElementById('grayscale');
	sepia = document.getElementById('sepia');
	saturate = document.getElementById('saturate');
	hueRotate = document.getElementById('hueRotate');
	invert = document.getElementById('invert');
	opacity = document.getElementById('opacity');
	brightness = document.getElementById('brightness');
	contrast = document.getElementById('contrast');
	blur = document.getElementById('blur');

	percentages = document.getElementsByClassName('percentages');


	for (i=0,len=percentages.length;i<len;i+=1) {
			percentages[i].min = 0;
			percentages[i].max = 100;
			percentages[i].step = 1;
	}

	hueRotate.min = 0;
	hueRotate.max = 360;
	hueRotate.step = 1;

	blur.min = 0;
	blur.max = 50;
	blur.step = 1;

	effects['grayscale'] = grayscale.value + '%';
	effects['sepia'] = sepia.value + '%';
	effects['saturate'] = saturate.value + '%';
	effects['hue-rotate'] = hueRotate.value + 'deg';
	effects['invert'] = invert.value + '%';
	effects['opacity'] = opacity.value + '%';
	effects['brightness'] = brightness.value + '%';
	effects['contrast'] = contrast.value + '%';
	effects['blur'] = blur.value + 'px';
	stringed = '-webkit-filter:';

	for (prop in effects) {
		stringed += prop + '(' + effects[prop]+ ') ';
	};

	stringed += ';'
	editor.style.cssText = stringed;

	

	


}


setInterval('applyFilters()',200);

