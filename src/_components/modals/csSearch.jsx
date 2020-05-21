import React,{useState} from 'react';
import DataTable from '../../_components/DataTable';
import { connect } from 'react-redux';
import { csSearch } from '../../_actions';
import { useDispatch, useSelector } from "react-redux";
import {useForm} from 'react-hook-form';

const CsSrchModal = ({ handleClose, show, children}) => {

const CSSrch = useSelector(state => state.customers.CSSrch);
const dispatch = useDispatch();

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => {

    dispatch(csSearch(data))

  }; 

    return (
      <div className={showHideClassName} >
        <section className="modal-main" >
          {children}
          <div className="col-md-12">

          <form className="form-horizontal" action=" " method="post" id="contact_form"  onSubmit={handleSubmit(onSubmit)} >
              <fieldset>

            <div className="form-group col-md-6" >
                   <div className="form-group">
                    <label className="col-md-2 control-label">First Name</label>
                    <div className="col-md-8 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input name='firstName' placeholder="First Name" className="form-control" type="text"   ref={register()} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="col-md-2 control-label" >Last Name</label>
                    <div className="col-md-8 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input name="last_name" placeholder="Last Name" className="form-control" type="text"   ref={register()}/>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label">cst Id</label>
                    <div className="col-md-7 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input name="id" placeholder="id" className="form-control" type="text"   ref={register()}/>
                      </div>
                    </div>
                  </div>
                  

                </div>
                  
            <div className=" form-group col-md-6" >
                  
                  <div className="form-group">
                    <label className="col-md-2 control-label">Alias</label>
                    <div className="col-md-8 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input name="alias" placeholder="alias" className="form-control" type="text"   ref={register()}/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="col-md-2 control-label">Phone Number</label>
                    <div className="col-md-8 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input name="phone" placeholder="phone" className="form-control" type="text"   ref={register()}/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="col-md-4 control-label">cnt Last Name</label>
                    <div className="col-md-6 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input name="cntLastName" placeholder="Contact Last Name" className="form-control" type="text"   ref={register()}/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <div className="col-md-8 col-md-offset-6 inputGroupContainer">
                      <div className="input-group">
                        <input name="CsSearch" className="form-control" type="submit" />
                      </div>
                    </div>
                  </div>

                  </div>
                  
              </fieldset>
            
            </form>
            </div>

            <div className="col-md-12">
            <DataTable records={CSSrch}/>
            </div>
          
        </section>
      </div>
    );
};

export default CsSrchModal  ;

