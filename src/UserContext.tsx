import { createContext, useReducer, type ReactNode, type Dispatch } from "react";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    city: string;
    states: string;
    zip: string;
    check: boolean;
}

type Action = {
    type: "SET_USER";
    payload: User;
};

interface ContextType {
    state: User | null;
    dispatch: Dispatch<Action>;
}

const reducer = (state: User | null, action: Action): User | null => {
    switch (action.type) {
        case "SET_USER":
            return action.payload;
    }
};

export const UserContext = createContext<ContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, null);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}
