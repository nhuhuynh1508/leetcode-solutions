function simulate(nums, start, dir) {
  const arr = [...nums];
  let curr = start;
  let direction = dir; // 1 for right, -1 for left

  while (curr >= 0 && curr < arr.length) {
    if (arr[curr] === 0) {
      curr += direction; // move same direction
    } else {
      arr[curr] -= 1;    // decrement
      direction *= -1;   // reverse
      curr += direction; // move one step in new direction
    }
  }

  // check if all became 0
  return arr.every(x => x === 0);
}

var countValidSelections = function(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
        if (simulate(nums, i, 1)) total++;   // start going right
        if (simulate(nums, i, -1)) total++;  // start going left
        }
    }
    return total;
};

