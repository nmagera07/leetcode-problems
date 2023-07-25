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

