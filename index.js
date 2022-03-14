fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let html = "";
    for (let post of postsArr) {
      html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
    }
    document.getElementById("blog-list").innerHTML = html;
  });

document.querySelector("#new-post").addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = document.querySelector("#post-title").value;
  const postBody = document.querySelector("#post-body").value;
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

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((response) => response.json())
    .then((post) => {
      console.log(post);
      document.getElementById("blog-list").innerHTML += `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr />`;
    });
});
