import { Component } from "react";

export default class HeaderComponent extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">    {/*className="navbar navbar-expand-md navbar-dark bg-dark"*/}
                        <span className="navbar-brand">Customization Of T-Shirt</span>
                        
                    </nav>
                </header>

            </div>
        )
    }
}