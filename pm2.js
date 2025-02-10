module.exports = {
  apps: [
    {
      name: "resource-mgmt",
      script: "index.js", 
      instances: "max", 
      watch: true, // Restarts on file changes
      autorestart: true, // Ensures automatic restart on failure
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "logs/error.log", 
      out_file: "logs/combined.log", 
      time: true, 
    },
  ],
};
