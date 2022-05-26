import axios from "axios";
import  { useState } from "react";
import { auth, GoogleauthProvider } from "./configFirebase";
import {signInWithPopup, User, signOut} from "firebase/auth"

export function AuthDemoStart(): JSX.Element {
    const [lastAPIReply, setLastAPIReply] = useState<string>("");
    const [user, setUser] = useState<User | null>(null);


    async function handleFetchTimeClicked() {
        const reply = await axios.get("http://localhost:4000/");
        setLastAPIReply(reply.data);
    }

    async function handleFetchWisdomClicked() {
        //This SHOULD be hard to get, eventually.
        if (!user){
            console.log("not logged in")
            return;
        }
        const token = await user?.getIdToken()
        const config = {headers: {"Authorization": "Bearer " + token}}
        const reply = await axios.get("http://localhost:4000/wisdom", config);
        setLastAPIReply(reply.data);
    }

    async function handleSignInClick (){
    const userCredentials = await signInWithPopup(auth, GoogleauthProvider)
    const retrievedUser: User = userCredentials.user
    setUser(retrievedUser)
}

    async function handleSignOutClick(){
     auth.signOut()
     setUser(null)
}

console.log(auth.currentUser)

    return (
        <div>
            <h2>Auth Demo</h2>
            {user && <h1> hello: {user.displayName}</h1>}
            {user?.photoURL && <img src={user.photoURL}/>}
            <button onClick={handleSignInClick}>Sign in</button>
            <button onClick={handleSignOutClick}>Sign out</button>

            <hr />
            <h3>Talk to the API</h3>
            <button onClick={handleFetchTimeClicked}>Fetch Time</button>
            <button onClick={handleFetchWisdomClicked}>Fetch Ancient Wisdom!</button>
            <h4>Last successful reply from API</h4>
            <div>{lastAPIReply}</div>
            <br />
            <i>(also check console for any failures)</i>

            <hr />

        </div>
    );
}

