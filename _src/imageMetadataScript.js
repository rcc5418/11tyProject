// Fetch and display image data
fetch('./image_metadata.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('imageContainer');

        data.forEach(image => {
            const item = document.createElement('div');
            item.classList.add('image_storage');

            const img = document.createElement('img');
            img.src = image.filepath;
            //img.alt = image.filename;

            const label = document.createElement('p');
            label.textContent = image.filename;

            item.appendChild(img);
            item.appendChild(label);
            container.appendChild(item);
        });
    });
