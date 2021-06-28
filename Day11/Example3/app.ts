enum Roles1 {Representative = 'Class_Representative', Member = 'ClassMember'}

let student: {
    name: string,
    age: number,
    rollno: number,
    subjects: string[],
    role: [number, string]
} = {
    name: "J K",
    age: 21,
    rollno: 17112323,
    subjects: ["physics", "chemistry", "maths"],
    role: [1, Roles1.Representative]
}

enum Roles2 {ADMIN = "ADMIN", Read_Only = "READONLY"};

let teacher: {
    name: string,
    age: number,
    projects: string[],
    Role: string
} = {
    name: "Shree Kant Tiwari",
    age: 42,
    projects: ["p1", "p2", "p3"],
    Role: Roles2.Read_Only
}

console.log(student);
console.log(teacher);