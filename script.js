const text = "p i c k 1 e s e c | b l u e  t e a m";
const decryptionDelay = 50; // Delay in milliseconds between encryption and decryption
const typingSpeed = 100; // Typing speed in milliseconds

const encryptedTextElement = document.getElementById("encrypted-text");
const decryptedTextElement = document.getElementById("decrypted-text");

let index = 0;

function typeNextCharacter() {
    if (index < text.length) {
        const char = text[index];
        const encryptedChar = String.fromCharCode(Math.random() * 128);

        encryptedTextElement.textContent += encryptedChar;
        setTimeout(() => {
            encryptedTextElement.textContent = encryptedTextElement.textContent.slice(0, -1);
            decryptedTextElement.textContent += char;
            index++;
            setTimeout(typeNextCharacter, typingSpeed);
        }, decryptionDelay);
    }
}

typeNextCharacter();