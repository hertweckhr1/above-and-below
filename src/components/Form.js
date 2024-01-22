import React, { useState, useEffect } from 'react';
import {
    Alert,
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
import './Form.css';

const ContactForm = () => {
    const [showFormValidation, setShowFormValidation] = useState(false);
    const [showEmailFailure, setShowEmailFailure] = useState(false);
    const [showEmailSuccess, setShowEmailSuccess] = useState(false);
    // const ref = useRef(null);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowEmailSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, [showEmailSuccess]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowEmailFailure(false);
      }, 4000);
      return () => clearTimeout(timer);
    }, [showEmailFailure]);
    
    const sendEmail = async (e) => {
        e.preventDefault();

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
            setShowEmailSuccess(true);
          }, (error) => {
            console.log(error.text);
            setShowEmailFailure(true)
          });
        e.target.reset();
        if (showFormValidation) {
          setShowFormValidation(false);
        }
    }

    return (
      <Container>
        <Alert className="alert-with-icon" color="danger" isOpen={showFormValidation}>
          <Container>
            <div className="alert-wrapper">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setShowFormValidation(false)}
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div className="message">
                All fields must be filled out.
              </div>
            </div>
          </Container>
        </Alert>
        <Alert className="alert-with-icon" color="danger" isOpen={showEmailFailure}>
          <Container>
            <div className="alert-wrapper">
              <div className="message">
                Message was unable to send.  Please try again later. 
              </div>
            </div>
          </Container>
        </Alert>
        <Alert color="success" isOpen={showEmailSuccess}>
          Message successfully sent.
        </Alert>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title text-center">Contact Us</h2>
            <Form className="contact-form" onSubmit={sendEmail}>
              <Row>
                <Col md="6">
                  <Input type="hidden" name="secret_input" />
                  <label className="white-text">Name *</label>
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
                  <label className="white-text">Email *</label>
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
              <label className="white-text">Message *</label>
              <Input
                name="message"
                placeholder="Tell us what's on your mind..."
                type="textarea"
                rows="4"
              />
              {/* <Row className="bug-corner">
                <Col className="ml-auto mr-auto" md="12">
                  <h3 className="title text-center">
                    <div>Gabby's Bug Corner</div>
                    <small>Find a bug you're itching to identify? Snap, upload, and let's identify it together!</small>
                  </h3>
                  <Button
                    onClick={() => ref.current?.click()}
                    className="btn-round bug-corner__upload-button"
                    color="warning"
                    outline
                    type="button"
                  >
                    Upload Image */}
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    {/* <label style={{display: 'none'}}>
                      <input
                        accept=".png, .jpg, .jpeg, .pdf, .tif, .tiff"
                        data-nuiexp="upload-receipt"
                        multiple
                        onChange={() => {}}
                        ref={ref}
                        tabIndex={-1}
                        type="file"
                      />
                    </label>
                  </Button>
                </Col>
              </Row> */}
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button
                    // className="btn-fill"
                    // color="warning"
                    size="lg"
                    className="btn-round submit-button"
                    color="warning"
                    type="button"
                  >
                    Send
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