import React, {PureComponent} from 'react';
import {
    Col,
    Container,
    Row,
    Card,
    Button,
    CardBody,
    CardText,
    CardHeader,
    ListGroup, ListGroupItem, Alert
} from "reactstrap";
import {API_BASE_URL, ACCESS_TOKEN, ADMIN_URL} from '../constants';
import axios from "axios";
import JSONPretty from 'react-json-pretty';

class Admin extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            responseJson: "",
            responseStatus: true
        };
        this.onClickGetMethod = this.onClickGetMethod.bind(this);
        this.onClickListMethod = this.onClickListMethod.bind(this);
        this.onClickAddMethod = this.onClickAddMethod.bind(this);
        this.onClickDeleteMethod = this.onClickDeleteMethod.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }

    onClickLogin() {
        axios.post(API_BASE_URL + "/auth/login", {email: "mustafa.deryol@hotmail.com", password: "123"}, {
                headers: this.getHeader()
            }
        ).then((response) => {
            localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
            this.setState({
                responseJson: response.data,
                responseStatus: response.status
            })
        }).catch(error => {
            this.setState({
                responseJson: error.response.data,
                responseStatus: error.response.status
            });
        });
    }

    getHeader = function () {
        return {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-auth-type': 'Admin',
            'Authorization': 'bearer ' + (localStorage.getItem(ACCESS_TOKEN) ? localStorage.getItem(ACCESS_TOKEN) : "")
        }
    };

    onClickGetMethod() {
        axios.get(ADMIN_URL + "101", {
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
        axios.get(ADMIN_URL, {
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
        axios.post(ADMIN_URL, "Yapılacak yeni", {
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
        axios.get(ADMIN_URL + "delete/101", {
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
                    <Row>
                        <Col>
                            <Button color="primary" onClick={this.onClickLogin}>OAuth2 ile
                                Bağlan</Button>
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

export default Admin;