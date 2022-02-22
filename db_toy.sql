-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 03, 2022 lúc 04:17 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_toy`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `admin_account` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `admin_password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_account`, `admin_password`) VALUES
(1, 'Admin', 'admin@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill`
--

CREATE TABLE `bill` (
  `bill_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `bill_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `bill_address` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `bill_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `bill`
--

INSERT INTO `bill` (`bill_id`, `customer_id`, `bill_name`, `bill_address`, `bill_total`) VALUES
(1, 2, 'Phạm Anh', 'Củ Chi, TP.HCM', 1400000),
(2, 1, 'Customer 1', 'Q1, TP.HCM', 2100000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill_detail`
--

CREATE TABLE `bill_detail` (
  `billdetail_id` int(11) NOT NULL,
  `bill_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `billdetail_quantity` int(11) NOT NULL,
  `billdetail_total` decimal(10,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `bill_detail`
--

INSERT INTO `bill_detail` (`billdetail_id`, `bill_id`, `product_id`, `billdetail_quantity`, `billdetail_total`) VALUES
(1, 1, 2, 2, '1400000.000'),
(2, 2, 2, 1, '700000.000'),
(3, 2, 3, 1, '1400000.000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `brand_desc` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`brand_id`, `brand_name`, `brand_desc`) VALUES
(1, 'Lego', 'Lego (có nguồn gốc từ tiếng Đan Mạch là nhãn hiệu đồ chơi xếp hình được sản xuất từ nhựa cao cấp bởi tập đoàn The Lego Group, một công ty tư nhân có trụ sở tại Billund, Đan Mạch.\nĐồ chơi Lego là sản phẩm chủ lực của công ty, bao gồm các mẫu gạch có kích thước, cấu trúc khác nhau, cho phép dễ dàng lắp ghép để tạo hình. Ngoài ra, đồ chơi Lego cũng bao gồm các nhân vật minifigures và nhiều bộ phận khác rất phong phú cho phép bạn tự do sáng tạo và xây dựng nên các câu chuyện thật thú vị. Các mảnh ghép gạch Lego có thể được lắp ráp và kết nối bằng nhiều cách, cho phép bạn có thể xây dựng nhiều đối tượng như xe cộ, nhà cửa, và robot làm việc.'),
(2, 'Hasbro', 'Hasbro là công ty đồ chơi trẻ em hàng đầu thế giới bắt đầu hoạt động từ năm 1940 có trụ sở đặt tại Pawtucket, Rhode Island. Những sản phẩm đồ chơi được yêu thích của Hasbro phải kể đến Play-Doh, Hasbro Gaming, My Little Pony...'),
(3, 'Fisher Price', 'Fisher Price là thương hiệu đồ chơi giáo dục vô cùng nổi tiếng của Mỹ. Với yếu tố cốt lõi và ưu tiên hàng đầu là sự an toàn, đồ chơi cho bé Fisher Price hướng đến đối tượng các bé nhỏ với chất liệu đạt độ an toàn cao, không chứa chất độc hại.'),
(4, 'Mattel', 'Chắc hẳn ai cũng biết đến những cô nàng búp bê Barbie xinh đẹp nhưng thương hiệu Mattel thì không phải ai cũng biết. Đây là một tập đoàn đồ chơi trẻ em hàng đầu tại Mỹ, sở hữu nhiều thương hiệu nổi tiếng như Barbie, Mattel Games, UNO, Fisher Price, Hot Wheels...'),
(5, 'Schleich', 'Các sản phẩm của Schleich chủ yếu là đồ chơi mô hình các con vật, cảnh vật, nhân vật trong phim hay truyện. Với chất lượng cao cấp, đạt chuẩn quốc tế cùng thiết kế tinh xảo, mô phỏng sinh động, gần như chính xác tuyệt đối từng chi tiết nên đồ chơi Schleich được trẻ em, phụ huynh và các giáo viên tại hơn 70 quốc gia trên thế giới tin tưởng và chọn lựa.'),
(6, 'Battat', 'Battat thuộc tập đoàn Battat Inc tại Canada có hơn 120 lịch sử. Thương hiệu đồ chơi trẻ em nổi tiếng này hoạt động với phương châm luôn mang đến cho trẻ em những món đồ chơi tiêu chuẩn cao nhất về chất lượng, an toàn và giá cả hợp lý. Bên cạnh đó, đồ chơi Battat có thiết kế độc đáo, có thể giúp trẻ kích thích sáng tạo, phát triển tư duy với những bài học thú vị và gần gũi.'),
(19, 'Antona', 'Antona là thương hiệu đồ chơi trí tuệ của Công ty cổ phần thiết bị kỹ thuật và Đồ chơi an toàn Việt Nam, với sứ mệnh “Cống hiến cho trẻ em Việt Nam một môi trường đồ chơi lành mạnh và tốt đẹp hơn”, Antoma luôn mang đến cho khách hàng các sản phẩm hữu ích, mang tính giáo dục và giá thành hợp lý.'),
(20, 'Battat 1', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `category_note` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_note`) VALUES
(1, 'Lego', 'Trò lắp mô hình'),
(2, 'Đồ gỗ', 'Trò lắp mô hình'),
(3, 'Mô hình', 'Mô hình đồ chơi'),
(4, 'Pokemon', ''),
(5, 'Đất nặn', ''),
(6, 'Nhà bếp', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `customer_account` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `customer_password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `customer_account`, `customer_password`) VALUES
(1, 'customer1', 'customer1@gmail.com', '123456'),
(2, 'Phạm Tuấn Anh', 'phamtuananh.10a1.BD@gmail', '123456789');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `product_img` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_desc` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_img`, `product_price`, `product_desc`, `category_id`, `brand_id`) VALUES
(1, 'Ideas Tree House', '21318.jpg', 5500000, 'Xây dựng, trưng bày và chơi với bộ đồ chơi LEGO Ideas 21318 Tree House gồm 3.036 mảnh, chi tiết phức tạp này. Một công trình phức hợp dành cho những nhà xây dựng LEGO có kinh nghiệm mà cả gia đình sẽ thích chơi cùng, nó có nền cảnh quan và 3 cabin ngôi nhà trên cây của LEGO — một phòng ngủ chính, phòng tắm và phòng trẻ em. Cây có các bộ phận có thể hoán đổi cho nhau của các yếu tố lá mùa hè xanh và các yếu tố lá mùa thu màu vàng và nâu — những yếu tố này và các yếu tố thực vật khác nhau trên gốc đều được làm từ nhựa polyetylen có nguồn gốc thực vật bền vững — và ngọn cây và mái cabin có thể tháo rời để dễ dàng tiếp cận . Mô hình này được tích hợp các tính năng đầy cảm hứng chơi bao gồm bàn ăn ngoài trời có thể xây dựng và ghế ngồi, xích đu, đốt lửa, bản đồ kho báu và yếu tố đá quý ẩn để chơi truy tìm kho báu và cần cẩu treo trên ban công của cabin phòng ngủ. Một món quà sinh nhật tuyệt vời, đồ chơi sáng tạo độc đáo này đi kèm với các nhân vật nhỏ dành cho mẹ, bố và trẻ em, cùng với hình con chim, để nhập vai vào các cảnh gia đình vui nhộn. Nó cũng bao gồm một tập sách với các hướng dẫn xây dựng và thông tin về người hâm mộ và nhà thiết kế LEGO Ideas của bộ LEGO Ideas này.', 1, 1),
(2, 'Hulkbuster MK44', '2051.jpg', 700000, 'Đồ chơi lắp ráp lego robot Hulkbuster MK44 với 1065 mảnh ghép có thể lắp ghép tạo hình đầy đủ siêu anh hùng marvel sẽ là món đồ chơi độc đáo giúp kích thích trí tưởng tượng, tăng khả năng sáng tạo cũng như sự khéo tay của các bé từ 4 tuổi trở lên, và dành cho cả người lớn. Bé và bạn sẽ thỏa sức lắp ghép theo trí tưởng tượng của mình hoặc dựa vào sách hướng dẫn sử dụng đi kèm theo. Đây sẽ là phần thưởng cũng như món quà sinh nhật tuyệt vời cổ vũ cho bé học tập và phát triển bản thân.', 1, 1),
(3, 'Bàn đồ chơi', 'Fisher-Price-Town-Learning-Table-1.jpg', 1400000, 'Dành cho bé từ 6 tháng tới 3 tuổi+ có tới 4 khu vực thú vị cho bé chơi: ngôi nhà của Puppy, siêu thị, sở thú và nông trại Có thể chuyển đổi thành nhiều tư thế khác nhau để phù hợp cho bé chơi từ nhỏ tới lớn có 9 loại ánh sáng và 120 bài hát, âm thanh khác nhau để bé tha hồ khám phá học hỏi Sử dụng công nghệ  Smart Stages có thể sử dụng 3 giai đoạn khác nhau  Chân ghế có thể tháo rời để chuyển đổi các tư thế khác nhau', 6, 3),
(4, 'Đồ gỗ', '50b53632f35b423f209feb436725e208.jpg', 163000, 'Bộ đồ chơi được chế tạo bằng gỗ tự nhiên, các chi tiết được mài nhẵn phủ sơn màu an toàn và bắt mắt, không hại da tay bé, giúp bé làm quen với thế giới xung quanh và học hỏi được nhiều điều thú vị.\nCombo 1 bộ gồm 6 món : 1 đàn xylophone, 1 đồng hồ gỗ kèm xâu vòng,1 luồn hạt gỗ,1 tháp gỗ 7 màu, 1 thả cọc hình khổi 4, 1 sâu uốn dẻo\n☑ Đàn xylophone loại to gồm 8 thanh với 8 âm sắc khác nhau, giúp trẻ phát triển năng khiếu âm nhạc', 2, 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Chỉ mục cho bảng `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`bill_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Chỉ mục cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD PRIMARY KEY (`billdetail_id`),
  ADD KEY `bill_id` (`bill_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `bill`
--
ALTER TABLE `bill`
  MODIFY `bill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  MODIFY `billdetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

--
-- Các ràng buộc cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD CONSTRAINT `bill_detail_ibfk_1` FOREIGN KEY (`bill_id`) REFERENCES `bill` (`bill_id`),
  ADD CONSTRAINT `bill_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
