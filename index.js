import { openai } from "./config.js";

// Assistant variables
const asstID = "asst_dBIqrEYjifXIFVsOtNhB2cYN";
const threadID = "thread_GfIAhRtGKCoNx1EppGAQmshT";

// Upload a file with an "assistants" purpose
// const file = await openai.files.create({
//   file: await fetch("movies.txt"),
//   purpose: "assistants",
// });
// console.log(file)

// Create Movie Expert Assistant
// async function createAssistant() {
// 	const myAssistant = await openai.beta.assistants.create({
// 		instructions:
// 			"You are great at recommending movies. When asked a question, use the information in the provided file to form a friendly response. If you cannot find the answer in the file, do your best to infer what the answer should be.",
// 		name: "Movie Expert",
// 		tools: [{ type: "retrieval" }],
// 		model: "gpt-4-1106-preview",
// 		file_ids: ["file-vsLQ9OUZJ159LPMschrH0LB9"],
// 	});

// 	console.log(myAssistant);
// }
// createAssistant();

// Create a thread
// const thread = await openai.beta.threads.create();
// console.log(thread);

// Create a message for the thread
async function createMessage() {
	const threadMessages = await openai.beta.threads.messages.create(threadID, {
		role: "user",
		content: "Can you recommend a comedy?",
	});
	console.log(threadMessages);
}
createMessage();
