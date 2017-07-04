'use strict';

const nodemailer = require('nodemailer'),
      contentful = require('contentful-management'),
      log = require('../../../lib/log')(module),
      config = require('../../../config/config');


const StakeholderService = {

    getStakeholdersFromContentful: (req, res, contentType, next)  => {

        let space_id = config.contentful.spaceId2;
        let contentType_id = contentType;

        let stakeholders = [];

        const client = contentful.createClient({
            accessToken: config.contentful.personalKey
        });

        client.getSpace(space_id)
            .then((space) => space.getEntries({
                content_type: contentType_id
            }))
            .then((response) => {

            log.info(response.items);

            for(let item of response.items){
                stakeholders.push(item.fields.email['en-US']);
            }
                next(stakeholders);
            })

            .catch(console.error);
    }
};

module.exports = StakeholderService;