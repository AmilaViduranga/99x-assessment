-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 07, 2019 at 12:02 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assessment`
--

-- --------------------------------------------------------

--
-- Table structure for table `price_calculator`
--

CREATE TABLE `price_calculator` (
  `id` bigint(20) NOT NULL,
  `carton_price` double DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `units_of_carton` int(11) DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `unit_price` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `price_calculator`
--

INSERT INTO `price_calculator` (`id`, `carton_price`, `created_at`, `product_name`, `units_of_carton`, `updated_at`, `image_url`, `unit_price`) VALUES
(1, 175, '2019-09-14 23:58:15', 'Penguin-ears', 20, '2019-11-05 17:34:26', 'https://www.pinclipart.com/picdir/middle/3-32583_vector-clip-art-easter-bunny-penguin-shower-curtain.png', 11.375),
(2, 825, '2019-09-14 23:59:23', 'Horseshoe', 5, '2019-09-14 23:59:23', 'https://c7.uihere.com/files/268/152/34/horseshoe-western-cowboy-clip-art-horseshoe.jpg', 214.5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `price_calculator`
--
ALTER TABLE `price_calculator`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `price_calculator`
--
ALTER TABLE `price_calculator`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
