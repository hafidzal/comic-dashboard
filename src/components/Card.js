import React, { Component } from "react";
import { IconContext } from 'react-icons';
import { FaLock, FaUserCircle, FaEnvelope } from 'react-icons/fa';
// import './styles/Card.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Card extends Component{
    render(){
        return(
            <div className="card-styles">
                <IconContext.Provider value={{ color: "#e66767", size: "4em", className: "icon-styles" }}>
                        <FaUserCircle />
                </IconContext.Provider>
                <Form className="form-styles">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text className="input-prepend-styles">
                                    <IconContext.Provider value={{ color: "#e66767", size: "1em", className: "icon-styles" }}>
                                            <FaEnvelope />
                                    </IconContext.Provider>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            
                            <FormControl className="input-styles" id="inlineFormInputGroup" placeholder="Email" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text className="input-prepend-styles">
                                    <IconContext.Provider value={{ color: "#e66767", size: "1em", className: "icon-styles" }}>
                                            <FaLock />
                                    </IconContext.Provider>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            
                            <FormControl className="input-styles" id="inlineFormInputGroup" placeholder="Password" />
                        </InputGroup>
                    </Form.Group>
                    <Button className="button-styles" type="submit">
                        Submit &rarr;
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Card;