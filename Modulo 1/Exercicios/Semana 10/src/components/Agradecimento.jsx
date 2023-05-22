import Form from 'react-bootstrap/Form';

function Agradecimento() {
  return ( 
    <div>
      <p>Obrigado pelo cadastro! Por favor, selecione abaixo onde conheceu nosso site</p>
      <Form.Select aria-label="Selecione o site">
        <option>Selecione a opção</option>
        <option value="1">Site</option>
        <option value="2">LinkedIn</option>
        <option value="3">Instagram</option>
      </Form.Select>
    </div>
   );
}

export default Agradecimento;