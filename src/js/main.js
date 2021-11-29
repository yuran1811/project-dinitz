'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

fetch('./db/acc.json')
	.then(function (rsp) {
		return rsp.json();
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function (err) {
		console.log(`Err: ${err}`);
	});

const check = () => {
	const username = $('.user-name').value;
	const password = $('.password').value;

	if (username !== 'Admin' || password !== '1234') {
		$('#log-in').value = 'Đăng nhập thất bại';
		$('#log-in').classList.remove('correct');
		$('#log-in').classList.add('wrong');
		return;
	}
	$('#sign-in-btn a').setAttribute('href', 'src/Test_Template.html');
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
