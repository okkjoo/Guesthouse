create DATABASE egg_house;

use egg_house;

--- 用户表
CREATE TABLE `user`(
  `id` int not NULL auto_increment,
  `username` varchar(20) DEFAULT NULL comment '用户名',
  `password` varchar(64) DEFAULT NULL comment '密码',
  `avatar` text comment '头像',
  `phone` varchar(20) DEFAULT NULL comment '电话',
  `sign` varchar(300) DEFAULT NULL comment '用户签名',
  `createTime` TIMESTAMP DEFAULT NULL comment '创建时间',
  `upadateTime` TIMESTAMP DEFAULT NULL comment '更新时间',
  PRIMARY KEY(`id`)
)engine=InnoDB auto_increment=1 DEFAULT charset=utf8 comment='用户表';