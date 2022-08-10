import React,{Component} from 'react';
//import React, { useEffect, useState, Component } from 'react'
//import { useForm } from 'react-hook-form'
import axios from 'axios';


export default class inscribirse extends Component {

    state = {
        users: [],
        username:''
    }


    async componentDidMount() {
        this.getUsers();
        console.log(this.state.users)
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    

onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
        username: this.state.username
    })
    this.setState({username: ''});
    this.getUsers();
    
}

deleteUser = async (id) => {
    await axios.delete('http://localhost:4000/api/users/' + id)
    this.getUsers();
}



    render() {
        return (
            <div className="row">
                <b>LOS CLIENTES SE PUEDEN ELIMINAR HACIENDO DOBLE CLICK SOBRE LOS MISMOS</b>
                <div className="container">
                    <div className="card card-body">
                        <h3><b>CLIENTES</b></h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group" >

                                <label>Nombre y Apellido</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                GUARDAR
                            </button>
                        </form>
                    </div>
                </div>
                <div className="cold-md-8">
                    <ul className="container p-4 list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" key={user._id}onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </li> )
                            )
                                
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}


