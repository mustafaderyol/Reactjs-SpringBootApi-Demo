import React, {PureComponent} from 'react';
import {
    Alert,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row
} from "reactstrap";

class Admin extends PureComponent {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Button color="primary">Auth0 ile Bağlan</Button>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Card className="bg-dark text-white">
                                <CardHeader className="text-warning">JWT</CardHeader>
                                <CardBody>
                                    <CardText>TOKEN</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs="2">
                            <Card className="bg-dark text-white">
                                <CardHeader className="text-warning">Testler</CardHeader>
                                <CardBody>
                                    <CardText>
                                        <ListGroup>
                                            <ListGroupItem tag="button" action>GET</ListGroupItem>
                                            <ListGroupItem tag="button" action>LIST</ListGroupItem>
                                            <ListGroupItem tag="button" action>ADD</ListGroupItem>
                                            <ListGroupItem tag="button" action>DELETE</ListGroupItem>
                                        </ListGroup>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="10">
                            <Alert color="success">
                                This is a success alert — check it out!
                            </Alert>
                            <Alert color="danger">
                                This is a danger alert — check it out!
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Admin;