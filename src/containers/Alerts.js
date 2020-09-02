import React from 'react';
import MaterialTable from 'material-table';

export default function Alerts() {
  return (
    <MaterialTable
      title="ALERTS"
      columns={[
        { title: 'Eid', field: 'eid', type:"numeric",cellStyle: {width: 1} },
        { title: 'Severity', field: 'serverity',cellStyle: {width: 1} },
        { title: 'Time', field: 'time', type:"date, time", cellStyle: {width: 181} },
        { title: 'Sig_msg', field: 'sig_msg' , type:"string", cellStyle: {width: 1}},
        { title: 'Src_Ip', field: 'src_ip' , type:"string", cellStyle: {width: 1} },
        { title: 'Src_Port', field: 'src_port', type:"numeric",cellStyle: {width: 1}  },
        { title: 'Des_Ip', field: 'des_ip' , type:"string", cellStyle: {width: 1} },
        { title: 'Des_Port', field: 'des_port', type:"numeric",cellStyle: {width: 1}  },
        { title: 'Protocol', field: 'protocol' , type:"string",cellStyle: {width: 1}  },
        { title: 'Payload_Size', field: 'payload_size', type:"numeric",cellStyle: {width: 1}  },
        { title: 'ETC',cellStyle: {width: 1} },
      ]}
      data={[
        {eid:1, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injectionasdfasdfasdfasdfasdfasdf', src_ip:'192.168.111.222', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:2, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:3, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:4, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:5, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.23', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:1, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:2, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:3, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:4, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:5, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.23', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:1, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:2, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:3, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:4, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:5, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.23', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:1, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:2, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:3, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:4, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:5, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.23', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:1, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:2, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:3, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:4, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.22', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:5, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.23', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},
        {eid:5, serverity:'', time:'2020-09-02 17:19:36', sig_msg:'SQL_Injection', src_ip:'192.168.0.23', src_port:12345, des_ip:'192.168.13.240', des_port:80, protocol:'tcp', payload_size:445, etc:''},

      ]}        
      options={{
        search: true
      }}
    />
  )
}
