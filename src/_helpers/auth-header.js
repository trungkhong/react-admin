export function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
    
    // TODO ===> change to user-token
    if(user && user.user_token){
        return { 'USER-TOKEN' : user.user_token }
    }else{
        return {};
    }
}