import { Grid } from 'semantic-ui-react';
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import "../Contact/Contact.css";

export default class Contact extends Component {
    render() {
        return ( 
            <div className="content">
                <div className="cv-top-section">
                    <div className="central-section">
                        <h2>Any Questions? Get in touch</h2>
                    </div>
                </div>
                <div className="intro-section about">
                <div className="section-header"></div>
                <br/>
                <br/>
                <Grid centered columns={8}>
                    <Grid.Row>        
                        <Grid.Column centered width={8}>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='First name' placeholder='First name' required/>
                                    <Form.Input fluid label='Last name' placeholder='Last name' />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='E-mail Address' placeholder='E-mail Address' required />
                                    <Form.Input fluid label='Phone No' placeholder='Phone No' />
                                </Form.Group>
                                <Form.TextArea label='Message' placeholder='' required/>
                                <Form.Button secondary className="center">Send</Form.Button>
                            </Form>
                           </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}