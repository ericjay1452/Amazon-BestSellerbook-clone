import React from 'react'
import "./IntroHeader.css"

 const IntroHeader= () => {
    return (
        <div>
            <div className="pageHeader position-relative d-block text-light text-center">
                <h1 className='pt-4 pb-2 heading'>Amazon Best Sellers</h1>
                <p className='pb-4'>Our most popular products based on sales. Updated hourly.</p>
            </div>
        </div>
    )
}

export default IntroHeader