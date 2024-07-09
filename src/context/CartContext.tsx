import React, { createContext, useContext } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

interface CartContextType {
	cartItems: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cartItems, setCartItems] = useAsyncStorage<CartItem[]>(
		"cartItems",
		[]
	);

	const addToCart = (item: CartItem) => {
		setCartItems((prevItems: CartItem[]) => {
			const existingItem = prevItems.find((i: CartItem) => i.id === item.id);
			if (existingItem) {
				return prevItems.map((i: CartItem) =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				);
			}
			return [...prevItems, { ...item, quantity: 1 }];
		});
	};

	const removeFromCart = async (id: number) => {
		try {
			const updatedCartItems = cartItems.filter((item) => item.id !== id);
			await setCartItems(updatedCartItems);
		} catch (error) {
			console.error("Error removing item from cart:", error);
		}
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
