import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [value, setvalue] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalCount, settotalCount] = useState(0)
    const options = {
        method: 'GET',
        headers: {
           'X-RapidAPI-Key': `${props.apikey}`,
            'X-RapidAPI-Host': `${props.apihost}`
        }
    };
  
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    useEffect(() => {
        document.title = `Ebar Khobor- ${capitalizeFirstLetter(props.category)}`
        updatepage(page);
        // eslint-disable-next-line
    },[])
    
    const fetchMoreData = async () => {
        setpage(page+1)
        let pgn = page+1;
        const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${props.category}&pageNumber=${pgn}&pageSize=${props.pageSize}&autoCorrect=true&safeSearch=false&fromPublishedDate=null&toPublishedDate=null`
        setloading(true)
        let data = await fetch(url, options)
        let parsedData = await data.json()
        setvalue(value.concat(parsedData.value))
        settotalCount(parsedData.totalCount)
        setloading(false)
    }
    const updatepage = async (pgn) => {
        props.setProgress(10);
        setloading(true)
        let data = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${props.category}&pageNumber=${pgn}&pageSize=${props.pageSize}&autoCorrect=true&safeSearch=false&fromPublishedDate=null&toPublishedDate=null`,options)
        let parsedData = await data.json()
        props.setProgress(60)
        setvalue(parsedData.value)
        settotalCount(parsedData.totalCount)
        setloading(false)
        props.setProgress(100)
        console.log(`${props.apikey}`)
    }
     return (
            <>
                <h1 className={`text-center fw-bold text-${props.mode === 'light' ? ' ' : 'white'}`}>Ebar Khobor - Top {capitalizeFirstLetter(props.category)} Headlines from World</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={value.length}
                    next={fetchMoreData}
                    hasMore={value.length !== totalCount}
                    loader={<Spinner />}>
                    <div className="container">

                        <div className="row">
                            {value.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : "Click on Read More to see"} description={element.description ? element.description.slice(0, 90) : " "} imgurl={element.image.url ? element.image.url : "https://c8.alamy.com/comp/CTG496/breaking-news-daily-newspaper-headline-CTG496.jpg"} newsurl={element.url} author={element.author ? element.author : element.provider.name} date={element.datePublished} source={element.provider.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>

        )
    }

News.defaultProps = {
    pageSize: 10,
    country: "in",
    category: "general",
    mode: "light",
    progress:0
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    mode: PropTypes.string,
    progress:PropTypes.number
}



export default News
