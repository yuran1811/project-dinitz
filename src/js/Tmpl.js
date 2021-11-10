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
	let indexHint = 0;
	if (hintCnt > 0) {
		let x = setInterval(() => {
			if (indexHint >= hintCnt) clearInterval(x);
			else hintContent[indexHint++].classList.add('active');
		}, 1);
	}
}

const ans1 = [53355, 13863, 29646, 447]; /* No1 */
const ans2 = [75807, 16720, 16720, 16720, 16720, 16720, 16720, 13863]; /* No2 */
const ans3 = [[1], [2]]; /* No3 */
const ans4 = [53355, 53355, 82345, 82345]; /* No4 */
const ans5 = [
	[82749, 80695, 23161, 88939, 87286, 91751, 95361, 60752],
	[
		87286, 88027, 87699, 63021, 60319, 33047, 55140, 42383, 63021, 87699,
		91751, 88027,
	],
	[91751, 95361, 4753, 63021, 87699, 87286, 88027],
	[
		82749, 80695, 55950, 10344, 92134, 60752, 63021, 91751, 80695, 63021,
		88695,
	],
	[29617, 55950, 95361],
	[
		83387, 25017, 55140, 87699, 63021, 92134, 22060, 87699, 10344, 92134,
		25017, 63021,
	],
	[24339, 41444, 63021, 60319, 87699, 72439, 7589, 10344],
	[87286, 91751, 95361, 80695, 63021, 60319],
	[73166, 50765, 87699, 55087, 33047, 55140],
	[
		91751, 91350, 38237, 87699, 88939, 80695, 98172, 38237, 87699, 63021,
		92134, 22060, 87699, 10344, 92134, 25017, 63021,
	],
	[73166, 89258, 87699, 91751, 92134, 22060],
	[
		60752, 72439, 60752, 63021, 87699, 91751, 33047, 95361, 80695, 63021,
		60319,
	],
]; /* No5 */
const ans6 = [
	[79584, 82345, 37564, 40513, 79584],
	[92134, 55950, 88939],
]; /* No6 */

const ansAll = [ans1, ans2, ans3, ans4, ans5, ans6];
/*   			 0      1     2     3    4 		5*/

function PowPow(a, b, p) {
	if (!b) return 1;
	let c = PowPow(a, b / 2, p);
	c = (c * c) % p;
	if (b & 1) c = (c * a) % p;
	return c;
}

function deCode(ansArray) {
	let res = [];
	for (var item of ansArray)
		res.push(String.fromCharCode(PowPow(item, 42143, 98473)));
	return res.join('');
}

