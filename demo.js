
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

}

export default DemoSpider;
