import React, { Component } from 'react'
import { withContent } from '../../Context/ContentProvider'
class Nav extends Component{
    
    render(){
        return(
            <div className="nav-container">
                <div className="navigation">
                {
                    this.props.things.map(thing => (
                        <div key={thing.id}>
                            <a href={`#${thing.id}`}>{thing.headline}</a>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default withContent(Nav)