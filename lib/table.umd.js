(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["table"] = factory();
	else
		root["table"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0f93":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1077":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f163ab9e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ca43");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f163ab9e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f163ab9e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ca43":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d1a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnConfig_vue_vue_type_style_index_0_id_0596406c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0f93");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnConfig_vue_vue_type_style_index_0_id_0596406c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnConfig_vue_vue_type_style_index_0_id_0596406c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"27314b08-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./module/index.vue?vue&type=template&id=f163ab9e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "tableHead"
  }, [_c('div', {
    staticStyle: {
      "flex": "1",
      "margin-right": "5px"
    }
  }, [_vm._t("right_top_btn")], 2), _c('span', {
    staticClass: "icon"
  }, [_vm._isRefresh ? _c('i', {
    staticClass: "el-icon-refresh",
    attrs: {
      "title": "重加载数据"
    },
    on: {
      "click": _vm.loadData
    }
  }) : _vm._e(), _vm._uuEditKey ? _c('i', {
    staticClass: "el-icon-setting",
    attrs: {
      "title": "编辑表格"
    },
    on: {
      "click": function ($event) {
        _vm.dialogVisible = true;
      }
    }
  }) : _vm._e()])]), _c('el-table', _vm._g(_vm._b({
    ref: "table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.showData,
      "stripe": _vm.stripe
    },
    on: {
      "selection-change": _vm.selectionChange
    }
  }, 'el-table', _vm.$attrs, false), _vm.$listeners), [_vm.selection ? _c('el-table-column', {
    attrs: {
      "selectable": _vm.selectable,
      "type": "selection"
    }
  }) : _vm._e(), _vm.index ? _c('el-table-column', {
    attrs: {
      "type": "index",
      "label": "序号",
      "align": "center",
      "fixed": "left"
    }
  }) : _vm._e(), _vm._l(_vm.showColumn, function (item, idx) {
    return [_c('el-table-column', {
      key: idx,
      attrs: {
        "prop": item && item.prop,
        "label": item && item.label,
        "width": item && item.width,
        "min-width": item && item['min-width'],
        "fixed": item && item.fixed,
        "formatter": item && item.formatter,
        "show-overflow-tooltip": item && item['show-overflow-tooltip'] || false,
        "sortable": item && item.sortable,
        "sort-method": item && item['sort-method'],
        "sort-by": item && item['sort-by'],
        "align": item && item.align || 'center',
        "sort-orders": item && item['sort-orders'],
        "class-name": item && item['class-name']
      },
      scopedSlots: _vm._u([item && item.slotHeader ? {
        key: "header",
        fn: function (scoped) {
          return [_vm._t(item && item.slotHeader, null, {
            "row": scoped.row,
            "$index": scoped.$index
          })];
        }
      } : null, item && item.slot ? {
        key: "default",
        fn: function (scoped) {
          return [_vm._t(item && item.slot, null, {
            "row": scoped.row,
            "$index": scoped.$index
          })];
        }
      } : null], null, true)
    })];
  })], 2), _vm.needPagination ? _c('div', {
    style: _vm.paginationStyle
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.pagination.pageIndex,
      "page-sizes": _vm.pagination.pageSizes,
      "page-size": _vm.pagination.pageSize,
      "layout": _vm.pagination.layout,
      "total": _vm.pagination.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function ($event) {
        return _vm.$set(_vm.pagination, "pageIndex", $event);
      },
      "update:current-page": function ($event) {
        return _vm.$set(_vm.pagination, "pageIndex", $event);
      },
      "update:pageSize": function ($event) {
        return _vm.$set(_vm.pagination, "pageSize", $event);
      },
      "update:page-size": function ($event) {
        return _vm.$set(_vm.pagination, "pageSize", $event);
      }
    }
  })], 1) : _vm._e(), _c('ColumnConfig', {
    attrs: {
      "columns": _vm.filterColumns,
      "visible": _vm.dialogVisible,
      "_uuEditKey": _vm._uuEditKey,
      "selectColumn": _vm.selectedColumn
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      },
      "update:selectColumn": function ($event) {
        _vm.selectedColumn = $event;
      },
      "update:select-column": function ($event) {
        _vm.selectedColumn = $event;
      }
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./module/index.vue?vue&type=template&id=f163ab9e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"27314b08-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./module/ColumnConfig.vue?vue&type=template&id=0596406c&scoped=true&
var ColumnConfigvue_type_template_id_0596406c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('el-dialog', {
    attrs: {
      "title": "设置需展示的列",
      "visible": _vm.dialogVisible,
      "width": "800px",
      "append-to-body": ""
    },
    on: {
      "open": function ($event) {
        return _vm.opened();
      },
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      }
    }
  }, [_c('div', [_c('el-checkbox', {
    attrs: {
      "indeterminate": _vm.isIndeterminate
    },
    on: {
      "change": _vm.handleCheckAllChange
    },
    model: {
      value: _vm.checkAll,
      callback: function ($$v) {
        _vm.checkAll = $$v;
      },
      expression: "checkAll"
    }
  }, [_vm._v("全选")]), _c('el-button', {
    staticStyle: {
      "text-decoration": "underline",
      "color": "red"
    },
    attrs: {
      "type": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$refs.SortColumn.open();
      }
    }
  }, [_vm._v("手动排序")]), _c('el-button', {
    staticStyle: {
      "text-decoration": "underline",
      "color": "red"
    },
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("重置配置")]), _c('div', {
    staticStyle: {
      "margin": "15px 0"
    }
  }), _c('el-checkbox-group', {
    on: {
      "change": _vm.handleCheckedCitiesChange
    },
    model: {
      value: _vm.checkboxSelectBuff,
      callback: function ($$v) {
        _vm.checkboxSelectBuff = $$v;
      },
      expression: "checkboxSelectBuff"
    }
  }, _vm._l(_vm.__column, function (item) {
    return _c('el-col', {
      key: item.columnUUkey,
      staticClass: "colCheckbox",
      attrs: {
        "span": 8
      }
    }, [_c('el-checkbox', {
      attrs: {
        "title": item.label,
        "label": item.columnUUkey
      }
    }, [_vm._v(_vm._s(item.label) + " ")])], 1);
  }), 1)], 1), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function ($event) {
        _vm.dialogVisible = false;
      }
    }
  }, [_vm._v("取 消")]), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("确 定")])], 1)]), _c('SortColumn', {
    ref: "SortColumn",
    attrs: {
      "column": _vm.__column
    },
    on: {
      "close": _vm.clsoeSort
    }
  })], 1);
};
var ColumnConfigvue_type_template_id_0596406c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./module/ColumnConfig.vue?vue&type=template&id=0596406c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"27314b08-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./module/SortColumn.vue?vue&type=template&id=7c2401d8&
var SortColumnvue_type_template_id_7c2401d8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-dialog', {
    attrs: {
      "title": "拖动节点进行排序",
      "visible": _vm.dialogVisible,
      "width": "500px",
      "append-to-body": ""
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      }
    }
  }, [_c('el-tree', {
    attrs: {
      "data": _vm.data,
      "node-key": "columnUUkey",
      "default-expand-all": "",
      "draggable": "",
      "allow-drop": _vm.allowDrog
    }
  }), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("确 定")])], 1)], 1);
};
var SortColumnvue_type_template_id_7c2401d8_staticRenderFns = [];

