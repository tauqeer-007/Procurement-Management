const Users = require('../../src/models/Users')

//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: S I G N   I N : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//



exports.signIn = function (req, res) {

    res.json(true)
    }



exports.getUsers = async function (req, res) {
  let users = await Users.getUsers();
  console.log(users);
    res.json(users)
    }

