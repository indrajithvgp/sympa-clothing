import React from 'react'
import './collection.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selectors'

function CollectionPage({collection}) {
    const {title, items} = collection
    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {items.map(item=>(<CollectionItem key={item.id} item={item}/>))}
            </div>
        </div>
    )   
}

const mapStateToProps = (state, ownProps)=>{
    // console.log(ownProps)
    // console.log(state.shop.collections)
    // const found = state.shop.collections.find(collection => collection.routeName === ownProps.match.params.collectionId)
    return{
    collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage)
