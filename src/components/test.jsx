import {
  ClockCircleOutlined,
  CloseOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  FacebookOutlined,
  GiftOutlined,
  InstagramOutlined,
  MailOutlined,
  MenuOutlined,
  MessageOutlined,
  MinusOutlined,
  PhoneOutlined,
  PlusOutlined,
  SafetyOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  List,
  Menu,
  Modal,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import { useState } from "react";
import "./test.css";

const { Header, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Dados dos produtos
  const products = [
    {
      id: 1,
      name: "Dragão Alado",
      description: "Miniatura detalhada para colecionadores e jogos de RPG",
      price: 89.9,
      badge: "NOVO",
      badgeColor: "blue",
    },
    {
      id: 2,
      name: "Suporte para Celular",
      description: "Design ergonômico com ajuste de ângulo",
      price: 49.9,
    },
    {
      id: 3,
      name: "Anel Geométrico",
      description: "Design moderno com padrões geométricos intrincados",
      price: 39.9,
      badge: "MAIS VENDIDO",
      badgeColor: "blue",
    },
    {
      id: 4,
      name: "Herói Fantástico",
      description: "Personagem de fantasia com 15cm de altura",
      price: 129.9,
    },
  ];

  // Adicionar ao carrinho
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
    setCartVisible(true);
  };

  // Atualizar quantidade
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  // Calcular total
  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Layout className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header className="bg-white shadow-sm sticky top-0 z-50 px-4 h-auto py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center">
              <ShoppingCartOutlined className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              Moldarium 3D
            </span>
          </div>

          <Menu
            mode="horizontal"
            className="hidden md:flex border-0"
            items={[
              { key: "home", label: "Início" },
              { key: "products", label: "Produtos" },
              { key: "about", label: "Sobre" },
              { key: "faq", label: "FAQ" },
              { key: "contact", label: "Contato" },
            ]}
          />

          <Space size="middle">
            <Badge
              count={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            >
              <Button
                type="text"
                icon={<ShoppingCartOutlined className="text-xl" />}
                onClick={() => setCartVisible(true)}
              />
            </Badge>
            <Button
              type="text"
              icon={<MenuOutlined className="text-xl" />}
              className="md:hidden"
              onClick={() => setMobileMenuVisible(true)}
            />
          </Space>
        </div>
      </Header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          mobileMenuVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuVisible(false)}
      >
        <div
          className={`bg-white w-64 h-full transform transition-transform ${
            mobileMenuVisible ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <span className="font-bold">Menu</span>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => setMobileMenuVisible(false)}
            />
          </div>
          <Menu
            mode="vertical"
            items={[
              { key: "home", label: "Início" },
              { key: "products", label: "Produtos" },
              { key: "about", label: "Sobre" },
              { key: "faq", label: "FAQ" },
              { key: "contact", label: "Contato" },
            ]}
          />
        </div>
      </div>

      {/* Conteúdo */}
      <Content>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZTlkNmZmIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4yIi8+PC9zdmc+')] bg-[length:300px]"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative">
            <div className="max-w-2xl">
              <Title
                level={1}
                className="text-white mb-4 text-4xl md:text-5xl font-bold"
              >
                Peças únicas em resina 3D
              </Title>
              <Paragraph className="text-white text-xl md:text-2xl mb-8">
                Na Moldarium 3D, criamos peças personalizadas com alta qualidade
                e detalhes impressionantes para colecionadores, entusiastas e
                profissionais.
              </Paragraph>
              <Space size={16} className="flex flex-col sm:flex-row">
                <Button
                  size="large"
                  className="bg-white text-indigo-700 hover:bg-gray-100 font-bold h-12 px-6 text-base"
                  href="#products"
                >
                  Ver Produtos
                </Button>
                <Button
                  size="large"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 font-bold h-12 px-6 text-base"
                  href="#contact"
                >
                  Encomendar
                </Button>
              </Space>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Seção Produtos */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Title
                level={2}
                className="text-gray-800 mb-2 text-3xl font-bold"
              >
                Nossas Peças em Destaque
              </Title>
              <Paragraph className="text-gray-600 max-w-2xl mx-auto">
                Peças criadas com resina de alta qualidade e impressão 3D de
                precisão
              </Paragraph>
            </div>

            <Row gutter={[24, 24]}>
              {products.map((product) => (
                <Col key={product.id} xs={24} sm={12} lg={8} xl={6}>
                  <Card
                    hoverable
                    className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg h-full"
                    cover={
                      <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                        <img
                          alt={product.name}
                          src="https://images.unsplash.com/photo-1631725999047-0c69f49c0a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                          className="w-full h-full object-contain"
                        />
                        {product.badge && (
                          <Tag
                            color={product.badgeColor}
                            className="absolute top-2 right-2"
                          >
                            {product.badge}
                          </Tag>
                        )}
                      </div>
                    }
                  >
                    <div className="p-4">
                      <Title level={4} className="text-gray-800 mb-1 font-bold">
                        {product.name}
                      </Title>
                      <Paragraph className="text-gray-600 text-sm mb-3">
                        {product.description}
                      </Paragraph>
                      <div className="flex justify-between items-center">
                        <Text strong className="text-indigo-600">
                          R$ {product.price.toFixed(2)}
                        </Text>
                        <Button
                          type="primary"
                          size="small"
                          icon={<PlusOutlined />}
                          onClick={() => addToCart(product)}
                          className="bg-indigo-600 hover:bg-indigo-700"
                        >
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Seção Sobre */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} lg={12} className="mb-8 lg:mb-0">
                <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
                  <img
                    src="https://images.unsplash.com/photo-1631725999047-0c69f49c0a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Processo de impressão 3D"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-900 opacity-20"></div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <Title
                  level={2}
                  className="text-gray-800 mb-6 text-3xl font-bold"
                >
                  Sobre a Moldarium 3D
                </Title>
                <Paragraph className="text-gray-600 mb-4">
                  Na Moldarium 3D, somos especialistas em impressão 3D com
                  resina de alta qualidade, produzindo peças com detalhes
                  impressionantes e acabamento profissional.
                </Paragraph>
                <Paragraph className="text-gray-600 mb-6">
                  Nossa equipe de designers e engenheiros trabalha para
                  transformar ideias em objetos tangíveis, desde miniaturas
                  colecionáveis até peças funcionais para uso diário.
                </Paragraph>

                <Row gutter={[24, 24]} className="mb-8">
                  <Col xs={24} sm={12}>
                    <div className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mr-4">
                        <ExperimentOutlined className="text-xl" />
                      </div>
                      <div>
                        <Title
                          level={4}
                          className="text-gray-800 mb-1 font-bold"
                        >
                          Alta Precisão
                        </Title>
                        <Paragraph className="text-gray-600 text-sm">
                          Detalhes microscópicos com resolução de até 25μm
                        </Paragraph>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} sm={12}>
                    <div className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mr-4">
                        <GiftOutlined className="text-xl" />
                      </div>
                      <div>
                        <Title
                          level={4}
                          className="text-gray-800 mb-1 font-bold"
                        >
                          Diversas Cores
                        </Title>
                        <Paragraph className="text-gray-600 text-sm">
                          Resinas coloridas, transparentes e efeitos especiais
                        </Paragraph>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} sm={12}>
                    <div className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mr-4">
                        <SafetyOutlined className="text-xl" />
                      </div>
                      <div>
                        <Title
                          level={4}
                          className="text-gray-800 mb-1 font-bold"
                        >
                          Resistência
                        </Title>
                        <Paragraph className="text-gray-600 text-sm">
                          Peças duráveis com tratamento pós-cura
                        </Paragraph>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} sm={12}>
                    <div className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mr-4">
                        <ThunderboltOutlined className="text-xl" />
                      </div>
                      <div>
                        <Title
                          level={4}
                          className="text-gray-800 mb-1 font-bold"
                        >
                          Entrega Rápida
                        </Title>
                        <Paragraph className="text-gray-600 text-sm">
                          Produção ágil com prazo médio de 5 dias úteis
                        </Paragraph>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Button
                  type="primary"
                  size="large"
                  href="#contact"
                  className="bg-indigo-600 hover:bg-indigo-700 font-bold h-12 px-6"
                >
                  Fale Conosco
                </Button>
              </Col>
            </Row>
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <Row gutter={0}>
                <Col xs={24} md={12} className="bg-indigo-600 text-white p-8">
                  <Title
                    level={2}
                    className="text-white mb-6 text-2xl font-bold"
                  >
                    Entre em Contato
                  </Title>
                  <Paragraph className="mb-6">
                    Tem dúvidas ou quer fazer uma encomenda personalizada?
                    Preencha o formulário ou use nossos outros canais de
                    contato.
                  </Paragraph>

                  <Space direction="vertical" size={16}>
                    <div className="flex items-start">
                      <EnvironmentOutlined className="mt-1 mr-4" />
                      <div>
                        <Title level={4} className="text-white mb-0 font-bold">
                          Endereço
                        </Title>
                        <Paragraph className="mb-0">
                          Rua das Impressoras, 123
                          <br />
                          São Paulo - SP
                        </Paragraph>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MailOutlined className="mt-1 mr-4" />
                      <div>
                        <Title level={4} className="text-white mb-0 font-bold">
                          Email
                        </Title>
                        <Paragraph className="mb-0">
                          contato@moldarium3d.com.br
                        </Paragraph>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <PhoneOutlined className="mt-1 mr-4" />
                      <div>
                        <Title level={4} className="text-white mb-0 font-bold">
                          Telefone/WhatsApp
                        </Title>
                        <Paragraph className="mb-0">(11) 98765-4321</Paragraph>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ClockCircleOutlined className="mt-1 mr-4" />
                      <div>
                        <Title level={4} className="text-white mb-0 font-bold">
                          Horário de Atendimento
                        </Title>
                        <Paragraph className="mb-0">
                          Segunda a Sexta: 9h às 18h
                          <br />
                          Sábado: 9h às 13h
                        </Paragraph>
                      </div>
                    </div>
                  </Space>
                </Col>

                <Col xs={24} md={12} className="p-8">
                  <Title
                    level={3}
                    className="text-gray-800 mb-6 text-xl font-bold"
                  >
                    Envie sua Mensagem
                  </Title>
                  <Form layout="vertical">
                    <Form.Item label="Nome">
                      <Input />
                    </Form.Item>

                    <Form.Item label="Email">
                      <Input type="email" />
                    </Form.Item>

                    <Form.Item label="Assunto">
                      <Select placeholder="Selecione...">
                        <Option value="order">Encomenda</Option>
                        <Option value="custom">Peça Personalizada</Option>
                        <Option value="question">Dúvida</Option>
                        <Option value="other">Outro</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Mensagem">
                      <TextArea rows={4} />
                    </Form.Item>

                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      size="large"
                      className="bg-indigo-600 hover:bg-indigo-700 font-bold h-12"
                    >
                      Enviar Mensagem
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        </section>
      </Content>

      {/* Rodapé */}
      <Footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <Row gutter={[24, 24]} className="mb-8">
            <Col xs={24} md={6}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center">
                  <ShoppingCartOutlined className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold">Moldarium 3D</span>
              </div>
              <Paragraph className="text-gray-400">
                Peças únicas em resina 3D para colecionadores, entusiastas e
                profissionais.
              </Paragraph>
            </Col>

            <Col xs={24} md={6}>
              <Title level={4} className="text-white mb-4 font-bold">
                Produtos
              </Title>
              <List
                dataSource={[
                  "Miniaturas",
                  "Joias",
                  "Acessórios",
                  "Peças Personalizadas",
                ]}
                renderItem={(item) => (
                  <List.Item className="text-gray-400 hover:text-white transition cursor-pointer py-1">
                    {item}
                  </List.Item>
                )}
              />
            </Col>

            <Col xs={24} md={6}>
              <Title level={4} className="text-white mb-4 font-bold">
                Links Úteis
              </Title>
              <List
                dataSource={[
                  { label: "Sobre Nós", href: "#about" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Termos de Serviço", href: "#" },
                  { label: "Política de Privacidade", href: "#" },
                ]}
                renderItem={(item) => (
                  <List.Item className="text-gray-400 hover:text-white transition cursor-pointer py-1">
                    <a href={item.href}>{item.label}</a>
                  </List.Item>
                )}
              />
            </Col>

            <Col xs={24} md={6}>
              <Title level={4} className="text-white mb-4 font-bold">
                Redes Sociais
              </Title>
              <Space size={16} className="mb-4">
                <Button
                  shape="circle"
                  icon={<FacebookOutlined />}
                  className="bg-gray-800 text-white border-0 hover:bg-indigo-600"
                />
                <Button
                  shape="circle"
                  icon={<InstagramOutlined />}
                  className="bg-gray-800 text-white border-0 hover:bg-indigo-600"
                />
                <Button
                  shape="circle"
                  icon={<YoutubeOutlined />}
                  className="bg-gray-800 text-white border-0 hover:bg-indigo-600"
                />
                <Button
                  shape="circle"
                  icon={<MessageOutlined />}
                  className="bg-gray-800 text-white border-0 hover:bg-indigo-600"
                />
              </Space>
              <Paragraph className="text-gray-400">
                Siga-nos para ver nossas novidades e promoções!
              </Paragraph>
            </Col>
          </Row>

          <Divider className="border-gray-800" />

          <Row justify="space-between" align="middle">
            <Col xs={24} md={12} className="mb-4 md:mb-0">
              <Paragraph className="text-gray-400 text-sm">
                © 2023 Moldarium 3D. Todos os direitos reservados.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Space size={24} className="flex justify-center md:justify-end">
                <img
                  src="https://via.placeholder.com/40x25"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://via.placeholder.com/40x25"
                  alt="Mastercard"
                  className="h-6"
                />
                <img
                  src="https://via.placeholder.com/40x25"
                  alt="Pix"
                  className="h-6"
                />
                <img
                  src="https://via.placeholder.com/40x25"
                  alt="Boleto"
                  className="h-6"
                />
              </Space>
            </Col>
          </Row>
        </div>
      </Footer>

      {/* Botão do WhatsApp */}
      <a
        href="https://wa.me/5511987654321"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <WhatsAppOutlined className="text-2xl" />
      </a>

      {/* Modal do Carrinho */}
      <Modal
        title="Seu Carrinho"
        visible={cartVisible}
        onCancel={() => setCartVisible(false)}
        footer={null}
        width={800}
        className="cart-modal"
      >
        <div className="max-h-[60vh] overflow-y-auto mb-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCartOutlined className="text-4xl text-gray-300 mb-4" />
              <Paragraph className="text-gray-500">
                Seu carrinho está vazio
              </Paragraph>
            </div>
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={cartItems}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button
                      key={item.key}
                      icon={<MinusOutlined />}
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    />,
                    <span key={item.key} className="mx-2 font-medium">
                      {item.quantity}
                    </span>,
                    <Button
                      key={item.key}
                      icon={<PlusOutlined />}
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    />,
                    <Text key={item.key} strong className="ml-4">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </Text>,
                  ]}
                >
                  <List.Item.Meta
                    title={item.name}
                    description={`R$ ${item.price.toFixed(2)} cada`}
                  />
                </List.Item>
              )}
            />
          )}
        </div>

        <Divider className="my-4" />

        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <Text strong>Subtotal</Text>
            <Text strong>R$ {calculateTotal().toFixed(2)}</Text>
          </div>
          <div className="flex justify-between">
            <Text strong>Frete</Text>
            <Text>A calcular</Text>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <Text strong>Total</Text>
            <Text strong>R$ {calculateTotal().toFixed(2)}</Text>
          </div>
        </div>

        <Space direction="vertical" className="w-full">
          <Button
            type="primary"
            size="large"
            block
            className="bg-indigo-600 hover:bg-indigo-700 font-bold h-12"
            disabled={cartItems.length === 0}
          >
            Finalizar Compra
          </Button>
          <Button
            size="large"
            block
            onClick={() => setCartVisible(false)}
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold h-12"
          >
            Continuar Comprando
          </Button>
        </Space>
      </Modal>
    </Layout>
  );
};

export default App;
