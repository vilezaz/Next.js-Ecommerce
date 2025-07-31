"use client";

import { setUser } from "@/redux/slices/authSlice";
import { store } from "@/redux/store";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

export function ReduxProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: any;
}) {
  return (
    <Provider store={store}>
      <HydrateUser user={user} />
      {children}
    </Provider>
  );
}

function HydrateUser({ user }: { user: any }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  return null;
}
