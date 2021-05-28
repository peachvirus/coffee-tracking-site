import { useAuth0 } from "@auth0/auth0-react";

const SignOut = () => {
   const { signout } = useAuth0();

   return ( 
      <button onClick={() => signout()}>
            Sign Out
      </button>
    );
}
 
export default SignOut;