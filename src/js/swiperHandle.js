const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const htmls = `
<canvas></canvas>
<div class="wrapper">
	<section class="module-team">
		<div class="team">
			<h2 class="title">Project: Dinitz Team</h2>
			<div class="team-cards">
				<div class="swiper-container">
					<div class="swiper-wrapper"></div>
				</div>
				<div class="swiper-pagination"></div>
				<div class="navigation">
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
		</div>
	</section>
</div>`;
document.body.innerHTML = htmls + document.body.innerHTML;

const swiperGenerator = () => {
	const team = [
		{
			name: 'Yuran Legends',
			role: ['Web Developer', 'Designer'],
			desc: 'Nothing can stop me !!!',
			photo: '../Library/imgMembers/YL.jpg',
			email: 'mailto:trieuvanbd123@gmail.com',
			facebook: 'https://www.facebook.com/YuranLegends/',
		},
		{
			name: 'Naot',
			role: ['Chúa | Tester', 'Game Master'],
			desc: 'Don’t say that I need a sugar daddy',
			photo: '../Library/imgMembers/VVT.jpg',
			email: 'mailto:toanvv.ti.1922@gmail.com',
			facebook: 'https://www.facebook.com/toan.vong.585',
		},
		{
			name: 'Vinh Pham',
			role: ['Engineer', 'Game Master'],
			desc: 'Hello World',
			photo: '../Library/imgMembers/VP.jpg',
			email: 'mailto:vinhpt.ti.1922@gmail.com',
			facebook: 'https://www.facebook.com/vinhpham08',
		},
		{
			name: 'Vbee',
			role: ['Engineer', 'Game Master', 'Problem Setter'],
			desc: 'Nho truong lop ☹️',
			photo: '../Library/imgMembers/VB.png',
			email: 'mailto:baovg.a1.k2023@gmail.com',
			facebook: 'https://www.facebook.com/vbeeee',
		},
		{
			name: 'Nantas',
			role: ['Challenge Creator', 'Game Master'],
			desc: 'Five years alone',
			photo: '../Library/imgMembers/NT.jpg',
			email: 'mailto:thinhvt.ti.1922@gmail.com',
			facebook: 'https://www.facebook.com/votruongthinh2003',
		},
		{
			name: 'Jamie Nguyen',
			role: ['Challenge Creator', 'Problem Setter'],
			desc: 'Uoc duoc A Calculus',
			photo: '../Library/imgMembers/JN.png',
			email: 'mailto:nguyennhatnam11022003@gmail.com',
			facebook: 'https://www.facebook.com/1namnn',
		},
		{
			name: 'Tuyen Nguyen',
			role: ['Challenge Creator', 'Game Master'],
			desc: 'Uoc co tien',
			photo: '../Library/imgMembers/TN.jpg',
			email: 'mailto:tuyenntt.l.2023@gmail.com',
			facebook: 'https://www.facebook.com/profile.php?id=100015406658578',
		},
		{
			name: 'Tien Tran',
			role: ['Game Master'],
			desc: 'Hello World',
			photo: '../Library/imgMembers/TMT.jpg',
			email: 'mailto:tientm.ti.2124@gmail.com',
			facebook: 'https://www.facebook.com/tranminhtien.1404',
		},
	];
	const icons = {
		iFacebook: '../Library/imgMembers/facebook.svg',
		iEmail: '../Library/imgMembers/envelope.svg',
	};
	const { iFacebook, iEmail } = icons;

	const swiperWrapper = $('.swiper-wrapper');
	team.forEach((member) => {
		const { name, role, desc, photo, facebook, email } = member;
		const roleHTML = role
			.map((item) => `<p class="role">${item}</p>`)
			.join('');
		const htmls = `
		<div class="swiper-slide">
			<div class="card">
				<span class="bg"></span>
				<span class="more"></span>
				<figure class="photo"><img src="${photo}"></figure>
				<article class="text">
					<p class="name">${name}</p>
					${roleHTML}
					<p class="desc">${desc}</p>
				</article>

				<div class="social">
					<span class="pointer"></span>
					<div class="icons">
						<a class="icon" href="${email}" target="_blank" rel="noopener" data-index="1">
							<img src="${iEmail}" alt="mail">
						</a>
						<a class="icon" href="${facebook}" target="_blank" rel="noopener" data-index="2">
							<img src="${iFacebook}" alt="fb">
						</a>
					</div>
				</div>
			</div>
		</div>`;
		swiperWrapper.insertAdjacentHTML('beforeend', htmls);
	});

	new Swiper('.swiper-container', {
		direction: 'horizontal',
		speed: 800,
		threshold: 5,
		slidesPerView: 3,
		spaceBetween: 40,
		centeredSlides: false,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			1180: {
				slidesPerView: 2,
				spaceBetween: 40,
				centeredSlides: false,
			},
			799: {
				slidesPerView: 1,
				spaceBetween: 20,
				centeredSlides: true,
			},
		},
	});
};

onload = () => {
	swiperGenerator();

	[...$$('.card .photo'), ...$$('.more')].forEach((item) => {
		item.onclick = () => {
			const last = $('.show-more');
			const par = item.closest('.swiper-slide');
			if (last && last !== par)
				last.className = last.className.replace(' show-more', '');
			par.classList.toggle('show-more');
		};
	});

	$$('.icon').forEach((item) => {
		item.onmouseenter = (e) => {
			const pointer = e.currentTarget
				.closest('.swiper-slide')
				.querySelector('.pointer');
			const index = e.currentTarget.dataset.index;
			const sizeIcon = 102 * index - 38;
			pointer.style.transform = `translateX(${sizeIcon}px)`;
		};
	});
};
