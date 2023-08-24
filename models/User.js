import PsgModel from '../system/model.js';

export default class User extends PsgModel{
  constructor() {
    super();
  }

  sampleModelFunction = () => {
    return 'waddup Im a model function.';
  }

  getAllUsers = async () => {
    try {
      const query = "SELECT * FROM users";
      const [rows] = await this.connection.query(query);
      return rows;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
