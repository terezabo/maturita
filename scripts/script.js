const podcastList = document.querySelector('.biologie');

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
			hex.innerHTML = `
        <div class="hexIn">
          <a class="hexLink" href="#">
            <div class='img' style='background-image: url(${image});'></div>
            <h2 id="h2">${title}</h2>
            <audio controls controlsList="nodownload">
              <source src="${enclosure}" type="audio/mpeg">
            </audio>
          </a>
        </div>
			`;


			podcastList.appendChild(hex);
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
			hex.innerHTML = `
        <div class="hexIn">
          <a class="hexLink" href="#">
            <div class='img' style='background-image: url(${image});'></div>
            <h2 id="h2">${title}</h2>
            <audio controls controlsList="nodownload">
              <source src="${enclosure}" type="audio/mpeg">
            </audio>
          </a>
        </div>
			`;


			podcastCh.appendChild(hex);
		});
	})
	.catch(error => console.error(error));

