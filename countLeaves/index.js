function counTreeLeaves(tree) {
  let leaves = 0;
  if (!tree || Object.keys(tree).length === 0) return leaves;

  if (tree.right) {
    leaves += counTreeLeaves(tree.right);
  }
  if (tree.left) {
    leaves += counTreeLeaves(tree.left);
  }
  if (!tree.right && !tree.left) {
    return 1;
  }

  return leaves;
}

module.exports = counTreeLeaves;
