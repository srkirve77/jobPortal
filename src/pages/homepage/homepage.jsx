import React from 'react';
import Button from '@material-ui/core/Button';
import './homepage.scss';
import {  Redirect , Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



class homepage extends React.Component {

     redirect = () => {
        if(true){
            return  <Redirect  to="/company-register" />
        }
     }

     render() {
    return (
        <div className='homepage'>
                <Link to ='/company-register'><Button className='button' variant="contained" color="primary">
                        Login as a Company
                </Button>
                </Link>
                <br/>
                <br/>
                <Button className='button' variant="contained" color="primary">
                        Login to find Job!
                </Button>
        </div>
    )
     }
}

export default homepage;