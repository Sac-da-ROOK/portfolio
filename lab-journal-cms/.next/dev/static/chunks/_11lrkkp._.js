(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/src/app/(dashboard)/dashboard/new/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewPostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const toolbarActions = [
    {
        label: 'Bold',
        command: 'bold',
        icon: 'B'
    },
    {
        label: 'Italic',
        command: 'italic',
        icon: 'I'
    },
    {
        label: 'Underline',
        command: 'underline',
        icon: 'U'
    },
    {
        label: 'Heading',
        command: 'formatBlock',
        value: 'h3',
        icon: 'H'
    },
    {
        label: 'Bullet list',
        command: 'insertUnorderedList',
        icon: '•'
    },
    {
        label: 'Numbered list',
        command: 'insertOrderedList',
        icon: '1'
    },
    {
        label: 'Quote',
        command: 'formatBlock',
        value: 'blockquote',
        icon: '❝'
    }
];
const textColorOptions = [
    '#111827',
    '#d97706',
    '#ef4444',
    '#2563eb',
    '#16a34a',
    '#a855f7',
    '#f43f5e',
    '#f8fafc'
];
const highlightOptions = [
    '#fef3c7',
    '#dcfce7',
    '#dbeafe',
    '#fce7f3',
    '#f5d0fe',
    '#fed7aa',
    '#fee2e2'
];
const fontSizeOptions = [
    {
        label: 'Size',
        value: ''
    },
    {
        label: 'Small',
        value: '1'
    },
    {
        label: 'Normal',
        value: '3'
    },
    {
        label: 'Large',
        value: '5'
    },
    {
        label: 'XL',
        value: '6'
    }
];
function NewPostPageContent() {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Untitled article');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Draft');
    const [editorHtml, setEditorHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('<h3>Start writing</h3><p>Capture the idea, the experiment, and the next step.</p>');
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linkUrl, setLinkUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('https://');
    const [linkText, setLinkText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editorDirection, setEditorDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ltr');
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const documentInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const postId = searchParams.get('postId');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPostPageContent.useEffect": ()=>{
            if (!postId) {
                return;
            }
            async function loadPost() {
                const response = await fetch(`/api/posts/${postId}`);
                if (!response.ok) {
                    return;
                }
                const post = await response.json();
                setTitle(post.title ?? 'Untitled article');
                setStatus(post.status ?? 'Draft');
                setEditorHtml(post.content ?? '<h3>Start writing</h3><p>Capture the idea, the experiment, and the next step.</p>');
                setAttachments(post.attachments ?? []);
            }
            loadPost();
        }
    }["NewPostPageContent.useEffect"], [
        postId
    ]);
    const applyFormat = (command, value)=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        const selection = window.getSelection();
        const range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;
        editor.focus();
        document.execCommand(command, false, value);
        if (editor && range) {
            editor.focus();
            const nextSelection = window.getSelection();
            if (nextSelection && nextSelection.rangeCount === 0) {
                nextSelection.removeAllRanges();
                nextSelection.addRange(range);
            }
        }
        setEditorHtml(editor.innerHTML);
    };
    const applyTextColor = (color)=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.focus();
        document.execCommand('foreColor', false, color);
        setEditorHtml(editor.innerHTML);
    };
    const applyHighlight = (color)=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.focus();
        document.execCommand('hiliteColor', false, color);
        setEditorHtml(editor.innerHTML);
    };
    const applyTextSize = (size)=>{
        if (!size) {
            return;
        }
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.focus();
        document.execCommand('fontSize', false, size);
        setEditorHtml(editor.innerHTML);
    };
    const applyAlignment = (alignment)=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.focus();
        if (alignment === 'left') {
            document.execCommand('justifyLeft', false, undefined);
        }
        if (alignment === 'center') {
            document.execCommand('justifyCenter', false, undefined);
        }
        if (alignment === 'right') {
            document.execCommand('justifyRight', false, undefined);
        }
        setEditorHtml(editor.innerHTML);
    };
    const removeFormatting = ()=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.focus();
        document.execCommand('removeFormat', false, undefined);
        document.execCommand('unlink', false, undefined);
        setEditorHtml(editor.innerHTML);
    };
    const toggleEditorDirection = ()=>{
        const nextDirection = editorDirection === 'ltr' ? 'rtl' : 'ltr';
        setEditorDirection(nextDirection);
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.setAttribute('dir', nextDirection);
        editor.style.direction = nextDirection;
        editor.style.textAlign = nextDirection === 'ltr' ? 'left' : 'right';
    };
    const applyLink = ()=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        const urlInput = document.querySelector('.toolbar-link-input[aria-label="Link URL"]');
        const labelInput = document.querySelector('.toolbar-link-input[aria-label="Link label"]');
        const selection = window.getSelection();
        const selectedText = selection?.toString().trim() ?? '';
        const urlValue = (urlInput?.value ?? linkUrl).trim();
        if (!urlValue) {
            return;
        }
        const safeUrl = /^https?:\/\//i.test(urlValue) ? urlValue : `https://${urlValue}`;
        editor.focus();
        if (selection && selection.rangeCount > 0 && selectedText) {
            const range = selection.getRangeAt(0);
            const anchor = document.createElement('a');
            anchor.href = safeUrl;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
            anchor.textContent = selectedText;
            range.deleteContents();
            range.insertNode(anchor);
            selection.removeAllRanges();
            const newRange = document.createRange();
            newRange.selectNodeContents(anchor);
            selection.addRange(newRange);
        } else {
            const text = ((labelInput?.value ?? linkText) || 'Learn more').trim() || 'Learn more';
            editor.insertAdjacentHTML('beforeend', `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`);
        }
        if (urlInput) {
            urlInput.value = 'https://';
        }
        if (labelInput) {
            labelInput.value = '';
        }
        setLinkUrl('https://');
        setLinkText('');
        setEditorHtml(editor.innerHTML);
    };
    const handleFileSelection = async (kind, event)=>{
        const files = Array.from(event.target.files ?? []);
        if (!files.length) {
            return;
        }
        const newItems = await Promise.all(files.map((file)=>{
            if (kind === 'image') {
                return new Promise((resolve)=>{
                    const reader = new FileReader();
                    reader.onload = ()=>{
                        resolve({
                            id: `${Date.now()}-${file.name}`,
                            name: file.name,
                            kind,
                            preview: reader.result
                        });
                    };
                    reader.readAsDataURL(file);
                });
            }
            return Promise.resolve({
                id: `${Date.now()}-${file.name}`,
                name: file.name,
                kind
            });
        }));
        setAttachments((previous)=>[
                ...newItems,
                ...previous
            ]);
        event.target.value = '';
    };
    async function handleSubmit(event) {
        event.preventDefault();
        setIsSaving(true);
        const payload = {
            title,
            content: editorHtml,
            status,
            attachments
        };
        const response = postId ? await fetch(`/api/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'update',
                ...payload
            })
        }) : await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            router.push('/dashboard');
        }
        setIsSaving(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        style: {
            padding: '2rem 0 4rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "editor-shell card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "editor-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "editor-eyebrow",
                                    children: "Writing editor"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "editor-title",
                                    children: postId ? 'Edit article' : 'Write a new article'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "editor-subtitle",
                                    children: "Write, format, and add media before publishing."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 295,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: status,
                                    onChange: (event)=>setStatus(event.target.value),
                                    className: "editor-select",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Draft",
                                            children: "Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Published",
                                            children: "Published"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Scheduled",
                                            children: "Scheduled"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    form: "editor-form",
                                    className: "editor-primary-button",
                                    disabled: isSaving,
                                    children: isSaving ? 'Saving…' : 'Save draft'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                    lineNumber: 294,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: "editor-form",
                    onSubmit: handleSubmit,
                    className: "editor-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-toolbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: title,
                                    onChange: (event)=>setTitle(event.target.value),
                                    className: "editor-title-input",
                                    placeholder: "Article title",
                                    dir: "ltr",
                                    style: {
                                        direction: 'ltr',
                                        textAlign: 'left'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group",
                                    children: [
                                        toolbarActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "toolbar-button",
                                                onClick: ()=>applyFormat(action.command, action.value),
                                                title: action.label,
                                                children: action.icon
                                            }, action.label, false, {
                                                fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "toolbar-select",
                                            value: "",
                                            onChange: (event)=>applyTextSize(event.target.value),
                                            "aria-label": "Text size",
                                            title: "Text size",
                                            children: fontSizeOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.value,
                                                    children: option.label
                                                }, option.label, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>applyAlignment('left'),
                                            title: "Align left",
                                            children: "⇤"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>applyAlignment('center'),
                                            title: "Align center",
                                            children: "⇥"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>applyAlignment('right'),
                                            title: "Align right",
                                            children: "⇥"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: removeFormatting,
                                            title: "Remove formatting",
                                            children: "⌫"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: toggleEditorDirection,
                                            title: `Set ${editorDirection === 'ltr' ? 'RTL' : 'LTR'} direction`,
                                            children: editorDirection === 'ltr' ? 'LTR' : 'RTL'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toolbar-link-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "toolbar-button",
                                                    onClick: applyLink,
                                                    title: "Insert link",
                                                    children: "🔗"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "url",
                                                    value: linkUrl,
                                                    onChange: (event)=>setLinkUrl(event.target.value),
                                                    className: "toolbar-link-input",
                                                    placeholder: "https://example.com",
                                                    "aria-label": "Link URL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: linkText,
                                                    onChange: (event)=>setLinkText(event.target.value),
                                                    className: "toolbar-link-input toolbar-link-label",
                                                    placeholder: "Link label",
                                                    "aria-label": "Link label"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group toolbar-group-inline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "toolbar-label",
                                            children: "Text"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 29
                                        }, this),
                                        textColorOptions.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "toolbar-color-swatch",
                                                onClick: ()=>applyTextColor(color),
                                                title: `Text color: ${color}`,
                                                "aria-label": `Text color: ${color}`,
                                                style: {
                                                    backgroundColor: color
                                                }
                                            }, color, false, {
                                                fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group toolbar-group-inline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "toolbar-label",
                                            children: "Highlight"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 29
                                        }, this),
                                        highlightOptions.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "toolbar-color-swatch",
                                                onClick: ()=>applyHighlight(color),
                                                title: `Highlight: ${color}`,
                                                "aria-label": `Highlight: ${color}`,
                                                style: {
                                                    backgroundColor: color
                                                }
                                            }, color, false, {
                                                fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>imageInputRef.current?.click(),
                                            title: "Add photo",
                                            children: "📷"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 393,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>videoInputRef.current?.click(),
                                            title: "Add video",
                                            children: "🎬"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>documentInputRef.current?.click(),
                                            title: "Add document",
                                            children: "📄"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 313,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-surface",
                            dir: editorDirection,
                            style: {
                                direction: editorDirection,
                                textAlign: editorDirection === 'ltr' ? 'left' : 'right',
                                unicodeBidi: 'plaintext'
                            },
                            contentEditable: true,
                            suppressContentEditableWarning: true,
                            ref: editorRef,
                            dangerouslySetInnerHTML: {
                                __html: editorHtml
                            },
                            onInput: (event)=>setEditorHtml(event.target.innerHTML)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 399,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "attachment-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "attachment-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Media"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Images, video, and documents stay with the article."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "attachment-list",
                                    children: attachments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "attachment-empty",
                                        children: "Add a photo, video, or document to enrich the article."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                        lineNumber: 421,
                                        columnNumber: 33
                                    }, this) : attachments.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "attachment-card",
                                            children: [
                                                item.kind === 'image' && item.preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.preview,
                                                    alt: item.name,
                                                    className: "attachment-preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "attachment-placeholder",
                                                    children: item.kind === 'video' ? '🎬' : '📄'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "attachment-name",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "attachment-kind",
                                                            children: item.kind
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 414,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: imageInputRef,
                            type: "file",
                            accept: "image/*",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('image', event)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 440,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: videoInputRef,
                            type: "file",
                            accept: "video/*",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('video', event)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 441,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: documentInputRef,
                            type: "file",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('document', event)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 442,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                    lineNumber: 312,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 293,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
        lineNumber: 292,
        columnNumber: 9
    }, this);
}
_s(NewPostPageContent, "cGB0PaeTV/vITU3yA6Qd6mmZKrs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = NewPostPageContent;
function NewPostPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            style: {
                padding: '2rem 0 4rem'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: '2rem'
                },
                children: "Loading editor…"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                lineNumber: 451,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 451,
            columnNumber: 29
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewPostPageContent, {}, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 452,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
        lineNumber: 451,
        columnNumber: 9
    }, this);
}
_c1 = NewPostPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "NewPostPageContent");
__turbopack_context__.k.register(_c1, "NewPostPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_11lrkkp._.js.map