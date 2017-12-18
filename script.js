
window.addEventListener('load', () => {
	if(window.Worker == null){
		console.log('not supported web workers');
		return;
	}

	let work = new Worker('worker.js');

	work.onmessage = (eve) => {
		console.log(eve.data);
		console.log(Object.prototype.toString(eve.data));
	};

	let data = [0, 1, 2, 2, 1, 3];
	work.postMessage(data);
}, false);

