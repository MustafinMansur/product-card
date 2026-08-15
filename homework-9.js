// задание:2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const newNumbers = numbers.filter(number => number >=5 );
console.log(newNumbers);

// задание:3

const names = [
  "Almaz",
  "Nasuh",
  "David",
  "Dinar",
  "Said", 
  "Usman",
  "Mansur",
  "Husein",
  "Ruslan",
  "Farid"
];
console.log(names);

const name = names.includes("Mansur");
console.log(name);


// задание:4

function reverseArray(array) {
  return [...array].reverse();
}

const reverseNumbers = reverseArray(numbers);
console.log(reverseNumbers);

const reverseNames = reverseArray(names);
console.log(reverseNames);

//задание:5

import { comments } from "./comments.js";

//задание:7

const commentsWithCom = comments.filter(comment => comment.email.includes(".com"))
console.log(commentsWithCom);

//задание:8

const commentsWithUpdatedPostId = comments.map(comment => {
  return comment.id <= 5
  ? { ...comment, postId: 2 }
  : { ...comment, postId: 1 }
});
console.log(commentsWithUpdatedPostId);

//задание:9

const idAndName = comments.map(comment => ({ id: comment.id, name: comment.name}));
console.log(idAndName);

//задание:10

const commentsWithIsInvalid = comments.map(comment => ({...comment, isInvalid: comment.body.length > 180}));
console.log(commentsWithIsInvalid);

//задание:11

const emails = commentsWithIsInvalid.reduce((acc,comment) => {
  acc.push(comment.email);
  return acc;
},[]);
console.log(emails);

const emailsWithMap = commentsWithIsInvalid.map(comment => comment.email);
console.log(emailsWithMap);

//задание:12

console.log(emailsWithMap.toString());

console.log(emailsWithMap.join());
console.log(emailsWithMap.join("/"));
console.log(emailsWithMap.join(";"));
console.log(emailsWithMap.join("_"));