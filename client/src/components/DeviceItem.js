import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { Context } from "..";
import star from "../assets/zvezda.png"
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star} width={15} height={15}/>
                    </div>
                </div>    
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem