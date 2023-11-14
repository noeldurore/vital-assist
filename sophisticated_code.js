/* 
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a sophisticated and complex implementation of a social media platform
 */

// User class
class User {
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.friendList = [];
    this.posts = [];
  }

  addFriend(user) {
    this.friendList.push(user);
  }

  removeFriend(user) {
    const index = this.friendList.indexOf(user);
    if (index > -1) {
      this.friendList.splice(index, 1);
    }
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    return post;
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }
}

// Post class
class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(user, comment) {
    this.comments.push({ user, comment });
  }
}

// Creating users
const user1 = new User("Alice", 25, "alice@example.com", "password");
const user2 = new User("Bob", 30, "bob@example.com", "password");
const user3 = new User("Eve", 28, "eve@example.com", "password");

// Building the social media network
user1.addFriend(user2);
user1.addFriend(user3);
user2.addFriend(user1);
user3.addFriend(user1);

// Creating posts
const post1 = user1.createPost("Hello, friends!");
const post2 = user2.createPost("It's a beautiful day!");
const post3 = user3.createPost("Feeling excited!");

// Interactions
post1.like();
post1.like();
post2.like();

post1.addComment(user2, "Great post, Alice!");
post1.addComment(user3, "Keep sharing!");

user1.deletePost(post2);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(post1);

// ... (rest of the code)