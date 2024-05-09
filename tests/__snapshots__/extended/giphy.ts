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

/** Your request was formatted incorrectly or missing required parameters. */
export type IMySuperPrefixBadRequestMySuperSuffix = any;

/** You weren't authorized to make your request; most likely this indicates an issue with your API Key. */
export type IMySuperPrefixForbiddenMySuperSuffix = any;

export interface IMySuperPrefixGetGifByIdDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix;
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
}

export interface IMySuperPrefixGetGifsByIdDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix[];
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
  /** The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions. */
  pagination?: IMySuperPrefixPaginationMySuperSuffix;
}

export interface IMySuperPrefixGetGifsByIdParamsMySuperSuffix {
  /** Filters results by specified GIF IDs, separated by commas. */
  ids?: string;
}

export interface IMySuperPrefixGifMySuperSuffix {
  /**
   * The unique bit.ly URL for this GIF
   * @example "http://gph.is/1gsWDcL"
   */
  bitly_url?: string;
  /** Currently unused */
  content_url?: string;
  /**
   * The date this GIF was added to the GIPHY database.
   * @format date-time
   * @example "2013-08-01 12:41:48"
   */
  create_datetime?: string;
  /**
   * A URL used for embedding this GIF
   * @example "http://giphy.com/embed/YsTs5ltWtEhnq"
   */
  embded_url?: string;
  /** An array of featured tags for this GIF (Note: Not available when using the Public Beta Key) */
  featured_tags?: string[];
  /**
   * This GIF's unique ID
   * @example "YsTs5ltWtEhnq"
   */
  id?: string;
  /** An object containing data for various available formats and sizes of this GIF. */
  images?: {
    /** Data surrounding a version of this GIF downsized to be under 2mb. */
    downsized?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a version of this GIF downsized to be under 8mb. */
    downsized_large?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a version of this GIF downsized to be under 5mb. */
    downsized_medium?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a version of this GIF downsized to be under 200kb. */
    downsized_small?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a static preview image of the downsized version of this GIF. */
    downsized_still?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding versions of this GIF with a fixed height of 200 pixels. Good for mobile use. */
    fixed_height?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding versions of this GIF with a fixed height of 200 pixels and the number of frames reduced to 6. */
    fixed_height_downsampled?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding versions of this GIF with a fixed height of 100 pixels. Good for mobile keyboards. */
    fixed_height_small?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a static image of this GIF with a fixed height of 100 pixels. */
    fixed_height_small_still?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a static image of this GIF with a fixed height of 200 pixels. */
    fixed_height_still?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding versions of this GIF with a fixed width of 200 pixels. Good for mobile use. */
    fixed_width?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding versions of this GIF with a fixed width of 200 pixels and the number of frames reduced to 6. */
    fixed_width_downsampled?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding versions of this GIF with a fixed width of 100 pixels. Good for mobile keyboards. */
    fixed_width_small?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a static image of this GIF with a fixed width of 100 pixels. */
    fixed_width_small_still?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a static image of this GIF with a fixed width of 200 pixels. */
    fixed_width_still?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a version of this GIF set to loop for 15 seconds. */
    looping?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding the original version of this GIF. Good for desktop use. */
    original?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a static preview image of the original GIF. */
    original_still?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a version of this GIF in .MP4 format limited to 50kb that displays the first 1-2 seconds of the GIF. */
    preview?: IMySuperPrefixImageMySuperSuffix;
    /** Data surrounding a version of this GIF limited to 50kb that displays the first 1-2 seconds of the GIF. */
    preview_gif?: IMySuperPrefixImageMySuperSuffix;
  };
  /**
   * The creation or upload date from this GIF's source.
   * @format date-time
   * @example "2013-08-01 12:41:48"
   */
  import_datetime?: string;
  /**
   * The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R
   * @example "g"
   */
  rating?: string;
  /**
   * The unique slug used in this GIF's URL
   * @example "confused-flying-YsTs5ltWtEhnq"
   */
  slug?: string;
  /**
   * The page on which this GIF was found
   * @example "http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/"
   */
  source?: string;
  /**
   * The URL of the webpage on which this GIF was found.
   * @example "http://cheezburger.com/5282328320"
   */
  source_post_url?: string;
  /**
   * The top level domain of the source URL.
   * @example "cheezburger.com"
   */
  source_tld?: string;
  /** An array of tags for this GIF (Note: Not available when using the Public Beta Key) */
  tags?: string[];
  /**
   * The date on which this gif was marked trending, if applicable.
   * @format date-time
   * @example "2013-08-01 12:41:48"
   */
  trending_datetime?: string;
  /**
   * Type of the gif. By default, this is almost always gif
   * @default "gif"
   */
  type?: IMySuperPrefixGifTypeEnumMySuperSuffix;
  /**
   * The date on which this GIF was last updated.
   * @format date-time
   * @example "2013-08-01 12:41:48"
   */
  update_datetime?: string;
  /**
   * The unique URL for this GIF
   * @example "http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq"
   */
  url?: string;
  /** The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more. */
  user?: IMySuperPrefixUserMySuperSuffix;
  /**
   * The username this GIF is attached to, if applicable
   * @example "JoeCool4000"
   */
  username?: string;
}

