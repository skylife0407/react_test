import React from 'react';
import MaterialTable from 'material-table';

export default function GroupTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'No.', field: 'number' },
      { title: 'Name', field: 'name' },
      { title: 'Description', field: 'dsc'},
    ],
    data: [
      { number: 1, name: 'ICMP', des: '' },
      { number: 2, name: 'FTP', des: '' },
      { number: 3, name: 'BRUTE_FORCE', des: '' },
      { number: 4, name: 'SCAN', des: '' },
    ],
  });

  return (
    <MaterialTable
      title="GROUP TABLE"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}