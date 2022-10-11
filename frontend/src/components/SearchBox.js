import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');

  const submitHandler = (e) => { 
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  }

  return (
    <Form className='d-flex me-auto' onSubmit={submitHandler}>
      <InputGroup>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search Products...'
          aria-label="Search Products"
          aria-describedby="button-search"
        />
        <Button
          variant='outline-primary'
          type="submit"
          id="button-search"
        >
          <i className='fas fa-search'/>
        </Button>
      </InputGroup>
    </Form>
  )
}
