import React, { Component } from 'react';
import apiCaller from './../utils/apiCaller';

class Pagination extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let activePage = this.props.activePage
        let itemsCountPerPage = this.props.itemsCountPerPage
        let totalItemsCount = this.props.totalItemsCount

        let oddPage = (totalItemsCount%itemsCountPerPage > 0) ? 1 : 0

        let  numberPages = totalItemsCount/itemsCountPerPage + oddPage
        let pageLi = ""
        const items = []

        for (let i = 1; i <= numberPages; i++) {
            if(i != activePage) {
                pageLi = <li className="page-item"><a className="page-link" onClick = {() => this.props.handlePageChange(i)}>{i}</a></li>
            }else{
                pageLi = <li className="page-item active"><a className="page-link" onClick = {() => this.props.handlePageChange(i)}>{i}</a></li>
            }
            items.push(pageLi)
        }

        return (
            <div>
                <ul className="pagination pull-right">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  {items}
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </div>
        );
    }
}

export default Pagination;