-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2022 at 03:34 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `verkkokauppa_tietokanta`
--

-- --------------------------------------------------------

--
-- Table structure for table `tuote`
--

CREATE TABLE `tuote` (
  `tuotenro` int(11) NOT NULL,
  `tuotenimi` varchar(128) NOT NULL,
  `kuvaus` varchar(256) NOT NULL,
  `kuvannimi` varchar(128) NOT NULL,
  `hinta` decimal(10,2) NOT NULL,
  `tuoteryhmanro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tuote`
--

INSERT INTO `tuote` (`tuotenro`, `tuotenimi`, `kuvaus`, `kuvannimi`, `hinta`, `tuoteryhmanro`) VALUES
(1, 'Kahvi', 'Kahvi, johon voit valita makusi mukaan maidon ja sokerin tai molemmat.', 'tuote_kahvi.jpg', '2.50', 1),
(2, 'Cappuccino', 'Espressokahvi, johon on lisätty kuumaa maitoa ja maitovaahtoa.', 'tuote_capuccino.jpg', '3.50', 1),
(3, 'Caffe Latte', 'Kahvijuoma, joka sisältää 1/3 espressoa ja 3/4 vaahdotettua maitoa.', 'tuote_caffelatte.jpg', '4.00', 1),
(4, 'Espresso', 'Vahva sokerilla maustettu kahvijuoma.', 'tuote_espresso.jpg', '3.50', 1),
(5, 'Kaakao', 'Lämmin suklainen kaakao.', 'tuote_kaakao.jpg', '4.00', 2),
(6, 'Tee', 'Kupillinen kuumaa teetä makusi mukaan.', 'tuote_earlgray.jpg', '3.00', 2),
(7, 'Juustoleipä', 'Herkullinen kahdella juustolla ja sesongin vihanneksilla/hedelmillä täytetty leipä.', 'tuote_juustoleipa.jpg', '5.00', 4),
(8, 'Croissant', 'Tuore croissant valitsemillasi täytteillä.', 'tuote_croissant.jpg', '5.50', 4),
(9, 'Kinkkupiiras', 'Maistuva palanen kinkkupiirakkaa.', 'tuote_kinkkupiirakka.jpg', '5.00', 4),
(10, 'Macchiato', 'Kahvi, jonka pohjana espresso sekä lisänä pieni määrä vaahdotettua maitoa.', 'tuote_macchiato.jpg', '4.50', 1),
(11, 'Mansikkaleivos', 'Makea mansikkaleivos.', 'tuote_mansikkaleivos.jpg', '5.50', 3),
(12, 'Mustikkamuffini', 'Tuoreista mustikoista leivottu muffinini.', 'tuote_mustikkamuffini.jpg', '4.50', 3),
(13, 'Mutakakku', 'Suklainen mutakakku kermavaahdolla.', 'tuote_mutakakku.jpg', '5.00', 3),
(14, 'Omenapiirakka', 'Lämmin palanen omenapiirakkaa.', 'tuote_omenapiirakka.jpg', '4.00', 3),
(15, 'Prezel', 'Suolainen makupala.', 'tuote_prezel.jpg', '3.00', 4),
(16, 'Rooibos', 'Maukas rooibostee.', 'tuote_rooibos.jpg', '2.50', 2),
(17, 'Suklaacookie', 'Suklainen cookie.', 'tuote_suklaacookie', '2.00', 3),
(18, 'Täytetty leipä', 'Leipä omavalintaisilla täytteillä.', 'tuote_tayteleipa.jpg', '4.50', 4),
(19, 'Vihreä tee', 'Lämmin kupillinen vihreää teetä.', 'tuote_vihreatee.jpg', '2.50', 2),
(20, 'Yrttitee', 'Tuoreilla yrteillä maustettu haudutettu tee.', 'tuote_yrttitee.jpg', '2.00', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tuote`
--
ALTER TABLE `tuote`
  ADD PRIMARY KEY (`tuotenro`),
  ADD KEY `tuoteryhmanro` (`tuoteryhmanro`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tuote`
--
ALTER TABLE `tuote`
  MODIFY `tuotenro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
