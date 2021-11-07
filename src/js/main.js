const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

document.querySelector('.log-in').addEventListener('click', (e) => {
  const userName = document.querySelector('.user-name').value;
  const Password = document.querySelector('.password').value;
  if (userName !== 'Admin' || Password !== '1234')
    alert('You are not Admin, please try again!');
  else {
    alert('Log In Successful');
    sign_up_btn.classList.add('active');
    $('#sign-in-btn a').attr(
      'href',
      'https://github.com/yuran1811/project-dinitz/blob/main/src/Test_Template.html'
    );
  }
});
