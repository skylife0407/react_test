import React from 'react';
import MaterialTable from 'material-table';

export default function IpTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'No.', field: 'number' },
      { title: 'Value Name', field: 'valuename' },
      { title: 'Value', field: 'value' },
      { title: 'Description', field: 'dsc'},
    ],
    data: [
      { number: 1, valuename: 'Trust Zone', value: '192.168.123.123', des: '' },
      { number: 2, valuename: 'DMZ', value: '192.168.123.123', des: '' },
    ],
  });

  return (
    <MaterialTable
      title="IP TABLE"
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