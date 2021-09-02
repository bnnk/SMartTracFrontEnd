import { BrowserRouter, Route } from "react-router-dom";
import Index from "./routes/index";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
    </BrowserRouter>
  );
}