/**
 * Type of the gif. By default, this is almost always gif
 * @default "gif"
 */
export enum IMySuperPrefixGifTypeEnumMySuperSuffix {
  Gif = "gif",
}

export interface IMySuperPrefixImageMySuperSuffix {
  /**
   * The URL for this GIF in .MP4 format.
   * @example "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4"
   */
  mp4?: string;
  /**
   * The size in bytes of the .MP4 file corresponding to this GIF.
   * @example "25123"
   */
  mp4_size?: string;
  /**
   * The number of frames in this GIF.
   * @example "15"
   */
  frames?: string;
  /**
   * The height of this GIF in pixels.
   * @example "200"
   */
  height?: string;
  /**
   * The size of this GIF in bytes.
   * @example "32381"
   */
  size?: string;
  /**
   * The publicly-accessible direct URL for this GIF.
   * @example "https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif"
   */
  url?: string;
  /**
   * The URL for this GIF in .webp format.
   * @example "https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp"
   */
  webp?: string;
  /**
   * The size in bytes of the .webp file corresponding to this GIF.
   * @example "12321"
   */
  webp_size?: string;
  /**
   * The width of this GIF in pixels.
   * @example "320"
   */
  width?: string;
}

/** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
export interface IMySuperPrefixMetaMySuperSuffix {
  /**
   * HTTP Response Message
   * @example "OK"
   */
  msg?: string;
  /**
   * A unique ID paired with this response from the API.
   * @example "57eea03c72381f86e05c35d2"
   */
  response_id?: string;
  /**
   * HTTP Response Code
   * @format int32
   * @example 200
   */
  status?: number;
}

/** The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist. */
export type IMySuperPrefixNotFoundMySuperSuffix = any;

/** The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions. */
export interface IMySuperPrefixPaginationMySuperSuffix {
  /**
   * Total number of items returned.
   * @format int32
   * @example 25
   */
  count?: number;
  /**
   * Position in pagination.
   * @format int32
   * @example 75
   */
  offset?: number;
  /**
   * Total number of items available.
   * @format int32
   * @example 250
   */
  total_count?: number;
}

export interface IMySuperPrefixRandomGifDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix;
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
}

export interface IMySuperPrefixRandomGifParamsMySuperSuffix {
  /** Filters results by specified rating. */
  rating?: string;
  /** Filters results by specified tag. */
  tag?: string;
}

export interface IMySuperPrefixRandomStickerDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix;
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
}

