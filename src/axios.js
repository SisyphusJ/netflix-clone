import axios from "axios";

/** movie database의 요청들을 받기 위한 기본 url
 *  즉 매번 URL을 호출할 필요없이 자체적으로 인스턴스를 호출하는
 *  기능을 만들어서 중복 코드 방지**/
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;