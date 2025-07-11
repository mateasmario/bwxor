import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Menu from "./components/Menu.tsx";
import Home from "./components/Home.tsx";
import ItemList from "./components/item/ItemList.tsx";
import ItemView from "./components/item/ItemView.tsx";
import Kerwei from "./components/kerwei/Kerwei.tsx";
import Spy from "./components/spy/Spy.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<ItemList category="projects" />} />
            <Route path="projects/:slug" element={<ItemView category="projects"/>} />
            <Route path="docu" element={<ItemList category="docu" />} />
            <Route path="docu/:slug" element={<ItemView category="docu"/>} />
        </Route>
            <Route path="kerwei" element={<Kerwei />} />
            <Route path="apps/spy" element={<Spy />} />
        </>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;