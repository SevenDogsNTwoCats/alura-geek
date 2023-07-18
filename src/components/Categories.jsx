import React from 'react'

const Categories = ({ title, childComponent }) => {
    return <section className="categories-container   " id={title}>
            <h2 className="section-title">{title}</h2>
        <div className="section-product-container section">
            {childComponent}
        </div>
    </section>

}

export default Categories