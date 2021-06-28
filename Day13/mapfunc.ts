let teacher = new Map();

teacher.set('name', 'J K');
teacher.set('age', '42');
teacher.set('id', 23456);
teacher.set('projects', ['p1', 'p2', 'p3']);

console.log("name = ", teacher.get("name"));
console.log("age = ", teacher.get("age"));
console.log("size = ", teacher.size);
console.log("delete id", teacher.delete("id"));
console.log("id is present ? ", teacher.has("id"));