# MySql

```
默认端口号：3306
```

## 登录

```
mysql -u root -p回车
之后再输入密码 回车
即登录成功
```

## 查看数据库

```mysql
show databases;
```

## 使用指定数据库

```mysql
use xxx; -- xxx为某数据库；
```

## 查看数据库

```mysql
select * from xxx; -- xxx为某数据库；
```



# redis

## 安装步骤：

### 首先使用 sudo 设置非 root 用户，然后安装构建和测试依赖项：

```
sudo apt update 
sudo apt full-upgrade
sudo apt install build-essential tcl
```

### 安装 Redis 服务器 

```
sudo apt-get install redis-server
```

### 启动 Redis 服务器 

```
redis-server
```

### 启动 Redis 客户端 

```
redis-cli
```

### 验证 Redis 是否正常工作

```
PING
返回 PONG 表示 Redis 已成功安装在您的系统上。
```

## 设置密码

密码设置为123

```
config set requirepass 123
此命令为立即生效的
但是不会保存在配置文件中
重启了 Redis 服务器之后，又可以无密码登录了
```

## 退出 Redis

```
exit
```

## 登入 Redis 客户端

```
redis-cli -p 6379 -a 123
// -p 6379 为 Redis 默认的端口号
// -a 123 为设置的密码
// -h 127.0.0.1 指定服务器地址，默认是本地，可以不写
```

## 登录之后验证密码

```
auth 123
```

## Redis 使用方法

### 1. 字符串

#### 设置 key-value

```
set key value
如：set name lilei
```

#### 获取指定 key 的值

```
get key
如：get name
返回 lilei
```

#### 是否存在指定 key

```
exists key
如：exists name
返回 1 就是存在当前key
```

#### 删除指定的 key

```
del key
如：del name
返回 1 删除成功
```

### 2. 哈希表

#### 设置哈希格式

```
HMSET key 字段名字1 value1 字段名字2 value2 ...
如：HMSET playerInfo name lilei pwd 123
key -> playerInfo
字段名字1 -> name
value1 -> lilei
字段名字2 -> pwd
value2 -> 123
```

#### 获取指定 key 所有的哈希值

```
HGETALL key
如：HGETALL playerInfo
```

#### 指定 key 的指定字段是否存在

```
HEXISTS key 字段名
如：HEXISTS playerInfo name
```

#### 获取指定 key 的指定字段的值

```
HGET key 字段名
如：HGET playerInfo name
```

#### 获取指定 key 指定的哈希表里所有的字段

```
HKEYS key
如：HKEYS playerInfo
```

#### 获取指定 key 的指定字段的值

```
HMGET key 字段名(类似于 HGET)
如：HMGET playerInfo name
```

### 3. 列表

#### 在列表左边 Push 值

```
LPUSH list_name value
如：LPUSH players lilei
```

#### 在列表右边 Push 值

```
RPUSH list_name value
如：RPUSH players lily
```

#### 获取列表指定范围的值

```
LRANGE list_name startIndex endIndex
LRANGE players 0 100
```

#### 列表左边弹出值

```
LPOP players
```

#### 列表右边弹出值

```
RPOP players
```

### 4. 有序集合

#### 增加新的值

```
ZADD key 权重 value （权重小的排在前面）
如：ZADD rank 1000 lilei
```

#### 取出有序集合的值

```
ZRANGE key startIndex endIndex
ZRANGE key startIndex endIndex WITHSCORES(带权重显示)
如：ZRANGE rank 0 10（前10名）
```



