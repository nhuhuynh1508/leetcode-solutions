### Problem 2125
[Next Greater Numerically Balanced Number](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/)

Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.

There is one laser beam between any two security devices if both conditions are met:

- The two devices are located on two different rows: r1 and r2, where r1 < r2.
- For each row i where r1 < i < r2, there are no security devices in the ith row.
Laser beams are independent, i.e., one beam does not interfere nor join with another.

Return the total number of laser beams in the bank.

**Difficulty**: Medium
**Time Complexity**: O(n*m) where n is the number of rows in the bank, and m is the number of columns.

#### Approach
1. Count the number of "1" in each row, "1" indicates for devices 
2. Calculate the number of laser beams by multiplying the number of devices on each rows that matches the condition.
3. Iterate through all rows to find the result.

#### Explanation
1. Converts the bank's array into 2D matrix and find the number of devices on each row
``for (let row of bank)`` 
``let devices = row.split('1').length - 1;``
Ex: arr bank = ["011001","000000","010100","001000"]
```js
bank = [
    "0", "1", "1", "0", "0", "1", 
    "0", "0", "0", "0", "0", "0",
    "0", "1", "0", "1", "0", "0",
    "0", "0", "1", "0", "0", "0",
]
```
2. Calculate the laser beams
``totalBeams += previousDevices * devices;``
// store the number of devices in current row 
``previousDevices = devices;``
```js
const bank = [
  "011001",  // row 0 → 3 devices
  "000000",  // row 1 → 0 devices
  "010100",  // row 2 → 2 devices
  "001000"   // row 3 → 1 device
];
```
Visualize exactly how ``prevDevices = devices`` works:
Step 1 — Row 0
```js
devices = 3
prevDevices = 0 initially
total += prevDevices * devices → 0 * 3 = 0
Then → prevDevices = 3
```
Step 2 — Row 1
```js
devices = 0
skip, because no devices
prevDevices stays 3
```
Step 3 — Row 2
```js
devices = 2
total += prevDevices * devices → 3 * 2 = 6
add to total: total = 6
prevDevices = 2 
```
Step 4 — Row 3
```js
devices = 1
total += prevDevices * devices → 2 * 1 = 2
total = 6 + 2 = 8
prevDevices = 1
```
