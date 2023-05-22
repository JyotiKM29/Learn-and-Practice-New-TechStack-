let id = 9

let company : string = 'Uber'
let isBuild : boolean = true
let x: any = 'hello'

x = 5

let ids:number[] = [1,2,3,5,7]
let arr: any[] =[1, true ,'jyoti']

//Tuple 
// you have to specificy exactly type
// let person: [number , string , boolean] = [1, 'Jyoti' , 2]  //ERRRRRRRRROR
let person: [number , string , boolean] = [1, 'Jyoti' , true] 

// Tuple Array
let student :[number , string ][]

student = [
    [1,'jyoti'],
    [2,'ujala'],
    [3,'ronak'],
    [4,'suraj'],
]

// union
// one or more type of variable

let pid: number |string
pid = '33'
pid = 33

//Enum
// set of name const either numeric or string 


//Interface 
interface UserInterface {
    readonly id : number 
    name : string 
    age? : number 
}

const user1: UserInterface = {
  id :1916711 ,
  name :'Jyoti KM' ,
  age :23

}

// user1.id = 99;              ///////ERROR because it is read only 

//Class
class Student {
    id : number 
    name : string

    constructor(id :number , name : string){
        this.id = id 
        this.name = name 
    }

    register(){
        return `${this.name} has been Register 🥳`;
    }
}

const jyoti = new Student(1 , 'Jyoti Kumari')

console.log(jyoti.register());