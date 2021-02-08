const { Router } = require('express');
const { logs, validateSchema } = require('../models/LogEntry');

const router = Router();

router.get('/', (req, res) => {
  res.send(logs);
});

// eslint-disable-next-line
router.post('/', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { error } = validateSchema(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const log = {
    id: logs.length + 1,
    startLatitude: req.body.startLatitude,
    startLongitude: req.body.startLatitude,
    endLatitude: req.body.endLatitude,
    endLongitude: req.body.endLongitude,
    freightDescription: req.body.freightDescription,
  };

  logs.push(log);
  res.send(log);
});

// eslint-disable-next-line
router.put('/:id', (req, res) => {
  // eslint-disable-next-line
  const log = logs.find((l) => l.id === parseInt(req.params.id));
  if (!log) return res.status(404).send('The log With Given ID was not found');
  // eslint-disable-next-line no-unused-vars
  const { error } = validateSchema(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
  }

  log.startLatitude = req.body.startLatitude;
  log.startLongitude = req.body.startLatitude;
  log.endLatitude = req.body.endLatitude;
  log.endLongitude = req.body.endLongitude;
  log.freightDescription = req.body.freightDescription;

  res.send(log);
});

// eslint-disable-next-line
router.delete('/:id', (req, res) => {
  // eslint-disable-next-line
  const log = logs.find((l) => l.id === parseInt(req.params.id));
  if (!log) return res.status(404).send('The log With Given ID was not found');

  const index = logs.indexOf(log);
  logs.splice(index, 1);

  res.send(log);
});

module.exports = router;
