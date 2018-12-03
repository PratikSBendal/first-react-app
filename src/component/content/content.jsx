import React, { Component } from 'react';

class Content extends Component {
    state = { 
        
     }
    constructor()
    {
        super()
        this.state = {
            error: null,
            isLoaded: false,
            data : [],
            
        }
    }
    componentDidMount()
    {
        fetch('https://reqres.in/api/users?page=2')
        .then(res => {
            return res.json();        
        })
        .then(
            (result)=>{
                this.setState({
                    isLoaded: true,
                    data:result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        )   
    }
    render() { 
        const {error,isLoaded,data} = this.state;
        if(error)
        {
            return <div>Error:{error.message} </div>
        }else if(!isLoaded)
        {
            return <div>Loading...</div>
        }else
        {
            return(
                <div className="content">
                 {/* <p>
                id: {this.state.data[0].id} <br/>
                First_Name: {this.state.data[0].first_name}<br/>
                Last_Name: {this.state.data[0].last_name}<br/>
                Pic:<img src={this.state.data[0].avatar}/>
                </p> */}
                
                {/* {this.props.array.toDo} */}
               
                <table border='1' className="mdl-data-table mdl-js-data-table mdl-shadow--4dp" style={{zIndex:"-1"}}>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Picture
                        </th>
                    </tr>
                        {data.map((tabledata,index)=>(
                            <tr>
                             <td key={index}>{tabledata.id}</td>
                             <td key={index}>{tabledata.first_name}</td>
                             <td key={index}>{tabledata.last_name}</td>
                             <td key={index}><img src={tabledata.avatar}/></td>
                            </tr>  
                        ))}
                </table>
                <input type="text" id="input"/>
                <input type="button" value="Add" onClick={()=>this.props.arrayupdate(document.getElementById('input').value)}/>
                <input type="button" value="Remove" onClick={()=>this.props.removearray()}/>
                <ul>
                    {this.props.array.toDo.map((todo,index)=>(
                        <li key={index} >
                            {todo}  <input type="button" value="Remove Particular" onClick={()=>this.props.removeparticular(index)}/>
                        </li>
                    ))}
               </ul> 
            </div>
                
            )
        }
        
    }
 
}
 
export default Content;