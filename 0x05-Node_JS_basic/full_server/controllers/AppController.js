class AppController {
  static getHome(request, response) {
    response.status(200).end('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
