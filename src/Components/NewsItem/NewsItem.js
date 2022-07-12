import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source, mode} = props
    return (
        <div className='my-3'>
            <div className="card">
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '-12px'
                }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://images.indianexpress.com/2022/06/InZone.jpg" : imageUrl} className="card-img-top" alt="" />
                <div className="card-body" style={{ backgroundColor: {mode} === 'dark' ? 'rgb(20, 81, 131)' : 'white', color: {mode} === 'dark' ? 'white' : '#042743' }}>
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-danger">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem