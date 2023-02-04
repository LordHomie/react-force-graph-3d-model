export default (selectedNode, data) => {
  const { name } = selectedNode;
  const children = data.filter((node) => node.source === selectedNode.id);
  return { selectedNode: name, children };
};
