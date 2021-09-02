import React from "react";
import { useLocation } from "react-router-dom";
import useAxios from "use-axios";
import { Bars } from "svg-loaders-react";
import usePromise from "react-promise-suspense";
import "ol/ol.css";
import Map from "../SMartTrac-Blocks/map";
import { loadProgressBar } from "axios-progress-bar";

loadProgressBar();

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function mapSleep(input) {
  console.log(input);
  const [time, Component] = input;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(<Component />);
    }, time);
  });
}
function QMap() {
  const axiosData = useAxios();
  return <Map lat={48.82} long={2.364} />;
}
function PedoView({ component }) {
  const resolvedPromise = usePromise(mapSleep, [[5000, component]]);
  console.log(component);
  return resolvedPromise;
}
export default function Index() {
  const Query = useQuery();
  return (
    <div>
      <h1>Hello {Query.get("id")} from CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <React.Suspense fallback={<Bars fill="turquoise" />}>
        <PedoView component={QMap} />
      </React.Suspense>
    </div>
  );
}
