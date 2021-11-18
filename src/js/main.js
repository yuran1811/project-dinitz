function logIn(e) {
	const username = $('.user-name').val();
	const password = $('.password').val();
	if (e.keyCode === 13) {
		if (username !== 'Admin' || password !== '1234') {
			$('#log-in').val('Đăng nhập thất bại');
			$('#log-in').removeClass('correct');
			$('#log-in').addClass('wrong');
			return;
		}
		$('#sign-in-btn a').attr('href', 'src/Test_Template.html');
		$('#sign-up-btn').addClass('active');

		$('#log-in').val('Đăng nhập thành công');
		$('#log-in').removeClass('wrong');
		$('#log-in').addClass('correct');
	}
}

$('.input-field').on('keydown', function (event) {
	logIn(event);
});

$('#log-in').on('click', function (event) {
	logIn(event);
});

$('#sign-up-btn').on('click', function () {
	$('.container').addClass('sign-up-mode');
});
