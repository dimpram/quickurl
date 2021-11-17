import styled from "styled-components";

const TableContainer = styled.div`
  margin: 2rem 0 0;
  overflow-x: auto;
  background-color: #FFC2B4;
  border-radius: 20px;
  padding: 0.6rem 0 1rem;
  width: 100%;

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  th {
    background-color: #FFC2B4;
    color: #ffffff;
  }

  th, td {
    text-align: left;
    padding: 1rem;
  }

  tr:nth-child(odd) {
    background-color: #FFEDE8;
  }

  tr:nth-child(even) {
    background-color: #ffffff;
  }
`
const Table = () => {
  return(
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>ShortURL</th>
            <th>Visits</th>
            <th>Attempts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>https://google.com</td>
            <td>https://google.com</td>
            <td>5</td>
            <td>1</td>
          </tr>
          <tr>
            <td>https://google.com</td>
            <td>https://google.com</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  )
}
export default Table;