import * as React from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { useD3 } from "../hooks/useD3";
import legend from "./legend";
import { county } from "./county";
import { states } from "./states";
import us from "./us.json";

const Map = () => {
  React.useEffect(() => {
    console.log("hi");
  }, []);

  const color = d3.scaleQuantize([1, 10], d3.schemeReds[9]);
  console.log(d3.scaleQuantize([1, 10], d3.schemeReds[9]));
  const format = (d) => `${d}%`;

  const path = d3.geoPath();

  const ref = useD3((svg) => {
    svg
      .append("g")
      .attr("transform", "translate(560,20)")
      .attr("class", "legend")
      .append(() =>
        legend({
          color,
          title: "Unemployment rate (%)",
          width: 320,
          ticks: 10,
        })
      );

    svg
      .append("g")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
      .join("path")
      .attr("fill", (d) => color(county.get(d.id)))
      .attr("d", path)
      .attr("stroke", "white")
      .attr("stroke-width", "0.2px")
      .attr("stroke-linejoin", "round")
      .attr("class", "state")
      .attr("data-county", (d) => `${d.properties.name}`)
      .attr("data-state", (d) => `${states.get(d.id.slice(0, 2)).name}`)
      .attr("data-metric", (d) => `${format(county.get(d.id))}`)
      .append("title")
      .text(
        (d) => `${d.properties.name}, ${states.get(d.id.slice(0, 2)).name}
  ${format(county.get(d.id))}`
      );

    (d) => `${d.properties.name}, ${states.get(d.id.slice(0, 2)).name}
      ${format(county.get(d.id))}`;

    svg
      .append("path")
      .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);
  });

  const grab = async (e) => {
    //console.log(e.target.textContent);
    console.log(e.target.dataset.state);
    console.log(e.target.dataset.county);
    console.log(e.target.dataset.metric);
  };

  return (
    <svg
      onClick={(e) => grab(e)}
      ref={ref}
      viewBox="0 0 960 700"
      preserveAspectRatio="xMidYMid meet"
    ></svg>
  );
};

export default Map;
