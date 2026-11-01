
import { Spider } from "catvod";

class DemoSpider extends Spider {

    async init(ext) {
        console.log("Spider 初始化成功");
    }

    async homeContent(filter) {
        return {
            class: [
                {
                    type_id: "movie",
                    type_name: "电影"
                },
                {
                    type_id: "tv",
                    type_name: "电视剧"
                }
            ],
            list: []
        };
    }

    async homeVideoContent() {
        return {
            list: []
        };
    }

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
        page: parseInt(pg),
        pagecount: 5,
        limit: 20,
        total: 100
    };
}

}

export default DemoSpider;
