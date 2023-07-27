// length of last word

var lengthOfLastWord = function(s) {
    let arr = s.split(' ')
    let i = 0

    while(i < arr.length) {
        if(arr[i] === '') {
            arr.splice(i, 1)
        } else {
            i++
        }
    }

    return arr.pop().length
};


// remove element

var removeElement = function(nums, val) {
    let i = 0
    while (i < nums.length) {
        if(nums[i] === val) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    console.log(nums)
    return nums.length

};


// search insert position

var searchInsert = function(nums, target) {
    let targetIndex = nums.indexOf(target)
    let arr = nums

    if(nums.includes(target)) {
        return targetIndex
    } else {
        arr.push(target)
        arr.sort((a,b) => a - b)

        return arr.indexOf(target)
    }

    console.log(arr)
};


// plus one

var plusOne = function(digits) {
    let num = BigInt(digits.join('')) + BigInt(1)
    let arr = num.toString().split('')

    return arr.map(num => parseInt(num))
};


// add binary

var addBinary = function(a, b) {
   let num1 = BigInt('0b' + a)
   let num2 = BigInt('0b' + b)
   let sum = num1 + num2

   return sum.toString(2)  
};


// longest common prefix

var longestCommonPrefix = function(strs) {
    // two loops, one to check the letters in the string, and the other to check each string
    // if common letters are found, add them to empty string
    // if no common letters are found, return empty string

    if(!strs.length) return ''

    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0,i)
            }
        }
    }

    return strs[0]
};


