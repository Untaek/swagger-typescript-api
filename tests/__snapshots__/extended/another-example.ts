/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** some description */
export interface IMySuperPrefixAmountMySuperSuffix {
  /** some description */
  currency: IMySuperPrefixCurrencyMySuperSuffix;
  /**
   * some description
   * @format double
   * @min 0.01
   * @max 1000000000000000
   */
  value: number;
}

/**
 * An uploaded response
 * Describes the result of uploading an image resource
 * @example {"code":0,"type":"type","message":"message"}
 */
export interface IMySuperPrefixApiResponseMySuperSuffix {
  /** @format int32 */
  code?: number;
  message?: string;
  type?: string;
}

/**
 * Pet category
 * A category for a pet
 * @example {"name":"name","id":6}
 */
export interface IMySuperPrefixCategoryMySuperSuffix {
  /** @format int64 */
  id?: number;
  name?: string;
}

/**
 * some description
 * @pattern ^[A-Z]{3,3}$
 */
export type IMySuperPrefixCurrencyMySuperSuffix = string;

export type IMySuperPrefixFindPetsByStatusDataMySuperSuffix =
  IMySuperPrefixPetMySuperSuffix[];

/** @default "available" */
export enum IMySuperPrefixFindPetsByStatusParams1StatusEnumMySuperSuffix {
  Available = "available",
  Pending = "pending",
  Sold = "sold",
}

export interface IMySuperPrefixFindPetsByStatusParamsMySuperSuffix {
  /** Status values that need to be considered for filter */
  status: IMySuperPrefixStatusEnumMySuperSuffix[];
}

export type IMySuperPrefixFindPetsByTagsDataMySuperSuffix =
  IMySuperPrefixPetMySuperSuffix[];

export interface IMySuperPrefixFindPetsByTagsParamsMySuperSuffix {
  /** Tags to filter by */
  tags: string[];
}

export type IMySuperPrefixFormUrlEncodedRequest2DataMySuperSuffix = any;

export type IMySuperPrefixFormUrlEncodedRequestDataMySuperSuffix = any;

export type IMySuperPrefixGetInventoryDataMySuperSuffix = Record<
  string,
  number
>;

export type IMySuperPrefixGetOrderByIdDataMySuperSuffix =
  IMySuperPrefixOrderMySuperSuffix;

export type IMySuperPrefixGetPetByIdDataMySuperSuffix =
  IMySuperPrefixPetMySuperSuffix;

export type IMySuperPrefixGetUserByNameDataMySuperSuffix =
  IMySuperPrefixUserMySuperSuffix;

export type IMySuperPrefixLoginUserDataMySuperSuffix = string;

export interface IMySuperPrefixLoginUserParamsMySuperSuffix {
  /** The password for login in clear text */
  password: string;
  /** The user name for login */
  username: string;
}

/**
 * Pet Order
 * An order for a pets from the pet store
 * @example {"petId":6,"quantity":1,"id":0,"shipDate":"2000-01-23T04:56:07.000+00:00","complete":false,"status":"placed"}
 */
export interface IMySuperPrefixOrderMySuperSuffix {
  /** @default false */
  complete?: boolean;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  petId?: number;
  /** @format int32 */
  quantity?: number;
  /** @format date-time */
  shipDate?: string;
  /** Order Status */
  status?: IMySuperPrefixOrderStatusEnumMySuperSuffix;
}

/** Order Status */
export enum IMySuperPrefixOrderStatusEnumMySuperSuffix {
  Placed = "placed",
  Approved = "approved",
  Delivered = "delivered",
}

export enum IMySuperPrefixPetIdsMySuperSuffix {
  Value10 = 10,
  Value20 = 20,
  Value30 = 30,
  Value40 = 40,
}

export enum IMySuperPrefixPetIdsWithWrongEnumMySuperSuffix {
  Value10 = 10,
  Value20 = 20,
  Value30 = 30,
  Value40 = 40,
}

/**
 * a Pet
 * A pet for sale in the pet store
 * @example {"photoUrls":["photoUrls","photoUrls"],"name":"doggie","id":0,"category":{"name":"name","id":6},"tags":[{"name":"name","id":1},{"name":"name","id":1}],"status":"available"}
 */
export interface IMySuperPrefixPetMySuperSuffix {
  /** A category for a pet */
  category?: IMySuperPrefixCategoryMySuperSuffix;
  /** @format int64 */
  id?: number;
  /** @example "doggie" */
  name: string;
  photoUrls: string[];
  /** pet status in the store */
  status?: IMySuperPrefixPetStatusEnumMySuperSuffix;
  tags?: IMySuperPrefixTagMySuperSuffix[];
}

