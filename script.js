import { renderComments } from "./module/renderComments.js";
import { commentsArray } from "./module/commentsArray.js";
import { replaceDigits } from "./module/replace.js";

const name = document.querySelector(".add-form-name");
const addButton = document.querySelector(".add-form-button");
addButton.addEventListener("click", () => {
  const text = document.querySelector(".add-form-text");
  const date = new Date();
  const month = date.getMonth() + 1;
  const formattedMonth = month.toString().padStart(2, "0");
  let fullDate = `${date.getDate().toString().padStart(2, "0")}.${formattedMonth}.${String(date.getFullYear()).slice(2, 4)} ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;

  text.value = replaceDigits(text.value);
  commentsArray.push({
    name: name.value,
    date: fullDate,
    comment: text.value,
    isLiked: false,
    likes: 0,
  });
  renderComments();
});

renderComments();
