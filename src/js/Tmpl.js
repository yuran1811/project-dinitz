'use strict';

$('.nav-bar a').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	const id = Number(href[href.length - 1]);
	$('html, body').animate({ scrollTop: $(href).offset().top - 100 }, 1);
});

$('.to-top a').on('click', function (e) {
	e.preventDefault();
	const href = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(href).offset().top - 100 }, 1);
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

$('.nav-overlay').on('click', function (e) {
	$('.nav-bar').removeClass('active');
	$('#menu-bar1').removeClass('active');
	$('#menu-bar2').removeClass('active');
});

window.onscroll = () => {
	const toTop = document.querySelector('.to-top');
	if (
		document.body.scrollTop > 300 ||
		document.documentElement.scrollTop > 300
	)
		toTop.style.display = 'block';
	else toTop.style.display = 'none';
};

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
		`<div class="hint"> <h3>Gợi ý 1</h3> Số lần phải nhập mật khẩu nếu nhập tối ưu là 13 lần. </div><br/>`,
	],
	[
		`<div class="hint"> <h3>Gợi ý 2</h3> Nếu số bạn nhập vào lớn hơn mật khẩu gốc nghĩa là các số trong khoảng [1; số vừa nhập] sẽ không phải là mật khẩu, hãy tìm cách loại trừ nhiều số phải kiểm tra nhất có thể. </div><br/>`,
	],
	[
		`<div class="hint"> <h3>Gợi ý 3</h3> Gọi đoạn chứa mật khẩu là [l; r] thì hãy nhập vào số mid = (l + r)/2 (trung bình cộng), nếu: <ul> <li> Thông báo là “Lớn hơn mật khẩu gốc” thì đoạn chứa mật khẩu mới là [mid+1; r] </li> <li> Thông báo là “Bé hơn mật khẩu gốc” thì đoạn chứa mật khẩu mới là [l, mid-1] </li> <li> Thông báo là “Mật khẩu chính xác” thì mid chính là mật khẩu. </li> </ul> </div>`,
	],
];
const allHint = [hintNo1, hintNo2, 0, hintNo4, 0, 0];

function getHint(sectionItem, sectionId) {
	let hintBtn = sectionItem.querySelector('.hint-btn');
	hintBtn.classList.toggle('active');

	let hintContent = sectionItem.querySelector('.allhint');
	let hintList = allHint[sectionId];
	var hintCnt = hintList.length;
	var indexHint = 0;

	const timerCountdown = sectionItem.querySelector('.timer');
	const hintTime = 3;
	let countDown = 2;
	let hintRemain = hintList.length;

	if (hintCnt > 0) {
		timerCountdown.style.display = 'inline';
	}

	let y = setInterval(() => {
		timerCountdown.innerHTML = countDown--;
		if (countDown < 0) {
			if (indexHint === hintCnt - 1) {
				clearInterval(y);
				let z = setTimeout(() => {
					timerCountdown.innerHTML = 'Hết gợi ý rồi';
				}, 1000);
			} else countDown = hintTime;
		}
	}, 1000);

	let x = setInterval(() => {
		if (hintCnt > 0) {
			if (indexHint >= hintCnt) clearInterval(x);
			else hintContent.innerHTML += hintList[indexHint++][0];
		}
	}, 4000);
}

