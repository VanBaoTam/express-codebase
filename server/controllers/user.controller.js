import { responseMessageInstance } from "../utils/index.js";

//------------------------------------------------
export class UserController {
  static instance;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new UserController();
    }
    return this.instance;
  }

  //-----------------------------------------------
  async Hello(_, res) {
    return await responseMessageInstance.getSuccess(
      res,
      200,
      "Hello World From User Router!",
      {}
    );
  }
}

//------------------------------------------------
export const userInstance = UserController.getInstance();
