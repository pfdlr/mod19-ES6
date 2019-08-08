//task 1
const s1 = "Hello";
const s2 = "World";
console.log(`${s1} ${s2}`); //Hello World

//task2
const multiply = (x, y = 6) => x * y;
console.log(multiply(4)); //24

//task 3
const average = (...args) => {
	let result = 0;
	args.forEach(number => (result += number));
	return result / args.length;
};
console.log(average(6, 2, 3, 4, 5, 6)); //4.333333333333333

//task 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [...args] = grades;
(...args) => {
	let result = 0;
	args.forEach(number => (result += number));
	return result / args.length;
};
console.log(average(...args)); //3.2222222222222223

//task 5
const tbl = [1, 4, "Iwona", false, "Nowak"];
const names = ([, , firstname, , lastname] = tbl);
console.log(`${firstname} ${lastname}`); // Iwona Nowak