var sectionList = document.querySelectorAll('section');
var sectionListLth = sectionList.length;
for (var itemIndex = 0; itemIndex < sectionListLth; itemIndex++) {
	var sectionXXXX = sectionList[itemIndex];
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
	if (challengeContent) {
		challengeBtn.addEventListener('click', (e) => {
			challengeBtn.classList.toggle('active');
			challengeContent.classList.toggle('active');
		});
	}

	let hintBtn = sectionList[itemIndex].querySelector('.hint-btn');
	if (hintBtn) {
		hintBtn.addEventListener('click', (e) => {
			getHint(e.path[2]);
		});
	}

	let answerInputList =
		sectionList[itemIndex].querySelectorAll('input[type="text"]');
	let answerLength = answerInputList.length;
	if (answerLength) {
		if (itemIndex === 3) {
			answerInputList[0].addEventListener('keydown', (e) => {
				if (e.keyCode === 13) {
					let userAnswer = e.path[0].value.trim();
					let path = e.path[4].getAttribute('sectionId');
					let sysAnswer = deCode(ansAll[path]);
					console.log(userAnswer, sysAnswer);
					if (userAnswer == sysAnswer) console.log('AC');
					else console.log('WA');
					if (!(1 <= userAnswer && userAnswer <= 8192))
						console.log('Out of range [1; 8192]');
					else {
						if (userAnswer > sysAnswer) {
							console.log('Larger');
							e.path[1]
								.querySelector('.wrong')
								.classList.add('active');
							e.path[1]
								.querySelector('.correct')
								.classList.remove('active');
						} else if (userAnswer < sysAnswer) {
							console.log('Smaller');
							e.path[1]
								.querySelector('.wrong')
								.classList.add('active');
							e.path[1]
								.querySelector('.correct')
								.classList.remove('active');
						} else {
							console.log('AC');
							let navFin = e.path[6]
								.querySelector('.nav-links')
								.getElementsByClassName('lk')[path];
							console.log(navFin);
							navFin.classList.add('finish');
							navFin.classList.add('lifin');
							e.path[4].classList.add('finish');
							e.path[1]
								.querySelector('.wrong')
								.classList.remove('active');
							e.path[1]
								.querySelector('.correct')
								.classList.add('active');
						}
					}
				}
			});
		} else if (itemIndex === 2 || itemIndex === 5) {
			var passCheck = [0, 0];
			for (let indexInput = 0; indexInput < 2; indexInput++) {
				answerInputList[indexInput].addEventListener('keydown', (e) => {
					if (e.keyCode === 13) {
						let userAnswer = e.path[0].value.trim();
						let path = e.path[4].getAttribute('sectionId');
						let idAnswer = Number(e.path[0].id);
						let sysAnswer = deCode(ansAll[path][idAnswer]);
						console.log(sysAnswer);
						if (userAnswer == sysAnswer) {
							console.log('AC');
							e.path[1]
								.querySelector('.wrong')
								.classList.remove('active');
							e.path[1]
								.querySelector('.correct')
								.classList.add('active');
							passCheck[indexInput] = 1;
							if (passCheck[0] === passCheck[1] && passCheck[0]) {
								sectionXXXX.classList.add('finish');
								let navFin = e.path[6]
									.querySelector('.nav-links')
									.getElementsByClassName('lk')[path];
								console.log(navFin);
								navFin.classList.add('finish');
								navFin.classList.add('lifin');
							}
						} else {
							console.log('WA');
							e.path[1]
								.querySelector('.wrong')
								.classList.add('active');
							e.path[1]
								.querySelector('.correct')
								.classList.remove('active');
						}
					}
				});
			}
		} else if (itemIndex === 4) {
			var passCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for (
				let indexAnswer = 0;
				indexAnswer < answerLength;
				indexAnswer++
			) {
				answerInputList[indexAnswer].addEventListener(
					'keydown',
					(e) => {
						if (e.keyCode === 13) {
							let userAnswer = e.path[0].value.trim();
							let path = e.path[5].getAttribute('sectionId');
							let idAnswer = Number(e.path[0].id);
							let sysAnswer = deCode(ansAll[path][idAnswer]);
							console.log(userAnswer, sysAnswer);
							if (userAnswer == sysAnswer) {
								console.log('AC');
								e.path[1]
									.querySelector('.wrong')
									.classList.remove('active');
								e.path[1]
									.querySelector('.correct')
									.classList.add('active');
								passCheck[indexAnswer] = 1;
								let cntCheck = 0;
								for (let idCheck = 0; idCheck < 12; idCheck++) {
									if (passCheck[idCheck] === 1) cntCheck++;
								}
								if (cntCheck === 12) {
									e.path[5].classList.add('finish');
									let navFin = e.path[7]
										.querySelector('.nav-links')
										.getElementsByClassName('lk')[path];
									console.log(navFin);
									navFin.classList.add('finish');
									navFin.classList.add('lifin');
								}
							} else {
								console.log('WA');
								e.path[1]
									.querySelector('.wrong')
									.classList.add('active');
								e.path[1]
									.querySelector('.correct')
									.classList.remove('active');
							}
						}
					}
				);
			}
		} else {
			answerInputList[0].addEventListener('keydown', (e) => {
				if (e.keyCode === 13) {
					let userAnswer = answerInputList[0].value.trim();
					let path = e.path[4].getAttribute('sectionId');
					let sysAnswer = deCode(ansAll[path]);
					if (userAnswer == sysAnswer) {
						console.log('AC');
						// console.log(e.path[6]);
						let navFin = e.path[6]
							.querySelector('.nav-links')
							.getElementsByClassName('lk')[path];
						console.log(navFin);
						navFin.classList.add('finish');
						navFin.classList.add('lifin');

						e.path[4].classList.add('finish');
						e.path[1]
							.querySelector('.wrong')
							.classList.remove('active');
						e.path[1]
							.querySelector('.correct')
							.classList.add('active');
					} else {
						console.log('WA');
						e.path[1]
							.querySelector('.wrong')
							.classList.add('active');
						e.path[1]
							.querySelector('.correct')
							.classList.remove('active');
					}
				}
			});
		}
	}
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData('text');
	ev.target.appendChild(document.getElementById(data));
}
