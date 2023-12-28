import React, { useState } from 'react';
import {
    Button,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


const ContactForm = () => {
    const [showFormValidation, setShowFormValidation] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();
    
    const sendEmail = async (e) => {
        e.preventDefault();
        if (!executeRecaptcha) {
            return;
          }
      
        const result = await executeRecaptcha("contact-form");
      
        console.log("Recaptcha result", result); // it will show you a token 

        const formData = new FormData(e.target);
        const hiddenData = formData.get('secret_input');
        // do not want bot sending emails
        if (!!hiddenData) {
          return;
        }
    
        const message = formData.get('message');
        const name = formData.get('from_name');
        const email = formData.get('reply_to');
    
        if (!message || !name || !email) {
          return setShowFormValidation(true);
        }
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
        if (showFormValidation) {
          setShowFormValidation(false);
        }
    }

    return (
        <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title text-center">Contact Us</h2>
            {showFormValidation && (
              <p className="text-danger text-center">
                *All fields must be filled out
              </p>
            )}
            <Form className="contact-form" id="contact-form" onSubmit={sendEmail}>
              <Row>
                <Col md="6">
                  <Input type="hidden" name="secret_input" />
                  <label className="text-muted">Name</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="from_name" placeholder="Name" type="text" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label className="text-muted">Email</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="reply_to" placeholder="Email" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <label className="text-muted">Message</label>
              <Input
                name="message"
                placeholder="Tell us what's on your mind..."
                type="textarea"
                rows="4"
              />
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button className="btn-fill" color="warning" size="lg">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    )
}

export default ContactForm;