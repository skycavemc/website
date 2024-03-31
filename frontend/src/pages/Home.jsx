import React from "react";
import Localize from "../components/localize";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    return (
        <Container className="p-3 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <h1 className="text-center text-skycave mb-4"><Localize str="STR_Header" /></h1>
            <div className="mb-4"></div>
            <Row className="justify-content-center">
                <Col>
                    <Card className="bg-skycave " > 
                        <Card.Header as="h3">Title</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-skycave">
                        <Card.Header as="h3">Title</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-skycave">
                        <Card.Header as="h3">Title</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
