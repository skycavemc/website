import React from "react";
import Localize from "../components/localize";
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <h1 className="header"><Localize str="STR_Header" /></h1>
                <p><Localize str="STR_Text" /></p>
            </Container>
        </Container>
    );
}

export default Home;
