import React, { useState, useEffect } from "react";
import axios from "axios"
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
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>URL</th>
        <th>ShortURL</th>
        <th>Visits</th>
        <th>Attempts</th>
      </tr>
    </thead>
  )
}

const TableBody = ({ tableData }) => {
  const rows = tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.url}</td>
        <td>{process.env.REACT_APP_API + "/" + row.shortId}</td>
        <td>{row.visits}</td>
        <td>{row.attempts}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = () => {

  // State hook for updating the table
  const [tableData, setTableData] = useState([])

  // Request quickurl data
  useEffect(() => {
    axios.get(process.env.REACT_APP_API + "/api/fetchAll")
      .then((response) => {
        setTableData(response.data)
      })
      .catch((err) => console.error(err)) 
  }, [])

return (
  <TableContainer>
    <table>
      <TableHeader />
      <TableBody tableData={tableData} />
    </table>
  </TableContainer>
)
}
export default Table;