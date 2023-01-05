import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrancy"

type CartItemProps = {
    id: number
    quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)

    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgURL} alt={item.name} height={75} width={125} style={{ objectFit: "cover" }} />
            <div className="me-auto">
                <span>{item.name}</span>
                <br />
                <span className="text-muted" style={{ fontSize: "0.85rem" }}>{quantity} x {formatCurrency(item.price)}</span>
            </div>
            <div className="text-bold" style={{ fontSize: "1.1rem" }}>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;
            </Button>
        </Stack>
    )
}
