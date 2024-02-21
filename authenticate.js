function authenticateUser(req, res) {
    return new Promise((resolve, reject) => {
        let username = req.headers.username
        let password = req.headers.password

        if(!username) {
            reject("please provide username in the header");
        }

        else if(username.length <= 6) {
            reject("username must be longer than 6");
        }

        else if(!password) {
            reject("please enter password in the header");
        }
        else if(password.length <= 6) {
            reject("password must be longer than 6");
        }

        resolve(console.log(username));
    })
}


module.exports = {
    authenticateUser
}