import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Menu from "./components/Menu.tsx";
import Home from "./components/Home.tsx";
import ProjectList from "./components/ProjectList.tsx";
import Documentation from "./components/Documentation.tsx";
import Project from "./components/Project.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<ProjectList />} />
            <Route path="projects/:projectName" element={<Project />} />
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