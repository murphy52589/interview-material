const axios = require('axios');

async function fetchUserData() {
  try {
    const users = await getUsers();
    const posts = await getPosts();

    const postCounts = countPostsByUser(posts);

    displayPostCounts(users, postCounts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function getUsers() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
}

async function getPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

function countPostsByUser(posts) {
  const postCounts = {};
  // Count the number of posts for each user
  posts.forEach(post => {
    // If the user doesn't have any posts yet, initialize the count to 0
    if (!postCounts[post.userId]) {
      postCounts[post.userId] = 0;
    }
    // Increment the post count for the user
    postCounts[post.userId]++;
  });
  return postCounts;
}

function displayPostCounts(users, postCounts) {
  users.forEach(user => {
    // If the user doesn't have any posts, the count will be undefined, so default to 0
    const postCount = 0;
    if (postCounts[user.id]) {
      postCount = postCounts[user.id];
    }
    console.log(`${user.name} has ${postCount} posts.`);
  });
}

fetchUserData();