import {
  DeleteTwoTone,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Drawer,
  Input,
  List,
  Popconfirm,
  Select,
  Space,
  message,
} from "antd";
import { useEffect, useState } from "react";
const tipos = [
  { value: "adm", label: "Admin" },
  { value: "use", label: "Usuário" },
  { value: "mod", label: "Moderador" },
];

const DrawerApp = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [userFuncao, setUserFuncao] = useState(null);
  const fakeDataUrl = `https://randomuser.me/api/?results=10`;
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setList(res.results);
      });
  }, []);

  return (
    <>
      <Button
        icon={<UserOutlined />}
        shape="circle"
        type="primary"
        onClick={() => {}}
      />
      <Button icon={<PlusCircleOutlined />} onClick={() => setOpen(true)}>
        Convidar
      </Button>
      <Drawer
        title={
          <Space>
            <Input
              placeholder="Endereço de email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Select
              options={tipos}
              placeholder="Selecione"
              onChange={(value) => setUserFuncao(value)}
            />
            <Button
              type="primary"
              onClick={() => {
                email == "" ? (
                  message.error("Informe um email!")
                ) : (
                  <>
                    {message.success(`Convite enviado para ${email}!`)}
                    {console.log(userFuncao)}
                  </>
                );
              }}
            >
              Convidar +
            </Button>
          </Space>
        }
        size="large"
        onClose={() => setOpen(false)}
        open={open}
        extra={<UserOutlined />}
      >
        <List
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Select
                  key={1}
                  mode="multiple"
                  defaultValue={tipos[1]}
                  options={tipos}
                />,
                <Popconfirm
                  key={1}
                  icon={<></>}
                  title="Remover do grupo?"
                  okText="Sim"
                  onConfirm={(e) => message.success(e.target.textContent)}
                  cancelText="Não"
                  onCancel={(e) => message.error(e.target.textContent)}
                >
                  <Button
                    icon={<DeleteTwoTone twoToneColor={"red"} />}
                    type="link"
                  />
                </Popconfirm>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.picture.thumbnail} />}
                title={
                  <a href={item.picture.large}>
                    {item.name?.title} {item.name?.first} {item.name?.last}
                  </a>
                }
                description={item.email}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};
export default DrawerApp;
