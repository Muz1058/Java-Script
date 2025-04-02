//Singelton object

// const tinderUser = new Object()   

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//------------------Accessing Nested Ojects------------------

// console.log(regularUser.fullname.userfullname.firstname);



// //-----------------Assign Method for Objects------------------
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}
// /*
// (method) ObjectConstructor.assign<{}, {
//     1: string;
//     2: string;
// }, {
//     3: string;
//     4: string;
// }, {
//     5: string;
//     6: string;
// }>(target: {}, source1: {
//     1: string;
//     2: string;
// }, source2: {
//     3: string;
//     4: string;
// }, source3: {
//     5: string;
//     6: string;
// }): {
//     1: string;
//     2: string;
// } & {
//     3: string;
//     4: string;
// } & {
//     5: string;
//     6: string;
// } (+3 overloads)
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// @param target — The target object to copy to.

// @param source1 — The first source object from which to copy properties.

// @param source2 — The second source object from which to copy properties.

// @param source3 — The third source object from which to copy properties.
// */
//  const obj3 = { obj1, obj2 }
//  const obj3 = Object.assign({}, obj1, obj2, obj4)


// ----------------------Spreading Objects-------------------------

//const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//-------------------------------Objects inside of Arrays------------------

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //used to loop obj
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //check a key exist in object or not



