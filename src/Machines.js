import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {withRouter} from 'react-router-dom';

const columns = [{
  dataField: 'model',
  text: 'Modelo'
}, {
  dataField: 'plate',
  text: 'Placa'
}, {
  dataField: 'serialNumber',
  text: 'Série'
}
];

const products = [
{model: 'H50FT', plate: '1774H', serialNumber: 'A977Y11774H'},
{model: 'H50FT', plate: '1776H', serialNumber: 'A977Y11776H'},
{model: 'H50FT', plate: '2769J', serialNumber: 'A977Y12769J'},
{model: 'H50FT', plate: '3551J', serialNumber: 'A977Y13551J'},
{model: 'H50FT', plate: '3552J', serialNumber: 'A977Y13552J'},
{model: 'H50FT', plate: '3554J', serialNumber: 'A977Y13554J'},
{model: 'H50FT', plate: '3556J', serialNumber: 'A977Y13556J'}
];

const AddMachine = () => <button type="button"
                            className="btn btn-primary"
                            style={{float:'right', marginBottom: '10px'}}>
                            Adicionar
                         </button>

class Machines extends Component {
  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) =>
        {
          this.props.history.push({pathname: '/' + row.serialNumber});
        }
    };
    return (
        <div className="container">
            <h4 style={{ borderRadius: '0.25em', textAlign: 'center', padding: '0.5em' }}>Máquinas</h4>
            <AddMachine/>
            <BootstrapTable keyField='serialNumber'
                            data={ products }
                            columns={ columns }
                            striped
                            hover
                            condensed
                            rowEvents={ rowEvents }
            />
        </div>
    )
  }
}

export default withRouter(Machines);