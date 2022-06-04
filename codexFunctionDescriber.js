const { Configuration, OpenAIApi } = require("openai");
const prompt = require("prompt-sync")({ sigint: true });
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function run() {
  return await openai.createCompletion("code-davinci-002", {
    prompt: 
    `${functionCode}
    Here's what the above function is doing:`,
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\"\"\""],
  });
}
console.log("Enter your function code:")
const functionCode = prompt("");
run().then((response) => {
  console.log(response.data.choices[0].text);
}).catch(console.error);
