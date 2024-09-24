const { Router } = require('express');
const router = Router();
const dataController = require('../controllers/dataController');
const { validateToken, logout }  = require('../controllers/middlewareAuthentication');

//routes
// Example public route
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data)
});

//rutas para users
router.get('/api/listuser', dataController.listusers);

router.post('/api/adduser', dataController.adduser);

router.post('/api/verifyuser', dataController.verifyuser);

router.put('/api/updateuser/:id', dataController.updateuser);

router.delete('/api/deleteuser/:id', dataController.deleteuser);

router.delete('/api/deleteAllUsers', dataController.deleteAllUsers);



//rutas para horarios
router.get('/api/listschedule', validateToken, dataController.listshedules);

router.post('/api/addschedule', validateToken, dataController.addschedule);

router.put('/api/updateschedule/:id', validateToken, dataController.updateschedule);

router.delete('/api/deleteschedule/:id', validateToken, dataController.deleteschedule);

//rutas para actividades
router.get('/api/listactivity/:idUser', validateToken, dataController.listsactivity);

router.post('/api/addactivity', validateToken, dataController.addactivity);

router.put('/api/updateactivity/:id', validateToken,  dataController.updateactivity);

router.delete('/api/deleteactivity/:id', validateToken,  dataController.deleteactivity);


//rutas para inicio de sesión y cerrar sesión

router.post('/api/login', dataController.login);
router.post('/api/logout', validateToken, logout); // this logic is in the same as with the middlewareAuthentication.js file

module.exports = router;