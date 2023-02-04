// https://github.com/vasturiano/react-force-graph - reference

import React, { useRef } from "react";
import { ForceGraph3D } from "react-force-graph";
import useGetScreenDimensions from "./useGetScreenDimensions";
import dataset from "../../config/dataset";
import { utilityGenRandomTree, utilityGetNodeDetatils } from "../../utils";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";

const Sphere = ({ setClickDetails }) => {
  const graphRef = useRef();
  const { screenWidth, screenHeight } = useGetScreenDimensions();

  const extraRenderers = [new CSS2DRenderer()];
  const data = utilityGenRandomTree(dataset);
  console.log(data);

  const nodeClickHandler = (node) => {
    const nodeDetails = utilityGetNodeDetatils(node, dataset);
    setClickDetails(nodeDetails);
  };

  return (
    <ForceGraph3D
      width={screenWidth - 300}
      height={screenHeight - 80}
      ref={graphRef}
      graphData={data}
      nodeAutoColorBy="group"
      linkDirectionalParticleColor={() => "red"}
      linkDirectionalParticleWidth={6}
      linkHoverPrecision={1}
      onNodeDragEnd={(node) => {
        node.fx = node.x;
        node.fy = node.y;
        node.fz = node.z;
      }}
      extraRenderers={extraRenderers}
      nodeThreeObjectExtend={true}
      onLinkClick={(link) => graphRef.current.emitParticle(link)}
      nodeThreeObject={(node) => {
        const nodeEl = document.createElement("div");
        nodeEl.textContent = "";
        nodeEl.textContent = node.name;
        nodeEl.style.color = "white";
        nodeEl.style.top = "-35px";
        return new CSS2DObject(nodeEl);
      }}
      onNodeClick={(node) => node && nodeClickHandler(node)}
    />
  );
};

export default Sphere;
