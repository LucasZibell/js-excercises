function countNodesValues(tree) {
  let nodeSum = 0;
  if (!tree || Object.keys(tree).length === 0) return nodeSum;

  if (tree.right) {
    nodeSum += countNodesValues(tree.right);
  }
  if (tree.left) {
    nodeSum += countNodesValues(tree.left);
  }

  return nodeSum + tree.value;
}

module.exports = countNodesValues;
