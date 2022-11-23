console.log('module');

async function foo() {
	await Promise.resolve();
}

foo().then(console.log);
