import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const data = [
  {
    id: 1,
    label: "Dropdown 1",
    code: "DROPDOWN 1",
    monitor_subtypes: [
      { id: 1, label: "Nested 1", code: "Nested 1" },
      { id: 2, label: "Nested 2", code: "Nested 2" }
    ]
  },
  {
    id: 2,
    label: "Dropdown 2",
    code: "DROPDOWN 2",
    monitor_subtypes: [
      { id: 3, label: "Nested 3", code: "Nested 3" },
      { id: 4, label: "Nested 4", code: "Nested 4" },
      { id: 5, label: "Nested 5", code: "Nested 5" }
    ]
  }
];

const menu = () => {
  return (
    <Menu>
      {data.map((data1) => {
        return (
          <Menu.ItemGroup key={data1.id} title={data1.label}>
            {data1.monitor_subtypes.map((data2) => {
              return <Menu.Item key={data2.id}>{data2.label}</Menu.Item>;
            })}
          </Menu.ItemGroup>
        );
      })}
    </Menu>
  );
};

export default function App() {
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Cascading menu <DownOutlined />
      </a>
    </Dropdown>
  );
}
