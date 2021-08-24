import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {GridList,GridTile} from '@material-ui/core/GridList/index';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { Dialog } from '@material-ui/core';
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

        // if(images){
        //     imageList=(
        //         <GridList cols={4}>
        //             {
        //                 images.map(img=>(
        //                     <GridTile 
        //                     title={img.tags}
        //                     key={img.id}
        //                     actionIcon={
        //                         <IconButton onClick={()=>this.handleOPen(img.largeImageURL)}>
        //                             <ZoomInIcon color="white" />
        //                         </IconButton>
        //                     }>
        //                         <img src={img.largeImageURL} alt="" />
        //                     </GridTile>
        //                 ))
        //             }
        //         </GridList>
        //     )
        // } else {
        //     imageList=null;
        // }
        // const actions=[
        //     <Button label='close' primary={true} onClick={this.handleClose} />
        // ]
        console.log(images,"image")
        return(
            <div>
                {images.map((each)=><li><img src={each.largeImageURL} /></li>)}
                {/* {imageList}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                        <img src={this.state.currentImg} alt='' style={{width:"100%"}}/>
                </Dialog> */}
            </div>
        )
    }
}

ImageResults.propTypes={
    images:PropTypes.array.isRequired,
}


export default ImageResults; 