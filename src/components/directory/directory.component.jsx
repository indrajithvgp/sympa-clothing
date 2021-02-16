import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {selectDirectorySections} from '../../redux/directory/directory.selectors.js'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {DirectoryContainer} from './directory.styles'

const Directory = ({sections})=>{
        console.log(sections)
        return(
            <DirectoryContainer>
            {
                sections.map(({id, ...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
            
            </DirectoryContainer>

        )
}

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
