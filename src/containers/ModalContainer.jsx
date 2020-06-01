import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import { scoopConstants } from '../constants'
import ScoopModal from '../components/ScoopModal'
import {updateScoopCaption} from '../actions/scoop.actions'


class ModalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: props.modalProps.open
    }
    this.closeModal = this.closeModal.bind(this)
  }

updateCaption = (scoopID) => {
    this.props.updateScoop(scoopID)
}

  componentWillReceiveProps(nextProps) {
    if (nextProps.modalProps.open !== this.props.modalProps.open) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      })
    }
  }

  closeModal() {
    this.props.hideModal()
  }

  render() {
    var contentRender =  ""
    if (!this.props.modalType) {
        return null
    }else{
        switch (this.props.modalType) {
            case 'scoop':
                contentRender = <div className="scoop-in-modal">
                    <ScoopModal scoop={this.props.content} isEdit={false} key={this.props.content.id}/>
                    </div>
                break;
            case 'edit_scoop':
                contentRender = <div className="scoop-in-modal">
                    <ScoopModal updateCaption={() => this.updateCaption(this.props.content.id)} scoop={this.props.content} isEdit={true} key={this.props.content.id}/>
                    </div>
                break;
            default:
                contentRender = <div>EMPTY ALERT!</div>
                break;
        }
    }
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          style={
            { 
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                  },
                  content: {
                    position: 'absolute',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                  }
            }
        }
        >
          {/* <h2 ref={subtitle => this.subtitle = subtitle}>Scoop Detail</h2> */}
          <button className="close" onClick={this.closeModal}><span aria-hidden="true">×</span></button>
          <div>{contentRender}</div>
        </ReactModal>
      </div>
    )
  }
}


const mapStateToProps = state => ({
    ...state.modal
  })

  const mapDispatchToProps = (dispatch, props) => {
    return {
        updateScoop: (scoopID) => (dispatch(updateScoopCaption(scoopID))),
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)