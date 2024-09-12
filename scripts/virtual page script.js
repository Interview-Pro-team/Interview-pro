// Access camera for the user
const userCameraElement = document.getElementById('userCamera');
const microphoneButton = document.querySelector('.microphone-button');
const listeningLine = document.querySelector('.listening-line');
let isListening = false;
let micPermissionGranted = false;

// Function to start the user camera and display feedback in the <video> element
async function startUserCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    userCameraElement.srcObject = stream;
  } catch (error) {
    console.error('Error accessing user camera: ', error);
  }
}

// Call the function to start the camera when the page loads
window.onload = startUserCamera;

// Request permission for the microphone (first-time use)
async function requestMicrophonePermission() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    micPermissionGranted = true;
    console.log("Microphone permission granted");
  } catch (error) {
    console.error('Error accessing microphone: ', error);
  }
}

// Toggle microphone on/off when the button is clicked
microphoneButton.addEventListener('click', () => {
  if (!micPermissionGranted) {
    requestMicrophonePermission();
  }
  
  if (!isListening) {
    startListening();
    microphoneButton.classList.add('active');  // Change button color when active
    listeningLine.classList.add('active');  // Show the "You can talk now..." line
  } else {
    stopListening();
    microphoneButton.classList.remove('active');  // Reset button color
    listeningLine.classList.remove('active');  // Hide the line
  }
  isListening = !isListening;
});

// Placeholder: Function to start listening to user's voice input
function startListening() {
  console.log("Listening to user...");
  // Implement voice-to-text functionality here
}

// Placeholder: Function to stop listening
function stopListening() {
  console.log("Stopped listening to user...");
}

// Chat history (sample interaction)
const chatHistoryUser = document.getElementById('userChatHistory');
const chatHistoryAI = document.getElementById('aiChatHistory');

// Function to append user message to chat history
function appendUserMessage(message) {
  const userBubble = document.createElement('div');
  userBubble.classList.add('chat-bubble', 'user-bubble');
  userBubble.innerText = message;
  chatHistoryUser.appendChild(userBubble);
}

// Function to append AI message to chat history
function appendAIMessage(message) {
  const aiBubble = document.createElement('div');
  aiBubble.classList.add('chat-bubble', 'ai-bubble');
  aiBubble.innerText = message;
  chatHistoryAI.appendChild(aiBubble);
}

// Example usage (replace with real voice-to-text or input functionality)
function simulateConversation() {
  appendUserMessage("Hello, AI!");
  setTimeout(() => {
    appendAIMessage("Hi, how can I assist you today?");
  }, 1000);
}

// Simulate a chat when the page loads
window.onload = function() {
  startUserCamera();
  simulateConversation();  // Simulate chat after loading the camera
};
