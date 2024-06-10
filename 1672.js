/*
1672. Richest Customer Wealth


You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/


/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let count = [];
    for (let i = 0; i < accounts.length ; i++){
        let sum = 0;
        for (let j = 0; j< accounts[i].length ; j++){
             sum = sum + accounts[i][j];
        }
        count.push(sum);
    }

    count.sort((a, b) => b - a); // Sort in descending order
    nth=count.length-1
    return count[0]
};

/*

class Solution{
    public int maximumWealth(int[][] accounts){
        int maximumWealth = 0
        // int maximumWealth = Integer.MIN_Value; // gives the minimum / least number that is possible. helpful in integers
        for(int [] account : accounts)
        {
            int sum = 0;
            for(int[] wealth : account)
                sum += wealth;
            
            maximumWealth = Math.max(maximumWealth, sum);
        }
        return maximumWealth;
    }
}

*/