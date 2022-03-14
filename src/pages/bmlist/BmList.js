/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./BmList.css"
import "bootstrap/dist/css/bootstrap.min.css"


function BmList(props) {



    return (
        <div className='bmlist'>

            
        <div>
           <p id="bmheading">Batch Managers</p>
<div className="container-lg">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><p id="subheading">Batch Managers <b id="subheading">Details</b></p></div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Batch</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons">&#xE03B;</i></a>
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
</div>     
       
       </div>
       </div>
    );
}

export default BmList;
