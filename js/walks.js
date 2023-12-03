
import { fetchPostsByCategory } from './fetchPosts.js';

const categoryId = 7; 
const apiUrl = `https://blogg.kikkin.no/wp-json/wp/v2/posts?categories=${categoryId}`;

fetchPostsByCategory(apiUrl);