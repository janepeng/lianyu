function hasGetUserMedia() {
	return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

var videoDiv = '<video autoplay></video>';
var videoDropdown = '<div class="select"><label for="videoSource">Video source: </label><select id="videoSource"></select></div>';
var img = '<img src="">';
var canvas = '<canvas style="display:none;"></canvas>';

// put div in dom
$(videoDropdown).insertAfter('.table:first');
$(videoDiv).insertAfter('.table:first');

const constraints = {
	video: {width: {min: 360}, height: {min: 360}}
};
const video = document.querySelector('video');
var videoSelect = document.querySelector('select#videoSource');
videoSelect.onchange = getStream;

function loadVideoDiv() {
	navigator.mediaDevices.enumerateDevices()
  		.then(gotDevices).then(getStream);

	navigator.mediaDevices.getUserMedia(constraints)
		.then(function(stream) {
			video.srcObject = stream;
		}).catch(function(error) {
			console.error('Rejected', error);
		});
}

function gotStream(stream) {
  videoElement.srcObject = stream;
}

function getStream() {
  var constraints = {
    video: {
      deviceId: {exact: videoSelect.value}
    }
  };

  navigator.mediaDevices.getUserMedia(constraints).
    then(gotStream);
}

function gotDevices(deviceInfos) {
	for (var i = 0; i !== deviceInfos.length; ++i) {
		var deviceInfo = deviceInfos[i];
		var option = document.createElement('option');
		option.value = deviceInfo.deviceId;
		if (deviceInfo.kind === 'videoinput') {
			option.text = deviceInfo.label || 'camera ' + (videoSelect.length + 1);
			videoSelect.appendChild(option);
		}
	}
}

if (hasGetUserMedia()) {
	loadVideoDiv();
} else {
	alert('getUserMedia() is not supported by your browser');
}




