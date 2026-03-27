import { publicClient, apiClient } from "@/service/apiClient";
import { ENDPOINTS } from "@/service/endpoints";
import type {
  LoginPayload,
  RegisterPayload,
  OtpPayload,
  ChangePasswordPayload,
  ResetPasswordPayload,
  ResetPasswordConfirmPayload,
  AuthResponse,
  AuthTokens,
} from "../types/auth.types";

export const registerUser = async (payload: RegisterPayload) => {
  const response = await publicClient.post<AuthResponse>(ENDPOINTS.auth.register, payload);
  return response.data;
};

export const loginUser = async (payload: LoginPayload) => {
  const response = await publicClient.post<AuthResponse>(ENDPOINTS.auth.login, payload);
  return response.data;
};

export const refreshToken = async (refresh: string) => {
  const response = await publicClient.post<AuthTokens>(ENDPOINTS.auth.tokenRefresh, { refresh });
  return response.data;
};

export const requestOtp = (payload: OtpPayload) =>
  publicClient.post(ENDPOINTS.auth.requestOtp, payload);

export const verifyOtp = (payload: Required<OtpPayload>) =>
  publicClient.post(ENDPOINTS.auth.verifyOtp, payload);

export const resetPassword = (payload: ResetPasswordPayload) =>
  publicClient.post(ENDPOINTS.auth.resetPassword, payload);

export const resetPasswordConfirm = (
  uidb64: string,
  token: string,
  payload: ResetPasswordConfirmPayload
) =>
  publicClient.post(ENDPOINTS.auth.resetPasswordConfirm(uidb64, token), payload);

export const changePassword = (payload: ChangePasswordPayload) =>
  apiClient.post(ENDPOINTS.auth.changePassword, payload);
