export default [
  {
    id: 0,
    group: 1,
    source: null,
    name: "Parent",
  },
  { id: 1, group: 2, source: 0, name: "Child1" },
  { id: 2, group: 3, source: 0, name: "Child2" },
  { id: 3, group: 3, source: 2, name: "Grandchild" },
];
