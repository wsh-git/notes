# 使用OpenSSL 生成证书

https://slproweb.com/products/Win32OpenSSL.html（openssl下载地址）

https://blog.csdn.net/adminstate/article/details/128662641

## 1. 创建私钥（server.key）

1. 进入OpenSSL按照目录，进入bin文件夹；

2. 使用管理员打开终端，进入到bin文件夹；

3. 运行命令：

   管理员命令需要在最前面加‘.\’

   ```
   .\openssl genrsa -des3 -out output/server.key 2048
   ```

   output是当前输出目录，输出的文件是server.key，这个是私钥。

4. 运行之后：

   ```
   Enter PEM pass phrase:
   ```

   输入密码：123456

5. 再次确认密码：123456

   ```
   Verifying - Enter PEM pass phrase:
   ```

6. 创建成功。

   


## 2. 创建CSR（server.csr）

1. 运行命令：

   ```
    .\openssl req -nodes -new -key output/server.key -out output/server.csr
   ```

2. 输入私钥密码（123456）

   ```
   Enter pass phrase for output/server.key:
   ```

   

3. 输入：CN

   ```
   Country Name (2 letter code) [AU]:
   ```

   

4. 输入：shanghai

   ```
   State or Province Name (full name) [Some-State]:
   ```

   

5. 输入：shanghai

   ```
   Locality Name (eg, city) []:
   ```

   

6. 输入：joywinds

   ```
   Organization Name (eg, company) [Internet Widgits Pty Ltd]:
   ```

   

7. 输入：joywinds

   ```
   Organizational Unit Name (eg, section) []:
   ```

   

8. 输入：rot2-wxgame.wsh.joywinds.com

   ```
   Common Name (e.g. server FQDN or YOUR name) []:
   ```

   

9. 输入：1603535741@qq.com

   ```
   Email Address []:
   ```

   

10. 输入：(可选)

    ```
    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    ```

    

11. 输入：（可选）

    ```
    An optional company name []:
    ```

    

12. 创建成功。

## 3. 颁发证书（server.crt）

1. 运行命令：

   ```
   .\openssl x509 -req -sha256 -days 365 -in output/server.csr -signkey output/server.key -out output/server.crt
   ```

   

2. 输入私钥密码：123456

   ```
   Enter pass phrase for output/server.key:
   ```

   

3. 回车输出内容

   

4. 

   ```
   Certificate request self-signature ok
   subject=C = CN, ST = shanghai, L = shanghai, O = joywinds, OU = joywinds, CN = rot2-wxgame.wsh.joywinds.com, emailAddress = 1603535741@qq.com
   ```

   

5. 创建完成。

# 踩过的坑

windows nginx出现 was not signaled for 5s

```
windows nginx出现 was not signaled for 5s
1.windows下 nginx 配置ssl的key是不能存储密码的，否则启动时会提示输入密码
输入后也启动不起来，会报错：
2020/04/21 09:49:09 [alert] 1992#4548: the event “ngx_master_1992” was
not signaled for 5s

解决方案是将密码刨掉，用法：
openssl rsa -in f:/ssl.key -out f:/ssl.key.unsecure
```

