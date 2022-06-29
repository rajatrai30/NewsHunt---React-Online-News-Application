import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export default class News extends Component {
    articles = []

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f3722421a64c4cef8914a30535696da3&page=1"
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles})


    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h2>NewsHunt - Get Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                <button type="button" class="btn btn-dark">&laquo; Previous</button>
                <button type="button" class="btn btn-dark">Next &raquo;</button>

                </div>
            </div>
        )
    }
}
