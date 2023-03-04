import axios, { AxiosRequestConfig, HttpStatusCode } from "axios";

import { notify } from "app/providers/with-notifications";
import { ResponseStatus } from "../../../main";

class ApiProvider {
  static handleErrorMessage(obj: {
    data?: {} | string;
    results?: number;
    status: ResponseStatus;
    message: string;
  }) {
    if (!obj.message) return;
    // if (obj.code === 4003) return;

    notify({
      message: obj.message || "",
      type: "10000",
    });
  }

  static handleErrorCodes(code: number): void {
    if (code === undefined || code === null) return;
    switch (code) {
      case 4003: {
        break;
      }
    }
  }

  static async fetch(config: AxiosRequestConfig<any>) {
    try {
      // const fetch = fetchBuilder(originalFetch, options);

      const data = await axios<{
        data?: {} | string;
        results?: number;
        status: ResponseStatus;
        message: string;
      }>({
        method: "GET",
        validateStatus: function (status) {
          return status >= 200 && status < 400;
        },
        ...config,
      });

      ApiProvider.handleErrorCodes(data.status);

      if (data.status === 400 || data.status === 500) {
        ApiProvider.handleErrorMessage(data as any);
      }

      return data;
    } catch (err: any) {
      console.error("Fetch failed");
      console.error(err, config);
      // notify({
      //   message: err.msg || err.message || '',
      //   type: err.code || '10000',
      // });
      return { data: null, results: 0, status: HttpStatusCode.BadRequest };
    }
  }
}

export default ApiProvider;