export interface IMySuperPrefixRandomStickerParamsMySuperSuffix {
  /** Filters results by specified rating. */
  rating?: string;
  /** Filters results by specified tag. */
  tag?: string;
}

export interface IMySuperPrefixSearchGifsDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix[];
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
  /** The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions. */
  pagination?: IMySuperPrefixPaginationMySuperSuffix;
}

export interface IMySuperPrefixSearchGifsParamsMySuperSuffix {
  /** Specify default language for regional content; use a 2-letter ISO 639-1 language code. */
  lang?: string;
  /**
   * The maximum number of records to return.
   * @format int32
   * @default 25
   */
  limit?: number;
  /**
   * An optional results offset.
   * @format int32
   * @default 0
   */
  offset?: number;
  /** Search query term or prhase. */
  q: string;
  /** Filters results by specified rating. */
  rating?: string;
}

export interface IMySuperPrefixSearchStickersDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix[];
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
  /** The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions. */
  pagination?: IMySuperPrefixPaginationMySuperSuffix;
}

export interface IMySuperPrefixSearchStickersParamsMySuperSuffix {
  /** Specify default language for regional content; use a 2-letter ISO 639-1 language code. */
  lang?: string;
  /**
   * The maximum number of records to return.
   * @format int32
   * @default 25
   */
  limit?: number;
  /**
   * An optional results offset.
   * @format int32
   * @default 0
   */
  offset?: number;
  /** Search query term or prhase. */
  q: string;
  /** Filters results by specified rating. */
  rating?: string;
}

/** Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits. */
export type IMySuperPrefixTooManyRequestsMySuperSuffix = any;

export interface IMySuperPrefixTranslateGifDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix;
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
}

export interface IMySuperPrefixTranslateGifParamsMySuperSuffix {
  /** Search term. */
  s: string;
}

export interface IMySuperPrefixTranslateStickerDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix;
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
}

export interface IMySuperPrefixTranslateStickerParamsMySuperSuffix {
  /** Search term. */
  s: string;
}

export interface IMySuperPrefixTrendingGifsDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix[];
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
  /** The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions. */
  pagination?: IMySuperPrefixPaginationMySuperSuffix;
}

export interface IMySuperPrefixTrendingGifsParamsMySuperSuffix {
  /**
   * The maximum number of records to return.
   * @format int32
   * @default 25
   */
  limit?: number;
  /**
   * An optional results offset.
   * @format int32
   * @default 0
   */
  offset?: number;
  /** Filters results by specified rating. */
  rating?: string;
}

export interface IMySuperPrefixTrendingStickersDataMySuperSuffix {
  data?: IMySuperPrefixGifMySuperSuffix[];
  /** The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances. */
  meta?: IMySuperPrefixMetaMySuperSuffix;
  /** The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions. */
  pagination?: IMySuperPrefixPaginationMySuperSuffix;
}

export interface IMySuperPrefixTrendingStickersParamsMySuperSuffix {
  /**
   * The maximum number of records to return.
   * @format int32
   * @default 25
   */
  limit?: number;
  /**
   * An optional results offset.
   * @format int32
   * @default 0
   */
  offset?: number;
  /** Filters results by specified rating. */
  rating?: string;
}

