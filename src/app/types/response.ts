export interface APIResponse {
  data: data[],
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
  description: string;
  total: string;
};

interface data {
  total: string;
  description: string;
}