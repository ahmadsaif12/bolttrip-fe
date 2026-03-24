export interface LoginPayload {
  email:    string;
  password: string;
}

export interface RegisterPayload {
  email:     string;
  password:  string;
  name:      string;
  phone:     string;      
  user_type: string;    
}

export interface OtpPayload {
  email: string;
  otp?:  string;
}

export interface AuthTokens {
  access:  string;
  refresh: string;
}

export interface AuthResponse extends AuthTokens {
  user: {
    id:    number;
    email: string;
    name:  string;
    phone: string;
    user_type: string;
    image: string | null;
  };
}

export interface ChangePasswordPayload {
  old_password:     string;
  new_password:     string;
  confirm_password: string;
}

export interface ResetPasswordPayload {
  email: string;
}

export interface ResetPasswordConfirmPayload {
  new_password:     string;
  confirm_password: string;
}