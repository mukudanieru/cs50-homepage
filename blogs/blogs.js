const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-button");
const blogList = document.querySelector("#blog-list");
const blogs = blogList.querySelectorAll(".blog");

function clearSearch() {
  if (searchInput.value) {
    searchInput.value = "";

    const existingNoMatchesMessage =
      document.querySelector(".no-match-message");
    if (existingNoMatchesMessage) {
      blogList.classList.remove("no-match");
      existingNoMatchesMessage.remove();
    }

    blogs.forEach((blog) => {
      blog.classList.remove("hidden");
    });
  }
}

function searchBlogs() {
  const searchTerm = searchInput.value.toLowerCase();

  let visibleCount = 0;

  const existingNoMatchesMessage = document.querySelector(".no-match-message");
  if (existingNoMatchesMessage) {
    blogList.classList.remove("no-match");
    existingNoMatchesMessage.remove();
  }

  blogs.forEach((blog) => {
    const title = blog.querySelector(".title").textContent.toLowerCase();
    const date = blog.querySelector(".subtitle").textContent.toLowerCase();
    const text = blog.querySelector(".text").textContent.toLowerCase();

    if (
      title.includes(searchTerm) ||
      date.includes(searchTerm) ||
      text.includes(searchTerm)
    ) {
      blog.classList.remove("hidden");
      visibleCount++;
    } else {
      blog.classList.add("hidden");
    }
  });

  if (visibleCount === 0) {
    const noMatches = document.createElement("p");
    blogList.classList.add("no-match");

    noMatches.textContent = `Oops! ${visibleCount} matches. Try a different search.`;
    noMatches.classList.add("no-match-message", "subtitle");

    console.log(noMatches);
    blogList.appendChild(noMatches);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  clearButton.addEventListener("click", clearSearch);

  searchInput.addEventListener("input", searchBlogs);
});
