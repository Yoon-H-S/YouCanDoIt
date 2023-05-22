import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Redirection(props) {
    const navigate = useNavigate();
    const { registrationId } = useParams();
    const code = window.location.search;
  
    useEffect(() => {
        axios.get('/api/member-api/oauth2/code/' + registrationId + code)
        .then(function (response) {
            if(typeof response.data === "object") {
                navigate("/login/snsSignUp", {
                    state: {
                        id: response.data["id"],
                        email: response.data["email"]
                    }
                });
            } else {
                sessionStorage.setItem("loginName", response.data);
                navigate("/");
            }
        }).catch(
            (error) => console.log(error)
    );
    }, []);
  
    return null;
  };
  
  export default Redirection;