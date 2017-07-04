'use strict';
const express = require('express'),
      router = express.Router(),
      log = require('../../../lib/log')(module),
      RegistrationService = require('./service'),
      validator = require('email-validator'),
      StakeholderService = require('../stakeholder/service');


router.post('/reg', (req, res, next) => {

    if(req.body.name === "" || req.body.email === "" || req.body.phone === "" || req.body.aboutUs === "") {
        log.info("Registration ERROR");
        res.sendStatus(400);
    }


    if(req.body.name !== "" && req.body.email !== "" && req.body.phone !== "" && req.body.aboutUs !== ""){

        if(!(validator.validate(req.body.email))){

            res.sendStatus(417);
        } else {

            let name = req.body.name;
            let email = req.body.email;
            let phone = req.body.phone;
            let aboutUs = req.body.aboutUs;
            let subject = 'Thank you for registration';
            let message = '<p>Thank you for registration</p><br/>' +
                '<p>We will contact you</p>';

            res.sendStatus(200);

            let flag = true;

            RegistrationService.sendler(email, subject, message, flag, () => {
                RegistrationService.saveInContentful(name, email, phone, aboutUs, () => {
                    StakeholderService.getStakeholdersFromContentful(req, res, 'stakeholder', (stakeholders) => {

                        if(stakeholders.length > 0){

                            let subject1 = 'New Registration';
                            let message1 = '<p>email: <b>' + email + '</b></p><br/>' +
                                '<p>name: <b>' + name + '</b></p><br/>' +
                                '<p>phone: <b>' + phone + '</b></p><br/>' +
                                '<p>aboutUs: <b>' + aboutUs + '</b></p><br/>';

                            let flag = false;

                            for (let email of stakeholders){
                                RegistrationService.sendler(email, subject1, message1, flag);
                            }
                        }
                    });
                });
            })
        }
    }
});

// router.post('/test', (req, res, next) => {
//
// });

module.exports = router;