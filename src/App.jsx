import { RouterProvider } from "react-router-dom";
import rootRoute from "./routes/rootRoute";
import AppModal from "./components/modal/AppModal";

const App = () => {

    return (
        <>
            <RouterProvider router={rootRoute}/>

            {/* all modal open in AppModal component */}
            <AppModal/>
        </>
    );
};

export default App;