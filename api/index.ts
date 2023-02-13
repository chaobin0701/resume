import requester from "~/server/request";

//请求地址： 基础地址 + api_name + 动作
const api_name = "/api";
export const getInfo = () => {
  return requester({
    url: `${api_name}/info`,
    method: "get",
  });
}