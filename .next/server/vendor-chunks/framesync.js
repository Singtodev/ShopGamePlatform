"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/framesync";
exports.ids = ["vendor-chunks/framesync"];
exports.modules = {

/***/ "(ssr)/./node_modules/framesync/dist/framesync.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.cjs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst defaultTimestep = 1 / 60 * 1000;\nconst getCurrentTime = typeof performance !== \"undefined\" ? ()=>performance.now() : ()=>Date.now();\nconst onNextFrame =  false ? 0 : (callback)=>setTimeout(()=>callback(getCurrentTime()), defaultTimestep);\nfunction createRenderStep(runNextFrame) {\n    let toRun = [];\n    let toRunNextFrame = [];\n    let numToRun = 0;\n    let isProcessing = false;\n    let flushNextFrame = false;\n    const toKeepAlive = new WeakSet();\n    const step = {\n        schedule: (callback, keepAlive = false, immediate = false)=>{\n            const addToCurrentFrame = immediate && isProcessing;\n            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;\n            if (keepAlive) toKeepAlive.add(callback);\n            if (buffer.indexOf(callback) === -1) {\n                buffer.push(callback);\n                if (addToCurrentFrame && isProcessing) numToRun = toRun.length;\n            }\n            return callback;\n        },\n        cancel: (callback)=>{\n            const index = toRunNextFrame.indexOf(callback);\n            if (index !== -1) toRunNextFrame.splice(index, 1);\n            toKeepAlive.delete(callback);\n        },\n        process: (frameData)=>{\n            if (isProcessing) {\n                flushNextFrame = true;\n                return;\n            }\n            isProcessing = true;\n            [toRun, toRunNextFrame] = [\n                toRunNextFrame,\n                toRun\n            ];\n            toRunNextFrame.length = 0;\n            numToRun = toRun.length;\n            if (numToRun) {\n                for(let i = 0; i < numToRun; i++){\n                    const callback = toRun[i];\n                    callback(frameData);\n                    if (toKeepAlive.has(callback)) {\n                        step.schedule(callback);\n                        runNextFrame();\n                    }\n                }\n            }\n            isProcessing = false;\n            if (flushNextFrame) {\n                flushNextFrame = false;\n                step.process(frameData);\n            }\n        }\n    };\n    return step;\n}\nconst maxElapsed = 40;\nlet useDefaultElapsed = true;\nlet runNextFrame = false;\nlet isProcessing = false;\nconst frame = {\n    delta: 0,\n    timestamp: 0\n};\nconst stepsOrder = [\n    \"read\",\n    \"update\",\n    \"preRender\",\n    \"render\",\n    \"postRender\"\n];\nconst steps = stepsOrder.reduce((acc, key)=>{\n    acc[key] = createRenderStep(()=>runNextFrame = true);\n    return acc;\n}, {});\nconst sync = stepsOrder.reduce((acc, key)=>{\n    const step = steps[key];\n    acc[key] = (process, keepAlive = false, immediate = false)=>{\n        if (!runNextFrame) startLoop();\n        return step.schedule(process, keepAlive, immediate);\n    };\n    return acc;\n}, {});\nconst cancelSync = stepsOrder.reduce((acc, key)=>{\n    acc[key] = steps[key].cancel;\n    return acc;\n}, {});\nconst flushSync = stepsOrder.reduce((acc, key)=>{\n    acc[key] = ()=>steps[key].process(frame);\n    return acc;\n}, {});\nconst processStep = (stepId)=>steps[stepId].process(frame);\nconst processFrame = (timestamp)=>{\n    runNextFrame = false;\n    frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);\n    frame.timestamp = timestamp;\n    isProcessing = true;\n    stepsOrder.forEach(processStep);\n    isProcessing = false;\n    if (runNextFrame) {\n        useDefaultElapsed = false;\n        onNextFrame(processFrame);\n    }\n};\nconst startLoop = ()=>{\n    runNextFrame = true;\n    useDefaultElapsed = true;\n    if (!isProcessing) onNextFrame(processFrame);\n};\nconst getFrameData = ()=>frame;\nexports.cancelSync = cancelSync;\nexports[\"default\"] = sync;\nexports.flushSync = flushSync;\nexports.getFrameData = getFrameData;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZnJhbWVzeW5jLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUU3RCxNQUFNQyxrQkFBa0IsSUFBSyxLQUFNO0FBQ25DLE1BQU1DLGlCQUFpQixPQUFPQyxnQkFBZ0IsY0FDeEMsSUFBTUEsWUFBWUMsR0FBRyxLQUNyQixJQUFNQyxLQUFLRCxHQUFHO0FBQ3BCLE1BQU1FLGNBQWMsTUFBNkIsR0FDM0MsQ0FBb0RDLEdBQ3BELENBQUNBLFdBQWFHLFdBQVcsSUFBTUgsU0FBU0wsbUJBQW1CRDtBQUVqRSxTQUFTVSxpQkFBaUJDLFlBQVk7SUFDbEMsSUFBSUMsUUFBUSxFQUFFO0lBQ2QsSUFBSUMsaUJBQWlCLEVBQUU7SUFDdkIsSUFBSUMsV0FBVztJQUNmLElBQUlDLGVBQWU7SUFDbkIsSUFBSUMsaUJBQWlCO0lBQ3JCLE1BQU1DLGNBQWMsSUFBSUM7SUFDeEIsTUFBTUMsT0FBTztRQUNUQyxVQUFVLENBQUNkLFVBQVVlLFlBQVksS0FBSyxFQUFFQyxZQUFZLEtBQUs7WUFDckQsTUFBTUMsb0JBQW9CRCxhQUFhUDtZQUN2QyxNQUFNUyxTQUFTRCxvQkFBb0JYLFFBQVFDO1lBQzNDLElBQUlRLFdBQ0FKLFlBQVlRLEdBQUcsQ0FBQ25CO1lBQ3BCLElBQUlrQixPQUFPRSxPQUFPLENBQUNwQixjQUFjLENBQUMsR0FBRztnQkFDakNrQixPQUFPRyxJQUFJLENBQUNyQjtnQkFDWixJQUFJaUIscUJBQXFCUixjQUNyQkQsV0FBV0YsTUFBTWdCLE1BQU07WUFDL0I7WUFDQSxPQUFPdEI7UUFDWDtRQUNBdUIsUUFBUSxDQUFDdkI7WUFDTCxNQUFNd0IsUUFBUWpCLGVBQWVhLE9BQU8sQ0FBQ3BCO1lBQ3JDLElBQUl3QixVQUFVLENBQUMsR0FDWGpCLGVBQWVrQixNQUFNLENBQUNELE9BQU87WUFDakNiLFlBQVllLE1BQU0sQ0FBQzFCO1FB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cyI6WyJ3ZWJwYWNrOi8vbGluZS1yYW5nZXItc2hvcC8uL25vZGVfbW9kdWxlcy9mcmFtZXN5bmMvZGlzdC9mcmFtZXN5bmMuY2pzLmpzP2MwYjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jb25zdCBkZWZhdWx0VGltZXN0ZXAgPSAoMSAvIDYwKSAqIDEwMDA7XG5jb25zdCBnZXRDdXJyZW50VGltZSA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gKCkgPT4gcGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5jb25zdCBvbk5leHRGcmFtZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICA/IChjYWxsYmFjaykgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaylcbiAgICA6IChjYWxsYmFjaykgPT4gc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhnZXRDdXJyZW50VGltZSgpKSwgZGVmYXVsdFRpbWVzdGVwKTtcblxuZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChydW5OZXh0RnJhbWUpIHtcbiAgICBsZXQgdG9SdW4gPSBbXTtcbiAgICBsZXQgdG9SdW5OZXh0RnJhbWUgPSBbXTtcbiAgICBsZXQgbnVtVG9SdW4gPSAwO1xuICAgIGxldCBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICBsZXQgZmx1c2hOZXh0RnJhbWUgPSBmYWxzZTtcbiAgICBjb25zdCB0b0tlZXBBbGl2ZSA9IG5ldyBXZWFrU2V0KCk7XG4gICAgY29uc3Qgc3RlcCA9IHtcbiAgICAgICAgc2NoZWR1bGU6IChjYWxsYmFjaywga2VlcEFsaXZlID0gZmFsc2UsIGltbWVkaWF0ZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGRUb0N1cnJlbnRGcmFtZSA9IGltbWVkaWF0ZSAmJiBpc1Byb2Nlc3Npbmc7XG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBhZGRUb0N1cnJlbnRGcmFtZSA/IHRvUnVuIDogdG9SdW5OZXh0RnJhbWU7XG4gICAgICAgICAgICBpZiAoa2VlcEFsaXZlKVxuICAgICAgICAgICAgICAgIHRvS2VlcEFsaXZlLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoYnVmZmVyLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoYWRkVG9DdXJyZW50RnJhbWUgJiYgaXNQcm9jZXNzaW5nKVxuICAgICAgICAgICAgICAgICAgICBudW1Ub1J1biA9IHRvUnVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaztcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIHRvUnVuTmV4dEZyYW1lLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0b0tlZXBBbGl2ZS5kZWxldGUoY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzOiAoZnJhbWVEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgZmx1c2hOZXh0RnJhbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICBbdG9SdW4sIHRvUnVuTmV4dEZyYW1lXSA9IFt0b1J1bk5leHRGcmFtZSwgdG9SdW5dO1xuICAgICAgICAgICAgdG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIG51bVRvUnVuID0gdG9SdW4ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKG51bVRvUnVuKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Ub1J1bjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdG9SdW5baV07XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZyYW1lRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBBbGl2ZS5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwLnNjaGVkdWxlKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bk5leHRGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZmx1c2hOZXh0RnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmbHVzaE5leHRGcmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN0ZXAucHJvY2VzcyhmcmFtZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHN0ZXA7XG59XG5cbmNvbnN0IG1heEVsYXBzZWQgPSA0MDtcbmxldCB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XG5sZXQgcnVuTmV4dEZyYW1lID0gZmFsc2U7XG5sZXQgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG5jb25zdCBmcmFtZSA9IHtcbiAgICBkZWx0YTogMCxcbiAgICB0aW1lc3RhbXA6IDAsXG59O1xuY29uc3Qgc3RlcHNPcmRlciA9IFtcbiAgICBcInJlYWRcIixcbiAgICBcInVwZGF0ZVwiLFxuICAgIFwicHJlUmVuZGVyXCIsXG4gICAgXCJyZW5kZXJcIixcbiAgICBcInBvc3RSZW5kZXJcIixcbl07XG5jb25zdCBzdGVwcyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gY3JlYXRlUmVuZGVyU3RlcCgoKSA9PiAocnVuTmV4dEZyYW1lID0gdHJ1ZSkpO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5jb25zdCBzeW5jID0gc3RlcHNPcmRlci5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgY29uc3Qgc3RlcCA9IHN0ZXBzW2tleV07XG4gICAgYWNjW2tleV0gPSAocHJvY2Vzcywga2VlcEFsaXZlID0gZmFsc2UsIGltbWVkaWF0ZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmICghcnVuTmV4dEZyYW1lKVxuICAgICAgICAgICAgc3RhcnRMb29wKCk7XG4gICAgICAgIHJldHVybiBzdGVwLnNjaGVkdWxlKHByb2Nlc3MsIGtlZXBBbGl2ZSwgaW1tZWRpYXRlKTtcbiAgICB9O1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5jb25zdCBjYW5jZWxTeW5jID0gc3RlcHNPcmRlci5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjW2tleV0gPSBzdGVwc1trZXldLmNhbmNlbDtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3QgZmx1c2hTeW5jID0gc3RlcHNPcmRlci5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjW2tleV0gPSAoKSA9PiBzdGVwc1trZXldLnByb2Nlc3MoZnJhbWUpO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5jb25zdCBwcm9jZXNzU3RlcCA9IChzdGVwSWQpID0+IHN0ZXBzW3N0ZXBJZF0ucHJvY2VzcyhmcmFtZSk7XG5jb25zdCBwcm9jZXNzRnJhbWUgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgcnVuTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgZnJhbWUuZGVsdGEgPSB1c2VEZWZhdWx0RWxhcHNlZFxuICAgICAgICA/IGRlZmF1bHRUaW1lc3RlcFxuICAgICAgICA6IE1hdGgubWF4KE1hdGgubWluKHRpbWVzdGFtcCAtIGZyYW1lLnRpbWVzdGFtcCwgbWF4RWxhcHNlZCksIDEpO1xuICAgIGZyYW1lLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgIHN0ZXBzT3JkZXIuZm9yRWFjaChwcm9jZXNzU3RlcCk7XG4gICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgaWYgKHJ1bk5leHRGcmFtZSkge1xuICAgICAgICB1c2VEZWZhdWx0RWxhcHNlZCA9IGZhbHNlO1xuICAgICAgICBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xuICAgIH1cbn07XG5jb25zdCBzdGFydExvb3AgPSAoKSA9PiB7XG4gICAgcnVuTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XG4gICAgaWYgKCFpc1Byb2Nlc3NpbmcpXG4gICAgICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG59O1xuY29uc3QgZ2V0RnJhbWVEYXRhID0gKCkgPT4gZnJhbWU7XG5cbmV4cG9ydHMuY2FuY2VsU3luYyA9IGNhbmNlbFN5bmM7XG5leHBvcnRzLmRlZmF1bHQgPSBzeW5jO1xuZXhwb3J0cy5mbHVzaFN5bmMgPSBmbHVzaFN5bmM7XG5leHBvcnRzLmdldEZyYW1lRGF0YSA9IGdldEZyYW1lRGF0YTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHRUaW1lc3RlcCIsImdldEN1cnJlbnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJEYXRlIiwib25OZXh0RnJhbWUiLCJjYWxsYmFjayIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJjcmVhdGVSZW5kZXJTdGVwIiwicnVuTmV4dEZyYW1lIiwidG9SdW4iLCJ0b1J1bk5leHRGcmFtZSIsIm51bVRvUnVuIiwiaXNQcm9jZXNzaW5nIiwiZmx1c2hOZXh0RnJhbWUiLCJ0b0tlZXBBbGl2ZSIsIldlYWtTZXQiLCJzdGVwIiwic2NoZWR1bGUiLCJrZWVwQWxpdmUiLCJpbW1lZGlhdGUiLCJhZGRUb0N1cnJlbnRGcmFtZSIsImJ1ZmZlciIsImFkZCIsImluZGV4T2YiLCJwdXNoIiwibGVuZ3RoIiwiY2FuY2VsIiwiaW5kZXgiLCJzcGxpY2UiLCJkZWxldGUiLCJwcm9jZXNzIiwiZnJhbWVEYXRhIiwiaSIsImhhcyIsIm1heEVsYXBzZWQiLCJ1c2VEZWZhdWx0RWxhcHNlZCIsImZyYW1lIiwiZGVsdGEiLCJ0aW1lc3RhbXAiLCJzdGVwc09yZGVyIiwic3RlcHMiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJzeW5jIiwic3RhcnRMb29wIiwiY2FuY2VsU3luYyIsImZsdXNoU3luYyIsInByb2Nlc3NTdGVwIiwic3RlcElkIiwicHJvY2Vzc0ZyYW1lIiwiTWF0aCIsIm1heCIsIm1pbiIsImZvckVhY2giLCJnZXRGcmFtZURhdGEiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/framesync.cjs.js\n");

/***/ })

};
;