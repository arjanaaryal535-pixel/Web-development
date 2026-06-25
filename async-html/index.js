// Task 1: Understanding Callbacks

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Arjana" });
  }, 2000);
}

getUser(1, function (user) {
  console.log("Task 1 - Name:", user.name);
});


// Task 2: Callback Hell

function getUser2(id, callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: id, name: "Arjana" });
  }, 1000);
}

function getPosts2(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback(["post1", "post2"]);
  }, 1000);
}

function getComments2(post, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback(["nice", "good"]);
  }, 1000);
}

getUser2(1, function (user) {
  getPosts2(user.id, function (posts) {
    getComments2(posts[0], function (comments) {
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});


// Task 3: Promises

function getUser3(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "Arjana" });
    }, 1000);
  });
}

function getPosts3(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getComments3(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["nice", "good"]);
    }, 1000);
  });
}

getUser3(1)
  .then((user) => {
    return getPosts3(user.id);
  })
  .then((posts) => {
    return getComments3(posts[0]);
  })
  .then((comments) => {
    console.log("Task 3 - Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


// Task 4: Async/Await

async function showData() {
  try {
    const user = await getUser3(1);
    const posts = await getPosts3(user.id);
    const comments = await getComments3(posts[0]);

    console.log("Task 4 - User:", user);
    console.log("Task 4 - Posts:", posts);
    console.log("Task 4 - Comments:", comments);
  } catch (error) {
    console.log("Error:", error);
  }
}

showData();