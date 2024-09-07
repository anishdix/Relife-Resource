require('dotenv').config();
const app = require('./app');
const connectDatabase = require('./src/config/database');

// Connect to the database
connectDatabase().catch(err => console.error('Database connection error:', err));

// for Vercel
module.exports = app;

// If running the server directly ("localy") (not on Vercel)
if (require.main === module) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}