import { CardSet, CardSetItem } from "@global-components/index";
import { Text } from "@global-components/text";
import { Container, MainBase, Title } from "./style";
import { Input } from "@global-components/input";
import { useEffect, useState } from "react";
import { loadAddressByIp, loadGeoCodeByCountry } from "services/ip-address";
import { ListGeoCodeProps, ListIpAddressProps } from "@global-entities/ip-address";
import dynamic from "next/dynamic";

const Map = dynamic(() => import('@global-components/map'), { ssr: false })

export default function IpAddress() {
    const [input, setInput] = useState('')
    const [ipData, setIpData] = useState<ListIpAddressProps>()
    const [geoCode, setGeoCode] = useState<ListGeoCodeProps>()

    const getAddressByIp = async (ip: string) => {
        try {
            const data = await loadAddressByIp(ip);
            setIpData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getGeoCode = async () => {
            if (ipData?.location) {
                try {
                    const data = await loadGeoCodeByCountry(`${ipData?.location.region},${ipData?.location.country}`);
                    setGeoCode(data.data)
                    setKey(key + 1)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        getGeoCode()
    }, [ipData])

    useEffect(() => {
        if (!ipData) {
            getAddressByIp('')
        }
    }, [ipData])

    const [key, setKey] = useState(0);

    return (
        <>
            <MainBase>
                <Container>
                    <Title color={'white'}>IP Address Tracker</Title>
                    <Input style={{ width: '30vw', minWidth: 300 }} onClickButton={() => {
                        getAddressByIp(input)
                    }} value={input} onChange={(e) => { setInput(e.target.value) }} placeholder="Search for any IP address or domain" />
                    <CardSet>
                        <CardSetItem title="IP ADDRESS" description={ipData?.as ? ipData.as.route : ''} />
                        <CardSetItem title="LOCATION" description={ipData?.location ? `${ipData.location.region}, ${ipData.location.country} ` : ''} />
                        <CardSetItem title="TIMEZONE" description={ipData?.location ? ipData.location.timezone : ''} />
                        <CardSetItem title="ISP" description={ipData?.isp ? ipData.isp : ''} />
                    </CardSet>
                </Container>
            </MainBase>
            <Map key={key} lat={geoCode ? parseFloat(geoCode[0].lat) : 0} long={geoCode ? parseFloat(geoCode[0].lon) : 0} />
        </>
    )
}