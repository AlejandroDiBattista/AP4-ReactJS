import  ContadorItem  from './ContadorItem';

function ContadorList({ contadores, alSumar, alBorrar }) {
  return (
    <ul>
      {contadores.map(contador => <ContadorItem
        key={contador.id}
        contador={contador}
        alSumar={alSumar}
        alBorrar={alBorrar} />)}
    </ul>
  );
}

export default ContadorList;