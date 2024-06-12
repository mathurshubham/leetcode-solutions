// Leetcode 5 - Given a string s, return the longest palindromic substring in s.

//Link: https://leetcode.com/problems/longest-palindromic-substring/description/

class Solution{
    public String longestPalindrome(String s){
        int len = s.length();
        String ans = "";
        int maxLen = 0;

        //generating longest odd length pallindromic string
        for(int mid = 0; mid < len; mid ++){
            int i = mid - 1;
            int j = mid + 1;
            int curLen = 1;
            while (i >= 0 && j < len && s.charAt(i) == s.charAt(j)){
                i--;
                j++;
                curLen += 2;
            }

            if(curLen > maxLen){
                ans = s.substring(i + 1, j);
                maxLen = curLen;
            }
        }

        //generating longest even length substring for each (i,j) where ij are adjacent

        for(int mid = 0; mid < len - 1; mid ++){
            int i = mid;
            int j = mid + 1;
            int curLen = 0;

            while(i >= 0 && j < len && s.charAt(i) == s.charAt(j)){
                i --;
                j ++;
                curLen += 2;
            }
            if(curLen > maxLen){
                ans = s.substring(i + 1, j);
                maxLen = curLen;
            }
        }
        return ans;
    }
}



/* 
//brute force method

class Solution {

    public boolean isPallindrome(String s){
        int i = 0;
        int j = s.length() - 1;
        
        while( i<= j){
            if(s.charAt(i) != s.charAt(j)){
                return false;
            }
            i ++;
            j --;
        }
        return true;
    }

    public String longestPalindrome(String s) {
        // generate all substrings 
        // for each substring check whether it's a pallindrome
        // if its a pallindrome, update ans

        int len = s.length();
        String longestPallindromeStr = "";

        for(int i = 0; i < len; i ++)
        {
            String substr = "";
            for (int j = i; j < len; j++)
            {
                substr += (s.charAt(j) + "");
                if(isPallindrome(substr) && substr.length() > longestPallindromeStr.length())
                {
                    longestPallindromeStr = substr;
                }
            }
        }    
        return longestPallindromeStr;    
    }
}

*/