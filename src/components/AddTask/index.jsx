import React, { Component } from 'react';
import './style.css';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col } from 'react-bootstrap';
import { 
    setName,
    setImagen,  
} from '../../actions/pruebasActions';

class AddTask extends Component {
	constructor(props){
        super(props);
        this.state={
            name:'',
            timeDefined:'',
            timeMinute:'',
            description:''
        }
        //this.convertirPrinceso=this.convertirPrinceso.bind(this);
    }
    getValidationState(){
        5
    }
    handleChange(event) {
        const value=event.target.value;
        const name=event.target.name;
        this.setState({[name]:value});
        this.setState({cambio:true});
    }

	render(){
		return(
			<div>
                <Form horizontal>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <Col componentClass={ControlLabel} sm={2}>
                        Nombre:
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                className="form-control"
                                type="text"
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                         </Col>
                    </FormGroup>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                    <Col componentClass={ControlLabel} sm={2}>
                       Duracion(minutos):
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                className="form-control"
                                type="text"
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                         </Col>
                    <Col componentClass={ControlLabel} sm={2}>
                       Duracion:
                        </Col>
                        <Col sm={4}>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="30">corta</option>
                            <option value="60">media</option>
                            <option value="120">larga</option>
                        </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                    <Col componentClass={ControlLabel} sm={2}>
                       Descripcion:
                        </Col>
                        <Col  sm={10}>
                        <FormControl componentClass="textarea" placeholder="textarea" />
                        </Col>
                    </FormGroup>



                </Form>
			</div>
		);
	}
}
//con esta funcion se obtinene los datos del reducer no nesesariamente tiene que ser el reducer pueden ser de otros reducers

const mapStateToProps = (state) =>{
  return{
    pruebaReducer: state.pruebasReducer
  }
}


//esta funcion eja utilizar los actios

const mapDispatchToProps = (dispatch)=>{
 return{
    actions:{
        setName: bindActionCreators((name)=>setName(name), dispatch),
        setImagen: bindActionCreators((urlImg)=>setImagen(urlImg), dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
