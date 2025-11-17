const fs = require("fs");
const path = require("path");

const DB_FILE = path.join(__dirname, "posts.json");

// Garantir que o arquivo existe
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, "[]");
}

// Ler todos os posts
function getAllPosts() {
  const data = fs.readFileSync(DB_FILE);
  return JSON.parse(data);
}

// Criar novo post
function createPost(post) {
  const posts = getAllPosts();
  posts.push(post);

  fs.writeFileSync(DB_FILE, JSON.stringify(posts, null, 2));
}

module.exports = { createPost, getAllPosts };

