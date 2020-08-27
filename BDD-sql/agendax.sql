-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 31 juil. 2020 à 17:55
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `agendax`
--

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

DROP TABLE IF EXISTS `evenement`;
CREATE TABLE IF NOT EXISTS `evenement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` tinytext DEFAULT NULL,
  `categorie` varchar(45) DEFAULT NULL,
  `couleur` varchar(25) DEFAULT NULL,
  `stardt` datetime DEFAULT NULL,
  `enddt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`id`, `date`, `titre`, `description`, `categorie`, `couleur`, `stardt`, `enddt`) VALUES
(60, '2020-07-11', 'Fete', 'description', 'Famille', 'red', '2020-07-11 02:01:00', '2020-07-11 18:17:00'),
(61, '2020-07-05', 'Yogo ', 'description', 'Yogo', 'pink', '2020-07-05 02:04:00', '2020-07-05 22:23:00'),
(67, '2020-07-09', 'Travail boss', 'sam', 'Reunion', 'pink', '2020-07-09 05:08:00', '2020-07-09 11:10:00'),
(72, '2020-08-11', 'Break', 'new break', 'Garage', 'green', '2020-08-11 16:00:00', '2020-08-11 17:00:00'),
(73, '2020-07-22', 'titre', 'description', 'Sortie', 'gray', '2020-07-22 00:00:00', '2020-07-22 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
