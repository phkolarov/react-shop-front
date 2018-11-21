import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Shop from 'mdi-react/CartIcon'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});


const ShopNowComponent = (props) => {
    const { classes } = props;

    return (
      <div className={'shop-now-section-component'}>
               <div className={'inner-wrapper-title'}>
                   <h3>{props.title}</h3>
                   <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                     <Shop/>  SHOP NOW
                   </Button>
               </div>
      </div>
    );

};


export default withStyles(styles)(ShopNowComponent);