import React, {Component} from 'react'
import './directory.styles.scss'
import {MenuItem} from '../menu-item/menu-item.component'

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state={
            sections:[{
                title:'HATS',
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                id:1
            },{
                title:'JACKETS',
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2
            },{
                title:'SNEAKERS',
                imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                id:3
            },{
                title:'WOMENS',
                imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                id:4,
                size:'large'
            },
            {
                title:'MENS',
                imageUrl:'https://i.ibb.co/R70vBrQ/mens.png',
                id:5,
                size:'large'
            }
        ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
            {
                this.state.sections.map(({title, imageUrl, id, size}) =>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
            
            </div>

        )
    }
}

export default Directory;