const challengeNo6 = [
	`<h3>Phần 1</h3> <p> Tưởng tượng bạn muốn gửi tin nhắn tỏ tình B. Bạn muốn chỉ B mới có thể đọc được tin nhắn này, còn lại không ai có thể đọc được, nên bạn tìm một cách để “mã hoá” nội dung tin nhắn. Bạn sẽ làm thế nào? </p> <p> Thật ra, bạn sẽ không phải nghĩ nhiều đâu, bởi, 3 học giả người Mỹ và Israel đã phát minh ra thuật toán Rivest–Shamir–Adleman (RSA). Đây là một thuật toán được sử dụng rộng rãi trong việc truyền thông tin dữ liệu một cách bảo mật. Một phép so sánh thực tế có thể được hiểu như sau: </p> <p> Bạn viết thư gửi cho B, để an toàn thì bạn cho bức thư vào một chiếc hộp có khóa, rồi khóa nó lại. Bạn gửi chiếc hộp đã khoá cho B.<br />Với tình huống này, nếu có người ăn cắp được chiếc hộp, người ta cũng không có cách nào mở khoá để đọc được nội dung bức thư vì không có chìa khoá.<br />Tuy nhiên vấn đề phát sinh lúc này là bạn phải tìm cách đưa chiếc chìa khoá cho B. Ta quay lại vấn đề ban đầu, bởi vì nếu một kẻ gian có thể ăn cắp được chiếc chìa khoá này, hắn ta cũng có thể mở khoá chiếc hộp rồi đọc nội dung thư.<br />Bạn có thể nghĩ ra một cách làm tốt hơn chứ? </p> <p> Trước tiên, bạn nhờ B gửi cho bạn một ổ khoá có thể khoá được mà không cần chìa (nhưng đã khoá rồi thì muốn mở khóa thì phải có chìa khoá - đương nhiên rồi). Bạn viết bức thư, cho vào hộp và khóa hộp bằng ổ của B, rồi đưa hộp cho B. Bây giờ, nếu có kẻ gian nào lấy được chiếc hộp thì hắn cũng không thể mở hộp, bởi người duy nhất có thể mở hộp là B vì B là người duy nhất có chìa khoá. Dễ thấy là B không cần cho bạn chiếc chìa khoá (thật ra là không thể gửi cho bạn chiếc chìa khoá). Do đó để ý rằng, khi bạn đã khoá chiếc hộp rồi thì chính bạn cũng không thể mở nó. </p> <p> Bạn muốn gửi tin nhắn “IUB” đến B. B cho bạn ổ khoá toán học là cặp số<br />(n, e) = (114791, 13) </p> <p> Bạn hãy tính toán phiên bản bị mã hoá của tin nhắn “IUB” bằng thuật toán sau: </p> <p> Bước 1: Chuyển nội dung tin nhắn từ dạng chữ sang dạng số. Ở đây ta quy ước A = 01, B = 02, …, Z = 26. Ví dụ như: “HAO” được chuyển sang dạng số thành 080115, còn “ABCXYZ” thì thành 010203242526. Gọi kết quả tính được là m. </p> <p> Bước 2: Tính<br /> c = m^e mod n.<br />Trong đó phép tính mod có nghĩa là phần dư của phép chia.<br />Ví dụ: 10 mod 3 = 1 vì 10 chia 3 dư 1; 2^10 mod 100 = 24 vì 2^10 = 1024, sau đó 1024 chia 100 thì dư 24. </p> <p>Bước 3: Gửi kết quả c cho B.</p>`,

	`<h3>Phần 2</h3> <p> Oh, B đã đọc được tâm tư tình cảm của bạn và phản hồi bạn bằng một lá thư… cũng bị mã hoá. À, bạn nhớ ra rằng bạn cũng từng đưa cho B một ổ khoá, là một cặp số (n’, p’) = (135931, 87353). Tin chắc rằng B đã khoá tin nhắn bằng chính chiếc ổ khoá này, bạn mò tìm lại chìa khóa của ổ, và may mắn thay bạn đã tìm ra chìa khoá, chính là q = 17<br />Tin nhắn đã mã hoá mà bạn nhận được từ B là c’ = 101811, bạn hãy theo dõi thuật toán sau để tìm lại thông điệp mà B đã nhắn cho bạn! </p> <p> Bước 1: Tính<br /> m = c’^q mod n’ </p> <p> Bước 2: Chuyển số m vừa nhận được về dạng văn bản.<br />Ví dụ nếu số nhận được là 12251225 thì ta giải được văn bản là LYLY </p>`,
];

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
	sectionList[
		itemIndex
	].innerHTML += `<i class="fas fa-lock lock" style="display: block"></i>`;
}

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
	if (challengeContent) {
		challengeBtn.addEventListener('click', (e) => {
			challengeBtn.classList.toggle('active');
			challengeContent.classList.toggle('active');
			if (itemIndex === 5) {
				document.querySelector('.no6-part1').style.display = 'block';
			}
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
	let submitBtnList = sectionList[itemIndex].querySelectorAll('.submit-btn');
	let submitListLength = submitBtnList.length;

	if (answerLength || submitListLength) {
		if (itemIndex === 2) {
			let passCheck = [0, 0];
			for (var submitBtn of submitBtnList) {
				submitBtn.addEventListener('click', (e) => {
					let indexSubmitBtn = Number(
						e.path[0].getAttribute('idSubmit')
					);

					let boxList = e.path[1].querySelectorAll('.box');
					let boxListSize = boxList.length;

					let itemList = e.path[2].querySelectorAll('.allItem .item');

					let path = Number(e.path[6].getAttribute('sectionId'));

					let countNumFillBox = 0;
					for (let boxItem of boxList) {
						let itemInBox = boxItem.getElementsByClassName('item');
						if (
							itemInBox[0].getAttribute('catch') ===
							boxItem.getAttribute('try')
						)
							countNumFillBox++;
					}

					if (countNumFillBox === boxListSize) {
						e.path[2]
							.querySelector('.wrong')
							.classList.remove('active');
						e.path[2]
							.querySelector('.correct')
							.classList.add('active');
						if (indexSubmitBtn === 0) {
							document.querySelector(
								'#No3 .part2'
							).style.display = 'block';
						}
						passCheck[indexSubmitBtn] = 1;
						if (passCheck[0] === passCheck[1] && passCheck[0]) {
							let navFin = e.path[8]
								.querySelector('.nav-links')
								.getElementsByClassName('lk')[path];
							navFin.classList.add('finish', 'lifin');
							e.path[6].classList.add('finish');
						}
					} else {
						document.querySelector('audio').play();
						console.log(e);
						e.path[2]
							.querySelector('.wrong')
							.classList.add('active');
						e.path[2]
							.querySelector('.correct')
							.classList.remove('active');
					}
				});
			}
		} else if (itemIndex === 3) {
			answerInputList[0].addEventListener('keydown', (e) => {
				if (e.keyCode === 13) {
					let userAnswer = Number(
						e.path[0].value.trim().toLowerCase()
					);
					let path = Number(e.path[4].getAttribute('sectionId'));
					let sysAnswer = Number(deCode(ansAll[path]));
					if (!(1 <= userAnswer && userAnswer <= 8192)) {
						e.path[1]
							.querySelector('.increase')
							.classList.remove('active');
						e.path[1]
							.querySelector('.decrease')
							.classList.remove('active');
						e.path[1]
							.querySelector('.correct')
							.classList.remove('active');
						e.path[1]
							.querySelector('.wrong')
							.classList.add('active');

						e.path[1].querySelector('p').innerHTML =
							'Em đi xa quá, em đi đi xa Dinitz quá!!!';

						$(`#No${path + 1} input[type='text']`).attr(
							'disabled',
							'disabled'
						);
						setTimeout(() => {
							$(`#No${path + 1} input[type='text']`).removeAttr(
								'disabled'
							);
							e.path[1]
								.querySelector('.wrong')
								.classList.remove('active');
							e.path[1].querySelector('p').innerHTML = '';
						}, 3000);
					} else {
						if (userAnswer > sysAnswer) {
							e.path[1]
								.querySelector('.increase')
								.classList.remove('active');
							e.path[1]
								.querySelector('.decrease')
								.classList.add('active');
							e.path[1]
								.querySelector('.correct')
								.classList.remove('active');
							e.path[1]
								.querySelector('.wrong')
								.classList.remove('active');

							e.path[1].querySelector('p').innerHTML =
								'Xuống đi, cao quá!!!';

							$(`#No${path + 1} input[type='text']`).attr(
								'disabled',
								'disabled'
							);
							setTimeout(() => {
								$(
									`#No${path + 1} input[type='text']`
								).removeAttr('disabled');
								e.path[1]
									.querySelector('.decrease')
									.classList.remove('active');
								e.path[1].querySelector('p').innerHTML = '';
							}, 3000);
						} else if (userAnswer < sysAnswer) {
							e.path[1]
								.querySelector('.increase')
								.classList.add('active');
							e.path[1]
								.querySelector('.decrease')
								.classList.remove('active');
							e.path[1]
								.querySelector('.correct')
								.classList.remove('active');
							e.path[1]
								.querySelector('.wrong')
								.classList.remove('active');
							e.path[1].querySelector('p').innerHTML =
								'Lên đi em ưi!!!';

							$(`#No${path + 1} input[type='text']`).attr(
								'disabled',
								'disabled'
							);
							setTimeout(() => {
								$(
									`#No${path + 1} input[type='text']`
								).removeAttr('disabled');
								e.path[1]
									.querySelector('.increase')
									.classList.remove('active');
								e.path[1].querySelector('p').innerHTML = '';
							}, 3000);
						} else {
							let navFin = e.path[6]
								.querySelector('.nav-links')
								.getElementsByClassName('lk')[path];
							navFin.classList.add('finish', 'lifin');
							e.path[4].classList.add('finish');
							e.path[1]
								.querySelector('.correct')
								.classList.add('active');
							e.path[1]
								.querySelector('.wrong')
								.classList.remove('active');
							e.path[1]
								.querySelector('.increase')
								.classList.remove('active');
							e.path[1]
								.querySelector('.decrease')
								.classList.remove('active');
							e.path[1].querySelector('p').innerHTML =
								'Ghêk Ghêk';
						}
					}
				}
			});
		} else if (itemIndex === 4) {
			let passCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for (
				let indexAnswer = 0;
				indexAnswer < answerLength;
				indexAnswer++
			) {
				answerInputList[indexAnswer].addEventListener(
					'keydown',
					(e) => {
						if (e.keyCode === 13) {
							let userAnswer = e.path[0].value
								.trim()
								.toLowerCase();
							let path = Number(
								e.path[6].getAttribute('sectionId')
							);
							let idAnswer = Number(e.path[0].id);
							let sysAnswer = deCode(ansAll[path][idAnswer]);
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
									navFin.classList.add('finish', 'lifin');
								}
							} else {
								// document.querySelector('audio').play();
								// e.path[1]
								// 	.querySelector('.wrong')
								// 	.classList.add('active');
								e.path[1]
									.querySelector('.correct')
									.classList.remove('active');

								$(`#No${path + 1} input[type='text']`).attr(
									'disabled',
									'disabled'
								);
								setTimeout(() => {
									$(
										`#No${path + 1} input[type='text']`
									).removeAttr('disabled');
									e.path[1]
										.querySelector('.wrong')
										.classList.remove('active');
								}, 3000);
							}
						}
					}
				);
			}
		} else if (itemIndex === 5) {
			let passCheck = [0, 0];
			for (let indexInput = 0; indexInput < 2; indexInput++) {
				answerInputList[indexInput].addEventListener('keydown', (e) => {
					if (e.keyCode === 13) {
						let userAnswer = e.path[0].value.trim().toLowerCase();
						let path = Number(e.path[5].getAttribute('sectionId'));
						let idAnswer = Number(e.path[0].id);
						let sysAnswer = deCode(ansAll[path][idAnswer]);
						if (userAnswer == sysAnswer) {
							if (!passCheck[0]) {
								e.path[5].querySelector(
									'.no6-part2 .contentp2'
								).innerHTML += challengeNo6[1];
								e.path[5].querySelector(
									'.no6-part2 input'
								).style.display = 'block';
							}
							e.path[1]
								.querySelector('.wrong')
								.classList.remove('active');
							e.path[1]
								.querySelector('.correct')
								.classList.add('active');
							passCheck[indexInput] = 1;
							if (passCheck[0] === passCheck[1] && passCheck[0]) {
								e.path[5].classList.add('finish');
								let navFin = document
									.querySelector('.nav-links')
									.getElementsByClassName('lk')[path];
								navFin.classList.add('finish', 'lifin');
							}
						} else {
							document.querySelector('audio').play();
							e.path[1]
								.querySelector('.wrong')
								.classList.add('active');
							e.path[1]
								.querySelector('.correct')
								.classList.remove('active');

							$(`#No${path + 1} input[type='text']`).attr(
								'disabled',
								'disabled'
							);
							setTimeout(() => {
								$(
									`#No${path + 1} input[type='text']`
								).removeAttr('disabled');
								e.path[1]
									.querySelector('.wrong')
									.classList.remove('active');
							}, 3000);
						}
					}
				});
			}
		} else {
			answerInputList[0].addEventListener('keydown', (e) => {
				if (e.keyCode === 13) {
					let userAnswer = answerInputList[0].value
						.trim()
						.toLowerCase();
					let path = Number(e.path[4].getAttribute('sectionId'));
					let sysAnswer = deCode(ansAll[path]);
					if (userAnswer == sysAnswer) {
						let navFin = e.path[6]
							.querySelector('.nav-links')
							.getElementsByClassName('lk')[path];
						navFin.classList.add('finish', 'lifin');
						e.path[4].classList.add('finish');
						e.path[1]
							.querySelector('.wrong')
							.classList.remove('active');
						e.path[1]
							.querySelector('.correct')
							.classList.add('active');
					} else {
						document.querySelector('audio').play();
						e.path[1]
							.querySelector('.wrong')
							.classList.add('active');
						e.path[1]
							.querySelector('.correct')
							.classList.remove('active');

						$(`#No${path + 1} input[type='text']`).attr(
							'disabled',
							'disabled'
						);
						setTimeout(() => {
							$(`#No${path + 1} input[type='text']`).removeAttr(
								'disabled'
							);
							e.path[1]
								.querySelector('.wrong')
								.classList.remove('active');
						}, 3000);
					}
				}
			});
		}
	}
}

