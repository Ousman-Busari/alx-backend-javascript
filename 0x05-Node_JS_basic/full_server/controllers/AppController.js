class AppController {
  static getHome(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
