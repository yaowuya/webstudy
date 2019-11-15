const userDocs=[
    {_id:"1",username: "12", header: "32"},
    {_id:"2",username: "122", header: "342"},
    {_id:"3",username: "132", header: "3w2"},
    {_id:"4",username: "152", header: "322"},
]

const users = userDocs.reduce((users, user) => {
    console.log(users,user);
    users[user._id] = {username: user.username, header: user.header}
    return users
} , {})

userDocs.forEach(function (key,value) {
    console.log(key,value);
})
