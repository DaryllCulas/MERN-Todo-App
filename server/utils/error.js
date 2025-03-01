export function createError(statusCode, message) {
    const error = new Error(message);
    error.message = message;
    error.statusCode = statusCode;
    return error;
}