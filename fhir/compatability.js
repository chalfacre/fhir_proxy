const client = require('./client')

const fhirtest = async (req, res, next) => {
    try {
      const fclient = new client();
      const resource = await fclient.compatibility(); 
      res.status(200).send(res.json(resource))
      return resource ;
    } catch (error) {
      res.status(400);
    }
}

module.exports = { fhirtest }