// CONCATENATED MODULE: ./module/SortColumn.vue?vue&type=template&id=7c2401d8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./module/SortColumn.vue?vue&type=script&lang=js&
/* harmony default export */ var SortColumnvue_type_script_lang_js_ = ({
  props: {
    column: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      data: [],
      dialogVisible: false
    };
  },
  created() {},
  methods: {
    open() {
      this.dialogVisible = true;
      this.data = this.column.map(item => {
        return {
          columnUUkey: item.columnUUkey,
          label: item.label
        };
      });
    },
    close() {
      this.dialogVisible = false;
      this.$emit('close', this.data.map(item => item.columnUUkey));
    },
    allowDrog(draggingNode, dropNode, type) {
      return type !== 'inner';
    }
  }
});
// CONCATENATED MODULE: ./module/SortColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_SortColumnvue_type_script_lang_js_ = (SortColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./module/SortColumn.vue





/* normalize component */

var component = normalizeComponent(
  module_SortColumnvue_type_script_lang_js_,
  SortColumnvue_type_template_id_7c2401d8_render,
  SortColumnvue_type_template_id_7c2401d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SortColumn = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./module/ColumnConfig.vue?vue&type=script&lang=js&

/* harmony default export */ var ColumnConfigvue_type_script_lang_js_ = ({
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    selectColumn: {
      type: Array,
      default: () => []
    },
    _uuEditKey: {
      type: String,
      default: ''
    }
  },
  components: {
    SortColumn: SortColumn
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      }
    },
    checkboxSelect: {
      get() {
        return this.selectColumn;
      },
      set(val) {
        this.$emit('update:selectColumn', val);
      }
    },
    // 组件内部使用 ， 避免错误修改了父组件的数据,同时返回的是经过了排序的数据
    __column() {
      return this.columns.map(item => {
        return {
          label: item.label,
          columnUUkey: item.prop || item.slot
        };
      }).sort((a, b) => (this.__sortWeight[a.columnUUkey] || 0) - (this.__sortWeight[b.columnUUkey] || 0));
    },
    //排序权重
    __sortWeight() {
      const ans = {};
      for (let i = 0; i < this.sortColumnList.length; i++) {
        ans[this.sortColumnList[i]] = i;
      }
      return ans;
    }
  },
  data() {
    return {
      sortColumnList: [],
      checkAll: false,
      isIndeterminate: false,
      checkboxSelectBuff: [],
      oldColumns: []
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkboxSelectBuff = val ? this.__column.map(item => item.columnUUkey) : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      this.checkboxSelectBuff = value;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.__column.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.__column.length;
    },
    opened() {
      const diffColumns = this.__column.filter(item => !this.oldColumns.includes(item.columnUUkey)).map(item => item.columnUUkey);
      this.checkboxSelectBuff = this.checkboxSelectBuff.concat(diffColumns).sort((a, b) => (this.__sortWeight[a] || 0) - (this.__sortWeight[b] || 0));
      this.oldColumns = this.__column.map(item => item.columnUUkey);
      this.checkAll = this.checkboxSelectBuff.length === this.__column.length;
      this.isIndeterminate = this.checkboxSelectBuff.length > 0 && this.checkboxSelectBuff.length < this.__column.length;
    },
    clsoeSort(val) {
      this.sortColumnList = this.oldColumns = val || [];
      this.checkboxSelectBuff = this.checkboxSelectBuff.sort((a, b) => (this.__sortWeight[a] || 0) - (this.__sortWeight[b] || 0));
    },
    reset() {
      this.sortColumnList = [];
      this.checkboxSelectBuff = this.__column.map(item => item.columnUUkey);
    },
    confirm() {
      this.checkboxSelect = this.checkboxSelectBuff;
      this.sortColumnList = this.oldColumns;
      this.dialogVisible = false;
    }
  }
});
// CONCATENATED MODULE: ./module/ColumnConfig.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_ColumnConfigvue_type_script_lang_js_ = (ColumnConfigvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./module/ColumnConfig.vue?vue&type=style&index=0&id=0596406c&prod&lang=scss&scoped=true&
var ColumnConfigvue_type_style_index_0_id_0596406c_prod_lang_scss_scoped_true_ = __webpack_require__("d1a5");

