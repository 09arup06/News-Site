import React from 'react'

const NewsItem=(props)=> {
    let { title, description,imgurl,newsurl,author,date,source} = props;
    return (
      <div >
        <div className="card-deck my-4">
  <div className="card">

    <div style={{right:'0',justifyContent:'flex-end',display:'flex',position:'absolute'}}>
    <span className="badge rounded-pill bg-danger text-dark"> {source}</span>
    </div>
 
    <img className="card-img-top" src={imgurl} alt="Card img cap"/>
    <div className="card-body">
    
      <h5 className="card-title">{title}...</h5>
      <p className="card-text">{description}...</p>
      <a href={newsurl} target="_blank"  rel="noreferrer"  className="btn btn-sm btn-primary">Read More</a>
      <p className="card-text"><small className="text-muted">Source: {author} on {new Date(date).toLocaleDateString()} </small></p>
      
    </div>
  </div>

</div>
      </div>
    ) 
}

export default NewsItem
