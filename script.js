const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const questions = [
    "How are you today?",
    "What is your favorite color?",
    "What do you like to do in your free time?",
    "Have you been to any interesting places?",
    "What is your favorite food?",
    "Do you enjoy reading books?",
    "What's the most exciting thing you've done recently?",
    "What kind of music do you like?",
    "Do you have any hobbies?",
    "What's something you've always wanted to learn?"
];

const responses = [
    "I'm doing great, thanks for asking!",
    "My favorite color is blue!",
    "I enjoy reading and exploring new things.",
    "I haven't been, but I wish I could travel more!",
    "I love pizza, it's so delicious!",
    "Reading is one of my favorite activities.",
    "I recently learned something new, it's been exciting!",
    "I enjoy listening to a variety of music.",
    "I love gardening and painting in my free time.",
    "I would love to learn how to play the guitar!"
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function getRandomResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function sendMessage() {
    const userText = userInput.value.trim();
    
    if (userText === "") return;

    chatBox.innerHTML += `<div><b>You:</b> ${userText}</div>`;

    setTimeout(() => {
        chatBox.innerHTML += `<div><b>Bot:</b> ${getRandomResponse()}</div>`;
        chatBox.innerHTML += `<div><b>Bot:</b> ${getRandomQuestion()}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight; 
    }, 1000);

    userInput.value = "";
}

chatBox.innerHTML = `<div><b>Bot:</b> Hello! ${getRandomQuestion()}</div>`;
