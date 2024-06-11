// Ques 977 - Squares of a Sorted Array

//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// link: https://leetcode.com/problems/squares-of-a-sorted-array/description/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        let b;
        b = nums[i]*nums[i];
        arr.push(b);
    }
    arr.sort((a, b) => a - b);
    return arr;
};


// java
/*
class Solution{
    public int[] sortedSquares[int[] nums]{
        int n = nums.length;
        int [] res = new int[n];
        for(int i = 0; i<n ; i++){
            res[i] = nums[i]*nums[i];
        }
        Arrays.sort(res);
        return res;
    }
}
*/