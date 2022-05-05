const axios = require("axios");


exports.homeRoutes = (req,res)=>{
    res.render("main");
}

exports.index = (req,res)=>{
    //Make a get request to /api/users

     axios.get('http://localhost:3000/api/users')
     .then(function(response){
        
        res.render("index",{users: response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
}

exports.admin_edit = (req,res)=>{
    //Make a get request to /api/users

     axios.get('http://localhost:3000/api/users')
     .then(function(response){
        
        res.render("admin_edit",{users: response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
}
exports.about = (req,res)=>{
    res.render("about");
}

exports.add_user = (req,res)=>{
    res.render("add_user");
}

exports.login = (req,res)=>{
    res.render("login");
}



exports.update_user = (req,res)=>{
    axios.get('http://localhost:3000/api/users',{ params :{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}