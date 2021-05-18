import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class InnerPopup extends Component {
    state={
        mail:"",
        password:"",
        confirm_password:"",
        name:"",
        firstname:"",
        tel:"",
        file:null,
        adresse:"",
        codePostal:"",
        ville:"",
        region:"",
        pays:"",
        type:"asso",
        error:"",
    }

    checkEmail=(email)=>{
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    checkTel=(tel)=>{
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(tel);
    }

    checkFile=(file)=> {
        const acceptedImageTypes = ['image/jpeg', 'image/png'];
        return file && acceptedImageTypes.includes(file['type'])
    }

    onChange=(event)=>{ 
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    changeFile=(event)=>{
        if(this.checkFile(event.target.files[0])){
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
        } else {
            this.setState({
                error: "Veuillez choisir une image de type jpeg ou png "
            })
        }
    }
    delImg=()=>{
        this.setState({
            file:null
        })
    }
    changeType=(event)=>{ 
        this.setState({
            type:event.target.htmlFor
        });
    }

    login=(event)=>{
        event.preventDefault();
        this.setState({error:""})
        if (!this.checkEmail(this.state.mail)){
            this.setState({error:"Veuillez saisir une adresse mail valide"});
            return
        }
        if (this.state.password===""){
            this.setState({error:"Veuillez saisir votre mot de passe"});
            return
        }
        
        
        console.log("Login : Mail :"+this.state.mail+" Password : "+this.state.password)
    }
    
    signup=(event)=>{
        event.preventDefault();
        this.setState({error:""})
        if (!this.checkEmail(this.state.mail)){
            this.setState({error:"Veuillez saisir une adresse mail valide"});
            return
        }
        if (this.state.password===""){
            this.setState({error:"Veuillez saisir un mot de passe"});
            return
        }
        if (this.state.password!=this.state.confirm_password){
            this.setState({error:"Vous avez saisis deux mots de passe différents"});
            return
        }
        
        console.log("Signup : Mail :"+this.state.mail+" Password : "+this.state.password+
        " Confirm : "+this.state.confirm_password+" Type : "+this.state.type)
        document.querySelector("form.login").style.marginLeft = "-50%";
        document.querySelector(".title-text .login").style.marginLeft = "-50%"
        document.querySelector(".slide-controls").style.display = "none"
    }

    infoAsso=(event)=>{
        event.preventDefault();
        this.setState({error:""})
        if (!this.checkTel(this.state.tel)){
            this.setState({error:"Veuillez saisir un numéro de téléphone valide"})
            return;
        }
        document.querySelector("form.login").style.marginLeft = "-75%";
        document.querySelector(".title-text .login").style.marginLeft = "-75%"
    }

    infoVolon=(event)=>{
        event.preventDefault();
        this.setState({error:""})
        if (!this.checkTel(this.state.tel)){
            this.setState({error:"Veuillez saisir un numéro de téléphone valide"})
            return;
        }
        document.querySelector("form.login").style.marginLeft = "-75%";
        document.querySelector(".title-text .login").style.marginLeft = "-75%"
    }


    Retour=(event)=>{
        event.preventDefault();
        this.setState({error:""})
        switch(document.querySelector("form.login").style.marginLeft){
            case "-25%":
                this.setState({confirm_password:""});
                this.setState({password:""});
                document.querySelector("form.login").style.marginLeft = "0%";
                document.querySelector(".title-text .login").style.marginLeft = "0%"
            break;
            case "-50%":
                this.setState({confirm_password:""});
                this.setState({password:""});
                document.querySelector("form.login").style.marginLeft = "-25%";
                document.querySelector(".title-text .login").style.marginLeft = "-25%";  
                document.querySelector(".slide-controls").style.display = "flex"  
            break;
            case "-75%":
                document.querySelector("form.login").style.marginLeft = "-50%";
                document.querySelector(".title-text .login").style.marginLeft = "-50%"; 
            break
        }   
    }
    SwaptoLogin=()=>{
        this.setState({password:""});
        this.setState({confirm_password:""});
        this.setState({error:""})
        document.querySelector("form.login").style.marginLeft = "0%";
        document.querySelector(".title-text .login").style.marginLeft = "0%"
        return
    }
    SwaptoSignUp=()=>{
        this.setState({password:""});
        this.setState({confirm_password:""});
        this.setState({error:""})
        document.querySelector("form.login").style.marginLeft = "-25%";
        document.querySelector(".title-text .login").style.marginLeft = "-25%";
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
                <div className="title">  
                    S'inscrire
                </div>
                <div className="title">  
                    Contact
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
                        {this.state.error!="" ? <div className="error">{this.state.error}</div> : null}
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
                                name="confirm_password"
                                onChange={this.onChange}
                                value={this.state.confirm_password}
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
                                id="volon"
                                />
                            <label htmlFor="asso" className="slideCount asso" onClick={this.changeType}>Association</label>
                            <label htmlFor="volon" className="slideCount volon" onClick={this.changeType}>Volontaire</label>
                            <div className="slider-tab">
                            </div>
                        </div>
                        {this.state.error!="" ? <div className="error">{this.state.error}</div> : null}
                        <div className="field btn">
                            <div className="btn-layer">
                            </div>      
                            <button className="submit"> S'inscrire</button>
                        </div>
                    </form>
                    { this.state.type==="asso" ?
                        <form onSubmit={this.infoAsso} className="infoAsso">
                            <button className="btn-retour" type="button" onClick={this.Retour}>Retour</button>
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Nom de l'association"
                                    name='name'
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    required/>
                            </div>
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Numéro de téléphone" 
                                    name='tel'
                                    onChange={this.onChange}
                                    value={this.state.tel}
                                    required/>
                            </div>
                            <div className="profil_picture">
                                <FontAwesomeIcon icon={faTimes} className="btn-del-img" onClick={this.delImg}/>
                                <div className="container-img">
                                    <img src={this.state.file ?
                                        this.state.file
                                        :"./images/profil/empty-profil.svg"}/>
                                </div>
                                <div className="field upload-container">
                                    <input 
                                        type="file" 
                                        name="file"
                                        onChange={this.changeFile}
                                        accept="image/png, image/jpeg"
                                        />
                                    <button className="upload-btn">Importer votre Logo</button>
                                </div>
                            </div>
                        
                            {this.state.error!="" ? <div className="error">{this.state.error}</div> : null}
                            <div className="field btn">
                                <div className="btn-layer">
                                </div>      
                                <button className="submit"> Continuer</button>
                            </div>
                        </form>
                    :
                        <form onSubmit={this.infoVolon} className="infoVolon">
                            <button className="btn-retour" type="button" onClick={this.Retour}>Retour</button>
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Nom"
                                    name='name'
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    required/>
                            </div>
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Prénom"
                                    name='firstname'
                                    onChange={this.onChange}
                                    value={this.state.firstname}
                                    required/>
                            </div>
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Numéro de téléphone" 
                                    name='tel'
                                    onChange={this.onChange}
                                    value={this.state.tel}
                                    required/>
                            </div>
                            <div className="profil_picture">
                                <FontAwesomeIcon icon={faTimes} className="btn-del-img" onClick={this.delImg}/>
                                <div className="container-img">
                                    <img src={this.state.file ?
                                        this.state.file
                                        :"./images/profil/empty-profil.svg"}/>
                                </div>
                                <div className="field upload-container">
                                    <input 
                                        type="file" 
                                        name="file"
                                        onChange={this.changeFile}
                                        accept="image/png, image/jpeg"
                                        />
                                    <button className="upload-btn">Importer un avatar</button>
                                </div>
                            </div>
                            
                            {this.state.error!="" ? <div className="error">{this.state.error}</div> : null}
                            <div className="field btn">
                                <div className="btn-layer">
                                </div>      
                                <button className="submit"> Continuer</button>
                            </div>
                        </form>
                    }
                    <form onSubmit={this.contacts} className="contacts">
                        <button className="btn-retour" onClick={this.Return}>Retour</button>
                        <div className="field">
                            <input 
                                type="text" 
                                placeholder="Adresse"
                                name='adresse'
                                onChange={this.onChange}
                                value={this.state.adresse}
                                required/>
                        </div>
                        <div className="field">
                            <input 
                                type="text" 
                                placeholder="Code Postal" 
                                name='codePostal'
                                onChange={this.onChange}
                                value={this.state.codePostal}
                                required/>
                        </div>
                        <div className="field">
                            <input 
                                type="text" 
                                placeholder="Ville" 
                                name="ville"
                                onChange={this.onChange}
                                value={this.state.ville}
                                required/>
                        </div>
                        <div className="field">
                            <input 
                                type="text" 
                                placeholder="Région/Département" 
                                name="region"
                                onChange={this.onChange}
                                value={this.state.region}
                                required/>
                        </div>
                        <div className="field">
                            <input 
                                type="text" 
                                placeholder="Pays" 
                                name="pays"
                                onChange={this.onChange}
                                value={this.state.pays}
                                required/>
                        </div>
                        {this.state.error!="" ? <div className="error">{this.state.error}</div> : null}
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
