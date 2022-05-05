const express=require("express");
const route=express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/',services.homeRoutes);
/**
 * @description add users
 * @method GET /add-users
 */
route.get('/add-user',services.add_user)
/**
 * @description for update user
 * @method GET /update-user
 */
route.get('/update-user',services.update_user)

/**
 * @description for user list
 * @method GET /index
 */
route.get('/index',services.index)

/**
 * @description for about
 * @method GET /about
 */
 route.get('/about',services.about)

 /**
 * @description for login
 * @method GET /login
 */
  route.get('/login',services.login)

  /**
 * @description for admin_edit
 * @method GET /admin_edit
 */
   route.get('/admin_edit',services.admin_edit)


//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.get('/api/users/delete',controller.delete);

module.exports = route