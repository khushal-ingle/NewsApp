import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles:[],
            loading: false
        }
    }

    async componentDidMount(){
       let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7b2559184a6848199848a561d03a5da3";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles:parseData.articles})
    }


    render() {
        let DefaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ef3ZjmT6jv4izN-lcYsnDyx8ge-5_1pejA&usqp=CAU";
        return (
            <>
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {

                     return <div className='col-md-4' key={element.url}>
                            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}  imageUrl={element.urlToImage?element.urlToImage:DefaultImg}  newsUrl={element.url} />
                             </div>
                    })}

                </div>
            </div>
            </>
        )
    }
}

export default News