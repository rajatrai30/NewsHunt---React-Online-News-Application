
import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import Spinner from '../Spinner/Spinner';

export default class News extends Component {
    articles = []

    async componentDidMount() {
        let url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f3722421a64c4cef8914a30535696da3&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ 
            articles: parseData.articles, 
            totalResults: parseData.totalResults,
            loading:false
        })


    }

    handlepreClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f3722421a64c4cef8914a30535696da3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading:false
        })
    }

    handlenexClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=f3722421a64c4cef8914a30535696da3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({loading:true})
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading:false
            })

        }
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h1 className="text-center">
                    NewsHunt - Get Top Headlines
                </h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenexClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}
