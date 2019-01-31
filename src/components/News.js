import React, { Component } from 'react'
import { fetchNews } from '../actions/news';
import { connect } from 'react-redux';
import moment from 'moment';

export class News extends Component {
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNews('abc-news'))
  }

  render() {
    const { news } = this.props;
    console.log(news);
    let newsJSX = news.map((article, i) => {
      const { 
        author, 
        content, 
        description, 
        publishedAt, 
        title, 
        url, 
        urlToImage 
      } = article;
      
      return(
        <li key={`item-${i}`}>
          <img style={{maxHeight: '400px'}}src={urlToImage} alt={title}></img>
          <div className="info">
            <h3><a href={url}>{title}</a></h3>
            <span>{`${moment(publishedAt).format("MMM Do YYYY")} - ${author}`}</span>
            <p style={{margin:'2em', padding:'20px', borderTop:'solid 1px black', borderBottom:'solid 1px black'}}>{description}</p>
            <p style={{margin:'2em', padding:'20px', borderTop:'solid 1px black', borderBottom:'solid 1px black'}}>{content.split('[')[0]}</p>
          </div>
        </li>
      )
    });
    return (
      <div>
        <h2>This page utilizing News APIs</h2>
        <section className="news-articles">
          <ul className="article-list">
            {newsJSX}
          </ul>          
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news.news,
})

export default connect(mapStateToProps)(News)
