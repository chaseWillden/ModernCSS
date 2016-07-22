window.addEventListener('click', function(e){
	if (e.target.className.indexOf('anchor') > -1){
		var ele = document.createElement('input');
		ele.type = 'text';
		ele.value = window.location.href + '#' + e.target.id;
		ele.id = 'anchor-container';
		document.body.appendChild(ele);
		ele.select();
		document.execCommand('copy');
		document.body.removeChild(ele);
	}
})