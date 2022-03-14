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
  console.log(postTitle);
  console.log(postBody);
  let postData = { title: postTitle, body: postBody };
  console.log(postData);
});
