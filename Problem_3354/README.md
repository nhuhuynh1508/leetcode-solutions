### Problem 3354
[Make Array Elements Equal to Zero](https://leetcode.com/problems/make-array-elements-equal-to-zero/description/)

You are given an integer array nums.

Start by selecting a starting position curr such that nums[curr] == 0, and choose a movement direction of either left or right.

After that, you repeat the following process:

- If curr is out of the range [0, n - 1], this process ends.
- If nums[curr] == 0, move in the current direction by incrementing curr if you are moving right, or decrementing curr if you are moving left.
- Else if nums[curr] > 0:
    + Decrement nums[curr] by 1.
    + Reverse your movement direction (left becomes right and vice versa).
    + Take a step in your new direction.

A selection of the initial position curr and movement direction is considered valid if every element in nums becomes 0 by the end of the process.

Return the number of possible valid selections.

#### Approach
Given ``nums``:
1. Start at an index ``curr`` where ``nums[curr] == 0``.
2. Pick a direction: "left" (-1) or "right" (+1)
3. Then:
- If go outside -> stop
- If ``nums[curr] == 0`` -> keep going same direction
- If ``nums[curr] > 0`` -> decrement by 1, reverse direction and step once in the new direction.
The outcome is all elements in the array to be 0 at the end.