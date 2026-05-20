interface User { id: number; name: string; }
function greet(name: string): string { return `Hello, ${name}!`; }
const user: User = { id: 1, name: "John" };
console.log(greet(user.name));
