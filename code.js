let currentAttempt = document.querySelector(".currentAttempt");
		let keys = document.querySelectorAll(".keypadbutton");
		let sound = document.querySelector("audio");

		let passcode = [4,8,5,4,8,1,9,1,2,1,2,3,1,8,3]

		let reset = document.querySelector("button");
		let presses = [];

		reset.addEventListener("click", function() {
			presses = [];
			loadCurrentAttempt();
		})

		function loadCurrentAttempt() {
			currentAttempt.innerHTML = ''

			presses.forEach(press => {
				item = document.createElement("div");
				item.classList.add("key", `key${press}`);
				// item.innerHTML = press;

				currentAttempt.appendChild(item);
			})
		}

		keys.forEach(key => {
			key.addEventListener("click", function() {
				let clicked = Number(key.dataset.value);

				sound.currentTime = 0;
				sound.play()


				if (presses.length < passcode.length) {
					presses.push(clicked);
				}
				else {
					presses.shift()
					presses.push(clicked);
				}

				setTimeout(() => {
					if (passcode.join(',') == presses.join(',')) {
						alert("Correct passcode has been entered - Lockbox opening!")
					}
				}
				, 200)

				loadCurrentAttempt();
			})
		})

		loadCurrentAttempt();
