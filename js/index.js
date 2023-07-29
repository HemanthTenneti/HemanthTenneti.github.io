let viewingFileSorterSub = false;
let viewingSDBMSSub = false;
let viewingPasswordManagerSub = false;
let viewingWHTRdotlive = false;
let viewingZoomBomber = false;

document
	.getElementById('fileSorterClick')
	.addEventListener('click', (event) => {
		event.preventDefault();
		toggleSub('fileSorterSub', 'viewingFileSorterSub');
	});

document.getElementById('sdbmsClick').addEventListener('click', (event) => {
	event.preventDefault();
	toggleSub('sdbmsSub', 'viewingSDBMSSub');
});

document
	.getElementById('passwordManagerClick')
	.addEventListener('click', (event) => {
		event.preventDefault();
		toggleSub('passwordManagerSub', 'viewingPasswordManagerSub');
	});

document
	.getElementById('WHTRdotliveClick')
	.addEventListener('click', (event) => {
		event.preventDefault();
		toggleSub('WHTRdotliveSub', 'viewingWHTRdotlive');
	});

document
	.getElementById('zoomBomberClick')
	.addEventListener('click', (event) => {
		event.preventDefault();
		toggleSub('zoomBomberSub', 'viewingZoomBomber');
	});

function toggleSub(sub, viewingFlag) {
	const isViewing = window[viewingFlag];
	const subElement = document.getElementById(sub);

	if (!isViewing) {
		subElement.style.display = 'block';
	} else {
		subElement.style.display = 'none';
	}

	window[viewingFlag] = !isViewing;
}
