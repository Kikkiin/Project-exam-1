
const imageContainer = document.getElementById("carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const apiURL = 'https://blogg.kikkin.no/wp-json/wp/v2/posts?per_page=28';

async function fetchAndDisplayImages() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const posts = await response.json();

    posts.forEach(post => {
      if (post.better_featured_image && post.better_featured_image.source_url) { 
        const container = document.createElement('div');
        container.className = 'image-container';

        const imageElement = document.createElement('img');
        imageElement.src = post.better_featured_image.source_url; 
        imageElement.alt = post.better_featured_image.alt_text || 'Featured image'; 
        imageElement.className = 'carousel-image';


        const titleElement = document.createElement('div');
        titleElement.className = 'image-title';
        titleElement.textContent = post.title.rendered;

        imageElement.addEventListener('click', () => {
          window.location.href = `html/postdetails.html?id=${post.id}`;
        });


        container.appendChild(imageElement);
        container.appendChild(titleElement);

        imageContainer.appendChild(container);


      }
    });

    setupCarouselNavigation();

  } catch (error) {
    console.error('Fetch error:', error);
    imageContainer.innerHTML = `<p>Error fetching images: ${error.message}</p>`;
  }
}

function setupCarouselNavigation() {
  const firstImg = imageContainer.querySelector("img");
  if (firstImg) {

      let scrollDistance = firstImg.clientWidth;

      if (window.innerWidth <= 600) { 
          scrollDistance += 2; 
      } else {
          scrollDistance += 150; 
      }


      arrowIcons.forEach(icon => {
          icon.addEventListener("click", () => {
              imageContainer.scrollLeft += icon.id === "left" ? -scrollDistance : scrollDistance;
          });
      });
  }
}

fetchAndDisplayImages();


