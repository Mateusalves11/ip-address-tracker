import { ListGeoCodeProps } from './../../entities/ip-address/index';
import { ListIpAddressProps } from '@global-entities/ip-address';
import { IpAddressAPIv1, geoCodeMapAPIv1 } from '@global-libs/axios/index';

export const loadAddressByIp = (ipAddress:string) =>
IpAddressAPIv1.get<ListIpAddressProps>(`/country?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAddress}`);

export const loadGeoCodeByCountry = (country:string) => 
geoCodeMapAPIv1.get<ListGeoCodeProps>(`search?q={${country}}`);