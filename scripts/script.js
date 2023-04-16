const podcastB = document.querySelector('.biologie');

	fetch('biologie.xml')
		.then(response => response.text())
		.then(str => new DOMParser().parseFromString(str, 'text/xml'))
		.then(xmlDoc => {
			const items = xmlDoc.querySelectorAll('item');
	
			items.forEach(item => {
				const title = item.querySelector('title').textContent;
				const description = item.querySelector('description').textContent;
				const enclosure = item.querySelector('enclosure').getAttribute('url');
				const image = item.querySelector('image').getAttribute('href');
	
				const hex = document.createElement('li');
				hex.classList.add('hex');
				hex.id = title;
				hex.dataset.initialTitle = title;
				hex.innerHTML = `
					<div class="hexIn" id="${title}" onclick="changeContent(this)">
						<a class="hexLinkB">
							<div class='img' style='background-image: url(${image}); display: none;'></div>
							<h2 id="h2">${title}</h2>
							<audio controls controlsList="nodownload" style="display: none;">
								<source src="${enclosure}" type="audio/mpeg">
							</audio>
						</a>
					</div>
				`;
	
				podcastB.appendChild(hex);
			});
		})
		.catch(error => console.error(error));
	




	const podcastCh = document.querySelector('.chemie');

	fetch('chemie.xml')
		.then(response => response.text())
		.then(str => new DOMParser().parseFromString(str, 'text/xml'))
		.then(xmlDoc => {
			const items = xmlDoc.querySelectorAll('item');
	
			items.forEach(item => {
				const title = item.querySelector('title').textContent;
				const description = item.querySelector('description').textContent;
				const enclosure = item.querySelector('enclosure').getAttribute('url');
				const image = item.querySelector('image').getAttribute('href');
	
				const hex = document.createElement('li');
				hex.classList.add('hex');
				hex.id = title;
				hex.dataset.initialTitle = title;
				hex.innerHTML = `
					<div class="hexIn" id="${title}" onclick="changeContent(this)">
						<a class="hexLink">
							<div class='img' style='background-image: url(${image}); display: none;'></div>
							<h2 id="h2">${title}</h2>
							<audio controls controlsList="nodownload" style="display: none;">
								<source src="${enclosure}" type="audio/mpeg">
							</audio>
						</a>
					</div>
				`;
	
				podcastCh.appendChild(hex);
			});
		})
		.catch(error => console.error(error));
	
	
	
		let prevClickedDiv = null;
	
	function changeContent(div) {
		if (prevClickedDiv && prevClickedDiv === div) {
			// Remove the 'clicked' class if clicking the same div twice
			div.querySelector('#h2').textContent = div.dataset.initialTitle;
			div.querySelector('.img').style.display = 'none';
			div.querySelector('audio').style.display = 'none';
			div.classList.remove('clicked');
			prevClickedDiv = null;
			return;
		}
	
		if (prevClickedDiv) {
			prevClickedDiv.querySelector('#h2').textContent = prevClickedDiv.dataset.initialTitle;
			prevClickedDiv.querySelector('.img').style.display = 'none';
			prevClickedDiv.querySelector('audio').style.display = 'none';
			prevClickedDiv.classList.remove('clicked');
		}

		div.querySelector('#h2').style.color = 'black';
		div.querySelector('.img').style.display = 'block';
		div.querySelector('audio').style.display = 'block';
		div.classList.add('clicked');
		div.dataset.initialTitle = div.id;
	
		prevClickedDiv = div;
	}


