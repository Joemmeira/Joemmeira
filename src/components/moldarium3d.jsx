import {
  Avatar,
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Input,
  Layout,
  Menu,
  Progress,
  Rate,
  Row,
  Space,
  Statistic,
  Tag,
  notification,
} from "antd";
import Search from "antd/es/input/Search";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";

const categories = [
  { id: "all", name: "Todos" },
  { id: "fantasy", name: "Fantasia" },
  { id: "anime", name: "Anime" },
  { id: "games", name: "Jogos" },
  { id: "limited", name: "Edições Limitadas" },
  { id: "custom", name: "Personalizados" },
];
const Moldarium3D = () => {
  const [cartItems, setCartItems] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Dragão Celestial",
          price: 349.99,
          rating: 4.9,
          image:
            "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          tags: ["Limitado", "Colecionável"],
          description:
            "Dragão majestoso esculpido em resina translúcida com efeitos de luz",
          category: "fantasy",
          stock: 15,
        },
        {
          id: 2,
          name: "Ninja das Sombras",
          price: 279.99,
          rating: 4.8,
          image:
            "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          tags: ["Exclusivo"],
          description:
            "Ninja em pose de combate com detalhes em resina preta fosca",
          category: "anime",
          stock: 8,
        },
        {
          id: 3,
          name: "Cavaleiro Élfico",
          price: 319.99,
          rating: 5.0,
          image:
            "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          tags: ["Premium"],
          description:
            "Cavaleiro élfico com armadura detalhada e efeitos metálicos",
          category: "fantasy",
          stock: 5,
        },
        {
          id: 4,
          name: "Cyber Samurai",
          price: 389.99,
          rating: 4.7,
          image:
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          tags: ["Nova Coleção"],
          description: "Fusão de samurai tradicional com elementos cyberpunk",
          category: "limited",
          stock: 3,
        },
        {
          id: 5,
          name: "Fada Lunar",
          price: 239.99,
          rating: 4.6,
          image:
            "https://images.unsplash.com/photo-1633613287144-5c5e4b23b9d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          tags: ["Brilho no Escuro"],
          description: "Fada com asas delicadas que brilham no escuro",
          category: "fantasy",
          stock: 12,
        },
        {
          id: 6,
          name: "Mago Elemental",
          price: 299.99,
          rating: 4.8,
          image:
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          tags: ["4 Elementos"],
          description: "Mago conjurando magias dos quatro elementos",
          category: "games",
          stock: 7,
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "custom-carousel",
  };

  const handleAddToCart = (product) => {
    notification.success({
      message: "Adicionado ao carrinho",
      description: `${product.name} foi adicionado ao seu carrinho!`,
      placement: "topRight",
      duration: 2,
    });
    setCartItems(cartItems + 1);
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // 2 dias e 30 segundos
  return (
    <Layout className="min-h-screen">
      <Header className="bg-white shadow-sm flex items-center justify-between px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center">
          {" "}
          <div className="text-3xl font-bold mr-10">
            {" "}
            <span className="logo-text">Moldarium 3D</span>{" "}
          </div>{" "}
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            className="border-0 hidden md:flex"
            items={[
              { key: "1", label: "Início" },
              { key: "2", label: "Coleções" },
              { key: "3", label: "Personalizados" },
              { key: "4", label: "Sobre Nós" },
              { key: "5", label: "Contato" },
            ]}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Search
            placeholder="Buscar figuras..."
            className="hidden md:block w-64"
            allowClear
            enterButton={
              <Button type="primary" icon={<i className="fas fa-search"></i>} />
            }
          />
          <Badge count={cartItems} showZero>
            <Button
              type="text"
              icon={<i className="fas fa-shopping-cart text-xl"></i>}
              size="large"
              className="text-gray-700 hover:text-blue-500"
            />
          </Badge>
          <Button
            type="primary"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hidden md:block"
          >
            Minha Conta
          </Button>
          <Button
            type="text"
            icon={<i className="fas fa-bars text-xl"></i>}
            size="large"
            className="md:hidden"
          />
        </div>
      </Header>

      <Content className="px-4 md:px-8 py-6">
        {/* Hero Section */}
        <div className="resin-effect rounded-2xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"></div>
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Arte em Resina que Encanta
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Descubra figuras exclusivas esculpidas à mão com resina de alta
              qualidade. Cada peça é uma obra de arte única.
            </p>
            <Space size="large">
              <Button
                type="primary"
                size="large"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium"
              >
                Explorar Coleção
              </Button>
              <Button
                size="large"
                className="text-white border-white hover:text-white font-medium"
              >
                <i className="fas fa-play mr-2"></i> Ver Processo
              </Button>
            </Space>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <i className="fas fa-dragon text-[300px] text-white"></i>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                type={activeCategory === category.id ? "primary" : "default"}
                className={`whitespace-nowrap ${
                  activeCategory === category.id ? "bg-blue-500" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              PROMOÇÃO DE LANÇAMENTO!
            </h3>
            <p className="text-white opacity-90">
              15% OFF em toda a coleção Mitos Antigos
            </p>
          </div>
          <Statistic.Countdown
            title={<span className="text-white">Termina em:</span>}
            value={deadline}
            format="DD [dias] HH [horas] mm [min] ss [seg]"
            className="text-white text-lg font-mono"
          />
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Nossas Figuras em Destaque
            </h2>
            <Button type="link" className="text-blue-500">
              Ver todos <i className="fas fa-arrow-right ml-1"></i>
            </Button>
          </div>

          {loading ? (
            <Row gutter={[24, 24]} justify="center">
              {[1, 2, 3, 4].map((i) => (
                <Col key={i} xs={24} sm={12} md={8} lg={6}>
                  <Card loading style={{ width: "100%" }} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row gutter={[24, 24]}>
              {filteredProducts.map((product) => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    className="product-card h-full flex flex-col bg-white shadow-sm"
                    cover={
                      <div className="h-48 md:h-56 overflow-hidden relative">
                        <img
                          alt={product.name}
                          src={product.image}
                          className="object-cover w-full h-full"
                        />
                        {product.tags.includes("Limitado") && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            LIMITADO
                          </div>
                        )}
                      </div>
                    }
                    actions={[
                      <Button
                        key={0}
                        type="primary"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stock <= 0}
                      >
                        {product.stock > 0 ? (
                          <>
                            <i className="fas fa-cart-plus mr-2"></i>
                            Adicionar
                          </>
                        ) : (
                          "ESGOTADO"
                        )}
                      </Button>,
                      <Button key={0} className="w-full">
                        <i className="far fa-heart mr-2"></i> Favoritar
                      </Button>,
                    ]}
                  >
                    <Card.Meta
                      title={
                        <span className="font-semibold text-lg">
                          {product.name}
                        </span>
                      }
                      description={
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-xl font-bold text-blue-600">
                              R$ {product.price.toFixed(2)}
                            </span>
                            <Rate
                              disabled
                              defaultValue={product.rating}
                              allowHalf
                              className="text-sm"
                            />
                          </div>
                          <div className="mb-3">
                            {product.tags.map((tag) => (
                              <Tag
                                key={tag}
                                color={
                                  tag === "Limitado"
                                    ? "red"
                                    : tag === "Nova Coleção"
                                    ? "blue"
                                    : tag === "Premium"
                                    ? "gold"
                                    : "purple"
                                }
                                className="mr-1 mb-1"
                              >
                                {tag}
                              </Tag>
                            ))}
                          </div>
                          <p className="text-gray-600 text-sm mb-3">
                            {product.description}
                          </p>
                          <div>
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                              <span>Disponíveis: {product.stock}</span>
                              <span>
                                Vendidos: {Math.floor(Math.random() * 50) + 10}
                              </span>
                            </div>
                            <Progress
                              percent={Math.min(
                                100,
                                (50 / product.stock) * 100
                              )}
                              showInfo={false}
                              strokeColor={{
                                "0%": "#6e8efb",
                                "100%": "#a777e3",
                              }}
                            />
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 flex flex-col md:flex-row items-center resin-effect">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <Tag color="blue" className="mb-3">
              <i className="fas fa-hammer mr-1"></i> Processo Artesanal
            </Tag>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Como Criamos Nossas Figuras
            </h2>
            <p className="text-gray-600 mb-4">
              Cada figura Moldarium 3D passa por um processo meticuloso de
              criação que combina técnicas tradicionais de escultura com
              tecnologia de impressão 3D moderna.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <span className="text-gray-700">
                  Resina de alta qualidade livre de toxinas
                </span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <span className="text-gray-700">
                  Pigmentação profissional para cores vibrantes
                </span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <span className="text-gray-700">
                  Acabamento manual para perfeição nos detalhes
                </span>
              </div>
            </div>
            <Button
              type="primary"
              size="large"
              className="bg-gradient-to-r from-blue-500 to-purple-600"
            >
              Conheça Nosso Ateliê
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-40">
                <img
                  src="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Processo de produção"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-40">
                <img
                  src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Processo de produção"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-40">
                <img
                  src="https://images.unsplash.com/photo-1633613287144-5c5e4b23b9d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Processo de produção"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-40">
                <img
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Processo de produção"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <Carousel {...carouselSettings}>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Avatar
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  size={48}
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Ana Carolina</h4>
                  <Rate disabled defaultValue={5} className="text-sm" />
                </div>
              </div>
              <p className="text-gray-600">
                Comprei o Dragão Celestial e superou todas minhas expectativas!
                Os detalhes são incríveis e a qualidade da resina é
                impressionante. Valeu cada centavo!
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Avatar
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  size={48}
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Ricardo Almeida</h4>
                  <Rate
                    disabled
                    defaultValue={4.5}
                    allowHalf
                    className="text-sm"
                  />
                </div>
              </div>
              <p className="text-gray-600">
                Sou colecionador há anos e as peças da Moldarium estão entre as
                melhores da minha coleção. O atendimento também foi excelente
                quando tive uma dúvida sobre o produto.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Avatar
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  size={48}
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Juliana Santos</h4>
                  <Rate disabled defaultValue={5} className="text-sm" />
                </div>
              </div>
              <p className="text-gray-600">
                Encomendei uma peça personalizada para presentear meu marido e
                ficou perfeita! Capturaram exatamente o personagem que eu
                queria. Recomendo muito!
              </p>
            </div>
          </Carousel>
        </div>
      </Content>

      <Footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={6}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="logo-text mr-2">Moldarium 3D</span>
              </h3>
              <p className="mb-4 text-gray-300">
                Especialistas em figuras de resina artesanais desde 2015.
                Qualidade, criatividade e paixão em cada peça.
              </p>
              <div className="flex space-x-3">
                <Button
                  shape="circle"
                  icon={<i className="fab fa-instagram"></i>}
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                />
                <Button
                  shape="circle"
                  icon={<i className="fab fa-facebook-f"></i>}
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                />
                <Button
                  shape="circle"
                  icon={<i className="fab fa-youtube"></i>}
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                />
                <Button
                  shape="circle"
                  icon={<i className="fab fa-tiktok"></i>}
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> Sobre
                  Nós
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> Nossa
                  História
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> Galeria
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> FAQ
                </a>
                <a href="#" className="block text-gray-300 hover:text-white">
                  <i className="fas fa-chevron-right text-xs mr-2"></i> Política
                  de Privacidade
                </a>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h3 className="text-lg font-semibold mb-4">Informações</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-sm"></i>
                  <span>Av. das Artes, 456 - São Paulo/SP</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-3 text-sm"></i>
                  <span>(11) 98765-4321</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3 text-sm"></i>
                  <span>contato@moldarium3d.com</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock mt-1 mr-3 text-sm"></i>
                  <span>Seg-Sex: 9h-18h | Sáb: 9h-13h</span>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4 text-gray-300">
                Receba novidades, promoções exclusivas e lançamentos em primeira
                mão.
              </p>
              <Space.Compact className="w-full">
                <Input placeholder="Seu melhor e-mail" />
                <Button
                  type="primary"
                  className="bg-gradient-to-r from-blue-500 to-purple-600"
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </Space.Compact>
              <div className="mt-4 flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Payment method"
                  className="mr-2"
                />
                <img
                  src="https://via.placeholder.com/40"
                  alt="Payment method"
                  className="mr-2"
                />
                <img
                  src="https://via.placeholder.com/40"
                  alt="Payment method"
                  className="mr-2"
                />
                <img
                  src="https://via.placeholder.com/40"
                  alt="Payment method"
                />
              </div>
            </Col>
          </Row>
          <Divider className="bg-gray-700 my-8" />
          <div className="text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Moldarium 3D. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};
export default Moldarium3D;
