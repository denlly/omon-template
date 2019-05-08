import axios from "axios";
import IFetchObject from "./types/fetch.object";
import ApiUrls from "@/services/api-urls";
const https = require("https");
let _reqProxy: any = null;
function _init() {
    if (process.browser) {
        _reqProxy = axios.create({
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),
            baseURL: `${location.origin}/api`,
            timeout: 15000,
            withCredentials: true
        });
        const token = localStorage.getItem("user-token");
        if (token) {
            _reqProxy.defaults.headers.common["Authorization"] = `bearer ${token}`;
        }
        _reqProxy.interceptors.response.use(
            (response: any) => {
                return response;
            },
            (error: any) => {
                if (error.response.data === "Unauthorized") {
                    location.href = "/login";
                }
                // Promise.reject(error);
                return error.response.data;
            }
        );
    }
    return _reqProxy;
}
_init();
/**
 * usage A： {key, params}
 * usage B:    {params, url, method}
 */
export function $axios({ key, params, url, method }: IFetchObject) {
    let result; // 返回结果
    if (!url) {
        [url, method] = ApiUrls[key];
    }

    switch (method) {
        case "file":
            result = _fileFetch({ params, url, method } as IFetchObject);
            break;
        default:
            result = _defaultFetch({ params, url } as IFetchObject);
            break;
    }
    return result;
}

function _defaultFetch({ params, url, method }: IFetchObject) {
    return new Promise((resolve, reject) => {
        _reqProxy({
            method,
            url,
            params: params
        })
            .then(data => {
                data = Object.assign(data, {
                    code: 0
                });
                resolve(data);
            })
            .catch(function(error) {
                console.error("api:", url);
                let response;
                if (error.request && error.request.readyState == 4 && error.request.status == 0) {
                    // 超时处理
                    response = {
                        error: "timeout"
                    };
                } else {
                    response = error.response.data;
                }
                resolve(response);
            });
    });
}

function _fileFetch({ params, url }: IFetchObject) {
    const formData = new FormData();
    return new Promise((resolve, reject) => {
        _reqProxy({
            method: "post",
            url,
            data: params,
            headers: {
                "Content-Type": `multipart/form-data;  boundary= --------------------${Date.parse(new Date().toLocaleDateString())}`
            }
        })
            .then(data => {
                data = Object.assign(data, {
                    code: 0
                });
                resolve(data);
            })
            .catch(error => {
                console.error("api:", url);
                let response;
                if (error.request && error.request.readyState == 4 && error.request.status == 0) {
                    // chaoshi
                    response = {
                        error: "timeout"
                    };
                } else {
                    response = error.response.data;
                }
                resolve(response);
            });
    });
}
