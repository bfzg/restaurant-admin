import React from "react";
import TopInfo from "./components/TopInfo";
import RecentOrder from "./components/RecentOrder";
import RecentPayment from "./components/RecentPayment";
import HotDishes from "./components/HotDishes";
import RadarChart from "./components/RadarChart";
import Team from "./components/Team";

function HomePage() {
  return (
    <div>
      <header>
        <TopInfo></TopInfo>
      </header>
      <section className="mt-5 grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div>
            <RecentOrder></RecentOrder>
          </div>
          <div className="mt-5">
            <RecentPayment></RecentPayment>
          </div>
        </div>
        <div className="col-span-1">
            <div>
                <HotDishes></HotDishes>
            </div>
            <div className="my-5">
                <RadarChart></RadarChart>
            </div>
            <div>
                <Team></Team>
            </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
