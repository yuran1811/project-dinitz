// Link Effect
var linkList = document.querySelector('.nav-bar').getElementsByClassName('lk');
for (var i = 0; i < linkList.length; i++) {
	linkList[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('liactive');
		current[0].className = current[0].className.replace(' liactive', '');
		this.className += ' liactive';
	});
}

// Content Progress
function getHint(sectionContent) {
	let hintBtn = sectionContent.querySelector('.hint-btn');
	hintBtn.classList.toggle('active');

	let hintContent = sectionContent.getElementsByClassName('hint');
	let hintCnt = hintContent.length;
	// console.log(hintContent);
	let indexHint = 0;
	if (hintCnt > 0) {
		let x = setInterval(() => {
			console.log('Start Hint');
			console.log(indexHint, hintCnt);
			if (indexHint >= hintCnt) clearInterval(x);
			else hintContent[indexHint++].classList.add('active');
		}, 1000);
	}
}

var sectionList = document.querySelectorAll('section');
var sectionListLth = sectionList.length;
for (var itemIndex = 0; itemIndex < sectionListLth; itemIndex++) {
	let infoBtn = sectionList[itemIndex].querySelector('.info-btn');
	let infoContent = sectionList[itemIndex].querySelector('.info');

	if (infoBtn && infoContent) {
		infoBtn.addEventListener('click', (e) => {
			infoBtn.classList.toggle('active');
			infoContent.classList.toggle('active');
		});
	}

	let challengeBtn = sectionList[itemIndex].querySelector('.challenge-btn');
	let challengeContent =
		sectionList[itemIndex].querySelector('.challenge-content');
	challengeBtn.addEventListener('click', (e) => {
		challengeBtn.classList.toggle('active');
		challengeContent.classList.toggle('active');
	});

	let hintBtn = sectionList[itemIndex].querySelector('.hint-btn');
	if (hintBtn) {
		hintBtn.addEventListener('click', (e) => {
			console.log(e.path[2]);
			getHint(e.path[2]);
		});
	}

	$('sectionList[itemIndex] input[class="answer"]').on('keydown', (e) => {
		if (e.keyCode === 13) console.log(1);
	});
}

$('.nav-bar a').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(href).offset().top }, 900);
});

$('.to-top a').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(href).offset().top }, 900);
});

$('.toggle-theme').on('click', function (e) {
	$('body').toggleClass('dark');
	$('.moon').toggleClass('active');
	$('.sun').toggleClass('active');
});

$('.menu').on('click', function (e) {
	$('.nav-bar').toggleClass('active');
	$('#menu-bar1').toggleClass('active');
	$('#menu-bar2').toggleClass('active');
});
