import React, { Component } from 'react'
import axios from 'axios';
import Layout from './Layout';
import InfiniteScroll from 'react-infinite-scroller';

export class ContsctList extends Component {
    constructor(props){
        super(props)
        this.state = {
            contacts: [],
            par: 10,
            page: 1,
            totalPages: null,
            scrolling: false,
    
        }
    }
    componentDidMount() {
        this.loadContacts()
        this.scrollPoint = window.addEventListener('scroll', (event) => {
            this.handleScroll(event)
        })
    }
    handleScroll = (event) => {
        const { page, totalPages, scrolling } = this.state;
        if (scrolling) return
        if (totalPages <= page) return
        const lastLi = document.querySelector('ul.contacts > li:last-child')
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
        const pageOffset = window.pageYOffset + window.innerHeight
        var bottomOffset = 20;
        if (pageOffset > lastLiOffset - bottomOffset) this.loadMore()
    }
    loadContacts = () => {
        const { par, page, contacts } = this.state;
        const Url = `https://newsapi.org/v2/top-headlines?page=${page}&pageSize=${par}&country=in&category=technology&apiKey=Enter the news api key`
        axios.get(Url)
            .then(Response => {
                this.setState({
                    contacts: [...contacts, ...Response.data.articles],
                    scrolling: false,
                    totalPages: Response.data.totalResults
                })

            }).catch(Error => {
                console.log(Error.message);
            })
    }
    loadMore = () => {
        if(this.state.contacts.length === 70){
            this.setState({
                scrolling:false
            })
        }else{
            this.setState(Previous_N => ({
                page: Previous_N.page + 1,
                scrolling: true,
            }), this.loadContacts)
        }
    }
    render() {
        return (
            <InfiniteScroll
                hasMore={this.state.scrolling}
                loader={<div className="loader" key={0}><div className="text-center">
                    <div className="lds-hourglass"></div>
              </div></div>}
            >
                <ul className="contacts list-group">
                {
                    this.state.contacts.map(contact => <li>
                        <Layout {...contact} />
                    </li>)
                }
            </ul>
            </InfiniteScroll>

        )
    }
}

export default ContsctList;
