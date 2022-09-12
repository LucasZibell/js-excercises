const findMaxNode = require("./index");

test("Finds the max node of a basic tree", () => {
  const twoLeavesTree = {
    value: 4,
    left: {
      value: 5,
    },
    right: {
      value: 6,
    },
  };
  expect(findMaxNode(twoLeavesTree)).toBe(6);
});

test("Finds the max node of only a right sided tree", () => {
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
  expect(findMaxNode(onlyRightLeaves)).toBe(8);
});

test("Finds the max node of only a left sided tree", () => {
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
  expect(findMaxNode(onlyLeftLeaves)).toBe(10);
});

test("The max node of an empty tree equals 0", () => {
  const emptyTree = {};
  expect(findMaxNode(emptyTree)).toBe(0);
});

test("The max node of nothing equals 0", () => {
  expect(findMaxNode(null)).toBe(0);
});

test("The max node of a complex tree equals 9", () => {
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
  expect(findMaxNode(complexTree)).toBe(9);
});
