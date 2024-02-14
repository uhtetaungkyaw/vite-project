import { useState } from "react";
import { create } from "zustand";

export const userStore = create((set) =>
    ({
        userData: {
            username: "admin",
            email: "admin@gmail.com"
        },
        setUserData: (userDataValues) =>
            set({ userData: userDataValues })
    }))