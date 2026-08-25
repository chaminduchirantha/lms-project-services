module.exports = {
    apps : [
        {
            name       : "book-service",
            script     : "java",
            args       : "-jar book-service/target/books-service-0.0.1-SNAPSHOT.jar",
            out_file   : "./logs/book-service-out.log",
            error_file : "./logs/book-service-error.log",
            instances  : 2,
            exec_mode  : "fork"
        },
        {
            name       : "user-service",
            script     : "java",
            args       : "-jar user-service/target/user-service-0.0.1-SNAPSHOT.jar",
            out_file   : "./logs/user-service-out.log",
            error_file : "./logs/user-service-error.log",
            instances  : 2,
            exec_mode  : "fork"
        },
        {
            name       : "borrowing-service",
            script     : "java",
            args       : "-jar borrowing-service/target/borrowing-service-0.0.1-SNAPSHOT.jar",
            out_file   : "./logs/borrowing-service-out.log",
            error_file : "./logs/borrowing-service-error.log",
            instances  : 2,
            exec_mode  : "fork"
        }
    ]
}