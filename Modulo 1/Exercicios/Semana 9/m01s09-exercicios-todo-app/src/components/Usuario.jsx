/* eslint-disable react/prop-types */
const Usuario = ({ nome, cargo, redes }) => (
    <div>
      <h2 className="display-1">{nome}</h2>
      <div className="d-flex">
        <span className="lead flex-grow-1">{cargo}</span>
        {redes.map((rede) => (
          <a
            className="lead mx-1"
            role="button"
            href={rede.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`bi ${rede.icone}`}/>
          </a>
        ))}
      </div>
    </div>
  );

export default Usuario;