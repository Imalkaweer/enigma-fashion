import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const loggingViaGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(user);
    console.log("ref for user-", userRef);
  };
  return (
    <div>
      <h1>Sign-In</h1>
      <button onClick={loggingViaGoogle}>Signing With Google!</button>
    </div>
  );
};

export default SignIn;
