document.addEventListener("DOMContentLoaded", function () {
    loadStories();
    checkUser();
});

function checkUser() {
    const username = localStorage.getItem("username");
    if (!username) {
        window.location.href = "auth.html";
    }
}

function loadStories() {
    const stories = JSON.parse(localStorage.getItem("stories")) || [];
    const storyContainer = document.getElementById("stories");

    storyContainer.innerHTML = "";
    stories.forEach((story, index) => {
        let div = document.createElement("div");
        div.classList.add("story");
        div.innerHTML = `<h3>${story.title}</h3><p>${story.content}</p><p><strong>By:</strong> ${story.author}</p>`;
        storyContainer.appendChild(div);
    });
}

function searchStories() {
    let query = document.getElementById("search").value.toLowerCase();
    let stories = document.getElementsByClassName("story");

    Array.from(stories).forEach(story => {
        let title = story.getElementsByTagName("h3")[0].innerText.toLowerCase();
        story.style.display = title.includes(query) ? "block" : "none";
    });
}

document.getElementById("logout")?.addEventListener("click", function () {
    localStorage.removeItem("username");
    window.location.href = "auth.html";
});
