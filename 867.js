//867. Transpose Matrix: Given a 2D integer array matrix, return the transpose of matrix.
//link: https://leetcode.com/problems/transpose-matrix/description/


/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix[0].length ; i++){
        newMatrix[i] = [];
        for (let j=0; j < matrix.length ; j++){
            newMatrix[i][j] = matrix[j][i];
        }
    }
    return newMatrix
};

/*
//java

class Solution {
    public int[][] transpose(int[][] matrix){
        int r = matrix.length;
        int c = matrix[0].length;
        int output[][] = new int[r][c] //initializing matrix in java
    
    
        for(int i = 0; i < r; i++){
            for(int j = 0; i < c; j++){
                output[j][i] = matrix[i][j];
            }
        }
        
        return output;
    }
}

*/