import Form from 'react-bootstrap/Form';

function DadosPessoaisisForm () {
  return ( 
    <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder='Digite o seu nome'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email"placeholder='Digite o seu e-mail'/>
      </Form.Group>
    </Form>
   );
}

export default DadosPessoaisisForm;