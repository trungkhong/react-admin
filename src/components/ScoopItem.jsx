import React, {Component} from 'react'
// import Skeleton from 'react-loading-skeleton';
import {convertDatetimeScoop} from '../helpers/datetime'
import ContentLoader, { Facebook } from 'react-content-loader'
import { connect } from "react-redux";

const MyLoader = () => (

  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="300" height="270" />
    <rect x="0" y="285" rx="4" ry="4" width="300" height="13" />
    <rect x="0" y="300" rx="3" ry="3" width="300" height="10" />
  </ContentLoader>
);

class ScoopItem extends Component {
  constructor(props){
      super(props)
  }  

  render(){
    let scoop = this.props.scoop;
    let categoryIconURL = "";
    let isLoading = false;

    if(scoop != null) {
      isLoading = true
    }

    let isAlbum = ""
    if (scoop.is_album) {
        isAlbum = <span className="icon-album">
                        <img src="public/images/album.png" className="img-responsive" alt="Image" />
                    </span>
    }

    if(scoop.category != null && scoop.category != ""){
      categoryIconURL = <img src={scoop.category.icon_url} className="img-responsive xs" width={40} alt="Image" />
    }

    //handle datetime
    let postedAt = convertDatetimeScoop(scoop.current_time, scoop.created_at);

    if(!isLoading){
      return (<div><MyLoader></MyLoader></div>);
    }else{
      return (
        <div className="card scoop">
            <div className="card-top">
              <a href={scoop.media_resources[0].thumb} data-lightbox="scoop" className="scoop-lightbox" data-title="Kawwam test caption">
                <img className="card-img-top img-fluid img-responsive" src={scoop.media_resources[0].thumb || <Skeleton height={100} />} alt="Card image cap" />
              </a>
              {isAlbum}
            </div>
            <div className="card-body">
              <h4 className="card-title font-16"><strong>{scoop.user.profile.display_name}</strong>
                <small className="color-muted">@{scoop.user.username}</small>
                <span className="pull-right category-icon"> 
                  {categoryIconURL}
                </span>
              </h4>
              <p className="time-location">
                <small className="text-muted">{postedAt}</small><i className="glyphicon glyphicon-map-marker" /> <small className="text-muted"> Ho Chi Minh
                  City</small>
              </p>
              <ul className="list-inline reactions">
                <li><i className="icon-action-undo" /> {scoop.reply}</li>
                <li><i className="icon-bubbles" /> {scoop.comment}</li>
                <li><i className="icon-star" /> {scoop.favorite}</li>
                <li><i className="icon-cloud-download" /> {scoop.download}</li>
                <li><i className="icon-eye" /> {scoop.view}</li>
              </ul>
              <p className="card-text">{scoop.caption}</p>
              <div>
                <a onClick={() => this.props.openAlertModal('edit_scoop')} className="btn btn-primary waves-effect waves-light edit-scoop-btn">
                  <em className="icon-pencil" />
                </a>
                <a data-scoop={scoop.id} onClick={() => this.props.openAlertModal('scoop')} title="Up to Top of Scoop" className="btn btn-success waves-effect waves-light">
                  <em className="icon-info" />
                </a>
                <a onClick={() => this.props.deleteScoop(scoop.id)} className="btn btn-danger waves-effect waves-light pull-right">
                  <em className="icon-trash" />
                </a>
              </div>
            </div>
          </div>
        );
    }
  }

}

export default ScoopItem;