import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from "../firebase.init";

const useToken = user => {
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };

        if (email) {
            fetch(`https://safe-fjord-32249.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())

                /*     .then(res => {
                        if (res.status === 403) {
                            signOut(auth)
                            navigate('/home');
                        }
                        return res.json()
                    })
     */
                .then(data => {
                    console.log('data inside use token', data);
                    //when get token
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

        // console.log('user inside useToken')

    }, [user])

    return token;
}
export default useToken;