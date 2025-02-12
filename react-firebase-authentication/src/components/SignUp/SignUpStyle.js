import styled from 'styled-components';

export const SignUpPageStyle = styled.div`

@import url('https://fonts.googleapis.com/css?family=Raleway:100,400');

p {
  color: #ad5389;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size:2em;
  margin: .25em 0;
  width: 100%;
  line-height: 1.5em;
  text-align: center;
}


h1 {
  width: 60%;
  color: #ad5389;
  font-size: 5em;
  font-family: "Raleway", serif;
  font-weight: 100;
  margin: 1em auto 1em auto;
}


form * {
  background: none;
  border: none;
}

input:focus {
	outline: 0;
  color: #ad5389;
}


form {
  margin: 0 auto;
  width: 60%;
}


form input {
  color: rgba(255,255,255,.5);
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size:2em;
  margin: .25em 0;
  width: 100%;
  line-height: 1.5em;
  border-bottom: solid rgba(255,255,255,.5) 1px;  
}

::-webkit-input-placeholder { 
  color: rgba(255,255,255,.5);
  transition: color 1s;
}
:-ms-input-placeholder { 
  color: #ad5389;
}
::-moz-placeholder { 
  color: #ad5389;
  opacity: 1;
}
:-moz-placeholder {
  color: #ad5389;
  opacity: 1;
}

form input:focus {
  border-bottom: solid rgba(255,255,255,1) 1px;
}

input:focus::-webkit-input-placeholder {
  color: #ad5389;
}

#hidePassword {
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size:1em;
  color: rgba(255,255,255,.5);
  text-decoration: none;
  cursor: pointer;
}


button {
  width: 100%;
  margin: 1em 0 0 0;
  padding: .25em;
  border: 1px solid #ad5389;
  color: #ad5389;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size:2em;
  transition: color 1s, border 1s;
}

button:focus {
  outline: 0;
  border: 1px solid #ad5389;
  color: #ad5389;
}

form p {
  color: rgba(255,255,255,.5);
  font-family: "Raleway";
  font-weight: 100;
  text-align: center;
  width: 100%;
}

form a {
  color: rgba(255,255,255,.75);
  font-family: "Raleway";
  font-weight: 100;
  text-align: center;
  transition: color 1s;  
}

form a:focus {
  outline: none;
  color: #ad5389;
}


:-webkit-autofill {
  border-bottom: solid 1px rgba(255,255,255, .5);
  -webkit-text-fill-color: rgba(255,255,255,.5);
  transition: border 1s, background-color 5000s ease-in-out 0s;
  

}
@media screen and (max-width:600px){

  h1 {
    width: 80%;
    font-size: 4em;
    margin: 2em auto 1em auto;
  }
  
  form {
    width: 80%;
    font-size: .8em;
  }
}`;