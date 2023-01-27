import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Data from "./components/data";

export default function App() {
    const elements = Data.map(item => {
        return <MainContent 
                    item={item}
                />
    })
    return (
        <div>
            <Navbar />
            <div className="main-container">
                {elements}
            </div>
        </div>
    )
}