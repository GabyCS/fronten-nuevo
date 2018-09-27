import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import { 
    setName,
    setImagen,  
} from '../../actions/pruebasActions';

class ComponentTestRedux extends Component {
	constructor(props){
        super(props);
        this.convertirPrinceso=this.convertirPrinceso.bind(this);
    }
    
    convertirPrinceso(){
        this.props.actions.setName('Martin el princess');
        this.props.actions.setImagen('https://scontent.fgdl1-2.fna.fbcdn.net/v/t31.0-8/18156702_10212862209731245_264738454056564540_o.jpg?_nc_cat=108&oh=83f455927eac37869490aca2ca5b58b8&oe=5C28E5A4');
    }

	render(){
		return(
			<div>
                <h1>{this.props.pruebaReducer.nombre}</h1>
                <img src={this.props.pruebaReducer.url}/>
                <p>
				<a   className="btn-princeso" onClick={()=>this.convertirPrinceso()} > Ver un princeso</a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTestRedux);
