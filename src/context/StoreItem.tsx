import React from 'react'
import { Card, Button } from "react-bootstrap"
import { formatCurrency } from '../utilities/formatCurrancy'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgURL: string
}

const StoreItem = ({ id, name, price, imgURL }: StoreItemProps) => {
    return (
        <Card key={id}>
            <Card.Img variant="top" src={imgURL} height={"250px"}
                style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column" >
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className="fs-4">{name}</span>
                    <span className="ms-2 p text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <Button variant="primary">Add TO Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default StoreItem