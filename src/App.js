import React, { Suspense, useState, useTransition } from "react";
import { Spinner } from "./Components/Spinner";
import "./styles.css";
import { TvShowList } from "./Components/TvShowList";
import { TvShowDetails } from "./Components/TvShowDetails";


export default function App() {

  // const [startTransition, isPending] = useTransition({
  //   timeoutMs: 3000
  // });

  return (
    <div className="container">
      {/* <h1>Top 10 TV Shows of All Time {isPending && "(loading)"}</h1> */}
      <h1>Top 10 TV Shows of All Time</h1>
      <div className="flex">
        <Suspense fallback={<Spinner />}>
          {/* <TvShowList startTransition={startTransition}/> */}
          <TvShowList/>
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <TvShowDetails/>
        </Suspense>
      </div>
    </div>
  );
}
