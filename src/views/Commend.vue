<template>
  <Scroller class="commend">
    <template>
      <div>
        <!-- 轮播图 -->
        <Swiper :images="images"></Swiper>
        <!-- 歌单列表 -->
        <MusicList :list="list"></MusicList>
      </div>
    </template>
  </Scroller>
</template>

<script>
import Swiper from '@/components/Swiper'
import MusicList from '@/components/MusicList'
export default {
  name: 'Commend',
  data () {
    return {
      images: [
        { id: 25730, linkUrl: 'https://y.qq.com/n/yqq/album/002Bl5Wf4ayh6t.html', picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2078871.jpg' },
        { id: 25726, linkUrl: 'https://y.qq.com/n/yqq/album/000CKbs44FBVTL.html', picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2078858.jpg' },
        { id: 25733, linkUrl: 'https://y.qq.com/n/yqq/album/000V6dQC36SFTF.html', picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2078872.jpg' },
        { id: 25330, linkUrl: 'https://y.qq.com/n/yqq/album/7438424984.html', picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2078282.jpg' },
        { id: 25722, linkUrl: 'https://y.qq.com/n/yqq/album/7436141483.html', picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2077668.jpg' }
      ],
      list: [
        {
          dissid: '7436869930',
          createtime: '2020-02-20',
          commit_time: '2020-02-20',
          dissname: '喂，我们有多久没见了',
          imgurl: 'http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7mOM3C4sNrPuecXFMZOZRMibYFmpFiaZ6BwQ/600?n=1',
          introduction: '',
          listennum: 193585,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 2303204713,
            encrypt_uin: 'owozoi-z7eS5oz**',
            name: '小众也有好听的歌',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7436875648',
          createtime: '2020-02-20',
          commit_time: '2020-02-20',
          dissname: '当你发呆时，你在想什么？',
          imgurl: 'http://p.qpic.cn/music_cover/KetjXWSVppvyrVJfzfdpib1eBM4iaeOlNu4qy10SWnml8sdMyanSD4Ig/600?n=1',
          introduction: '',
          listennum: 122172,
          score: 0,
          version: 0,
          creator: {
            type: 6,
            qq: 55894433,
            encrypt_uin: '7K4FNKvPoio*',
            name: 'QQ音乐VIP',
            isVip: 6,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7167658222',
          createtime: '2019-08-23',
          commit_time: '2019-08-23',
          dissname: 'Auto-Tune｜带电迷幻风',
          imgurl: 'http://p.qpic.cn/music_cover/baGuc8TqThp4XicFaelYIMUySN6s3ZHerA0Ruy855erRx3sK7Ln8g6Q/600?n=1',
          introduction: '',
          listennum: 39422,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 1748559185,
            encrypt_uin: 'oKSPNe4kNK6F7v**',
            name: 'Lil Thug',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7383046649',
          createtime: '2020-01-16',
          commit_time: '2020-01-16',
          dissname: '静心指南 | 用琴音漫游旖旎风光',
          imgurl: 'http://p.qpic.cn/music_cover/ibziaVITLbpf6CkOfzjOkAdNzGMHbTkay3DBeQlz4lalszGWF97oC0vw/600?n=1',
          introduction: '',
          listennum: 151305,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 3540600058,
            encrypt_uin: 'oi4PoeCzoenkNn**',
            name: '音林♪',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7338646971',
          createtime: '2020-01-16',
          commit_time: '2020-01-16',
          dissname: '宅男必听！少女漫里的甜系音乐',
          imgurl: 'http://p.qpic.cn/music_cover/bof4MDsSxjG6Va3xXJrNAI5qbDE3cllYZdL4R8Cic4K72C5u0KfwQ9Q/600?n=1',
          introduction: '',
          listennum: 35659,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 2160865471,
            encrypt_uin: 'ow6soecs7Kvlov**',
            name: 'Akivn',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7389853960',
          createtime: '2020-01-20',
          commit_time: '2020-01-20',
          dissname: '励志：勇敢对抗命运的不公',
          imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyCqQJxyV54nuoWUtt3GG1NVMCSibXbkpkXQ/600?n=1',
          introduction: '',
          listennum: 179765,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 452775188,
            encrypt_uin: '7e4A7iSkoKcF',
            name: '还不是因为你长得不好看',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7432427919',
          createtime: '2020-02-20',
          commit_time: '2020-02-20',
          dissname: '独处时光 · 一人份的舒缓套餐',
          imgurl: 'http://p.qpic.cn/music_cover/Fe6emiag6IuVbMib3oN6yctY95h5q970pNWkXOtXsicQo2J6eE1ibErrfQ/600?n=1',
          introduction: '',
          listennum: 106021,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 2407142727,
            encrypt_uin: 'owvz7i6PowSA7z**',
            name: '就是一个听歌der',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7377399381',
          createtime: '2020-02-10',
          commit_time: '2020-02-10',
          dissname: '分手周年日，又想起了我们',
          imgurl: 'http://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu9muGtKw4ic9cX8busfC2ACJYHaUfib9fXpg/600?n=1',
          introduction: '',
          listennum: 48691,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 467638189,
            encrypt_uin: '7eCl7woFoKcq',
            name: '蜜糖男孩',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7382304479',
          createtime: '2020-01-16',
          commit_time: '2020-01-16',
          dissname: '轻柔女低音 | 喧嚣之中寻得宁静',
          imgurl: 'http://p.qpic.cn/music_cover/TEQ5YIUib6x6yEOL7GG69ao7X2Fjzfsj4d9l7c5Jw9pUDibSibzghEDcw/600?n=1',
          introduction: '',
          listennum: 49267,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 952994273,
            encrypt_uin: 'NK4ANKEPowSi',
            name: '阿尔法α',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7429167172',
          createtime: '2020-02-15',
          commit_time: '2020-02-15',
          dissname: '复工重拾状态！来首醒脑解压音',
          imgurl: 'http://p.qpic.cn/music_cover/0yiaX8d9LSmnROyId1RsUU38OwRM5JaEgD16Zu96S2EVdMrMLgC5e8w/600?n=1',
          introduction: '',
          listennum: 152597,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 707665875,
            encrypt_uin: '7inl7wCkNeSk',
            name: '兽哥喊你来听歌Lo',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7087790221',
          createtime: '2019-07-11',
          commit_time: '2019-07-11',
          dissname: '日本朋克 | 青春激扬的霓虹少年',
          imgurl: 'http://p.qpic.cn/music_cover/iaIH0eiccULt2sMRg1KnFhMP6ibjVPZJHhUEgtMF9cib8RxoaClDy4PXxA/600?n=1',
          introduction: '',
          listennum: 100315,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 2653263946,
            encrypt_uin: 'owCkoi-soiEP7c**',
            name: 'Full Rock',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7432430584',
          createtime: '2020-02-18',
          commit_time: '2020-02-18',
          dissname: '华语流行 · 都市开车漂游记',
          imgurl: 'http://p.qpic.cn/music_cover/HZnqT8B6sibc2iaxSb6biaOAZkULFT63KNwED08icfpBDNLG5cxe3e5cQg/600?n=1',
          introduction: '',
          listennum: 56504,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 3490786195,
            encrypt_uin: 'oivqoeSF7w6q7v**',
            name: '允许部分冷门先热起来',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7369137367',
          createtime: '2020-01-09',
          commit_time: '2020-01-09',
          dissname: '往后余生，不再有你',
          imgurl: 'http://p.qpic.cn/music_cover/G8MzQ9Uiahag9FRxThCHF4SjZUl4CicsD1oDyhgLgvgYD8hXM6Tc3N8w/600?n=1',
          introduction: '',
          listennum: 216580,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 695636314,
            encrypt_uin: '7wEk7wosoi6P',
            name: '随心',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '4218252383',
          createtime: '2018-07-20',
          commit_time: '2018-07-20',
          dissname: '冷血深情：锦衣卫系列原声',
          imgurl: 'http://p.qpic.cn/music_cover/JKNRKMiciaU6Su0ibZV93emzlOKL1RiaRG7ragiaxrhjmbxicqbpoEVS7BNQ/600?n=1',
          introduction: '',
          listennum: 103806,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 2692156904,
            encrypt_uin: 'owCqow6k7wEz7n**',
            name: '孟冬',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7435802251',
          createtime: '2020-02-20',
          commit_time: '2020-02-20',
          dissname: '“宅族”必备音乐 | 静享居家时光',
          imgurl: 'http://p.qpic.cn/music_cover/6pKF7XnkTESE8L7nkkbjXpsKKmxXzHcNRd2yccicNBhAt9W9OBkY98w/600?n=1',
          introduction: '',
          listennum: 270211,
          score: 0,
          version: 0,
          creator: {
            type: 1,
            qq: 1043698531,
            encrypt_uin: 'oKnPoiCqNe4iov**',
            name: '刘珂矣',
            isVip: 1,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '6021428333',
          createtime: '2020-02-20',
          commit_time: '2020-02-20',
          dissname: '小王日记 | 告诉你明天有多晴朗',
          imgurl: 'http://p.qpic.cn/music_cover/JBDCVgqXWXaYUvcsElqcicY1Jk0VwBsfSpDLwhpIpJAUxicD5HGy7WHA/600?n=1',
          introduction: '',
          listennum: 399403,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 3414308253,
            encrypt_uin: 'oiv57eozNe-koz**',
            name: '鹅猴综艺狸',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7432985914',
          createtime: '2020-02-18',
          commit_time: '2020-02-18',
          dissname: '华语流行 · 小众女声爱情物语',
          imgurl: 'http://p.qpic.cn/music_cover/Fe6emiag6IuVbMib3oN6yctY95h5q970pNf4wsbG2ibEAYpibF3WvOfVnQ/600?n=1',
          introduction: '',
          listennum: 122297,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 2407142727,
            encrypt_uin: 'owvz7i6PowSA7z**',
            name: '就是一个听歌der',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7312068130',
          createtime: '2019-12-02',
          commit_time: '2019-12-02',
          dissname: '伤心的时候，真的可以听情歌',
          imgurl: 'http://p.qpic.cn/music_cover/XIj2GRpRicn1PZmefQhfQyeTSs9uo6hU4m0OldrfnMcWl80yJvgtM9g/600?n=1',
          introduction: '',
          listennum: 717299,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 3077344505,
            encrypt_uin: 'oinl7ioP7e4z7v**',
            name: '精彩华辉',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7315170014',
          createtime: '2019-11-27',
          commit_time: '2019-11-27',
          dissname: '日系治愈：沐浴夕阳下の余晖',
          imgurl: 'http://p.qpic.cn/music_cover/SyUFHuNb6RH46yvu2cC7TtQpFibUiaTbpsjIyvPHYoM9KiazISjeFkMEw/600?n=1',
          introduction: '',
          listennum: 76332,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 2083220466,
            encrypt_uin: 'ownFoi-Aoevs7c**',
            name: '酥糖哟',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '6965746327',
          createtime: '2019-05-06',
          commit_time: '2019-05-06',
          dissname: '甜系韩语 : 一刻也不能离开你',
          imgurl: 'http://p.qpic.cn/music_cover/3MLTH2k3HibTypyQfrdDcnGHYicXetjc1pvhsocUQJrdKOnsOY1vP9OA/600?n=1',
          introduction: '',
          listennum: 333448,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 1083284863,
            encrypt_uin: 'oKnFoi-F7ecsoz**',
            name: '北鹤',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7433692304',
          createtime: '2020-02-18',
          commit_time: '2020-02-18',
          dissname: '停课不停学，教学不延期',
          imgurl: 'http://p.qpic.cn/music_cover/8eiaDBJ27yYicpMibYZmmEdNGXrWL1scCHYSwc5M6DnaTyQspPvlCu6CA/600?n=1',
          introduction: '',
          listennum: 76538,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 987674549,
            encrypt_uin: 'NKcl7wSP7Kvq',
            name: '小众又怎样',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7075570185',
          createtime: '2019-07-04',
          commit_time: '2019-07-04',
          dissname: 'Downtempo | 电子绿洲，沙漠源泉',
          imgurl: 'http://p.qpic.cn/music_cover/KetjXWSVppvyrVJfzfdpib88B0dJ70XWcluxW8d8z4huKfkLtMib86ibw/600?n=1',
          introduction: '',
          listennum: 121007,
          score: 0,
          version: 0,
          creator: {
            type: 6,
            qq: 55894433,
            encrypt_uin: '7K4FNKvPoio*',
            name: 'QQ音乐VIP',
            isVip: 6,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '6957073758',
          createtime: '2019-05-07',
          commit_time: '2019-05-07',
          dissname: '仙侠录 | 笑忘江湖事，携手与君归',
          imgurl: 'http://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu2hQxSMLUngNkZr4vo2vJnCGgbRNg2E5oA/600?n=1',
          introduction: '',
          listennum: 245315,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 467638189,
            encrypt_uin: '7eCl7woFoKcq',
            name: '蜜糖男孩',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '1625154143',
          createtime: '2017-02-14',
          commit_time: '2017-02-14',
          dissname: '80后美好的童年记忆',
          imgurl: 'http://p.qpic.cn/music_cover/rLpHsVF9HCUwOFg9CKcOO7nAxutxm9y9pt8P08A8JCiacCgKpP1GwoA/600?n=1',
          introduction: '',
          listennum: 238734,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 27459533,
            encrypt_uin: 'owSP7KEkoio*',
            name: '水冰涵',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7426328700',
          createtime: '2020-02-17',
          commit_time: '2020-02-17',
          dissname: '致过去：如果可以，我想重来一次',
          imgurl: 'http://p.qpic.cn/music_cover/Y9V3tAZvgQMVNK2WeMZic7lpk4C26JibzJuxr2pj8ydI7DJ1qPrxCBIA/600?n=1',
          introduction: '',
          listennum: 219633,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 2303204713,
            encrypt_uin: 'owozoi-z7eS5oz**',
            name: '小众也有好听的歌',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7425377361',
          createtime: '2020-02-17',
          commit_time: '2020-02-17',
          dissname: '音乐触动人心 | 他们是，天赐的声音',
          imgurl: 'http://p.qpic.cn/music_cover/JBDCVgqXWXaYUvcsElqcicZibqj3439QxvtJwL6ItleXu1s2Hhudoq4A/600?n=1',
          introduction: '',
          listennum: 178674,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 3414308253,
            encrypt_uin: 'oiv57eozNe-koz**',
            name: '鹅猴综艺狸',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7432202066',
          createtime: '2020-02-17',
          commit_time: '2020-02-17',
          dissname: '在家无聊？不如练练吉他',
          imgurl: 'http://p.qpic.cn/music_cover/KetjXWSVppvyrVJfzfdpibzo8JseP7yrEHiaicKpnhBqV73V1GAfibGdibw/600?n=1',
          introduction: '',
          listennum: 46662,
          score: 0,
          version: 0,
          creator: {
            type: 6,
            qq: 55894433,
            encrypt_uin: '7K4FNKvPoio*',
            name: 'QQ音乐VIP',
            isVip: 6,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7295962188',
          createtime: '2019-11-14',
          commit_time: '2019-11-14',
          dissname: '华语女声：轻触你的小心脏',
          imgurl: 'http://p.qpic.cn/music_cover/iatWx0XbDqbickrADG2ThpB8WdOugJ7ED0libo1O17EIAiaicYFxbHo8n4Q/600?n=1',
          introduction: '',
          listennum: 122610,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 1332743484,
            encrypt_uin: 'oKoiowSPoivF7n**',
            name: '知鱼MUSIC',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7355087593',
          createtime: '2019-12-27',
          commit_time: '2019-12-27',
          dissname: '暖愈日系 | 唤醒双耳，舒缓静心',
          imgurl: 'http://p.qpic.cn/music_cover/ibziaVITLbpf6CkOfzjOkAdPIlmquTKBzMQUaPlXkCOebhoguABjOHSg/600?n=1',
          introduction: '',
          listennum: 282871,
          score: 0,
          version: 0,
          creator: {
            type: 0,
            qq: 3540600058,
            encrypt_uin: 'oi4PoeCzoenkNn**',
            name: '音林♪',
            isVip: 0,
            avatarUrl: '',
            followflag: 0
          }
        },
        {
          dissid: '7423265307',
          createtime: '2020-02-13',
          commit_time: '2020-02-13',
          dissname: '节奏控 · 宅家解闷指南',
          imgurl: 'http://p.qpic.cn/music_cover/Fe6emiag6IuVbMib3oN6yctdpgRmKWl9tUkibYrhGMmVuj6pah6rdDeiaA/600?n=1',
          introduction: '',
          listennum: 311990,
          score: 0,
          version: 0,
          creator: {
            type: 2,
            qq: 2407142727,
            encrypt_uin: 'owvz7i6PowSA7z**',
            name: '就是一个听歌der',
            isVip: 2,
            avatarUrl: '',
            followflag: 0
          }
        }
      ]
    }
  },
  components: {
    Swiper,
    MusicList
  },
  mounted () {

  }
}
</script>

<style lang='scss'>
.commend{
  .swiper{
    img{
      width: 100%;
      height: 100%;
    }
    .van-swipe__indicator{
      width: 8px;
      height: 8px;
      &.van-swipe__indicator--active{
        width: 20px;
        border-radius: 5px;
        background: hsla(0,0%,100%,.8);
      }
    }
  }
}
</style>
