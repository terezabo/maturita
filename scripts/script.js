const podcastList = document.querySelector('.podcast-list');

fetch('podcast.xml')
	.then(response => response.text())
	.then(str => new DOMParser().parseFromString(str, 'text/xml'))
	.then(xmlDoc => {
		const items = xmlDoc.querySelectorAll('item');

		items.forEach(item => {
			const title = item.querySelector('title').textContent;
			const description = item.querySelector('description').textContent;
			const enclosure = item.querySelector('enclosure').getAttribute('url');
			const image = item.querySelector('image').getAttribute('href');

			const podcast = document.createElement('div');
			podcast.classList.add('podcast');
			podcast.innerHTML = `
				<img src="${image}" alt="${title}">
				<h2>${title}</h2>
				<p>${description}</p>
				<audio controls controlsList="nodownload">
					<source src="${enclosure}" type="audio/mpeg">
				</audio>
			`;

			podcastList.appendChild(podcast);
		});
	})
	.catch(error => console.error(error));

