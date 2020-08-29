import React from 'react';
import MaterialTable from 'material-table';

export default function PortTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'No.', field: 'number' },
      { title: 'Value Name', field: 'valuename' },
      { title: 'Value', field: 'value' },
      { title: 'Description', field: 'dsc'},
    ],
    data: [
      { number: 1, valuename: 'FTP', value: 21, des: '' },
      { number: 2, valuename: 'SSH', value: 22, des: '' },
    ],
  });

  return (
    <MaterialTable
      title="PORT TABLE"
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