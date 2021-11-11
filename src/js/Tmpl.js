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

var linkList = document.querySelector('.nav-bar').getElementsByClassName('lk');
for (var i = 0; i < linkList.length; i++) {
	linkList[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('liactive');
		current[0].className = current[0].className.replace(' liactive', '');
		this.className += ' liactive';
	});
}

const hintNo1 = [
	[
		`<div class="hint"><h3>Gợi ý 1</h3><p> Naot đã liệt kê ra được <strong>một số</strong> trạng thái chiến thắng và một số trạng thái thua cuộc dành cho người chơi đầu tiên với Emag min với 3 chồng sỏi: </p> <table id="${'No1-hint1'}"> <tr> <th colspan="2">Trạng thái chiến thắng</th> <th colspan="2">Trạng thái thua cuộc</th> </tr> <tr> <td> <p> 1 1 1 <br /> 1 1 2 <br /> 1 1 3 <br /> 1 1 4 <br /> 1 2 1 <br /> 1 2 2 <br /> 1 2 4 <br /> 1 3 1 <br /> 1 3 3 </p> </td> <td> <p> 1 3 4 <br /> 1 4 1 <br /> 1 4 2 <br /> 1 4 3 <br /> 1 4 4 <br /> 2 1 1 <br /> 2 1 2 <br /> 2 1 4 <br /> 2 2 1 <br /> 2 2 2 </p> </td> <td> <p> 0 0 0 <br /> 0 1 1 <br /> 0 2 2 <br /> 0 3 3 <br /> 0 4 4 <br /> 1 0 1 <br /> 1 1 0 <br /> 1 2 3 <br /> 1 3 2 </p> </td> <td> <p> 2 0 2 <br /> 2 1 3 <br /> 2 2 0 <br /> 2 3 1 <br /> 3 0 3 <br /> 3 1 2 <br /> 3 2 1 <br /> 3 3 0 <br /> 4 0 4 <br /> 4 4 0 </p> </td> </tr> </table> </div>`,
	],
	[
		`<div class="hint"> <h3>Gợi ý 2</h3> <p> Trong ví dụ 1, hãy tính tổng xor 3 số trong các trạng thái chiến thắng, nhận xét các tổng xor đó với tổng xor của các trạng thái thua cuộc, nhận xét tổng xor của các trạng thái chiến thắng và thua cuộc rồi từ đó suy ra kết quả. </p> </div>`,
	],
];
const hintNo2 = [
	[
		`<div class="hint"> <h3>Gợi ý 1</h3> <p> Các bạn có thể áp dụng kiến thức về bao hàm loại trừ như trên hoặc là viết chương trình đơn giản để tính kết quả bài toán </p> </div>`,
	],
	[
		`<div class="hint"> <h3>Gợi ý 2</h3> <p> Số lượng số chia hết cho một số x trong đoạn từ 1 đến n là: ⌊n / x⌋.<br /><strong>Note:</strong> ⌊u⌋: làm tròn xuống số nguyên lớn nhất bé hơn hoặc bằng u. Vd: ⌊2.3⌋ = 2, ⌊2.7⌋ = 2. </p> </div>`,
	],
	[
		`<div class="hint"> <h3>Gợi ý 3</h3> <p> Gọi f(n) là số số chia hết cho n trong đoạn từ 1 đến 100000000.<br />Đáp án của bài toán là: f(2) + f(3) + f(5) - f(2 ⋂ 3) - f(3 ⋂ 5) - f(2 ⋂ 5) + f(2 ⋂ 3 ⋂ 5) </p> </div>`,
	],
];
const hintNo4 = [
	[
		`<div class="hint"> Số lần phải nhập mật khẩu nếu nhập tối ưu là 13 lần. </div><br/>`,
	],
	[
		`<div class="hint"> Nếu số bạn nhập vào lớn hơn mật khẩu gốc nghĩa là các số trong khoảng [1; số vừa nhập] sẽ không phải là mật khẩu, hãy tìm cách loại trừ nhiều số phải kiểm tra nhất có thể. </div><br/>`,
	],
	[
		`<div class="hint"> Gọi đoạn chứa mật khẩu là [l; r] thì hãy nhập vào số mid = (l + r)/2 (trung bình cộng), nếu: <ul> <li> Thông báo là “Lớn hơn mật khẩu gốc” thì đoạn chứa mật khẩu mới là [mid+1; r] </li> <li> Thông báo là “Bé hơn mật khẩu gốc” thì đoạn chứa mật khẩu mới là [l, mid-1] </li> <li> Thông báo là “Mật khẩu chính xác” thì mid chính là mật khẩu. </li> </ul> </div>`,
	],
];
const allHint = [hintNo1, hintNo2, 0, hintNo4, 0, 0];

