# 网易云音乐项目

## 项目运行

克隆项目后，安装依赖

```
yarn
```

运行项目

```
yarn start
```



## 项目简介

跟着coderwhy老师学习的react教程，后面做的网易云音乐项目，老师讲了首页的搭建和音乐的播放，个人后面将其他的页面进行了完善，真的学到了很多的东西，非常感谢coderwhy老师

**技术栈： react  + hooks + redux + antd**

**所有的数据都采用了redux进行同意的管理，并且采用了immutable进了优化**

## 推荐界面

- 轮播图

- 热门推荐

- 新碟上架

- 榜单

  ![image-20211115153239710](https://i.loli.net/2021/11/15/ZxliPrUGqs2SRe6.png)



![image-20211115153405194](https://i.loli.net/2021/11/15/vQ4kNxAbCrXfs2w.png)

## 播放功能

- 歌曲播放功能，做到了对排行榜中的歌曲点击播放、对歌词面板中的歌曲点击播放
- 做到了歌曲的暂停、播放、进度改变播放
- 做了不同模式的播放：循环播放、单曲循环、随机播放
- 做了歌词的解析和滚动

如果没有打开歌词面板，歌词将在下方进行展示

![image-20211115153655629](https://i.loli.net/2021/11/15/zGoXHrdO4V1EumY.png)

如果打开了歌词面板，歌词将会在歌词面板展示

![image-20211115153728058](https://i.loli.net/2021/11/15/e8YZjFUAmERvwnp.png)

歌词界面（评论功能没有做,后面有时间再说吧·····hhhh）

![image-20211115153843205](https://i.loli.net/2021/11/15/76RsvwXx1mV2rgW.png)

## 排行榜

- 点击不同的榜单进行显示
- 点击不同的歌曲进行播放的功能

![image-20211115154023123](https://i.loli.net/2021/11/15/ItRiOx7PZw3b5oN.png)

## 歌单

- 做了界面的展示
- 之前的封装的`cover`组件起了很大的作用，少写了很多的代码

![image-20211115154044991](https://i.loli.net/2021/11/15/qOKX5RuD3G2NxAf.png)

## 主播电台

- 做了界面的展示
- 之前的封装的`cover`组件起了很大的作用，少写了很多的代码

![image-20211115154154035](https://i.loli.net/2021/11/15/a7pNIcvLOCsHGKP.png)

## 歌手

- 做了界面的展示
- 之前的封装的`cover`组件起了很大的作用，少写了很多的代码
- 其中可以按照歌手的首字母进行排序展示

![image-20211115154130785](https://i.loli.net/2021/11/15/iX7zRYAE9FWxl3g.png)

## 新碟上架

- 做了界面的展示
- 之前的封装的`cover`组件起了很大的作用，少写了很多的代码
- 分页显示

![image-20211115154217576](https://i.loli.net/2021/11/15/Ls1MTb6xNAORcCX.png)



