import React from 'react'

const  NewsItem = (props) => {
let { title,description, imageUrl, newsUrl, author,date,source} = props;
        return (
            <div className='my-3'>
                <div className="card">
                <span className='position-absolute top-0 start-100
                            translate-middle badge rounded-pill bg-danger' style={{left: '90%',zIndex: 1}}>{source}</span>
                    <img src={!imageUrl?"https://s.yimg.com/ny/api/res/1.2/_bjGFkNdfJhRQ_caUYNJpA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/163596d0-eabe-11ed-9fbf-f925a64d308c":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...
                            <span className='badge rounded-pill bg-success'>New</span>
                           
                            </h5>
                            <p className="card-text">{description}...</p>
                            <p className='card-text'><small className='text-muted'>By {!author? "unknown": author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl}  className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }


export default NewsItem
