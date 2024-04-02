const Login = require("../../Model/logins")
class ChangeAccount {
    index (req,res) {
        res.json("hel")
    }
    handleChange (req,res) {
        const id = req.body.id;
        Login.updateOne({_id:id}, req.body)
        .then(() => res.json({result:"successfully"}))
        .catch((error) => res.json({error:error}))
    }
}

module.exports = new ChangeAccount()