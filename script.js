// https://edabit.com/challenge/nQtiQCoqM6rxWpZmC
function lessThanOrEqualToZero(num) {
    return num <= 0;
}


// https://edabit.com/challenge/kuzB5CMXiKDEYKXAP
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}


// https://edabit.com/challenge/FydPqxRiosP7EBiQh
function countWords(str) {
    return str.split(" ").length;
}


// https://edabit.com/challenge/7JBTN4TbaxJQMdX9W
function getLastItem(arr) {
    return arr[arr.length - 1];
}


// https://edabit.com/challenge/g66EJsbdnSDayyEcK
function findSmallestNum(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}


// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL
function getAbsSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.abs(arr[i]);
    }
    return sum;
}


