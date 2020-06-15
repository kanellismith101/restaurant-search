import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ldL4-UNXn_2SHsmQiQxXuHmjfZGUsZWj7HiKRLmGMWDHBmJ2A0SfuZMtMHRe2uKtVV4fUGFgPpePAvhxccockoEkbxUrO6LlT5H-yOseY5VspwXFEbBXwrlTeRl0XXYx"
  }
});
