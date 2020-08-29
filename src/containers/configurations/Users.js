import React from 'react';
import MaterialTable from 'material-table';

export default function Users() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'No.', field: 'number' },
      { title: 'User Id', field: 'userid' },
      { title: 'Enabled', field: 'enabled' },
      { title: 'Object', field: 'obj'},
      { title: 'Rule', field: 'rul'},
      { title: 'User', field: 'usr'},
    ],
    data: [
      { number: 1, userid: 'admin', enabled: 'ture', obj: 'true', rul:'ture', usr:'true' },
      { number: 2, userid: 'user1', enabled: 'ture', obj: 'true', rul:'ture', usr:'false' },
      { number: 3, userid: 'user2', enabled: 'ture', obj: 'true', rul:'ture', usr:'false' },
      { number: 4, userid: 'user3', enabled: 'ture', obj: 'true', rul:'ture', usr:'true' },
      { number: 5, userid: 'user4', enabled: 'ture', obj: 'false', rul:'false', usr:'false' },
      { number: 6, userid: 'user5', enabled: 'false', obj: 'false', rul:'false', usr:'false' },
    ],
  });

  return (
    <MaterialTable
      title="USERS"
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