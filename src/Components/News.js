import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'

export default class News extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }


constructor()
{
    super();
    console.log("Hello I am a constructor from News component");
    this.state ={//state aap tab istemal karte ho jab voh dynamically change ho varna tho props use karo 
        articles:[],
        loading: false,
        page:1
    }
}
async componentDidMount()
{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c596bf19f37f4be89d8de676bbb9a09a&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({loading:false});
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
}
handleNextClick= async ()=>
{
    if (this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)) {
        
    }
    else
    {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c596bf19f37f4be89d8de676bbb9a09a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()  
        this.setState({loading:false});  
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles
        })
    }

}
handlePrevClick= async ()=>
{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c596bf19f37f4be89d8de676bbb9a09a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()  
    this.setState({loading:false});  
    this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
    })
}

  render() {
    return (
      <div>
        <div className="container my-3">
            <h1 className="text-center">NewsMonkey - Top Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key = {element.url} >
                    <NewsItem title={(element.title?element.title.slice(0,40):"") + "..."} description={(element.description?element.description.slice(0,88):"") + "..."}  imageUrl = {element.urlToImage}  newsUrl={element.url}/>
                    </div>                    
                })}

            </div>

        </div>
        <div className="container d-flex justify-content-between">
            <button disabled ={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
