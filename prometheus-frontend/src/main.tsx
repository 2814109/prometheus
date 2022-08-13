import ReactDOM from "react-dom/client";
import Router from "./routes";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./network/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);
