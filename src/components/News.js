import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(){
  super();
    this.state={
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
  };
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);

      let parseddata= await data.json();
      //console.log(parseddata);
      this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults})

    };
    fetchMoreData = async() => {
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({page:this.state.page + 1});
      let data= await fetch(url);
      let parseddata= await data.json();
      this.setState({articles:this.state.articles.concat(parseddata.articles),totalResults:parseddata.totalResults})
    };

    // handlePrevClick= async ()=>{

    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //   let data= await fetch(url);
    //   let parseddata= await data.json();
    //   this.setState({
    //     page:this.state.page - 1,
    //     articles:parseddata.articles
    //   }
    //   )
    // };
    // handleNextClick= async ()=>{
    //   if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    //   }else{
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   let data= await fetch(url);
    //   let parseddata= await data.json();
    //   this.setState({
    //     page:this.state.page + 1,
    //     articles:parseddata.articles
    //   }
    //   )
    // }
    // };

  render() {

    return (
      <div className='container'style={{marginTop:'90px'}}>
        <h1 className='text-center' style={{marginTop:'90px'}}>News Monkey - Top {this.props.category} Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className='container'>
          <div className='row my-5'>
            {this.state.articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage ? element.urlToImage : "https://imgs.search.brave.com/vweN8lLR0FnGhEDrl3nUvUSYcI9eAaOUJZjPJYbqQP4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/YzNkQVJZQkk0cDY1/Q1ZvYVVqcmh3SGFI/YSZwaWQ9QXBp"}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              )
            })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div> */}
      </div>
    )
  }
}

export default News
