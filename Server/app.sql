create DATABASE egg_house;

use egg_house;

--- 用户表
CREATE TABLE `user`(
  `id` int not NULL auto_increment,
  `username` varchar(20) DEFAULT NULL comment '用户名',
  `password` varchar(64) DEFAULT NULL comment '密码',
  `avatar` LONGTEXT comment '头像',
  `phone` varchar(20) DEFAULT NULL comment '电话',
  `sign` varchar(300) DEFAULT NULL comment '用户签名',
  `createTime` TIMESTAMP DEFAULT NULL comment '创建时间',
  `updateTime` TIMESTAMP DEFAULT NULL comment '更新时间',
  PRIMARY KEY(`id`)
)engine=InnoDB auto_increment=1 DEFAULT charset=utf8 comment='用户表';

--- 酒店表
CREATE TABLE `house`(
  `id` int not NULL auto_increment,
  `name` varchar(50) DEFAULT NULL comment '房屋名称',
  `info` varchar(150) DEFAULT NULL comment '房屋简介',
  `address` varchar(200) DEFAULT NULL comment '房屋地址',
  `price` int DEFAULT NULL comment '房屋价格',
  `publishTime` TIMESTAMP DEFAULT NULL comment '发布时间',
  `cityCode` varchar(10) not NULL comment '城市编码',
  `showCount` int(5) not NULL DEFAULT 0 comment '展示次数',
  `startTime` TIMESTAMP  DEFAULT NULL  comment '开始出租时间',
  `endTime` TIMESTAMP DEFAULT NULL comment '结束出租时间',
  PRIMARY KEY(`id`)
)engine=InnoDB auto_increment = 1 DEFAULT charset=utf8 comment='房屋表';

--- 图片表
CREATE TABLE `imgs`(
  `id` int not NULL auto_increment,
  `url` varchar(500) DEFAULT NULL comment '图片地址',
  `houseId` int not NULL comment '房屋ID',
  `createTime` TIMESTAMP DEFAULT NULL comment '创建时间',
  PRIMARY KEY(`id`)
)engine=InnoDB auto_increment = 1 DEFAULT charset=utf8 comment='图片表';

--- 评论表
CREATE TABLE `comment`(
  `id` int not NULL auto_increment,
  `userId` int  not NULL  comment '用户表',
  `houseId` int not NULL comment '房屋表',
  `msg` varchar(500) DEFAULT NULL comment '评论内容',
  `createTime` TIMESTAMP DEFAULT NULL comment '创建时间',
  PRIMARY KEY(`id`)
)engine=InnoDB auto_increment = 1 DEFAULT charset=utf8 comment='评论表';

INSERT INTO `house` VALUES
(1,'礼途酒店','广州淘金地铁站店','广州',515,'2022-08-28 11:20:20','10001',0,'2022-08-30 11:10:21','2022-09-28 11:19:21'),
(2,'悦云酒店','广州白云国际机场店','广州',375,'2022-08-28 11:20:20','10001',0,'2022-08-30 11:10:21','2022-09-28 11:19:21'),
(3,'铂瑞斯行政公寓','深圳华强北店','深圳',1219,'2022-08-28 11:20:20','10002',0,'2022-08-30 11:10:21','2022-09-28 11:19:21'),
(4,'较场尾蔚蓝沿海民宿','大鹏新区较场尾','深圳',4235,'2022-08-28 11:20:20','10002',0,'2022-08-30 11:10:21','2022-09-28 11:19:21'),
(5,'礼途酒店','广州淘金地铁站店','广州',515,'2022-08-28 11:20:20','10001',0,'2022-08-30 11:10:21','2022-09-28 11:19:21'),
(6,'悦云酒店','广州白云国际机场店','广州',375,'2022-08-28 11:20:20','10001',0,'2022-08-30 11:10:21','2022-09-28 11:19:21'),
(7,'铂瑞斯行政公寓','深圳华强北店','深圳',1219,'2022-08-28 11:20:20','10002',0,'2022-08-30 11:10:21','2022-09-28 11:19:21'),
(8,'较场尾蔚蓝沿海民宿','大鹏新区较场尾','深圳',4235,'2022-08-28 11:20:20','10002',0,'2022-08-30 11:10:21','2022-09-28 11:19:21');

INSERT INTO `imgs` VALUES
(1,'https://dimg04.c-ctrip.com/images/20050a0000004ec6k2FF7_R_300_225_R5_Q70_D.jpg',1,'2022-08-28 11:20:20'),
(2,'https://dimg04.c-ctrip.com/images/0202l1200098zagu6E64E_R_300_225_R5_Q70_D.jpg',2,'2022-08-28 11:20:20'),
(3,'https://dimg04.c-ctrip.com/images/200q1h000001hm83tE3C4_R_300_225_R5_Q70_D.jpg',3,'2022-08-28 11:20:20'),
(4,'https://ac-a.static.booking.cn/xdata/images/hotel/270x200/292819265.webp?k=8b04b0d6c2a0795930cff2620592f6f88066a02ce085c433ce064c95d59ea454&o=',4,'2022-08-28 11:20:20'),
(5,'https://dimg04.c-ctrip.com/images/20050a0000004ec6k2FF7_R_300_225_R5_Q70_D.jpg',5,'2022-08-28 11:20:20'),
(6,'https://dimg04.c-ctrip.com/images/0202l1200098zagu6E64E_R_300_225_R5_Q70_D.jpg',6,'2022-08-28 11:20:20'),
(7,'https://dimg04.c-ctrip.com/images/200q1h000001hm83tE3C4_R_300_225_R5_Q70_D.jpg',7,'2022-08-28 11:20:20'),
(8,'https://ac-a.static.booking.cn/xdata/images/hotel/270x200/292819265.webp?k=8b04b0d6c2a0795930cff2620592f6f88066a02ce085c433ce064c95d59ea454&o=',8,'2022-08-28 11:20:20');

--- 订单表
CREATE TABLE `orders` (
  `id` int NOT NULL auto_increment,
  `order_number` varchar(20) DEFAULT NULL comment '订单编号',
  `userId` int not NULL comment '用户id',
  `houseId` int not NULL comment '房屋id',
  `isPayed` int DEFAULT 0 comment '是否支付： 0 表示未支付， 1 表示已支付',
  `createTime` timestamp DEFAULT NULL comment '创建时间',
  `updateTime` timestamp DEFAULT NULL comment '更新时间',
  PRIMARY KEY(`id`)
)engine=InnoDB auto_increment = 1 DEFAULT charset=utf8 comment='订单表';