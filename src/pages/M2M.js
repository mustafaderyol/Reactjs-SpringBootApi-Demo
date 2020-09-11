import React, {PureComponent} from 'react';

import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody, CardText, ListGroup, ListGroupItem, Alert
} from 'reactstrap';

class M2M extends PureComponent {
    render() {
        return (
            <div>
                <Container>
                    <Card className="bg-dark text-white">
                        <CardBody>
                            <CardText>
                                <Form>
                                    <FormGroup row>
                                        <Label for="clientId" sm={2}>Client Id</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="clientId" id="clientId" placeholder="Client Id" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="clientSecret" sm={2}>Client Secret</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="clientSecret" id="clientSecret" placeholder="Client Secret" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="checkbox2" sm={2}> </Label>
                                        <Col sm={{ size: 10 }}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" id="checkbox2" />{' '}
                                                    Header'da gönder
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardText>
                        </CardBody>
                    </Card>

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

export default M2M;