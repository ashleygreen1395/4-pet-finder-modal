import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { App } from "./App";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

// export default function () {
//   return (
//     <html>
//       <body>
//         <Theme></Theme>
//       </body>
//     </html>
//   );
// }
