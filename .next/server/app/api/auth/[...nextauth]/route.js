"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CArunabh%20Barooah%5COneDrive%5CDocuments%5Cnextjs_website_tutorial%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArunabh%20Barooah%5COneDrive%5CDocuments%5Cnextjs_website_tutorial&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CArunabh%20Barooah%5COneDrive%5CDocuments%5Cnextjs_website_tutorial%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArunabh%20Barooah%5COneDrive%5CDocuments%5Cnextjs_website_tutorial&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Arunabh_Barooah_OneDrive_Documents_nextjs_website_tutorial_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Arunabh Barooah\\\\OneDrive\\\\Documents\\\\nextjs_website_tutorial\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Arunabh_Barooah_OneDrive_Documents_nextjs_website_tutorial_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBcnVuYWJoJTIwQmFyb29haCU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDbmV4dGpzX3dlYnNpdGVfdHV0b3JpYWwlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FydW5hYmglMjBCYXJvb2FoJTVDT25lRHJpdmUlNUNEb2N1bWVudHMlNUNuZXh0anNfd2Vic2l0ZV90dXRvcmlhbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNpRTtBQUM5STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc193ZWJzaXRlX3R1dG9yaWFsLz80NzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFydW5hYmggQmFyb29haFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcbmV4dGpzX3dlYnNpdGVfdHV0b3JpYWxcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQXJ1bmFiaCBCYXJvb2FoXFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxuZXh0anNfd2Vic2l0ZV90dXRvcmlhbFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CArunabh%20Barooah%5COneDrive%5CDocuments%5Cnextjs_website_tutorial%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArunabh%20Barooah%5COneDrive%5CDocuments%5Cnextjs_website_tutorial&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session }) {\n            // store the user id from MongoDB to session\n            const sessionUser = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                email: session.user.email\n            });\n            session.user.id = sessionUser._id.toString();\n            return session;\n        },\n        async signIn ({ account, profile, user, credentials }) {\n            try {\n                await (0,_utils_database__WEBPACK_IMPORTED_MODULE_3__.connectToDB)();\n                // check if user already exists\n                const userExists = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: profile.email\n                });\n                // if not, create a new document and save user in MongoDB\n                if (!userExists) {\n                    await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n                        email: profile.email,\n                        username: profile.name.replace(/\\s/g, \"\").toLowerCase(),\n                        image: profile.picture\n                    });\n                }\n                return true;\n            } catch (error) {\n                console.log(\"Error checking if user exists: \", error.message);\n                return false;\n            }\n        }\n    }\n});\n // 1:49:14\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBRXhCO0FBQ2M7QUFFOUMsTUFBTUksVUFBVUosZ0RBQVFBLENBQUM7SUFDdkJLLFdBQVc7UUFDVEosc0VBQWNBLENBQUM7WUFDYkssVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRTtZQUN2Qiw0Q0FBNEM7WUFDNUMsTUFBTUMsY0FBYyxNQUFNWixvREFBSUEsQ0FBQ2EsT0FBTyxDQUFDO2dCQUFFQyxPQUFPSCxRQUFRSSxJQUFJLENBQUNELEtBQUs7WUFBQztZQUNuRUgsUUFBUUksSUFBSSxDQUFDQyxFQUFFLEdBQUdKLFlBQVlLLEdBQUcsQ0FBQ0MsUUFBUTtZQUUxQyxPQUFPUDtRQUNUO1FBQ0EsTUFBTVEsUUFBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRU4sSUFBSSxFQUFFTyxXQUFXLEVBQUU7WUFDbEQsSUFBSTtnQkFDRixNQUFNckIsNERBQVdBO2dCQUVqQiwrQkFBK0I7Z0JBQy9CLE1BQU1zQixhQUFhLE1BQU12QixvREFBSUEsQ0FBQ2EsT0FBTyxDQUFDO29CQUFFQyxPQUFPTyxRQUFRUCxLQUFLO2dCQUFFO2dCQUU5RCx5REFBeUQ7Z0JBQ3pELElBQUksQ0FBQ1MsWUFBWTtvQkFDYixNQUFNdkIsb0RBQUlBLENBQUN3QixNQUFNLENBQUM7d0JBQ2RWLE9BQU9PLFFBQVFQLEtBQUs7d0JBQ3BCVyxVQUFVSixRQUFRSyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxPQUFPLElBQUlDLFdBQVc7d0JBQ3JEQyxPQUFPUixRQUFRUyxPQUFPO29CQUMxQjtnQkFDSjtnQkFFQSxPQUFPO1lBQ1QsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRQyxHQUFHLENBQUMsbUNBQW1DRixNQUFNRyxPQUFPO2dCQUM1RCxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0FBQ0Y7QUFFMEMsQ0FDMUMsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc193ZWJzaXRlX3R1dG9yaWFsLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcclxuXHJcbmltcG9ydCBVc2VyIGZyb20gJ0Btb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSAnQHV0aWxzL2RhdGFiYXNlJztcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiB9KSB7XHJcbiAgICAgIC8vIHN0b3JlIHRoZSB1c2VyIGlkIGZyb20gTW9uZ29EQiB0byBzZXNzaW9uXHJcbiAgICAgIGNvbnN0IHNlc3Npb25Vc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9KTtcclxuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gc2Vzc2lvblVzZXIuX2lkLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzaWduSW4oeyBhY2NvdW50LCBwcm9maWxlLCB1c2VyLCBjcmVkZW50aWFscyB9KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgIGNvbnN0IHVzZXJFeGlzdHMgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcHJvZmlsZS5lbWFpbCwgfSk7XHJcblxyXG4gICAgICAgIC8vIGlmIG5vdCwgY3JlYXRlIGEgbmV3IGRvY3VtZW50IGFuZCBzYXZlIHVzZXIgaW4gTW9uZ29EQlxyXG4gICAgICAgIGlmICghdXNlckV4aXN0cykge1xyXG4gICAgICAgICAgICBhd2FpdCBVc2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNoZWNraW5nIGlmIHVzZXIgZXhpc3RzOiBcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XHJcbi8vIDE6NDk6MTQiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIlVzZXIiLCJjb25uZWN0VG9EQiIsImhhbmRsZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJzZXNzaW9uVXNlciIsImZpbmRPbmUiLCJlbWFpbCIsInVzZXIiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJjcmVkZW50aWFscyIsInVzZXJFeGlzdHMiLCJjcmVhdGUiLCJ1c2VybmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpbWFnZSIsInBpY3R1cmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exists\"\n        ],\n        required: [\n            true,\n            \"Email is required\"\n        ]\n    },\n    username: {\n        type: String,\n        unique: [\n            true,\n            \"Username already exists\"\n        ],\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        match: [\n            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,\n            \"Username invalid, it should contain 8-20 alphanumeric letters and be unique!\"\n        ]\n    },\n    image: {\n        type: String\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUMxQkksT0FBTztRQUNIQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF1QjtRQUN0Q0MsVUFBVTtZQUFDO1lBQU07U0FBb0I7SUFDekM7SUFFQUMsVUFBVTtRQUNOSixNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUEwQjtRQUN6Q0MsVUFBVTtZQUFDO1lBQU07U0FBdUI7UUFDeENFLE9BQU87WUFDSDtZQUNBO1NBQ1A7SUFDRDtJQUVBQyxPQUFPO1FBQ0hOLE1BQU1DO0lBQ1Y7QUFDSjtBQUVBLE1BQU1NLE9BQU9WLDRDQUFNQSxDQUFDVSxJQUFJLElBQUlYLCtDQUFLQSxDQUFDLFFBQVFFO0FBRTFDLGlFQUFlUyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX3dlYnNpdGVfdHV0b3JpYWwvLi9tb2RlbHMvdXNlci5qcz82NTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgXCJFbWFpbCBhbHJlYWR5IGV4aXN0c1wiXSxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiRW1haWwgaXMgcmVxdWlyZWRcIl0sXHJcbiAgICB9LFxyXG5cclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHVuaXF1ZTogW3RydWUsIFwiVXNlcm5hbWUgYWxyZWFkeSBleGlzdHNcIl0sXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCJdLFxyXG4gICAgICAgIG1hdGNoOiBbXHJcbiAgICAgICAgICAgIC9eKD89Lns4LDIwfSQpKD8hW18uXSkoPyEuKltfLl17Mn0pW2EtekEtWjAtOS5fXSsoPzwhW18uXSkkLyxcclxuICAgICAgICAgICAgXCJVc2VybmFtZSBpbnZhbGlkLCBpdCBzaG91bGQgY29udGFpbiA4LTIwIGFscGhhbnVtZXJpYyBsZXR0ZXJzIGFuZCBiZSB1bmlxdWUhXCJcclxuICAgIF0gLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwidXNlclNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsInJlcXVpcmVkIiwidXNlcm5hbWUiLCJtYXRjaCIsImltYWdlIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"share_prompt\"\n        });\n        isConnected = true;\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsSUFBSUMsY0FBWTtBQUVULE1BQU1DLGNBQVk7SUFDckJGLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFHQyxhQUFZO1FBQ1hHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFFQSxJQUFHO1FBQ0MsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1lBQzVDQyxRQUFRO1FBR1o7UUFFQVQsY0FBWTtRQUVaRyxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFNTSxPQUFNO1FBQ1ZQLFFBQVFDLEdBQUcsQ0FBQ007SUFDaEI7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX3dlYnNpdGVfdHV0b3JpYWwvLi91dGlscy9kYXRhYmFzZS5qcz8yYjllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmxldCBpc0Nvbm5lY3RlZD1mYWxzZTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EQj1hc3luYygpPT57XHJcbiAgICBtb25nb29zZS5zZXQoJ3N0cmljdFF1ZXJ5JywgdHJ1ZSk7XHJcblxyXG4gICAgaWYoaXNDb25uZWN0ZWQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGlzIGFscmVhZHkgY29ubmVjdGVkJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeXsgICAgXHJcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgICAgICAgICBkYk5hbWU6IFwic2hhcmVfcHJvbXB0XCIsXHJcbiAgICAgICAgICAgIC8vIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gdXNlVW5pZmllZFRvcG9wbG9neTogdHJ1ZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpc0Nvbm5lY3RlZD10cnVlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0ZWQnKTtcclxuICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CArunabh%20Barooah%5COneDrive%5CDocuments%5Cnextjs_website_tutorial%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CArunabh%20Barooah%5COneDrive%5CDocuments%5Cnextjs_website_tutorial&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();