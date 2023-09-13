import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import App from "App";

const container = document.getElementById("root");
const root = createRoot(container);
inject();
root.render(<App />);
