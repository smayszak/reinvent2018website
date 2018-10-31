'use strict';
module.exports = function(app) {
    var diskController = require('../controllers/diskController');
  // todoList Routes
   app.route('/api/campaigns')
    .get(diskController.campaigns);
    
   app.route('/api/mapcampaign')
   .post(diskController.mapcampaign);
};
