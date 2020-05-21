import React, {Component ,useState } from 'react';
import { Helmet } from 'react-helmet';

  export default function DataTable(props){

    
const items =props.records && props.records.data.map((row, i) => {
  return  <tr key={i}><td>{row.custname}</td><td>{row.custemailaddress}</td></tr>
   })

    return (
      <div className="box">
        <Helmet>

        <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
        <script src="https://adminlte.io/themes/AdminLTE/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>

        <link rel="stylesheet" href="../src/css/dt.css"/>
        <script src="../src/js/dt.js"></script>
        
        </Helmet>
        <div className="box-header">
        </div>
        <div className="box-body">

        <table id="example1" className="table table-bordered table-striped fixed_header">
            <thead>
              <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
              </thead>
            <tbody>
              {items}
              <tr>
                <td>Trident</td>
                <td>Internet Explorer 5.0
                </td>
                <td>Win 95+</td>
                <td>5</td>
                <td>C</td>
              </tr>
              <tr>
                <td>Trident</td>
                <td>Internet Explorer 5.5
                </td>
                <td>Win 95+</td>
                <td>5.5</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Trident</td>
                <td>Internet Explorer 6
                </td>
                <td>Win 98+</td>
                <td>6</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Trident</td>
                <td>Internet Explorer 7</td>
                <td>Win XP SP2+</td>
                <td>7</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Trident</td>
                <td>AOL browser (AOL desktop)</td>
                <td>Win XP</td>
                <td>6</td>
                <td>A</td>
              </tr>
        
            </tbody>
            <tfoot>
              <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
            </tfoot>
          </table> 

        </div>
      </div>
    );
  
}