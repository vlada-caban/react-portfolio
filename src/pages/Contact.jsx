import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div className="container pt-4">
      <Form>
        <Form.Group className="mb-3" >
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingInput"
            label="Your name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Your name here" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingTextarea" label="Message">
            <Form.Control
              as="textarea"
              placeholder="Your message here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
