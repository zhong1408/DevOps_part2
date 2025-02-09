module.exports = {
  apps: [
    {
      name: "resource-mgmt",
      script: "index.js", // Main application entry file
      instances: "max", // Uses all available CPU cores
      watch: true, // Restarts on file changes
      autorestart: true, // Ensures automatic restart on failure
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "logs/error.log", // PM2 error log file
      out_file: "logs/combined.log", // PM2 combined output file
      time: true, // Adds timestamp to logs
    },
  ],
};
