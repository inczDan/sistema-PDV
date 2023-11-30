create table if not exists vendedores(
    id serial primary key,
    nome VARCHAR(70) not null,
    email VARCHAR(100) unique not null,
    senha VARCHAR(70) not null,
    cpf VARCHAR(11) unique not null,
  	quantidade_vendas int
);

create table if not exists categorias(
    id serial primary key,
    descricao VARCHAR(455) not null
);

CREATE TABLE IF NOT EXISTS produtos(
	id SERIAL PRIMARY KEY,
  descricao VARCHAR(455),
  quantidade_estoque INT NOT NULL,
  valor INT NOT NULL,
  categoria_id INT REFERENCES categorias(id),
  produto_imagem VARCHAR(455)
);

CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(70) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  cep VARCHAR(8),
  rua VARCHAR(80),
  numero VARCHAR(20),
  bairro VARCHAR(80),
  cidade VARCHAR(50),
  estado VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS pedidos(
	id SERIAL PRIMARY KEY,
  observacao VARCHAR(455),
  valor_total INT NOT NULL,
  cliente_id INT REFERENCES clientes(id),
  vendedor_id INT REFERENCES vendedores(id),
  data DATE DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS pedido_produtos(
	id SERIAL PRIMARY KEY,
  quantidade_produto INT NOT NULL,
  valor_produto INT NOT NULL,
  pedido_id INT REFERENCES pedidos(id),
  produto_id INT REFERENCES produtos(id)
);


insert into categorias (descricao) values
('Informática'), 
('Beleza e Perfumaria'), 
('Mercado'), 
('Livros e Papelaria'), 
('Brinquedos'), 
('Moda'), 
('Bebê'), 
('Games');

insert into clientes (nome, email, cpf, cep, rua, numero, bairro, cidade, estado) values
('José da Silva', 'ze@gmail.com', '05077466598', '88900054', 'Rua das Laranjas', NULL, 'Centro', 'Florianópolis', 'SC'),
('Elizete Ribeiro', 'eliz@gmail.com', '32165498777', '98765432', 'Avenida Mar do Sul', '321', 'Lontras', 'Maral', 'RS'),
('Thiago Odorico Fagundes', 'tiguinha@gmail.com', '14785236985', '11234568', 'Travessa Sem Nome', '11123', 'Baixada', 'Rio de Janeiro', 'RJ'),
('Fernandina de Osório', 'feros@gmail.com', '32615489712', '78943256', 'Alameda dos Anjos', '777', 'Vila São João', 'Tigrinhos', 'MS')

