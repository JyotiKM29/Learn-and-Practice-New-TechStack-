var id = 9;
var company = 'Uber';
var isBuild = true;
var x = 'hello';
x = 5;
var ids = [1, 2, 3, 5, 7];
var arr = [1, true, 'jyoti'];
//Tuple 
// you have to specificy exactly type
// let person: [number , string , boolean] = [1, 'Jyoti' , 2]  //ERRRRRRRRROR
var person = [1, 'Jyoti', true];
// Tuple Array
var student;
student = [
    [1, 'jyoti'],
    [2, 'ujala'],
    [3, 'ronak'],
    [4, 'suraj'],
];
// union
// one or more type of variable
var pid;
pid = '33';
pid = 33;
var user1 = {
    id: 1916711,
    name: 'Jyoti KM',
    age: 23
};
// user1.id = 99;              ///////ERROR because it is read only 
//Class
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.register = function () {
        return "".concat(this.name, " has been Register \uD83E\uDD73");
    };
    return Student;
}());
var jyoti = new Student(1, 'Jyoti Kumari');
console.log(jyoti.register());
