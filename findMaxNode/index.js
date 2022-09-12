/*
First posible solution in which first you transform the tree into an array and then you sort the array to
have the smallest ones at the start and the biggest ones at the end. This solution is O(n log n)
NOTE: This solution only works for positive numbers
*/

function LESS_PERFORMANT_transformTreeIntoArray(tree) {
  let nodesArray = [];

  if (tree.right) {
    nodesArray = [
      ...nodesArray,
      ...LESS_PERFORMANT_transformTreeIntoArray(tree.right),
    ];
  }
  if (tree.left) {
    nodesArray = [
      ...nodesArray,
      ...LESS_PERFORMANT_transformTreeIntoArray(tree.left),
    ];
  }

  nodesArray.push(tree.value);
  return nodesArray;
}

const compareNumbers = (n1, n2) => n1 - n2;

// eslint-disable-next-line no-unused-vars
function LESS_PERFORMANT_findMaxNode(tree) {
  if (!tree || Object.keys(tree).length === 0) return 0;

  const nodeArray = LESS_PERFORMANT_transformTreeIntoArray(tree);

  return nodeArray.sort(compareNumbers).pop();
}

/* 
In the second solution we will check each number before setting it into the array, since we only need the biggest number
we don't need to have an array of all the values of the nodes. This solution is O(n)
NOTE: This solution only works for positive numbers
*/

const maxBetween = (num1, num2) => (num1 > num2 ? num1 : num2);

function findMaxNode(tree) {
  let maxNumber = 0;
  if (!tree || Object.keys(tree).length === 0) return maxNumber;

  if (tree.right) {
    const rightChildMaxNumber = findMaxNode(tree.right);
    maxNumber = maxBetween(maxNumber, rightChildMaxNumber);
  }
  if (tree.left) {
    const leftChildMaxNumber = findMaxNode(tree.left);
    maxNumber = maxBetween(maxNumber, leftChildMaxNumber);
  }

  return maxNumber > tree.value ? maxNumber : tree.value;
}

module.exports = findMaxNode;
