import React, { Component } from 'react'
import ScoopItem from '../../components/ScoopItem.jsx'
import { getAllScoopsOfUser, actGetAllOfScoops, deleteScoop, deleteScoopAct } from "../../actions/scoop.actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import apiCaller from '../../utils/apiCaller';
import ScoopList from "../../modules/Scoop/ScoopList.jsx";
import { hideModal, showModal } from '../../actions/modal.actions';

class ScoopListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scoops: [],
            activePage: 1,
            filterType: 0, //scoops of current user
        }
    }

    openAlertModal = (scoop, type) => {
        this.props.showModal({
            open: true,
            title: 'Alert Modal',
            message: "TESST",
            content: scoop,
            closeModal: this.closeModal
        }, type)
    }

    deleteScoop = (scoopID) => {
        console.log("akfaslalfsan", scoopID)
        this.props.deleteScoop(scoopID)
    }

    handleShowScoops(scoopsList){
        var listItems = ""
          if (scoopsList) {
              listItems = scoopsList.map((scoop, index) =>
                  <ScoopItem scoop={scoop} key={index} deleteScoop={() => this.deleteScoop(scoop.id)} openAlertModal={(type) => this.openAlertModal(scoop, type)}/>
              );
          }
        return listItems
      }


    componentDidMount() {
        // apiCaller('scoops?page=1&size=12&filterType=0', 'GET', null).then(res => {
        //     this.props.fetchAllOfScoops(res.data)
        // })
        this.props.getAllScoopsOfUser(this.state.activePage, this.state.filterType)
        //handleShowScoops(this.props.listItems)
    }
    
    render() {
        console.log("props changed:", this.props)
        const { scoops } = this.props;
        let totalRows = scoops.scoops.total_rows
        var scoopsList = scoops.scoops.data

        var listItems = ""
        if (scoopsList) {
            listItems = this.handleShowScoops(scoopsList)
        }

        return ( 
            <ScoopList listItems={listItems} totalRows={totalRows} getAllScoopsOfUser={(activePage, filterType) => this.props.getAllScoopsOfUser(activePage, filterType)} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        scoops: state.scoops
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllOfScoops: (scoops) => (dispatch(actGetAllOfScoops(scoops))),
        getAllScoopsOfUser: (activePage, filterType) => (dispatch(getAllScoopsOfUser(activePage, filterType))),
        showModal: (modalProps, modalType) => {
            dispatch(showModal({ modalProps, modalType }))
        },
        deleteScoop: (scoopID) => (dispatch(deleteScoop(scoopID))),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScoopListContainer)