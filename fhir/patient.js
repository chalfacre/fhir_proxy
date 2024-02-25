const client = require('./client')
const {getAuthToken} = require('./authToken')

const getPatient = async (req, res, next) => {
    try {
      let {id} = req.params;
      if ( id == null ) {
          id = ' '
      }
      const fclient = new client();
      const token = await getAuthToken() ;
      fclient.setAuthToken(token);
      const resource = await fclient.read({ resourceType: 'Patient', id: id }); 
      res.status(200).send(res.json(resource))
    } catch (error) {
      res.status(400);
    }
}

const createPatient = async (req, res, next) => {
    try {
        const fclient = new client();
        const token = await getAuthToken() ;
        fclient.setAuthToken(token);
        const resource = await fclient.create({ resourceType: 'Patient', body: req.body });
        res.status(200).send(res.json(resource))
        return resource ;
    } catch (error) {
      res.status(400);
    }
}

const updatePatient = async (req, res, next) => {
    try {
        const {id} = req.params;
        const fclient = new client();
        const token = await getAuthToken() ;
        fclient.setAuthToken(token);
        const resource = await fclient.update({ resourceType: 'Patient', id: id, body: req.body });
        res.status(200).send(res.json(resource))
        return resource ;
    } catch (error) {
      res.status(400);
    }
}

const deletePatient = async (req, res, next) => {
    try {
        const {id} = req.params;
        const fclient = new client();
        const token = await getAuthToken() ;
        fclient.setAuthToken(token);
        const resource = await fclient.delete({ resourceType: 'Patient', id: id });      
        res.status(200)
        return resource ;
    } catch (error) {
      res.status(400);
    }
}


const findPatient = async (req, res, next) => {
    try {
        const {family} = req.params;
        const fclient = new client();
        const token = await getAuthToken() ;
        fclient.setAuthToken(token);
        const bundle = await fclient.search({ resourceType: 'Patient', params: { family: family } });     
        res.status(200).send(res.json(bundle))
        return bundle ;
    } catch (error) {
      res.status(400).json({ message: 'Could not find patient.' });
    }
}


module.exports = { getPatient, createPatient, updatePatient, deletePatient, findPatient }