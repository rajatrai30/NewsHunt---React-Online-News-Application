import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);



    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const UpdateNews = async () => {
        props.setProgress(10)
        const url =
            `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey="f3722421a64c4cef8914a30535696da3"&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsHunt`;
        UpdateNews();
    }, [])

    // handlepreClick = async () => {}
    //     setState({ page:state.page - 1 });
    //     UpdateNews();
    // }

    // handlenexClick = async () => {
    //     setState({ page: state.page + 1 });
    //     UpdateNews();
    // }

    const fetchMoreData = async () => {
        const url =
            `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
    }

    return (
        <>
            <h2 className="text-center" style={{ margin: '35px 0px', 'marginTop': '90px', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                NewsHunt - Top {capitalizeFirstLetter(props.category)} Headlines
            </h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={on" className="btn btn-dark" onClick={.handlepreClick}>&larr; Previous</button>
                    <button disabled={state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={.handlenexClick}>Next &rarr;</button>
                </div> */}
        </>
    )
}

News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 6,
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}
export default News;
