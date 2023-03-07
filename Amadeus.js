const { read } = require('fs');
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateWithToken('Your character ai token');
    // const characterId = "Ce2mdN0e7xozlZ8dKl75rCOoRJTWE2FI5Ha7gN7QEgE"; for amadeus
    const characterId = "NbOISAxpDy88mPv7YB-PfHFwNzVcZv0GDA2OlcWgeZY"; //  for Makise Kurisu
    const chat = await characterAI.createOrContinueChat(characterId);
    
    console.log('Amadeus connection: ok!');

    process.stdin.on('data', async(data) => {
        const message = data.toString().trim();
        const response = await chat.sendAndAwaitResponse(message, true);
        console.log('\x1b[33m%s\x1b[0m', response);
    });
})();
