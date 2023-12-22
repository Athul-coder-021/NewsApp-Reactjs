import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class NewsItem extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;// this is called destructuring of props jiske sahayta se aap props se kuch bhi nikal sakte hai.
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl?imageUrl:"https://images.indianexpress.com/2023/12/galaxy-unpacked-2024.jpg"} className="card-img-top" alt="Image not found"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target = "_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}
