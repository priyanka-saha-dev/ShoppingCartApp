export interface InventoryItem {
    _id?: string;
    title: string;
    description: string;
    category: string;
    quantity: number;
    expiry: Date;
    choice: boolean;
    selectedQuantity: number;
    costPerQuantity: number;
}