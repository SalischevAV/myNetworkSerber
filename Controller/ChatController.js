const userList = new Set();

module.exports.register = (user)=>{
    userList.add(user);
    return userList;
}

module.exports.unregister = (user)=>{
    userList.delete(user);
    return userList;
}