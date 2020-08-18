const express = require('express');
const ConversationsService = require('./../services/conversations');

const conversationsApi = (app) => {
  const router = express.Router();
  app.use('/api/conversations/', router);

  const conversationsService = new ConversationsService();

  router.get('/', async (req, res, next) => {
    const docs = await conversationsService.getAllConversations();
    res.status(200).json(docs);
  });


  router.post('/report', async (req, res, next) => {
    try {
      const body = req.body;
      const task = client.createTask('tasks.suma');
      const { taskId } = task.applyAsync();
      res.status(200).json({taskId});
    } catch (error) {
      next(error);
    }
  });

  router.get('/stats', async (req, res, next) => {
    try {
      const { start, end } = req.query;
      const rta = await conversationsService.getStats(start, end);
      res.status(200).json(rta);
    } catch (error) {
      next(error);
    }
  });

}

module.exports = conversationsApi;