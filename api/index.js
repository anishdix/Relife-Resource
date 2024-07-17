require('dotenv').config();
const app = require('./app');
const connectDatabase = require('./src/config/database');

const start = async () => {
  try {
    await connectDatabase();
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to start the server:', error);
    process.exit(1);
  }
};

start();