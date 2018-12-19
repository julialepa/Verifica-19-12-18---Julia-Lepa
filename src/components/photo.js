import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './photo.css'


class Photo extends Component {
    render() {
        return (
            <div className="my-post">
                <Media className="my-media">
                    <Media src={this.props.thumbnailUrl} className="thumbnail" />
                    <Media className="album-id-text">
                        Album ID: {this.props.albumId}
                    </Media>
                </Media>
                <div className="img-container">
                    <div className="main-img-description">
                        {this.props.title}
                    </div>
                    <img alt="empty" src={this.props.url} className="main-img" />
                </div>
            </div>
        );
    }
}

export default Photo;
