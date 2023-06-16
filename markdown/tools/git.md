# 1. 操作用户名、邮箱

## 1.1 全局用户名、邮箱设置

```
git config --global user.name xxx
git config --global user.email xxx.xxx.@xx.com
```

## 1.2 查看全局用户名、邮箱

```
git config --global user.name
git config --global user.email
git config --global --list
```

## 1.3 当前仓库用户名、邮箱设置

```
git config user.name xxx（or --global -> --local）
git config user.email xxx.xxx.@xx.com
```

## 1.4 查看当前仓库用户名、邮箱

```
git config user.name
git config user.email
git config --list
```

# 2. 仓库初始化

```
git init（生成.git文件夹，默认是隐藏状态
```

# 3. 添加文件到暂存区

```
git add filename
git add filename01 filename02 ...
git add . 添加当前文件夹
git add -A 添加当前所有修改文件
```

# 4. 查看本地修改不同

## a. 未添加到暂存区

```
git diff filename
git diff 查看当前所有文件修改的变动
```

## b. 已添加到暂存区

```
git diff filename --staged
```

# 5. 提交到本地仓库

```
git commit -m "提交的message"
```

## 5.1 提交仓库 Message 格式

```
feat:新功能
fix:修复bug
style:格式
refactor:代码重构
chore:项目构建
```

## 5.2 推送到远程仓库

```
本地内容已经提交本地的当前分支之后，把本地的提交推送到远程仓库对应的分支上
git push -u origin branchName
例如：
    git push -u origin main(默认对应的主分支)
    git push -u origin newBranchName(推送到指定的远程仓库的分支)
```



# 6. 查看日志

```
git log
git log --pretty=oneline 单行显示日志（可以查看的更多）+ 完整的版本号信息；
git log --oneline 单行显示日志（可以查看的更多）+ 版本号的前7位；
git log -- stat 查看每次提交具体的修改文件；
git log -p 可以查看每次修改的具体的文件内容；
git log -p 版本号前几位 可以查看指定版本修改的具体的文件内容（== git show 版本号前几位）；
退出按键q

查看提交 message
git reflog
```

# 7. 撤销

## 7.1 对未添加到暂存区的文件进行撤销

```
git checkout -- filename
git checkout -- . (后面加一个. 就是对当前所有文件进行撤销操作)
```

## 7.2 对已经添加到暂存区的文件撤销到未添加到暂存区的状态

```
git reset HEAD filename(回到未添加到暂存区的状态，如果想继续撤销就可以用git checkout -- filename)
git reset HEAD (把当前所有已经添加到暂存区的文件全部一次性回退到之前的状态)
```

# 8. 分支操作

## 8.1 创建分支

```
git branch 分支名称
```

## 8.2 创建新的分支，同时切换到新的分支上

```
git checkout -b 分支名称
：switched to a new branch 'branchname'
```

## 8.3 本地创建新分支同时拉取远程对应的分支

```
git checkout -b newBranchName origin/newBranchName
```

## 8.4 查看分支

```
git branch 查看本地当前的分支
git brach -a 查看所有的分支
```

## 8.5 切换分支

```
git checkout 分支名称
```

## 8.6 拉取远程分支到本地分支

```
拉取之前确保本地分支是想要接收远程对应分支内容的分支，否则会本地会自动合并远程分支的内容
git pull origin newBranchName
```



## 8.7 删除分支

```
git branch -d 分支名称
```

## 8.7 合并分支

```
git merge 被合并的分支
```

# 9. 重命名文件夹

Markdown -> markdown

```
git mv -f Markdown markdown
git add -u markdown (-u选项会更新已经追踪的文件和文件夹)

在大小写不敏感的系统中，如 Windows，重命名文件的大小写，使用临时文件名
git mv Markdown tempFolder && git mv tempFolder markdown
```

# 常用操作

```
1、git checkout -b xxx

git checkout xxx 是指切换到xxx，相当于复制了remote的仓库到本地的xxx分支上，-b意味着branch，即创建新分支，这条指令合起来意思是创建并切换到xxx。
```

```
2、git diff

查看自己对代码做出的改变，也就是查看暂存区与disk区文件的差异。
```

```
3、git add xxx

将xxx文件添加到暂存区。
```

```
4、git commit

将暂存区内容添加到local区的当前分支中。
```

```
5、git push <RemoteHostName> <LocalBranchName>

将local区的LocalBranchName分支推送到RemoteHostName主机的同名分支。（若加-f表示无视本地与远程分支的差异强行push）
```

```
6、git branch -d xxx

删除本地的git分支；

git branch -D xxx
不加-D表示创建新local分支xxx，加-D表示强制删除local分支xxx。
```

```
7、git pull <RemoteHostName> <RemoteBranchName>

同上，不过改成从远程主机下载远程分支并与本地同名分支合并。
```

```
8、git rebase xxx

假设当前分支与xxx分支存在共同部分common，该指令用xxx分支包括common在内的整体替换当前分支的common部分（原先xxx分支内容为common->diversityA，当前分支内容为common->diversityB，执行完该指令后当前分支内容为common->diversityA->diversityB）。
```

```
9、git checkout main

切换回main分支
```

```
10、git pull origin master(main)

将远端修改过的代码再更新到本地
```

```
11、git checkout xxx

回到xxx分支
```

```
12、git rebase main 

我在xxx分支上，先把main移过来，然后根据我的commit来修改成新的内容（中途可能会出现，rebase conflict -----》手动选择保留哪段代码）
```

```
13、git push -f origin xxx

把rebase后并且更新过的代码再push到远端github上 （-f ---》强行）
```

