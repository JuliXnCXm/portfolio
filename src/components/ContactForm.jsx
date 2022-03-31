import React from 'react'
import {Form} from 'react-bootstrap'
const ContactForm = ({handleClose}) => {
    return (
        <>
            <span class="material-icons material-icons-outlined" onClick={handleClose}>
                close
            </span>
            <div>Contact Me</div>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button>Contact Now</button>
            </Form>
        </>
    )
}

export default ContactForm