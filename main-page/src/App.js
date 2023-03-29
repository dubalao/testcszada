"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = require("react");
const App_module_css_1 = __importDefault(require("./App.module.css"));
const _resets_module_css_1 = __importDefault(require("./components/_resets.module.css"));
const Mylistify_1 = require("./components/Mylistify/Mylistify");
exports.App = (0, react_1.memo)(function App(props = {}) {
    return (<div className={`${_resets_module_css_1.default.storybrainResets} ${App_module_css_1.default.root}`}>
      <Mylistify_1.Mylistify />
    </div>);
});
//# sourceMappingURL=App.js.map