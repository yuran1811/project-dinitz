'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

fetch('./db/acc.json')
	.then((rsp) => rsp.json())
	.then((rawData) => {
		const decode = (ansArr) => {
			function getPow(a, b, p) {
				if (!b) return 1;
				let c = getPow(a, b / 2, p);
				c = (c * c) % p;
				if (b & 1) c = (c * a) % p;
				return c;
			}
			let res = [];
			for (let item of ansArr)
				res.push(String.fromCharCode(getPow(item, 42143, 98473)));
			return res.join('');
		};

		let data = [];
		for (let item of rawData)
			data.push({
				name: `dinitzNo${item.id >= 10 ? item.id : '0' + item.id}`,
				pass: decode(item.password),
				link: `${item.link}`,
			});
		return data;
	})
	.then((data) => {
		const check = () => {
			const username = $('.user-name').value;
			const password = $('.password').value;

			let isSuccess = false;
			let testLink = '';

			for (let item of data) {
				if (username == item.name && password == item.pass) {
					isSuccess = true;
					testLink = item.link;
					break;
				}
				if (username == 'Admin' && password == 1234) {
					isSuccess = true;
					testLink = 'src/Test_Template.html';
					break;
				}
			}

			if (!isSuccess) {
				$('#log-in').value = 'Đăng nhập thất bại';
				$('#log-in').classList.remove('correct');
				$('#log-in').classList.add('wrong');
				return;
			}

			$('#sign-in-btn a').setAttribute('href', testLink);
			$('#sign-up-btn').classList.add('active');

			$('#log-in').value = 'Đăng nhập thành công';
			$('#log-in').classList.remove('wrong');
			$('#log-in').classList.add('correct');
		};

		$$('.input-field').forEach((item) => {
			item.addEventListener('keydown', (e) => {
				if (e.keyCode === 13) check();
			});
		});

		$('#log-in').addEventListener('click', check);

		$('#sign-up-btn').addEventListener('click', () => {
			$('.container').classList.add('sign-up-mode');
		});
	})
	.catch(() => {
		alert('Error on Load Data. Please Reload the Page!!!');
		$('html').innerHTML = 'Error on Load Data. Please Reload the Page!!!';
	});
