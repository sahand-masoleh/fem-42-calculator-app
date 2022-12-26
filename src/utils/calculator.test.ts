import calculator from "./calculator";

describe("number", () => {
	afterEach(() => {
		calculator.reset();
	});

	test("after number w/o memory", () => {
		const result = calculator.concat("123");
		expect(result).toEqual("123");
	});

	test("after number w/ memory", () => {
		calculator.concat("123");
		calculator.operate("+");
		const result = calculator.concat("456");
		expect(result).toEqual("456");
	});

	test("after operator w/o memory", () => {
		calculator.operate("+");
		const result = calculator.concat("123");
		expect(result).toEqual("123");
	});

	test("after operator w/ memory", () => {
		calculator.concat("123");
		calculator.operate("+");
		const result = calculator.concat("456");
		expect(result).toEqual("456");
	});

	test("after equals", () => {
		calculator.equals();
		const result = calculator.concat("123");
		expect(result).toEqual("123");
	});
});

describe("operator", () => {
	afterEach(() => {
		calculator.reset();
	});

	test("after number w/o memory", () => {
		calculator.concat("123");
		const result = calculator.operate("+");
		expect(result).toEqual("123");
	});

	test("after number w/ memory", () => {
		calculator.concat("123");
		calculator.operate("+");
		calculator.concat("456");
		const result = calculator.operate("+");
		expect(result).toEqual("579");
	});

	test("after operator w/o memory", () => {
		calculator.concat("123");
		calculator.operate("+");
		const result = calculator.operate("-");
		expect(result).toEqual("123");
	});

	test("after operator w/ memory", () => {
		calculator.concat("123");
		calculator.operate("+");
		calculator.concat("456");
		calculator.operate("+");
		const result = calculator.operate("-");
		expect(result).toEqual("579");
	});

	test("after equals", () => {
		calculator.concat("123");
		calculator.operate("+");
		calculator.concat("456");
		calculator.equals();
		const result = calculator.operate("+");
		expect(result).toEqual("579");
	});
});

describe("equals", () => {
	afterEach(() => {
		calculator.reset();
	});

	test("after number w/o memory", () => {
		calculator.concat("123");
		const result = calculator.equals();
		expect(result).toEqual("123");
	});

	test("after number w/ memory", () => {
		calculator.concat("123");
		calculator.operate("+");
		calculator.concat("456");
		const result = calculator.equals();
		expect(result).toEqual("579");
	});

	test("after operator w/o memory", () => {
		calculator.concat("123");
		calculator.operate("+");
		const result = calculator.equals();
		expect(result).toEqual("123");
	});

	test("after operator w/ memory", () => {
		calculator.concat("123");
		calculator.operate("+");
		calculator.concat("456");
		calculator.operate("+");
		const result = calculator.equals();
		expect(result).toEqual("579");
	});

	test("after equals", () => {
		calculator.concat("123");
		calculator.equals();
		const result = calculator.equals();
		expect(result).toEqual("123");
	});
});
