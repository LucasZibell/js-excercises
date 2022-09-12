const counTreeLeaves = require("./index");

test("Count leaves of a two leaves tree equals 2", () => {
  const twoLeavesTree = {
    value: 4,
    left: {
      value: 5,
    },
    right: {
      value: 6,
    },
  };
  expect(counTreeLeaves(twoLeavesTree)).toBe(2);
});

test("Count leaves of a tree with only right leaves equals 1", () => {
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
  expect(counTreeLeaves(onlyRightLeaves)).toBe(1);
});

test("Count leaves of a tree with only left leaves equals 1", () => {
  const onlyLeftLeaves = {
    value: 4,
    left: {
      value: 6,
      left: {
        value: 8,
        left: {
          value: 1,
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
  expect(counTreeLeaves(onlyLeftLeaves)).toBe(1);
});

test("Count leaves of empty tree equals 0", () => {
  const emptyTree = {};
  expect(counTreeLeaves(emptyTree)).toBe(0);
});

test("Count leaves of nothing equals 0", () => {
  expect(counTreeLeaves(null)).toBe(0);
});

test("Count leaves of complex tree equals 4", () => {
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
  expect(counTreeLeaves(complexTree)).toBe(4);
});
