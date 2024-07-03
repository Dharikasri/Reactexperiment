import React from 'react';

const Table = () => {
  return (
    <div>
      <h1>Name Details:</h1>
      <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Age</th>
            <th style={styles.tableHeader}>Mobile</th>
            <th style={styles.tableHeader}>Weight</th>
            <th style={styles.tableHeader}>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.tableCell}>Kumar</td>
            <td style={styles.tableCell}>20</td>
            <td style={styles.tableCell}>2985653791</td>
            <td style={styles.tableCell}>50kg</td>
            <td style={styles.tableCell}>150cm</td>
          </tr>
          <tr>
            <td style={styles.tableCell}>Raja</td>
            <td style={styles.tableCell}>24</td>
            <td style={styles.tableCell}>4567834589</td>
            <td style={styles.tableCell}>60kg</td>
            <td style={styles.tableCell}>160cm</td>
          </tr>
          <tr>
            <td style={styles.tableCell}>Ravi</td>
            <td style={styles.tableCell}>30</td>
            <td style={styles.tableCell}>786498654</td>
            <td style={styles.tableCell}>80kg</td>
            <td style={styles.tableCell}>167cm</td>
          </tr>
          <tr>
            <td style={styles.tableCell}>Suresh</td>
            <td style={styles.tableCell}>32</td>
            <td style={styles.tableCell}>9867269083</td>
            <td style={styles.tableCell}>95kg</td>
            <td style={styles.tableCell}>163cm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableHeader: {
    backgroundColor: '#f2f2f2',
    color: 'black',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid black',
    borderRight: '1px solid black'
  },
  tableCell: {
    padding: '8px',
    textAlign: 'center',
    borderBottom: '1px solid black',
    borderRight: '1px solid black'
  }
};

export default Table;
