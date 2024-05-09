import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("notifications />", () => {
  it("NotificationItem renders without crash", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Check that the HTML generated is correct by passing dummy props.", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    wrapper.update();
    const listItem = wrapper.find("li");
    expect(listItem).toHaveLength(1);
    expect(listItem.text()).toEqual("test");
    expect(listItem.prop("data-notification-type")).toEqual("default");
  });
  it("Passing a dummy html prop, it renders the correct html (for example", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />,
    );
    wrapper.update();
    const listItem = wrapper.find("li");
    expect(listItem.html()).toEqual("<li><u>test</u></li>");
  });
});
