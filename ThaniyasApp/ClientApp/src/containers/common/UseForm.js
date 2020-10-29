"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useForm = function (callback, validate) {
    var _a = react_1.useState({}), values = _a[0], setValues = _a[1];
    var _b = react_1.useState(), errors = _b[0], setErrors = _b[1];
    var _c = react_1.useState(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    react_1.useEffect(function () {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);
    var handleSubmit = function (event) {
        if (event)
            event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    var handleChange = function (event) {
        event.persist();
        setValues(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a[event.target.name] = event.target.value, _a)));
        });
    };
    return {
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        values: values,
        errors: errors,
    };
};
exports.default = useForm;
//# sourceMappingURL=UseForm.js.map