const storyForm = document.getElementById('storyForm');
const storiesDiv = document.getElementById('stories');
const searchBar = document.getElementById('searchBar');
const emailModal = document.getElementById('emailModal');
const emailInput = document.getElementById('emailInput');
const passwordinput =document.getElementById("passwordInput");
const submitEmail = document.getElementById('submitEmail');

// Show email modal on page load
window.onload = function() {
    emailModal.style.display = 'flex';
};

// Handle email submission
submitEmail.addEventListener('click', function() {
    const email = emailInput.value.trim();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailModal.style.display = 'none';
    } else {
        alert('Please enter a valid email address.');
    }
});

storyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const story = document.getElementById('story').value.trim();

    if (name && story) {
        const storyElement = document.createElement('div');
        storyElement.classList.add('story');

        const storyTitle = document.createElement('h3');
        storyTitle.textContent = name;
        storyElement.appendChild(storyTitle);

        const storyContent = document.createElement('p');
        storyContent.textContent = story;
        storyElement.appendChild(storyContent);

        storiesDiv.appendChild(storyElement);

        // Clear form fields
        storyForm.reset();
    } else {
        alert('Please fill in both fields.');
    }
});

searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    const stories = document.querySelectorAll('.story');

    stories.forEach(story => {
        const title = story.querySelector('h3').textContent.toLowerCase();
        const content = story.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
});
