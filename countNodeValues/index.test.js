const countNodesValues = require("./index");

test("Count nodes of a two leaves tree equals 15", () => {
  const twoLeavesTree = {
    value: 4,
    left: {
      value: 5,
    },
    right: {
      value: 6,
    },
  };
  expect(countNodesValues(twoLeavesTree)).toBe(15);
});

test("Count nodes of a tree with only right leaves equals 26", () => {
  const onlyRightLeaves = {
    value: 4,
    right: {
      value: 6,
      right: {
        value: 8,
        right: {
          value: 1,
          right: {
            value: 5,
            right: {
              value: 2,
            },
          },
        },
      },
    },
  };
  expect(countNodesValues(onlyRightLeaves)).toBe(26);
});

test("Count nodes of a tree with only left leaves equals 33", () => {
  const onlyLeftLeaves = {
    value: 10,
    left: {
      value: 6,
      left: {
        value: 8,
        left: {
          value: 2,
          left: {
            value: 5,
            left: {
              value: 2,
            },
          },
        },
      },
    },
  };
  expect(countNodesValues(onlyLeftLeaves)).toBe(33);
});

test("Count nodes of empty tree equals 0", () => {
  const emptyTree = {};
  expect(countNodesValues(emptyTree)).toBe(0);
});

test("Count nodes of nothing equals 0", () => {
  expect(countNodesValues(null)).toBe(0);
});

test("Count nodes of complex tree equals 45", () => {
  const complexTree = {
    value: 1,
    right: {
      value: 2,
      right: {
        value: 4,
        right: {
          value: 5,
        },
      },
      left: {
        value: 6,
        left: {
          value: 7,
          right: {
            value: 8,
          },
          left: {
            value: 9,
          },
        },
      },
    },
    left: {
      value: 3,
    },
  };
  expect(countNodesValues(complexTree)).toBe(45);
});
