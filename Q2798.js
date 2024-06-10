
/*
There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

The company requires each employee to work for at least target hours.

You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

Return the integer denoting the number of employees who worked at least target hours.

Link: https://leetcode.com/problems/number-of-employees-who-met-the-target/
*/


// Solution
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
 
var numberOfEmployeesWhoMetTarget = (hours, target)=> {
    let count = 0;
    for(let i=0 ; i <= hours.length; i++){
        if(hours[i]>=target){
            count = count + 1;
        }
    }
    return count;
};



/* Java Solution

class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target){
        int count = 0
        for(int i = 0 ; hours.length; i++){
            if(hours[i] >= target)
                count++;
        }

        for(int hour: hours)// for each
            if(hour>=target)
                count++;
        
        return count;
    
    }
}
*/