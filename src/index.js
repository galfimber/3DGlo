import timer from "./modules/timer";
import menu from "./modules/menu";
import popup from "./modules/popup";
import scroll from "./modules/scroll";
import reg from "./modules/reg";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("25 december 2023");
menu();
popup();
scroll();
reg();
tabs();
slider();
calc();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
    formId: "form2",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });
  sendForm({
    formId: "form3",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });
