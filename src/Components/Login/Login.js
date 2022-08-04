import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import { GoogleLogin } from 'react-google-login'
import { useEffect } from 'react'
import '../../Assets/css/login.css'

function Login() {
    // https://www.npmjs.com/package/@react-oauth/google
    // http://localhost:3000
    // Client Id = 635644319677-npa7n8g2obq2al9nj059areq9anna80j.apps.googleusercontent.com
    // Client Secret = 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
    function handleResponse(res) {
        console.log(res)
    }

    useEffect(() => {
        let scriptGoogleFunction = document.createElement("script")
        scriptGoogleFunction.innerHTML = `
            function parseJwt (token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                return JSON.parse(jsonPayload);
            }

            function handleCredentialResponse(response) {
                const responsePayload = parseJwt(response.credential);
                console.log("ID: " + responsePayload.sub);
                console.log('Full Name: ' + responsePayload.name);
                console.log('Given Name: ' + responsePayload.given_name);
                console.log('Family Name: ' + responsePayload.family_name);
                console.log("Image URL: " + responsePayload.picture);
                console.log("Email: " + responsePayload.email);
            }

            console.log(google)
            google.accounts.id.initialize({
                client_id: "635644319677-npa7n8g2obq2al9nj059areq9anna80j.apps.googleusercontent.com",
                callback: handleCredentialResponse
            })

            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: 'outline', size: 'large' }
            )
        `
        document.body.appendChild(scriptGoogleFunction)
    }, [])
    

    return(
        <section id="login" className="container-fluid">
            <div className="row wrapper-box">
                <div className="col-8 content-box">
                    <div className="row cb-box">
                        <div className="col-12 col-sm-12 col-md-5 cb-content cb-left">
                            <div className="box-wrp"></div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 cb-content cb-right">
                            <div className="row">
                                <div className="col-12">
                                    <div id="signInDiv"></div>
                                    {/* <div id="g_id_onload"
                                        data-client_id="635644319677-npa7n8g2obq2al9nj059areq9anna80j.apps.googleusercontent.com"
                                        data-callback="handleCredentialResponse"
                                    >
                                    </div>
                                    <div className="g_id_signin"
                                        data-type="standard"
                                        data-size="large"
                                        data-theme="outline"
                                        data-text="sign_in_with"
                                        data-shape="rectangular"
                                        data-logo_alignment="left">
                                    </div> */}
                                    {/* <GoogleOAuthProvider clientId="635644319677-npa7n8g2obq2al9nj059areq9anna80j.apps.googleusercontent.com">
                                    <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            console.log(credentialResponse);
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />
                                    </GoogleOAuthProvider> */}

                                    {/* <GoogleLogin
                                        clientId="635644319677-npa7n8g2obq2al9nj059areq9anna80j.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={(res) => console.log(res)}
                                        onFailure={(res) => console.log(res)}
                                        cookiePolicy={'single_host_origin'}
                                    />, */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login