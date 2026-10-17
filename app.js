// FIX 2: the id in the HTML is "count", not "total"
const count = document.querySelector("#count");
const addBtn = document.querySelector("#addBtn");
const minusBtn = document.querySelector("#minusBtn");
const resetBtn = document.querySelector("#resetBtn");
const message = document.querySelector("#message");
// FIX 3: pizzas must be a number; with the string "0", "0" + 1 gave "01" (concatenation)
let pizzas = 0;

// FIX 4: the event name is "click", not "clik" (a wrong name never fires, and gives no error)
addBtn.addEventListener("click", () => {
  pizzas = pizzas + 1;
  count.textContent = pizzas;
  // FIX 5: "=" assigns (and 10 is always true); ">=" compares, and is safer than "===" because it still works if the count ever jumps past 10
  if (pizzas >= 10) {
    message.textContent = "Maximum reached!";
  }
});

// AI: I asked AI for a minus button. Its first idea was "pizzas = pizzas - 1" with no check, which goes to -1 on a fresh page, so I added the "pizzas > 0" guard. I also made it clear the "Maximum reached!" message once the count drops below 10.
minusBtn.addEventListener("click", () => {
  if (pizzas > 0) {
    pizzas = pizzas - 1;
  }
  count.textContent = pizzas;
  if (pizzas < 10) {
    message.textContent = "";
  }
});

resetBtn.addEventListener("click", () => {
  pizzas = 0;
  count.textContent = pizzas;
  // FIX 6: the property is "textContent" (or "innerHTML"), not "innerHtml"; the wrong name silently creates a new property and the message never clears
  message.textContent = "";
});