nums = [2,7,11,15]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  
    for (let i = 0; i < nums.length; i++){

        let rest = target - nums[i]

        if (nums.includes(rest)) {
            let result = [i, nums.indexOf(rest)]
            console.log(result)
            return [nums.indexOf(i), nums.indexOf(rest)]
        }

    }

};

twoSum(nums, 9)
// get the rest of the target - num[i]

// check if the rest is in the array

// if true
    // get the index of the rest
    // return both numbers index
// if false, advance the array

