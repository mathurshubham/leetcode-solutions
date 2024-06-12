//Leetcode 26 - Remove Duplicates from Sorted Array
//Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/*
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
 */



class Solution {
    public int removeDuplicates(int[] nums) {
        int traversalPtr = 1;
        int k = 1;
        int prev = nums[0];
        for(; traversalPtr < nums.length; traversalPtr++)
        {
            int currentElement = nums[traversalPtr];
            if(prev != currentElement){
                nums[k] = currentElement;
                k++;
                prev = currentElement;
            }

        }
        return k;
    }
}


/*
 * incorrect javascript solution
 * 
 * /**
 * @param {number[]} nums
 * @return {number}

 var removeDuplicates = function(nums) {
    for(let i=1; i < nums.length ; i++){
        if(nums[i] == nums[i-1]){
            if(nums[i-1]!="_"){
                nums.splice(i,1);
                nums.push("_")
            }
            if(nums[i] == "_"){
                break;
            }
        }
    }
    let k = 0;
    for(let j=0; j < nums.length ; j++){
        if(nums[j] == "_"){
            break;
        }
        k++
    }
    
    return nums, k;
};
 */