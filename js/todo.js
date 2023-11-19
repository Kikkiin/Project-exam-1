const categoryId = 11; // Erstatt med IDen til kategorien du vil hente poster fra
const apiUrl = `https://osloblog.local/wp-json/wp/v2/posts?categories=${categoryId}`;

async function fetchPostsByCategory() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const posts = await response.json();
      const postsContainer = document.querySelector('.blogposts');
      postsContainer.innerHTML = ''; // Rensker tidligere innlegg
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postLink = document.createElement('a');
        postLink.href = `postDetails.html?id=${post.id}`;
        postLink.classList.add('post-link');

        postLink.innerHTML = `
        <div class="post-header">
          <h2>${post.title.rendered}</h2>
        </div>
        <div class="post-image">
          ${post.better_featured_image ? `<img src="${post.better_featured_image.source_url}" alt="${post.title.rendered}">` : ''}
        </div>
        <div class="post-excerpt">
          <p>${post.excerpt.rendered}</p>
        </div>
        `;

        postElement.appendChild(postLink);
        postsContainer.appendChild(postElement);
      });

    } catch (error) {
      console.error('Error fetching posts:', error);
      showError(error.message);
    }
  }
  
  fetchPostsByCategory();

  
