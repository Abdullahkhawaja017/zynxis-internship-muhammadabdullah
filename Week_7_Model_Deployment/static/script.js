const messageInput = document.getElementById("messageInput");
const characterCount = document.getElementById("characterCount");
const analyzerForm = document.getElementById("analyzerForm");
const loadingOverlay = document.getElementById("loadingOverlay");
const loadingMessage = document.getElementById("loadingMessage");


// Character counter

function updateCharacterCount() {

    const count = messageInput.value.length;

    characterCount.textContent = `${count} characters`;

}

messageInput.addEventListener("input", updateCharacterCount);


// Loading animation

analyzerForm.addEventListener("submit", function () {

    loadingOverlay.style.display = "flex";

    const messages = [
        "Initializing AI engine...",
        "Cleaning message text...",
        "Extracting linguistic features...",
        "Running machine learning model...",
        "Calculating threat probability...",
        "Finalizing analysis..."
    ];

    let index = 0;

    loadingMessage.textContent = messages[index];

    setInterval(function () {

        index++;

        if (index < messages.length) {

            loadingMessage.textContent = messages[index];

        }

    }, 700);

});


// Initialize counter

updateCharacterCount();