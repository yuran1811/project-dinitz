const shitsHandle = () => {
	$('.nav-bar a').on('click', function (e) {
		e.preventDefault();
		const href = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(href).offset().top - 100 }, 1);
	});
	$('.to-top a').on('click', function (e) {
		e.preventDefault();
		const href = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(href).offset().top - 100 }, 1);
	});
	$('.toggle-theme').on('click', function () {
		$('body').toggleClass('dark');
		$('.moon').toggleClass('active');
		$('.sun').toggleClass('active');
	});
	$('.menu').on('click', function () {
		$('.nav-bar').toggleClass('active');
		$('#menu-bar1').toggleClass('active');
		$('#menu-bar2').toggleClass('active');
	});
	$('.nav-overlay').on('click', function () {
		$('.nav-bar').removeClass('active');
		$('#menu-bar1').removeClass('active');
		$('#menu-bar2').removeClass('active');
	});
	(() => {
		const toTop = document.querySelector('.to-top');
		window.onscroll = () => {
			if (
				document.body.scrollTop > 220 ||
				document.documentElement.scrollTop > 220
			)
				toTop.style.display = 'block';
			else toTop.style.display = 'none';
		};
	})();
	(() => {
		document.querySelectorAll('.lk').forEach((link) => {
			link.classList.add('lilocked');
			link.addEventListener('click', (e) => {
				if (e.path[1].className.includes('lilocked')) {
					document.querySelector('.banner p').style.color =
						'var(--color)';
					document.querySelector(
						'.banner p'
					).innerHTML = `Vui lòng điền key để làm bài ${e.target.hash}!!!`;
					$('html, body').animate(
						{ scrollTop: $('#top').offset().top - 100 },
						1
					);
				}
			});
		});
	})();
	(() => {
		const bgmItem = document.querySelector('.bgm');
		const bgmIcon = document.querySelector('.bgm > i');
		const allTrack = bgmItem.querySelectorAll('.track audio');
		allTrack.forEach((item) => {
			item.volume = 0.2;
			item.loop = true;
		});

		const bgmItemChild = bgmItem.querySelectorAll('.track > i');
		bgmItemChild.forEach((track) => {
			track.addEventListener('click', (e) => {
				bgmItemChild.forEach((item) => {
					if (item !== e.target)
						item.className = item.className.replace('fa-spin', '');
				});
				const thisTrack = e.path[1].querySelector('audio');
				allTrack.forEach((item) => {
					if (thisTrack !== item) {
						item.pause();
						item.currentTime = 0;
					}
				});

				if (thisTrack.paused) {
					if (!bgmIcon.className.includes('fa-spin'))
						bgmIcon.className += ' fa-spin';
					if (!e.target.className.includes('fa-spin'))
						e.target.className += ' fa-spin';
					thisTrack.play();
				} else {
					e.target.className = e.target.className.replace(
						'fa-spin',
						''
					);
					bgmIcon.className = bgmIcon.className.replace(
						'fa-spin',
						''
					);
					thisTrack.pause();
				}
			});
		});
	})();
};