function getHint(sectionContent, sectionId) {
	let hintBtn = sectionContent.querySelector('.hint-btn');
	hintBtn.classList.toggle('active');

	let hintContent = sectionContent.querySelector('.allhint');
	let hintList = allHint[sectionId];
	let hintCnt = hintList.length;
	let indexHint = 0;
	if (hintCnt > 0) {
		let x = setInterval(() => {
			if (indexHint >= hintCnt) clearInterval(x);
			else hintContent.innerHTML += hintList[indexHint++][0];
		}, 3000);
	}
}

const ans1 = [53355, 13863, 29646, 447];
const ans2 = [75807, 16720, 16720, 16720, 16720, 16720, 16720, 13863];
const ans3 = [12, 28];
const ans4 = [53355, 53355, 82345, 82345];
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
];
const ans6 = [
	[79584, 82345, 37564, 40513, 79584],
	[92134, 55950, 88939],
];
const ansAll = [ans1, ans2, ans3, ans4, ans5, ans6];

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
			getHint(e.path[3], Number(e.path[3].getAttribute('sectionId')));
		});
	}

	let answerInputList =
		sectionList[itemIndex].querySelectorAll('input[type="text"]');
	let answerLength = answerInputList.length;
	if (answerLength) {
		if (itemIndex === 2) {
			var passCheck = [0, 0];
			for (let indexInput = 0; indexInput < 2; indexInput++) {
				answerInputList[indexInput].addEventListener('keydown', (e) => {
					if (e.keyCode === 13) {
						let userAnswer = e.path[0].value.trim();
						let path = e.path[4].getAttribute('sectionId');
						let idAnswer = Number(e.path[0].id);
						let sysAnswer = ansAll[path][idAnswer];
						console.log(sysAnswer);
						// if (userAnswer == sysAnswer) {
						// 	e.path[1]
						// 		.querySelector('.wrong')
						// 		.classList.remove('active');
						// 	e.path[1]
						// 		.querySelector('.correct')
						// 		.classList.add('active');
						// 	passCheck[indexInput] = 1;
						// 	if (passCheck[0] === passCheck[1] && passCheck[0]) {
						// 		sectionXXXX.classList.add('finish');
						// 		let navFin = e.path[6]
						// 			.querySelector('.nav-links')
						// 			.getElementsByClassName('lk')[path];
						// 		navFin.classList.add('finish');
						// 		navFin.classList.add('lifin');
						// 	}
						// } else {
						// 	// console.log('WA');
						// 	e.path[1]
						// 		.querySelector('.wrong')
						// 		.classList.add('active');
						// 	e.path[1]
						// 		.querySelector('.correct')
						// 		.classList.remove('active');
						// }
					}
				});
			}
		} else if (itemIndex === 3) {
			answerInputList[0].addEventListener('keydown', (e) => {
				if (e.keyCode === 13) {
					let userAnswer = e.path[0].value.trim();
					let path = e.path[4].getAttribute('sectionId');
					let sysAnswer = deCode(ansAll[path]);
					console.log(userAnswer, sysAnswer);
					if (userAnswer == sysAnswer) {
						console.log('AC');
					} else {
						console.log('WA');
					}
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
							// console.log('AC');
							let navFin = e.path[6]
								.querySelector('.nav-links')
								.getElementsByClassName('lk')[path];
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
		} else if (itemIndex === 5) {
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
							// console.log('AC');
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
								navFin.classList.add('finish');
								navFin.classList.add('lifin');
							}
						} else {
							// console.log('WA');
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
							console.log(e.path);
							let userAnswer = e.path[0].value.trim();
							let path = e.path[6].getAttribute('sectionId');
							let idAnswer = Number(e.path[0].id);
							let sysAnswer = deCode(ansAll[path][idAnswer]);
							console.log(userAnswer, sysAnswer);
							if (userAnswer == sysAnswer) {
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
									e.path[6].classList.add('finish');
									let navFin = e.path[8]
										.querySelector('.nav-links')
										.getElementsByClassName('lk')[path];
									navFin.classList.add('finish');
									navFin.classList.add('lifin');
								}
							} else {
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
						// console.log('AC');
						console.log(e.path[6]);
						let navFin = e.path[6]
							.querySelector('.nav-links')
							.getElementsByClassName('lk')[path];
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
						// console.log('WA');
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

function allowDrop(e) {
	e.preventDefault();
}

function drag(e) {
	e.dataTransfer.setData('text', e.target.id);
}

function drop(e) {
	e.preventDefault();
	var data = e.dataTransfer.getData('text');
	e.target.appendChild(document.getElementById(data));
}
