const INITIAL_STATE = {

    sections:[{
        title:'HATS',
        imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
        id:1,
        linkUrl:'hats'
    },{
        title:'JACKETS',
        imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        linkUrl:''
    },{
        title:'SNEAKERS',
        imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3,
        linkUrl:''
    },{
        title:'WOMENS',
        imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
        id:4,
        size:'large',
        linkUrl:''
    },
    {
        title:'MENS',
        imageUrl:'https://i.ibb.co/R70vBrQ/mens.png',
        id:5,
        size:'large',
        linkUrl:''
    }] 
}

const directoryReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer;

