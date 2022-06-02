import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Header from "./MainContent"
import Header from "./Footer"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))