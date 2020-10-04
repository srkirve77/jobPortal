import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './CompanyInputFields.scss'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import Skills from '../SkillsInput/SkillsInput';
const API_URL = 'http://localhost:8080';
class CompanyInputFields extends React.Component {
  
 

  constructor(props) {
    super(props);
    this.state = {name: '',jobTitle:'',location:'',skills:'',description:''};

    this.handleChange = this.handleChangeName.bind(this);
    this.handleChange = this.handleChangeJobTitle.bind(this);
    this.handleChange = this.handleChangeLocation.bind(this);
    this.handleChange = this.handleChangeSkills.bind(this);
    this.handleChange = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeJobTitle(event) {
    this.setState({jobTitle: event.target.value});
  }
  handleChangeLocation(event) {
    this.setState({location: event.target.value});
  }

  handleChangeSkills(event) {
    this.setState({skills: event.target.value});
  }
  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    //alert('Your Comapny has been added to the database');
    event.preventDefault();
    console.log(this.state);
    
    return axios.post(`https://localhost:8080/register-company`,this.state);
  }

  render() {
   
  return (
    
    <div>
    <Paper elevation={20} className='paper'>
          <form  noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <TextField id="outlined-basic" type="text"  value={this.state.name} onChange={(e)=>this.handleChangeName(e)}  label="Enter Company Name" variant="outlined" />
              <br/>
              <br/>
              <TextField  id="outlined-basic"  type="text"  value={this.state.jobTitle} onChange={(e)=>this.handleChangeJobTitle(e)} label="Enter Job Title" variant="outlined" />
              <br/>
              <br/>
              <TextField id="outlined-basic"  type="text"  value={this.state.location} onChange={(e) => this.handleChangeLocation(e)} label="Enter Company Location" variant="outlined" />
              <br/>
              <br/>
              <Skills value={this.state.skills} onChange={this.handleChangeSkills} ></Skills>
              <br/>
              <TextField id="outlined-basic" type="text"  value={this.state.description} onChange={(e) => this.handleChangeDescription(e)}  label="Job Description" variant="outlined" />
              <br/>
              <br/>
              <Button variant="contained" color="primary" type ="submit" value = "submit">
                    Submit
              </Button>
          </form>
    </Paper>
    </div>
  );
                        }
}



export default CompanyInputFields;