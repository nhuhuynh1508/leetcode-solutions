### Problem 2048
[Next Greater Numerically Balanced Number](https://leetcode.com/problems/next-greater-numerically-balanced-number/description/)

An int x is numerically balanced if for every digit d in the number x, there are exactly d occurrences of that digit in x.
Given an int n, return the smallest numerically balanced number strictly greater than n.

**Difficulty**: Medium
**Time Complexity**: O(1)

#### Explanation
1. **isBalanced()**:
- Converts the number to a string.
Ex: 
num = 1223; 
str = "1223"; -> to loop through each digit

- Creates a **Set** of the string's digits.
(since a **Set** automatically removes duplicates - only check each digit once)
Ex:
str = "122333";
new Set(str) = {"1", "2", "3};

- Count how many times the specific character (char) within a string (str).
`const count = str.split(char).length - 1;`
Ex: 
If str is "Hello World" and char is "o", str.split(char) will result in the array ["Hell", "w", "rld"]
.length will return the number of elements in the array -> 3
By subtracting 1, it will give the exact count of the occurence of the char in the string. -> 3 - 1 = 2

- Then check if the number of occurences of the char equal to its original value.

2. **nextBalancedNumber()**:
This function will find the smallest numerically balanced number strictly greater than n.

- Checks the next number after n (n+1)
- Keep incrementing until isBalanced() is true

Returns the first number that match.