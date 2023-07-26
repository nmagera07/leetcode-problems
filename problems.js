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

