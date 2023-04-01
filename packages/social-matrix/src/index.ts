// I need algorithms
// - random (seeded)
// - celullar automata
// - 3 3 3 (take 3 groups and post them in sequence)
// - braided (1 0 1, 0, 1, 0)

type GetGridProps = {
  columns: number; // for instagram this is 3
  groups: number; // the number of groups you have in your data
  index: number; // the index you want to get the answer for
  layoutSwitchPattern: Array<number>; // [3, 1, 6, 2] will switch pattern after 3 rows, then 1 row for another pattern, etc..
  algorithms: [];
};

export async function getGrid() {}
