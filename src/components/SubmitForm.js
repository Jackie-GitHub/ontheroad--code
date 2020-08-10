import React from 'react';
import './SubmitForm.scss';
import '../Assets/global-styles/bootstrap.css';

class SubmitForm extends React.Component {
    state = {
        select:'email'
    }
    getInitialState = () => {
        return {
            value: 'email'
        }
    };
    onChange = (event) => {
        this.setState({select:event.target.value});
    }
    render(){
        let placeholder = '';
        switch(this.state.select) {
            case 'email':
              placeholder = 'Your email';
              break;
            case 'phone':
                placeholder = 'Your phone number';
              break;
            case 'text':
                placeholder = 'Your phone number';
             break;
            case 'mail':
                placeholder = 'Your address';
             break;
            default:
                placeholder = 'Your email';
          }
        return (
            <div className="SubmitForm">
                <h2>LOOKING FOR MORE?</h2>
                <form className="Form" method="post" action="#">
                        <div className="form-group">
                            <label className="col-form-label" htmlFor="textarea" >Please descript the ideal trip in your mind below.We will send you personalized travel plan. </label><br></br>
                            <textarea className="form-control" name="message" id="textarea" rows="2" placeholder="My ideal trip would include ..."></textarea>                                                                      
                        </div>
                        <div className="form-group row Form-row">
                            <label className="col-sm-4 col-form-label" htmlFor="name">Name:</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="text" name="name" id="name" placeholder="Your name" required/>
                            </div>                     
                        </div>
                        <div className="form-group row Form-row">
                            <label className="col-sm-4 col-form-label" htmlFor="contactMethod" >How do you want us to contact you?</label>
                            <div className="col-sm-8">
                                <select className="form-control" onChange = {this.onChange} value={this.state.select} name="contactMethod" id="contactMethod">
                                    <option value="email">email</option>
                                    <option value="phone">phone</option>
                                    <option value="text">text</option>
                                    <option value="mail">mail</option>
                                </select> 
                            </div>
                                                    
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" style = {{textTransform: 'capitalize'}} htmlFor={this.state.select}>{this.state.select}:</label>
                            <div className="col-sm-8">
                                <input className="form-control" type={this.state.select} name={this.state.select} id={this.state.select} placeholder={placeholder}/>
                            </div>                         
                        </div>
                        <div className="form-group row Form-row">
                            <div className="col-sm-4" htmlFor="news">Newsletter?</div>
                            <div className="col-sm-8">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="news" id="news"/>
                                    <label className="form-check-label" htmlFor="news">
                                        Yes, please!
                                    </label>
                                </div>
                            </div>                        
                        </div>
                        <div className="form-group row Form-row">
                            <label className="col-sm-4"></label>
                            <div className="col-sm-8">
                                <input className="btn btn-outline-success" type="submit" value="Send it!"/>
                            </div>                        
                        </div>
                </form>
                
            </div>
        );
    }
    
};

export default SubmitForm;