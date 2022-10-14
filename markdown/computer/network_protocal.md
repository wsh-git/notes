# 计算机网络协议

## 应用层协议：

### TCP

```
SSH(安全外壳协议) TCP 22；
SFTP(安全的网络传输协议) TCP 22(是SSH的子系统，提供与SSH相同级别的安全性)；
```

```
FTP(文件传输协议) TCP 21(控制)/20(上传)；
```

```
TELENT(远程终端协议) TCP 23；
```

```
HTTP(超文本传输协议) TCP 80；
```

```
SMTP(简单邮件传输协议) TCP 25；
```

```
POP3(邮局协议3-离线模式 C/S结构) TCP 110；
```

```
IAMP(交互式邮件存取协议) TCP 143；
```

```
MIME(邮件扩充协议 非文本邮件内容、附件)
```

```
SSL(加密协议 应用层-传输层之间) TCP 443；(https = http + ssl)
```

### UDP

```
TFTP(简单文件传输协议) UDP 69； 
```

```
SNMP(简单网络管理协议/异步请求响应协议) UDP 161/162（陷阱Trap）；
```

```
DNS（域名转换IP地址） UDP 53;
```

```
DHCP(动态主机配置协议，基于BOOTP协议) UDP 67(服务端)/ 68(客户端)
```

## 局域网网络协议：

```
ARP(地址解析协议) 网络(接口)层协议 实现IP地址与MAC地址之间的转换；
```

```
ICMP 传输层协议  ICMP协议数据单元封装在 IP数据报 中传送；
```

```
PPP(点对点协议) 数据链路层；(ADSL接入Internet，用户端需要安装PPPoE协议)
	安全认证协议是 CHAP ，通过三次握手；
```

# 加密算法

## 对称秘钥体制

```
DES 算法
```

```
3DES 算法
```

```
TDEA 算法
```

```
IDEA 算法
```

```
Blowfish 算法(鱼，对称的)
```

```
RC 算法
```

```
AES 算法
```

## 非对称秘钥体制（公钥密码体制）

```
DH 算法(Diffie-Hellman)
```

```
RSA 算法
```

```
DSA 算法
```

```
Elgamal 算法
```

```
背包算法
```

```
Rabin 算法
```

```
ECC 算法(椭圆曲线加密算法)
```

# 安全认证

## 实体认证

### 基于公钥数字签名

```
RSA 签名
```

```
DSS 签名
```

```
Hash 签名
```

### 数字证书（签名认证 - 认证机构CA）

### 数字摘要算法

```
MD5 算法
```

```
SHA 算法
```

# 网络命令

```
ping 通过收发ICMP数据包检测网络的连通性、测试域名解析是否成功；
```

```
netstat TCP连接、监听端口、以太网统计信息、IP路由表、IPv4、IPv6等；
	状态：
		CLOSE_WAIT 收到对方的连接释放请求；
		CLOSED 连接已关闭；
		ESTABLISHED 连接已建立；
		FIN_WAIT_1 已发出连接释放请求；
		FIN_WAIT_2 等待对方的连接释放请求；
		LAST_ACT 等待对方的连接释放应答；
		LISTEN 正在监听端口；
		SYN_RECEIVED 收到对方的连接建立请求；
		SYN_SEND 已主动发出连接建立请求；
		TIME_WAIT 等待一段时间后将释放连接；
```

```
ipconfig 显示TCP/IP配置；
```

```
arp 显示、修改地址解析协议缓存表的内容；
```

```
tracert 确定到达目标路径，路径上每一个中间路由器的IP地址；
```

```
nslookup 显示DNS查询信息，诊断和排除DNS故障；
```
