export class LoggerService {

  info(message?: any, ...optionalParams) {
    console.info(message, optionalParams);
  }

  debug(message?: any, ...optionalParams: any[]) {
    console.debug(message, optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]) {
    console.warn(message, optionalParams);
  }

  error(message?: any, ...optionalParams: any[]) {
    console.error(message, optionalParams);
  }

  log(message?: any, ...optionalParams) {
    console.log(message, optionalParams);
  }
}
