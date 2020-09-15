import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function Contact(props) {
  return (
    <Form className="form mx-sm-auto px-3 text-center">
      <h1>
        <span className="title">Contact</span>
      </h1>
      <Row className="item">
        <a
          href="https://www.linkedin.com/in/elayenay/"
          rel="noopener noreferrer"
          target="_blank"
          className="center"
        >
          <Image
            className="logo"
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
          />
        </a>
        <a
          href="https://github.com/drlanah"
          rel="noopener noreferrer"
          target="_blank"
          className="center"
        >
          <Image
            className="logo"
            src="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"
            roundedCircle
          />
        </a>
      </Row>
      <Form.Group className="label mt-5" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="label" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="label" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          placeholder="Share your questions, thoughts, feelings..."
          as="textarea"
          rows="3"
        />
      </Form.Group>
      <Button className="btn" variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
