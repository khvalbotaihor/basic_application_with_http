import React, {Component} from 'react'


const asyncComponent = (importcomponent) =>{
    return class extends Component{

        state={
            component: null
        }
    }
}

export default asyncComponent;