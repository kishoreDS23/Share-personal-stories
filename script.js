document.addEventListener("DOMContentLoaded", function() {
    const emailModal = document.getElementById("emailModal");
    const signInButton = document.getElementById("signIn");
    const signUpButton = document.getElementById("signUp");
    const saveProfileButton = document.getElementById("saveProfile");
    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const storyForm = document.getElementById("storyForm");
    const storiesContainer = document.getElementById("stories");

    signInButton.addEventListener("click", function() {
        emailModal.style.display = "none";
    });

    signUpButton.addEventListener("click", function() {
        emailModal.style.display = "none";
    });

    saveProfileButton.addEventListener("click", function() {
        localStorage.setItem("profileName", profileName.value);
        localStorage.setItem("profileEmail", profileEmail.value);
        alert("Profile saved successfully!");
    });

    storyForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const story = document.getElementById("story").value;

        if (name && story) {
            const storyElement = document.createElement("div");
            storyElement.classList.add("story");
            storyElement.innerHTML = `<h3>${name}</h3><p>${story}</p>`;
            storiesContainer.appendChild(storyElement);
            
            document.getElementById("name").value = "";
            document.getElementById("story").value = "";
        }
    });

    window.onload = function() {
        if (localStorage.getItem("profileName")) {
            profileName.value = localStorage.getItem("profileName");
        }
        if (localStorage.getItem("profileEmail")) {
            profileEmail.value = localStorage.getItem("profileEmail");
        }
    };
});
