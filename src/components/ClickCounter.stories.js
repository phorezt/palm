import React from "react";
import { ClickCounter } from "./ClickCounter";

export default {
  title: "ClickCounter",
  component: ClickCounter,
};

export const Basic = () => <ClickCounter />;
export const StartOn10 = () => <ClickCounter start={10} />;
export const StartOn100 = () => <ClickCounter start={100} />;
