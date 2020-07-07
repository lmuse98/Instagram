import React, { useState } from "react";
import styles from "./Login.module.css";
import Logo from "../../assets/InstaLogo.png";
import logo2 from "../../assets/icons8-facebook_old.png";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";
import { useHistory} from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const { currentUser } = useSelector(state => state.users);



    const user = {
        username,
        password,
    };

    const mySubmitHandler = async (e) => {
        dispatch(setUser(user));
        setUsername("");
        setPassword("");

        if(currentUser.isAuth === false) {
            alert("Pogrešna lozinka ili korisničko ime!");
        }
        else {
            history.push("/src/components/Home");
        }
    };

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

 
        return (
          <div>
            <div className={styles.LoginForm}>
              <form onSubmit={mySubmitHandler}>
                <img src={Logo} alt="instLogo" />
                <input
                  className={styles.korisnickoIme}
                  type="text"
                  name="username"
                  placeholder="Korisničko ime"
                  value = {username}
                  onChange={handleChangeUsername}
                />
                <input
                  className={styles.lozinka}
                  type="password"
                  name="password"
                  placeholder="Lozinka"
                  value = {password}
                  onChange={handleChangePassword}
                />
                <button className={styles.prijavaBttn}>Prijava</button>
                <h1 className={styles.ili}>ili</h1>
                <div className={styles.logoFacebook}>
                  <img src={logo2} alt="logo2" />
                </div>
                <div className={styles.prijavaFace}>
                  <p>Prijavite se putem Facebooka</p>
                </div>
                <p className={styles.zabPass}>Zaboravili ste lozinku?</p>
              </form>
            </div>
            <div className={styles.reg}>
              <p className={styles.racun}>Nemate račun?</p>
              <a
                href
                className={styles.racunReg}
                onClick={this.props.onToggleModal}
              >
                Registrirajte se{" "}
              </a>
            </div>
          </div>
        );
      }
    
export default Login;
