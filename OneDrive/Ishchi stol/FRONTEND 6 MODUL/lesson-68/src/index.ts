// import * as yup from "yup";
// import "./login.ts";
// import "./main.css";
// import "./car.ts";
// import "./three.ts";

// import { isBindingElement } from "typescript";

// import faker from "@faker-js/faker";
// import "./.ts";
// import "./login.ts";

// console.log('Obeject.prototype__proto__');


/**
 * HEAP MEMORY
 * 0001 = { name: "Harry Potter", price: 200 }
 * 0002 = { name: "Harry Potter", price: 200 }
 */
// const book = {
// 	name: 'Sherlock Holmes',
// 	price: 200,
// }; // SM_book_001 = HM_0001

// const book2 = Object.assign({}, book); // {...book} // SM_book2_002 = HM_0001

// book2.name = 'Harry Potter';
// // HM_0002.name = "Harry Potter"

// console.log(book); // HM_0001 -> ✅ Sherlock Holmes ✅ Sherlock Holmes
// console.log(book2); // HM_0001 -> ✅ Harry Potter ✅ Harry Potter

/*
 * HEAP MEMORY
 * 0001 = { name: "Sherlock Holmes", price: 200, detail: HM_0002 }
 * 0002 = { page: 20, topics: HM_0003 }
 * 0003 = ['red team', 'blue eyes']
 * 0004 = { name: "Sherlock Holmes", price: 200, detail: HM_0005 }
 * 0005 = { page: 20, topics: HM_0003 }
 * 0006 = ['first team', 'blue eyes']
 */
// const book = {
// 	name: 'Sherlock Holmes',
// 	price: 200,
// 	detail: {
// 		page: 20,
// 		topics: ['red team', 'blue eyes'],
// 	},
// }; // SM_book_001 = HM_0001

// const book2 = window.structuredClone(book);

// book2.detail.topics[0] = 'First topic';

// console.log('topics of book = ', book.detail.topics);
// console.log('topics of book2 = ', book2.detail.topics);


// function assign(target: object, ref: object):any {
// 	return {...ref};
// }
// const fruit = {
// 	name: 'Apple',
// 	price: 100,
// 	color: 'Deep red',
// };
// const fruit2 = assign({}, fruit);
// fruit2.name = 'Banana';


// console.log(fruit.color);
//  console.log(fruit2.name);


// const module = {
// const sam
// };



// class Box {
//  name: string;
//  age:number
// constructor(name: string, age: number) {
// this.name = name;
// this.age = age;
//  }

//  jump(){
//   console.log(`${this.name} is runnig...`);
//  }
//  run() {
//   console.log(`${this.name} is running...`);
//  }
// }

// const san =  new Box ("BX-1", 30);
// console.log(san);

// const boxes: Box[] = [];

// for (let i = 1; i <= 10; i++){
//  const sam = new Box(`Box-${i}`, i * 10);
//  boxes.push(sam);
// }


//1 misol
// class Box {
//  name =  "Boxvoy";

//  jump = ()  => {
//   console.log(`${this.name} is jumping...`);
//  }

// run() {
//  console.log(`${this.name} is running`);
// }
// }
// const boxes:Box[] = [];

// for(let i  = 1 ; i <= 10; i++){
// const sam = new Box();
// boxes.push(sam);
// }

// console.log(boxes);



// class  Box {
//  name: string;
//  age: number;

// constructor(name: string, age: number) {
// this.name = name;
// this.age = age;

// }

// jump() {
//  console.log(`${this.name} is jumping`);
// }
// run() {
//  console.log(`${this.name} is jumping`);
// }
// }
// const boxes: Box[] = [];

// for(let i = 1; i <= 10; i++){
//  const sam = new Box(`Box-${i}`, i * 10);
//  boxes.push(sam);
// }

// console.log(boxes);

//2-misol exstintent olish

// class Person {
//  constructor(public name: string, public birthDate:string ){}
// eat() {
// console.log(`${this.name} is eating...💻`);
// }
// run() {
//  console.log(`${this.name} is running... 👩‍🏫`);
// }
// }

// class Teacher extends Person{
// teach(){
//  console.log(`${this.name} is teaching...👩‍🏫`);
// }

// }
// class Doctor extends Person{
//  scare() {
//   console.log(`${this.name} is scaring...👩‍⚕️`);
//  }
// }
// class Student extends Person{
// learn() {
//  console.log(`${this.name} is learning...😲`);
// }
// }

// const teacher = new Teacher('Kent','23.21.2015');
// const doctor = new Doctor('House','09.11.1967');
// const student = new Student ('mark','12.21.2003');

// console.log(teacher);
// console.log(doctor);
// console.log(student);

















