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


// Second solution

/* java

int p = 0;
int q = 0;
while(p<m && q<n){
    if(nums1[p]<=nums2[q]){
        nums3.add(nums1[p])
        p++;
    }
    else{
        nums3.add(nums2[q]);
        q++;
    }
}
while(p<m){
    nums3.add(nums1[p ++]);
}

while(q<n){
    nums3.add(nums2[q ++]);
}


Actual code


class Solution{
    public void merge(int[] nums1, int m, int[] nums2, int n){
        int p = m-1;
        int q = n-1;
        int r = nums1.length - 1;

        while(r >= 0){
            if(q<0){
                break;
            }
            if(p>=0 && nums1[p] >= nums2[q]){
                nums1[r--] = nums1[p--];
            }
            else{
                nums1[r--] = nums2[q--];
            }
        }
    }
}

*/