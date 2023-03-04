import React, { Suspense } from "react";

import { ConnectAPI } from "app/providers/with-api";
import { Routes } from "pages";
import { Loading } from "shared/loading";
import { UserHeader, GeneralHeader } from "components/header";

export const App: React.FC = (props) => {
  const isReady = true;
  

  return (
    <ConnectAPI>
      <UserHeader />
      <Suspense fallback={<Loading />}>
        {(isReady && <Routes />) || <Loading />}
      </Suspense>
    </ConnectAPI>
  );
};
