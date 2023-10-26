function TablaDelDiez() {
  const lista = [...Array(10)].map((_, i) =>
    React.createElement(
      'li',
      { key: i },
      `${i + 1} * 10 = ${(i + 1) * 10}`
    )
  );

  return React.createElement(
    'div',
    { id: 'tabla' },
    React.createElement('h4', null, 'Tabla del 10'),
    React.createElement('ul', null, lista)
  );
}

function Tabla10() {
    return (
        <>
            <h1>Tabla del 10</h1>
            <p>1 x 5 = 10</p>
            <p>2 x 5 = 10</p>
            <p>3 x 5 = 10</p>
            <p>4 x 5 = 10</p>
        </>
    )
}