// CONCATENATED MODULE: ./module/ColumnConfig.vue






/* normalize component */

var ColumnConfig_component = normalizeComponent(
  module_ColumnConfigvue_type_script_lang_js_,
  ColumnConfigvue_type_template_id_0596406c_scoped_true_render,
  ColumnConfigvue_type_template_id_0596406c_scoped_true_staticRenderFns,
  false,
  null,
  "0596406c",
  null
  
)

/* harmony default export */ var ColumnConfig = (ColumnConfig_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./module/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_modulevue_type_script_lang_js_ = ({
  name: 'mtfe_table_list',
  components: {
    ColumnConfig: ColumnConfig
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          pageIndex: 1,
          pageSize: 15,
          total: 0,
          pageSizes: [15, 30, 50],
          layout: 'total, sizes, prev, pager, next'
        };
      }
    },
    //开启本地分页
    localPaginate: {
      type: Boolean,
      default: false
    },
    needPagination: {
      type: Boolean,
      default: true
    },
    columns: {
      required: true,
      type: Array,
      default: () => []
    },
    index: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Function,
      default: () => {
        return () => {};
      }
    },
    //控制能够勾选的最大数量，同理能够用来实现单选
    selectCountLimit: {
      type: Number,
      default: 1000000
    },
    checkedData: {
      type: Array,
      default: () => []
    },
    // 主要作用是用来本地缓存某一个表个实例的配置。如需要显示哪些列
    _uuEditKey: {
      type: [String, Boolean],
      default: false
    },
    _isRefresh: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    paginationStyle() {
      return {
        display: 'flex',
        'padding-top': '10px',
        'flex-direction': 'row',
        'justify-content': this.pagination.align === 'left' ? 'flex-start' : 'flex-end'
      };
    },
    // 根据columns中的hidden字段控制某一列筛选出那些列默认情况应该展示
    filterColumns() {
      return this.columns.filter(item => {
        if (item.hidden && typeof item.hidden === 'function') return !item.hidden();
        return !item.hidden;
      });
    },
    //再更具用户点击小齿轮的选项二次筛选出应该具体显示哪些列
    showColumn() {
      let data = this.filterColumns;
      if (this.selectedColumn.length) {
        // selectedColumn: ['id','name']这种形式
        data = this.selectedColumn.map(item => {
          return this.filterColumns.find(each => each.prop === item || each.slot === item);
        }).filter(item => !!item);
      }
      return data.map(item => ({
        ...item,
        columnUUkey: item.prop || item.slot
      }));
    },
    showData() {
      if (!this.data || !this.data.length) return [];
      if (!this.needPagination) return this.data;
      const left = Math.max(this.pagination.pageSize * (this.pagination.pageIndex - 1), 0);
      const right = Math.min(this.data.length, left + this.pagination.pageSize);
      return this.data.length === this.pagination.total ? this.data.slice(left, right) : this.data;
    },
    //组件内部使用，当前选择了的数据
    _checkedData: {
      get() {
        return this.checkedData;
      },
      set(selection) {
        this.$emit('update:checkedData', selection);
      }
    }
  },
  data() {
    return {
      selectedColumn: [],
      dialogVisible: false
    };
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        this.resetSelect();
        if (this.localPaginate) {
          this.pagination.total = this.data && this.data.length || 0;
        }
      },
      immediate: true
    },
    filterColumns() {
      this.selectedColumn = [];
    }
  },
  mounted() {
    this.resetSelect(); //满足有默认选择项的情况
  },

  methods: {
    loadData() {
      this.$emit('loadData');
    },
    reload() {
      this.pagination.pageIndex = 1;
      this._checkedData = [];
      this.$emit('loadData');
    },
    selectionChange(selection, row) {
      if (selection && selection.length > this.selectCountLimit) {
        this.$refs.table.clearSelection();
        for (let i = 0; i < this.selectCountLimit; i++) {
          this.$refs.table.toggleRowSelection(selection[selection.length - i - 1], true);
        }
      } else {
        this._checkedData = selection;
      }
    },
    //当表格中的数据变动时，需要重新确定哪些行需要选择
    resetSelect() {
      if (!this.$refs.table) return;
      this.$refs.table.clearSelection();
      for (let item of this.data) {
        for (let selected of this._checkedData) {
          if (JSON.stringify(item) === JSON.stringify(selected)) {
            this.$refs.table.toggleRowSelection(item, true);
          }
        }
      }
    },
    handleSizeChange() {
      this.pagination.pageIndex = 1;
      this.loadData();
    },
    handleCurrentChange() {
      !this.localPaginate && this.loadData();
    }
  }
});
// CONCATENATED MODULE: ./module/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var modulevue_type_script_lang_js_ = (lib_vue_loader_options_modulevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./module/index.vue?vue&type=style&index=0&id=f163ab9e&prod&lang=scss&scoped=true&
var modulevue_type_style_index_0_id_f163ab9e_prod_lang_scss_scoped_true_ = __webpack_require__("1077");

// CONCATENATED MODULE: ./module/index.vue






/* normalize component */

var module_component = normalizeComponent(
  modulevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f163ab9e",
  null
  
)

/* harmony default export */ var module_0 = (module_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (module_0);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=table.umd.js.map