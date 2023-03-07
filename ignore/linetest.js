const line = require('@line/bot-sdk');
const express = require('express');
const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

const config = {
    channelAccessToken: 'djdv93WACEWY3DIaC7TwcnCfsd7Lj0NYIr8tYFuG12Fpcz0SZgtqn8/uaaEwBu7C2h4l7eG1SqK21w2eh9OQnLKs/kalW+0Ey/ZfyglvskeR2OeXopIGd9zrL6vZn0LESlS4Rj8POucrssvWrd8OjAdB04t89/1O/w1cDnyilFU=/uaaEwBu7C2h4l7eG1SqK21w2eh9OQnLKs/kalW+0Ey/ZfyglvskeR2OeXopIGd9zrL6vZn0LESlS4Rj8POucrssvWrd8OjAdB04t89/1O/w1cDnyilFU=',
    channelSecret: '637a92db1b3c35b03455b1dae7024f29'
};

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/webhook', line.middleware(config), async (req, res) => {
  const event = req.body.events[0];
  if (event.type !== 'message' || event.message.type !== 'text') {
    return null;
  }
  try {
    const response = await chat.sendAndAwaitResponse(event.message.text, true);
    const client = new line.Client(config);
    const message = { type: 'text', text: response };
    await client.replyMessage(event.replyToken, message);
  } catch (err) {
    console.error(err);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port 3000');
});

(async () => {
  await characterAI.authenticateWithToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoib2F1dGgyfGRpc2NvcmR8MjQ0ODI5Mjg2OTAzNzA5Njk2IiwiYXVkIjpbImh0dHBzOi8vYXV0aDAuY2hhcmFjdGVyLmFpLyIsImh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2Nzc5MzQ5NTEsImV4cCI6MTY4MDUyNjk1MSwiYXpwIjoiZHlEM2dFMjgxTXFnSVNHN0Z1SVhZaEwyV0VrbnFaenYiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.vrpLbxfy38V2bpS1e6A35Y3shII_5dkwyzRzydBC7HFDjev_bkWM8f_L6wt2mDwYCEOZkB8QKYYy2AaUsJp-0XugsmFMEaEyN3ZOn4mSH9A_ck3u9HgLkffCuLdn41y01nN2PpGJlONaNOGDoOw0aZhvNGn9EsWBx_jMDU99D-w9twcUnKLHekLsu1FBRCG_2ezIOOU8KkrV8EKnZ8luS--9LbeMmgy-U7XsQpO7OYnWTCO3OY8MILpqRVc7oKhe_jFYH1Hsv4ueDfDIHAeeMyT-f9G0NEHrw55LY4zgW81FgQ5ih3pbcF5OXmgLo0nDM5aSspnJ5mQXkIhYvNAElg');
  const chat = await characterAI.createOrContinueChat('Ce2mdN0e7xozlZ8dKl75rCOoRJTWE2FI5Ha7gN7QEgE');
})();
