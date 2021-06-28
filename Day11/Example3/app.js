var Roles1;
(function (Roles1) {
    Roles1["Representative"] = "Class_Representative";
    Roles1["Member"] = "ClassMember";
})(Roles1 || (Roles1 = {}));
var student = {
    name: "J K",
    age: 21,
    rollno: 17112323,
    subjects: ["physics", "chemistry", "maths"],
    role: [1, Roles1.Representative]
};
var Roles2;
(function (Roles2) {
    Roles2["ADMIN"] = "ADMIN";
    Roles2["Read_Only"] = "READONLY";
})(Roles2 || (Roles2 = {}));
;
var teacher = {
    name: "Shree Kant Tiwari",
    age: 42,
    projects: ["p1", "p2", "p3"],
    Role: Roles2.Read_Only
};
console.log(student);
console.log(teacher);
