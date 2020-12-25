
import  a from './ProfileInfo.module.css'
import React from "react"
class ProfileStatus extends React.Component {
  state = {
      editMode: false
  }
  activateEdiMode = () => {
     this.setState({
editMode: true
     })
  } 
     deactivateEdiMode = () => {
        this.setState({
   editMode: false
        })
    
  
  }

    render(){
  return (
      <div> {!this.state.editMode &&
  <div>
 <span onDoubleClick={ this.activateEdiMode}>{this.props.status}</span>
  </div>}
  {this.state.editMode &&
  <div>
 <input autoFocus onBlur={this.deactivateEdiMode}  value ={this.props.status} />
  </div>}
  </div>

)
}

}


export default ProfileStatus;