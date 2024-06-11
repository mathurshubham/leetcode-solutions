//Segregate 0s and 1s - Geeks4Geeks

//Given an array of length n consisting of only 0's and 1's in random order. Modify the array in-place to segregate 0s on the left side and 1s on the right side of the array.
//link: https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

/** 
 * @param {number[]} arr
 * @param {number} n
*/

//

class Solution {

    segregate0and1(arr,n){
        
        let count = 0;
        let newArray= []
        for(let i=0; i<n ; i++){
            if(arr[i]==0){
                newArray.push(arr[i])
                count= count+1
            }
        }
        let remainingCount = n-count;
        for(let j = 0; j < remainingCount ; j++){
            newArray.push(1);
        }
        for(let k = 0; k < n ; k++){
            arr[k] = newArray[k];
        }
        return arr
    }
}


/* Java solution using 2 pointers

class Solution{
    void segregate0and1(int[] arr, int n){
        //
        int left = 0;
        int right = n-1;
        while(left<right){
            while(arr[left]==0 && left < right){
                left++;
            }
            while(arr[right] == 1 && left < right){
                right--;
            }
            if(left < right){
                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left ++;
                right --;
            }
        }
    }
}