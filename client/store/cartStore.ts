import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  clearCart: () => void;
}

// Type for persist middleware
type MyPersist = (
  config: StateCreator<CartState>,
  options: PersistOptions<CartState>
) => StateCreator<CartState>;

const useCartStore = create<CartState>(
  (persist as MyPersist)(
    (set) => ({
      cart: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }),

      removeItem: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId),
        })),

      increaseQuantity: (itemId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQuantity: (itemId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === itemId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage', // unique name for storage
      getStorage: () => localStorage, // specify localStorage as the storage
    }
  )
);

export default useCartStore;
