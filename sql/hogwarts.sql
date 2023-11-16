CREATE DATABASE hogwarts;

USE hogwarts;

CREATE TABLE `bruxinhos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `confirmar_senha` varchar(255) NOT NULL
);

CREATE TABLE `pedidos`(
  `id_pedido` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL,
  `qtd` int NOT NULL,
  `total` DECIMAL(10,2) NOT NULL
);

INSERT INTO `bruxinhos` (`id`, `nome`, `email`, `senha`, `confirmar_senha`) VALUES
(1, 'André', 'andre@gmail.com', 'dede', 'dede'),
(2, 'Alinny', 'alinny@gmail.com', 'ninny', 'ninny');

ALTER TABLE `bruxinhos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

ALTER TABLE `bruxinhos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD UNIQUE KEY `id_pedido` (`id_pedido`);

  ALTER TABLE `pedidos`
  MODIFY `id_pedido` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;