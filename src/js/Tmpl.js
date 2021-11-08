var linkList = document.querySelector('.nav-bar').getElementsByClassName('lk');
for (var i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('liactive');
    current[0].className = current[0].className.replace(' liactive', '');
    this.className += ' liactive';
  });
}

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
