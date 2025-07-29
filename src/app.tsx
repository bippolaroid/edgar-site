import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { MetaProvider, Title } from "@solidjs/meta";
import Home from "./routes";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <MetaProvider>
        <Title>EDGAR - Creative Studio in New Jersey</Title>
      </MetaProvider>
      <FileRoutes />
      <Route path="*404" component={Home} />
    </Router>
  );
}
