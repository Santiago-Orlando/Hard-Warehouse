const { UserModel } = require("../db/models/Users");


class UserServices {
  static async register(...data) {
    try {
      const response = await UserModel(...data).save();
      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async updateUser(id, ...data) {
    try {
      const options = {
        new: true,
        runValidators: true,
      };
      const response = await UserModel.findByIdAndUpdate(id, ...data, options);

      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async makeAdmin(id) {
    try {
      const response = await UserModel.findByIdAndUpdate(
        id,
        { admin: true },
        { new: true }
      );
      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async deleteUser(id) {
    try {
      await UserModel.findByIdAndDelete(id);
      return {
        error: false,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async getUsers() {
    try {
      const response = await UserModel.find();

      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }
}

module.exports = UserServices;
