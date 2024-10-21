var imagesArray = "";
var currentProduct = 0;


window.onload = function() {
    window.scrollTo(0, 0);
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "php/getProducts.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            var tbody = document.querySelector('#productionTable tbody');
            data.forEach(function(item) {
                var row = document.createElement('tr');

                var idCell = document.createElement('td');
                idCell.textContent = item.id_production;
                row.appendChild(idCell);

                var classCell = document.createElement('td');
                classCell.textContent = item.class;
                row.appendChild(classCell);

                var modalCell = document.createElement('td');
                modalCell.textContent = item.modal;
                row.appendChild(modalCell);

                row.onclick = function() {
                    
                    var galleryContainer = document.querySelector('.row.gallery-item');

                    while (galleryContainer.firstChild) {
                        galleryContainer.removeChild(galleryContainer.firstChild);
                    }

                    $('#selprodlabel').text('Станок №' + item.id_production + ' - ' + item.class + ' мод. ' + item.modal);
                    $('#selprodlabel').css('visibility', 'visible');

                    var folderPath = '/img/products/' + item.id_production;
                    loadImages(folderPath);

                    var hash = "#productionFotoContainer";
                    window.location.hash = hash;
                
                    $('body,html').stop().animate({scrollTop: $('#productionTable').offset().top}, 1500);

                    $('body,html').animate({scrollTop: $(hash).offset().top-80}, 1500);
                };
                tbody.appendChild(row);
            });


            var loadLabel = document.querySelector('#productionTableContainer h4');
            loadLabel.textContent = '*для просмотра фото выберите модель';

            var loadProdSpin = document.getElementById('loadProdSpin');
            loadProdSpin.remove();

        }
    };
    xhr.send();
};



function loadImages(folderPath) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "php/getProductsImg.php?folder=" + encodeURIComponent(folderPath), true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            imagesArray = "";

            imagesArray = JSON.parse(xhr.responseText);

            imagesArray.push("/img/products/pozvonit_kupit_stanok.jpg");
            
            displayImages();
        }
    };
    xhr.send();
}



function displayImages() {
    var galleryContainer = document.querySelector('.row.gallery-item');

    var divtype = imagesArray.length % 2 == 0 ? "col-md-6": "col-md-4";

    imagesArray.forEach(function(imagePath) {
        var imageDiv = document.createElement('div');
        imageDiv.className = divtype;
    
        var link = document.createElement('a');
        link.href = imagePath;
        link.className = 'img-pop-up';
        link.id = imagePath.substring(imagePath.lastIndexOf('/') + 1).split('.').shift();
    
        var image = document.createElement('div');
        image.className = 'single-gallery-image';
        image.style.backgroundImage = 'url(' + imagePath + ')';
    
        var loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        loadingOverlay.innerHTML = `
            <div class="loading-spinner images">
                <span class="loadSpin l1"></span>
                <span class="loadSpin l2"></span>
                <span class="loadSpin l3"></span>
                <span class="loadSpin l4"></span>
                <span class="loadSpin l5"></span>
                <span class="loadSpin l6"></span>
            </div>
        `;

        image.appendChild(loadingOverlay);
        link.appendChild(image);
        imageDiv.appendChild(link);
        galleryContainer.appendChild(imageDiv);

        var tempImage = new Image();
        tempImage.src = imagePath;
        tempImage.onload = function() { loadingOverlay.remove(); };

        link.addEventListener('click', function(event) {
            event.preventDefault();
            currentProduct = getProductPosition(link.id);

            var modal = document.createElement('div');
            modal.className = 'modal';

            var modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            var modalImage = document.createElement('img');
            modalImage.src = link.href;

            var prevButton = document.createElement('button');
            prevButton.textContent = '◄';
            prevButton.className = 'prev-button';

            var nextButton = document.createElement('button');
            nextButton.textContent = '►';
            nextButton.className = 'next-button';

            modalContent.appendChild(modalImage);
            modal.appendChild(modalContent);
            modal.appendChild(prevButton);
            modal.appendChild(nextButton);
            document.body.appendChild(modal);

            prevButton.addEventListener('click', function() {
                if(currentProduct > 0) {
                    --currentProduct;
                    gallerySwitcher();
                } 
            });

            nextButton.addEventListener('click', function() {
                if(currentProduct < imagesArray.length - 1) {
                    ++currentProduct;
                    gallerySwitcher();
                } 
            });

            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.remove();
                }
            });

            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    modal.remove();
                }
            });
        });
    });
}

function gallerySwitcher() {
    var modalContentImage = document.querySelector('.modal-content img');
    modalContentImage.src = imagesArray[currentProduct];
}




function getProductPosition(id) {
    for (var i = 0; i < imagesArray.length; i++) {
        if (imagesArray[i].indexOf(id) !== -1) {
            return i;
        }
    }
    return -1;
}
