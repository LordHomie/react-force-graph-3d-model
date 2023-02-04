export default (nodes) => {
  return {
    nodes: nodes.map((node) => ({
      id: node.id,
      group: node.group,
      name: node.name,
      source: node.source,
      val: 3,
    })),
    links: nodes
      .filter((node) => node.id)
      .map((node) => ({
        source: node.source,
        target: node.id,
      })),
  };
};
