import React from "react";
class MyComponent extends React.Component{
    /**
     * JSX => tra ve mot khoi HTML
     * Fragment
     */
    state ={
        firstName:"",
        lastName:"",
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handelChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(' >>> check data input: ', this.state)
    }
    render(){
        console.log('>>> call render: ', this.state)
        return(
        <>
            <form>
                <label htmlFor="fname">First Name</label><br/>  
                    
                <input 
                    type="text" 
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                />
                <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastName}
                    onChange={(event) => this.handelChangeLastName(event)}
                />
                    <br/>< br/>
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
            </form>

        </>
        )
    }
}
    


export default MyComponent;