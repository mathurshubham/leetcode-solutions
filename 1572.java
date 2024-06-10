/*
1572. Matrix Diagonal Sum

link: https://leetcode.com/problems/matrix-diagonal-sum/description/


*/

class Solution {
    public int diagonalSum(int[][] mat){
        int r = mat.length;
        int c = mat.length;
        
        int sum = 0;
        for(int rowNo = 0; rowNo < r; rowNo ++){
            int primaryDiagonal = mat[rowNo][rowNo];
            int secondaryDiagonal = mat[rowNo][c - 1 - rowNo]; //logic on how the secondaryDiagonal moves
            sum = sum + primaryDiagonal;
            
            if(rowNo != (c - 1 - rowNo)){
                sum += secondaryDiagonal;
            }
            
        }
        return sum;
    }
}