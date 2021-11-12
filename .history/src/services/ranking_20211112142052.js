import request from "./axios";

export function getTopList() {
  return request({
    url: "/toplist"
  })
}
