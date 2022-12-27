function newCalculator() {
	let memory: string | null = null;
	let current = "0";
	let operator: "+" | "-" | "*" | "/" | null = null;
	// flips to true after operator
	// ready to start back from zero
	let isWaiting = false;
	// flips to true after equals
	// ready to reset the state
	let isDone = false;

	function concat(num: string) {
		// for numbers

		// after operator and equals
		check();
		// after number
		if (current === "0") {
			current = num;
		} else {
			current += num;
		}

		return current;
	}

	function point() {
		// after operator and equals
		check();
		// after number
		if (!/\./.test(current)) {
			current += ".";
		}
		return current;
	}

	function backspace() {
		// after operator and equals
		check();
		// after number
		if (current.length > 1) {
			current = current.slice(0, -1);
		} else {
			current = "0";
		}
		return current;
	}

	function check() {
		// runs after numbers, points, and backspace
		// checks if an operator or equals were entered before

		// if after operator
		if (isWaiting) {
			memory = current;
			current = "0";
			isWaiting = false;
		}
		// if after equals
		if (isDone) {
			reset();
		}
	}

	function reset() {
		memory = null;
		current = "0";
		operator = null;
		isWaiting = false;
		isDone = false;
		return current;
	}

	function operate(sign: typeof operator) {
		// after equals
		// cancels readiness for reset and treats result as entry
		if (isDone) {
			isDone = false;
			memory = null;
		}

		execute();
		operator = sign;
		isWaiting = true;

		return current;
	}

	function execute() {
		if (memory && operator) {
			const numMemory = memory ? parseFloat(memory) : undefined;
			const numCurrent = parseFloat(current);
			if (operator) {
				let result = 0;
				if (operator === "+") {
					result = (numMemory ?? 0) + numCurrent;
				} else if (operator === "-") {
					result = (numMemory ?? 0) - numCurrent;
				} else if (operator === "*") {
					result = (numMemory ?? 1) * numCurrent;
				} else if (operator === "/") {
					result = (numMemory ?? 1) / numCurrent;
				}
				current = result.toString();
			}
			memory = null;
			operator = null;
		}
	}

	function equals() {
		if (isWaiting) isWaiting = false;
		execute();
		isDone = true;
		// after operator without memory
		operator = null;

		return current;
	}

	return { concat, point, reset, backspace, operate, equals };
}

const calculator = newCalculator();

export default calculator;

export type Calculator = typeof calculator;
