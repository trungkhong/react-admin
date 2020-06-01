import React, {Component} from 'react'
// import Skeleton from 'react-loading-skeleton';
import {convertDatetimeScoop} from '../helpers/datetime'
import ContentLoader, { Facebook } from 'react-content-loader'
const MyLoader = () => (

  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="300" height="270" />
    <rect x="0" y="285" rx="4" ry="4" width="300" height="13" />
    <rect x="0" y="300" rx="3" ry="3" width="300" height="10" />
  </ContentLoader>
);

class ScoopModal extends Component {
  constructor(props){
      super(props)
      this.state = {
        valueCaption: "tesst ne"
      }
  }  
  render(){
    let scoop = this.props.scoop;
    let isEdit = this.props.isEdit;
    let categoryIconURL = "";
    let isLoading = false;
    let caption = ""

    if(scoop != null) {
      isLoading = true
      caption = scoop.caption
    }

    if(scoop.category != null && scoop.category != ""){
      categoryIconURL = <img src={scoop.category.icon_url} className="img-responsive xs" width={40} alt="Image" />
    }

    //handle datetime
    let postedAt = convertDatetimeScoop(scoop.current_time, scoop.created_at);

    if (isEdit){
        caption = <div className="edit-scoop">
                   <div className="text-left mt-5">
                       <textarea name="caption" value={this.state.valueCaption} id="caption" cols="30" rows="10"></textarea>
                       <button onClick={() => this.props.updateCaption(scoop.id)} className="btn btn-success" type="submit">Save</button>
                   </div>
        </div>
    }

    if(!isLoading){
      return (<div><MyLoader></MyLoader></div>);
    }else{
        
        let isAlbum = ""
        if (scoop.is_album) {
            isAlbum = <span className="icon-album">
                            <img src="public/images/album.png" className="img-responsive" alt="Image" />
                        </span>
        }

        let avatar = "../public/images/default.png"
        if (scoop.user.profile.avatar_url != ""){
            avatar = scoop.user.profile.avatar_url
        }
        if (scoop.media_ratio === "9:16"){
            return (
                <div className="scoop col-md-12 no-padding">
                    <div className="card-top-modal col-md-6 no-padding-l no-padding-r">
                    <aside className="scoop-media" data-title="Kawwam test caption">
                        <img className="card-img-top img-fluid img-responsive" src={scoop.media_resources[0].thumb || <Skeleton height={100} />} alt="Card image cap" />
                    </aside>
                    {isAlbum}
                    </div>
                    <div className="card-body-modal col-md-6 no-padding-r">
                        <div className="avatar pull-left">
                            <img src={avatar} className="img-circle img-rounded" alt="khongxuantrung" />
                        </div>
                        <div className="user-info padd-15">
                            <h4><b>{scoop.user.profile.display_name}</b>@{scoop.user.username}</h4>
                            <p className="time-location">
                                <small className="text-muted">{postedAt}</small><i className="glyphicon glyphicon-map-marker" /> <small className="text-muted"> Ho Chi Minh
                                City</small>
                            </p>
                        </div>
                        <span className="pull-right category-icon"> 
                        {categoryIconURL}
                        </span>
                    <ul className="list-inline reactions">
                        <li><i className="icon-action-undo" /> {scoop.reply}</li>
                        <li><i className="icon-bubbles" /> {scoop.comment}</li>
                        <li><i className="icon-star" /> {scoop.favorite}</li>
                        <li><i className="icon-cloud-download" /> {scoop.download}</li>
                        <li><i className="icon-eye" /> {scoop.view}</li>
                    </ul>
                    <div className="card-text">{caption}</div>
                    <div>
                        <a href="#" className="btn btn-danger waves-effect waves-light pull-right">
                        <em className="icon-trash" />
                        </a>
                    </div>
                    </div>
                </div>
                );
            }else{
                return (
                    <div className="scoop col-md-12 no-padding">
                        <div className="card-top-modal col-md-12 landscape no-padding-l no-padding-r">
                            <aside className="scoop-media" data-title="Kawwam test caption">
                                <img className="card-img-top img-fluid img-responsive" src={scoop.media_resources[0].thumb || <Skeleton height={100} />} alt="Card image cap" />
                            </aside>
                            {isAlbum}
                        </div>
                        <div className="card-body-modal col-md-12">
                            <div className="avatar pull-left">
                                <img src={avatar} className="img-circle img-rounded" alt="khongxuantrung" />
                            </div>
                            <div className="user-info padd-15">
                                <h4><b>{scoop.user.profile.display_name}</b>@{scoop.user.username}</h4>
                                <p className="time-location">
                                    <small className="text-muted">{postedAt}</small><i className="glyphicon glyphicon-map-marker" /> <small className="text-muted"> Ho Chi Minh
                                    City</small>
                                </p>
                            </div>
                            <span className="pull-right category-icon"> 
                            {categoryIconURL}
                            </span>
                        <ul className="list-inline reactions">
                            <li><i className="icon-action-undo" /> {scoop.reply}</li>
                            <li><i className="icon-bubbles" /> {scoop.comment}</li>
                            <li><i className="icon-star" /> {scoop.favorite}</li>
                            <li><i className="icon-cloud-download" /> {scoop.download}</li>
                            <li><i className="icon-eye" /> {scoop.view}</li>
                        </ul>
                        <div className="card-text">{caption}</div>
                        <div>
                            <a href="scoop-edit.html" className="btn btn-primary waves-effect waves-light edit-scoop-btn">
                            <em className="icon-pencil" />
                            </a>
                            <a data-scoop={scoop.id} onClick={() => this.props.openAlertModal()} title="Up to Top of Scoop" className="btn btn-success waves-effect waves-light">
                            <em className="icon-info" />
                            </a>
                            <a href="#" className="btn btn-danger waves-effect waves-light pull-right">
                            <em className="icon-trash" />
                            </a>
                        </div>
                        </div>
                    </div>
                    );
            }
    }
  }

}

export default ScoopModal;