const unlockedKey = [
	[1, 0],
	[2, 1],
	[3, 2],
	[4, 3],
	[5, 4],
	[6, 5],
];

document.querySelector('.banner input').addEventListener('keydown', (e) => {
	if (e.keyCode === 8) {
		$('html, body').animate({ scrollTop: $('#top').offset().top - 100 }, 1);
	}
	if (e.keyCode === 13) {
		const keyReceive = Number(e.path[0].value.trim());
		let cntWrong = 0;
		for (let keyItem of unlockedKey) {
			if (keyReceive == keyItem[0]) {
				sectionList[keyItem[1]].className = sectionList[
					keyItem[1]
				].className.replace(' locked', '');
				const thisLink =
					document.querySelectorAll('.nav-links .lk')[keyItem[1]];
				thisLink.className = thisLink.className.replace(
					' lilocked',
					''
				);
				e.path[1].querySelector('p').style.color = '#32D700';
				e.path[1].querySelector('p').innerHTML = `No${
					keyItem[1] + 1
				} đã mở khóa`;
				$('html, body').animate(
					{ scrollTop: $(`#No${keyItem[1] + 1}`).offset().top - 100 },
					900
				);
				if (keyItem[1] === 5) {
					document.querySelector('#No6 .contentp1').innerHTML +=
						challengeNo6[0];
				}
				if (keyItem[1] === 2)
					document.querySelector('#No3 .part1').style.display =
						'block';

				sectionList[keyItem[1]].querySelector('.lock').style.display =
					'none';
			} else cntWrong++;
		}
		if (cntWrong === 6) {
			e.path[1].querySelector('p').style.color = 'red';
			e.path[1].querySelector('p').innerHTML = 'Key is invalid';
			setTimeout(function () {
				e.path[1].querySelector('p').innerHTML = '';
			}, 2000);
		}
	}
});

const allLinks = document.querySelectorAll('.lk');
for (var link of allLinks) {
	link.classList.add('lilocked');
	link.addEventListener('click', (e) => {
		if (e.path[1].className.includes('lilocked')) {
			document.querySelector('.banner p').style.color = 'black';
			document.querySelector('.banner p').innerHTML =
				'Vui lòng điền key để làm bài này!!!';
			setTimeout((e) => {
				document.querySelector('.banner p').innerHTML = '';
			}, 1300);
			$('html, body').animate(
				{ scrollTop: $('#top').offset().top - 100 },
				1
			);
		}
	});
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
