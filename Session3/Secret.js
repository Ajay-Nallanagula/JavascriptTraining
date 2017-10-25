//http://www.codewars.com/kata/can-you-keep-a-secret
function createSecretHolder(secret) {
    return {
        getSecret: function getsecret() {
            return secret;
        },
        setSecret: function setsecret(val) {
            secret = val;
            return secret;
        }
    }
}