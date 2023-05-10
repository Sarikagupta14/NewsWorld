import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


const updateNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3db0942e6cac41d7b89912cd7cd8586e&page=${page}&pageSize=${props.pageSize}`;
  setLoading({ loading: true })
  let data = await fetch(url)
  let res = await data.json()

  setArticles(res.articles)
  setTotalResults(res.totalResults)
  setLoading(false)
}
useEffect(() => {
  updateNews();
}, [])

const handlePrevClick = async () => {
  setPage( page - 1 );
  updateNews();
}

const handleNextClick = async () => {
  setPage(page + 1 );
  updateNews()

}
const fetchMoreData = async () => {
  setPage(page + 1 )
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3db0942e6cac41d7b89912cd7cd8586e&page=${page+1}&pageSize=${props.pageSize}`;
  //  this.setState({loading: true})
  setPage(page+1)
  let data = await fetch(url);
  let res = await data.json()
  setArticles (articles.concat(res.articles))
  setTotalResults(res.totalResults)
    //  loading: false,
};

return (
  <div className='container my-3'>
    <h1 className='text-center' style={{margin: '35px 0px',
  marginTop: '90px'}}>NewsWorld- Top Headlines</h1>
    {loading && <Spinner />}

    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}

      hasMore={articles.length !== totalResults}
      loader={<Spinner />}

    >
      <div className='container'>
        <div className='row'>
          {articles?.map((element) => {
            console.log(element?.title)
            return <div className='col-md-4' key={element?.url}>
              <NewsItem title={element?.title ? element?.title.slice(0, 45) : ""} description={element?.description ? element?.description.slice(0, 88) : ""}
                imageUrl={element?.urlToImage} newsUrl={element?.url} author={element?.author} date={element?.publishedAt}
                source={element?.source.name} />
            </div>

          })}
        </div>
      </div>
    </InfiniteScroll>

  </div>
  
)

      
        }  
        
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number
}

export default News
