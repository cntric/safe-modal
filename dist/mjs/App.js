import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import './App.css';
import { SafeModal } from './SafeModal';
function App() {
    const ref = useRef(null);
    const [isModaled, setModaled] = useState(false);
    return (_jsxs("div", { className: "App", children: [_jsx("div", { onClick: () => {
                    setModaled(!isModaled);
                }, ref: ref, style: {
                    height: "100px",
                    width: "100px",
                    background: "pink"
                } }, void 0), _jsx(SafeModal, { itemRef: ref, isDisplayed: isModaled, children: _jsx("div", { style: {
                        border: "1px solid blue"
                    }, children: "Hello" }, void 0) }, void 0)] }, void 0));
}
export default App;
