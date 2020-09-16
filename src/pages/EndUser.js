import React, {PureComponent} from 'react';
import {
    Col,
    Container,
    Row,
    Card,
    CardBody,
    CardText,
    CardHeader,
    ListGroup, ListGroupItem, Alert
} from "reactstrap";
import {FACEBOOK_AUTH_URL, ACCESS_TOKEN, ENDUSER_URL} from '../constants';
import {getItem} from '../utils/APIUtil';

class EndUser extends PureComponent {

    constructor(props) {
        super(props);
        this.onClickGetMethod = this.onClickGetMethod.bind(this);
    }

    onClickGetMethod() {
        let data = getItem(ENDUSER_URL,101);
        console.log("DATA: "+data);
        console.log(data);
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <a color="primary" href={FACEBOOK_AUTH_URL}>Facebook ile Bağlan</a>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Card className="bg-dark text-white">
                                <CardHeader className="text-warning">JWT</CardHeader>
                                <CardBody>
                                    <CardText>{localStorage.getItem(ACCESS_TOKEN)}</CardText>
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
                                            <ListGroupItem tag="button" action
                                                           onClick={this.onClickGetMethod}>GET</ListGroupItem>
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

export default EndUser;