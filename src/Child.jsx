import React from 'react'
import ChildrenComponent from './ChildrenComponent'

const Child = ({ placeholder }) => {
    return (
        <div>
            <ChildrenComponent placeholder={placeholder} />
        </div>
    )
}

export default Child