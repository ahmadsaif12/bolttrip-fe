import { apiClient } from "./api";

export const DashboardService = {
  getDashboardData: async () => {
    return apiClient.get("/api/misc/dashboard/");
  },
};
