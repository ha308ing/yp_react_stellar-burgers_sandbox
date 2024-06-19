import { authService } from "./service";

class AuthController {
  login = authService.login;
  signup = authService.signup;
}

export const authController = new AuthController();
