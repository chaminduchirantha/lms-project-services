module.exports = {
    apps: [

        {
            name: "cloud-sql-auth-proxy",
            script: "./cloud-sql-proxy",
            args: "project-5cb0d26c-1f1d-4c90-862:asia-southeast1:mysql?port=3306 project-5cb0d26c-1f1d-4c90-862:asia-southeast1:postgresql?port=5432 --private-ip",
            out_file: "./logs/cloud-sql-proxy-out.log",
            error_file: "./logs/cloud-sql-proxy-error.log",
            autorestart: true,
            restart_delay: 5000
        },

        {
            name: "book-service",
            script: "bash",
            args: "-c 'sleep 30 && exec java -jar book-service/target/books-service-0.0.1-SNAPSHOT.jar'",
            out_file: "./logs/book-service-out.log",
            error_file: "./logs/book-service-error.log",
            instances: 2,
            exec_mode: "fork",
            autorestart: true,
            restart_delay: 10000
        },

        {
            name: "user-service",
            script: "bash",
            args: "-c 'sleep 30 && exec java -jar user-service/target/user-service-0.0.1-SNAPSHOT.jar'",
            out_file: "./logs/user-service-out.log",
            error_file: "./logs/user-service-error.log",
            instances: 2,
            exec_mode: "fork",
            autorestart: true,
            restart_delay: 10000
        },

        {
            name: "borrowing-service",
            script: "bash",
            args: "-c 'sleep 30 && exec java -jar borrowing-service/target/borrowing-service-0.0.1-SNAPSHOT.jar'",
            out_file: "./logs/borrowing-service-out.log",
            error_file: "./logs/borrowing-service-error.log",
            instances: 2,
            exec_mode: "fork",
            autorestart: true,
            restart_delay: 10000
        }
    ]
};