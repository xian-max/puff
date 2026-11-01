
import { Spider } from "catvod";

class DemoSpider extends Spider {

    async init(ext) {
        console.log("Spider 初始化成功");
    }

    async homeContent(filter) {
    const response = await this.net.req(
        "https://hongguoduanju.com/",
        {
            method: "GET",
            timeout: 15000
        }
    );

    const html = response.content || "";

    return {
        code: response.code,
        error: response.error || "",
        length: html.length,
        preview: html.substring(0, 500)
    };
}

    // 测试真实网页请求
async testRequest() {
    const response = await this.net.req(
        "https://hongguoduanju.com/",
        {
            method: "GET",
            timeout: 15000
        }
    );

    const html = response.content || "";

    return {
        code: response.code,
        error: response.error || "",
        length: html.length,
        preview: html.substring(0, 500)
    };
}

    // 首页推荐
    async homeVideoContent() {
        return {
            list: []
        };
    }

    // 分类列表
    async categoryContent(tid, pg, filter, extend) {
        return {
            list: [
                {
                    vod_id: "test001",
                    vod_name: "测试电影一",
                    vod_pic: "",
                    vod_remarks: "测试影片"
                },
                {
                    vod_id: "test002",
                    vod_name: "测试电影二",
                    vod_pic: "",
                    vod_remarks: "高清"
                }
            ],
            page: parseInt(pg || 1),
            pagecount: 5,
            limit: 20,
            total: 100
        };
    }

    // 搜索
    async searchContent(key, quick, pg) {
        return {
            list: [
                {
                    vod_id: "search001",
                    vod_name: "搜索结果：" + key,
                    vod_pic: "",
                    vod_remarks: "搜索测试成功"
                },
                {
                    vod_id: "search002",
                    vod_name: key + " - 第二条结果",
                    vod_pic: "",
                    vod_remarks: "高清"
                }
            ],
            page: parseInt(pg || 1),
            pagecount: 5,
            limit: 20,
            total: 100
        };
    }

    // 详情
    async detailContent(ids) {
        return {
            list: [
                {
                    vod_id: ids[0],
                    vod_name: "测试电影详情",
                    vod_pic: "",
                    type_name: "电影",
                    vod_year: "2026",
                    vod_area: "日本",
                    vod_remarks: "高清",
                    vod_actor: "测试演员",
                    vod_director: "测试导演",
                    vod_content: "这是一个 Spider 详情接口测试。",

                    // 播放线路和播放地址
                    vod_play_from: "测试线路",
                    vod_play_url:
                        "第一集$https://vjs.zencdn.net/v/oceans.mp4"
                }
            ]
        };
    }

    // 播放
    async playerContent(flag, id, vipFlags) {
        console.log("播放线路：", flag);
        console.log("播放地址：", id);

        return {
            parse: 0,
            url: id,
            header: {
                "User-Agent": "Mozilla/5.0"
            }
        };
    }

}

export default DemoSpider;
