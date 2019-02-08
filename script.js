// https://edabit.com/challenge/nQtiQCoqM6rxWpZmC
function lessThanOrEqualToZero(num) {
    return num <= 0;
}


// https://edabit.com/challenge/kuzB5CMXiKDEYKXAP
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    }
    return "odd";
}


// https://edabit.com/challenge/FydPqxRiosP7EBiQh
function countWords(str) {
    return str.split(" ").length;
}


// https://edabit.com/challenge/7JBTN4TbaxJQMdX9W
function getLastItem(arr) {
    return arr[arr.length -1];
}


// https://edabit.com/challenge/g66EJsbdnSDayyEcK
function findSmallestNum(arr) {
    var num = arr[0];
    for (let i = 1; i < arr.length; i++ ) {
        if (num > arr[i]) {
            num = arr[i];
        }
    }
    return num;
}


// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL
function getAbsSum(arr) {
    var score = 0;
    for (let i = 0; i < arr.length; i++) {
        score += Math.abs(arr[i]);
    }
    return score;
}


