import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Home from "./ui/Home";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<Home />);
