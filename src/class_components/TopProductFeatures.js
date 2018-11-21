import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import {withStyles} from '@material-ui/core/styles';
import Camera from 'mdi-react/CameraIcon'


const styles = theme => ({
    root: {
        flexGrow: 1,
        color: 'red',
        textAlign: 'center',
        padding: 10
    }
});

const PaperStyled = withStyles(styles)(Paper)


class TopProductFeatures extends Component {

    render() {

        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Smart Watch Gorilla Z210</h1>
                <Grid container spacing={24}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={4}>
                        <PaperStyled style={{color: 'green',textAlign: 'center',padding: 10}}>

                            <Grid container>
                                <Grid item xs={2}>
                                    <Camera size={36} />
                                </Grid>
                                <Grid item xs={10}>
                                    <p>Imalo edno vreme edno malko chasovniche alaala aalalal fsd fdfdf jf dfdfd dhf hdfhd</p>
                                </Grid>
                            </Grid>

                        </PaperStyled>
                    </Grid>
                    <Grid item xs={4}>
                        <PaperStyled>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Camera size={36} />
                                </Grid>
                                <Grid item xs={10}>
                                    <p>Imalo edno vreme edno malko chasovniche alaala aalalal fsd fdfdf jf dfdfd dhf hdfhd</p>
                                </Grid>
                            </Grid>
                        </PaperStyled>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={4}>
                        <PaperStyled>

                            <Grid container>
                                <Grid item xs={2}>
                                    <Camera size={36} />
                                </Grid>
                                <Grid item xs={10}>
                                    <p>Imalo edno vreme edno malko chasovniche alaala aalalal fsd fdfdf jf dfdfd dhf hdfhd</p>
                                </Grid>
                            </Grid>
                        </PaperStyled>
                    </Grid>
                    <Grid item xs={4}>
                        <PaperStyled>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Camera size={36} />
                                </Grid>
                                <Grid item xs={10}>
                                    <p>Imalo edno vreme edno malko chasovniche alaala aalalal fsd fdfdf jf dfdfd dhf hdfhd</p>
                                </Grid>
                            </Grid></PaperStyled>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>
                <Grid container>

                    <Grid className={'top-product-image-wrapper'} item xs={12}>
                        <img className='top-product-image-present' srcSet='http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/05/Featured.png'/>
                    </Grid>

                </Grid>
            </div>
        )
    }

}


export default withStyles(styles)(TopProductFeatures);