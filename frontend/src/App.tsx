import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Menu from "./components/Menu.tsx";
import Home from "./components/Home.tsx";
import Projects from "./components/Projects.tsx";
import Documentation from "./components/Documentation.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="docu" element={<Documentation />} />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;