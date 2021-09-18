import Token from "./Token";
import AppStorage from "./AppStorage";

class User {

    login(form) {
        axios.post('/api/auth/login', form)

            .then(res => {
                this.responseAfterLogin(res)
                //console.log('res.data')
                //Token.payload(res.data.access_token)

            })
            .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token
        const username = res.data.user
        if (Token.isValid(access_token)) {
            AppStorage.store(username, access_token)
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken()
        if (storedToken) {
            return Token.isValid(storedToken)
        }
        return false
    }

    loggedIn() {
        return this.hasToken()
    }

    loggedOut() {
        AppStorage.clear()
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
        return false
    }
}

export default User = new User()