import React from 'react'

const Stars = ({rating}) => {
    const stars = [] ;
    for(let i = 1; i <=5; i++){
    if (i <=rating){
        stars.push(<i class="fas fa-star text-warning"></i>)
    }
    else{
        stars.push(<i class="far fa-star text-warning"></i>)
    }
    }
    return (
        <>
    {stars}
        </>
    )
}

export default Stars
