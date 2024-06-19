import { RootService } from "../root";

const AUTH_ENDPOINT = "/auth";
const SIGNIN_ENDPOINT = "/signin";
const SIGNUP_ENDPOINT = "/signup";

class AuthService extends RootService {
  constructor() {
    super(AUTH_ENDPOINT);
  }

  login = async (data) => {
    try {
      const response = await this.postRequest(SIGNIN_ENDPOINT, data);

      console.log({ loginResponse: response });
    } catch (error) {
      throw Error(error);
    }
  };

  signup = async (data) => {
    try {
      const response = await this.postRequest(SIGNUP_ENDPOINT, data);
      console.log({ signupResponse: response });
    } catch (error) {
      throw Error(error);
    }
  };
}

export const authService = new AuthService();
