import * as React from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { useD3 } from "../hooks/useD3";
import { us } from "./usa";
// import { geoEqualEarth, geoPath } from "d3-geo";

const Map = ({ data }) => {
  const path = d3.geoPath();
  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 1000;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      svg
        .append("g")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .join("path")
        .attr("fill", "rgba(0,0,0,0.1)")
        .attr("class", "state")
        .attr("d", path)
        .append("title")
        .text("cool");

      svg
        .append("path")
        .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-linejoin", "round")
        .attr("d", path);
    },
    [50]
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 960 700"
      preserveAspectRatio="xMidYMid meet"
    ></svg>
  );
};

export default Map;
