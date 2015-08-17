'use strict';

var express = require('express');
var controller = require('./request.controller');
var ironMQ = require('../../ironmq/ironmq.service');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create, ironMQ.sendMessageOnVRAqueue);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

router.post('/refresh',auth.isAuthenticated() , controller.refresh);
router.post('/refresh/:id',auth.isAuthenticated() , controller.refresh_single);

module.exports = router;