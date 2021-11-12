import request from "./request";

export function getTopList() {
  return request({
    url: "/toplist"
  })
}
