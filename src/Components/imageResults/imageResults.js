import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {GridList,GridTile} from '@material-ui/core/GridList/index';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Dialog, Grid } from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';


class ImageResults extends Component{
    state={
        open:false,
        currentImg:''
    }
    handleOPen=img=>{
        this.setState({open:true, currentImg:img})
    }
    handleClose=()=>{
        this.setState({open:false});
    }
    render(){
        let imageList;
        const {images}=this.props

     
    
        console.log(images,"image")
        return(
            <div>
                <Grid container style={{marginLeft:"20px", marginTop:"20px"}}>
                {images.map((each)=><Grid item sm={6} lg={4} md={4} style={{marginBottom:'20px'}} ><img src={each.largeImageURL} height="400" width="400"/></Grid>)}
                </Grid>
            </div>
        )
    }
}

ImageResults.propTypes={
    images:PropTypes.array.isRequired,
}


export default ImageResults; 