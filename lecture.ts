// interface는 타입스크립트에서만 돌아가고 컴파일되지 않는데 반면
// 클래스는 자바스크립트로 컴파일된다.

// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// };


// class Human {
//     public name: string;
//     public age: number;
//     public gender: string;
//     constructor(name:string, age: number, gender?: string){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// };

// const lynn = new Human("Lynn", 18, "female")

// // ?를 붙이면 파라미터가 옵션이 된다 (gender -> gender?).
// // const sayHi = (name:string, age:number, gender:string) 이렇게 해서 타입 설정

// const sayHi = (person: Human): string => {
//     return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
// };

// console.log(sayHi(lynn))

export {};