import React, { Component } from 'react'

export class newsItem extends Component {
  render() {
    let { title, description,imgurl,newsurl,author,date,source} = this.props;
    return (

      <div >
        <div className="card-deck my-4">
  <div className="card">
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger text-dark"style={{left:'80%',zIndex:'1'}}> {source}</span>
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
}

export default newsItem
