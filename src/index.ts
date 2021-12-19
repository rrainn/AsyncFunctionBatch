export class Job<T> {
	items: T[];
	concurrent: number;
	func: (item: T) => Promise<void>;

	constructor(items: T[], concurrent: number, func: (item: T) => Promise<void>) {
		this.items = items;
		this.concurrent = concurrent;
		this.func = func;
	}

	async run(): Promise<void> {
		const runner = async () => {
			let running = true;
			do {
				const item = this.items.shift();
				if (item === undefined) {
					running = false;
					break;
				}
				await this.func(item);
			} while (running)
		};
		await Promise.all(Array(this.concurrent).fill(0).map(runner));
	}
}
