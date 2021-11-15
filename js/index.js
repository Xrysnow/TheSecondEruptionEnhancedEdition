//
(function () {
    //
    var LOCAL_MODE = true
    const VOICE_LANGUAGE = ''

    const LANGUAGE = document.getElementsByTagName('meta')['content-language'].content
    if (LANGUAGE == 'jp') {
        LOCAL_MODE = true
    }

    const BOOK_DECRIPTION = '2000年2月1日午夜，在西伯利亚的天命巴比伦实验室中，所有研究员一夜之间全部消失。在奥托下令调查这起“神秘”事件的同时，还有人似乎在担忧着“她”的出现。而这一切，揭开了第二次崩坏的序幕…'
    const BOOK_COVER_SRC = LOCAL_MODE ? 'img/book_cover/1012.jpg' : 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1012.jpg'
    const COVER_SRC_PREFIX = LOCAL_MODE ? 'img/chapter_cover/1012/' : 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/1012/'
    const IMG_SRC_PREFIX = LOCAL_MODE ? 'img/book/1012/' : 'https://comicstatic.bh3.com/new_static_v2/comic/book/1012/'
    const HOME_BG_SRC = IMG_SRC_PREFIX + '30/0001.jpg'
    const NUM_CHAPTER = 67
    const CHAPTER_TITLES = [
        "楔子 诡变",
        "第一话 鬼魂", "第二话 少女", "第三话 开战", "第四话 结盟", "第五话 撕裂",
        "第六话 破茧", "第七话 空间", "第八话 律者", "第九话 名字", "第十话 对决",
        "第十一话 小丑", "第十二话 少年", "第十三话 护送", "第十四话 游戏", "第十五话 礼物",
        "第十六话 约定", "第十七话 旧梦", "第十八话 神谕", "第十九话 苍月", "第二十话 双雄",
        "第二十一话 计划", "第二十二话 离别", "第二十三话 去月球", "第二十四话 揭幕", "第二十五话 鏖战",
        "第二十六话 牺牲", "第二十七话 最后一战", "第二十八话 一去不回", "壁纸精选", "第二十九话 女王归来", "第三十话 律者袭来",
        "第三十一话 反击号角", "第三十二话 战前演说", "第三十三话 魂钢之秘", "第三十四话 剑心", "第三十五话 随风而逝",
        "第三十六话 羽渡尘", "第三十七话 执念", "第三十八话 血缘", "第三十九话 代价", "第四十话 可可利亚",
        "第四十一话 救世之战", "第四十二话 燃烧冻土", "第四十三话 夙愿", "第四十四话 灵魂", "第四十五话 神",
        "第四十六话 太虚剑神", "第四十七话 斩断", "第四十八话 玩具", "第四十九话 和平", "壁纸精选II", "第五十话 家",
        "第五十一话 拥抱", "第五十二话 最后一搏", "第五十三话 贝纳勒斯", "第五十四话 屠龙", "第五十五话 梦醒",
        "第五十六话 赌局", "第五十七话 集结", "第五十八话 伤痛", "第五十九话 无限回廊", "第六十话 异变",
        "第六十一话 压制", "壁纸精选III", "最终话 守护", "后日谈 归处"
    ]
    const NUM_PAGES = [
        24, 18, 23, 18, 30,
        22, 25, 29, 21, 27,
        21, 26, 27, 29, 19,
        20, 18, 25, 40, 19,
        21, 21, 22, 16, 19,
        17, 20, 18, 21, 30,
        26, 20, 17, 18, 20,
        17, 18, 20, 20, 22,
        18, 19, 18, 17, 20,
        24, 23, 17, 20, 21,
        20, 32, 24, 23, 21,
        21, 21, 21, 21, 22,
        27, 23, 18, 22, 34,
        75, 22
    ]
    // from CloudMusic@EastenTX, list id = 6941570124
    const BGM_SINGLE_ID = [
        1818567465,
        1818580970,
        468513225,
        1334673822,
        1334672915,
        1818580977,
        484056610,
        1818580979,
        1334672907,
        484056613,
        1818568430,
        1440622024,
        1818580969,
        1818568450,
        1464489909,
        1391654113,
        1480346244,
        1818580981,
        1818567499,
        1818581984,
        1818580988,
        1334673828
    ]
    // from bilibili@Eastenhhh
    const BGM_INFO = [
        [
            [1, 2, 3],
            [0, 48, 73]
        ],
        // 1-10
        4, [
            [5, 6],
            [0, 42]
        ], 3, [
            [3, 7],
            [0, 61]
        ],
        [
            [8, 11],
            [0, 24]
        ],
        1, 9, 10, [
            [11, 12],
            [0, 19]
        ], 13,
        // 11-20
        13, [
            [14, 3],
            [0, 26]
        ], 15, 15, 16,
        16, 17, 6, 8, 11,
        // 21-30
        11, 14, 14, 6, 13,
        8, 9, 8, -1, 6, 6,
        // 31-40
        6, [
            [18, 11],
            [0, 34]
        ], 19, 20, 13,
        20, 11, 19, 11, 11,
        // 41-50
        11, 10, 21, 8, 8,
        21, [
            [21, 8],
            [0, 78]
        ], 8, 14, -1, 16,
        // 51-
        16, 12, 12, 8, 11,
        12, 12, 11, 19, 10,
        10, -1, 22, 14
    ]
    const MUSIC_LOCAL_SRC_PREFIX = 'res/music/'
    const MUSIC_LOCAL_SRC_POSTFIX = '.mp3'
    const VOICE_SRC_PREFIX = VOICE_LANGUAGE == 'jp' ? 'res/voice_jp/' : 'res/voice/'
    const VOICE_SRC_POSTFIX = '.wav'
    const VOICE_INFO = {
        // chaper: { page: num }
        1: {
            3: 1, // c6-7
            4: 1, // c23-5
        },
        3: {
            8: 2, // c24-11
            14: 1, // c24-11
            15: 2, // c24-11
        },
        4: {
            10: 1, // 德莉莎-战斗
        },
        6: {
            4: 1, // c24-11
        },
        7: {
            9: 1, // c2-17
            12: 5, // c24-11
            13: 1, // c24-11
            14: 2, // c24-11
            15: 3, // c24-11
        },
        8: {
            13: 1, // BV1aW411P7UJ
            17: 1, // c2-17
            24: 1, // 原神-温迪-战斗
        },
        10: {
            8: 1, // c9-3
            13: 1, // c24-11
            18: 1, // c24-11
            20: 1, // BV1H54y1y7wJ
            22: 1, // c24-11
        },
        11: {
            7: 2, // c24-11
            8: 1, // c24-11
            18: 1, // c11-15
        },
        12: {
            3: 1, // c11-15
        },
        19: {
            13: 1, // c24-11
        },
        23: {
            8: 1, // c11-15
            12: 1, // c11-15
        },
        26: {
            2: 1, // BV1aW411P7UJ
        },
        29: {
            2: 1, // c11-15
        },
        38: {
            13: 1, // 符华-炽翎-战斗
        },
        45: {
            12: 1, // 符华-迅羽-战斗
            17: 1, // c24-11
        },
        46: {
            3: 1, // c20
            4: 1, // c9-6
        },
        48: {
            14: 1, // BV1H54y1y7wJ
            15: 1, // c13-ex3
        },
        49: {
            5: 1, // BV1Ut411v74a
        },
        51: {
            3: 1, // c5-10
            19: 1, // c24-11
            20: 2, // c24-11
        },
        53: {
            9: 1, // c24-11
            10: 3, // c24-11
            11: 5, // c24-11
            12: 1, // c24-11
            14: 2, // c24-11
            15: 1, // c24-11
            17: 2, // c24-11
        },
        54: {
            6: 1, // c24-11
            7: 1, // c24-11
            8: 2, // c24-11
            9: 3, // c24-11
            10: 1, // c24-11
            15: 1, // c24-11
            16: 4, // c24-11
            17: 1, // c24-11
            18: 2, // c24-11
            21: 1, // c24-11
        },
        55: {
            13: 1, // c12-1
        },
        57: {
            21: 1, // c17-10
        },
        58: {
            14: 3, // c24-11
        },
        60: {
            16: 2, // c24-11
            17: 1, // c24-11
            21: 1, // c9-4
        },
        61: {
            10: 1, // c9-3
            19: 1, // c24-11
            20: 3, // c24-11
            21: 1, // c24-11
            22: 1, // c24-11
            23: 1, // c24-11
        },
        64: {
            9: 1, // BV1aW411P7UJ
        },
        66: {
            6: 2, // c24-11
            7: 2, // c24-11
            8: 1, // c24-11
            46: 1, // BV1H54y1y7wJ
            53: 1, // BV1H54y1y7wJ
            66: 1, // c24-11
            68: 3, // c24-11
            69: 2, // c24-11
            70: 1, // c24-11
            71: 1, // c24-11
        },
        67: {
            22: 1 // BV14X4y1w7P6
        }
    }
    const VOICE_ICON = '<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"/></svg>'

    const ViewerConfig = { zoomRatio: 0.2 }
    var GlobalViewer = new Viewer(document.getElementById('images'), ViewerConfig)
    var CurrentPage = -1
    var CurrentBgMusicID = -1
    var ShowHomeIndex = false
    var ShowHomeAbout = false
    var ShowMenu = false
    var ShowConfig = false
    var ShowBGMPlayer = false
    var EnableBGM = true
    var BgMusicHandle = 0
    var BgMusicPlayerHeight = 66
    var BgMusicSpecialPause = false

    const ToggleHomeIndex = function (show) {
        ShowHomeIndex = show
        document.getElementById('home-index-wrapper').style.display = ShowHomeIndex ? 'block' : 'none'
        document.getElementById('home-index-bg').style.display = ShowHomeIndex ? 'block' : 'none'
        document.getElementById('home-index').style.display = ShowHomeIndex ? 'flex' : 'none'
        document.getElementById('home-index-return-bg').style.display = ShowHomeIndex ? 'block' : 'none'
        document.getElementById('home-footer').style.display = ShowHomeIndex ? 'none' : 'block'
        document.getElementById('home-bg').style.display = ShowHomeIndex ? 'none' : 'unset'
    }

    const ToggleHomeAbout = function (show) {
        ShowHomeAbout = show
        document.getElementById('home-about').style.display = show ? 'flex' : 'none'
    }

    const ToggleGallery = function (show) {
        document.getElementById('gallery').style.display = show ? 'block' : 'none'
    }

    const ToggleHome = function (show) {
        document.getElementById('home').style.display = show ? 'block' : 'none'
    }

    const ToggleMenu = function (show) {
        ShowMenu = show
        document.getElementById('menu-container').style.display = show ? 'block' : 'none'
    }

    const ToggleConfig = function (show) {
        ShowConfig = show
        document.getElementById('menu-config-container').style.display = show ? 'block' : 'none'
    }

    const ToggleBGMPlayer = function (show) {
        if (!EnableBGM) {
            return
        }
        ShowBGMPlayer = show
        document.getElementById('bgm-player-container').style.display = show ? 'block' : 'none'
    }

    const ClearBgMusicHandle = function () {
        if (BgMusicHandle) {
            clearTimeout(BgMusicHandle)
            BgMusicHandle = 0
        }
    }

    const SetBgMusicHandle = function (id, height, time) {
        ClearBgMusicHandle()
        BgMusicHandle = setTimeout(function () {
            SetBGMPlayer(false, id, height)
        }, time)
    }

    const RemoveBGMPlayer = function () {
        ToggleBGMPlayer(false)
        ClearBgMusicHandle()
        CurrentBgMusicID = -1
        var container = document.getElementById('bgm-player-container')
        if (container.children.length > 0) {
            container.removeChild(container.children[0])
        }
        console.log('remove bgm')
    }

    const SetBGMPlayer = function (isList, id, height) {
        if (!EnableBGM || BgMusicSpecialPause) {
            return
        }
        if (CurrentBgMusicID == id) {
            return
        }
        RemoveBGMPlayer()
        if (id < 0) {
            return
        }
        CurrentBgMusicID = id
        var container = document.getElementById('bgm-player-container')
        if (!LOCAL_MODE) {
            var frame = document.createElement('iframe')
            frame.id = 'bgm-player'
            frame.allow = 'autoplay'
            frame.frameBorder = 'no'
            if (isList) {
                frame.src = GetMusicListSrc(id, height)
            } else {
                frame.src = GetMusicSingleSrc(id, height)
            }
            container.appendChild(frame)
        } else {
            var player = document.createElement('audio')
            player.id = 'bgm-player'
            player.loop = true
            player.autoplay = true
            player.controls = true
            player.volume = 0.5
            player.src = MUSIC_LOCAL_SRC_PREFIX + id + MUSIC_LOCAL_SRC_POSTFIX
            container.appendChild(player)
        }
        //
        console.log('change bgm to ' + id)
    }

    const SetHomePage = function () {
        var obj_bg = document.getElementById('home-bg')
        obj_bg.src = HOME_BG_SRC
        var obj_bg2 = document.getElementById('home-bg2')
        obj_bg2.src = HOME_BG_SRC
        //
        var a1 = document.getElementById('home-menu-index').children[0]
        a1.onclick = function () {
            ToggleHomeIndex(!ShowHomeIndex)
        }
        //
        var a2 = document.getElementById('home-menu-about').children[0]
        a2.onclick = function () {
            ToggleHomeAbout(true)
        }
        var obj_about_bg = document.getElementById('home-about-bg')
        obj_about_bg.onclick = function () {
            ToggleHomeAbout(false)
        }
        //
        var obj_index = document.getElementById('home-index')
        for (let i = 0; i < NUM_CHAPTER; i++) {
            var obj_container = document.createElement('div')
            var obj_a = document.createElement('a')
            var obj_img_wrapper = document.createElement('div')
            var obj_img = document.createElement('img')
            var obj_text = document.createElement('div')
            //
            obj_container.className = 'home-index-container'
            obj_img.className = 'home-index-img'
            obj_a.className = 'home-index-a'
            obj_a.href = '#'
            obj_a.onclick = function () {
                ToggleHomeIndex(false)
                GotoPage(i)
            }
            obj_img_wrapper.className = 'home-index-img-wrapper'
            obj_text.className = 'home-index-banner'
            //
            obj_text.textContent = CHAPTER_TITLES[i]
            //
            var num = '' + (i + 1)
            var src = COVER_SRC_PREFIX + num + '.jpg'
            obj_img.src = src
            //
            obj_img_wrapper.appendChild(obj_img)
            obj_a.appendChild(obj_img_wrapper)
            obj_a.appendChild(obj_text)
            obj_container.appendChild(obj_a)
            obj_index.appendChild(obj_container)
        }
        for (let i = 0; i < NUM_CHAPTER; i++) {
            var obj_i = document.createElement('i')
            obj_index.appendChild(obj_i)
        }
        var obj_index_return = document.getElementById('home-index-return')
        obj_index_return.onclick = function () {
            ToggleHomeIndex(false)
        }
        //
        var obj_banner = document.getElementById('home-index-title-banner')
        var obj_img = document.createElement('img')
        obj_img.id = 'home-index-title-img'
        obj_img.src = BOOK_COVER_SRC
        obj_banner.appendChild(obj_img)
        //
        var obj_text = document.getElementById('home-index-title-text')
        obj_text.textContent = BOOK_DECRIPTION
    }

    const SetMenu = function () {
        var obj_menu_next = document.getElementById('menu-next')
        obj_menu_next.onclick = function () {
            if (CurrentPage < 0 || CurrentPage >= NUM_PAGES - 1) {
                return
            }
            GotoPage(CurrentPage + 1)
        }
        var obj_menu_prev = document.getElementById('menu-prev')
        obj_menu_prev.onclick = function () {
            if (CurrentPage < 1 || CurrentPage >= NUM_PAGES) {
                return
            }
            GotoPage(CurrentPage - 1)
        }
        var obj_menu_home = document.getElementById('menu-home')
        obj_menu_home.onclick = function () {
            GotoHome()
            ToggleHomeIndex(true)
        }
        var obj_menu_bgm = document.getElementById('menu-bgm')
        obj_menu_bgm.onclick = function () {
            ToggleBGMPlayer(!ShowBGMPlayer)
        }
        var obj_menu_config = document.getElementById('menu-config')
        obj_menu_config.onclick = function () {
            ToggleConfig(!ShowConfig)
        }
        //
        var container = document.getElementById('menu-container')
        container.onclick = function (e) {
            e.stopPropagation()
        }
        document.body.onclick = function () {
            ToggleConfig(false)
            ToggleBGMPlayer(false)
        }
    }

    const ClearGallery = function () {
        GlobalViewer.hide()
        var obj_gallery = document.getElementById('gallery')
        var target = obj_gallery.children[0]
        if (target) {
            obj_gallery.removeChild(target)
        }
    }

    const AddToGallery = function (e) {
        var obj_gallery = document.getElementById('gallery')
        obj_gallery.appendChild(e)
    }

    const GotoHome = function () {
        CurrentPage = -1
        ClearGallery()
        RemoveBGMPlayer()
        ToggleConfig(false)
        ToggleMenu(false)
        var title = document.getElementById('home')
        title.style.display = 'block'
    }

    const GotoPage = function (idx) {
        if (idx >= NUM_CHAPTER) {
            return
        }
        if (idx < 0) {
            return GotoHome()
        }
        CurrentPage = idx
        //
        ToggleMenu(true)
        ToggleConfig(false)
        ToggleHome(false)
        ToggleGallery(true)
        SetBgMusicHandle(GetBgMusicID(idx, 0), BgMusicPlayerHeight, 500)
        //
        var ctitle = document.getElementById('chapter-title')
        if (ctitle) {
            ctitle.textContent = CHAPTER_TITLES[idx]
        }
        //
        console.log('ClearGallery')
        ClearGallery()
        const num_page = NUM_PAGES[idx]
        var obj_ul = document.createElement('ul')
        obj_ul.id = 'images'
        for (let i = 0; i < num_page; i++) {
            var obj_li = document.createElement('li')
            var obj_div = document.createElement('div')
            var obj_img = document.createElement('img')
            var num = '' + (i + 1)
            num = '0'.repeat(4 - num.length) + num
            var src = IMG_SRC_PREFIX + (idx + 1) + '/' + num + '.jpg'
            obj_img.src = src
            obj_img.alt = num + '.jpg'
            obj_img.className = 'content-img'
            obj_div.className = 'content-img-wrapper'
            obj_div.appendChild(obj_img)
            obj_li.appendChild(obj_div)
            obj_ul.appendChild(obj_li)
            //
            var num_voice = GetVoiceCount(idx, i)
            var obj_voice_list = num_voice ? document.createElement('div') : null
            if (num_voice) {
                obj_voice_list = document.createElement('div')
                obj_voice_list.className = 'voice-icon-list'
                obj_div.appendChild(obj_voice_list)
            }
            for (let j = 0; j < num_voice; j++) {
                const src = GetVoiceSrc(idx, i, j)
                var obj_icon_box = document.createElement('div')
                obj_icon_box.innerHTML = VOICE_ICON
                obj_icon_box.className = 'voice-icon-box'
                var handle = 0
                obj_icon_box.onclick = function () {
                    //
                    if (idx == 66 && i == 21 & j == 0) {
                        RemoveBGMPlayer()
                        BgMusicSpecialPause = true
                        if (handle) {
                            clearTimeout(handle)
                        }
                        handle = setTimeout(function () {
                            BgMusicSpecialPause = false
                        }, 12000)
                    }
                    var player = document.getElementById('voice-player')
                    player.pause()
                    player.src = src
                    player.play()
                }
                obj_voice_list.appendChild(obj_icon_box)
            }
        }
        AddToGallery(obj_ul)
        GlobalViewer = new Viewer(obj_ul, ViewerConfig)
    }

    function ReverseColor(rgbColor) {
        rgbColor = rgbColor.replace(/\s/g, "");
        var arrRGB = new Array(3);
        if (rgbColor.indexOf("#") > -1) {
            if (rgbColor.length > 4) {
                var j = 1;
                for (var i = 0; i < arrRGB.length; i++) {
                    arrRGB[i] = 255 - parseInt(rgbColor.substr((i + j), 2), 16);
                    j += 1;
                }
            } else {
                for (var i = 0; i < arrRGB.length; i++) {
                    var t = rgbColor.substr((i + 1), 1);
                    t = t + t;
                    arrRGB[i] = 255 - parseInt(t, 16);
                }
            }
        }
        return "rgb(" + arrRGB.join(",") + ")";
    }

    function SetBackgroundColor() {
        const select = document.getElementById('menu-config-bg')
        document.getElementsByTagName('body')[0].style.backgroundColor = select.value
        const icon_color = ReverseColor(select.value)
        var sheets = document.styleSheets
        for (let i = 0; i < sheets.length; i++) {
            const e = sheets[i]
            if (!e.href) {
                for (let j = 0; j < e.cssRules.length; j++) {
                    const rule = e.cssRules[j]
                    if (rule.selectorText == '.menu-icon') {
                        rule.style.fill = icon_color
                        break
                    }
                }
                break
            }
        }
    }

    function SetMenuConfig() {
        const select = document.getElementById('menu-config-bg')
        select.onchange = SetBackgroundColor
        const bgm_switch = document.getElementById('menu-config-bgm-switch')
        var handle = 0
        bgm_switch.onchange = function () {
            if (handle) {
                clearTimeout(handle)
            }
            handle = setTimeout(function () {
                if (bgm_switch.checked == EnableBGM) {
                    return
                }
                EnableBGM = bgm_switch.checked
                if (EnableBGM) {
                    var id = GetBgMusicID(CurrentPage, GetScrollRatio())
                    SetBGMPlayer(false, id, BgMusicPlayerHeight)
                } else {
                    RemoveBGMPlayer()
                }
            }, 500)
        }
    }
    //
    function GetMusicListSrc(id, height) {
        return 'https://music.163.com/outchain/player?type=0&id=' + id + '&auto=1&height=' + height
    }

    function GetMusicSingleSrc(id, height) {
        return 'https://music.163.com/outchain/player?type=2&id=' + id + '&auto=1&height=' + height
    }

    function GetBgMusicID(index, ratio) {
        if (!EnableBGM) {
            return -1
        }
        var v = BGM_INFO[index]
        var id = -1
        if (typeof (v) == 'number') {
            if (v < 0) {
                return -1
            }
            id = LOCAL_MODE ? v : BGM_SINGLE_ID[v - 1]
        } else {
            var idx = 0
            for (let i = 0; i < v[0].length; i++) {
                const value = v[1][i];
                if (ratio > value - 0.1) {
                    idx = v[0][i]
                }
            }
            id = LOCAL_MODE ? idx : BGM_SINGLE_ID[idx - 1]
        }
        return id
    }

    function GetScrollRatio() {
        var totalH = document.body.scrollHeight || document.documentElement.scrollHeight
        var clientH = window.innerHeight || document.documentElement.clientHeight
        var validH = totalH - clientH
        var scrollH = document.body.scrollTop || document.documentElement.scrollTop
        return scrollH / validH * 100
    }

    window.addEventListener('scroll', function (e) {
        var ratio = GetScrollRatio()
        if (EnableBGM && CurrentPage > -1) {
            var id = GetBgMusicID(CurrentPage, ratio)
            if (id != CurrentBgMusicID) {
                SetBgMusicHandle(id, BgMusicPlayerHeight, 500)
            }
        }
        //debug
        // document.getElementById('chapter-title').textContent = ratio.toFixed(2)
    })

    function GetVoiceCount(i_chapter, i_page) {
        if (!VOICE_INFO[i_chapter + 1]) {
            return 0
        }
        var v = VOICE_INFO[i_chapter + 1][i_page + 1]
        if (!v) {
            return 0
        }
        return v
    }

    function GetVoiceSrc(i_chapter, i_page, i_voice) {
        var c = '' + (i_chapter + 1)
        var p = '' + (i_page + 1)
        var v = '' + (i_voice + 1)
        var file = [c, p, v].map(function (e, i, a) {
            return '0'.repeat(2 - e.length) + e
        }).join('_') + VOICE_SRC_POSTFIX
        return VOICE_SRC_PREFIX + file
    }

    SetHomePage()
    SetMenu()
    SetMenuConfig()
    GotoPage(-1)
})();