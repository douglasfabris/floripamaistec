import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DadosPessoaisisForm () {
  return ( 
    <Form>
      <Form.Group className="mb-3" controlId="logradouro">
        <Form.Label>Logradouro</Form.Label>
        <Form.Control type="text" placeholder='Digite o seu logradouro'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="numero">
        <Form.Label>Número</Form.Label>
        <Form.Control type="number"placeholder='Digite o número'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="complemento">
        <Form.Label>Complemento</Form.Label>
        <Form.Control type="text" placeholder='Digite o complemento'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="bairro">
        <Form.Label>Bairro</Form.Label>
        <Form.Control type="text" placeholder='Digite o bairro'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="cidade">
        <Form.Label>Cidade</Form.Label>
        <Form.Control type="text" placeholder='Digite a cidade'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="cep">
        <Form.Label>CEP</Form.Label>
        <Form.Control type="number" placeholder='Digite o CEP (somente números)'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="estado">
        <Form.Label>Estado</Form.Label>
        <Form.Control type="text" placeholder='Digite o estado'/>
      </Form.Group>
    </Form>
   );
}

export default DadosPessoaisisForm;