import { shallow } from "enzyme";
import App from "./App.js";

describe("<App />", () => {
  it("renders a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
    expect(wrapper.find("header.App-header")).toHaveLength(1);
  });

  it("renders a div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });

  it("renders a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("footer.App-footer")).toHaveLength(1);
  });
});
