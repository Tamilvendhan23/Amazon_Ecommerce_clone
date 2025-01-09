class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor)  //it gives where the error occured
    }
}

module.exports = ErrorHandler;