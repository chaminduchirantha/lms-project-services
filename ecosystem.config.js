module.exports = {
    apps: [
        {
            name: "config-server",
            cwd: "/home/chaminduchirantha2/lms-cloud-project-platform",
            script: "java",
            args: "-jar config-server/target/config-server-0.0.1-SNAPSHOT.jar",
            autorestart: true,
            restart_delay: 5000,
            out_file: "./logs/config-server-out.log",
            error_file: "./logs/config-server-error.log"
        },

        {
            name: "service-registry",
            cwd: "/home/chaminduchirantha2/lms-cloud-project-platform",
            script: "java",
            args: "-jar service-registry/target/service-registry-0.0.1-SNAPSHOT.jar",
            autorestart: true,
            restart_delay: 10000,
            out_file: "./logs/service-registry-out.log",
            error_file: "./logs/service-registry-error.log"
        },

        {
            name: "api-gateway",
            cwd: "/home/chaminduchirantha2/lms-cloud-project-platform",
            script: "java",
            args: "-jar api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
            autorestart: true,
            restart_delay: 10000,
            out_file: "./logs/api-gateway-out.log",
            error_file: "./logs/api-gateway-error.log"
        }
    ]
};