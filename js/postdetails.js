
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postDetails = document.querySelector(".postDetails");

const apiUrl = `https://blogg.kikkin.no/wp-json/wp/v2/posts/${id}`;

function showError(message) {
    const errorContainer = document.querySelector(".postDetails");
    errorContainer.innerHTML = `<h3>Error: ${message}</h3>`;
}

async function fetchPost() {
    showLoadingIndicator();

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok`);
        }

        const post = await response.json();

        document.title = post.title.rendered;

        postDetails.innerHTML = `<div class="post-intro">
                                    <div class="post-info">
                                        <h1>${post.title.rendered}</h1>
                                        ${post.better_featured_image ? `<div class="image-container">
                                        <img src="${post.better_featured_image.source_url}" alt="${post.title.rendered}" class="details-image">
                                    </div>` : ''}
                                        <p class="post-text">${post.content.rendered}</p>
                                    </div>
                                
                                </div>`;

    addImageClickHandlers();
    addModalEventHandlers();
    
    } catch (error) {
        showError(error.message);
    }
}

function showLoadingIndicator() {
    postDetails.innerHTML = "<p>Loading post...</p>";
}

function addImageClickHandlers() {
    const images = postDetails.querySelectorAll('img, figure figure img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');

            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });
}

function addModalEventHandlers() {
    const modal = document.getElementById('imageModal');

    // Lukk modalen når det klikkes utenfor bildet
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Lukk modalen når brukeren klikker på <span> (x)
    document.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });
}


fetchPost();