/** The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more. */
export interface IMySuperPrefixUserMySuperSuffix {
  /**
   * The URL for this user's avatar image.
   * @example "https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif"
   */
  avatar_url?: string;
  /**
   * The URL for the banner image that appears atop this user's profile page.
   * @example "https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg"
   */
  banner_url?: string;
  /**
   * The display name associated with this user (contains formatting the base username might not).
   * @example "JoeCool4000"
   */
  display_name?: string;
  /**
   * The URL for this user's profile.
   * @example "https://giphy.com/cheezburger/"
   */
  profile_url?: string;
  /**
   * The Twitter username associated with this user, if applicable.
   * @example "@joecool4000"
   */
  twitter?: string;
  /**
   * The username associated with this user.
   * @example "joecool4000"
   */
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
  public baseUrl: string = "https://api.giphy.com/v1";
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
 * @title Giphy
 * @version 1.0
 * @termsOfService https://developers.giphy.com/
 * @baseUrl https://api.giphy.com/v1
 * @externalDocs https://developers.giphy.com/docs/
 * @contact <support@giphy.com>
 *
 * Giphy API
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  gifs = {
    /**
     * @description Returns a GIF given that GIF's unique ID
     *
     * @tags gifs
     * @name GetGifById
     * @summary Get GIF by Id
     * @request GET:/gifs/{gifId}
     * @secure
     */
    getGifById: (gifId: number, params: RequestParams = {}) =>
      this.request<IMySuperPrefixGetGifByIdDataMySuperSuffix, any>({
        path: `/gifs/${gifId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description A multiget version of the get GIF by ID endpoint.
     *
     * @tags gifs
     * @name GetGifsById
     * @summary Get GIFs by ID
     * @request GET:/gifs
     * @secure
     */
    getGifsById: (
      query: IMySuperPrefixGetGifsByIdParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixGetGifsByIdDataMySuperSuffix, any>({
        path: `/gifs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
     *
     * @tags gifs
     * @name RandomGif
     * @summary Random GIF
     * @request GET:/gifs/random
     * @secure
     */
    randomGif: (
      query: IMySuperPrefixRandomGifParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixRandomGifDataMySuperSuffix, any>({
        path: `/gifs/random`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.
     *
     * @tags gifs
     * @name SearchGifs
     * @summary Search GIFs
     * @request GET:/gifs/search
     * @secure
     */
    searchGifs: (
      query: IMySuperPrefixSearchGifsParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixSearchGifsDataMySuperSuffix, any>({
        path: `/gifs/search`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF
     *
     * @tags gifs
     * @name TranslateGif
     * @summary Translate phrase to GIF
     * @request GET:/gifs/translate
     * @secure
     */
    translateGif: (
      query: IMySuperPrefixTranslateGifParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixTranslateGifDataMySuperSuffix, any>({
        path: `/gifs/translate`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.
     *
     * @tags gifs
     * @name TrendingGifs
     * @summary Trending GIFs
     * @request GET:/gifs/trending
     * @secure
     */
    trendingGifs: (
      query: IMySuperPrefixTrendingGifsParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixTrendingGifsDataMySuperSuffix, any>({
        path: `/gifs/trending`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  stickers = {
    /**
     * @description Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
     *
     * @tags stickers
     * @name RandomSticker
     * @summary Random Sticker
     * @request GET:/stickers/random
     * @secure
     */
    randomSticker: (
      query: IMySuperPrefixRandomStickerParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixRandomStickerDataMySuperSuffix, any>({
        path: `/stickers/random`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.
     *
     * @tags stickers
     * @name SearchStickers
     * @summary Search Stickers
     * @request GET:/stickers/search
     * @secure
     */
    searchStickers: (
      query: IMySuperPrefixSearchStickersParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixSearchStickersDataMySuperSuffix, any>({
        path: `/stickers/search`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.
     *
     * @tags stickers
     * @name TranslateSticker
     * @summary Translate phrase to Sticker
     * @request GET:/stickers/translate
     * @secure
     */
    translateSticker: (
      query: IMySuperPrefixTranslateStickerParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixTranslateStickerDataMySuperSuffix, any>({
        path: `/stickers/translate`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.
     *
     * @tags stickers
     * @name TrendingStickers
     * @summary Trending Stickers
     * @request GET:/stickers/trending
     * @secure
     */
    trendingStickers: (
      query: IMySuperPrefixTrendingStickersParamsMySuperSuffix,
      params: RequestParams = {},
    ) =>
      this.request<IMySuperPrefixTrendingStickersDataMySuperSuffix, any>({
        path: `/stickers/trending`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
