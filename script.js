
window.addEventListener('load', () => {
	if(window.Worker == null){
		console.log('not supported web workers');
		return;
	}

	let work = new Worker('worker.js');


}, false);

