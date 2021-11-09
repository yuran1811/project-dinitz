// Link Effect
var linkList = document.querySelector('.nav-bar').getElementsByClassName('lk');
for (var i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('liactive');
    current[0].className = current[0].className.replace(' liactive', '');
    this.className += ' liactive';
  });
}

// Content Progress
var orderCnt = 0;
var sectionList = document.querySelectorAll('section');
var sectionListLth = sectionList.length;
for (var sectionItem of sectionList) {
  let infoBtn = sectionItem.querySelector('.info-btn');
  let infoContent = sectionItem.querySelector('.info');
  infoBtn.addEventListener('click', (e) => {
    infoBtn.classList.toggle('active');
    infoContent.classList.toggle('active');
  });

  let challengeBtn = sectionItem.querySelector('.challenge-btn');
  let challengeContent = sectionItem.querySelector('.challenge-content');
  challengeBtn.addEventListener('click', (e) => {
    challengeBtn.classList.toggle('active');
    challengeContent.classList.toggle('active');
  });

  let hintBtn = sectionItem.querySelector('.hint-btn1');
  hintBtn.addEventListener('click', (e) => {
    hintBtn.classList.toggle('active');

    let hintContent = sectionItem.querySelectorAll('.hint');
    let hintCnt = hintContent.length;
    let indexHint = 0;
    let x = setInterval(() => {
      if (indexHint < hintCnt) {
        // arrayHint.push(hintContent[indexHint++]);
        hintContent[indexHint++].classList.add('active');
      } else clearInterval(x);
    }, 1000);
  });

  $('sectionItem input[class="answer"]').on('keydown', (e) => {
    if (e.keyCode === 13) console.log(orderCnt++);
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
