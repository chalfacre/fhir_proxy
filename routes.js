const express = require('express')
const {getPatient, updatePatient, deletePatient, createPatient, findPatient} = require('./fhir/patient')
const {fhirtest} = require('./fhir/compatability')

const router = express.Router()


function healthHandler(req, res, next) {
  res.status(200).send(`server is OK at ${new Date()}`)
}

router.get('/health', healthHandler)
router.get('/patient/:id', getPatient)
router.get('/patients', getPatient)
router.put('/patient/:id', updatePatient)
router.delete('/patient/:id', deletePatient)
router.post('/addpatient', createPatient)
router.get('/findpatient', findPatient)
router.get('/fhir', fhirtest)

module.exports = router
