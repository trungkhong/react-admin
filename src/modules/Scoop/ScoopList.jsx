import React, {Component} from 'react'
import ScoopItem from './../../components/ScoopItem.jsx'
import { getAllScoopsOfUser, actGetAllOfScoops } from "../../actions/scoop.actions";
import { bindActionCreators } from "redux";
import equal from 'fast-deep-equal'
import apiCaller from './../../utils/apiCaller';
import Pagination from "./../../components/Pagination.jsx";

class ScoopList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          activePage: 1,
          filterType: 0,
        }
        this.handlePageChange = this.handlePageChange.bind(this) // communicate with childs
        // this.openAlertModal = this.openAlertModal.bind(this)
    }

    handlePageChange(i) {
      console.log("aaaaa", i)
      this.setState({ activePage: i });
      this.props.getAllScoopsOfUser(i, 0)
      console.log("this.props.listItems", this.props.listItems)
      //handleShowScoops(this.props.listItems)
  }
  

    render() {
      //const { listItems, totalRows } = this.props;
      const {scoops, totalRows} = this.props;
      // console.log("scoops", listItem);
      //  var scoopsList = scoops.scoops.data

      // var listItems = ""
      // if(scoopsList){
      //   listItems = scoopsList.map((scoop) =>
      //     <ScoopItem scoop={scoop}></ScoopItem>
      //   );
      // }
      let content = <div className="empty">
        <div className="empty-box text-center">
          <p className="text-center"><img src="../public/images/empty-scoop.png" width="150" alt="empty scoops"/></p>
          <h4>Got something exclusive?</h4>
          <p>Only selected users can view your exclusive scoop. Upon successful purchase they can download it to their devices or repost it to their public walls.</p>
        </div>
      </div>;
      let paginationComponent = "";
      if(this.props.listItems.length > 0){
        content = this.props.listItems;
        paginationComponent = <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={12}
        totalItemsCount={totalRows}
        handlePageChange={this.handlePageChange} 
        key={this.state.activePage}
      />
      }

      return (
            <section className="main-content container">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-6">
                  <h4>Scoop</h4>
                </div>
                <div className="col-sm-6 text-right">
                  <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-home" /></a></li>
                    <li>Scoops</li>
                    <li>List</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="btn-group scoop-list-btns" role="group">
                        <a onClick={() => this.props.getAllScoopsOfUser(1, 0)} className="btn btn-primary waves-effect waves-light active">
                          Posted
                        </a>
                        <a className="btn btn-primary waves-effect waves-light" onClick={() => this.props.getAllScoopsOfUser(1, 1)}>
                          Inbox
                        </a>
                        <a title="Up to Top of Scoop" className="btn btn-primary waves-effect waves-light" onClick={() => this.props.getAllScoopsOfUser(1, 2)}>
                          Sent
                        </a>
                        <a className="btn btn-primary waves-effect waves-light" onClick={() => this.props.getAllScoopsOfUser(1, 3)}>
                          Purchased
                        </a>
                </div>
                  <div className="search-form search-in-content hidden-xs pull-right">
                    <form>
                      <input type="text" className="form-control" placeholder="Search for..." />
                      <button type="button" className="btn-search"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                <p />
                <div className="list-content">
                  {alert}
                  {content}
                </div>
                {paginationComponent}
              </div>
            </div>
            <footer className="footer">
              <span>Copyright © 2019.</span>
            </footer>
          </section>
        )
    }
}

export default ScoopList