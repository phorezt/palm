import React from "react";
import { ClickCounter } from "./ClickCounter";

export default {
  title: "ClickCounter",
  component: ClickCounter,
};

export const Basic = () => <ClickCounter />;
export const StartOn10 = () => <ClickCounter start={11} />;
