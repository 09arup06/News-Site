import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class news extends Component{ 
    static defaultProps={
        pageSize: 10,
        country: "in",
        category: "general",
        
    }
    static propTypes={
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize:PropTypes.number,
       
    }
    constructor(props){  
        super(props);
        const proxyUrl = "https://cors-anywhere.herokuapp.com/"
        this.url=`${proxyUrl}https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b48ce8e951843c68510b78cd29716d9&pagesize=${this.props.pageSize}`
        this.state={
           articles:[],
           loading:false,
           page:1,           
        }
    }
    
    async componentDidMount(){
        //this.setState({
        //    loading:true
        //})
        //let data = await fetch(this.url)
        //let parsedData = await data.json()
        //this.setState({articles:parsedData.articles,
        //    totalResults:parsedData.totalResults,
        //    loading:false,
        //    
        //})
    
        
        this.updatepage()
    }
        
    async updatepage(pgn){
        news.url1=this.url+`&page=${pgn}`
        this.setState({
            loading:true
        })
        let data = await fetch(news.url1)
        let parsedData = await data.json()
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false,
            
        })//
        
    }
    nextpage= async ()=>{
        this.setState({
            page :this.state.page+1
        })
        console.log(this.state.page)

        this.updatepage(this.state.page+1);
          // let pagen = this.state.page+1;
          // news.url1=this.url+`&page=${pagen}`
          // this.setState({
          //     loading:true
          // })
          // let data = await fetch(news.url1)
          // let parsedData = await data.json()
          // this.setState({
          //     page :this.state.page +1, 
          //     articles:parsedData.articles,
          //     loading:false
        //})}

    }

    prevpage = async()=>{
        this.setState({
            page:this.state.page-1
        })
        console.log(this.state.page)
        this.updatepage(this.state.page-1);

        //let pagep = this.state.page -1;
        //news.url2=this.url+`&page=${pagep}`
        //this.setState({
        //    loading:true
        //})
        //let data = await fetch(news.url2)
        //let parsedData = await data.json()
        //this.setState({
        //    articles:parsedData.articles,
        //    page: this.state.page -1,
        //    loading:false
        //})
    }
    render() {
        return (

            <div className="container my-3 ">
                <h1 className='text-center'>Ebar Khobor -Top Headlines from India</h1>
                {this.state.loading && <Spinner/>}
                <div className="row" >
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,45):"Click on Read More to see"} description={element.description?element.description.slice(0,90):" "}imgurl={element.urlToImage?element.urlToImage:"https://c8.alamy.com/comp/CTG496/breaking-news-daily-newspaper-headline-CTG496.jpg"} newsurl={element.url} author={element.author?element.author:element.source.name} date={element.publishedAt} source={element.source.name}/>
                    </div>
                    })}
                </div>
                <div className='container d-flex justify-content-around'>
                <button type="button" className="btn btn-dark btn-sm " disabled={this.state.page -1 <= 1} onClick={this.prevpage}>&larr; Previous Page</button>
                <button type="button" className="btn btn-dark btn-sm " disabled={this.state.page +1> Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextpage}>Next Page &rarr;</button>
                <div style={{color:"red"}}>Page Number: {this.state.page}</div></div>
            </div>

        )
    }
}



export default news
