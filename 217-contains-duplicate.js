//Given an integer array, return true if any value appears at least twice in the array, and return false if every element is distinct.
const containsDuplicate = (nums) => {
  // The parentheses can only be omitted if the function has a single simple parameter. If it has multiple parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the parameter list are required.
  // const elNotUniq = nums.filter((item, index) => nums.indexOf(item) !== index);

  const elNotUniq = nums.filter((num, index) => {
    return nums.indexOf(num) !== index;
  });
  // The curly braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required — and so is the return keyword. Arrow functions cannot guess what or when you want to return.
  if (elNotUniq.length !== 0) {
    return true;
  } else {
    return false;
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
  
  // if (elNotUniq !== []) {
  //   return true;
  // } else {
  //   return false;
  // }
};

console.log(containsDuplicate([1, 2, 3, 4]));
