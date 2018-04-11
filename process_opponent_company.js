function hasGetUserMedia() {
	return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

function loadVideoDiv() {
	var videoDiv = '<video autoplay></video>';

	// put div in dom
	$(videoDiv).insertAfter('.table:first');

	const constraints = { video: true };
	const video = document.querySelector('video');

	navigator.mediaDevices.getUserMedia(constraints)
		.then(function(stream) {
			video.srcObject = stream;
		}).catch(function(error) {
			console.error('Rejected', error);
		});
}

if (hasGetUserMedia()) {
	alert('woohoo')
	loadVideoDiv()
} else {
	alert('getUserMedia() is not supported by your browser');
}