const apiUrl = 'https://osloblog.local/wp-json/wp/v2/posts';

let perPage = 10;
let page = 1;
let totalPosts = 0;

async function fetchPosts() {
    const url = `${apiUrl}?per_page=${perPage}&page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to load posts');
    }

    totalPosts = response.headers.get(`X-WP-Total`);

    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

async function displayPostImages() {
  try {
    const posts = await fetchPosts();
    const postsContainer = document.querySelector('.posts');
    // postsContainer.innerHTML = '';

    posts.forEach(post => {
      const postLink = document.createElement('a');
      postLink.href = `postdetails.html?id=${post.id}`;
      postLink.classList.add('post-link');

        const postTitle = document.createElement('h2');
        postTitle.innerHTML = post.title.rendered; 
        postLink.appendChild(postTitle);

      if (post.better_featured_image) {
        const postImage = document.createElement('img');
        postImage.src = post.better_featured_image.source_url;
        postImage.alt = post.title.rendered;
        postLink.appendChild(postImage);
      }

      const postItem = document.createElement('div');
      postItem.classList.add('post-item');
      
      postItem.appendChild(postLink);
      postsContainer.appendChild(postItem);
    });

    const loadedPosts = page * perPage;
    if (loadedPosts >= totalPosts) {
      document.getElementById('load-more').style.display = 'none';
    } else {
      document.getElementById('load-more').style.display = 'block';
      page++; // Øk sidevariabelen for neste batch av poster
    }

  } catch (error) {
    console.error('Error displaying posts:', error);
  }
}

document.getElementById('load-more').addEventListener('click', displayPostImages);

displayPostImages();

