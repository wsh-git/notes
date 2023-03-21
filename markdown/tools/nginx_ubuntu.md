# apt-get安装nginx

```shell
sudo su root apt-get install nginx   #安装
nginx -v  #查看安装版本
service nginx start  #启动nginx
```

启动后，在网页重输入ip地址，即可看到nginx的欢迎页面。至此[nginx安装](https://so.csdn.net/so/search?q=nginx安装&spm=1001.2101.3001.7020)成功。

# nginx文件安装完成之后的文件位置

- /usr/sbin/nginx：主程序
- /etc/nginx：存放配置文件
- /usr/share/nginx：存放静态文件
- /var/log/nginx：存放日志

# 进入/etc/nginx，编辑配置文件

```shell
gedit xxx
```



# 下载nginx安装包的方式安装

https://blog.csdn.net/yayalejianyue/article/details/128466625

https://blog.csdn.net/yzf913214/article/details/105885608

https://nginx.org/en/download.html（nginx 官方下载地址 Stable version -> nginx-1.22.1 pgp）

1. 解压到当前目录下

```shell
tar -xvf nginx-1.18.0.tar.gz
```

2. 进入到解压好的文件中
3. 运行命令(/home/wsh/nginx 为指定的安装目录)

```shell
./configure --prefix=/home/wsh/nginx && make && make install

./configure --with-pcre-jit --with-http_ssl_module --with-http_realip_module --with-http_stub_status_module --with-http_v2_module --prefix=/home/wsh/nginx && make && make install

./configure --with-pcre-jit --with-http_ssl_module --with-http_realip_module --with-http_stub_status_module --with-http_v2_module --with-http_gzip_static_module --prefix=/home/wsh/nginx && make && make install

# 同时添加指定的模块重新编译安装
# 每次新增模块都要把之前用到的也一起加进去编译安装
```

4. 添加软链，使得nginx命令全局能访问，每次运行就不用切换到安装目录中了

```shell
ln -s /home/wsh/nginx/sbin/nginx /usr/local/bin/
```

## 常用命令

- 启动：`nginx`
- 停止：`nginx -s stop`
- 重启：`nginx -s reload`
- 帮助命令: `nginx -h`
- 检测配置文件：`nginx -t`

## 查询当前nginx运行的进程

```shell
ps -ef | grep nginx
```