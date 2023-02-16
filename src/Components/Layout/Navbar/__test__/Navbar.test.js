import { render, screen } from "@testing-library/react";
import { NavBar } from "../NavBar";

test("Navbar should be render", () => {
  render(<NavBar />);
});
