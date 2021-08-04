import * as React from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { useD3 } from "../hooks/useD3";
import legend from "./legend";

import { county } from "./county";
import { states } from "./states";
import us from "./us.json";

const Map = () => {
  const color = d3.scaleQuantize([1, 10], d3.schemeReds[9]);
  const format = (d) => `${d}%`;

  const path = d3.geoPath();
  const ref = useD3((svg) => {
    svg
      .append("g")
      .attr("transform", "translate(610,20)")
      .append(() =>
        legend({ color, title: "Unemployment rate (%)", width: 260 })
      );

    svg
      .append("g")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
      .join("path")
      .attr("fill", (d) => color(county.get(d.id)))
      .attr("d", path)
      .attr("class", "state")
      .attr(
        "data-stuff",
        (d) => `${d.properties.name}, ${states.get(d.id.slice(0, 2)).name}
${format(county.get(d.id))}`
      )
      .append("title")
      .text(
        (d) => `${d.properties.name}, ${states.get(d.id.slice(0, 2)).name}
  ${format(county.get(d.id))}`
      );

    svg
      .append("path")
      .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 960 700"
      preserveAspectRatio="xMidYMid meet"
    ></svg>
  );
};

export default Map;
