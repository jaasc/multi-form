
import { createContext, useContext, useState } from "react";
import advanced from "../assets/images/icon-advanced.svg";
import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [activeForm, setActiveForm] = useState(0);
    const [userSubscription, setUserSubscription] = useState({
            plan: 'Arcade',
            isYearly: false,
            addOns: [],
    });

    const plans = [
        {
            name: 'Arcade',
            yearly: {
                price: '$90/yr',
                duration: '2 months free'
            },
            monthly: {
                price: '$9/mo'
            },
            icon: arcade
        },
        {
            name: 'Advanced',
            yearly: {
                price: '$120/yr',
                duration: '2 months free'
            },
            monthly: {
                price: '$12/mo'
            },
            icon: advanced
        },
        {
            name: 'Pro',
            yearly: {
                price: '$150/yr',
                duration: '2 months free'
            },
            monthly: {
                price: '$15/mo'
            },
            icon: pro
        }
    ]

    const addOns = [
        {
            title: 'Online service',
            description: 'Access to multiplayer games',
            monthly: '$1/mo',
            yearly: '$10/yr'
        },
        {
            title: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            monthly: '$2/mo',
            yearly: '$20/yr'
        },
        {
            title: 'Customizable profile',
            description: 'Custom theme on your profile',
            monthly: '$2/mo',
            yearly: '$20/yr'
        },
    ]

    return(
        <Context.Provider value={{ activeForm, setActiveForm, plans, userSubscription, setUserSubscription, addOns, user, setUser }}>
            {children}
        </Context.Provider>
    )
}

export const MultiForm = () => {
    return useContext(Context)
}