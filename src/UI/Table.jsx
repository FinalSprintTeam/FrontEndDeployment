import Table from 'react-bootstrap/Table';

function TableMembers({nameHeader, scoreHeader, blankHeader, row}) {
  return (
    <Table  responsive="sm" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{nameHeader}</th>
          <th>{scoreHeader}</th>
          <th>{blankHeader}</th>
        </tr>
      </thead>
        {row}     
    </Table>
  );
}

export default TableMembers;