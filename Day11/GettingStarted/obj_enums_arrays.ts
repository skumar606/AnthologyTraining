// const person: {
//     name: string;
//     age: number;
// } =

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } =


enum Roles { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
const person =
{
    name: "Jane",
    age: 30,
    hobbies: ["Reading", "Cooking"],
    role: Roles.ADMIN
}

//person.role.push("admin");
//person.role[1] = 2;
//person.role = [0, "admin"];


console.log(person.name);
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}