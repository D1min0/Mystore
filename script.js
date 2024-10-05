// Button Click to Show Chat Area and Welcome Message
document.getElementById("buyButton").addEventListener("click", function() {
    showChatArea();
});

// Open Chat Button
document.getElementById("openChatButton").addEventListener("click", function() {
    showChatArea();
});

// Function to Show Chat Area and Add Welcome Message
function showChatArea() {
    var chatArea = document.getElementById("chatArea");
    chatArea.style.display = "flex"; // Show the chat area
    chatArea.style.flexDirection = "column";

    // Welcome message
    var messagesDiv = document.querySelector(".messages");
    var welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('message', 'owner');
    welcomeMessage.textContent = 'Slm! Bch njmou n3awnouk ken bch tchri. Type "Buy" or type "Ask" for help.';
    messagesDiv.appendChild(welcomeMessage);

    // Scroll to the bottom of the chat
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Hide button with fade-out effect
    var openChatButton = document.getElementById("openChatButton");
    openChatButton.classList.add('fade-out'); // Add fade-out class
    setTimeout(() => {
        openChatButton.style.display = "none"; // Hide after fading out
    }, 500); // Match the duration to the fade-out time
}

// Chat Command Functionality (Buy/Ask Commands)
document.getElementById("sendButton").addEventListener("click", sendMessage);

document.getElementById("messageInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var messageText = messageInput.value.toLowerCase().trim();

    var messagesDiv = document.querySelector(".messages");

    // Append customer message to chat
    var customerMessage = document.createElement('div');
    customerMessage.classList.add('message', 'customer');
    customerMessage.textContent = messageText;
    messagesDiv.appendChild(customerMessage);

    // Clear input after sending
    messageInput.value = '';

    // Respond based on the command
    var ownerMessage = document.createElement('div');
    ownerMessage.classList.add('message', 'owner');

    if (messageText === 'buy') {
        ownerMessage.innerHTML = 'DM me on <a href="https://www.instagram.com/moha.med1li/" target="_blank" class="instagram-link">Instagram</a> to buy the service.If the link doesnt work this is the username "moha.med1li"';
    } else if (messageText === 'ask') {
        ownerMessage.textContent = 'Wait for the owner to respond as fast as possible.';
    } else {
        ownerMessage.textContent = 'Unknown command. Please type "Buy" or "Ask".';
    }

    messagesDiv.appendChild(ownerMessage);

    // Scroll to the bottom of the chat
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Close Chat Button
document.getElementById("closeChatButton").addEventListener("click", function() {
    var chatArea = document.getElementById("chatArea");
    chatArea.style.display = "none"; // Hide the chat area
    var openChatButton = document.getElementById("openChatButton");
    openChatButton.style.display = "block"; // Show the chat button again
    openChatButton.classList.remove('fade-out'); // Remove fade-out class
});
