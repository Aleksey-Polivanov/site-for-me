'use strict';

const nodemailer = require('nodemailer'),
      // client = require('../../until/contentfulClient'),
      log = require('../../../lib/log')(module),
      contentful = require('contentful-management'),
      config = require('../../../config/config');


const RegistrationService = {

    sendler: (email, subject, message, flag, next) => {

        let transporter = nodemailer.createTransport({

            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: 'poalex987@gmail.com',
                pass: 'MISTmare678'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let HelperOptions = {
            from: 'poalex987@gmail.com',
            to: email,
            subject: subject,
            html: message
        };

        transporter.sendMail(HelperOptions, (error, info) => {
            if(error){
                return log.info('error bla bla bla' + error);
            }
            log.info("The message was sent on " + email);
            log.info(info);

            if(flag){
                next()
            }
        });
    },

    saveInContentful: (name, email, phone, aboutUs, next)  => {

        let space_id = config.contentful.spaceId1;
        let contentType_id = 'registrations';

        const client = contentful.createClient({
            accessToken: config.contentful.personalKey
        });

        client.getSpace(space_id).then((space) => space.createEntry(contentType_id, {
            fields: {
                name: {
                    'en-US': name
                },
                email: {
                    'en-US': email
                },
                phone: {
                    'en-US': phone
                },
                aboutUs: {
                    'en-US': aboutUs
                }
            }
        }))
            .then((entry) => {
                log.info('Contacts Saved in Contentful');
                log.info(entry);
                next()
            })
            .catch(console.error);
    }
};

module.exports = RegistrationService;