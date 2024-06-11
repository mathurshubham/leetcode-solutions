//Question 88  - Merge Sorted Array

/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
/*


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    for(let j=0; j<(n); j++){
         nums1.splice(j+m,1,nums2[j]);
    }
     nums1.sort((a,b)=>a-b)
 };



/* Java

class Solution{
    public void merge(int[] nums1, int m, int[] nums2, int n){
        int [] combinedArray = new int[n+m];
        for(int i = 0; i < m; i++){
            combinedArray[i] = nums1[i];
        }
        for(int j = 0; j < n; j++){
            combinedArray[m+j] = nums2[j];
        }
        Arrays.sort(combinedArray);
        for(int i=0; i < combinedArray.length; i++){
            nums1[i] = combinedArray[i];
        }
    }
}

*/