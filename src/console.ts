import readline = require('readline');

export const print = (str: string): void => {
	console.log(str);
	console.log();
}

export const clear = (addTopBorder: boolean): void => {
	console.clear();
	if (addTopBorder) {
		print('------------------------------------');
	}
}

// NOTE: this "createInterface" function is built into node and is referring to the console interface - NOT a TypeScript interface!
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// // this function allows us to prompt the user with a question, and call a callback function with whatever string has been input
export const askQuestion = async (question: string, callback: (arg: string) => void) => {
	await reader.question(`${question}`, await callback);
}

export const prompt = (question: string): string => {
	reader.setPrompt(`${question}`);
	reader.prompt();
	return reader.getPrompt();
}