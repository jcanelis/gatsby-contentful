import * as React from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { useD3 } from "../hooks/useD3";
import { us } from "./usa";
import { unemployment } from "./unemployment";

const Map = ({ data }) => {
  const color = d3.scaleQuantize([1, 7], d3.schemeReds[6]);
  const format = (d) => `${d}%`;

  const path = d3.geoPath();
  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 1000;

      svg
        .append("g")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .join("path")
        .attr("class", "state")
        .attr("fill", (d) => color(unemployment.get(d.properties.name)))
        .attr("d", path)
        .append("title")
        .text(
          (d) => `${d.properties.name}
${format(unemployment.get(d.properties.name))}`
        );

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
