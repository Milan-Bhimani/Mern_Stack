// let num1 = 15;
// let num2 = new  Number(56)
// console.log(num2);
// console.log(typeof(num2))

// let num = 12.323252
// // console.log(num.toFixed(3))
// // console.log(num.toExponential(3))
// // console.log(num.toPrecision(3))

// let text = num.toString();3
// console.log(text);

// console.log(text.split(5))
// console.log(text.trim(3))
// console.log(text.substring(3))

// console.log(0==null);
// console.log(0>=null);
// console.log(0<=null);
// console.log(0===null);
// console.log(0>null);
// console.log(0<null);

// let a = 10
// let b = "10"
// console.log(a===b)
// console.log(a==b)
// console.log(a + b)
// console.log(b+ a)
// console.log(1 + + "2" + "2");
// console.log("a" - "b" + "2");
// console.log("a" - "b" + 2);


// let day = "Sunday";

// switch (day) {
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log(`${day} is a weekday.`);
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log(`${day} is a weekend.`);
//     break;
//   default:
//     console.log("Invalid day. Please enter a valid day name.");
// }


// let addtion= function(...num){
//   let sum = 0;
//   for (let n of num) {
//       sum += n;
//   }
//   return sum;
// }

// console.log(addtion(145,2345,232,23,231312,423));


// way 1
let arr = [1,2, [3,4,5,[6,[7]]]];

let new_arr = arr.flat(Infinity);

console.log("output for way 1:",new_arr);

//way 2

function flattenArray(array) {
  let result = [];
  for (let item of array) {
      if (Array.isArray(item)) {
          result = result.concat(flattenArray(item));
      } else {
          result.push(item);
      }
  }
  return result;
}

console.log("output for way 2:",flattenArray(arr));