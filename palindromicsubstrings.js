//Objective is to see how many palindromic substrings there are in a string

let s = 'abc'


//O(n) solution that expands from the center of each index.

let ans = 0
//The middle of the palindrome can be at one of two (2n - 1) positions:
//at the letter or between two letters
for (let i = 0; i < (2*s.length) - 1; i++) {
    let left = Math.floor(i / 2)
    let right = left + i % 2

    //Expand at the center
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        ans++
        left--
        right++
    }
}

return ans