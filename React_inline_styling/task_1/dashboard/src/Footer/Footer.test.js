import { shallow } from "enzyme";
import React from "react";
import App from "../App/App";
import Footer from "./Footer";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components at the very least render the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.find("div.footer p")).toHaveLength(1);
    expect(wrapper.find("div.footer p").text()).toContain("Copyright");
  });
});
