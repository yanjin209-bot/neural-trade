"use strict";
const electron = require("electron");
const INVOKE_CHANNELS = [
  "settings:get",
  "settings:update",
  "settings:reset-section",
  "market:snapshot",
  "market:candles",
  "market:overlay",
  "market:watch",
  "market:reconnect",
  "rules:evaluate",
  "ai:providers",
  "ai:save-provider",
  "ai:add-provider",
  "ai:delete-provider",
  "ai:set-key",
  "ai:delete-key",
  "ai:fetch-models",
  "ai:test",
  "analysis:run",
  "analysis:cancel",
  "analysis:latest",
  "analysis:latest-dual",
  "analysis:history",
  "news:list",
  "news:refresh",
  "news:providers",
  "news:set-key",
  "news:delete-key",
  "news:test",
  "usage:summary",
  "alerts:list",
  "alerts:clear",
  "win:state",
  "win:set-size",
  "win:toggle-ghost",
  "win:set-opacity",
  "win:set-click-through",
  "win:set-top",
  "win:set-focus-mode",
  "win:hide",
  "win:minimize",
  "win:quit",
  "app:open-external",
  "app:info"
];
const EVENT_CHANNELS = [
  "settings:changed",
  "market:tickers",
  "market:candle",
  "market:conn",
  "analysis:progress",
  "analysis:result",
  "analysis:dual",
  "news:updated",
  "alerts:new",
  "win:state",
  "app:visibility",
  "shortcut:analyze"
];
const bridge = {
  invoke: (channel, ...args) => {
    if (!INVOKE_CHANNELS.includes(channel)) return Promise.reject(new Error(`禁止的通道：${String(channel)}`));
    return electron.ipcRenderer.invoke(channel, ...args);
  },
  on: (channel, listener) => {
    if (!EVENT_CHANNELS.includes(channel)) throw new Error(`禁止的事件：${String(channel)}`);
    const fn = (_e, payload) => listener(payload);
    electron.ipcRenderer.on(channel, fn);
    return () => electron.ipcRenderer.removeListener(channel, fn);
  }
};
electron.contextBridge.exposeInMainWorld("neural", bridge);
