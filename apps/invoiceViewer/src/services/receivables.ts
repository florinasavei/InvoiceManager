import { IReceivableDTO } from "@invoice-manager/models";
import httpService from "./http";

const getAll = async (): Promise<IReceivableDTO[]> => {
  const response = await httpService.get(import.meta.env.VITE_API_RECEIVABLES_URL);
  return response.data;
};

export default {
  getAll,
};
