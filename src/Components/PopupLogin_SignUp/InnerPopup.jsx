import React, { Component } from 'react'

export default class InnerPopup extends Component {
    state={
        mail:"",
        password:"",
        confirm:"",
        type:"asso",
        errorLogin:"",
        errorSignUp:"Ceci est une erreur"
    }

    onChange=(event)=>{ 
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    changeType=(event)=>{ 
        this.setState({
            type:event.target.htmlFor
        });
    }

    login=(event)=>{
        event.preventDefault();
        console.log("Login : Mail :"+this.state.mail+" Password : "+this.state.password)
    }
    
    signup=(event)=>{
        event.preventDefault();
        
        console.log("Signup : Mail :"+this.state.mail+" Password : "+this.state.password+
        " Confirm : "+this.state.confirm+" Type : "+this.state.type)
    }
    
    SwaptoLogin=()=>{
        document.querySelector("form.login").style.marginLeft = "0%";
        document.querySelector(".title-text .login").style.marginLeft = "0%"
        return
    }
    SwaptoSignUp=()=>{
        document.querySelector("form.login").style.marginLeft = "-50%";
        document.querySelector(".title-text .login").style.marginLeft = "-50%";
    }
    render() {
        return (
            <React.Fragment>
            <div className="title-text">
                <div className="title login">
                    Se connecter
                </div>
                <div className="title signup">  
                    S'inscrire
                </div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" />
                    <input type="radio" name="slide" id="signup"/>
                    <label htmlFor="login" className="slide login" onClick={this.SwaptoLogin}>Se connecter</label>
                    <label htmlFor="signup" className="slide signup" onClick={this.SwaptoSignUp}>S'inscrire</label>
                    <div className="slider-tab">
                    </div>
                </div>
                <div className="form-inner" >
                    <form onSubmit={this.login} className="login">
                        <div className="field">
                            <input 
                                type="mail" 
                                placeholder="Adresse mail" 
                                name='mail'
                                onChange={this.onChange}
                                value={this.state.mail}
                                required/>
                        </div>  
                        <div className="field">
                            <input 
                                type="password" 
                                placeholder="Mot de passe" 
                                name='password'
                                onChange={this.onChange}
                                value={this.state.password}
                                required/>
                        </div>
                        <div className="pass-link">
                            <a href="#">Mot de passe oublié?</a>
                        </div>
                        {this.state.errorLogin!="" ? <div className="error">{this.state.errorLogin}</div> : null}
                        <div className="field btn">
                            <div className="btn-layer">
                            </div>
                            <button className="submit">Se connecter</button>
                        </div>
                    </form>
                    <form onSubmit={this.signup} className="signup">
                        <div className="field">
                            <input 
                                type="text" 
                                placeholder="Adresse mail"
                                name='mail'
                                onChange={this.onChange}
                                value={this.state.mail}
                                required/>
                        </div>
                        <div className="field">
                            <input 
                                type="password" 
                                placeholder="Mot de passe" 
                                name='password'
                                onChange={this.onChange}
                                value={this.state.password}
                                required/>
                        </div>
                        <div className="field">
                            <input 
                                type="password" 
                                placeholder="Confirmer le mot de passe" 
                                name="confirm"
                                onChange={this.onChange}
                                value={this.state.confirm}
                                required/>
                        </div>
                        <div className="slide-controls">
                            <input 
                                type="radio" 
                                name="slideCount" 
                                id="asso"
                                />
                            <input 
                                type="radio" 
                                name="slideCount" 
                                id="volontaire"
                                />
                            <label htmlFor="asso" className="slideCount asso" onClick={this.changeType}>Association</label>
                            <label htmlFor="volontaire" className="slideCount volontaire" onClick={this.changeType}>Volontaire</label>
                            <div className="slider-tab">
                            </div>
                        </div>
                        {this.state.errorSignUp!="" ? <div className="error">{this.state.errorSignUp}</div> : null}
                        <div className="field btn">
                            <div className="btn-layer">
                            </div>      
                            <button className="submit"> S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
            )
        }
}
