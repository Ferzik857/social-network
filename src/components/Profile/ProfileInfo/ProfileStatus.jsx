
import  a from './ProfileInfo.module.css'
import React from "react"
class ProfileStatus extends React.Component {
  state = {
      editMode: false,
      status:this.props.status
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
   this.props.updateStatus(this.state.status); 
  
  }
  onStasusChange = (e) => {
this.setState({
    status:e.currentTarget.value
})

  }

    render(){
  return (
      <div> {!this.state.editMode &&
  <div>
 <span onDoubleClick={ this.activateEdiMode}>{this.props.status || "-----"}</span>
  </div>}
  {this.state.editMode &&
  <div>
 <input onChange={this.onStasusChange} autoFocus onBlur={this.deactivateEdiMode}  value ={this.state.status} />
  </div>}
  </div>

)
}

}


export default ProfileStatus;