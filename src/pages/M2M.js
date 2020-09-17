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
import {ACCESS_TOKEN, M2M_URL} from "../constants";
import axios from "axios";
import JSONPretty from "react-json-pretty";

class M2M extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            responseJson: "",
            responseStatus: true,
            clientId: "client1",
            clientSecret: "client1Secret",
            sendHeader: false
        };
        this.onClickGetMethod = this.onClickGetMethod.bind(this);
        this.onClickListMethod = this.onClickListMethod.bind(this);
        this.onClickAddMethod = this.onClickAddMethod.bind(this);
        this.onClickDeleteMethod = this.onClickDeleteMethod.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    getHeader = function () {
        if (this.state.sendHeader) {
            return {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-auth-type': 'M2M',
                'clientId': this.state.clientId,
                'clientSecret': this.state.clientSecret
            }
        } else {
            return {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-auth-type': 'M2M'
            }
        }
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onClickGetMethod() {
        axios.get(M2M_URL + "101", {
                headers: this.getHeader()
            }
        ).then((response) => {
            this.setState({
                responseJson: response.data,
                responseStatus: response.status
            });
        }).catch(error => {
            this.setState({
                responseJson: error.response.data,
                responseStatus: error.response.status
            });
        });
    }

    onClickListMethod() {
        axios.post(M2M_URL, {clientId: this.state.clientId, clientSecret: this.state.clientSecret}, {
                headers: this.getHeader()
            }
        ).then((response) => {
            console.log(response);
            this.setState({
                responseJson: response.data,
                responseStatus: response.status
            });
        }).catch(error => {
            this.setState({
                responseJson: error.response.data,
                responseStatus: error.response.status
            });
        });
    }

    onClickAddMethod() {
        axios.post(M2M_URL + "create", {
                clientId: this.state.clientId,
                clientSecret: this.state.clientSecret,
                name: "Yapılacak yeni"
            }, {
                headers: this.getHeader()
            }
        ).then((response) => {
            console.log(response);
            this.setState({
                responseJson: response.data,
                responseStatus: response.status
            });
        }).catch(error => {
            this.setState({
                responseJson: error.response.data,
                responseStatus: error.response.status
            });
        });
    }

    onClickDeleteMethod() {
        axios.post(M2M_URL + "delete/101", {
                clientId: this.state.clientId,
                clientSecret: this.state.clientSecret
            }, {
                headers: this.getHeader()
            }
        ).then((response) => {
            this.setState({
                responseJson: response.data,
                responseStatus: response.status
            });
        }).catch(error => {
            this.setState({
                responseJson: error.response.data,
                responseStatus: error.response.status
            });
        });
    }

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
                                            <Input type="text" name="clientId" value={this.state.clientId} id="clientId"
                                                   placeholder="Client Id" onChange={this.handleInputChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="clientSecret" sm={2}>Client Secret</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="clientSecret" value={this.state.clientSecret}
                                                   id="clientSecret" placeholder="Client Secret" onChange={this.handleInputChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="checkbox2" sm={2}> </Label>
                                        <Col sm={{size: 10}}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" value={this.state.sendHeader} id="sendHeader"
                                                           name="sendHeader" onChange={this.handleInputChange}/>{' '}
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
                        <Col xs="2">
                            <Card className="bg-dark text-white">
                                <CardHeader className="text-warning">Testler</CardHeader>
                                <CardBody>
                                    <CardText>
                                        <ListGroup>
                                            <ListGroupItem tag="button" action
                                                           onClick={this.onClickGetMethod}>GET</ListGroupItem>
                                            <ListGroupItem tag="button" action
                                                           onClick={this.onClickListMethod}>LIST</ListGroupItem>
                                            <ListGroupItem tag="button" action
                                                           onClick={this.onClickAddMethod}>ADD</ListGroupItem>
                                            <ListGroupItem tag="button" action
                                                           onClick={this.onClickDeleteMethod}>DELETE</ListGroupItem>
                                        </ListGroup>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="10">
                            {this.state.responseJson !== "" ?
                                <Alert color={this.state.responseStatus === 200 ? "success" : "danger"}>
                                    <JSONPretty id="json-pretty" data={this.state.responseJson}></JSONPretty>
                                </Alert>
                                :
                                ""
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default M2M;