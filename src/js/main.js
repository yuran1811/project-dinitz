const _$ = document.querySelector.bind(document);
const $$_ = document.querySelectorAll.bind(document);

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
		let userID = -1;
		const check = () => {
			const username = _$('.user-name').value;
			const password = _$('.password').value;
			let isSuccess = false;
			for (let item of data) {
				if (username == item.name && password == item.pass) {
					isSuccess = true;
					userID = item.id;
					break;
				}
				if (username == 'Admin' && password == 1234) {
					isSuccess = true;
					userID = 13;
					break;
				}
			}
			if (!isSuccess) {
				_$('#log-in').value = 'Đăng nhập thất bại';
				_$('#log-in').classList.remove('correct');
				_$('#log-in').classList.add('wrong');
				return;
			}
			_$('#sign-up-btn').classList.add('active');
			_$('#log-in').value = 'Đăng nhập thành công';
			_$('#log-in').classList.remove('wrong');
			_$('#log-in').classList.add('correct');
		};

		$$_('.input-field').forEach((item) =>
			item.addEventListener('keydown', (e) => {
				if (e.keyCode === 13) check();
			})
		);
		_$('#log-in').addEventListener('click', check);

		_$('#sign-up-btn').addEventListener('click', () =>
			_$('.container').classList.add('sign-up-mode')
		);

		const reRender = () => {
			const htmls = `
			<header class="header" id="top">
				<nav class="nav-bar">
					<div class="nav-overlay"></div>
					<div class="toggle-theme">
						<span class="moon"><i class="fa-4x fas fa-moon"></i></span>
						<span class="sun"><i class="fa-4x fas fa-sun"></i></span>
					</div>
					<div class="nav-links">
						<ul>
							<li class="lk">
								<a href="#No1">
									<i class="passed fas fa-award"></i> No1
								</a>
							</li>
							<li class="lk">
								<a href="#No2">
									<i class="passed fas fa-award"></i> No2
								</a>
							</li>
							<li class="lk">
								<a href="#No3">
									<i class="passed fas fa-award"></i> No3
								</a>
							</li>
							<li class="lk">
								<a href="#No4">
									<i class="passed fas fa-award"></i> No4
								</a>
							</li>
							<li class="lk">
								<a href="#No5">
									<i class="passed fas fa-award"></i> No5
								</a>
							</li>
							<li class="lk">
								<a href="#No6">
									<i class="passed fas fa-award"></i> No6
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div class="menu">
					<i class="fa-3x fas fa-bars menu-icon" id="menu-bar1"></i>
					<i class="fa-3x fas fa-times menu-icon" id="menu-bar2"></i>
				</div>
			</header>
			<div class="bgm">
				<i class="fa-5x fas fa-compact-disc"></i>
				<div class="bgm-info">
					<div bgmName="Epic 1" class="track track1">
						<i class="fas fa-music"></i>
						<audio src="Library/BGM/Epic1.mp3"></audio>
					</div>
					<div bgmName="Epic 2" class="track track2">
						<i class="fas fa-music"></i>
						<audio src="Library/BGM/Epic2.mp3"></audio>
					</div>
					<div bgmName="Drama 1" class="track track3">
						<i class="fas fa-music"></i>
						<audio src="Library/BGM/Dramatic1.mp3"></audio>
					</div>
				</div>
			</div>
			<div class="to-top">
				<span class="content">
					<a href="#top">Top</a>
				</span>
			</div>
			<div class="banner" id="admin-acc">
				<div class="avatar" data-userID=${userID === 13 ? 'Admin' : `Đội ${userID}`}>
					<img
						src="https://miro.medium.com/fit/c/1360/1360/2*Y4aq3TeFNG8yjWcJHpz0pA.png"
						alt="avatar"
						width="200"
						height="200"
					/>
				</div>
				<input type="password" placeholder="Nhập mã khóa" />
				<p style="font-size: 1.7rem"></p>
				<audio
					class="fail-sound"
					src="Library/SoundEffect/Failure1.mp3"
				></audio>
				<audio
					class="correct-sound"
					src="Library/SoundEffect/Correct1.mp3"
				></audio>
				<audio
					class="finish-sound"
					src="Library/SoundEffect/Correct2.mp3"
				></audio>
			</div>
			<div class="main">
				<section sectionId="0" id="No1" class="No1 locked">
					<h2 class="title">
						<i class="passed fas fa-award"></i> Nim Game
					</h2>
					<div class="content">
						<h2>
							Kiến thức nền <i class="fas fa-sort-down info-btn"></i>
						</h2>
						<div class="info">
							<h3>Tổng xor</h3>
							<p>
								Tổng xor là một trong những phép toán trên bit rất
								phổ biến trong tin học nói chung. Các phép toán trên
								bit sẽ được thực hiện trên dạng biểu diễn cơ số 2 và
								thực hiện lần lượt các phép toán theo thứ tự từ phải
								sang trái. Khi nói đến tổng xor, phép toán được thực
								hiện giữa 2 bit tuân theo bảng sau:
							</p>
							<table style="width: 45%">
								<thead>
									<tr>
										<th style="width: 20%"><code>a</code></th>
										<th style="width: 20%"><code>b</code></th>
										<th style="width: 30%">
											<code>a xor b</code>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style="width: 20%"><code>0</code></td>
										<td style="width: 20%"><code>0</code></td>
										<td style="width: 30%">
											<code>0</code>
										</td>
									</tr>
									<tr>
										<td style="width: 20%"><code>0</code></td>
										<td style="width: 20%"><code>1</code></td>
										<td style="width: 30%">
											<code>1</code>
										</td>
									</tr>
									<tr>
										<td style="width: 20%"><code>1</code></td>
										<td style="width: 20%"><code>0</code></td>
										<td style="width: 30%">
											<code>1</code>
										</td>
									</tr>
									<tr>
										<td style="width: 20%"><code>1</code></td>
										<td style="width: 20%"><code>1</code></td>
										<td style="width: 30%">
											<code>0</code>
										</td>
									</tr>
								</tbody>
							</table>

							<p>Có thể hiểu phép xor như phép cộng không nhớ.</p>
							<em><strong>Ví dụ</strong></em>
							<ul>
								<li>
									<em><strong>Yêu cầu:</strong></em>
									Tính tổng xor của 2 số (đang ở dạng biểu diễn cơ
									số 10) lần lượt là 9 và 18.
								</li>
								<li>
									<em><strong>Cách làm</strong></em>
									<ul>
										<li>
											Đưa 2 số trên từ dạng biểu diễn cơ số 10
											thành dạng biểu diễn cơ số 2:
											<ul style="list-style-type: disc">
												<li>
													9<sub>10</sub> = 1001<sub
														>2</sub
													>
												</li>
												<li>
													18<sub>10</sub> = 10010<sub
														>2</sub
													>
												</li>
											</ul>
										</li>
										<li>
											Thực hiện lần lượt phép xor từ phải sang
											trái:
											<table id="tb2">
												<tbody>
													<tr>
														<td style="width: 10%"></td>
														<td style="width: 10%">
															1
														</td>
														<td style="width: 10%">
															0
														</td>
														<td style="width: 10%">
															0
														</td>
														<td style="width: 10%">
															1
														</td>
													</tr>
													<tr>
														<td style="width: 10%">
															1
														</td>
														<td style="width: 10%">
															0
														</td>
														<td style="width: 10%">
															0
														</td>
														<td style="width: 10%">
															1
														</td>
														<td style="width: 10%">
															0
														</td>
													</tr>
													<tr>
														<td style="width: 10%"></td>
														<td style="width: 10%"></td>
														<td style="width: 10%"></td>
														<td style="width: 10%"></td>
														<td style="width: 10%"></td>
													</tr>
													<tr>
														<td style="width: 10%">
															1
														</td>
														<td style="width: 10%">
															1
														</td>
														<td style="width: 10%">
															0
														</td>
														<td style="width: 10%">
															1
														</td>
														<td style="width: 10%">
															1
														</td>
													</tr>
												</tbody>
											</table>
										</li>
										<li>
											Chuyển kết quả cộng lại thành cơ số 10:
											11011<sub>2</sub> = 27<sub>10</sub>
										</li>
									</ul>
								</li>
								<li>
									<em><strong>Kết luận:</strong></em> 9 xor 18 =
									27
								</li>
								<li>
									<em
										><strong
											>Một số tính chất quan trọng của phép
											xor:</strong
										></em
									>
									<ul>
										<li>
											Tính giao hoán: x <code>xor</code> y = y
											<code>xor</code> x
										</li>
										<li>
											Tính phân phối (cộng): (x
											<code>xor</code> y) <code>xor</code> z =
											x <code>xor</code> (y
											<code>xor</code> z)
										</li>
										<li>
											Tính tự triệt: x <code>xor</code> x = 0
										</li>
									</ul>
								</li>
							</ul>
							<em><strong>Lưu ý:</strong></em> Tổng xor của một dãy n
							số hoàn toàn có thể tính được dựa trên các tính chất đã
							nêu trên

							<h3>
								Nguồn:
								<a
									target="_blank"
									href="https://en.wikipedia.org/wiki/Bitwise_operation#XOR"
									rel="noopener"
									>Đọc thêm</a
								>
							</h3>
						</div>

						<h2>
							Đề bài <i class="fas fa-sort-down challenge-btn"></i>
						</h2>
						<div class="challenge-content">
							<div class="answer-area">
								<i class="fa-2x fas fa-check-circle correct"></i>
								<i class="fa-2x fas fa-times-circle wrong"></i>
								<input type="text" name="answer" class="answer" placeholder="Type Your Answer" />
							</div>
							<span class="wrong-cd"><i class="bx bx-alarm bx-tada"></i> 3 </span>
						</div>

						<h2>Gợi ý <i class="fas fa-sort-down hint-btn"></i></h2>
						<span class="timer">
							<i class="bx bx-alarm bx-tada"></i> 3
						</span>
						<div class="allhint"></div>
					</div>
				</section>
				<section sectionId="1" id="No2" class="No2 locked">
					<h2 class="title"><i class="passed fas fa-award"></i> IE</h2>
					<div class="content">
						<h2>
							Kiến thức nền <i class="fas fa-sort-down info-btn"></i>
						</h2>
						<div class="info">
							<h3>
								Nhắc lại về các khái niệm và ký hiệu cơ bản trong lý
								thuyết tập hợp
							</h3>
							<h4>Quan hệ giữa các tập hợp</h4>
							<ul>
								<li>
									<b><i> Quan hệ bao hàm </i></b>
									<br />Nếu tất cả các thành viên của tập A cũng
									là thành viên của tập B , thì A là một Tập hợp
									con của B , được biểu thị A &sube; B, và tập hợp
									B bao hàm tập hợp A. Ví dụ, {1, 2} là một tập
									hợp con của {1, 2, 3}, và {2} cũng vậy, nhưng
									{1, 4} thì không.
								</li>
								<li>
									<b><i> Quan hệ bằng nhau</i></b>
									<br />Hai tập hợp A và B được gọi là bằng nhau
									nếu A là tập hợp con của B và B cũng là tập hợp
									con của A, ký hiệu A = B.
								</li>
							</ul>
							<p>
								Theo định nghĩa, mọi tập hợp đều là tập con của
								chính nó; tập rỗng là tập con của mọi tập hợp. Mọi
								tập hợp A không rỗng có ít nhất hai tập con là rỗng
								và chính nó. Chúng được gọi là các tập con tầm
								thường của tập A. Nếu tập con B của A khác với chính
								A, nghĩa là có ít nhất một phần tử của A không thuộc
								B thì B được gọi là tập con thực sự hay tập con chân
								chính của tập A.
							</p>
							<p>
								Chú ý rằng 1 và 2 và 3 là các thành viên của tập {1,
								2, 3} nhưng không phải là tập con, các tập con chẳng
								hạn như {1} không phải là thành viên của tập {1, 2,
								3}.
							</p>
							<h4>Các phép toán trên các tập hợp</h4>
							<ul>
								<li>
									Hợp (Union): Hợp của A và B là tập hợp gồm tất
									cả các phần tử thuộc ít nhất một trong hai tập
									hợp A và B, ký hiệu A ⋃ B<br />Ta có A ⋃ B = {x:
									x , hợp của {1, 2, 3} và {2, 3, 4} là tập {1, 2,
									3, 4}.
								</li>
								<li>
									Giao (Intersection): Giao của hai tập hợp A và B
									là tập hợp tất cả các phần tử vừa thuộc A, vừa
									thuộc B, ký hiệu A ⋂ B<br />Ta có A ⋂ B = {x: x
									∈ A và x ∈ B}, giao của {1, 2, 3} và {2, 3, 4}
									là tập {2, 3}.
								</li>
								<li>
									Hiệu (Difference): Hiệu của tập hợp A với tập
									hợp B là tập hợp tất cả các phần tử thuộc A
									nhưng không thuộc B, ký hiệu A \ B<br />Ta có: A
									\ B = {x: x ∈ A và x ∉ B}<br /><strong
										>Lưu ý:</strong
									>
									A \ B ≠ B \ A
								</li>
								<li>
									Phần bù (Complement): là hiệu của tập hợp con.
									Nếu A ⊂ B thì B \ A được gọi là phần bù của A
									trong B, ký hiệu C<sub>B</sub>A (hay
									C<sub>A</sub>B).
								</li>
							</ul>
							<h4>Bao hàm loại trừ</h4>
							<p>Cho 3 tập hợp:</p>
							<p>
								A = {1, 2, 3, 5}<br />B = {2, 4, 6, 8}<br />C = {1,
								2, 4, 6}
							</p>
							<p>
								Để tính số phần tử khác nhau trong hợp của 3 tập
								trên, ta dựng biểu đồ Venn sau:
							</p>
							<p>
								<img
									src="https://cdn.discordapp.com/attachments/724194394475069461/907134198299623465/unknown.png"
									alt="venn"
									style="max-width: 80%; height: auto"
								/>
							</p>
							<p>
								Ta nhận thấy có một số phần tử là giao của nhiều tập
								hợp: phần tử chỉ thuộc 1 tập hợp, phần tử thuộc là
								giao của 2 tập hợp, phần tử là giao của cả 3 tập
								hợp.
							</p>
							<p>
								<img
									src="https://media.discordapp.net/attachments/724194394475069461/907134513971335168/unknown.png"
									alt="coloredvenn"
									style="max-width: 80%; height: auto"
								/>
							</p>
							<p>
								Vì thế, việc lấy tổng số phần tử của từng tập sẽ cho
								kết quả không đúng (vì 1, 6 bị lặp 1 lần và 2 bị lặp
								2 lần). Để giải quyết vấn đề này, ta sẽ trừ đi số
								phần tử là giao của 2 tập hợp (các phần tử 1, 6
								không bị lặp nữa,
								<strong
									>nhưng phần tử 2 vô tình bị trừ đi 2 lần &rArr;
									không còn được tính</strong
								>). Do đó, ta phải cộng vào kết quả số phần tử là
								giao của 3 tập hợp.
							</p>
							<p>
								Qua ví dụ trên, ta rút ra được cách tính bao hàm
								loại trừ như sau:
							</p>
							<ol>
								<li>Tính tổng kích thước các tập hợp cần xét</li>
								<li>
									Trừ đi kích thước của các giao của 2 tập hợp
								</li>
								<li>
									Cộng tổng kích thước của các giao của 3 tập hợp
								</li>
								<li>
									Trừ tổng kích thước của các giao của 4 tập hợp
								</li>
								<li>
									Cộng tổng kích thước của các giao của 5 tập hợp
								</li>
								<li>...</li>
							</ol>
							<p>
								<i>
									S(A ⋃ B ⋃ C) = S(A) + S(B) + S(C) - S(A ⋂ B) -
									S(A ⋂ C) - S(B ⋂ C) + S(A ⋂ B ⋂ C)
								</i>
							</p>
						</div>

						<h2> Đề bài <i class="fas fa-sort-down challenge-btn"></i> </h2>
						<div class="challenge-content">
							<div class="answer-area">
								<i class="fa-2x fas fa-check-circle correct"></i>
								<i class="fa-2x fas fa-times-circle wrong"></i>
								<input type="text" name="answer" class="answer" placeholder="Type Your Answer" />
							</div>
							<span class="wrong-cd"><i class="bx bx-alarm bx-tada"></i> 3 </span>
						</div>

						<h2>Gợi ý <i class="fas fa-sort-down hint-btn"></i></h2>
						<span class="timer">
							<i class="bx bx-alarm bx-tada"></i> 3
						</span>
						<div class="allhint"></div>
					</div>
				</section>
				<section sectionId="2" id="No3" class="No3 locked">
					<h2 class="title">
						<i class="passed fas fa-award"></i> Du lịch
					</h2>
					<div class="content">
						<h2>
							Đề bài <i class="fas fa-sort-down challenge-btn"></i>
						</h2>
						<div class="challenge-content">
							<div class="part1" style="display: none">
								<div class="contentp1">
									<h2>Phần 1</h2>
									<p>
										<img
											src="https://cdn.discordapp.com/attachments/724194394475069461/907134741160022026/unknown.png"
											alt="map1"
											style="max-width: 80%; height: auto"
										/>
									</p>
								</div>

								<div class="answer-area">
									<i
										class="fa-2x fas fa-check-circle correct"
									></i>
									<i class="fa-2x fas fa-times-circle wrong"></i>
									<div class="allBox">
										<div
											try="1"
											class="box box-answer"
											id="box1"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										></div>
										<div
											try="2"
											class="box box-answer"
											id="box2"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										></div>
										<div
											try="3"
											class="box box-answer"
											id="box3"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										></div>
										<div
											try="4"
											class="box box-answer"
											id="box4"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										></div>
										<div
											try="5"
											class="box box-answer"
											id="box5"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										></div>
										<div class="submit-btn" idSubmit="0">
											Submit
										</div>
										<i
											class="
												fa-2x
												fas
												fa-check-circle
												correct
											"
										></i>
										<i
											class="fa-2x fas fa-times-circle wrong"
										></i>
									</div>
									<div class="allItem">
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="1"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag1"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="99"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag2"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="99"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag3"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="2"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag4"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="3"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag5"
											></div>
										</div>
									</div>
								</div>
								<span class="wrong-cd">
									<i class="bx bx-alarm bx-tada"></i> 3
								</span>
								<br />
							</div>
							<div class="part2" style="display: none">
								<div class="contentp2">
									<h2>Phần 2</h2>
									<p>
										<img
											src="https://cdn.discordapp.com/attachments/724194394475069461/907134763859587123/unknown.png"
											alt="map2"
											style="max-width: 80%; height: auto"
										/>
									</p>
								</div>

								<div class="answer-area">
									<i
										class="fa-2x fas fa-check-circle correct"
									></i>
									<i class="fa-2x fas fa-times-circle wrong"></i>
									<div class="allBox">
										<div
											try="6"
											class="box box-answer"
											id="box6"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										></div>
										<div
											try="7"
											class="box box-answer"
											id="box7"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										></div>
										<div
											try="8"
											class="box box-answer"
											id="box8"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										></div>
										<div
											try="9"
											class="box box-answer"
											id="box9"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
											style="text-align: center"
										></div>
										<div
											try="10"
											class="box box-answer"
											id="box10"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
											style="text-align: center"
										></div>
										<div class="submit-btn" idSubmit="1">
											Submit
										</div>
										<i
											class="
												fa-2x
												fas
												fa-check-circle
												correct
											"
										></i>
										<i
											class="fa-2x fas fa-times-circle wrong"
										></i>
									</div>
									<div class="allItem">
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="6"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag6"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="7"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag7"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="99"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag8"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="8"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag9"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="99"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag10"
											></div>
										</div>
										<div
											class="itemBox"
											ondrop="drop(event)"
											ondragover="allowDrop(event)"
										>
											<div
												catch="9"
												class="item"
												draggable="true"
												ondragstart="drag(event)"
												id="drag11"
											></div>
										</div>
									</div>
								</div>
								<span class="wrong-cd">
									<i class="bx bx-alarm bx-tada"></i> 3
								</span>
							</div>
						</div>
					</div>
				</section>
				<section sectionId="3" id="No4" class="No4 locked">
					<h2 class="title">
						<i class="passed fas fa-award"></i> Mật khẩu là gì?
					</h2>
					<div class="content">
						<h2>
							Đề bài <i class="fas fa-sort-down challenge-btn"></i>
						</h2>
						<div class="challenge-content">
							Ở trạm này không có gì cả. [1; 8192]
							<div class="answer-area">
								<i class="fa-2x fas fa-check-circle correct"></i>
								<i class="fa-2x fas fa-times-circle wrong"></i>
								<i
									class="fa-2x fas fa-arrow-circle-up increase"
								></i>
								<i
									class="fa-2x fas fa-arrow-circle-down decrease"
								></i>

								<input
									type="text"
									name="answer"
									class="answer"
									placeholder="Type Your Answer"
								/>
								<p></p>
							</div>
							<span class="wrong-cd">
								<i class="bx bx-alarm bx-tada"></i> 3
							</span>
						</div>
						<h2>Gợi ý <i class="fas fa-sort-down hint-btn"></i></h2>
						<span class="timer">
							<i class="bx bx-alarm bx-tada"></i> 3
						</span>
						<div class="allhint"></div>
					</div>
				</section>
				<section sectionId="4" id="No5" class="No5 locked">
					<h2 class="title">
						<i class="passed fas fa-award"></i> Trạm vui vẻ
					</h2>
					<div class="content">
						<h2>
							Đề bài <i class="fas fa-sort-down challenge-btn"></i>
						</h2>
						<div class="challenge-content">
							<div
								style="
									display: flex;
									flex-direction: column;
									align-items: center;
								"
							>
								<p>
									<img
										src="https://media.discordapp.net/attachments/724194394475069461/907134798923989002/unknown.png"
										alt="map"
										style="max-width: 100%; height: auto"
									/>
								</p>
								<p>
									<img
										src="https://media.discordapp.net/attachments/724194394475069461/907134961969164328/unknown.png"
										alt="key"
										style="max-width: 100%; height: auto"
									/>
								</p>
								<div class="whole-answerarea">
									<div class="answer-area">
										<p>Câu 1</p>
										<input
											id="0"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 2</p>
										<input
											id="1"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 3</p>
										<input
											id="2"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 4</p>
										<input
											id="3"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 5</p>
										<input
											id="4"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 6</p>
										<input
											id="5"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 7</p>
										<input
											id="6"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 8</p>
										<input
											id="7"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 9</p>
										<input
											id="8"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 10</p>
										<input
											id="9"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 11</p>
										<input
											id="10"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
									<div class="answer-area">
										<p>Câu 12</p>
										<input
											id="11"
											type="text"
											name="answer"
											class="answer"
											placeholder="Type Your Answer"
										/>
									</div>
								</div>

								<span class="wrong-cd">
									<i class="bx bx-alarm bx-tada"></i> 3
								</span>

								<div class="submit-btn">Submit All</div>
								<div class="status-log">
									<div class="cnt-correct">
										<i
											class="
												fa-2x
												fas
												fa-check-circle
												correct
											"
										></i>
										<p></p>
									</div>
									<div class="cnt-wrong">
										<i
											class="fa-2x fas fa-times-circle wrong"
										></i>
										<p></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section sectionId="5" id="No6" class="No6 locked">
					<h2 class="title">
						<i class="passed fas fa-award"></i> Love Letter
					</h2>
					<div class="content">
						<h2>
							Kiến thức nền <i class="fas fa-sort-down info-btn"></i>
						</h2>
						<div class="info">Toán đồng dư.</div>

						<h2>
							Đề bài
							<i class="fas fa-sort-down challenge-btn"></i>
						</h2>
						<div class="challenge-content">
							<div class="no6-part1">
								<div class="contentp1"></div>
								<div class="answer-area">
									<i
										class="fa-2x fas fa-check-circle correct"
									></i>
									<i class="fa-2x fas fa-times-circle wrong"></i>
									<input
										idAns="0"
										type="text"
										name="answer"
										class="answer"
										placeholder="Type Your Answer"
									/>
								</div>
								<span class="wrong-cd">
									<i class="bx bx-alarm bx-tada"></i> 3
								</span>
							</div>
							<br />
							<div class="no6-part2">
								<div class="contentp2"></div>
								<div class="answer-area">
									<i
										class="fa-2x fas fa-check-circle correct"
									></i>
									<i class="fa-2x fas fa-times-circle wrong"></i>
									<input
										idAns="1"
										style="display: none"
										type="text"
										name="answer"
										class="answer"
										placeholder="Type Your Answer"
									/>
								</div>
								<span class="wrong-cd">
									<i class="bx bx-alarm bx-tada"></i> 3
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>
			<footer>
				<p>Chúc bạn có những phút giây vui vẻ !!!</p>
			</footer>`;
			document.body.innerHTML = htmls;

			const allLink = document.head.querySelectorAll('link');
			allLink[allLink.length - 1].href = 'src/style/Tmpl.css';

			templateHandle();
		};
		_$('#sign-in-btn').onclick = reRender;
	})
	.catch(() => {
		alert('Error on Load Data. Please Reload the Page!!!');
		_$('html').innerHTML = 'Error on Load Data. Please Reload the Page!!!';
	});
