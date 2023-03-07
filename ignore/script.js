const { read } = require('fs');
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateWithToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoib2F1dGgyfGRpc2NvcmR8MjQ0ODI5Mjg2OTAzNzA5Njk2IiwiYXVkIjpbImh0dHBzOi8vYXV0aDAuY2hhcmFjdGVyLmFpLyIsImh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2Nzc5MzQ5NTEsImV4cCI6MTY4MDUyNjk1MSwiYXpwIjoiZHlEM2dFMjgxTXFnSVNHN0Z1SVhZaEwyV0VrbnFaenYiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.vrpLbxfy38V2bpS1e6A35Y3shII_5dkwyzRzydBC7HFDjev_bkWM8f_L6wt2mDwYCEOZkB8QKYYy2AaUsJp-0XugsmFMEaEyN3ZOn4mSH9A_ck3u9HgLkffCuLdn41y01nN2PpGJlONaNOGDoOw0aZhvNGn9EsWBx_jMDU99D-w9twcUnKLHekLsu1FBRCG_2ezIOOU8KkrV8EKnZ8luS--9LbeMmgy-U7XsQpO7OYnWTCO3OY8MILpqRVc7oKhe_jFYH1Hsv4ueDfDIHAeeMyT-f9G0NEHrw55LY4zgW81FgQ5ih3pbcF5OXmgLo0nDM5aSspnJ5mQXkIhYvNAElg');
    const characterId = "Ce2mdN0e7xozlZ8dKl75rCOoRJTWE2FI5Ha7gN7QEgE";
    const chat = await characterAI.createOrContinueChat(characterId);
    
    console.log('Bot started!');

    const form = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const chatLog = document.getElementById('chat-log');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();
        const message = messageInput.value;
        messageInput.value = '';
        const response = await chat.sendAndAwaitResponse(message, true);
        const chatEntry = document.createElement('p');
        chatEntry.innerText = `You: ${message}\nBot: ${response}`;
        chatLog.appendChild(chatEntry);
    });
})();

