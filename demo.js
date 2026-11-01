
import { Spider } from "catvod";

class DemoSpider extends Spider {

    async init(ext) {
        console.log("Spider 初始化成功");
    }

    async homeContent(filter) {
        return JSON.stringify({
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
        });
    }

    async homeVideoContent() {
        return JSON.stringify({
            list: []
        });
    }

}

export default DemoSpider;
