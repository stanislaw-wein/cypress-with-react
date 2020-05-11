import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Col, Container, Form } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', name: '', isFormSubmitted: false };
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = event => {
    event.preventDefault();
    this.setState({ isFormSubmitted: true });
  };

  render = () => {
    const { email, name, isFormSubmitted } = this.state;
    return (
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' value={email} type='email' onChange={this.onChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' value={name} onChange={this.onChange} />
            </Form.Group>
          </Form.Row>
          <Button variant='primary' type='submit' data-cy="submit" onClick={this.onSubmit}>Submit</Button>
        </Form>
        {isFormSubmitted && <SuccessAlert email={email} name={name} />}
      </Container>
    );
  };
}

const SuccessAlert = ({ email, name }) =>
  <Alert variant='success' className='mt-4'>
    <Alert.Heading>Fast, easy and reliable testing for anything that runs in a browser.</Alert.Heading>
    <hr />
    <p>Email: <b className='email'>{email}</b></p>
    <p>Name: <b className='name'>{name}</b></p>
  </Alert>;

export default App;
