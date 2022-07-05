/*
    ESM방식의 모듈은 require가 아니라 import
    ESM방식으로 모듈처리를 하려면 확장자를 mjs로 설정하거나
    실행환경 설정을 바꿔야 한다.
*/
import {add, multifly  } from "./custom/calcModule.js";
import * as calc from "./custom/calcModule.js";

add(3,5);
calc.multifly(3,4,5,6);
