$('.input-field').on('keydown', function (event) {
	LogIn(event);
});
$('#log-in').on('click', function (event) {
	LogIn(event);
});

const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
	container.classList.add('sign-up-mode');
});

function LogIn(e) {
	const userName = document.querySelector('.user-name').value;
	const Password = document.querySelector('.password').value;
	if (userName !== 'Admin' || Password !== '1234') {
		if (e.keyCode === 13) {
			$('#log-in').removeClass('correct');
			$('#log-in').addClass('wrong');
			document.querySelector('#log-in').value = 'Đăng nhập thất bại';
		}
		return;
	}
	sign_up_btn.classList.add('active');
	$('#sign-in-btn a').attr('href', 'src/Test_Template.html');

	document.querySelector('#log-in').value = 'Đăng nhập thành công';
	$('#log-in').removeClass('wrong');
	$('#log-in').addClass('correct');
}
