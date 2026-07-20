/**
 * Minimal OpenAI SDK example for UnifyLLM.
 *
 * Install: npm install openai
 * Run:     node examples/node_chat.mjs
 */

import OpenAI from "openai";

if (!process.env.UNIFYLLM_API_KEY) {
  throw new Error("Set the UNIFYLLM_API_KEY environment variable first.");
}

const client = new OpenAI({
  apiKey: process.env.UNIFYLLM_API_KEY,
  baseURL: process.env.UNIFYLLM_BASE_URL ?? "https://api.unifyllm.top/v1",
});

const response = await client.chat.completions.create({
  model: process.env.UNIFYLLM_MODEL ?? "gpt-5.6-sol",
  messages: [{ role: "user", content: "Reply with: Hello, UnifyLLM!" }],
});

console.log(response.choices[0].message.content);
