"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var router_1 = require("next/router");
var react_1 = require("react");
var AnimationContainer = function (_a) {
    var children = _a.children;
    var router = router_1.useRouter();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(framer_motion_1.AnimatePresence, null,
            react_1["default"].createElement(framer_motion_1.motion.div, { transition: { type: "spring", stiffness: 85 }, key: router.asPath, initial: { x: 0, opacity: 0 }, animate: { x: 0, opacity: 1 }, id: "page-transition-container" }, children))));
};
exports["default"] = AnimationContainer;
