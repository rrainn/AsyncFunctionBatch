# async-batch

This package lets you run a batch of async tasks in parallel, while limiting the number of concurrent tasks being run.

## Installation

```bash
npm i --save async-batch
```

## Usage

```js
const {Job} = require("async-batch");

const array = ["hello", "world", "!"];
const concurrency = 10; // max number of tasks to run in parallel
const job = new Job(array, concurrency, async (item) => {
	// Run async task, `item` will be the specific array item.
});

await job.run(); // Will resolve after all tasks are done.
```

## License

This package is licensed under the MIT license.
