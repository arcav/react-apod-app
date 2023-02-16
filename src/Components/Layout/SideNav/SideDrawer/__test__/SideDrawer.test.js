import { render, screen } from "@testing-library/react";
import { SideDrawer } from "../SideDrawer";
import { ToogleButton } from "../ToogleButton";

test("SideDrawer should be render", () => {
  render(<SideDrawer />);
});

test("ToogleButton should be render", () => {
  render(<ToogleButton />);
});
