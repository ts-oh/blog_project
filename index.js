let postsArray = [];

const titleInput = document.querySelector("#post-title");
const bodyInput = document.querySelector("#post-body");
const form = document.querySelector("#new-post");
const list = document.querySelector("#blog-list");

function renderPosts() {
  list.textContent = "";
  for (let post of postsArray) {
    const drawTitle = document.createElement("h3");
    drawTitle.textContent = post.title;
    list.appendChild(drawTitle);

    const drawBody = document.createElement("p");
    drawBody.textContent = post.body;
    list.appendChild(drawBody);

    const drawLineBreak = document.createElement("hr");
    list.appendChild(drawLineBreak);
  }
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = titleInput.value;
  const postBody = bodyInput.value;

  if (postTitle === "" || postBody === "") {
    return;
  }

  const data = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((response) => response.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPosts();
      form.reset();
    });
});
