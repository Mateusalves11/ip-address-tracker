import { geoCodeBaseUrl, ipifyBaseUrl } from '@global-configs/environment';
import axios from "axios";
import { setupInterceptors } from "./interceptors";

export const IpAddressAPIv1 = axios.create({
    baseURL: ipifyBaseUrl,
});

export const geoCodeMapAPIv1 = axios.create({
    baseURL: geoCodeBaseUrl,
});

setupInterceptors(IpAddressAPIv1);
setupInterceptors(geoCodeMapAPIv1);
