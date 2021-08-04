import React, { PureComponent, useState } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

// Components
import GlobalStyle from "../components/style";
import Layout from "../components/layout";
import Button from "../components/button";
import Subheader from "../components/subheader";
import Table from "../components/table";

import { chart1, chart2, chart5, chart11 } from "../other/charts";

import {
  AreaChart,
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  PieChart,
  Pie,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Hooks
import { getProducts } from "../hooks/products";

const OtherPage = () => {
  const products = getProducts();
  const [activeData, setData] = useState(chart1);
  return (
    <>
      <Helmet
        title={"Random Data Yo"}
        meta={[
          {
            name: "charset",
            content: "UTF-8",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "description",
            content: "That crazy data ya know.",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <GlobalStyle />
      <Helmet title={"Random Bando"} />
      <Layout>
        <div style={{ gridRow: "1", gridColumn: "1/9", textAlign: "center" }}>
          <Link to={"/"}>
            <p>Back</p>
          </Link>
          <Subheader>Heading</Subheader>

          <Button
            text="Change it up"
            func={() => {
              activeData === chart11 ? setData(chart1) : setData(chart11);
            }}
          ></Button>

          <div
            style={{
              gridRow: "2",
              gridColumn: "1/9",
              textAlign: "center",
              height: 540,
              marginTop: 64,
            }}
          >
            <ResponsiveContainer>
              <AreaChart
                height={540}
                data={activeData}
                margin={{
                  top: 0,
                  right: 8,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ gridRow: "2", gridColumn: "1/9", textAlign: "center" }}>
          <Subheader>Heading</Subheader>
          <p style={{ textAlign: "left", padding: 24, marginBottom: 24 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Table />
        </div>
      </Layout>
    </>
  );
};

export default OtherPage;
