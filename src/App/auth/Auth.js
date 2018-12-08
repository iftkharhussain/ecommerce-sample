const isAuth = () =>{
    let token = localStorage.getItem('x-auth');
    return token ? true : false;
}
const Auth = {
    isAuth
}

export default Auth;
