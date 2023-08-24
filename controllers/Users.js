import User from '../models/User.js';

export default class Users{
  constructor() {
    this.userModel = new User();
  }

  greet = (request, response) => {
    const userId = request.params.id;
    console.log(this.userModel.sampleModelFunction());

    response.json({
      'greetings': `Hello user with id: ${userId}`
    })
  }

  getAllUsers = async (request, response) => {
    const users = await this.userModel.getAllUsers();
    console.log(users)
    return response.json(users);
  }

  test = (request, response) => {
    return response.json({
      'message': 'hey'
    })
  }
}