export enum IMySuperPrefixPetNamesMySuperSuffix {
  FluffyHero = "Fluffy Hero",
  PiggyPo = "Piggy Po",
  SwaggerTypescriptApi = "Swagger Typescript Api",
  UPPER_CASE = "UPPER_CASE",
}

/** pet status in the store */
export enum IMySuperPrefixPetStatusEnumMySuperSuffix {
  Available = "available",
  Pending = "pending",
  Sold = "sold",
}

export type IMySuperPrefixPlaceOrderDataMySuperSuffix =
  IMySuperPrefixOrderMySuperSuffix;

export type IMySuperPrefixSingleFormUrlEncodedRequestDataMySuperSuffix = any;

export interface IMySuperPrefixSingleFormUrlEncodedRequestPayloadMySuperSuffix {
  /** @format string */
  param1: string;
  param2: string;
}

/** @default "available" */
export enum IMySuperPrefixStatusEnumMySuperSuffix {
  Available = "available",
  Pending = "pending",
  Sold = "sold",
}

/**
 * Pet Tag
 * A tag for a pet
 * @example {"name":"name","id":1}
 */
export interface IMySuperPrefixTagMySuperSuffix {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface IMySuperPrefixUpdatePetWithFormPayloadMySuperSuffix {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

export type IMySuperPrefixUploadFileDataMySuperSuffix =
  IMySuperPrefixApiResponseMySuperSuffix;

export interface IMySuperPrefixUploadFilePayloadMySuperSuffix {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: File;
}

/**
 * a User
 * A User who is purchasing from the pet store
 * @example {"firstName":"firstName","lastName":"lastName","password":"password","userStatus":6,"phone":"phone","id":0,"email":"email","username":"username"}
 */
export interface IMySuperPrefixUserMySuperSuffix {
  email?: string;
  firstName?: string;
  /** @format int64 */
  id?: number;
  lastName?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   * @format int32
   */
  userStatus?: number;
  username?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://petstore.swagger.io/v2";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Swagger Petstore
 * @version 1.0.0
 * @license Apache-2.0 (http://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService http://swagger.io/terms/
 * @baseUrl http://petstore.swagger.io/v2
 * @externalDocs http://swagger.io
 * @contact <apiteam@swagger.io>
 *
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  pet = {
    /**
     * No description
     *
     * @tags pet
     * @name AddPet
     * @summary Add a new pet to the store
     * @request POST:/pet
     * @secure
     */
    addPet: (
      body: IMySuperPrefixPetMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/pet`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pet
     * @name DeletePet
     * @summary Deletes a pet
     * @request DELETE:/pet/{petId}
     * @secure
     */
    deletePet: (petId: number, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/pet/${petId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Multiple status values can be provided with comma separated strings
     *
     * @tags pet
     * @name FindPetsByStatus
     * @summary Finds Pets by status
     * @request GET:/pet/findByStatus
     * @secure
     */
    findPetsByStatus: (
      query: IMySuperPrefixFindPetsByStatusParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixFindPetsByStatusDataMySuperSuffix, void>({
        path: `/pet/findByStatus`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     *
     * @tags pet
     * @name FindPetsByTags
     * @summary Finds Pets by tags
     * @request GET:/pet/findByTags
     * @deprecated
     * @secure
     */
    findPetsByTags: (
      query: IMySuperPrefixFindPetsByTagsParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixFindPetsByTagsDataMySuperSuffix, void>({
        path: `/pet/findByTags`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pet
     * @name FormUrlEncodedRequest
     * @summary summary
     * @request POST:/pet/form-url-encoded
     */
    formUrlEncodedRequest: (
      data: {
        /** @format string */
        param1: string;
        param2: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixFormUrlEncodedRequestDataMySuperSuffix, void>({
        path: `/pet/form-url-encoded`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pet
     * @name FormUrlEncodedRequest2
     * @summary summary
     * @request POST:/pet/end-form-url-encoded
     * @originalName formUrlEncodedRequest
     * @duplicate
     */
    formUrlEncodedRequest2: (
      data: {
        /** @format string */
        param1: string;
        param2: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixFormUrlEncodedRequest2DataMySuperSuffix, void>(
        {
          path: `/pet/end-form-url-encoded`,
          method: "POST",
          body: data,
          type: ContentType.UrlEncoded,
          ...params,
        },
      ),

    /**
     * @description Returns a single pet
     *
     * @tags pet
     * @name GetPetById
     * @summary Find pet by ID
     * @request GET:/pet/{petId}
     * @secure
     */
    getPetById: (petId: number, params: RequestParams = {}) =>
      this.request<IMySuperPrefixGetPetByIdDataMySuperSuffix, void>({
        path: `/pet/${petId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pet
     * @name SingleFormUrlEncodedRequest
     * @summary summary
     * @request POST:/pet/single-form-url-encoded
     */
    singleFormUrlEncodedRequest: (
      data: IMySuperPrefixSingleFormUrlEncodedRequestPayloadMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<
        IMySuperPrefixSingleFormUrlEncodedRequestDataMySuperSuffix,
        void
      >({
        path: `/pet/single-form-url-encoded`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pet
     * @name UpdatePet
     * @summary Update an existing pet
     * @request PUT:/pet
     * @secure
     */
    updatePet: (
      body: IMySuperPrefixPetMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/pet`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pet
     * @name UpdatePetWithForm
     * @summary Updates a pet in the store with form data
     * @request POST:/pet/{petId}
     * @secure
     */
    updatePetWithForm: (
      petId: number,
      data: IMySuperPrefixUpdatePetWithFormPayloadMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/pet/${petId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pet
     * @name UploadFile
     * @summary uploads an image
     * @request POST:/pet/{petId}/uploadImage
     * @secure
     */
    uploadFile: (
      petId: number,
      data: IMySuperPrefixUploadFilePayloadMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixUploadFileDataMySuperSuffix, any>({
        path: `/pet/${petId}/uploadImage`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  store = {
    /**
     * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     *
     * @tags store
     * @name DeleteOrder
     * @summary Delete purchase order by ID
     * @request DELETE:/store/order/{orderId}
     */
    deleteOrder: (orderId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/store/order/${orderId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Returns a map of status codes to quantities
     *
     * @tags store
     * @name GetInventory
     * @summary Returns pet inventories by status
     * @request GET:/store/inventory
     * @secure
     */
    getInventory: (params: RequestParams = {}) =>
      this.request<IMySuperPrefixGetInventoryDataMySuperSuffix, any>({
        path: `/store/inventory`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     *
     * @tags store
     * @name GetOrderById
     * @summary Find purchase order by ID
     * @request GET:/store/order/{orderId}
     */
    getOrderById: (orderId: number, params: RequestParams = {}) =>
      this.request<IMySuperPrefixGetOrderByIdDataMySuperSuffix, void>({
        path: `/store/order/${orderId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags store
     * @name PlaceOrder
     * @summary Place an order for a pet
     * @request POST:/store/order
     */
    placeOrder: (
      body: IMySuperPrefixOrderMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixPlaceOrderDataMySuperSuffix, void>({
        path: `/store/order`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  user = {
    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name CreateUser
     * @summary Create user
     * @request POST:/user
     */
    createUser: (
      body: IMySuperPrefixUserMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/user`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name CreateUsersWithArrayInput
     * @summary Creates list of users with given input array
     * @request POST:/user/createWithArray
     */
    createUsersWithArrayInput: (
      body: IMySuperPrefixUserMySuperSuffix[],
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/user/createWithArray`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name CreateUsersWithListInput
     * @summary Creates list of users with given input array
     * @request POST:/user/createWithList
     */
    createUsersWithListInput: (
      body: IMySuperPrefixUserMySuperSuffix[],
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/user/createWithList`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name DeleteUser
     * @summary Delete user
     * @request DELETE:/user/{username}
     */
    deleteUser: (username: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/user/${username}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name GetUserByName
     * @summary Get user by user name
     * @request GET:/user/{username}
     */
    getUserByName: (username: string, params: RequestParams = {}) =>
      this.request<IMySuperPrefixGetUserByNameDataMySuperSuffix, void>({
        path: `/user/${username}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name LoginUser
     * @summary Logs user into the system
     * @request GET:/user/login
     */
    loginUser: (
      query: IMySuperPrefixLoginUserParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixLoginUserDataMySuperSuffix, void>({
        path: `/user/login`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name LogoutUser
     * @summary Logs out current logged in user session
     * @request GET:/user/logout
     */
    logoutUser: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/user/logout`,
        method: "GET",
        ...params,
      }),

    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name UpdateUser
     * @summary Updated user
     * @request PUT:/user/{username}
     */
    updateUser: (
      username: string,
      body: IMySuperPrefixUserMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/user/${username}`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
}
