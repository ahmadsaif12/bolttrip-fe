'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signOut } from "next-auth/react";
import {
  registerUser,
  requestOtp,
  verifyOtp,
  changePassword,
  resetPassword,
  resetPasswordConfirm,
} from "../service/auth.service";
import type {
  LoginPayload,
  RegisterPayload,
  OtpPayload,
  ChangePasswordPayload,
  ResetPasswordPayload,
  ResetPasswordConfirmPayload,
} from "../types/auth.types";

export const useRegister = () =>
  useMutation({
    mutationFn: (payload: RegisterPayload) => registerUser(payload),
  });

export const useLogin = () =>
  useMutation({
    mutationFn: async ({ email, password }: LoginPayload) => {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) throw new Error(result.error);
      return result;
    },
  });

export const useGoogleLogin = () =>
  useMutation({
    mutationFn: (callbackUrl: string = "/") =>
      signIn("google", { callbackUrl, redirect: true }),
  });

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (callbackUrl: string = "/login") => {
      const result = await signOut({ redirect: false, callbackUrl });
      return result;
    },
    onSuccess: (data) => {
      queryClient.clear();
      if (data?.url) window.location.href = data.url;
    },
  });
};

export const useRequestOtp = () =>
  useMutation({
    mutationFn: (payload: OtpPayload) => requestOtp(payload),
  });

export const useVerifyOtp = () =>
  useMutation({
    mutationFn: (payload: Required<OtpPayload>) => verifyOtp(payload),
  });

export const useChangePassword = () =>
  useMutation({
    mutationFn: (payload: ChangePasswordPayload) => changePassword(payload),
  });

export const useResetPassword = () =>
  useMutation({
    mutationFn: (payload: ResetPasswordPayload) => resetPassword(payload),
  });

export const useResetPasswordConfirm = (uidb64: string, token: string) =>
  useMutation({
    mutationFn: (payload: ResetPasswordConfirmPayload) =>
      resetPasswordConfirm(uidb64, token, payload),
  });