const templateHandle = () => {
	shitsHandle();

	const wrongAudio = document.querySelector('.fail-sound');
	const finishAudio = document.querySelector('.finish-sound');
	const correctAudio = document.querySelector('.correct-sound');
	correctAudio.volume = wrongAudio.volume = finishAudio.volume = 0.4;

	// Cooldown
	function setWrongCD(item, countDown) {
		item.innerHTML = `<i class="bx bx-alarm bx-tada"></i> ${countDown--}`;
		let x = setInterval(() => {
			item.innerHTML = `<i class="bx bx-alarm bx-tada"></i> ${countDown--}`;
			if (countDown < 0) clearInterval(x);
		}, 1000);
	}

	// Hint Handle
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
			`<div class="hint"> <h3>Gợi ý 3</h3> Gọi đoạn chứa mật khẩu là [l, r] thì hãy nhập vào số mid = (l + r) / 2 (trung bình cộng), nếu: <ul> <li> Thông báo là “Lên đi em ưi” thì đoạn chứa mật khẩu mới là [mid + 1; r] </li> <li> Thông báo là “Xuống đi cao quá” thì đoạn chứa mật khẩu mới là [l, mid - 1] </li> <li> Thông báo là “Ghêk Ghêk” thì mid chính là mật khẩu. </li> </ul> </div>`,
		],
	];
	const allHint = [hintNo1, hintNo2, 0, hintNo4, 0, 0];
	function getHint(sectionItem, sectionId) {
		sectionItem.querySelector('.hint-btn').classList.toggle('active');

		const timerCountdown = sectionItem.querySelector('.timer');
		const hintTime = 3;
		let countDown = 2;

		let hintList = allHint[sectionId];
		var hintCnt = hintList.length;
		var indexHint = 0;

		if (hintCnt > 0) timerCountdown.style.display = 'inline';

		let y = setInterval(() => {
			timerCountdown.innerHTML = `<i class="bx bx-alarm bx-tada"></i> ${countDown--}`;
			if (countDown < 0) {
				if (indexHint === hintCnt - 1) {
					clearInterval(y);
					let z = setTimeout(() => {
						timerCountdown.innerHTML = 'Hết gợi ý rồi';
					}, 1000);
				} else countDown = hintTime;
			}
		}, 1000);

		const hintContent = sectionItem.querySelector('.allhint');
		let x = setInterval(() => {
			if (hintCnt > 0) {
				if (indexHint >= hintCnt) clearInterval(x);
				else hintContent.innerHTML += hintList[indexHint++][0];
			}
		}, 4000);
	}

	// Main Event Handle
	const challengeNo1 = `<p>
								“Chào mừng các thành viên của đội chơi đã đến với
								thử thách “Emag min”, vì sợ các bạn nhàm chán nên
								chúng tôi - “Tổ chức điểm cộng phi lợi nhuận giấu
								tên không ai biết đại diện cho những nhân vật phản
								diện đầy khả ái và ngây ngất lòng người” - đã chuẩn
								bị trước một số trò chơi cho các bạn cùng thưởng
								thức.”
							</p>
							<p>
								Giọng nói ồn ào phát ra từ vô định vang lên ngay sau
								khi chúng tôi hoàn thành thử thách, cánh cửa của
								trạm đóng sầm lại, Naot hoảng loạn chạy ra kiểm tra
								cửa thì thấy rằng trên cửa có một khóa mật khẩu bao
								gồm các ký tự số từ 1 đến 9. Đang loay hoay không
								biết mật khẩu mở như thế nào thì có thành viên phát
								hiện một mẩu giấy trên bàn được đặt giữa trạm được
								viết bằng tiếng Trung. Hoang mang không biết mẫu
								giấy viết gì thì Naot đã tự nhận mình là “Pháp sư
								Trung Hoa” và dịch mẫu giấy như sau:
							</p>
							<p>
								“Emag min” là một trò chơi có từ thời nào không
								biết, thế nhưng Emag min lại là một trong những trò
								chơi cơ sở đặt nền móng cho lĩnh vực lý thuyết trò
								chơi hết sức quan trọng, Emag min trong đề bài lần
								này được phát biểu như sau:
							</p>
							<p>
								Trước mặt bạn là <i>n</i> chồng sỏi, chồng sỏi thứ
								<i>i</i> có
								<i> a<sub>i</sub> </i>
								viên sỏi
								<i> (1 &le; i &le; n) </i>
								, Emag min sẽ bao gồm 2 người chơi luân phiên thực
								hiện các bước đi, một bước đi hợp lệ phát biểu như
								sau:
							</p>
							<ul>
								<li>
									Chọn duy nhất một chồng sỏi bất kì có dương số
									sỏi
								</li>
								<li>
									Bốc ra một số nguyên dương viên sỏi ra khỏi
									chồng sỏi
								</li>
								<li>Kết thúc lượt đi</li>
							</ul>
							<p>
								Trò chơi sẽ kết thúc nếu người chơi không thể thực
								hiện thêm bất kỳ bước đi hợp lệ nào nữa, người thua
								cuộc sẽ là người không thể thực hiện bước đi, người
								còn lại sẽ là người thắng cuộc.
							</p>
							<p>
								Ví dụ về một Emag min với 3 chồng sỏi (lưu ý, 2
								người chơi không tối ưu):
							</p>
							<ul>
								<li>Trạng thái ban đầu: 3 3 3</li>
								<li>
									Lượt 1: 3 3 1 (người chơi 1 bốc 2 viên sỏi ở
									chồng sỏi 3)
								</li>
								<li>
									Lượt 2: 0 3 1 (người chơi 2 bốc 3 viên sỏi ở
									chồng sỏi 1)
								</li>
								<li>
									Lượt 3: 0 1 1 (người chơi 1 bốc 2 viên sỏi ở
									chồng sỏi 2)
								</li>
								<li>
									Lượt 4: 0 0 1 (người chơi 2 bốc 1 viên sỏi ở
									chồng sỏi 2)
								</li>
								<li>
									Lượt 5: 0 0 0 (người chơi 1 bốc 1 viên sỏi ở
									chồng sỏi 3)
								</li>
								<li>
									Lượt 6: 0 0 0, người chơi 2 không thể thực hiện
									bước đi hợp lệ, thua cuộc
								</li>
							</ul>
							<p>Kết quả: Người chơi 1 chiến thắng.</p>
							<p>
								Vừa dịch xong mẫu giấy, một cánh cửa khác mở ra dẫn
								đội chơi đến với một căn phòng gồm 8 bàn được đánh
								số từ 1 đến 8, mỗi bàn được bày sẵn một Emag min với
								4 chồng sỏi, nhiệm vụ của đội chơi là tìm ra 4 bàn
								khác nhau với chỉ số các bàn là bé nhất sao cho khi
								đội của bạn chơi Emag min trên 4 bàn đó với vai trò
								là người đi đầu tiên thì chắc chắn chiến thắng, biết
								rằng đối thủ của bạn luôn luôn thực hiện các bước đi
								tối ưu.
							</p>
							<p>
								Mật khẩu trên cánh cửa bao gồm
								<b> <i> 4 chữ số liên tiếp (không có khoảng trắng) </i> </b>
								, được viết theo thứ tự tăng dần, chỉ có một mật
								khẩu duy nhất có thể vượt qua được cánh cửa đó.
							</p>
							<p>
								Nếu các bạn đang bối rối về việc tại sao chỉ có thể
								có một mật khẩu duy nhất thì chứng minh được rằng
								với mỗi Emag min biết trước trạng thái ban đầu thì
								luôn xác định được thắng thua trước khi chơi.
							</p>
							<p>
								Nào, vì điểm cộng, các bạn hãy cố gắng vượt qua trạm
								này nhé!!!
							</p>
							<ul>
								<li>Trạng thái các chồng sỏi bàn 1: 4 1 1 4</li>
								<li>Trạng thái các chồng sỏi bàn 2: 1 3 3 6</li>
								<li>Trạng thái các chồng sỏi bàn 3: 3 4 2 5</li>
								<li>Trạng thái các chồng sỏi bàn 4: 8 6 6 6</li>
								<li>Trạng thái các chồng sỏi bàn 5: 6 6 1 3</li>
								<li>Trạng thái các chồng sỏi bàn 6: 4 4 7 7</li>
								<li>Trạng thái các chồng sỏi bàn 7: 6 2 3 7</li>
								<li>Trạng thái các chồng sỏi bàn 8: 1 1 1 2</li>
							</ul>`;
	const challengeNo2 = `<p>
								“Chào mừng các thành viên của đội chơi đã đến với
								thử thách “IE”, vì sợ các bạn nhàm chán nên chúng
								tôi - “Tổ chức điểm cộng phi lợi nhuận giấu tên
								không ai biết đại diện cho những nhân vật phản diện
								đầy khả ái và ngây ngất lòng người” - đã chuẩn bị
								trước một trò chơi cho các bạn cùng thưởng thức.”
							</p>
							<p>
								Các bạn đã được đưa tới 1 cây cầu trên không được
								tạo nên từ các ván gỗ đánh số từ 1 tới 100000000. Vì
								cây cầu đã được xây dựng nhiều năm về trước nên một
								số ván gỗ đã bị mục, có thể gãy nếu có người đứng
								trên nó. Các bạn đang đứng ở một bên cầu (được đánh
								số 0) và muốn đi sang phía bên kia cầu (được đánh số
								100000001). Biết rằng các ván được đánh số chia hết
								cho 2, 3 hoặc 5 thì vẫn còn chắc chắn và có thể qua
								được), hãy cho biết số ván gỗ còn chắc chắn trên cây
								cầu để đảm bảo các bạn có thể qua được bờ bên kia.
							</p>
							<h2>Cách trả lời</h2>
							<p>
								Đội chơi điền duy nhất 1 số hệ thập phân là kết quả
								của trò chơi trên.
							</p>`;
	const challengeNo3 = `Năm châu bốn bể thật nhiều nơi để đi qua. Bạn được BTC
							cung cấp sơ đồ giản lược của một số quốc gia và chi phí
							tương ứng để bay giữa các quốc gia. Naot muốn đi qua các
							nước sau: Việt Nam -> Thái Lan -> Ấn Độ. Đi thẳng từ
							nước này sang nước khác cũng được thôi, nhưng Naot muốn
							tiết kiệm tiền để còn đi paylak toàn cầu, nên hãy thiết
							kế cho Naot một lộ trình đi qua các nước sao cho tổng
							chi phí bay là nhỏ nhất nhé.
							<div class="how-to-answer">
								<h2>Cách trả lời</h2>
								Đội chơi trả lời lộ trình tốt nhất ( Lưu ý:
								<b>không xếp chồng</b> các nước lên nhau và xếp theo
								thứ tự từ 1 tới n, với n là số nước tạo thành lộ
								trình trong đáp án của bạn)
							</div>`;
	const challengeNo6 = [
		`<h3>Phần 1</h3> <p> Tưởng tượng bạn muốn gửi tin nhắn tỏ tình B. Bạn muốn chỉ B mới có thể đọc được tin nhắn này, còn lại không ai có thể đọc được, nên bạn tìm một cách để “mã hoá” nội dung tin nhắn. Bạn sẽ làm thế nào? </p> <p> Thật ra, bạn sẽ không phải nghĩ nhiều đâu, bởi, 3 học giả người Mỹ và Israel đã phát minh ra thuật toán Rivest–Shamir–Adleman (RSA). Đây là một thuật toán được sử dụng rộng rãi trong việc truyền thông tin dữ liệu một cách bảo mật. Một phép so sánh thực tế có thể được hiểu như sau: </p> <p> Bạn viết thư gửi cho B, để an toàn thì bạn cho bức thư vào một chiếc hộp có khóa, rồi khóa nó lại. Bạn gửi chiếc hộp đã khoá cho B.<br />Với tình huống này, nếu có người ăn cắp được chiếc hộp, người ta cũng không có cách nào mở khoá để đọc được nội dung bức thư vì không có chìa khoá.<br />Tuy nhiên vấn đề phát sinh lúc này là bạn phải tìm cách đưa chiếc chìa khoá cho B. Ta quay lại vấn đề ban đầu, bởi vì nếu một kẻ gian có thể ăn cắp được chiếc chìa khoá này, hắn ta cũng có thể mở khoá chiếc hộp rồi đọc nội dung thư.<br />Bạn có thể nghĩ ra một cách làm tốt hơn chứ? </p> <p> Trước tiên, bạn nhờ B gửi cho bạn một ổ khoá có thể khoá được mà không cần chìa (nhưng đã khoá rồi thì muốn mở khóa thì phải có chìa khoá - đương nhiên rồi). Bạn viết bức thư, cho vào hộp và khóa hộp bằng ổ của B, rồi đưa hộp cho B. Bây giờ, nếu có kẻ gian nào lấy được chiếc hộp thì hắn cũng không thể mở hộp, bởi người duy nhất có thể mở hộp là B vì B là người duy nhất có chìa khoá. Dễ thấy là B không cần cho bạn chiếc chìa khoá (thật ra là không thể gửi cho bạn chiếc chìa khoá). Do đó để ý rằng, khi bạn đã khoá chiếc hộp rồi thì chính bạn cũng không thể mở nó. </p> <p> Bạn muốn gửi tin nhắn “IUB” đến B. B cho bạn ổ khoá toán học là cặp số : (n, e) = (114791, 13) </p> <p> Bạn hãy tính toán phiên bản bị mã hoá của tin nhắn “IUB” bằng thuật toán sau: </p> <p> Bước 1: Chuyển nội dung tin nhắn từ dạng chữ sang dạng số. Ở đây ta quy ước A = 01, B = 02, …, Z = 26. Ví dụ như: “HAO” được chuyển sang dạng số thành 080115, còn “ABCXYZ” thì thành 010203242526. Gọi kết quả tính được là m. </p> <p> Bước 2: Tính<br /> c = m<sup>e</sup> mod n.<br />Trong đó phép tính mod có nghĩa là phần dư của phép chia.<br />Ví dụ: 10 mod 3 = 1 vì 10 chia 3 dư 1; 2<sup>10</sup> mod 100 = 24 vì 2<sup>10</sup> = 1024, sau đó 1024 chia 100 thì dư 24. </p> <p>Bước 3: Gửi kết quả c cho B.</p>`,

		`<h3>Phần 2</h3> <p> Oh, B đã đọc được tâm tư tình cảm của bạn và phản hồi bạn bằng một lá thư… cũng bị mã hoá. À, bạn nhớ ra rằng bạn cũng từng đưa cho B một ổ khoá, là một cặp số (n’, p’) = (135931, 87353). Tin chắc rằng B đã khoá tin nhắn bằng chính chiếc ổ khoá này, bạn mò tìm lại chìa khóa của ổ, và may mắn thay bạn đã tìm ra chìa khoá, chính là q = 17<br />Tin nhắn đã mã hoá mà bạn nhận được từ B là c’ = 101811, bạn hãy theo dõi thuật toán sau để tìm lại thông điệp mà B đã nhắn cho bạn! </p> <p> Bước 1: Tính<br /> m = c’<sup>q</sup> mod n’ </p> <p> Bước 2: Chuyển số m vừa nhận được về dạng văn bản.<br />Ví dụ nếu số nhận được là 12251225 thì ta giải được văn bản là LYLY </p>`,
	];
	const challengeContent = [challengeNo1, challengeNo2, challengeNo3];

	const ans1 = [53355, 13863, 29646, 447];
	const ans2 = [75807, 16720, 16720, 16720, 16720, 16720, 16720, 13863];
	const ans3 = [12, 28];
	const ans4 = [53355, 53355, 82345, 82345];
	const ans5 = [
		[82749, 80695, 23161, 88939, 87286, 91751, 95361, 60752],
		[
			87286, 88027, 87699, 63021, 60319, 33047, 55140, 42383, 63021,
			87699, 91751, 88027,
		],
		[91751, 95361, 4753, 63021, 87699, 87286, 88027],
		[
			82749, 80695, 55950, 10344, 92134, 60752, 63021, 91751, 80695,
			63021, 88695,
		],
		[29617, 55950, 95361],
		[
			83387, 25017, 55140, 87699, 63021, 92134, 22060, 87699, 10344,
			92134, 25017, 63021,
		],
		[24339, 41444, 63021, 60319, 87699, 72439, 7589, 10344],
		[87286, 91751, 95361, 80695, 63021, 60319],
		[73166, 50765, 87699, 55087, 33047, 55140],
		[
			91751, 91350, 38237, 87699, 88939, 80695, 98172, 38237, 87699,
			63021, 92134, 22060, 87699, 10344, 92134, 25017, 63021,
		],
		[73166, 89258, 87699, 91751, 92134, 22060],
		[
			60752, 72439, 60752, 63021, 87699, 91751, 33047, 95361, 80695,
			63021, 60319,
		],
	];
	const ans6 = [
		[79584, 82345, 37564, 40513, 79584],
		[92134, 55950, 88939],
	];
	const ansAll = [ans1, ans2, ans3, ans4, ans5, ans6];
	function decode(ansArray) {
		function getPow(a, b, p) {
			if (!b) return 1;
			let c = getPow(a, b / 2, p);
			c = (c * c) % p;
			if (b & 1) c = (c * a) % p;
			return c;
		}
		let res = [];
		for (let item of ansArray)
			res.push(String.fromCharCode(getPow(item, 42143, 98473)));
		return res.join('');
	}

	const sections = document.querySelectorAll('section');

	const mainEventHandle = () => {
		sections.forEach((section, index) => {
			section.innerHTML += `<i class="fas fa-lock lock"></i>`;

			const infoBtn = section.querySelector('.info-btn');
			const infoContent = section.querySelector('.info');
			if (infoBtn && infoContent)
				infoBtn.onclick = () => (
					infoBtn.classList.toggle('active'),
					infoContent.classList.toggle('active')
				);

			const challengeBtn = section.querySelector('.challenge-btn');
			const challengeContent =
				section.querySelector('.challenge-content');
			if (challengeContent)
				challengeBtn.onclick = () => {
					challengeBtn.classList.toggle('active');
					challengeContent.classList.toggle('active');
					if (index === 5)
						section.querySelector('.no6-part1').style.display =
							'block';
				};

			let hintBtn = section.querySelector('.hint-btn');
			if (hintBtn) hintBtn.onclick = () => getHint(section, index);

			let answerInputList =
				section.querySelectorAll('input[type="text"]');
			let submitBtnList = section.querySelectorAll('.submit-btn');
			let ansLth = answerInputList.length;
			let submitListLth = submitBtnList.length;
			let wrongCD = section.querySelector('.wrong-cd');

			if (ansLth || submitListLth) {
				if (index === 2) {
					const numPath = [3, 4];
					let passCheck = [0, 0];

					submitBtnList.forEach((submitBtn) => {
						submitBtn.onclick = (e) => {
							const path = index;
							const cdInner =
								e.path[3].querySelector('.wrong-cd');
							const wrongIco = e.path[2].querySelector('.wrong');
							const correctIco =
								e.path[2].querySelector('.correct');

							let boxList = e.path[1].querySelectorAll('.box');
							let indexSubmitBtn = Number(
								e.target.getAttribute('idSubmit')
							);
							let cntCorrectBox = 0;
							let cntFillBox = 0;

							for (let boxItem of boxList) {
								let itemInBox = boxItem.querySelector('.item');
								if (!itemInBox) continue;

								let numberItem =
									itemInBox.getAttribute('catch');
								let numberBox = boxItem.getAttribute('try');
								if (numberItem == numberBox) cntCorrectBox++;
								cntFillBox++;
							}

							if (
								cntCorrectBox === numPath[indexSubmitBtn] &&
								cntFillBox === cntCorrectBox
							) {
								wrongIco.classList.remove('active');
								correctIco.classList.add('active');
								correctAudio.play();

								if (indexSubmitBtn === 0)
									document.querySelector(
										'#No3 .part2'
									).style.display = 'block';

								passCheck[indexSubmitBtn] = 1;
								if (
									passCheck[0] === passCheck[1] &&
									passCheck[0]
								) {
									let navFin = e.path[8]
										.querySelector('.nav-links')
										.getElementsByClassName('lk')[path];
									navFin.classList.add('finish', 'lifin');
									section.classList.add('finish');
									finishAudio.play();
								}
							} else {
								wrongAudio.play();
								wrongIco.classList.add('active');
								correctIco.classList.remove('active');

								submitBtn.style.display = 'none';
								cdInner.style.display = 'block';
								setWrongCD(cdInner, 3);
								setTimeout(() => {
									wrongIco.classList.remove('active');
									submitBtn.style.display = 'block';
									cdInner.style.display = 'none';
								}, 3000);
							}
						};
					});
				} else if (index === 3) {
					answerInputList[0].addEventListener('keydown', (e) => {
						if (e.keyCode !== 13) return;

						const increaseIco = section.querySelector('.increase');
						const decreaseIco = section.querySelector('.decrease');
						const correctIco = section.querySelector('.correct');
						const wrongIco = section.querySelector('.wrong');
						const ansLog = section.querySelector('p');

						const CDHandle = () => {
							wrongCD.style.display = 'block';
							setWrongCD(wrongCD, 3);
							setTimeout(() => {
								$(
									`#No${index + 1} input[type='text']`
								).removeAttr('disabled');
								wrongIco.classList.remove('active');
								wrongCD.style.display = 'none';
								ansLog.innerHTML = '';
							}, 3000);
						};

						let userAnswer = Number(
							e.target.value.trim().toLowerCase()
						);
						let sysAnswer = Number(decode(ansAll[index]));
						if (!(1 <= userAnswer && userAnswer <= 8192)) {
							increaseIco.classList.remove('active');
							decreaseIco.classList.remove('active');
							correctIco.classList.remove('active');
							wrongIco.classList.add('active');
							wrongAudio.play();
							CDHandle();

							ansLog.innerHTML =
								'Em đi xa quá, em đi đi xa Dinitz quá!!!';

							$(`#No${index + 1} input[type='text']`).attr(
								'disabled',
								'disabled'
							);
						} else {
							if (userAnswer > sysAnswer) {
								increaseIco.classList.remove('active');
								correctIco.classList.remove('active');
								decreaseIco.classList.add('active');
								wrongIco.classList.remove('active');
								wrongAudio.play();
								CDHandle();

								ansLog.innerHTML = 'Xuống đi, cao quá!!!';

								$(`#No${index + 1} input[type='text']`).attr(
									'disabled',
									'disabled'
								);
							} else if (userAnswer < sysAnswer) {
								increaseIco.classList.add('active');
								decreaseIco.classList.remove('active');
								correctIco.classList.remove('active');
								wrongIco.classList.remove('active');
								ansLog.innerHTML = 'Lên đi em ưi!!!';
								wrongAudio.play();
								CDHandle();

								$(`#No${index + 1} input[type='text']`).attr(
									'disabled',
									'disabled'
								);
							} else {
								let navFin = e.path[6]
									.querySelector('.nav-links')
									.getElementsByClassName('lk')[index];
								navFin.classList.add('finish', 'lifin');
								section.classList.add('finish');
								finishAudio.play();

								correctIco.classList.add('active');
								wrongIco.classList.remove('active');
								increaseIco.classList.remove('active');
								decreaseIco.classList.remove('active');

								ansLog.innerHTML = 'Ghêk Ghêk';
							}
						}
					});
				} else if (index === 4) {
					let passCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					section.querySelector('.submit-btn').onclick = () => {
						const correctCnt =
							section.querySelector('.cnt-correct');
						const wrongCnt = section.querySelector('.cnt-wrong');

						for (let idAns = 0; idAns < ansLth; idAns++) {
							let userAnswer = answerInputList[idAns].value
								.trim()
								.toLowerCase();
							let idAnswer = Number(answerInputList[idAns].id);
							let sysAnswer = decode(ansAll[index][idAnswer]);
							if (userAnswer == sysAnswer) passCheck[idAns] = 1;
						}

						let cntAC = 0;
						let cntWA = 0;
						for (let idCheck = 0; idCheck < 12; idCheck++)
							if (passCheck[idCheck] === 1) cntAC++;
							else cntWA++;

						if (cntAC === 12) {
							sections[index].classList.add('finish');
							let navFin = document
								.querySelector('.nav-links')
								.getElementsByClassName('lk')[index];
							navFin.classList.add('finish', 'lifin');

							correctCnt.querySelector('p').innerHTML = '';
							wrongCnt.querySelector('p').innerHTML = '';
							wrongCnt
								.querySelector('.wrong')
								.classList.remove('active');
							finishAudio.play();
						} else {
							wrongAudio.play();

							$(`#No${index + 1} input[type='text']`).attr(
								'disabled',
								'disabled'
							);

							correctCnt.querySelector('p').innerHTML = cntAC;
							wrongCnt.querySelector('p').innerHTML = cntWA;
							correctCnt
								.querySelector('.correct')
								.classList.add('active');
							wrongCnt
								.querySelector('.wrong')
								.classList.add('active');

							wrongCD.style.display = 'block';
							setWrongCD(wrongCD, 3);
							setTimeout(() => {
								$(
									`#No${index + 1} input[type='text']`
								).removeAttr('disabled');
								wrongCD.style.display = 'none';
							}, 3000);
						}
					};
				} else if (index === 5) {
					let passCheck = [0, 0];
					for (let indexInput = 0; indexInput < 2; indexInput++) {
						answerInputList[indexInput].addEventListener(
							'keydown',
							(e) => {
								if (e.keyCode === 13) {
									let userAnswer = e.target.value
										.trim()
										.toLowerCase();
									let idAnswer = Number(
										e.target.getAttribute('idAns')
									);
									let sysAnswer = decode(
										ansAll[index][idAnswer]
									);
									if (userAnswer == sysAnswer) {
										if (!passCheck[0]) {
											e.target.offsetParent.querySelector(
												'.no6-part2 .contentp2'
											).innerHTML += challengeNo6[1];
											e.target.offsetParent.querySelector(
												'.no6-part2 input'
											).style.display = 'block';
										}
										e.target
											.closest('.answer-area')
											.querySelector('.wrong')
											.classList.remove('active');
										e.target
											.closest('.answer-area')
											.querySelector('.correct')
											.classList.add('active');
										correctAudio.play();

										passCheck[indexInput] = 1;
										if (
											passCheck[0] === passCheck[1] &&
											passCheck[0]
										) {
											section.classList.add('finish');
											let navFin = document
												.querySelector('.nav-links')
												.getElementsByClassName('lk')[
												index
											];
											navFin.classList.add(
												'finish',
												'lifin'
											);
											finishAudio.play();
										}
									} else {
										wrongAudio.play();
										e.target
											.closest('.answer-area')
											.querySelector('.wrong')
											.classList.add('active');
										e.target
											.closest('.answer-area')
											.querySelector('.correct')
											.classList.remove('active');

										$(
											`#No${index + 1} input[type='text']`
										).attr('disabled', 'disabled');

										e.index[2].querySelector(
											'.wrong-cd'
										).style.display = 'block';
										setWrongCD(
											e.index[2].querySelector(
												'.wrong-cd'
											),
											3
										);
										setTimeout(() => {
											$(
												`#No${
													index + 1
												} input[type='text']`
											).removeAttr('disabled');
											e.target
												.closest('.answer-area')
												.querySelector('.wrong')
												.classList.remove('active');
											e.index[2].querySelector(
												'.wrong-cd'
											).style.display = 'none';
										}, 3000);
									}
								}
							}
						);
					}
				} else {
					answerInputList[0].onkeydown = (e) => {
						if (e.keyCode !== 13) return;
						const wrongIco = e.path[1].querySelector('.wrong');
						const correctIco = e.path[1].querySelector('.correct');

						let userAnswer = answerInputList[0].value
							.trim()
							.toLowerCase();
						let path = index;
						let sysAnswer = decode(ansAll[path]);
						if (userAnswer == sysAnswer) {
							finishAudio.play();
							let navFin = e.path[6]
								.querySelector('.nav-links')
								.getElementsByClassName('lk')[path];
							navFin.classList.add('finish', 'lifin');
							section.classList.add('finish');
							wrongIco.classList.remove('active');
							correctIco.classList.add('active');
						} else {
							wrongAudio.play();
							wrongIco.classList.add('active');
							correctIco.classList.remove('active');

							$(`#No${path + 1} input[type='text']`).attr(
								'disabled',
								'disabled'
							);

							wrongCD.style.display = 'block';
							setWrongCD(wrongCD, 3);
							setTimeout(() => {
								$(
									`#No${path + 1} input[type='text']`
								).removeAttr('disabled');
								wrongIco.classList.remove('active');
								wrongCD.style.display = 'none';
							}, 3000);
						}
					};
				}
			}
		});
	};

	fetch('db/key.json')
		.then((rsp) => rsp.json())
		.then((rawData) => {
			const testID = document.querySelector('.banner').getAttribute('id');
			return rawData[testID == 'admin-acc' ? 0 : testID].key.map(
				(item) => [
					decode(item['challenge-key']),
					item['challenge-id'] - 1,
				]
			);
		})
		.then((unlockedKey) => {
			const keyInput = document.querySelector('.banner input');
			const keyLog = document.querySelector('.banner p');

			var validKeyHandle = (id, canScroll = 0) => {
				sections[id].className = sections[id].className.replace(
					' locked',
					''
				);

				const link = document.querySelectorAll('.nav-links .lk')[id];
				link.className = link.className.replace(' lilocked', '');

				keyLog.style.color = '#32D700';
				keyLog.innerHTML = `No${id + 1} đã mở khóa`;

				if (canScroll)
					$('html, body').animate(
						{
							scrollTop: $(`#No${id + 1}`).offset().top - 100,
						},
						900
					);

				if ([0, 1, 2].includes(id)) {
					sections[id].querySelector('.challenge-content').innerHTML =
						challengeContent[id] +
						sections[id].querySelector('.challenge-content')
							.innerHTML;
				}
				if (id === 5) {
					document.querySelector('#No6 .contentp1').innerHTML +=
						challengeNo6[0];
				}
				if (id === 2)
					document.querySelector('#No3 .part1').style.display =
						'block';
			};
			for (let i = 0; i < 6; i++)
				if (localStorage.getItem(`keyItem${i}`) === '1')
					validKeyHandle(i, 0);

			keyInput.addEventListener('keydown', (e) => {
				if (e.keyCode === 8)
					if (keyInput.value)
						$('html, body').animate(
							{ scrollTop: $('#top').offset().top - 100 },
							1
						);
				if (e.keyCode === 13) {
					const keyReceive = e.target.value.trim();
					let cntWrong = 0;
					for (let keyItem of unlockedKey) {
						if (keyReceive == keyItem[0]) {
							localStorage.setItem(`keyItem${keyItem[1]}`, 1);
							validKeyHandle(keyItem[1], 1);
						} else cntWrong++;
					}

					if (cntWrong === 6) {
						keyLog.style.color = 'red';
						keyLog.innerHTML = 'Key is invalid';
						setTimeout(() => (keyLog.innerHTML = ''), 2000);
					}
				}
			});

			mainEventHandle();
		})
		.catch((err) => {
			alert('Error on Load File. Please Reload The Page!!!');
			console.error(err);
		});
};

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
