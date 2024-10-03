const express = require('express');
const patientController = require('../controllers/patientController');
const { validatePatient, validatePatientPost } = require('../validators/patientValidator');

const router = express.Router();

router.get('/', patientController.getAllPatients);
router.get('/:id', patientController.getPatientById);
router.post('/', validatePatientPost, patientController.createPatient);
router.patch('/:id', validatePatient, patientController.updatePatientPatch);
router.delete('/:id', patientController.deletePatient);

module.exports = router;