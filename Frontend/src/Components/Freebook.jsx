// eslint-disable-next-line no-unused-vars
import React from 'react'
import list from '../../public/list.json'

const Freebook = () => {
    const filterData = list.filter((data) => data.category === "Free")
    console.log(filterData);
    return (
        <div>

        </div>
    )
}

export default Freebook
