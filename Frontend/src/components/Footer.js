import React from 'react'

const style = {
    backgroundColor: "var(--main-bg)",
    colo: "var(--txt-color)",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

function Footer(){
    return (
        <footer style={style}>
            <a href='https://www.linkedin.com/in/nazar-dzhura/'>[in] Nazar Dzhura</a>,  Levi9 test task
        </footer>
    )
}

export default Footer