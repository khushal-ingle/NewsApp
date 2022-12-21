import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'



export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLatter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult:0

        }
        document.title = `${this.capitalizeFirstLatter(this.props.category)} - RozKiCharcha`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b2559184a6848199848a561d03a5da3&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResult: parseData.totalResults,
            loading: false,
         
        })
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b2559184a6848199848a561d03a5da3&page=1&pagesize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({
        //     articles: parseData.articles,
        //     totalResult: parseData.totalResults,
        //     loading: false
        // })

        this.updateNews();
    }

    handlePrevClick = async () => {

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b2559184a6848199848a561d03a5da3&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({ loading: true });
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseData.articles,
        //     loading: false
        // })


        this.setState({ page: this.state.page - 1 });
        this.updateNews();

    }

    handleNextClick = async () => {

        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {
        //     console.log("uhuasbsh");

        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b2559184a6848199848a561d03a5da3&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parseData = await data.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parseData.articles,
        //         loading: false
        //     })
        // }

        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    fetchMoreData = () => {
       this.setState({page:this.state.page + 1})
       this.updateNews()
      };


    render() {
        let DefaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ef3ZjmT6jv4izN-lcYsnDyx8ge-5_1pejA&usqp=CAU";
        return (
            <>
                <div className='container my-3'>
                    <h2 className='text-center my-3'>RozKiCharcha - Top  {this.capitalizeFirstLatter(this.props.category)} Headlines </h2>
                    {this.state.loading && <Spinner />}

                        <div className='row'>
                            {this.state.articles.map((element) => {

                                return <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : DefaultImg} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}

                        </div>
                   
                       
                </div>
            </>
        )
    }
}

export default News