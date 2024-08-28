function responseData(res, message = null, data = null, error = false, errorMessage = null, errorData = null, status = 200) {
    const errorCode = error ? "ERROR" : "NO_ERROR";
    if (error && !errorMessage) {
        errorMessage = 'An error has occurred.';
    }
    
    return res.send({
        status_code: status,
        message: message,
        error_code: errorCode,
        error_message: errorMessage,
        error_data: errorData,
        data: data,
    });
}

function response_exception(res, error_message) {
    responseData(res, null, null, true, error_message, null, 500);
}

function response_success(res, message = null, data = null) {
    responseData(res, message, data, false, null, null, 200);
}

function response_error(res, error_message = null, status_code = 500) {
    responseData(res, null, null, true, error_message, null, status_code);
}

module.exports = { 
    response_exception,
    response_success,
    response_error
};