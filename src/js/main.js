const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
	container.classList.add('sign-up-mode');
});

function LogIn() {
	const userName = document.querySelector('.user-name').value;
	const Password = document.querySelector('.password').value;
	if (userName !== 'Admin' || Password !== '1234') return;
	else {
		sign_up_btn.classList.add('active');
		$('#sign-in-btn a').attr('href', 'src/Test_Template.html');
	}
}

document.querySelector('.log-in').addEventListener('click', LogIn());

$('.input-field').on('keydown', function (event) {
	LogIn();
});
