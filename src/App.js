import React, { useRef } from "react";
import "./App.css";

const App = () => {
    const searchInput = useRef(null);
    const focusSearchInput = () => searchInput.current.focus();

    return (
        <div className="App">
            <input ref={searchInput} type="text" />
            <button onClick={focusSearchInput}>Focus Search</button>
        </div>
    );
};

export default App;
