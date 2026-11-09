"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
const electron = require("electron");
const events = require("events");
const fs = require("fs");
const path = require("path");
const initSqlJs = require("sql.js");
const httpsProxyAgent = require("https-proxy-agent");
const socksProxyAgent = require("socks-proxy-agent");
const WebSocket = require("ws");
const fastXmlParser = require("fast-xml-parser");
const crypto = require("crypto");
const zod = require("zod");
const WINDOW_SIZES = {
  large: { width: 1200, height: 760 },
  medium: { width: 760, height: 480 },
  small: { width: 340, height: 200 }
};
const INTERVAL_MS = {
  "1m": 6e4,
  "5m": 3e5,
  "15m": 9e5,
  "30m": 18e5,
  "1h": 36e5,
  "4h": 144e5,
  "1d": 864e5,
  "1w": 6048e5
};
const DEFAULT_NEWS_PROVIDERS = [
  { id: "rss-fed", kind: "rss", name: "Federal Reserve 新闻稿", url: "https://www.federalreserve.gov/feeds/press_all.xml", enabled: true, tier: 1, needsKey: false },
  { id: "rss-sec", kind: "rss", name: "SEC 新闻稿", url: "https://www.sec.gov/news/pressreleases.rss", enabled: true, tier: 1, needsKey: false },
  { id: "rss-bls", kind: "rss", name: "BLS 美国劳工统计局", url: "https://www.bls.gov/feed/bls_latest.rss", enabled: true, tier: 1, needsKey: false },
  { id: "rss-coindesk", kind: "rss", name: "CoinDesk", url: "https://www.coindesk.com/arc/outboundfeeds/rss/", enabled: true, tier: 2, needsKey: false },
  { id: "rss-cointelegraph", kind: "rss", name: "Cointelegraph", url: "https://cointelegraph.com/rss", enabled: true, tier: 2, needsKey: false },
  { id: "rss-theblock", kind: "rss", name: "The Block", url: "https://www.theblock.co/rss.xml", enabled: true, tier: 2, needsKey: false },
  { id: "rss-decrypt", kind: "rss", name: "Decrypt", url: "https://decrypt.co/feed", enabled: true, tier: 2, needsKey: false },
  { id: "cryptopanic", kind: "cryptopanic", name: "CryptoPanic API", url: "https://cryptopanic.com/api/developer/v2/posts/", enabled: false, tier: 3, needsKey: true },
  { id: "newsapi", kind: "newsapi", name: "NewsAPI.org", url: "https://newsapi.org/v2/everything", enabled: false, tier: 3, needsKey: true }
];
function presetProvider(kind, id) {
  if (kind === "openai") {
    return {
      id: id ?? "openai",
      kind,
      name: "OpenAI",
      baseUrl: "https://api.openai.com/v1",
      apiStyle: "responses",
      enabled: true,
      models: [],
      defaultModel: "",
      timeoutMs: 9e4,
      maxOutputTokens: 3e3,
      reasoning: "low",
      structured: "json_schema",
      allowLocalHttp: false
    };
  }
  if (kind === "deepseek") {
    return {
      id: id ?? "deepseek",
      kind,
      name: "DeepSeek",
      baseUrl: "https://api.deepseek.com",
      apiStyle: "chat",
      enabled: true,
      models: [
        { id: "deepseek-flash", enabled: true },
        { id: "deepseek-v4-pro", enabled: true }
      ],
      defaultModel: "deepseek-flash",
      timeoutMs: 12e4,
      maxOutputTokens: 3e3,
      reasoning: "off",
      structured: "json_object",
      allowLocalHttp: false
    };
  }
  return {
    id: id ?? `custom-${Date.now().toString(36)}`,
    kind: "openai_compatible",
    name: "自定义 OpenAI 兼容",
    baseUrl: "https://",
    apiStyle: "chat",
    enabled: true,
    models: [],
    defaultModel: "",
    timeoutMs: 9e4,
    maxOutputTokens: 3e3,
    reasoning: "off",
    structured: "json_object",
    allowLocalHttp: false
  };
}
const DEFAULT_SETTINGS = {
  market: {
    exchange: "binance",
    binanceSpotRest: "https://api.binance.com",
    binanceSpotWs: "wss://stream.binance.com:9443",
    binanceFutRest: "https://fapi.binance.com",
    // 2026-03 起 USDⓈ-M 合约 WS 拆分为 /public /market /private，K 线与行情位于 /market
    binanceFutWs: "wss://fstream.binance.com/market",
    okxRest: "https://www.okx.com",
    okxWs: "wss://ws.okx.com:8443/ws/v5",
    symbol: "BTCUSDT",
    marketType: "perp",
    chartInterval: "15m",
    staleSeconds: 90,
    anomalyPct: 1.2,
    anomalyWindowSec: 60
  },
  network: { proxyMode: "system", proxyUrl: "" },
  analysis: {
    autoEnabled: true,
    autoInterval: "15m",
    autoSymbols: ["BTCUSDT", "ETHUSDT"],
    marketType: "perp",
    eventTriggers: true,
    eventCooldownMin: 30,
    debounceSec: 20,
    newsWindowHours: 12,
    maxNewsItems: 12,
    dualModel: false,
    primaryProviderId: "deepseek",
    primaryModel: "",
    secondaryProviderId: "openai",
    secondaryModel: "",
    cacheMinutes: 5,
    dailyCallLimit: 80,
    dailyBudgetUsd: 2,
    perMinuteLimit: 4,
    retries: 1,
    sendDerivatives: true
  },
  risk: {
    accountSize: 1e4,
    riskPct: 1,
    feePctSpot: 0.1,
    feePctPerp: 0.05,
    slippagePct: 0.03,
    atrStopMult: 1.5,
    minRR: 1.5
  },
  news: { refreshMinutes: 5, providers: DEFAULT_NEWS_PROVIDERS },
  alerts: {
    enabled: true,
    desktop: true,
    breakout: true,
    supportBreak: true,
    news: true,
    signalChange: true,
    network: true,
    anomaly: true,
    cooldownMin: 10
  },
  window: {
    size: "large",
    alwaysOnTop: true,
    opacity: 1,
    ghostOpacity: 0.4,
    snap: true,
    snapThreshold: 18,
    focusMode: false,
    positions: {},
    shortcuts: {
      toggleVisible: "CommandOrControl+Alt+H",
      toggleGhost: "CommandOrControl+Alt+T",
      toggleClickThrough: "CommandOrControl+Alt+M",
      sizeLarge: "CommandOrControl+Alt+1",
      sizeMedium: "CommandOrControl+Alt+2",
      sizeSmall: "CommandOrControl+Alt+3",
      toggleTop: "CommandOrControl+Alt+P",
      analyzeNow: "CommandOrControl+Alt+A",
      toggleFocus: "CommandOrControl+Alt+F"
    }
  },
  ui: { reduceMotion: false },
  providers: [presetProvider("deepseek"), presetProvider("openai")]
};
const MAX = 2 * 1024 * 1024;
let file = "";
const PATTERNS = [
  [/(sk-[A-Za-z0-9_\-]{6})[A-Za-z0-9_\-]+/g, "$1…[REDACTED]"],
  [/(Bearer\s+)[A-Za-z0-9._\-]+/gi, "$1[REDACTED]"],
  [/((?:api[_-]?key|auth_token|token|apikey|x-api-key)["'=:\s]+)[^"'&\s,}]+/gi, "$1[REDACTED]"]
];
function redact(s) {
  let out = s;
  for (const [re, rep] of PATTERNS) out = out.replace(re, rep);
  return out;
}
function ensure() {
  if (file) return;
  const dir = path.join(electron.app.getPath("userData"), "logs");
  fs.mkdirSync(dir, { recursive: true });
  file = path.join(dir, "neural-trade.log");
}
function write(level, scope, msg) {
  try {
    ensure();
    const text2 = msg.map((m) => m instanceof Error ? `${m.message}` : typeof m === "string" ? m : JSON.stringify(m)).join(" ");
    const line = `${(/* @__PURE__ */ new Date()).toISOString()} [${level}] [${scope}] ${redact(text2)}
`;
    if (fs.existsSync(file) && fs.statSync(file).size > MAX) {
      fs.renameSync(file, file + ".1");
    }
    fs.appendFileSync(file, line);
    if (!electron.app.isPackaged) process.stdout.write(line);
  } catch {
  }
}
function logPath() {
  ensure();
  return file;
}
function createLogger(scope) {
  return {
    info: (...m) => write("INFO", scope, m),
    warn: (...m) => write("WARN", scope, m),
    error: (...m) => write("ERROR", scope, m)
  };
}
const log$a = createLogger("settings");
function isObj(v) {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}
function deepMerge(base, patch) {
  if (!isObj(patch)) return base;
  const out = { ...base };
  for (const [k, v] of Object.entries(patch)) {
    if (v === void 0) continue;
    const b = out[k];
    if (isObj(b) && isObj(v)) out[k] = deepMerge(b, v);
    else out[k] = v;
  }
  return out;
}
const clamp$1 = (v, lo, hi, d) => typeof v === "number" && isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d;
function sanitize(s) {
  const d = DEFAULT_SETTINGS;
  s.window.opacity = clamp$1(s.window.opacity, 0.15, 1, 1);
  s.window.ghostOpacity = clamp$1(s.window.ghostOpacity, 0.15, 0.95, 0.4);
  s.window.snapThreshold = clamp$1(s.window.snapThreshold, 0, 80, 18);
  s.market.staleSeconds = clamp$1(s.market.staleSeconds, 15, 900, d.market.staleSeconds);
  s.market.anomalyPct = clamp$1(s.market.anomalyPct, 0.2, 20, d.market.anomalyPct);
  s.market.anomalyWindowSec = clamp$1(s.market.anomalyWindowSec, 10, 600, d.market.anomalyWindowSec);
  s.analysis.dailyCallLimit = clamp$1(s.analysis.dailyCallLimit, 0, 5e3, d.analysis.dailyCallLimit);
  s.analysis.dailyBudgetUsd = clamp$1(s.analysis.dailyBudgetUsd, 0, 1e3, d.analysis.dailyBudgetUsd);
  s.analysis.perMinuteLimit = clamp$1(s.analysis.perMinuteLimit, 1, 60, d.analysis.perMinuteLimit);
  s.analysis.newsWindowHours = clamp$1(s.analysis.newsWindowHours, 1, 168, d.analysis.newsWindowHours);
  s.analysis.maxNewsItems = clamp$1(s.analysis.maxNewsItems, 0, 40, d.analysis.maxNewsItems);
  s.analysis.cacheMinutes = clamp$1(s.analysis.cacheMinutes, 0, 240, d.analysis.cacheMinutes);
  s.analysis.eventCooldownMin = clamp$1(s.analysis.eventCooldownMin, 5, 720, d.analysis.eventCooldownMin);
  s.analysis.debounceSec = clamp$1(s.analysis.debounceSec, 3, 600, d.analysis.debounceSec);
  s.analysis.retries = clamp$1(s.analysis.retries, 0, 3, d.analysis.retries);
  s.risk.riskPct = clamp$1(s.risk.riskPct, 0.05, 10, d.risk.riskPct);
  s.risk.minRR = clamp$1(s.risk.minRR, 0.5, 10, d.risk.minRR);
  s.risk.atrStopMult = clamp$1(s.risk.atrStopMult, 0.5, 6, d.risk.atrStopMult);
  s.news.refreshMinutes = clamp$1(s.news.refreshMinutes, 1, 120, d.news.refreshMinutes);
  if (!["5m", "15m", "1h", "4h"].includes(s.analysis.autoInterval)) s.analysis.autoInterval = "15m";
  for (const np of DEFAULT_NEWS_PROVIDERS) if (!s.news.providers.some((p) => p.id === np.id)) s.news.providers.push({ ...np });
  s.providers = s.providers.map((p) => sanitizeProvider(p));
  return s;
}
function sanitizeProvider(p) {
  const q = { ...p };
  delete q.apiKey;
  q.timeoutMs = clamp$1(q.timeoutMs, 5e3, 6e5, 9e4);
  q.maxOutputTokens = clamp$1(q.maxOutputTokens, 256, 64e3, 3e3);
  q.baseUrl = (q.baseUrl || "").trim().replace(/\/+$/, "");
  q.models = (q.models || []).filter((m) => m && typeof m.id === "string" && m.id.trim()).map((m) => ({ ...m, id: m.id.trim() }));
  return q;
}
class SettingsStore extends events.EventEmitter {
  file;
  data;
  timer = null;
  constructor() {
    super();
    this.file = path.join(electron.app.getPath("userData"), "settings.json");
    this.data = this.load();
  }
  load() {
    try {
      if (fs.existsSync(this.file)) {
        const raw = JSON.parse(fs.readFileSync(this.file, "utf8"));
        const merged = deepMerge(structuredClone(DEFAULT_SETTINGS), raw);
        if (Array.isArray(raw?.providers)) merged.providers = raw.providers;
        if (Array.isArray(raw?.news?.providers)) merged.news.providers = raw.news.providers;
        if (Array.isArray(raw?.analysis?.autoSymbols)) merged.analysis.autoSymbols = raw.analysis.autoSymbols;
        return sanitize(merged);
      }
    } catch (e) {
      log$a.error("读取设置失败，使用默认值", e);
      try {
        fs.copyFileSync(this.file, this.file + ".broken");
      } catch {
      }
    }
    return sanitize(structuredClone(DEFAULT_SETTINGS));
  }
  get() {
    return this.data;
  }
  update(patch, opts = {}) {
    const p = { ...patch };
    if (!opts.allowProviders) delete p.providers;
    const next = deepMerge(structuredClone(this.data), p);
    const n = patch;
    if (n.news?.providers) next.news.providers = n.news.providers;
    if (n.analysis?.autoSymbols) next.analysis.autoSymbols = n.analysis.autoSymbols;
    if (opts.allowProviders && n.providers) next.providers = n.providers;
    const prev = this.data;
    this.data = sanitize(next);
    this.scheduleSave();
    this.emit("change", this.data, prev);
    return this.data;
  }
  resetSection(key2) {
    if (key2 === "providers") return this.data;
    const def = structuredClone(DEFAULT_SETTINGS[key2]);
    const prev = this.data;
    this.data = sanitize({ ...structuredClone(this.data), [key2]: def });
    this.scheduleSave();
    this.emit("change", this.data, prev);
    return this.data;
  }
  scheduleSave() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(), 400);
  }
  flush() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    try {
      const tmp = this.file + ".tmp";
      fs.writeFileSync(tmp, JSON.stringify(this.data, null, 2), "utf8");
      fs.renameSync(tmp, this.file);
    } catch (e) {
      log$a.error("保存设置失败", e);
    }
  }
}
const log$9 = createLogger("secrets");
class SecretStore {
  file;
  data = {};
  constructor() {
    this.file = path.join(electron.app.getPath("userData"), "secrets.bin.json");
    try {
      if (fs.existsSync(this.file)) this.data = JSON.parse(fs.readFileSync(this.file, "utf8"));
    } catch (e) {
      log$9.error("读取密钥文件失败", e);
      this.data = {};
    }
  }
  available() {
    return electron.safeStorage.isEncryptionAvailable();
  }
  set(id, secret) {
    const v = secret.trim();
    if (!v) throw new Error("密钥不能为空");
    if (v.length > 512 || /\s/.test(v)) throw new Error("密钥格式无效");
    if (!this.available()) throw new Error("系统安全存储不可用，无法安全保存密钥");
    this.data[id] = electron.safeStorage.encryptString(v).toString("base64");
    this.save();
    log$9.info(`已更新密钥：${id}`);
  }
  get(id) {
    const enc = this.data[id];
    if (!enc) return null;
    try {
      return electron.safeStorage.decryptString(Buffer.from(enc, "base64"));
    } catch (e) {
      log$9.error(`解密失败：${id}（可能更换了 Windows 用户或系统重装）`);
      return null;
    }
  }
  has(id) {
    return !!this.data[id];
  }
  hint(id) {
    const v = this.get(id);
    if (!v) return null;
    return v.length <= 8 ? "••••" : `${v.slice(0, 3)}••••${v.slice(-4)}`;
  }
  delete(id) {
    delete this.data[id];
    this.save();
    log$9.info(`已删除密钥：${id}`);
  }
  save() {
    const tmp = this.file + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(this.data), { encoding: "utf8", mode: 384 });
    fs.renameSync(tmp, this.file);
  }
}
const log$8 = createLogger("db");
class Store {
  db;
  file = path.join(electron.app.getPath("userData"), "neural-trade.sqlite");
  dirty = false;
  timer = null;
  async init() {
    const wasmPath = require.resolve("sql.js/dist/sql-wasm.wasm");
    const wasm = fs.readFileSync(wasmPath);
    const wasmBinary = wasm.buffer.slice(wasm.byteOffset, wasm.byteOffset + wasm.byteLength);
    const SQL = await initSqlJs({ wasmBinary });
    try {
      this.db = fs.existsSync(this.file) ? new SQL.Database(fs.readFileSync(this.file)) : new SQL.Database();
    } catch (e) {
      log$8.error("数据库损坏，已重建", e);
      try {
        fs.renameSync(this.file, this.file + ".corrupt-" + Date.now());
      } catch {
      }
      this.db = new SQL.Database();
    }
    this.db.run(`
      CREATE TABLE IF NOT EXISTS analyses (id TEXT PRIMARY KEY, symbol TEXT, market TEXT, ts INTEGER, signal TEXT, mode TEXT, status TEXT, json TEXT);
      CREATE INDEX IF NOT EXISTS idx_analyses_ts ON analyses(ts);
      CREATE TABLE IF NOT EXISTS duals (id TEXT PRIMARY KEY, symbol TEXT, market TEXT, ts INTEGER, json TEXT);
      CREATE TABLE IF NOT EXISTS usage (id INTEGER PRIMARY KEY AUTOINCREMENT, at INTEGER, provider TEXT, model TEXT, input INTEGER, output INTEGER, cost REAL, ok INTEGER, purpose TEXT);
      CREATE INDEX IF NOT EXISTS idx_usage_at ON usage(at);
      CREATE TABLE IF NOT EXISTS news (id TEXT PRIMARY KEY, published INTEGER, json TEXT);
      CREATE TABLE IF NOT EXISTS alerts (id TEXT PRIMARY KEY, at INTEGER, json TEXT);
    `);
    this.prune();
  }
  touch() {
    this.dirty = true;
    if (this.timer) return;
    this.timer = setTimeout(() => {
      this.timer = null;
      this.flush();
    }, 3e3);
  }
  flush() {
    if (!this.dirty || !this.db) return;
    try {
      const data = this.db.export();
      const tmp = this.file + ".tmp";
      fs.writeFileSync(tmp, Buffer.from(data));
      fs.renameSync(tmp, this.file);
      this.dirty = false;
    } catch (e) {
      log$8.error("写入数据库失败", e);
    }
  }
  all(sql, params = []) {
    const st = this.db.prepare(sql);
    try {
      st.bind(params);
      const rows = [];
      while (st.step()) rows.push(st.getAsObject());
      return rows;
    } finally {
      st.free();
    }
  }
  prune() {
    const day = 864e5;
    this.db.run("DELETE FROM analyses WHERE id NOT IN (SELECT id FROM analyses ORDER BY ts DESC LIMIT 3000)");
    this.db.run("DELETE FROM duals WHERE id NOT IN (SELECT id FROM duals ORDER BY ts DESC LIMIT 500)");
    this.db.run("DELETE FROM news WHERE published < ?", [Date.now() - 14 * day]);
    this.db.run("DELETE FROM alerts WHERE id NOT IN (SELECT id FROM alerts ORDER BY at DESC LIMIT 500)");
    this.db.run("DELETE FROM usage WHERE at < ?", [Date.now() - 120 * day]);
    this.touch();
  }
  saveAnalysis(r2) {
    this.db.run("INSERT OR REPLACE INTO analyses VALUES (?,?,?,?,?,?,?,?)", [r2.id, r2.symbol, r2.market_type, r2.timestamp, r2.signal, r2.mode, r2.status, JSON.stringify(r2)]);
    this.touch();
  }
  history(symbol, limit = 50) {
    const rows = symbol ? this.all("SELECT json FROM analyses WHERE symbol=? ORDER BY ts DESC LIMIT ?", [symbol, limit]) : this.all("SELECT json FROM analyses ORDER BY ts DESC LIMIT ?", [limit]);
    return rows.map((r2) => JSON.parse(r2.json));
  }
  latestAnalysis(symbol, market, okOnly = false) {
    const rows = this.all(
      `SELECT json FROM analyses WHERE symbol=? AND market=? ${okOnly ? "AND status='ok'" : ""} ORDER BY ts DESC LIMIT 1`,
      [symbol, market]
    );
    return rows[0] ? JSON.parse(rows[0].json) : null;
  }
  saveDual(d) {
    this.db.run("INSERT OR REPLACE INTO duals VALUES (?,?,?,?,?)", [d.id, d.symbol, d.market_type, d.timestamp, JSON.stringify(d)]);
    this.touch();
  }
  latestDual(symbol, market) {
    const rows = this.all("SELECT json FROM duals WHERE symbol=? AND market=? ORDER BY ts DESC LIMIT 1", [symbol, market]);
    return rows[0] ? JSON.parse(rows[0].json) : null;
  }
  addUsage(u) {
    this.db.run("INSERT INTO usage (at,provider,model,input,output,cost,ok,purpose) VALUES (?,?,?,?,?,?,?,?)", [
      u.at,
      u.providerId,
      u.model,
      u.inputTokens,
      u.outputTokens,
      u.cost,
      u.ok ? 1 : 0,
      u.purpose
    ]);
    this.touch();
  }
  usageSince(since) {
    return this.all(
      "SELECT at,provider,model,input,output,cost,ok,purpose FROM usage WHERE at>=? ORDER BY at DESC",
      [since]
    ).map((r2) => ({ at: r2.at, providerId: r2.provider, model: r2.model, inputTokens: r2.input, outputTokens: r2.output, cost: r2.cost, ok: !!r2.ok, purpose: r2.purpose }));
  }
  saveNews(items) {
    for (const n of items) this.db.run("INSERT OR REPLACE INTO news VALUES (?,?,?)", [n.id, n.publishedAt, JSON.stringify(n)]);
    this.touch();
  }
  loadNews(since) {
    return this.all("SELECT json FROM news WHERE published>=? ORDER BY published DESC LIMIT 800", [since]).map((r2) => JSON.parse(r2.json));
  }
  saveAlert(a) {
    this.db.run("INSERT OR REPLACE INTO alerts VALUES (?,?,?)", [a.id, a.at, JSON.stringify(a)]);
    this.touch();
  }
  alerts(limit = 100) {
    return this.all("SELECT json FROM alerts ORDER BY at DESC LIMIT ?", [limit]).map((r2) => JSON.parse(r2.json));
  }
  clearAlerts() {
    this.db.run("DELETE FROM alerts");
    this.touch();
  }
}
class HttpError extends Error {
  constructor(message, status, body2, retryable) {
    super(message);
    this.status = status;
    this.body = body2;
    this.retryable = retryable;
  }
}
const UA = "NEURAL-TRADE/1.0 (Windows desktop market terminal)";
function assertSecureUrl(url, allowLocalHttp = false) {
  let u;
  try {
    u = new URL(url);
  } catch {
    throw new HttpError("无效的 URL", 0, "", false);
  }
  if (u.protocol === "https:" || u.protocol === "wss:") return u;
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(u.hostname);
  if (allowLocalHttp && local && (u.protocol === "http:" || u.protocol === "ws:")) return u;
  throw new HttpError("出于安全要求，仅允许 HTTPS 地址", 0, "", false);
}
function linkSignals(timeoutMs, external) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(new Error("timeout")), timeoutMs);
  const onAbort = () => ctrl.abort(external?.reason ?? new Error("aborted"));
  if (external) {
    if (external.aborted) onAbort();
    else external.addEventListener("abort", onAbort, { once: true });
  }
  return {
    signal: ctrl.signal,
    done: () => {
      clearTimeout(timer);
      external?.removeEventListener("abort", onAbort);
    }
  };
}
async function request(url, opts) {
  assertSecureUrl(url, opts.allowLocalHttp);
  const { signal, done } = linkSignals(opts.timeoutMs ?? 15e3, opts.signal);
  try {
    const headers = { "User-Agent": UA, Accept: "application/json, text/xml, application/xml, */*", ...opts.headers };
    let body2;
    if (opts.body !== void 0) {
      body2 = typeof opts.body === "string" ? opts.body : JSON.stringify(opts.body);
      headers["Content-Type"] = headers["Content-Type"] ?? "application/json";
    }
    const res = await electron.net.fetch(url, { method: opts.method ?? "GET", headers, body: body2, signal, redirect: "follow" });
    return res;
  } catch (e) {
    const err = e;
    if (signal.aborted) {
      const reason = String(signal.reason?.message ?? "");
      if (reason === "timeout") throw new HttpError(`请求超时（${Math.round((opts.timeoutMs ?? 15e3) / 1e3)}s）`, 0, "", true);
      throw new HttpError("请求已取消", -1, "", false);
    }
    throw new HttpError(`网络错误：${redact(err.message)}（请检查网络或代理设置）`, 0, "", true);
  } finally {
    done();
  }
}
function statusReason(status) {
  if (status === 400) return "请求参数错误";
  if (status === 401) return "认证失败：API Key 无效或已过期";
  if (status === 402) return "账户余额不足";
  if (status === 403) return "无访问权限（密钥权限或地区限制）";
  if (status === 404) return "地址或模型不存在";
  if (status === 408) return "服务端超时";
  if (status === 418 || status === 429) return "请求过于频繁或额度受限";
  if (status === 451) return "该地区不可用";
  if (status >= 500) return "服务端错误";
  return `HTTP ${status}`;
}
async function check(res) {
  if (res.ok) return;
  let text2 = "";
  try {
    text2 = await res.text();
  } catch {
  }
  let detail = "";
  try {
    const j = JSON.parse(text2);
    detail = j?.error?.message ?? j?.msg ?? j?.message ?? j?.error ?? "";
    if (typeof detail !== "string") detail = JSON.stringify(detail);
  } catch {
    detail = text2.slice(0, 200);
  }
  const retryable = res.status === 429 || res.status === 408 || res.status >= 500;
  throw new HttpError(`${statusReason(res.status)}${detail ? "：" + redact(detail).slice(0, 300) : ""}`, res.status, redact(text2.slice(0, 2e3)), retryable);
}
async function httpJson(url, opts = {}) {
  const res = await request(url, opts);
  await check(res);
  const text2 = await res.text();
  try {
    return JSON.parse(text2);
  } catch {
    throw new HttpError("响应不是有效的 JSON", res.status, redact(text2.slice(0, 500)), false);
  }
}
async function httpText(url, opts = {}) {
  const res = await request(url, opts);
  await check(res);
  return res.text();
}
async function applyProxy(net2) {
  const s = electron.session.defaultSession;
  if (net2.proxyMode === "direct") await s.setProxy({ mode: "direct" });
  else if (net2.proxyMode === "custom" && net2.proxyUrl.trim()) await s.setProxy({ mode: "fixed_servers", proxyRules: net2.proxyUrl.trim() });
  else await s.setProxy({ mode: "system" });
  await s.closeAllConnections?.();
}
async function proxyAgentFor(wsUrl) {
  try {
    const probe = wsUrl.replace(/^wss:/, "https:").replace(/^ws:/, "http:");
    const rule = (await electron.session.defaultSession.resolveProxy(probe)).split(";")[0].trim();
    if (!rule || rule === "DIRECT") return void 0;
    const [kind, hostport] = rule.split(/\s+/);
    if (!hostport) return void 0;
    if (/^SOCKS/i.test(kind)) return new socksProxyAgent.SocksProxyAgent(`socks5h://${hostport}`);
    if (/^HTTPS/i.test(kind)) return new httpsProxyAgent.HttpsProxyAgent(`https://${hostport}`);
    return new httpsProxyAgent.HttpsProxyAgent(`http://${hostport}`);
  } catch {
    return void 0;
  }
}
const SYMBOLS = ["BTCUSDT", "ETHUSDT"];
const INTERVALS = ["1m", "5m", "15m", "30m", "1h", "4h", "1d", "1w"];
const ANALYSIS_FRAMES = ["15m", "1h", "4h", "1d"];
function isClosed(c, now) {
  return c.closed || now > c.closeTime;
}
function splitClosed(candles, now) {
  const closed = [];
  let provisional = null;
  for (const c of candles) {
    if (isClosed(c, now)) closed.push(c);
    else provisional = c;
  }
  return { closed, provisional };
}
function countGaps(candles, interval) {
  const ms = INTERVAL_MS[interval];
  let gaps = 0;
  for (let i = 1; i < candles.length; i++) {
    const d = candles[i].t - candles[i - 1].t;
    if (interval === "1w") {
      if (d > ms * 1.5) gaps += Math.round(d / ms) - 1;
    } else if (d > ms) gaps += Math.round(d / ms) - 1;
  }
  return gaps;
}
function upsertCandle(list, c, max = 1e3) {
  const last = list[list.length - 1];
  if (!last || c.t > last.t) {
    list.push(c);
    if (list.length > max) list.splice(0, list.length - max);
    return list;
  }
  if (c.t === last.t) {
    list[list.length - 1] = c;
    return list;
  }
  let lo = 0;
  let hi = list.length - 1;
  while (lo <= hi) {
    const mid = lo + hi >> 1;
    if (list[mid].t === c.t) {
      list[mid] = c;
      return list;
    }
    if (list[mid].t < c.t) lo = mid + 1;
    else hi = mid - 1;
  }
  list.splice(lo, 0, c);
  return list;
}
const log$7 = createLogger("ws");
class ReconnectingSocket {
  constructor(opts) {
    this.opts = opts;
  }
  ws = null;
  retries = 0;
  stopped = false;
  idleTimer = null;
  pingTimer = null;
  reconnectTimer = null;
  lastMessageAt = 0;
  start() {
    this.stopped = false;
    void this.connect();
  }
  async connect() {
    if (this.stopped) return;
    this.opts.onStatus("connecting", { retries: this.retries });
    const agent = await proxyAgentFor(this.opts.url);
    if (this.stopped) return;
    let ws;
    try {
      ws = new WebSocket(this.opts.url, { agent, handshakeTimeout: 15e3, perMessageDeflate: false });
    } catch (e) {
      this.fail(e.message);
      return;
    }
    this.ws = ws;
    ws.on("open", () => {
      this.retries = 0;
      this.lastMessageAt = Date.now();
      this.opts.onStatus("open", { retries: 0 });
      this.opts.onOpen?.((d) => ws.readyState === WebSocket.OPEN && ws.send(d));
      this.armIdle();
      if (this.opts.appPing) {
        this.pingTimer = setInterval(() => ws.readyState === WebSocket.OPEN && ws.send(this.opts.appPing.payload), this.opts.appPing.intervalMs);
      }
    });
    ws.on("message", (buf) => {
      this.lastMessageAt = Date.now();
      this.armIdle();
      const s = buf.toString();
      if (s === "pong") return;
      try {
        this.opts.onMessage(s);
      } catch (e) {
        log$7.warn(`${this.opts.name} 消息处理失败`, e);
      }
    });
    ws.on("ping", () => {
      this.lastMessageAt = Date.now();
    });
    ws.on("error", (err) => {
      log$7.warn(`${this.opts.name} 错误：${err.message}`);
      this.opts.onStatus("error", { retries: this.retries, error: err.message });
    });
    ws.on("close", (code) => {
      this.clearTimers();
      if (this.ws === ws) this.ws = null;
      if (this.stopped) return;
      this.fail(`连接关闭 (${code})`);
    });
  }
  fail(reason) {
    this.clearTimers();
    this.opts.onStatus("closed", { retries: this.retries, error: reason });
    if (this.stopped) return;
    const delay = Math.min(3e4, 1e3 * 2 ** Math.min(this.retries, 5)) + Math.random() * 600;
    this.retries++;
    this.reconnectTimer = setTimeout(() => void this.connect(), delay);
  }
  armIdle() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      log$7.warn(`${this.opts.name} 长时间无数据，重连`);
      this.ws?.terminate();
    }, this.opts.idleTimeoutMs ?? 3e4);
  }
  clearTimers() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    if (this.pingTimer) clearInterval(this.pingTimer);
    this.idleTimer = null;
    this.pingTimer = null;
  }
  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(data);
  }
  stop() {
    this.stopped = true;
    this.clearTimers();
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    this.ws?.removeAllListeners();
    try {
      this.ws?.terminate();
    } catch {
    }
    this.ws = null;
  }
}
const num = (v) => {
  const n = typeof v === "number" ? v : parseFloat(String(v));
  return isFinite(n) ? n : 0;
};
class BinanceAdapter {
  constructor(cfg) {
    this.cfg = cfg;
  }
  id = "binance";
  rest(market) {
    return market === "spot" ? this.cfg.binanceSpotRest.replace(/\/+$/, "") : this.cfg.binanceFutRest.replace(/\/+$/, "");
  }
  sourceLabel(market) {
    return market === "spot" ? `Binance Spot (${this.cfg.binanceSpotRest})` : `Binance USDⓈ-M Futures (${this.cfg.binanceFutRest})`;
  }
  async serverTimeOffset() {
    const t0 = Date.now();
    const r2 = await httpJson(`${this.rest("spot")}/api/v3/time`, { timeoutMs: 8e3 });
    const t1 = Date.now();
    return r2.serverTime - (t0 + t1) / 2;
  }
  async fetchKlines(symbol, market, interval, limit, now) {
    const path2 = market === "spot" ? "/api/v3/klines" : "/fapi/v1/klines";
    const rows = await httpJson(`${this.rest(market)}${path2}?symbol=${symbol}&interval=${interval}&limit=${Math.min(limit, 1e3)}`, { timeoutMs: 12e3 });
    return rows.map((r2) => ({
      t: r2[0],
      o: num(r2[1]),
      h: num(r2[2]),
      l: num(r2[3]),
      c: num(r2[4]),
      v: num(r2[5]),
      closeTime: r2[6],
      qv: num(r2[7]),
      closed: r2[6] < now
    }));
  }
  async fetchTicker(symbol, market) {
    const path2 = market === "spot" ? "/api/v3/ticker/24hr" : "/fapi/v1/ticker/24hr";
    const d = await httpJson(`${this.rest(market)}${path2}?symbol=${symbol}`, { timeoutMs: 8e3 });
    return {
      last: num(d.lastPrice),
      open24: num(d.openPrice),
      changePct: num(d.priceChangePercent),
      high24: num(d.highPrice),
      low24: num(d.lowPrice),
      vol24: num(d.volume),
      quoteVol24: num(d.quoteVolume),
      updatedAt: Number(d.closeTime) || Date.now()
    };
  }
  async fetchDerivatives(symbol) {
    const base = this.rest("perp");
    const [pi, oi] = await Promise.allSettled([
      httpJson(`${base}/fapi/v1/premiumIndex?symbol=${symbol}`, { timeoutMs: 8e3 }),
      httpJson(`${base}/fapi/v1/openInterest?symbol=${symbol}`, { timeoutMs: 8e3 })
    ]);
    const out = {};
    if (pi.status === "fulfilled") {
      out.markPrice = num(pi.value.markPrice);
      out.fundingRate = num(pi.value.lastFundingRate);
      out.nextFundingTime = pi.value.nextFundingTime;
    }
    if (oi.status === "fulfilled") {
      out.openInterest = num(oi.value.openInterest);
      out.oiUpdatedAt = oi.value.time;
      if (out.markPrice) out.openInterestValue = out.openInterest * out.markPrice;
    }
    return out;
  }
  stream(market, symbols, intervals, h) {
    const streams = [];
    for (const s of symbols) {
      const l = s.toLowerCase();
      streams.push(`${l}@ticker`);
      for (const iv of intervals) streams.push(`${l}@kline_${iv}`);
      if (market === "perp") streams.push(`${l}@markPrice@1s`);
    }
    const base = (market === "spot" ? this.cfg.binanceSpotWs : this.cfg.binanceFutWs).replace(/\/+$/, "");
    const url = `${base}/stream?streams=${streams.join("/")}`;
    const sock = new ReconnectingSocket({
      name: `binance-${market}`,
      url,
      idleTimeoutMs: 3e4,
      onStatus: (st, info) => h.onStatus(st, info.retries, info.error),
      onMessage: (raw) => {
        const msg = JSON.parse(raw);
        const d = msg.data;
        if (!d) return;
        const sym = String(d.s ?? "").toUpperCase();
        if (d.e === "24hrTicker") {
          h.onTicker(sym, {
            last: num(d.c),
            open24: num(d.o),
            changePct: num(d.P),
            high24: num(d.h),
            low24: num(d.l),
            vol24: num(d.v),
            quoteVol24: num(d.q),
            updatedAt: Number(d.E) || Date.now()
          });
        } else if (d.e === "kline") {
          const k = d.k;
          h.onKline(sym, k.i, {
            t: Number(k.t),
            o: num(k.o),
            h: num(k.h),
            l: num(k.l),
            c: num(k.c),
            v: num(k.v),
            qv: num(k.q),
            closeTime: Number(k.T),
            closed: !!k.x
          });
        } else if (d.e === "markPriceUpdate") {
          h.onDerivs(sym, { markPrice: num(d.p), fundingRate: num(d.r), nextFundingTime: Number(d.T) });
        }
      }
    });
    sock.start();
    return { stop: () => sock.stop(), lastMessageAt: () => sock.lastMessageAt };
  }
}
const BAR = { "1m": "1m", "5m": "5m", "15m": "15m", "30m": "30m", "1h": "1H", "4h": "4H", "1d": "1Dutc", "1w": "1Wutc" };
const BAR_REV = Object.fromEntries(Object.entries(BAR).map(([k, v]) => [v, k]));
const instId = (s, m) => `${s.replace("USDT", "")}-USDT${m === "perp" ? "-SWAP" : ""}`;
const symOf = (inst) => inst.replace(/-SWAP$/, "").replace("-", "");
class OkxAdapter {
  constructor(cfg) {
    this.cfg = cfg;
  }
  id = "okx";
  get rest() {
    return this.cfg.okxRest.replace(/\/+$/, "");
  }
  sourceLabel(market) {
    return `OKX ${market === "spot" ? "Spot" : "Perpetual Swap"} (${this.cfg.okxRest})`;
  }
  async get(path2) {
    const r2 = await httpJson(`${this.rest}${path2}`, { timeoutMs: 1e4 });
    if (r2.code !== "0") throw new Error(`OKX 错误 ${r2.code}: ${r2.msg}`);
    return r2.data;
  }
  async serverTimeOffset() {
    const t0 = Date.now();
    const d = await this.get("/api/v5/public/time");
    return num(d[0].ts) - (t0 + Date.now()) / 2;
  }
  async fetchKlines(symbol, market, interval, limit, now) {
    const id = instId(symbol, market);
    const out = [];
    let after = "";
    while (out.length < limit) {
      const n = Math.min(300, limit - out.length);
      const path2 = after ? `/api/v5/market/history-candles?instId=${id}&bar=${BAR[interval]}&limit=${Math.min(n, 100)}&after=${after}` : `/api/v5/market/candles?instId=${id}&bar=${BAR[interval]}&limit=${n}`;
      const rows = await this.get(path2);
      if (!rows.length) break;
      for (const r2 of rows) {
        const t = num(r2[0]);
        out.push({ t, o: num(r2[1]), h: num(r2[2]), l: num(r2[3]), c: num(r2[4]), v: num(r2[6] ?? r2[5]), qv: num(r2[7]), closeTime: t + INTERVAL_MS[interval] - 1, closed: r2[8] === "1" || t + INTERVAL_MS[interval] <= now });
      }
      after = rows[rows.length - 1][0];
      if (rows.length < Math.min(n, after ? 100 : 300)) break;
    }
    return out.sort((a, b) => a.t - b.t).filter((c, i, arr) => i === 0 || c.t !== arr[i - 1].t);
  }
  async fetchTicker(symbol, market) {
    const [d] = await this.get(`/api/v5/market/ticker?instId=${instId(symbol, market)}`);
    return this.mapTicker(d, market);
  }
  mapTicker(d, market) {
    const last = num(d.last);
    const open = num(d.open24h ?? d.sodUtc0);
    const baseVol = market === "perp" ? num(d.volCcy24h) : num(d.vol24h);
    return {
      last,
      open24: open,
      changePct: open ? (last - open) / open * 100 : 0,
      high24: num(d.high24h),
      low24: num(d.low24h),
      vol24: baseVol,
      quoteVol24: market === "perp" ? baseVol * last : num(d.volCcy24h),
      updatedAt: num(d.ts) || Date.now()
    };
  }
  async fetchDerivatives(symbol) {
    const id = instId(symbol, "perp");
    const [fr, oi, mk] = await Promise.allSettled([
      this.get(`/api/v5/public/funding-rate?instId=${id}`),
      this.get(`/api/v5/public/open-interest?instType=SWAP&instId=${id}`),
      this.get(`/api/v5/public/mark-price?instType=SWAP&instId=${id}`)
    ]);
    const out = {};
    if (fr.status === "fulfilled" && fr.value[0]) {
      out.fundingRate = num(fr.value[0].fundingRate);
      out.nextFundingTime = num(fr.value[0].fundingTime);
    }
    if (mk.status === "fulfilled" && mk.value[0]) out.markPrice = num(mk.value[0].markPx);
    if (oi.status === "fulfilled" && oi.value[0]) {
      out.openInterest = num(oi.value[0].oiCcy);
      out.oiUpdatedAt = num(oi.value[0].ts);
      if (out.markPrice) out.openInterestValue = out.openInterest * out.markPrice;
    }
    return out;
  }
  stream(market, symbols, intervals, h) {
    const base = this.cfg.okxWs.replace(/\/+$/, "");
    let pubOpen = false;
    let bizOpen = false;
    const status = (which, st, retries, error) => {
      if (which === "pub") pubOpen = st === "open";
      else bizOpen = st === "open";
      h.onStatus(pubOpen && bizOpen ? "open" : st === "open" ? "connecting" : st, retries, error);
    };
    const pubArgs = symbols.flatMap((s) => {
      const a = [{ channel: "tickers", instId: instId(s, market) }];
      if (market === "perp") a.push({ channel: "funding-rate", instId: instId(s, market) }, { channel: "mark-price", instId: instId(s, market) });
      return a;
    });
    const bizArgs = symbols.flatMap((s) => intervals.map((iv) => ({ channel: `candle${BAR[iv]}`, instId: instId(s, market) })));
    const onMsg = (raw) => {
      const msg = JSON.parse(raw);
      if (!msg.arg || !msg.data) return;
      const sym = symOf(msg.arg.instId);
      const ch = msg.arg.channel;
      if (ch === "tickers") for (const d of msg.data) h.onTicker(sym, this.mapTicker(d, market));
      else if (ch === "funding-rate") for (const d of msg.data) h.onDerivs(sym, { fundingRate: num(d.fundingRate), nextFundingTime: num(d.fundingTime) });
      else if (ch === "mark-price") for (const d of msg.data) h.onDerivs(sym, { markPrice: num(d.markPx) });
      else if (ch.startsWith("candle")) {
        const iv = BAR_REV[ch.slice(6)];
        if (!iv) return;
        for (const r2 of msg.data) {
          const t = num(r2[0]);
          h.onKline(sym, iv, { t, o: num(r2[1]), h: num(r2[2]), l: num(r2[3]), c: num(r2[4]), v: num(r2[6] ?? r2[5]), qv: num(r2[7]), closeTime: t + INTERVAL_MS[iv] - 1, closed: r2[8] === "1" });
        }
      }
    };
    const mk = (path2, args, which) => new ReconnectingSocket({
      name: `okx-${which}-${market}`,
      url: `${base}/${path2}`,
      idleTimeoutMs: 4e4,
      appPing: { intervalMs: 2e4, payload: "ping" },
      onOpen: (send) => send(JSON.stringify({ op: "subscribe", args })),
      onMessage: onMsg,
      onStatus: (st, info) => status(which, st, info.retries, info.error)
    });
    const pub = mk("public", pubArgs, "pub");
    const biz = mk("business", bizArgs, "biz");
    pub.start();
    biz.start();
    return {
      stop: () => {
        pub.stop();
        biz.stop();
      },
      lastMessageAt: () => Math.max(pub.lastMessageAt, biz.lastMessageAt)
    };
  }
}
const log$6 = createLogger("market");
const MARKETS = ["spot", "perp"];
const HISTORY = 500;
const key = (s, m, iv) => `${s}|${m}|${iv}`;
const tkey = (s, m) => `${s}|${m}`;
class MarketService extends events.EventEmitter {
  constructor(settings) {
    super();
    this.settings = settings;
    this.setMaxListeners(50);
  }
  adapter;
  candles = /* @__PURE__ */ new Map();
  loaded = /* @__PURE__ */ new Set();
  loading = /* @__PURE__ */ new Map();
  tickers = /* @__PURE__ */ new Map();
  conns = /* @__PURE__ */ new Map();
  streams = /* @__PURE__ */ new Map();
  priceHist = /* @__PURE__ */ new Map();
  emittedClose = /* @__PURE__ */ new Set();
  offset = 0;
  timers = [];
  tickerTimer = null;
  visible = true;
  watchKey = null;
  candleEmitTimer = null;
  pendingCandle = null;
  now() {
    return Date.now() + this.offset;
  }
  sources(market) {
    return [this.adapter.sourceLabel(market)];
  }
  async start() {
    const cfg = this.settings.get().market;
    this.adapter = cfg.exchange === "okx" ? new OkxAdapter(cfg) : new BinanceAdapter(cfg);
    log$6.info(`启动行情：${cfg.exchange}`);
    try {
      this.offset = await this.adapter.serverTimeOffset();
      log$6.info(`服务器时间偏差 ${Math.round(this.offset)}ms`);
    } catch (e) {
      log$6.warn("获取服务器时间失败，使用本地时间", e);
    }
    for (const m of MARKETS) {
      this.conns.set(m, { exchange: this.adapter.id, market: m, status: "connecting", lastMessageAt: 0, retries: 0 });
      this.startStream(m);
    }
    await Promise.allSettled(
      SYMBOLS.flatMap((s) => MARKETS.map((m) => this.refreshTicker(s, m)))
    );
    void this.pollDerivatives();
    const am = this.settings.get().analysis.marketType;
    void Promise.allSettled(SYMBOLS.flatMap((s) => ANALYSIS_FRAMES.map((iv) => this.ensureLoaded(s, am, iv))));
    this.timers.push(setInterval(() => void this.pollDerivatives(), 3e4));
    this.timers.push(setInterval(() => this.watchdog(), 5e3));
    this.emitConns();
  }
  stop() {
    for (const s of this.streams.values()) s.stop();
    this.streams.clear();
    for (const t of this.timers) clearInterval(t);
    this.timers = [];
    if (this.tickerTimer) clearTimeout(this.tickerTimer);
    this.tickerTimer = null;
  }
  async restart() {
    this.stop();
    this.candles.clear();
    this.loaded.clear();
    this.loading.clear();
    this.tickers.clear();
    this.priceHist.clear();
    await this.start();
  }
  setVisible(v) {
    this.visible = v;
  }
  startStream(market) {
    const handle = this.adapter.stream(market, SYMBOLS, INTERVALS, {
      onTicker: (s, t) => this.mergeTicker(s, market, t),
      onKline: (s, iv, c) => this.onKline(s, market, iv, c),
      onDerivs: (s, d) => this.mergeTicker(s, market, d, false),
      onStatus: (status, retries, error) => {
        const prev = this.conns.get(market);
        const st = { exchange: this.adapter.id, market, status, retries, error, lastMessageAt: prev?.lastMessageAt ?? 0 };
        this.conns.set(market, st);
        this.emitConns();
        if (status === "open" && prev && prev.status !== "open" && prev.lastMessageAt > 0) void this.backfill(market);
        this.emit("conn", st);
      }
    });
    this.streams.set(market, handle);
  }
  emitConns() {
    this.emit("conns", [...this.conns.values()]);
  }
  watchdog() {
    const now = Date.now();
    const stale = this.settings.get().market.staleSeconds * 1e3;
    for (const m of MARKETS) {
      const h = this.streams.get(m);
      const c = this.conns.get(m);
      if (h && c) {
        c.lastMessageAt = h.lastMessageAt();
        if (now - c.lastMessageAt > 15e3) for (const s of SYMBOLS) void this.refreshTicker(s, m);
      }
    }
    for (const t of this.tickers.values()) {
      if (now - t.updatedAt > stale) this.emit("stale", t);
    }
    this.emitConns();
  }
  async pollDerivatives() {
    for (const s of SYMBOLS) {
      try {
        const d = await this.adapter.fetchDerivatives(s);
        this.mergeTicker(s, "perp", d, false);
      } catch (e) {
        log$6.warn(`获取 ${s} 资金费率/持仓量失败：${e.message}`);
      }
    }
  }
  async refreshTicker(s, m) {
    try {
      const t = await this.adapter.fetchTicker(s, m);
      this.mergeTicker(s, m, t);
    } catch (e) {
      log$6.warn(`REST 行情 ${s} ${m} 失败：${e.message}`);
    }
  }
  mergeTicker(s, m, patch, isPrice = true) {
    if (!SYMBOLS.includes(s)) return;
    const k = tkey(s, m);
    const prev = this.tickers.get(k);
    const base = prev ?? {
      symbol: s,
      market: m,
      exchange: this.adapter.id,
      last: 0,
      open24: 0,
      changePct: 0,
      high24: 0,
      low24: 0,
      vol24: 0,
      quoteVol24: 0,
      updatedAt: 0
    };
    const next = { ...base, ...patch, symbol: s, market: m, exchange: this.adapter.id };
    if (!isPrice) next.updatedAt = base.updatedAt;
    if (isPrice && next.last > 0) this.checkAnomaly(next);
    this.tickers.set(k, next);
    this.scheduleTickers();
  }
  checkAnomaly(t) {
    const cfg = this.settings.get().market;
    const k = tkey(t.symbol, t.market);
    const now = Date.now();
    const arr = this.priceHist.get(k) ?? [];
    arr.push({ t: now, p: t.last });
    while (arr.length && now - arr[0].t > cfg.anomalyWindowSec * 1e3) arr.shift();
    this.priceHist.set(k, arr);
    if (arr.length < 3) return;
    const pct = (t.last - arr[0].p) / arr[0].p * 100;
    if (Math.abs(pct) >= cfg.anomalyPct) {
      t.anomaly = { pct, windowSec: cfg.anomalyWindowSec, at: now };
      this.emit("anomaly", t);
    } else if (t.anomaly && now - t.anomaly.at > 12e4) t.anomaly = null;
  }
  scheduleTickers() {
    if (this.tickerTimer) return;
    this.tickerTimer = setTimeout(
      () => {
        this.tickerTimer = null;
        this.emit("tickers", [...this.tickers.values()]);
      },
      this.visible ? 250 : 2e3
    );
  }
  onKline(s, m, iv, c) {
    if (!SYMBOLS.includes(s)) return;
    const k = key(s, m, iv);
    const list = this.candles.get(k) ?? [];
    upsertCandle(list, c, 1500);
    this.candles.set(k, list);
    const ev = { symbol: s, market: m, interval: iv, candle: c };
    if (c.closed) {
      const ck = `${k}|${c.t}`;
      if (!this.emittedClose.has(ck)) {
        this.emittedClose.add(ck);
        if (this.emittedClose.size > 5e3) this.emittedClose.clear();
        this.emit("kline-closed", ev);
      }
    }
    if (k === this.watchKey) {
      this.pendingCandle = ev;
      if (c.closed) this.flushCandle();
      else if (!this.candleEmitTimer) this.candleEmitTimer = setTimeout(() => this.flushCandle(), this.visible ? 250 : 2e3);
    }
  }
  flushCandle() {
    if (this.candleEmitTimer) clearTimeout(this.candleEmitTimer);
    this.candleEmitTimer = null;
    if (this.pendingCandle) this.emit("candle", this.pendingCandle);
    this.pendingCandle = null;
  }
  async ensureLoaded(s, m, iv, force = false) {
    const k = key(s, m, iv);
    if (this.loaded.has(k) && !force) return;
    const pending = this.loading.get(k);
    if (pending) return pending;
    const p = (async () => {
      try {
        const rest = await this.adapter.fetchKlines(s, m, iv, HISTORY, this.now());
        const existing = this.candles.get(k) ?? [];
        const lastRest = rest.length ? rest[rest.length - 1].t : 0;
        const merged = [...rest, ...existing.filter((c) => c.t > lastRest)];
        this.candles.set(k, merged);
        this.loaded.add(k);
      } catch (e) {
        log$6.warn(`加载 K 线 ${k} 失败：${e.message}`);
        throw e;
      } finally {
        this.loading.delete(k);
      }
    })();
    this.loading.set(k, p);
    return p;
  }
  /** 补齐最近若干根（重连或分析前） */
  async topUp(s, m, iv, n = 6) {
    const k = key(s, m, iv);
    if (!this.loaded.has(k)) return this.ensureLoaded(s, m, iv);
    const rows = await this.adapter.fetchKlines(s, m, iv, n, this.now());
    const list = this.candles.get(k) ?? [];
    for (const c of rows) upsertCandle(list, c, 1500);
    this.candles.set(k, list);
  }
  async backfill(m) {
    log$6.info(`重连后回补 ${m}`);
    const keys = [...this.loaded].filter((k) => k.split("|")[1] === m);
    for (const k of keys) {
      const [s, , iv] = k.split("|");
      try {
        await this.topUp(s, m, iv, 100);
      } catch {
      }
    }
  }
  /** 分析前刷新必要行情 */
  async refreshForAnalysis(s, m) {
    await Promise.all(ANALYSIS_FRAMES.map((iv) => this.loaded.has(key(s, m, iv)) ? this.topUp(s, m, iv, 4) : this.ensureLoaded(s, m, iv)));
    await this.refreshTicker(s, m);
    if (m === "perp") {
      try {
        this.mergeTicker(s, "perp", await this.adapter.fetchDerivatives(s), false);
      } catch {
      }
    }
  }
  async getCandles(s, m, iv) {
    await this.ensureLoaded(s, m, iv);
    const now = this.now();
    return (this.candles.get(key(s, m, iv)) ?? []).map((c) => c.closed || now <= c.closeTime ? c : { ...c, closed: true });
  }
  candlesSync(s, m, iv) {
    return this.candles.get(key(s, m, iv)) ?? [];
  }
  framesSync(s, m) {
    const out = {};
    for (const iv of ANALYSIS_FRAMES) out[iv] = this.candlesSync(s, m, iv);
    return out;
  }
  ticker(s, m) {
    return this.tickers.get(tkey(s, m)) ?? null;
  }
  snapshot() {
    return { tickers: [...this.tickers.values()], conns: [...this.conns.values()] };
  }
  async watch(s, m, iv) {
    this.watchKey = key(s, m, iv);
    await this.ensureLoaded(s, m, iv);
  }
  isOnline() {
    return [...this.conns.values()].some((c) => c.status === "open");
  }
}
function fnv1a(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}
function canonicalUrl(u) {
  try {
    const url = new URL(u);
    url.hash = "";
    for (const k of [...url.searchParams.keys()]) if (/^(utm_|ref|source|fbclid|gclid)/i.test(k)) url.searchParams.delete(k);
    return (url.host.replace(/^www\./, "") + url.pathname.replace(/\/+$/, "") + (url.search || "")).toLowerCase();
  } catch {
    return u.trim().toLowerCase();
  }
}
function stripHtml(s) {
  return s.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d))).replace(/\s+/g, " ").trim();
}
function detectCoins(text2) {
  const t = text2.toLowerCase();
  const out = /* @__PURE__ */ new Set();
  if (/\b(bitcoin|btc)\b|比特币/.test(t)) out.add("BTC");
  if (/\b(ethereum|ether|eth)\b|以太坊/.test(t)) out.add("ETH");
  if (/\b(crypto|cryptocurrenc|stablecoin|defi|blockchain|token|altcoin|digital asset)/.test(t) || /加密/.test(t)) out.add("CRYPTO");
  if (/\b(fed|fomc|federal reserve|inflation|cpi|pce|payroll|jobs|treasury yield|tariff|gdp|recession|interest rate)/.test(t)) out.add("MACRO");
  return [...out];
}
const CATEGORY_RULES = [
  ["security", /\b(hack|hacked|exploit|drained|breach|stolen|vulnerabilit|attacker|phishing|rug ?pull)\b|黑客|被盗|漏洞/i],
  ["fed", /\b(federal reserve|fomc|powell|rate cut|rate hike|interest rates?|monetary policy|fed (chair|governor|official|minutes))\b|美联储|加息|降息/i],
  ["macro_data", /\b(cpi|pce|ppi|nonfarm|non-farm|payrolls?|jobs report|unemployment|consumer price|gdp|employment situation|jolts|inflation data)\b|非农|通胀/i],
  ["etf", /\betfs?\b|exchange-traded fund/i],
  ["regulation", /\b(sec|cftc|regulat\w*|lawsuit|sued?|legislation|bill|congress|senate|mica|ban(s|ned)?|court|judge|enforcement|compliance|stablecoin act)\b|监管/i],
  ["exchange", /\b(binance|coinbase|kraken|okx|bybit|bitfinex|listing|delist\w*|withdrawals?|deposits? (halt|suspend)\w*)\b|交易所/i],
  ["institutional", /\b(blackrock|fidelity|microstrategy|strategy inc|treasury reserve|institutional|hedge fund|asset manager|corporate treasury|buys? \$?[\d.,]+ ?(million|billion)?\s*(in )?(bitcoin|btc|ether|eth))\b|机构/i],
  ["onchain", /\b(on-chain|onchain|whale|hashrate|staking|validator|mainnet|hard fork|upgrade|layer 2|gas fees?|miners?)\b|链上/i],
  ["geopolitical", /\b(war|sanction\w*|tariffs?|missile|conflict|geopolitic\w*|bank (failure|run)|default|sovereign|crisis|shutdown)\b|地缘|关税/i],
  ["market", /\b(price|rall(y|ies)|surge\w*|plunge\w*|tumble\w*|liquidat\w*|sell-?off|all-time high|ath|volatility|options expiry)\b|价格|行情/i]
];
function classifyCategory(text2) {
  for (const [cat, re] of CATEGORY_RULES) if (re.test(text2)) return cat;
  return "other";
}
const BULL = [
  [/\bapprov(e|ed|al|es)\b/i, "获批/批准"],
  [/\binflows?\b/i, "资金流入"],
  [/\b(surge|soar|jump|rall(y|ies)|climb)\w*\b/i, "价格上涨描述"],
  [/\b(record|all-time) high\b/i, "创新高"],
  [/\b(adopt\w*|accumulat\w*|buys?|bought|purchase\w*)\b/i, "买入/采用"],
  [/\brate cuts?\b|降息/i, "降息"],
  [/\b(cooler|softer|lower)[- ]than[- ]expected\b/i, "数据低于预期（通胀降温）"],
  [/\b(launch\w*|partnership|integrat\w*)\b/i, "新产品/合作"],
  [/\b(dismiss\w*|drop(s|ped)? (the )?(case|lawsuit)|settle\w*)\b/i, "诉讼撤销/和解"]
];
const BEAR = [
  [/\b(hack\w*|exploit\w*|drained|stolen|breach)\b|黑客|被盗/i, "安全事件"],
  [/\boutflows?\b/i, "资金流出"],
  [/\b(plunge|crash|tumble|slump|sink|drop|fall|slide)\w*\b/i, "价格下跌描述"],
  [/\b(ban(s|ned)?|crackdown)\b/i, "禁令/打击"],
  [/\b(lawsuit|sue[sd]?|charge[sd]?|indict\w*|investigat\w*|subpoena)\b/i, "诉讼/调查"],
  [/\brate hikes?\b|加息/i, "加息"],
  [/\b(hotter|higher|stronger)[- ]than[- ]expected\b/i, "数据高于预期（通胀/紧缩压力）"],
  [/\b(reject\w*|den(y|ied|ies))\b/i, "被拒"],
  [/\b(liquidat\w*|sell-?off)\b/i, "清算/抛售"],
  [/\b(halt\w*|suspend\w*|insolven\w*|bankrupt\w*)\b/i, "暂停/破产"],
  [/\b(sanction\w*|tariffs?|war)\b/i, "制裁/关税/冲突"]
];
function analyzeSentiment(text2, category) {
  const bull = BULL.filter(([re]) => re.test(text2)).map(([, l]) => l);
  const bear = BEAR.filter(([re]) => re.test(text2)).map(([, l]) => l);
  const basis = [];
  if (bull.length) basis.push("偏多关键词：" + bull.join("、"));
  if (bear.length) basis.push("偏空关键词：" + bear.join("、"));
  if (bull.length && bear.length) {
    basis.push("多空关键词并存");
    return { sentiment: "uncertain", basis };
  }
  if (bull.length) return { sentiment: "bullish", basis };
  if (bear.length) return { sentiment: "bearish", basis };
  if (category === "fed" || category === "macro_data" || category === "regulation" || category === "geopolitical") {
    basis.push("事件类别对价格方向的影响取决于具体数值/措辞，规则无法判定");
    return { sentiment: "uncertain", basis };
  }
  basis.push("未命中方向性关键词");
  return { sentiment: "neutral", basis };
}
function classifyNature(text2, tier) {
  if (tier === 1) return "fact";
  if (/\?$|\b(analyst|analysts|could|might|may|predict\w*|forecast\w*|opinion|op-ed|commentary|why|believes?|expects?|outlook|price prediction|bull case|bear case)\b/i.test(text2)) return "opinion";
  return "report";
}
function estimateImpact(text2, category, tier, coins) {
  const big = /\b(billion|\$\d{3,} ?million|emergency|record|historic|landmark)\b/i.test(text2);
  if (category === "fed" || category === "macro_data") return tier === 1 || big ? "high" : "medium";
  if (category === "security") return big ? "high" : "medium";
  if (category === "etf" || category === "regulation") return big || /\b(approv|reject|sec)\b/i.test(text2) ? "high" : "medium";
  if (category === "geopolitical") return big ? "high" : "medium";
  if (category === "institutional" || category === "exchange") return big ? "medium" : "low";
  if (coins.includes("BTC") || coins.includes("ETH")) return "low";
  return "low";
}
function enrich(raw, fetchedAt) {
  const text2 = `${raw.title}. ${raw.summary}`;
  const coins = detectCoins(text2);
  const category = classifyCategory(text2);
  const { sentiment, basis } = analyzeSentiment(raw.title + " " + raw.summary.slice(0, 280), category);
  return {
    id: fnv1a(canonicalUrl(raw.url) || raw.title),
    title: raw.title.trim(),
    summary: raw.summary.slice(0, 420),
    source: raw.source,
    sourceDomain: raw.sourceDomain,
    sourceTier: raw.tier,
    url: raw.url,
    publishedAt: raw.publishedAt,
    fetchedAt,
    coins,
    category,
    impact: estimateImpact(text2, category, raw.tier, coins),
    sentiment,
    sentimentBasis: basis,
    nature: classifyNature(raw.title, raw.tier),
    verification: raw.tier === 1 ? "official" : "unverified",
    corroboratedBy: [],
    duplicates: 0,
    provider: raw.provider
  };
}
const STOP = new Set(
  "a an the of to in on for and or with by at from as is are was were be been its it this that after over amid into new says say report reports update live price us u.s.".split(" ")
);
function titleTokens(t) {
  return new Set(
    t.toLowerCase().replace(/[^a-z0-9一-龥$%. ]+/g, " ").split(/\s+/).map((w) => w.replace(/\.$/, "")).filter((w) => w.length > 1 && !STOP.has(w))
  );
}
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}
function dedupe(items, threshold = 0.5) {
  const sorted = [...items].sort((a, b) => a.sourceTier - b.sourceTier || a.publishedAt - b.publishedAt);
  const out = [];
  for (const it of sorted) {
    const tok = titleTokens(it.title);
    const url = canonicalUrl(it.url);
    const dup = out.find(
      (o) => o._url === url || Math.abs(o.publishedAt - it.publishedAt) < 36 * 36e5 && jaccard(o._tok, tok) >= threshold
    );
    if (dup) {
      dup.duplicates++;
      if (it.sourceDomain !== dup.sourceDomain && !dup.corroboratedBy.includes(it.sourceDomain)) dup.corroboratedBy.push(it.sourceDomain);
      if (it.impact === "high") dup.impact = "high";
      continue;
    }
    out.push({ ...it, corroboratedBy: [...it.corroboratedBy], _tok: tok, _url: url });
  }
  return out.map(({ _tok, _url, ...rest }) => verify(rest)).sort((a, b) => b.publishedAt - a.publishedAt);
}
function verify(it) {
  if (it.sourceTier === 1) return { ...it, verification: "official" };
  const independent = /* @__PURE__ */ new Set([it.sourceDomain, ...it.corroboratedBy]);
  if (it.sourceTier <= 2 && independent.size >= 2) return { ...it, verification: "verified" };
  return { ...it, verification: "unverified" };
}
const CATEGORY_LABEL = {
  fed: "美联储",
  macro_data: "宏观数据",
  etf: "ETF",
  institutional: "机构资金",
  regulation: "监管",
  exchange: "交易所",
  onchain: "链上",
  security: "安全风险",
  geopolitical: "国际风险",
  market: "市场",
  other: "其他"
};
const SENTIMENT_LABEL = {
  bullish: "利多",
  bearish: "利空",
  neutral: "中性",
  uncertain: "不确定"
};
function selectForAnalysis(items, symbolCoin, now, windowHours, max) {
  const since = now - windowHours * 36e5;
  const rank = (n) => (n.impact === "high" ? 30 : n.impact === "medium" ? 15 : 0) + (n.verification === "official" ? 20 : n.verification === "verified" ? 12 : 0) + (n.coins.includes(symbolCoin) ? 15 : 0) + (n.publishedAt - since) / 36e5;
  return items.filter((n) => n.publishedAt >= since && n.publishedAt <= now + 3e5).filter((n) => n.coins.includes(symbolCoin) || n.coins.includes("CRYPTO") || n.coins.includes("MACRO") || n.category === "fed" || n.category === "macro_data").sort((a, b) => rank(b) - rank(a)).slice(0, max);
}
const OFFICIAL = /(^|\.)((federalreserve|sec|bls|bea|treasury|cftc|whitehouse|ecb\.europa|bankofengland)\.(gov|eu|co\.uk)|ecb\.europa\.eu|bankofengland\.co\.uk)$/i;
const TRUSTED = /(^|\.)(reuters\.com|bloomberg\.com|wsj\.com|ft\.com|cnbc\.com|apnews\.com|coindesk\.com|theblock\.co|decrypt\.co|cointelegraph\.com|blockworks\.co|dlnews\.com|axios\.com|nytimes\.com|economist\.com|marketwatch\.com)$/i;
function tierOfDomain(domain, fallback = 3) {
  if (OFFICIAL.test(domain) || /\.gov$/i.test(domain)) return 1;
  if (TRUSTED.test(domain)) return 2;
  return fallback;
}
function domainOf(u) {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}
const parseTime = (v) => {
  if (!v) return 0;
  const t = Date.parse(String(v));
  return isFinite(t) ? t : 0;
};
const text = (v) => {
  if (v === null || v === void 0) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (typeof v === "object") {
    const o = v;
    if ("#text" in o) return String(o["#text"]);
    if ("@_href" in o) return String(o["@_href"]);
  }
  return "";
};
const parser = new fastXmlParser.XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_", processEntities: true, htmlEntities: true });
async function fetchRss(p, signal) {
  const xml = await httpText(p.url, { timeoutMs: 15e3, signal, headers: { Accept: "application/rss+xml, application/atom+xml, application/xml, text/xml" } });
  const doc = parser.parse(xml);
  const channel = doc?.rss?.channel ?? doc?.["rdf:RDF"] ?? null;
  const entries = channel ? [].concat(channel.item ?? doc?.["rdf:RDF"]?.item ?? []) : [].concat(doc?.feed?.entry ?? []);
  return entries.slice(0, 60).map((e) => {
    let link = text(e.link);
    if (Array.isArray(e.link)) link = text(e.link.find((l) => l?.["@_rel"] === "alternate" || !l?.["@_rel"]) ?? e.link[0]);
    if (!link) link = text(e.guid);
    const domain = domainOf(link) || domainOf(p.url);
    return {
      title: stripHtml(text(e.title)),
      summary: stripHtml(text(e.description ?? e.summary ?? e["content:encoded"] ?? e.content)).slice(0, 600),
      url: link,
      publishedAt: parseTime(e.pubDate ?? e.published ?? e.updated ?? e["dc:date"]),
      source: p.name,
      sourceDomain: domain,
      tier: p.tier === 1 ? 1 : tierOfDomain(domain, p.tier),
      provider: p.id
    };
  });
}
async function fetchCryptoPanic(p, key2, signal) {
  const sep = p.url.includes("?") ? "&" : "?";
  const url = `${p.url}${sep}auth_token=${encodeURIComponent(key2)}&currencies=BTC,ETH&kind=news&public=true`;
  const d = await httpJson(url, { timeoutMs: 15e3, signal });
  return (d.results ?? []).slice(0, 60).map((r2) => {
    const link = r2.original_url ?? r2.url ?? "";
    const domain = r2.source?.domain ?? domainOf(link);
    return {
      title: stripHtml(String(r2.title ?? "")),
      summary: stripHtml(String(r2.description ?? r2.metadata?.description ?? "")),
      url: link,
      publishedAt: parseTime(r2.published_at ?? r2.created_at),
      source: r2.source?.title ?? domain ?? "CryptoPanic",
      sourceDomain: domain,
      tier: tierOfDomain(domain, 3),
      provider: p.id
    };
  });
}
async function fetchNewsApi(p, key2, signal) {
  const q = encodeURIComponent('bitcoin OR ethereum OR "federal reserve" OR FOMC OR CPI OR "crypto ETF" OR "SEC crypto"');
  const url = `${p.url}?q=${q}&language=en&sortBy=publishedAt&pageSize=50`;
  const d = await httpJson(url, { timeoutMs: 15e3, signal, headers: { "X-Api-Key": key2 } });
  if (d.status && d.status !== "ok") throw new Error(d.message ?? "NewsAPI 错误");
  return (d.articles ?? []).map((a) => {
    const domain = domainOf(a.url ?? "");
    return {
      title: stripHtml(String(a.title ?? "")),
      summary: stripHtml(String(a.description ?? "")),
      url: a.url ?? "",
      publishedAt: parseTime(a.publishedAt),
      source: a.source?.name ?? domain,
      sourceDomain: domain,
      tier: tierOfDomain(domain, 3),
      provider: p.id
    };
  });
}
const log$5 = createLogger("news");
const KEEP_MS = 72 * 36e5;
class NewsService extends events.EventEmitter {
  constructor(settings, secrets, store) {
    super();
    this.settings = settings;
    this.secrets = secrets;
    this.store = store;
  }
  items = [];
  status = /* @__PURE__ */ new Map();
  timer = null;
  lastFetch = 0;
  inflight = null;
  seen = /* @__PURE__ */ new Set();
  pool = /* @__PURE__ */ new Map();
  firstRun = true;
  start() {
    this.items = this.store.loadNews(Date.now() - KEEP_MS);
    for (const n of this.items) {
      this.seen.add(n.id);
      this.pool.set(n.id, { ...n, corroboratedBy: [], duplicates: 0 });
    }
    this.schedule();
    void this.refresh();
  }
  schedule() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => void this.refresh(), this.settings.get().news.refreshMinutes * 6e4);
  }
  stop() {
    if (this.timer) clearInterval(this.timer);
  }
  list() {
    return this.items;
  }
  providers() {
    return this.settings.get().news.providers.map((p) => ({ ...p, hasKey: this.secrets.has(`news:${p.id}`), lastStatus: this.status.get(p.id) }));
  }
  /** 保证新闻不早于 maxAgeMs */
  async ensureFresh(maxAgeMs) {
    if (Date.now() - this.lastFetch < maxAgeMs) return this.items;
    return this.refresh();
  }
  async fetchOne(id) {
    const p = this.settings.get().news.providers.find((x) => x.id === id);
    if (!p) throw new Error("新闻源不存在");
    if (p.kind === "rss") return fetchRss(p);
    const key2 = this.secrets.get(`news:${p.id}`);
    if (!key2) throw new Error("未配置 API Key");
    if (p.kind === "cryptopanic") return fetchCryptoPanic(p, key2);
    return fetchNewsApi(p, key2);
  }
  async refresh() {
    if (this.inflight) return this.inflight;
    this.inflight = (async () => {
      const enabled = this.settings.get().news.providers.filter((p) => p.enabled && (!p.needsKey || this.secrets.has(`news:${p.id}`)));
      const results = await Promise.allSettled(enabled.map((p) => this.fetchOne(p.id)));
      const now = Date.now();
      const raws = [];
      results.forEach((r2, i) => {
        const p = enabled[i];
        if (r2.status === "fulfilled") {
          const valid = r2.value.filter((x) => x.title && x.url && x.publishedAt > 0 && /^https:\/\//i.test(x.url));
          raws.push(...valid);
          this.status.set(p.id, { ok: true, at: now, count: valid.length });
        } else {
          const msg = r2.reason?.message ?? String(r2.reason);
          this.status.set(p.id, { ok: false, at: now, count: 0, error: msg });
          log$5.warn(`新闻源 ${p.name} 失败：${msg}`);
        }
      });
      const fresh = raws.filter((x) => now - x.publishedAt < KEEP_MS).map((x) => enrich(x, now));
      for (const n of fresh) {
        const prev = this.pool.get(n.id);
        this.pool.set(n.id, prev ? { ...n, fetchedAt: prev.fetchedAt } : n);
      }
      for (const [id, n] of this.pool) if (now - n.publishedAt >= KEEP_MS) this.pool.delete(id);
      this.items = dedupe([...this.pool.values()]);
      this.lastFetch = now;
      this.store.saveNews(this.items);
      const newOnes = this.items.filter((n) => !this.seen.has(n.id));
      for (const n of newOnes) this.seen.add(n.id);
      if (newOnes.length && !this.firstRun) this.emit("new", newOnes);
      this.firstRun = false;
      this.emit("updated", this.items);
      log$5.info(`新闻刷新：${enabled.length} 个源，${fresh.length} 条原始，去重后 ${this.items.length} 条，新增 ${newOnes.length}`);
      return this.items;
    })();
    try {
      return await this.inflight;
    } finally {
      this.inflight = null;
    }
  }
  async test(id) {
    const t0 = Date.now();
    try {
      const r2 = await this.fetchOne(id);
      const ok = r2.length > 0;
      this.status.set(id, { ok, at: Date.now(), count: r2.length });
      return { ok, latencyMs: Date.now() - t0, message: ok ? `获取 ${r2.length} 条，最新：${r2[0]?.title ?? ""}` : "连接成功但没有条目" };
    } catch (e) {
      const msg = e.message;
      this.status.set(id, { ok: false, at: Date.now(), count: 0, error: msg });
      return { ok: false, latencyMs: Date.now() - t0, message: msg };
    }
  }
}
function joinUrl(base, path2) {
  return base.replace(/\/+$/, "") + "/" + path2.replace(/^\/+/, "");
}
function authHeaders(key2) {
  return { Authorization: `Bearer ${key2}` };
}
function unsupported(err, ...words) {
  const e = err;
  if (e?.status !== 400 && e?.status !== 422) return false;
  const msg = `${e.message ?? ""} ${e.body ?? ""}`.toLowerCase();
  return words.some((w) => msg.includes(w.toLowerCase()));
}
class ChatCompletionsAdapter {
  constructor(config, key2) {
    this.config = config;
    this.key = key2;
  }
  opts(signal, timeoutMs) {
    return { headers: authHeaders(this.key), timeoutMs: timeoutMs ?? this.config.timeoutMs, signal, allowLocalHttp: this.config.allowLocalHttp };
  }
  async listModels(signal) {
    const r2 = await httpJson(joinUrl(this.config.baseUrl, "models"), this.opts(signal, 2e4));
    return (r2.data ?? []).map((m) => m.id).sort();
  }
  async test(model) {
    const t0 = Date.now();
    const m = model || this.config.defaultModel;
    try {
      const list = await this.listModels();
      if (m && list.length && !list.includes(m)) return { ok: false, latencyMs: Date.now() - t0, message: `密钥有效，但模型 ${m} 不在可用列表中`, model: m };
      return { ok: true, latencyMs: Date.now() - t0, message: `连接成功${m ? `，模型 ${m} 可用` : ""}（可用模型 ${list.length} 个）`, model: m };
    } catch (e) {
      const err = e;
      if (err.status === 404 && m) {
        try {
          await httpJson(joinUrl(this.config.baseUrl, "chat/completions"), {
            ...this.opts(void 0, 3e4),
            method: "POST",
            body: { model: m, messages: [{ role: "user", content: "ping" }], max_tokens: 8 }
          });
          return { ok: true, latencyMs: Date.now() - t0, message: `连接成功（生成测试通过），模型 ${m}`, model: m };
        } catch (e2) {
          const er2 = e2;
          return { ok: false, latencyMs: Date.now() - t0, message: er2.message, status: er2.status };
        }
      }
      return { ok: false, latencyMs: Date.now() - t0, message: err.message, status: err.status };
    }
  }
  reasoningFields() {
    const r2 = this.config.reasoning;
    if (this.config.kind === "deepseek") {
      if (r2 === "off") return { thinking: { type: "disabled" } };
      return { thinking: { type: "enabled" }, reasoning_effort: r2 === "medium" ? "high" : r2 };
    }
    if (r2 === "off") return {};
    return { reasoning_effort: r2 === "max" ? "high" : r2 };
  }
  async analyze(req) {
    const modes = this.config.structured === "json_schema" ? ["json_schema", "json_object", "prompt_only"] : this.config.structured === "json_object" ? ["json_object", "prompt_only"] : ["prompt_only"];
    let reasoning = this.reasoningFields();
    let lastErr;
    for (let i = 0; i < modes.length; i++) {
      const mode = modes[i];
      const body2 = {
        model: req.model,
        messages: [
          { role: "system", content: req.system },
          { role: "user", content: req.user }
        ],
        max_tokens: this.config.maxOutputTokens,
        stream: false,
        ...reasoning
      };
      if (mode === "json_schema") body2.response_format = { type: "json_schema", json_schema: { name: req.schemaName, strict: true, schema: req.schema } };
      else if (mode === "json_object") body2.response_format = { type: "json_object" };
      const t0 = Date.now();
      try {
        const res = await httpJson(joinUrl(this.config.baseUrl, "chat/completions"), { ...this.opts(req.signal), method: "POST", body: body2 });
        const ch = res.choices?.[0];
        if (ch?.finish_reason === "length") throw new HttpError("输出被截断：请增大“最大输出 Token”（思考模式会占用额外 Token）", 200, "", false);
        if (ch?.finish_reason === "content_filter") throw new HttpError("输出被服务商内容过滤", 200, "", false);
        const text2 = ch?.message?.content ?? "";
        if (!text2.trim()) throw new HttpError("模型返回空内容", 200, "", false);
        return { text: text2, inputTokens: res.usage?.prompt_tokens ?? 0, outputTokens: res.usage?.completion_tokens ?? 0, latencyMs: Date.now() - t0, structured: mode };
      } catch (e) {
        lastErr = e;
        if (Object.keys(reasoning).length && unsupported(e, "thinking", "reasoning")) {
          reasoning = {};
          i--;
          continue;
        }
        if (unsupported(e, "response_format", "json_schema", "json_object")) continue;
        throw e;
      }
    }
    throw lastErr;
  }
}
class OpenAIResponsesAdapter {
  constructor(config, key2) {
    this.config = config;
    this.key = key2;
  }
  opts(signal, timeoutMs) {
    return { headers: authHeaders(this.key), timeoutMs: timeoutMs ?? this.config.timeoutMs, signal, allowLocalHttp: this.config.allowLocalHttp };
  }
  async listModels(signal) {
    const r2 = await httpJson(joinUrl(this.config.baseUrl, "models"), this.opts(signal, 2e4));
    return (r2.data ?? []).map((m) => m.id).sort();
  }
  async test(model) {
    const t0 = Date.now();
    try {
      const m = model || this.config.defaultModel;
      if (m) {
        try {
          await httpJson(joinUrl(this.config.baseUrl, `models/${encodeURIComponent(m)}`), this.opts(void 0, 2e4));
        } catch (e) {
          if (e.status !== 404) throw e;
          const list2 = await this.listModels();
          if (!list2.includes(m)) return { ok: false, latencyMs: Date.now() - t0, message: `密钥有效，但模型 ${m} 不在可用列表中`, model: m, status: 404 };
        }
        return { ok: true, latencyMs: Date.now() - t0, message: `连接成功，模型 ${m} 可用`, model: m };
      }
      const list = await this.listModels();
      return { ok: true, latencyMs: Date.now() - t0, message: `连接成功，可用模型 ${list.length} 个` };
    } catch (e) {
      const err = e;
      return { ok: false, latencyMs: Date.now() - t0, message: err.message, status: err.status };
    }
  }
  extract(body2) {
    if (typeof body2.output_text === "string" && body2.output_text) return body2.output_text;
    const parts = [];
    for (const item of body2.output ?? []) {
      if (item.type !== "message") continue;
      for (const c of item.content ?? []) {
        if (c.type === "output_text" && c.text) parts.push(c.text);
        if (c.type === "refusal") throw new Error(`模型拒绝回答：${c.refusal ?? ""}`);
      }
    }
    return parts.join("");
  }
  async analyze(req) {
    const modes = this.config.structured === "json_schema" ? ["json_schema", "json_object", "prompt_only"] : this.config.structured === "json_object" ? ["json_object", "prompt_only"] : ["prompt_only"];
    let useReasoning = this.config.reasoning !== "off";
    let lastErr;
    for (let i = 0; i < modes.length; i++) {
      const mode = modes[i];
      const body2 = {
        model: req.model,
        instructions: req.system,
        input: [{ role: "user", content: req.user }],
        max_output_tokens: this.config.maxOutputTokens,
        store: false
      };
      if (mode === "json_schema") body2.text = { format: { type: "json_schema", name: req.schemaName, strict: true, schema: req.schema } };
      else if (mode === "json_object") body2.text = { format: { type: "json_object" } };
      if (useReasoning) body2.reasoning = { effort: this.config.reasoning === "max" ? "high" : this.config.reasoning };
      const t0 = Date.now();
      try {
        const res = await httpJson(joinUrl(this.config.baseUrl, "responses"), { ...this.opts(req.signal), method: "POST", body: body2 });
        if (res.status === "incomplete") {
          const why = res.incomplete_details?.reason;
          throw new HttpError(why === "max_output_tokens" ? "输出被截断：请增大“最大输出 Token”" : `响应未完成（${why ?? "unknown"}）`, 200, "", false);
        }
        const text2 = this.extract(res);
        if (!text2) throw new HttpError("模型返回空内容", 200, "", false);
        return { text: text2, inputTokens: res.usage?.input_tokens ?? 0, outputTokens: res.usage?.output_tokens ?? 0, latencyMs: Date.now() - t0, structured: mode };
      } catch (e) {
        lastErr = e;
        if (useReasoning && unsupported(e, "reasoning")) {
          useReasoning = false;
          i--;
          continue;
        }
        if (unsupported(e, "json_schema", "text.format", "response_format", "json_object", "structured")) continue;
        throw e;
      }
    }
    throw lastErr;
  }
}
const log$4 = createLogger("ai");
class BudgetError extends Error {
}
const startOfToday = () => {
  const d = /* @__PURE__ */ new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};
class AIService extends events.EventEmitter {
  constructor(settings, secrets, store) {
    super();
    this.settings = settings;
    this.secrets = secrets;
    this.store = store;
  }
  minuteWindow = [];
  keyId(id) {
    return `ai:${id}`;
  }
  providers() {
    return this.settings.get().providers.map((p) => ({ ...p, hasKey: this.secrets.has(this.keyId(p.id)), keyHint: this.secrets.hint(this.keyId(p.id)) }));
  }
  provider(id) {
    return this.settings.get().providers.find((p) => p.id === id);
  }
  saveProvider(cfg) {
    const clean = sanitizeProvider(cfg);
    if (!clean.name.trim()) throw new Error("服务商名称不能为空");
    assertSecureUrl(clean.baseUrl, clean.allowLocalHttp);
    if (clean.kind === "openai" && clean.apiStyle !== "responses" && clean.apiStyle !== "chat") clean.apiStyle = "responses";
    const list = this.settings.get().providers.slice();
    const i = list.findIndex((p) => p.id === clean.id);
    if (i >= 0) list[i] = clean;
    else list.push(clean);
    this.settings.update({ providers: list }, { allowProviders: true });
    log$4.info(`保存服务商配置：${clean.id}`);
    return this.providers();
  }
  addProvider(kind) {
    const list = this.settings.get().providers.slice();
    let id = kind === "openai_compatible" ? `custom-${Date.now().toString(36)}` : kind;
    if (list.some((p) => p.id === id)) id = `${kind}-${Date.now().toString(36)}`;
    list.push(presetProvider(kind, id));
    this.settings.update({ providers: list }, { allowProviders: true });
    return this.providers();
  }
  deleteProvider(id) {
    const list = this.settings.get().providers.filter((p) => p.id !== id);
    this.secrets.delete(this.keyId(id));
    this.settings.update({ providers: list }, { allowProviders: true });
    return this.providers();
  }
  setKey(id, key2) {
    if (!this.provider(id)) throw new Error("服务商不存在");
    this.secrets.set(this.keyId(id), key2);
    return this.providers();
  }
  deleteKey(id) {
    this.secrets.delete(this.keyId(id));
    return this.providers();
  }
  adapter(id) {
    const cfg = this.provider(id);
    if (!cfg) throw new Error(`服务商 ${id} 不存在`);
    const key2 = this.secrets.get(this.keyId(id));
    if (!key2) throw new Error(`${cfg.name} 未配置 API Key`);
    assertSecureUrl(cfg.baseUrl, cfg.allowLocalHttp);
    return cfg.apiStyle === "responses" ? new OpenAIResponsesAdapter(cfg, key2) : new ChatCompletionsAdapter(cfg, key2);
  }
  async fetchModels(id) {
    try {
      const models = await this.adapter(id).listModels();
      const cfg = this.provider(id);
      const existing = new Map(cfg.models.map((m) => [m.id, m]));
      for (const m of models) if (!existing.has(m)) existing.set(m, { id: m, enabled: false });
      this.saveProvider({ ...cfg, models: [...existing.values()] });
      return { ok: true, models, message: `获取到 ${models.length} 个模型（新模型默认未启用）` };
    } catch (e) {
      return { ok: false, models: [], message: e.message };
    }
  }
  async test(id, model) {
    try {
      return await this.adapter(id).test(model);
    } catch (e) {
      return { ok: false, latencyMs: 0, message: e.message };
    }
  }
  /** 是否已配置可用：启用 + 有密钥 + 有模型 */
  resolve(providerId, model) {
    const p = this.provider(providerId);
    if (!p || !p.enabled || !this.secrets.has(this.keyId(p.id))) return null;
    const m = (model || p.defaultModel || p.models.find((x) => x.enabled)?.id || "").trim();
    if (!m) return null;
    return { provider: p, model: m };
  }
  checkBudget() {
    const a = this.settings.get().analysis;
    const now = Date.now();
    this.minuteWindow = this.minuteWindow.filter((t) => now - t < 6e4);
    if (this.minuteWindow.length >= a.perMinuteLimit) throw new BudgetError(`已达每分钟调用上限（${a.perMinuteLimit}）`);
    const today = this.store.usageSince(startOfToday());
    if (today.length >= a.dailyCallLimit) throw new BudgetError(`已达每日调用次数上限（${a.dailyCallLimit}）`);
    const cost = today.reduce((s, u) => s + (u.cost ?? 0), 0);
    if (a.dailyBudgetUsd > 0 && cost >= a.dailyBudgetUsd) throw new BudgetError(`已达每日费用预算（$${a.dailyBudgetUsd}）`);
  }
  cost(cfg, model, inTok, outTok) {
    const m = cfg.models.find((x) => x.id === model);
    if (!m || m.inputPrice === void 0 || m.outputPrice === void 0) return null;
    return (inTok * m.inputPrice + outTok * m.outputPrice) / 1e6;
  }
  async call(providerId, req, purpose) {
    this.checkBudget();
    this.minuteWindow.push(Date.now());
    const ad = this.adapter(providerId);
    try {
      const r2 = await ad.analyze(req);
      const cost = this.cost(ad.config, req.model, r2.inputTokens, r2.outputTokens);
      this.store.addUsage({ at: Date.now(), providerId, model: req.model, inputTokens: r2.inputTokens, outputTokens: r2.outputTokens, cost, ok: true, purpose });
      log$4.info(`AI 调用成功 ${providerId}/${req.model} in=${r2.inputTokens} out=${r2.outputTokens} ${r2.latencyMs}ms mode=${r2.structured}`);
      this.emit("usage");
      return { ...r2, cost };
    } catch (e) {
      this.store.addUsage({ at: Date.now(), providerId, model: req.model, inputTokens: 0, outputTokens: 0, cost: 0, ok: false, purpose });
      log$4.warn(`AI 调用失败 ${providerId}/${req.model}：${e.message}`);
      this.emit("usage");
      throw e;
    }
  }
  usage() {
    const a = this.settings.get().analysis;
    const today = this.store.usageSince(startOfToday());
    const by = /* @__PURE__ */ new Map();
    for (const u of today) {
      const k = `${u.providerId}|${u.model}`;
      const row = by.get(k) ?? { providerId: u.providerId, model: u.model, calls: 0, inputTokens: 0, outputTokens: 0, cost: 0 };
      row.calls++;
      row.inputTokens += u.inputTokens;
      row.outputTokens += u.outputTokens;
      row.cost += u.cost ?? 0;
      by.set(k, row);
    }
    return {
      today: {
        calls: today.length,
        inputTokens: today.reduce((s, u) => s + u.inputTokens, 0),
        outputTokens: today.reduce((s, u) => s + u.outputTokens, 0),
        cost: today.reduce((s, u) => s + (u.cost ?? 0), 0),
        unpricedCalls: today.filter((u) => u.ok && u.cost === null).length
      },
      limits: { dailyCalls: a.dailyCallLimit, dailyBudgetUsd: a.dailyBudgetUsd, perMinute: a.perMinuteLimit },
      byModel: [...by.values()],
      recent: this.store.usageSince(Date.now() - 7 * 864e5).slice(0, 40)
    };
  }
}
function sma(values, n) {
  const out = new Array(values.length).fill(null);
  if (n <= 0) return out;
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    if (i >= n) sum -= values[i - n];
    if (i >= n - 1) out[i] = sum / n;
  }
  return out;
}
function ema(values, n) {
  const out = new Array(values.length).fill(null);
  const k = 2 / (n + 1);
  let start = values.findIndex((v) => v !== null && v !== void 0);
  if (start < 0) return out;
  let count = 0;
  let sum = 0;
  let prev = null;
  for (let i = start; i < values.length; i++) {
    const v = values[i];
    if (v === null || v === void 0) {
      out[i] = prev;
      continue;
    }
    if (prev === null) {
      sum += v;
      count++;
      if (count === n) {
        prev = sum / n;
        out[i] = prev;
      }
    } else {
      prev = v * k + prev * (1 - k);
      out[i] = prev;
    }
  }
  return out;
}
function rsi(closes, n = 14) {
  const out = new Array(closes.length).fill(null);
  if (closes.length <= n) return out;
  let gain = 0;
  let loss = 0;
  for (let i = 1; i <= n; i++) {
    const d = closes[i] - closes[i - 1];
    if (d >= 0) gain += d;
    else loss -= d;
  }
  let avgG = gain / n;
  let avgL = loss / n;
  out[n] = avgL === 0 ? avgG === 0 ? 50 : 100 : 100 - 100 / (1 + avgG / avgL);
  for (let i = n + 1; i < closes.length; i++) {
    const d = closes[i] - closes[i - 1];
    avgG = (avgG * (n - 1) + Math.max(d, 0)) / n;
    avgL = (avgL * (n - 1) + Math.max(-d, 0)) / n;
    out[i] = avgL === 0 ? avgG === 0 ? 50 : 100 : 100 - 100 / (1 + avgG / avgL);
  }
  return out;
}
function macd(closes, fast = 12, slow = 26, sig = 9) {
  const ef = ema(closes, fast);
  const es = ema(closes, slow);
  const line = closes.map((_, i) => ef[i] !== null && es[i] !== null ? ef[i] - es[i] : null);
  const signal = ema(line, sig);
  const firstLine = line.findIndex((v) => v !== null);
  for (let i = 0; i < signal.length; i++) if (i < firstLine) signal[i] = null;
  const hist = line.map((v, i) => v !== null && signal[i] !== null ? v - signal[i] : null);
  return { macd: line, signal, hist };
}
function trueRange(candles) {
  return candles.map((c, i) => {
    if (i === 0) return c.h - c.l;
    const pc = candles[i - 1].c;
    return Math.max(c.h - c.l, Math.abs(c.h - pc), Math.abs(c.l - pc));
  });
}
function atr(candles, n = 14) {
  const tr = trueRange(candles);
  const out = new Array(candles.length).fill(null);
  if (candles.length < n + 1) return out;
  let prev = 0;
  for (let i = 1; i <= n; i++) prev += tr[i];
  prev /= n;
  out[n] = prev;
  for (let i = n + 1; i < candles.length; i++) {
    prev = (prev * (n - 1) + tr[i]) / n;
    out[i] = prev;
  }
  return out;
}
function adx(candles, n = 14) {
  const len = candles.length;
  const adxS = new Array(len).fill(null);
  const pdiS = new Array(len).fill(null);
  const mdiS = new Array(len).fill(null);
  if (len < 2 * n + 1) return { adx: adxS, pdi: pdiS, mdi: mdiS };
  const tr = trueRange(candles);
  const pdm = [0];
  const mdm = [0];
  for (let i = 1; i < len; i++) {
    const up = candles[i].h - candles[i - 1].h;
    const dn = candles[i - 1].l - candles[i].l;
    pdm.push(up > dn && up > 0 ? up : 0);
    mdm.push(dn > up && dn > 0 ? dn : 0);
  }
  let sTR = 0;
  let sP = 0;
  let sM = 0;
  for (let i = 1; i <= n; i++) {
    sTR += tr[i];
    sP += pdm[i];
    sM += mdm[i];
  }
  const dx = new Array(len).fill(null);
  const calc = (i) => {
    const p = sTR === 0 ? 0 : 100 * sP / sTR;
    const m = sTR === 0 ? 0 : 100 * sM / sTR;
    pdiS[i] = p;
    mdiS[i] = m;
    dx[i] = p + m === 0 ? 0 : 100 * Math.abs(p - m) / (p + m);
  };
  calc(n);
  for (let i = n + 1; i < len; i++) {
    sTR = sTR - sTR / n + tr[i];
    sP = sP - sP / n + pdm[i];
    sM = sM - sM / n + mdm[i];
    calc(i);
  }
  let first = 0;
  for (let i = n; i < 2 * n; i++) first += dx[i];
  let prev = first / n;
  adxS[2 * n - 1] = prev;
  for (let i = 2 * n; i < len; i++) {
    prev = (prev * (n - 1) + dx[i]) / n;
    adxS[i] = prev;
  }
  return { adx: adxS, pdi: pdiS, mdi: mdiS };
}
function bollinger(closes, n = 20, k = 2) {
  const mid = sma(closes, n);
  const upper = new Array(closes.length).fill(null);
  const lower = new Array(closes.length).fill(null);
  for (let i = n - 1; i < closes.length; i++) {
    const m = mid[i];
    let s = 0;
    for (let j = i - n + 1; j <= i; j++) s += (closes[j] - m) ** 2;
    const sd = Math.sqrt(s / n);
    upper[i] = m + k * sd;
    lower[i] = m - k * sd;
  }
  return { upper, middle: mid, lower };
}
function vwap(candles, intervalMs) {
  const out = new Array(candles.length).fill(null);
  if (intervalMs >= 864e5) {
    const n = 20;
    for (let i = n - 1; i < candles.length; i++) {
      let pv2 = 0;
      let vv2 = 0;
      for (let j = i - n + 1; j <= i; j++) {
        const tp = (candles[j].h + candles[j].l + candles[j].c) / 3;
        pv2 += tp * candles[j].v;
        vv2 += candles[j].v;
      }
      out[i] = vv2 > 0 ? pv2 / vv2 : null;
    }
    return out;
  }
  let day = -1;
  let pv = 0;
  let vv = 0;
  for (let i = 0; i < candles.length; i++) {
    const d = Math.floor(candles[i].t / 864e5);
    if (d !== day) {
      day = d;
      pv = 0;
      vv = 0;
    }
    const tp = (candles[i].h + candles[i].l + candles[i].c) / 3;
    pv += tp * candles[i].v;
    vv += candles[i].v;
    out[i] = vv > 0 ? pv / vv : tp;
  }
  return out;
}
function computeSeries(candles, intervalMs) {
  const closes = candles.map((c) => c.c);
  const vols = candles.map((c) => c.v);
  return {
    ema20: ema(closes, 20),
    ema50: ema(closes, 50),
    ema200: ema(closes, 200),
    sma20: sma(closes, 20),
    rsi14: rsi(closes, 14),
    macd: macd(closes),
    adx: adx(candles, 14),
    bb: bollinger(closes, 20, 2),
    atr14: atr(candles, 14),
    vwap: vwap(candles, intervalMs),
    volMa20: sma(vols, 20)
  };
}
const at = (s, i) => i >= 0 && i < s.length ? s[i] : null;
function snapshotAt(candles, s, i) {
  const c = candles[i];
  const m = at(s.macd.macd, i);
  const sg = at(s.macd.signal, i);
  const h = at(s.macd.hist, i);
  const a = at(s.adx.adx, i);
  const p = at(s.adx.pdi, i);
  const mi = at(s.adx.mdi, i);
  const bu = at(s.bb.upper, i);
  const bm = at(s.bb.middle, i);
  const bl = at(s.bb.lower, i);
  const atrV = at(s.atr14, i);
  const vma = at(s.volMa20, i);
  return {
    ema20: at(s.ema20, i),
    ema50: at(s.ema50, i),
    ema200: at(s.ema200, i),
    sma20: at(s.sma20, i),
    rsi14: at(s.rsi14, i),
    macd: m !== null && sg !== null && h !== null ? { macd: m, signal: sg, hist: h } : null,
    adx: a !== null && p !== null && mi !== null ? { adx: a, pdi: p, mdi: mi } : null,
    bb: bu !== null && bm !== null && bl !== null ? { upper: bu, middle: bm, lower: bl, widthPct: bm ? (bu - bl) / bm * 100 : 0 } : null,
    atr14: atrV,
    atrPct: atrV !== null && c ? atrV / c.c * 100 : null,
    vwap: at(s.vwap, i),
    volume: c && vma !== null ? { last: c.v, ma20: vma, ratio: vma > 0 ? c.v / vma : 0 } : null
  };
}
const body = (c) => Math.abs(c.c - c.o);
const range = (c) => c.h - c.l;
const upperWick = (c) => c.h - Math.max(c.o, c.c);
const lowerWick = (c) => Math.min(c.o, c.c) - c.l;
function priorTrend(candles, i, n = 6) {
  if (i - n < 0) return "flat";
  const a = candles[i - n].c;
  const b = candles[i - 1].c;
  const ch = (b - a) / a;
  if (ch > 4e-3) return "up";
  if (ch < -4e-3) return "down";
  return "flat";
}
function detectPatterns(candles, volMa, lookback = 3) {
  const hits = [];
  const start = Math.max(1, candles.length - lookback);
  for (let i = start; i < candles.length; i++) {
    const c = candles[i];
    const p = candles[i - 1];
    const r2 = range(c);
    if (r2 <= 0) continue;
    const vm = volMa[i];
    const volOk = vm !== null && vm !== void 0 && c.v > vm * 1.2;
    const push = (name, direction) => hits.push({ name, direction, time: c.t, confirmed: c.closed, volumeConfirmed: volOk });
    const ctx = priorTrend(candles, i);
    const pBear = p.c < p.o;
    const pBull = p.c > p.o;
    if (c.c > c.o && pBear && c.c >= p.o && c.o <= p.c && body(c) > body(p) * 1.05) push("bullish_engulfing", "bull");
    else if (c.c < c.o && pBull && c.c <= p.o && c.o >= p.c && body(c) > body(p) * 1.05) push("bearish_engulfing", "bear");
    const b = body(c);
    if (b <= r2 * 0.1) {
      push("doji", "neutral");
      continue;
    }
    const lw = lowerWick(c);
    const uw = upperWick(c);
    if (lw >= 2 * b && uw <= b * 0.6) {
      if (ctx === "down") push("hammer", "bull");
      else if (ctx === "up") push("hanging_man", "bear");
    } else if (uw >= 2 * b && lw <= b * 0.6) {
      if (ctx === "up") push("shooting_star", "bear");
      else if (ctx === "down") push("inverted_hammer", "bull");
    }
  }
  return hits;
}
function findSwings(candles, k = 3) {
  const swings = [];
  for (let i = k; i < candles.length - k; i++) {
    let isH = true;
    let isL = true;
    for (let j = i - k; j <= i + k; j++) {
      if (j === i) continue;
      if (candles[j].h >= candles[i].h) isH = false;
      if (candles[j].l <= candles[i].l) isL = false;
    }
    if (isH) swings.push({ type: "high", price: candles[i].h, time: candles[i].t, index: i });
    if (isL) swings.push({ type: "low", price: candles[i].l, time: candles[i].t, index: i });
  }
  let lastH = null;
  let lastL = null;
  for (const s of swings) {
    if (s.type === "high") {
      if (lastH) s.label = s.price > lastH.price ? "HH" : "LH";
      lastH = s;
    } else {
      if (lastL) s.label = s.price > lastL.price ? "HL" : "LL";
      lastL = s;
    }
  }
  return swings;
}
function analyzeStructure(swings) {
  const highs = swings.filter((s) => s.type === "high");
  const lows = swings.filter((s) => s.type === "low");
  const lastHigh = highs[highs.length - 1] ?? null;
  const lastLow = lows[lows.length - 1] ?? null;
  const recent = swings.slice(-6);
  const seq = recent.map((s) => s.label).filter(Boolean).join("-");
  let trend = "range";
  if (lastHigh?.label && lastLow?.label) {
    if (lastHigh.label === "HH" && lastLow.label === "HL") trend = "up";
    else if (lastHigh.label === "LH" && lastLow.label === "LL") trend = "down";
  }
  return { trend, sequence: seq || "数据不足", swings: swings.slice(-12), lastHigh, lastLow };
}
function findLevels(candles, swings, atrValue, maxEach = 3) {
  if (!candles.length) return [];
  const price = candles[candles.length - 1].c;
  const tol = Math.max((atrValue ?? 0) * 0.4, price * 15e-4);
  const clusters = [];
  for (const s of swings) {
    const found = clusters.find((cl) => Math.abs(cl.sum / cl.n - s.price) <= tol);
    if (found) {
      found.sum += s.price;
      found.n++;
      found.last = Math.max(found.last, s.time);
      if (s.type === "high") found.highs++;
      else found.lows++;
    } else clusters.push({ sum: s.price, n: 1, last: s.time, highs: s.type === "high" ? 1 : 0, lows: s.type === "low" ? 1 : 0 });
  }
  const t0 = candles[0].t;
  const t1 = candles[candles.length - 1].t;
  const span = Math.max(1, t1 - t0);
  const levels = clusters.map((cl) => {
    const p = cl.sum / cl.n;
    const recency = (cl.last - t0) / span;
    return {
      price: p,
      kind: p >= price ? "resistance" : "support",
      touches: cl.n,
      strength: Math.round(Math.min(100, cl.n * 22 + recency * 34)),
      lastTouch: cl.last
    };
  });
  const res = levels.filter((l) => l.kind === "resistance").sort((a, b) => a.price - b.price).slice(0, maxEach);
  const sup = levels.filter((l) => l.kind === "support").sort((a, b) => b.price - a.price).slice(0, maxEach);
  return [...sup, ...res];
}
function detectBreakouts(candles, swings, volMa, window = 3) {
  const out = [];
  if (candles.length < window + 5) return out;
  const startIdx = candles.length - window;
  const prior = swings.filter((s) => s.index < startIdx - 1);
  const lastHigh = [...prior].reverse().find((s) => s.type === "high");
  const lastLow = [...prior].reverse().find((s) => s.type === "low");
  for (let i = startIdx; i < candles.length; i++) {
    const c = candles[i];
    const pc = candles[i - 1];
    const vm = volMa[i];
    const volOk = vm !== null && vm !== void 0 && c.v > vm * 1.3;
    if (lastHigh) {
      const L = lastHigh.price;
      if (pc.c <= L && c.c > L) out.push({ type: "breakout", level: L, time: c.t, volumeConfirmed: volOk });
      else if (c.h > L && c.c < L && pc.c < L) out.push({ type: "false_breakout_up", level: L, time: c.t, volumeConfirmed: volOk });
    }
    if (lastLow) {
      const L = lastLow.price;
      if (pc.c >= L && c.c < L) out.push({ type: "breakdown", level: L, time: c.t, volumeConfirmed: volOk });
      else if (c.l < L && c.c > L && pc.c > L) out.push({ type: "false_breakout_down", level: L, time: c.t, volumeConfirmed: volOk });
    }
  }
  return out;
}
function detectDivergences(candles, swings, rsiS, maxAgeBars = 30) {
  const out = [];
  const n = candles.length;
  const lows = swings.filter((s) => s.type === "low");
  const highs = swings.filter((s) => s.type === "high");
  if (lows.length >= 2) {
    const [a, b] = lows.slice(-2);
    const ra = rsiS[a.index];
    const rb = rsiS[b.index];
    if (ra !== null && rb !== null && n - 1 - b.index <= maxAgeBars && b.price < a.price && rb > ra + 1)
      out.push({ type: "bullish", indicator: "RSI", fromTime: a.time, toTime: b.time });
  }
  if (highs.length >= 2) {
    const [a, b] = highs.slice(-2);
    const ra = rsiS[a.index];
    const rb = rsiS[b.index];
    if (ra !== null && rb !== null && n - 1 - b.index <= maxAgeBars && b.price > a.price && rb < ra - 1)
      out.push({ type: "bearish", indicator: "RSI", fromTime: a.time, toTime: b.time });
  }
  return out;
}
function priceDecimals(p) {
  if (!isFinite(p) || p === 0) return 2;
  const a = Math.abs(p);
  if (a >= 1e4) return 1;
  if (a >= 100) return 2;
  if (a >= 1) return 3;
  return 5;
}
function fmtPrice(p) {
  if (p === null || p === void 0 || !isFinite(p)) return "—";
  return p.toLocaleString("en-US", { minimumFractionDigits: priceDecimals(p), maximumFractionDigits: priceDecimals(p) });
}
function fmtPct(p, digits = 2, sign = true) {
  if (p === null || p === void 0 || !isFinite(p)) return "—";
  return `${sign && p > 0 ? "+" : ""}${p.toFixed(digits)}%`;
}
function round(n, d = 2) {
  const f = 10 ** d;
  return Math.round(n * f) / f;
}
const MIN_CANDLES = 120;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
function evaluateFrame(interval, all, now) {
  const { closed, provisional } = splitClosed(all, now);
  if (closed.length < MIN_CANDLES) return null;
  const s = computeSeries(closed, INTERVAL_MS[interval]);
  const i = closed.length - 1;
  const last = closed[i];
  const ind = snapshotAt(closed, s, i);
  const swings = findSwings(closed, interval === "1d" || interval === "1w" ? 2 : 3);
  const structure = analyzeStructure(swings);
  const levels = findLevels(closed, swings.slice(-40), ind.atr14);
  const patterns = detectPatterns(closed, s.volMa20, 3);
  const breakouts = detectBreakouts(closed, swings, s.volMa20, 3);
  const divergences = detectDivergences(closed, swings, s.rsi14);
  const notes = [];
  let score = 0;
  const p = last.c;
  let emaAlignment = "mixed";
  const { ema20: e20, ema50: e50, ema200: e200 } = ind;
  if (e20 !== null && e50 !== null && e200 !== null) {
    if (p > e20 && e20 > e50 && e50 > e200) {
      emaAlignment = "bull";
      score += 30;
      notes.push("EMA20>50>200 多头排列，价格位于均线上方");
    } else if (p < e20 && e20 < e50 && e50 < e200) {
      emaAlignment = "bear";
      score -= 30;
      notes.push("EMA20<50<200 空头排列，价格位于均线下方");
    } else {
      const part = (p > e50 ? 10 : -10) + (e20 > e50 ? 8 : -8) + (p > e200 ? 6 : -6);
      score += part;
      notes.push(`均线交织：价格${p > e50 ? "高于" : "低于"}EMA50，${p > e200 ? "高于" : "低于"}EMA200`);
    }
  } else if (e20 !== null && e50 !== null) {
    score += (p > e50 ? 10 : -10) + (e20 > e50 ? 8 : -8);
    notes.push("EMA200 样本不足，仅参考 EMA20/50");
  }
  if (structure.trend === "up") {
    score += 20;
    notes.push(`结构抬升（${structure.sequence}）`);
  } else if (structure.trend === "down") {
    score -= 20;
    notes.push(`结构下移（${structure.sequence}）`);
  } else notes.push("高低点无明确方向，结构偏震荡");
  if (ind.macd) {
    const prevH = s.macd.hist[i - 1];
    const rising = prevH !== null && ind.macd.hist > prevH;
    if (ind.macd.hist > 0) {
      score += rising ? 10 : 5;
      notes.push(`MACD 柱体为正${rising ? "且扩张" : "但收敛"}`);
    } else {
      score -= rising ? 5 : 10;
      notes.push(`MACD 柱体为负${rising ? "但收敛" : "且扩张"}`);
    }
  }
  if (ind.rsi14 !== null) {
    const r2 = ind.rsi14;
    if (r2 >= 70) {
      score -= 5;
      notes.push(`RSI ${r2.toFixed(1)} 超买，追多风险上升`);
    } else if (r2 <= 30) {
      score += 5;
      notes.push(`RSI ${r2.toFixed(1)} 超卖，追空风险上升`);
    } else if (r2 >= 55) score += 6;
    else if (r2 <= 45) score -= 6;
  }
  let adxV = 0;
  if (ind.adx) {
    adxV = ind.adx.adx;
    if (adxV < 18) {
      score *= 0.6;
      notes.push(`ADX ${adxV.toFixed(1)} 偏低，趋势不明显`);
    } else if (adxV >= 25) {
      score += ind.adx.pdi > ind.adx.mdi ? 10 : -10;
      notes.push(`ADX ${adxV.toFixed(1)}，${ind.adx.pdi > ind.adx.mdi ? "+DI 主导" : "-DI 主导"}`);
    }
  }
  if (ind.vwap !== null) score += p > ind.vwap ? 4 : -4;
  for (const b of breakouts) {
    const v = b.volumeConfirmed ? "放量" : "缩量";
    if (b.type === "breakout") {
      score += b.volumeConfirmed ? 10 : 4;
      notes.push(`${v}收盘突破 ${fmtPrice(b.level)}`);
    } else if (b.type === "breakdown") {
      score -= b.volumeConfirmed ? 10 : 4;
      notes.push(`${v}收盘跌破 ${fmtPrice(b.level)}`);
    } else if (b.type === "false_breakout_up") {
      score -= 8;
      notes.push(`上破 ${fmtPrice(b.level)} 失败（假突破）`);
    } else {
      score += 8;
      notes.push(`下破 ${fmtPrice(b.level)} 失败（假跌破）`);
    }
  }
  for (const d of divergences) {
    score += d.type === "bullish" ? 8 : -8;
    notes.push(`RSI ${d.type === "bullish" ? "底" : "顶"}背离`);
  }
  for (const pt of patterns.filter((x) => x.time >= closed[Math.max(0, i - 1)].t)) {
    if (pt.direction === "bull") score += pt.volumeConfirmed ? 7 : 4;
    if (pt.direction === "bear") score -= pt.volumeConfirmed ? 7 : 4;
  }
  if (ind.volume && ind.volume.ratio > 1.8) notes.push(`最新收盘量为 20 均量 ${ind.volume.ratio.toFixed(1)} 倍`);
  score = clamp(Math.round(score), -100, 100);
  const trend = score >= 20 ? "bull" : score <= -20 ? "bear" : "neutral";
  const strength = clamp(Math.round(Math.abs(score) * 0.6 + adxV * 0.8), 0, 100);
  return {
    interval,
    candles: closed.length,
    lastClosedTime: last.closeTime,
    close: p,
    indicators: ind,
    emaAlignment,
    trend,
    score,
    strength,
    structure,
    levels,
    patterns,
    breakouts,
    divergences,
    notes,
    provisional: provisional ? { o: provisional.o, h: provisional.h, l: provisional.l, c: provisional.c, closeTime: provisional.closeTime } : null
  };
}
const FRAME_WEIGHTS = { "15m": 0.15, "1h": 0.3, "4h": 0.3, "1d": 0.25 };
function assessDataQuality(input, states) {
  const issues = [];
  let score = 100;
  const frames = [];
  for (const iv of ANALYSIS_FRAMES) {
    const raw = input.frames[iv] ?? [];
    const st = states[iv];
    const { closed } = splitClosed(raw, input.now);
    const gaps = countGaps(closed.slice(-300), iv);
    const lastClosed = closed.length ? closed[closed.length - 1].closeTime : 0;
    frames.push({ interval: iv, candles: closed.length, lastClosed, gaps });
    if (!st) {
      issues.push(`${iv} 已收盘 K 线不足 ${MIN_CANDLES} 根`);
      score -= 25;
      continue;
    }
    if (input.now - lastClosed > INTERVAL_MS[iv] * 2 + 5e3) {
      issues.push(`${iv} K 线已过期`);
      score -= 20;
    }
    if (gaps > 0) {
      issues.push(`${iv} 存在 ${gaps} 个缺口`);
      score -= Math.min(10, gaps * 2);
    }
  }
  let staleSeconds = 0;
  if (!input.ticker) {
    issues.push("无实时行情");
    score -= 40;
    staleSeconds = Infinity;
  } else {
    staleSeconds = Math.max(0, Math.round((input.now - input.ticker.updatedAt) / 1e3));
    if (staleSeconds > input.staleSeconds) {
      issues.push(`实时行情已 ${staleSeconds}s 未更新`);
      score -= 40;
    }
  }
  if (input.market === "perp" && input.ticker && (input.ticker.fundingRate === null || input.ticker.fundingRate === void 0)) {
    issues.push("资金费率暂缺");
    score -= 3;
  }
  score = clamp(score, 0, 100);
  const ok = score >= 60 && !issues.some((x) => x.includes("过期") || x.includes("无实时行情") || x.includes("未更新"));
  return {
    ok,
    score,
    staleSeconds: Number.isFinite(staleSeconds) ? staleSeconds : 999999,
    issues,
    frames,
    newsCount: input.newsCount,
    verifiedNewsCount: input.verifiedNewsCount
  };
}
function evaluateRules(input) {
  const states = {};
  for (const iv of ANALYSIS_FRAMES) {
    const c = input.frames[iv];
    if (!c) continue;
    const st = evaluateFrame(iv, c, input.now);
    if (st) states[iv] = st;
  }
  const dq = assessDataQuality(input, states);
  let wsum = 0;
  let total = 0;
  for (const iv of ANALYSIS_FRAMES) {
    const st = states[iv];
    const w = FRAME_WEIGHTS[iv] ?? 0;
    if (st) {
      total += st.score * w;
      wsum += w;
    }
  }
  let composite = wsum > 0 ? total / wsum : 0;
  const conflicts = [];
  const sgn = (iv) => {
    const st = states[iv];
    if (!st || Math.abs(st.score) < 20) return 0;
    return Math.sign(st.score);
  };
  if (sgn("1h") * sgn("4h") < 0) conflicts.push("1H 与 4H 方向相反");
  if (sgn("4h") * sgn("1d") < 0) conflicts.push("4H 与日线方向相反");
  if (sgn("15m") * sgn("1h") < 0) conflicts.push("15m 短线与 1H 结构相反（短线回调/反弹）");
  if (Math.sign(composite) !== 0 && sgn("1d") !== 0 && sgn("1d") !== Math.sign(composite)) conflicts.push("综合方向逆日线大级别趋势");
  const derivNotes = [];
  const fr = input.ticker?.fundingRate ?? null;
  const oi = input.ticker?.openInterest ?? null;
  if (input.market === "perp" && fr !== null) {
    if (fr >= 5e-4) {
      derivNotes.push(`资金费率 ${(fr * 100).toFixed(4)}% 偏高，多头拥挤`);
      if (composite > 0) composite -= 6;
    } else if (fr <= -3e-4) {
      derivNotes.push(`资金费率 ${(fr * 100).toFixed(4)}% 为负，空头拥挤`);
      if (composite < 0) composite += 6;
    } else derivNotes.push(`资金费率 ${(fr * 100).toFixed(4)}% 处于中性区间`);
  }
  composite = Math.round(clamp(composite, -100, 100));
  const waitReasons = [];
  let bias = "WAIT";
  const major = conflicts.filter((c) => !c.startsWith("15m"));
  if (!dq.ok) waitReasons.push("数据质量不足：" + dq.issues.slice(0, 3).join("；"));
  if (Math.abs(composite) < 30) waitReasons.push(`综合评分 ${composite} 未达方向阈值 ±30`);
  if (major.length) waitReasons.push("多周期冲突：" + major.join("；"));
  if (waitReasons.length === 0) bias = composite > 0 ? "LONG" : "SHORT";
  const a = Math.abs(composite);
  return {
    symbol: input.symbol,
    market: input.market,
    timestamp: input.now,
    price: input.ticker?.last ?? states["15m"]?.close ?? 0,
    frames: states,
    compositeScore: composite,
    bias,
    strengthLabel: a < 30 ? "弱" : a < 55 ? "中" : "强",
    conflicts,
    waitReasons,
    derivatives: { fundingRate: fr, openInterest: oi, notes: derivNotes },
    dataQuality: dq
  };
}
function collectLevels(rules) {
  const out = [];
  for (const iv of ["1h", "4h", "1d"]) {
    const st = rules.frames[iv];
    if (st) out.push(...st.levels);
  }
  return out;
}
function buildPlan(direction, rules, risk, market) {
  const h1 = rules.frames["1h"];
  const price = rules.price;
  const atr2 = h1?.indicators.atr14 ?? null;
  if (!h1 || !atr2 || !price || atr2 <= 0) return null;
  const levels = collectLevels(rules);
  const sign = direction === "LONG" ? 1 : -1;
  const reasons = [];
  let lo;
  let hi;
  if (direction === "LONG") {
    hi = price;
    lo = price - 0.5 * atr2;
    const sup = levels.filter((l) => l.price < price && l.price > price - atr2).sort((a, b) => b.price - a.price)[0];
    if (sup) lo = Math.max(lo, sup.price);
  } else {
    lo = price;
    hi = price + 0.5 * atr2;
    const res = levels.filter((l) => l.price > price && l.price < price + atr2).sort((a, b) => a.price - b.price)[0];
    if (res) hi = Math.min(hi, res.price);
  }
  const entry = (lo + hi) / 2;
  let stop;
  if (direction === "LONG") {
    const sup = levels.filter((l) => l.price < lo - 0.5 * atr2 && l.price > entry - 3 * atr2).sort((a, b) => b.price - a.price)[0];
    if (sup) {
      stop = sup.price - 0.3 * atr2;
      reasons.push(`止损置于支撑 ${fmtPrice(sup.price)} 下方 0.3 ATR`);
    } else {
      stop = entry - risk.atrStopMult * atr2;
      reasons.push(`止损 = 入场参考 − ${risk.atrStopMult} × ATR(1H)`);
    }
  } else {
    const res = levels.filter((l) => l.price > hi + 0.5 * atr2 && l.price < entry + 3 * atr2).sort((a, b) => a.price - b.price)[0];
    if (res) {
      stop = res.price + 0.3 * atr2;
      reasons.push(`止损置于阻力 ${fmtPrice(res.price)} 上方 0.3 ATR`);
    } else {
      stop = entry + risk.atrStopMult * atr2;
      reasons.push(`止损 = 入场参考 + ${risk.atrStopMult} × ATR(1H)`);
    }
  }
  const R = Math.abs(entry - stop);
  const ahead = levels.filter((l) => direction === "LONG" ? l.price > entry + 0.8 * R : l.price < entry - 0.8 * R).sort((a, b) => direction === "LONG" ? a.price - b.price : b.price - a.price);
  let tp1 = ahead[0]?.price ?? entry + sign * 1.5 * R;
  if (ahead[0]) reasons.push(`TP1 参考前方${direction === "LONG" ? "阻力" : "支撑"} ${fmtPrice(ahead[0].price)}`);
  else reasons.push("前方无可用关键位，TP1 = 1.5R");
  let tp2 = ahead.find((l) => Math.abs(l.price - entry) > Math.abs(tp1 - entry) + 0.5 * R)?.price ?? entry + sign * 3 * R;
  if (sign * (tp2 - tp1) <= 0) tp2 = tp1 + sign * 1.5 * R;
  tp1 = round(tp1, 6);
  tp2 = round(tp2, 6);
  const rr1 = R > 0 ? Math.abs(tp1 - entry) / R : 0;
  const rr2 = R > 0 ? Math.abs(tp2 - entry) / R : 0;
  const feePct = market === "perp" ? risk.feePctPerp : risk.feePctSpot;
  const roundTripPct = 2 * feePct + 2 * risk.slippagePct;
  const costAbs = entry * roundTripPct / 100;
  const costInR = R > 0 ? costAbs / R : 0;
  const netRR1 = R > 0 ? (Math.abs(tp1 - entry) - costAbs) / (R + costAbs) : 0;
  const invalidation = direction === "LONG" ? [`1H 收盘跌破 ${fmtPrice(stop)}`, `4H 结构转为 LH/LL`, "出现放量假突破或强利空且价格同步走弱"] : [`1H 收盘升破 ${fmtPrice(stop)}`, `4H 结构转为 HH/HL`, "出现放量假跌破或强利多且价格同步走强"];
  const riskPctOfPrice = R / entry * 100;
  let valid = true;
  if (netRR1 < risk.minRR) {
    valid = false;
    reasons.push(`扣除成本后 RR ${netRR1.toFixed(2)} < 最低要求 ${risk.minRR}`);
  }
  if (riskPctOfPrice > 8) {
    valid = false;
    reasons.push(`止损距离 ${riskPctOfPrice.toFixed(1)}% 过宽`);
  }
  if (R <= 0) valid = false;
  const riskBudget = risk.accountSize * risk.riskPct / 100;
  const qty = R + costAbs > 0 ? riskBudget / (R + costAbs) : 0;
  return {
    direction,
    entryZone: [round(lo, 6), round(hi, 6)],
    entryRef: round(entry, 6),
    stopLoss: round(stop, 6),
    tp1,
    tp2,
    rr1: round(rr1, 2),
    rr2: round(rr2, 2),
    netRR1: round(netRR1, 2),
    riskPerUnit: round(R, 6),
    atr: round(atr2, 6),
    costs: { feePct, slippagePct: risk.slippagePct, roundTripCostPct: round(roundTripPct, 4), costInR: round(costInR, 3) },
    position: risk.accountSize > 0 ? { riskBudget: round(riskBudget, 2), qty: round(qty, 6), notional: round(qty * entry, 2) } : null,
    valid,
    reasons,
    invalidation
  };
}
function describeCost(plan) {
  if (!plan) return "无有效交易计划，未计算成本";
  return `往返手续费+滑点约 ${plan.costs.roundTripCostPct.toFixed(3)}%，约占 1R 的 ${(plan.costs.costInR * 100).toFixed(1)}%；扣成本后 RR(TP1) ${plan.netRR1.toFixed(2)}`;
}
const str = { type: "string" };
const strArr = { type: "array", items: { type: "string" } };
const scenario$1 = {
  type: "object",
  additionalProperties: false,
  required: ["trigger", "path", "invalidation"],
  properties: { trigger: str, path: str, invalidation: str }
};
const AI_OUTPUT_JSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "signal",
    "trend",
    "signal_strength",
    "market_structure",
    "technical_reasons",
    "news_impact",
    "risk_factors",
    "invalidation_conditions",
    "uncertainty",
    "summary",
    "professional_analysis",
    "scenarios",
    "key_levels_referenced"
  ],
  properties: {
    signal: { type: "string", enum: ["LONG", "SHORT", "WAIT"] },
    trend: { type: "string", enum: ["bull", "bear", "neutral"] },
    signal_strength: { type: "integer", minimum: 0, maximum: 100 },
    market_structure: str,
    technical_reasons: strArr,
    news_impact: {
      type: "object",
      additionalProperties: false,
      required: ["summary", "items"],
      properties: {
        summary: str,
        items: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            required: ["id", "effect", "reasoning"],
            properties: { id: str, effect: { type: "string", enum: ["bullish", "bearish", "neutral", "uncertain"] }, reasoning: str }
          }
        }
      }
    },
    risk_factors: strArr,
    invalidation_conditions: strArr,
    uncertainty: str,
    summary: str,
    professional_analysis: str,
    scenarios: {
      type: "object",
      additionalProperties: false,
      required: ["bull", "bear"],
      properties: { bull: scenario$1, bear: scenario$1 }
    },
    key_levels_referenced: { type: "array", items: { type: "number" } }
  }
};
const r = (n, d = 2) => n === null || n === void 0 || !isFinite(n) ? null : Math.round(n * 10 ** d) / 10 ** d;
const iso = (t) => new Date(t).toISOString().replace(".000Z", "Z");
function planBrief(p) {
  if (!p) return null;
  return {
    entry_zone: [p.entryZone[0], p.entryZone[1]],
    stop_loss: p.stopLoss,
    take_profit_1: p.tp1,
    take_profit_2: p.tp2,
    rr_tp1: p.rr1,
    rr_tp2: p.rr2,
    net_rr_tp1_after_costs: p.netRR1,
    round_trip_cost_pct: p.costs.roundTripCostPct,
    meets_min_rr: p.valid,
    notes: p.reasons
  };
}
function buildContext(ci) {
  const { rules, ticker } = ci;
  const dp = rules.price >= 1e3 ? 1 : 2;
  const frames = {};
  for (const iv of ANALYSIS_FRAMES) {
    const st = rules.frames[iv];
    if (!st) {
      frames[iv] = { available: false };
      continue;
    }
    const ind = st.indicators;
    frames[iv] = {
      last_closed_candle_close_utc: iso(st.lastClosedTime),
      close: r(st.close, dp),
      ema20: r(ind.ema20, dp),
      ema50: r(ind.ema50, dp),
      ema200: r(ind.ema200, dp),
      rsi14: r(ind.rsi14, 1),
      macd_hist: r(ind.macd?.hist, 3),
      adx: r(ind.adx?.adx, 1),
      plus_di: r(ind.adx?.pdi, 1),
      minus_di: r(ind.adx?.mdi, 1),
      atr14: r(ind.atr14, dp),
      atr_pct: r(ind.atrPct, 2),
      bb_upper: r(ind.bb?.upper, dp),
      bb_lower: r(ind.bb?.lower, dp),
      bb_width_pct: r(ind.bb?.widthPct, 2),
      vwap: r(ind.vwap, dp),
      volume_vs_ma20: r(ind.volume?.ratio, 2),
      ema_alignment: st.emaAlignment,
      structure: { trend: st.structure.trend, sequence: st.structure.sequence },
      rule_score: st.score,
      rule_notes: st.notes,
      levels: st.levels.map((l) => ({ price: r(l.price, dp), kind: l.kind, touches: l.touches })),
      patterns_closed: st.patterns.map((p) => `${p.name}${p.volumeConfirmed ? "(放量)" : ""}`),
      breakouts: st.breakouts.map((b) => ({ type: b.type, level: r(b.level, dp), volume_confirmed: b.volumeConfirmed })),
      divergences: st.divergences.map((d) => `${d.indicator}_${d.type}`),
      provisional_unclosed_candle: st.provisional ? { note: "未收盘，仅供参考，不得作为确认信号", close_so_far: r(st.provisional.c, dp), closes_at_utc: iso(st.provisional.closeTime + 1) } : null
    };
  }
  return {
    symbol: rules.symbol,
    market_type: rules.market === "perp" ? "USDT 永续合约" : "现货",
    analysis_time_utc: iso(ci.now),
    reference_price: r(rules.price, dp),
    price_time_utc: ticker ? iso(ticker.updatedAt) : null,
    ticker_24h: ticker ? { change_pct: r(ticker.changePct, 2), high: r(ticker.high24, dp), low: r(ticker.low24, dp), quote_volume_usdt: r(ticker.quoteVol24, 0) } : null,
    derivatives: ci.sendDerivatives && rules.market === "perp" ? { funding_rate: ticker?.fundingRate ?? null, open_interest: ticker?.openInterest ?? null, notes: rules.derivatives.notes } : null,
    data_quality: { ok: rules.dataQuality.ok, score: rules.dataQuality.score, issues: rules.dataQuality.issues },
    timeframes: frames,
    rule_engine: {
      composite_score: rules.compositeScore,
      composite_note: "规则评分范围 -100..100，非胜率",
      bias: rules.bias,
      conflicts: rules.conflicts,
      wait_reasons: rules.waitReasons
    },
    program_trade_plans: { LONG: planBrief(ci.long), SHORT: planBrief(ci.short), min_rr_required: ci.minRR },
    news: ci.news.map((n) => ({
      id: n.id,
      title: n.title,
      source: n.source,
      source_tier: n.sourceTier === 1 ? "官方机构" : n.sourceTier === 2 ? "主流专业媒体" : "其他",
      published_utc: iso(n.publishedAt),
      verification: n.verification === "official" ? "官方发布" : n.verification === "verified" ? "多源核实" : "待核实",
      nature: n.nature === "fact" ? "事实" : n.nature === "report" ? "媒体报道" : "媒体观点",
      category: CATEGORY_LABEL[n.category],
      impact: n.impact,
      rule_sentiment: SENTIMENT_LABEL[n.sentiment],
      rule_sentiment_basis: n.sentimentBasis,
      summary: n.summary.slice(0, 240)
    }))
  };
}
const SYSTEM_PROMPT = `你是 NEURAL TRADE 的加密货币市场分析引擎，为人类交易者提供决策辅助，而不是交易执行者。

严格规则：
1. 你没有实时行情和互联网访问能力。唯一的事实来源是用户消息中的 JSON 上下文。禁止使用记忆中的价格、新闻或事件，禁止编造任何不在上下文中的数据。
2. 只依据"已收盘 K 线"的指标形成判断；provisional_unclosed_candle 仅为临时信息，不能作为确认信号。
3. 新闻：区分事实（官方发布）、媒体报道与媒体观点；标记为"待核实"的新闻不能作为方向判断的唯一依据。必须结合价格实际反应评估新闻，不能因利好就断定上涨。news_impact.items 中的 id 必须来自上下文 news 列表。
4. 止损、止盈、入场区间与风险收益比由程序计算（program_trade_plans），你不得自行编造新价位。若你选择 LONG 或 SHORT，应对应 meets_min_rr=true 的程序方案。
5. 当多周期冲突、风险收益比不足、数据质量不足或新闻影响不明时，优先给出 WAIT。不要为了给出信号而强行选择方向。
6. signal_strength 是你对证据一致性的主观强度（0-100），不是胜率；禁止在任何字段中声称胜率或保证收益。
7. key_levels_referenced 只列出你在分析中引用过的、来自上下文的价位。
8. 所有文字字段使用简体中文，简洁专业。professional_analysis 为 4-8 句的多周期技术分析。

只输出一个符合约定结构的 JSON 对象，不要输出 Markdown 或其他文字。`;
const OUTPUT_FORMAT_HINT = `输出 JSON 结构（所有字段必填）：
{"signal":"LONG|SHORT|WAIT","trend":"bull|bear|neutral","signal_strength":0-100整数,"market_structure":"字符串","technical_reasons":["..."],"news_impact":{"summary":"...","items":[{"id":"新闻id","effect":"bullish|bearish|neutral|uncertain","reasoning":"..."}]},"risk_factors":["..."],"invalidation_conditions":["..."],"uncertainty":"...","summary":"一句话结论","professional_analysis":"...","scenarios":{"bull":{"trigger":"...","path":"...","invalidation":"..."},"bear":{"trigger":"...","path":"...","invalidation":"..."}},"key_levels_referenced":[数字]}`;
function buildUserMessage(context, includeFormatHint) {
  return `以下是程序实时采集并计算的市场上下文（JSON）。请据此完成分析并输出 json。

${JSON.stringify(context)}${"\n\n" + OUTPUT_FORMAT_HINT}`;
}
function extractJson(text2) {
  const t = text2.trim();
  try {
    return JSON.parse(t);
  } catch {
  }
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) {
    try {
      return JSON.parse(fence[1]);
    } catch {
    }
  }
  const s = t.indexOf("{");
  const e = t.lastIndexOf("}");
  if (s >= 0 && e > s) return JSON.parse(t.slice(s, e + 1));
  throw new Error("模型输出中未找到 JSON 对象");
}
function newsSources(news) {
  return news.map((n) => ({ title: n.title, url: n.url, source: n.source, publishedAt: n.publishedAt, verification: n.verification }));
}
function frameReasons(rules) {
  const out = [];
  for (const iv of ["1d", "4h", "1h", "15m"]) {
    const st = rules.frames[iv];
    if (!st) continue;
    out.push(`[${iv}] 评分 ${st.score}：${st.notes.slice(0, 3).join("；")}`);
  }
  return out;
}
function structureText(rules) {
  return ["1d", "4h", "1h", "15m"].map((iv) => {
    const st = rules.frames[iv];
    if (!st) return `${iv}: 无数据`;
    const t = st.structure.trend === "up" ? "上升" : st.structure.trend === "down" ? "下降" : "震荡";
    return `${iv}: ${t}`;
  }).join(" · ");
}
function planFields(plan) {
  if (!plan) return { entry_zone: null, stop_loss: null, take_profit_1: null, take_profit_2: null, risk_reward_ratio: null };
  return {
    entry_zone: plan.entryZone,
    stop_loss: plan.stopLoss,
    take_profit_1: plan.tp1,
    take_profit_2: plan.tp2,
    risk_reward_ratio: plan.netRR1
  };
}
const trendOfScore = (s) => s >= 20 ? "bull" : s <= -20 ? "bear" : "neutral";
function gateSignal(aiSignal, rules, long, short) {
  const notes = [];
  if (!rules.dataQuality.ok) {
    notes.push("数据质量不足，强制观望");
    return { signal: "WAIT", notes };
  }
  if (aiSignal === "WAIT") return { signal: "WAIT", notes };
  const plan = aiSignal === "LONG" ? long : short;
  if (!plan || !plan.valid) {
    notes.push(`${aiSignal} 方案未通过风控（${plan ? plan.reasons.slice(-1)[0] : "无法计算止损/止盈"}），改为观望`);
    return { signal: "WAIT", notes };
  }
  const dir = aiSignal === "LONG" ? 1 : -1;
  if (rules.bias !== "WAIT" && rules.bias !== aiSignal) {
    notes.push(`AI 方向（${aiSignal}）与规则引擎（${rules.bias}）相反，改为观望`);
    return { signal: "WAIT", notes };
  }
  const major = rules.conflicts.filter((c) => !c.startsWith("15m"));
  if (major.length) {
    notes.push("多周期存在冲突：" + major.join("；") + "，改为观望");
    return { signal: "WAIT", notes };
  }
  if (Math.sign(rules.compositeScore) !== dir || Math.abs(rules.compositeScore) < 20) {
    notes.push(`技术面综合评分 ${rules.compositeScore} 未确认 ${aiSignal}，新闻不能作为唯一依据，改为观望`);
    return { signal: "WAIT", notes };
  }
  if (rules.bias === "WAIT") notes.push("规则引擎为观望，AI 信号仅在技术面同向且风控通过时保留，强度已下调");
  return { signal: aiSignal, notes };
}
function mergeAI(mi, ai, model, usage) {
  const { rules } = mi;
  const gate = gateSignal(ai.signal, rules, mi.long, mi.short);
  const notes = [...gate.notes];
  const p = rules.price;
  const odd = (ai.key_levels_referenced || []).filter((x) => !isFinite(x) || x < p * 0.85 || x > p * 1.15);
  if (odd.length) notes.push(`AI 引用了偏离参考价 ±15% 的价位（${odd.slice(0, 3).map(fmtPrice).join(", ")}），已忽略这些数字`);
  const byId = new Map(mi.news.map((n) => [n.id, n]));
  const known = ai.news_impact.items.filter((x) => byId.has(x.id));
  if (known.length < ai.news_impact.items.length) notes.push(`剔除 ${ai.news_impact.items.length - known.length} 条无法对应程序新闻源的 AI 新闻引用`);
  const plan = gate.signal === "LONG" ? mi.long : gate.signal === "SHORT" ? mi.short : null;
  let strength = Math.max(0, Math.min(100, Math.round(ai.signal_strength)));
  const cap = Math.min(100, Math.abs(rules.compositeScore) + 20);
  if (strength > cap) {
    strength = cap;
    notes.push(`信号强度按技术面评分上限调整为 ${cap}`);
  }
  if (gate.signal === "WAIT") strength = Math.min(strength, 40);
  if (rules.bias === "WAIT" && gate.signal !== "WAIT") strength = Math.min(strength, 55);
  return {
    id: mi.id,
    symbol: rules.symbol,
    market_type: rules.market,
    timestamp: mi.now,
    market_time: mi.ticker?.updatedAt ?? rules.timestamp,
    reference_price: rules.price,
    timeframe: mi.timeframe ?? "1h",
    signal: gate.signal,
    trend: ai.trend,
    signal_strength: strength,
    market_structure: ai.market_structure || structureText(rules),
    technical_reasons: ai.technical_reasons.slice(0, 10),
    news_impact: {
      summary: ai.news_impact.summary,
      items: known.map((x) => {
        const n = byId.get(x.id);
        return {
          id: x.id,
          title: n.title,
          effect: `${SENTIMENT_LABEL[x.effect]}：${x.reasoning}`,
          nature: n.nature,
          verification: n.verification
        };
      })
    },
    ...planFields(plan),
    cost_impact: describeCost(plan),
    invalidation_conditions: plan ? [...plan.invalidation, ...ai.invalidation_conditions].slice(0, 6) : ai.invalidation_conditions.slice(0, 6),
    risk_factors: [...ai.risk_factors, ...rules.derivatives.notes.filter((n) => n.includes("拥挤"))].slice(0, 8),
    uncertainty: ai.uncertainty,
    summary: ai.summary,
    professional: ai.professional_analysis,
    scenarios: ai.scenarios,
    data_quality: rules.dataQuality,
    sources: { market: mi.marketSources, news: newsSources(mi.news) },
    model,
    mode: "ai",
    status: rules.dataQuality.ok ? "ok" : "unreliable",
    unreliableReason: rules.dataQuality.ok ? void 0 : rules.dataQuality.issues.join("；"),
    rule_bias: rules.bias,
    ai_signal: ai.signal,
    gating_notes: notes,
    usage,
    trigger: mi.trigger
  };
}
function rulesOnly(mi, reason) {
  const { rules } = mi;
  let signal = rules.bias;
  const notes = [`基础指标分析（未调用 AI）：${reason}`];
  const plan = signal === "LONG" ? mi.long : signal === "SHORT" ? mi.short : null;
  if (signal !== "WAIT" && (!plan || !plan.valid)) {
    notes.push(`${signal} 方案未通过风控，改为观望`);
    signal = "WAIT";
  }
  const finalPlan = signal === "WAIT" ? null : plan;
  const h1 = rules.frames["1h"];
  const lv = (kind) => h1?.levels.filter((l) => l.kind === kind).map((l) => fmtPrice(l.price)).slice(0, 2).join(" / ") || "—";
  return {
    id: mi.id,
    symbol: rules.symbol,
    market_type: rules.market,
    timestamp: mi.now,
    market_time: mi.ticker?.updatedAt ?? rules.timestamp,
    reference_price: rules.price,
    timeframe: mi.timeframe ?? "1h",
    signal,
    trend: trendOfScore(rules.compositeScore),
    signal_strength: Math.min(signal === "WAIT" ? 40 : 100, Math.abs(rules.compositeScore)),
    market_structure: structureText(rules),
    technical_reasons: frameReasons(rules),
    news_impact: {
      summary: mi.news.length ? `时间窗内 ${mi.news.length} 条相关新闻，规则情绪仅供参考（未经 AI 解读）` : "时间窗内无相关新闻",
      items: mi.news.slice(0, 6).map((n) => ({
        id: n.id,
        title: n.title,
        effect: `${SENTIMENT_LABEL[n.sentiment]}（规则判断）`,
        nature: n.nature,
        verification: n.verification
      }))
    },
    ...planFields(finalPlan),
    cost_impact: describeCost(finalPlan),
    invalidation_conditions: finalPlan ? finalPlan.invalidation : ["方向确认前保持观望"],
    risk_factors: [...rules.conflicts, ...rules.derivatives.notes, ...rules.dataQuality.issues].slice(0, 8),
    uncertainty: rules.waitReasons.length ? rules.waitReasons.join("；") : "规则评分不代表胜率；未结合 AI 对新闻与情景的综合解读",
    summary: signal === "WAIT" ? `规则引擎综合评分 ${rules.compositeScore}，暂无满足条件的方向信号，建议观望。` : `规则引擎综合评分 ${rules.compositeScore}（${rules.strengthLabel}），技术面偏${signal === "LONG" ? "多" : "空"}，风控方案已通过。`,
    professional: frameReasons(rules).join("\n"),
    scenarios: {
      bull: { trigger: `1H 放量收盘站上 ${lv("resistance")}`, path: "回踩不破后延续上行", invalidation: `跌回 ${lv("support")} 下方` },
      bear: { trigger: `1H 收盘跌破 ${lv("support")}`, path: "反抽不过后继续下行", invalidation: `重新站上 ${lv("resistance")}` }
    },
    data_quality: rules.dataQuality,
    sources: { market: mi.marketSources, news: newsSources(mi.news) },
    model: null,
    mode: "rules_only",
    status: rules.dataQuality.ok ? "ok" : "unreliable",
    unreliableReason: rules.dataQuality.ok ? void 0 : rules.dataQuality.issues.join("；"),
    rule_bias: rules.bias,
    ai_signal: null,
    gating_notes: notes,
    trigger: mi.trigger
  };
}
function unreliable(mi, reason, model) {
  const base = rulesOnly(mi, reason);
  return {
    ...base,
    signal: "WAIT",
    signal_strength: 0,
    entry_zone: null,
    stop_loss: null,
    take_profit_1: null,
    take_profit_2: null,
    risk_reward_ratio: null,
    status: "unreliable",
    unreliableReason: reason,
    summary: "无法生成可靠信号：" + reason,
    model,
    mode: model ? "ai" : "rules_only"
  };
}
const normalize = (s) => s.replace(/[\s，。,.；;：:（）()]/g, "").toLowerCase();
function compareDual(id, a, b, rules) {
  const tokens = (x) => new Set(normalize(x).match(/[一-龥]{2}|[a-z0-9]+/g) ?? []);
  const sim = (x, y) => {
    const A = tokens(x);
    const B = tokens(y);
    if (!A.size || !B.size) return 0;
    let i = 0;
    for (const t of A) if (B.has(t)) i++;
    return i / Math.min(A.size, B.size);
  };
  const common = [];
  for (const ra of a.technical_reasons) {
    const match = b.technical_reasons.find((rb) => sim(ra, rb) >= 0.45);
    if (match) common.push(ra);
  }
  const conflicts = [];
  if (a.signal !== b.signal) conflicts.push(`方向分歧：${a.model?.model ?? "A"} 为 ${a.signal}，${b.model?.model ?? "B"} 为 ${b.signal}`);
  if (a.ai_signal !== b.ai_signal && a.ai_signal && b.ai_signal) conflicts.push(`模型原始判断：${a.ai_signal} vs ${b.ai_signal}`);
  if (a.trend !== b.trend) conflicts.push(`趋势判断不同：${a.trend} vs ${b.trend}`);
  if (Math.abs(a.signal_strength - b.signal_strength) >= 25) conflicts.push(`强度差异较大：${a.signal_strength} vs ${b.signal_strength}`);
  const ruleWarning = [
    `规则引擎：${rules.bias}（综合评分 ${rules.compositeScore}，${rules.strengthLabel}）`,
    ...rules.conflicts,
    ...rules.waitReasons,
    "两模型一致不代表预测更可靠；分歧时请以风控与失效条件为准"
  ];
  return {
    id,
    timestamp: Math.max(a.timestamp, b.timestamp),
    symbol: a.symbol,
    market_type: a.market_type,
    a,
    b,
    agree: a.signal === b.signal,
    common,
    conflicts,
    ruleWarning
  };
}
const scenario = zod.z.object({
  trigger: zod.z.string().min(1).max(600),
  path: zod.z.string().min(1).max(800),
  invalidation: zod.z.string().min(1).max(600)
});
const clampStrArr = (max) => zod.z.array(zod.z.string().max(600)).max(max);
const AIOutputSchema = zod.z.object({
  signal: zod.z.enum(["LONG", "SHORT", "WAIT"]),
  trend: zod.z.enum(["bull", "bear", "neutral"]),
  signal_strength: zod.z.number().finite().min(0).max(100),
  market_structure: zod.z.string().max(800),
  technical_reasons: clampStrArr(16),
  news_impact: zod.z.object({
    summary: zod.z.string().max(1500),
    items: zod.z.array(zod.z.object({ id: zod.z.string(), effect: zod.z.enum(["bullish", "bearish", "neutral", "uncertain"]), reasoning: zod.z.string().max(600) })).max(30)
  }),
  risk_factors: clampStrArr(16),
  invalidation_conditions: clampStrArr(12),
  uncertainty: zod.z.string().max(1500),
  summary: zod.z.string().min(1).max(800),
  professional_analysis: zod.z.string().max(5e3),
  scenarios: zod.z.object({ bull: scenario, bear: scenario }),
  key_levels_referenced: zod.z.array(zod.z.number()).max(40).default([])
}).strict();
function parseAIOutput(data) {
  const r2 = AIOutputSchema.safeParse(data);
  if (r2.success) return { ok: true, value: r2.data };
  const msg = r2.error.issues.slice(0, 5).map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`).join("; ");
  return { ok: false, error: msg };
}
const PlanSanitySchema = zod.z.object({
  signal: zod.z.enum(["LONG", "SHORT", "WAIT"]),
  reference_price: zod.z.number().positive(),
  timestamp: zod.z.number().int().positive(),
  market_time: zod.z.number().int().positive(),
  entry_zone: zod.z.tuple([zod.z.number().positive(), zod.z.number().positive()]).nullable(),
  stop_loss: zod.z.number().positive().nullable(),
  take_profit_1: zod.z.number().positive().nullable(),
  take_profit_2: zod.z.number().positive().nullable()
}).superRefine((v, ctx) => {
  if (v.signal === "WAIT") return;
  if (!v.entry_zone || v.stop_loss === null || v.take_profit_1 === null || v.take_profit_2 === null) {
    ctx.addIssue({ code: zod.z.ZodIssueCode.custom, message: "方向信号缺少完整价位" });
    return;
  }
  const mid = (v.entry_zone[0] + v.entry_zone[1]) / 2;
  const long = v.signal === "LONG";
  const okOrder = long ? v.stop_loss < mid && v.take_profit_1 > mid && v.take_profit_2 >= v.take_profit_1 : v.stop_loss > mid && v.take_profit_1 < mid && v.take_profit_2 <= v.take_profit_1;
  if (!okOrder) ctx.addIssue({ code: zod.z.ZodIssueCode.custom, message: "止损/止盈与方向不一致" });
  if (Math.abs(mid - v.reference_price) / v.reference_price > 0.05) ctx.addIssue({ code: zod.z.ZodIssueCode.custom, message: "入场区偏离参考价超过 5%" });
  if (v.timestamp - v.market_time > 10 * 6e4) ctx.addIssue({ code: zod.z.ZodIssueCode.custom, message: "行情时间与分析时间相差超过 10 分钟" });
});
const log$3 = createLogger("analysis");
const TOTAL = 7;
class Cancelled extends Error {
}
class AnalysisService extends events.EventEmitter {
  constructor(settings, market, news, ai, store) {
    super();
    this.settings = settings;
    this.market = market;
    this.news = news;
    this.ai = ai;
    this.store = store;
  }
  running = /* @__PURE__ */ new Map();
  latestMap = /* @__PURE__ */ new Map();
  cache = /* @__PURE__ */ new Map();
  autoTimers = /* @__PURE__ */ new Map();
  lastEventAt = /* @__PURE__ */ new Map();
  eventKeys = /* @__PURE__ */ new Set();
  start() {
    this.market.on("kline-closed", (ev) => this.onKlineClosed(ev));
    this.news.on("new", (items) => this.onNews(items));
  }
  // ---------------- 公共接口 ----------------
  run(opts) {
    const id = crypto.randomUUID();
    const ctrl = new AbortController();
    this.running.set(id, { ctrl, symbol: opts.symbol });
    void this.execute(id, opts, ctrl.signal).finally(() => this.running.delete(id));
    return id;
  }
  cancel(id) {
    this.running.get(id)?.ctrl.abort(new Cancelled("用户取消"));
  }
  isRunning(symbol) {
    return [...this.running.values()].some((r2) => r2.symbol === symbol);
  }
  latest(symbol, market) {
    return this.latestMap.get(`${symbol}|${market}`) ?? this.store.latestAnalysis(symbol, market);
  }
  latestDual(symbol, market) {
    return this.store.latestDual(symbol, market);
  }
  // ---------------- 自动触发 ----------------
  onKlineClosed(ev) {
    const a = this.settings.get().analysis;
    if (!a.autoEnabled || ev.market !== a.marketType || ev.interval !== a.autoInterval || !a.autoSymbols.includes(ev.symbol)) return;
    const k = ev.symbol;
    if (this.autoTimers.has(k)) clearTimeout(this.autoTimers.get(k));
    this.autoTimers.set(
      k,
      setTimeout(() => {
        this.autoTimers.delete(k);
        if (this.isRunning(ev.symbol)) return;
        log$3.info(`${ev.symbol} ${ev.interval} 收盘，触发自动分析`);
        this.run({ symbol: ev.symbol, market: ev.market, trigger: "auto", dual: a.dualModel });
      }, 4e3)
    );
  }
  /** 重要突破 / 重大新闻的额外触发：去重 + 去抖 + 冷却 */
  eventTrigger(symbol, dedupeKey, reason) {
    const a = this.settings.get().analysis;
    if (!a.autoEnabled || !a.eventTriggers || !a.autoSymbols.includes(symbol)) return;
    if (this.eventKeys.has(dedupeKey)) return;
    this.eventKeys.add(dedupeKey);
    if (this.eventKeys.size > 2e3) this.eventKeys.clear();
    const last = this.lastEventAt.get(symbol) ?? 0;
    if (Date.now() - last < a.eventCooldownMin * 6e4) {
      log$3.info(`事件触发处于冷却期，忽略：${symbol} ${reason}`);
      return;
    }
    const tk = `evt|${symbol}`;
    if (this.autoTimers.has(tk)) return;
    this.lastEventAt.set(symbol, Date.now());
    this.autoTimers.set(
      tk,
      setTimeout(() => {
        this.autoTimers.delete(tk);
        if (this.isRunning(symbol)) return;
        log$3.info(`事件触发分析：${symbol} ${reason}`);
        this.run({ symbol, market: a.marketType, trigger: "event", dual: a.dualModel });
      }, a.debounceSec * 1e3)
    );
  }
  onNews(items) {
    const now = Date.now();
    for (const n of items) {
      if (n.impact !== "high" || n.verification === "unverified" || now - n.publishedAt > 90 * 6e4) continue;
      const targets = n.coins.includes("ETH") && !n.coins.includes("BTC") ? ["ETHUSDT"] : n.coins.includes("BTC") && !n.coins.includes("ETH") ? ["BTCUSDT"] : ["BTCUSDT", "ETHUSDT"];
      for (const s of targets) this.eventTrigger(s, `news|${n.id}`, `重大新闻：${n.title}`);
    }
  }
  // ---------------- 执行流程 ----------------
  progress(p) {
    this.emit("progress", { ...p, total: TOTAL });
  }
  check(signal) {
    if (signal.aborted) throw new Cancelled("已取消");
  }
  async execute(id, opts, signal) {
    const { symbol, market } = opts;
    const step = (n, label, state = "running", detail) => this.progress({ requestId: id, symbol, step: n, label, state, detail });
    const s = this.settings.get();
    try {
      step(1, "刷新实时行情与 K 线");
      try {
        await this.market.refreshForAnalysis(symbol, market);
      } catch (e) {
        log$3.warn("刷新行情失败（将以现有数据评估质量）", e);
      }
      this.check(signal);
      step(2, "本地计算指标、结构与风控");
      const now = this.market.now();
      const ticker = this.market.ticker(symbol, market);
      const rules = evaluateRules({
        symbol,
        market,
        frames: this.market.framesSync(symbol, market),
        ticker,
        now,
        staleSeconds: s.market.staleSeconds,
        newsCount: 0,
        verifiedNewsCount: 0
      });
      const long = buildPlan("LONG", rules, s.risk, market);
      const short = buildPlan("SHORT", rules, s.risk, market);
      this.check(signal);
      step(3, "获取最近新闻与宏观事件");
      let news = [];
      try {
        const all = await this.news.ensureFresh(10 * 6e4);
        news = selectForAnalysis(all, symbol === "BTCUSDT" ? "BTC" : "ETH", Date.now(), s.analysis.newsWindowHours, s.analysis.maxNewsItems);
      } catch (e) {
        log$3.warn("新闻获取失败", e);
      }
      rules.dataQuality.newsCount = news.length;
      rules.dataQuality.verifiedNewsCount = news.filter((n) => n.verification !== "unverified").length;
      this.check(signal);
      step(4, "构造结构化分析上下文");
      const mi = {
        id,
        now: Date.now(),
        rules,
        ticker,
        long,
        short,
        news,
        marketSources: this.market.sources(market),
        trigger: opts.trigger,
        timeframe: "1h"
      };
      if (!rules.dataQuality.ok) {
        step(5, "数据质量不足，跳过模型调用", "error", rules.dataQuality.issues.join("；"));
        return this.finish(id, unreliable(mi, "数据过期或重要数据缺失：" + rules.dataQuality.issues.join("；"), null));
      }
      const context = buildContext({ rules, ticker, long, short, news, minRR: s.risk.minRR, sendDerivatives: s.analysis.sendDerivatives, now });
      const primary = this.ai.resolve(s.analysis.primaryProviderId, s.analysis.primaryModel);
      const wantDual = opts.dual ?? s.analysis.dualModel;
      const secondary = wantDual ? this.ai.resolve(s.analysis.secondaryProviderId, s.analysis.secondaryModel) : null;
      if (!primary) {
        step(5, "未配置可用模型，使用基础指标分析", "error");
        return this.finish(id, rulesOnly(mi, "未配置可用的 AI 模型（请在 AI MODEL HUB 中设置密钥与默认模型）"));
      }
      const newsHash = fnv1a(news.map((n) => n.id).join(","));
      const lastClosed = rules.frames["15m"]?.lastClosedTime ?? 0;
      const cacheKey = `${primary.provider.id}|${primary.model}|${secondary?.model ?? ""}|${symbol}|${market}|${lastClosed}|${newsHash}`;
      const cached = this.cache.get(cacheKey);
      if (opts.trigger !== "manual" && cached && Date.now() - cached.at < s.analysis.cacheMinutes * 6e4) {
        step(5, "命中分析缓存（行情与新闻未变化）", "done");
        return this.finish(id, { ...cached.result, id, trigger: opts.trigger, timestamp: Date.now() }, true);
      }
      const label = secondary ? `调用 ${primary.model} 与 ${secondary.model}` : `调用 ${primary.model}`;
      step(5, label);
      const user = buildUserMessage(context, true);
      const callOne = async (target) => {
        const model = { providerId: target.provider.id, providerName: target.provider.name, model: target.model };
        let attempt = 0;
        for (; ; ) {
          try {
            const r2 = await this.ai.call(
              target.provider.id,
              { model: target.model, system: SYSTEM_PROMPT, user, schema: AI_OUTPUT_JSON_SCHEMA, schemaName: "neural_trade_analysis", signal },
              `${opts.trigger}:${symbol}`
            );
            let parsed;
            try {
              parsed = extractJson(r2.text);
            } catch (e) {
              return unreliable(mi, `AI 输出无法解析为 JSON：${e.message}`, model);
            }
            const v = parseAIOutput(parsed);
            if (!v.ok) return unreliable(mi, `AI 输出字段校验失败：${v.error}`, model);
            const merged = mergeAI(mi, v.value, model, { inputTokens: r2.inputTokens, outputTokens: r2.outputTokens, cost: r2.cost, latencyMs: r2.latencyMs });
            const sanity = PlanSanitySchema.safeParse(merged);
            if (!sanity.success) return unreliable(mi, `结果合理性检查未通过：${sanity.error.issues.map((i) => i.message).join("；")}`, model);
            return merged;
          } catch (e) {
            if (signal.aborted) throw new Cancelled("已取消");
            if (e instanceof BudgetError) return rulesOnly(mi, e.message);
            const retryable = e instanceof HttpError && e.retryable;
            if (retryable && attempt < s.analysis.retries) {
              attempt++;
              step(5, `${label}（第 ${attempt} 次重试）`, "running", e.message);
              await new Promise((res2) => setTimeout(res2, 2e3 * attempt));
              this.check(signal);
              continue;
            }
            return rulesOnly(mi, `AI 调用失败（${e.message}），已降级为基础指标分析`);
          }
        }
      };
      if (secondary) {
        const [a, b] = await Promise.all([callOne(primary), callOne(secondary)]);
        this.check(signal);
        step(6, "校验输出并执行风险规则检查", "done");
        const dual = compareDual(crypto.randomUUID(), a, b, rules);
        this.store.saveDual(dual);
        this.emit("dual", dual);
        if (a.status === "ok" && a.mode === "ai") this.cache.set(cacheKey, { at: Date.now(), result: a });
        return this.finish(id, a);
      }
      const res = await callOne(primary);
      this.check(signal);
      step(6, "校验输出并执行风险规则检查", "done");
      if (res.status === "ok" && res.mode === "ai") this.cache.set(cacheKey, { at: Date.now(), result: res });
      return this.finish(id, res);
    } catch (e) {
      if (e instanceof Cancelled || signal.aborted) {
        this.progress({ requestId: id, symbol, step: 0, label: "分析已取消", state: "cancelled" });
        return;
      }
      log$3.error("分析流程异常", e);
      this.progress({ requestId: id, symbol, step: 0, label: "分析失败", state: "error", detail: e.message });
    }
  }
  finish(id, r2, fromCache = false) {
    const k = `${r2.symbol}|${r2.market_type}`;
    const prevOk = this.store.latestAnalysis(r2.symbol, r2.market_type, true);
    this.store.saveAnalysis(r2);
    this.latestMap.set(k, r2);
    this.progress({ requestId: id, symbol: r2.symbol, step: 7, label: fromCache ? "完成（缓存）" : "分析完成", state: "done" });
    this.emit("result", r2);
    if (r2.status === "ok" && prevOk && prevOk.signal !== r2.signal) this.emit("signal-change", { prev: prevOk, next: r2 });
  }
}
const SIG = { LONG: "考虑做多", SHORT: "考虑做空", WAIT: "观望" };
class AlertService extends events.EventEmitter {
  constructor(settings, market, news, store) {
    super();
    this.settings = settings;
    this.market = market;
    this.news = news;
    this.store = store;
  }
  last = /* @__PURE__ */ new Map();
  downSince = /* @__PURE__ */ new Map();
  start() {
    this.market.on("anomaly", (t) => this.onAnomaly(t));
    this.market.on("conn", (c) => this.onConn(c));
    this.market.on("kline-closed", (ev) => this.onKline(ev));
    this.news.on("new", (items) => this.onNews(items));
  }
  list() {
    return this.store.alerts(100);
  }
  push(a, cooldownKey, cooldownMs) {
    const cfg = this.settings.get().alerts;
    if (!cfg.enabled) return;
    const now = Date.now();
    if (cooldownKey) {
      const cd = cooldownMs ?? cfg.cooldownMin * 6e4;
      if (now - (this.last.get(cooldownKey) ?? 0) < cd) return;
      this.last.set(cooldownKey, now);
    }
    const ev = { ...a, id: crypto.randomUUID(), at: now };
    this.store.saveAlert(ev);
    this.emit("alert", ev);
    const focus = this.settings.get().window.focusMode;
    if (cfg.desktop && electron.Notification.isSupported() && (!focus || ev.level === "critical")) {
      new electron.Notification({ title: `NEURAL TRADE · ${ev.title}`, body: ev.body, silent: ev.level === "info" }).show();
    }
  }
  onAnomaly(t) {
    if (!this.settings.get().alerts.anomaly || !t.anomaly) return;
    const label = `${t.symbol.replace("USDT", "")} ${t.market === "perp" ? "永续" : "现货"}`;
    this.push(
      { level: "warn", kind: "anomaly", symbol: t.symbol, title: `${label} 价格异常波动`, body: `${t.anomaly.windowSec} 秒内变动 ${fmtPct(t.anomaly.pct)}，现价 ${fmtPrice(t.last)}` },
      `anomaly|${t.symbol}|${t.market}`,
      5 * 6e4
    );
  }
  onConn(c) {
    if (!this.settings.get().alerts.network) return;
    const k = `${c.exchange}|${c.market}`;
    if (c.status === "open") {
      const since = this.downSince.get(k);
      this.downSince.delete(k);
      if (since && Date.now() - since > 15e3) this.push({ level: "info", kind: "network", title: "行情连接已恢复", body: `${c.exchange} ${c.market} 已重新连接，K 线已自动回补` }, `net-up|${k}`, 6e4);
      return;
    }
    if (!this.downSince.has(k)) {
      this.downSince.set(k, Date.now());
      setTimeout(() => {
        if (this.downSince.has(k)) this.push({ level: "critical", kind: "network", title: "行情连接中断", body: `${c.exchange} ${c.market} 断线超过 15 秒（${c.error ?? "正在重连"}），信号将暂停为观望` }, `net-down|${k}`, 5 * 6e4);
      }, 15e3);
    }
  }
  onKline(ev) {
    const a = this.settings.get().alerts;
    const am = this.settings.get().analysis.marketType;
    if (ev.market !== am || ev.interval !== "15m" && ev.interval !== "1h") return;
    if (!a.breakout && !a.supportBreak) return;
    const st = evaluateFrame(ev.interval, this.market.candlesSync(ev.symbol, ev.market, ev.interval), this.market.now());
    if (!st) return;
    const coin = ev.symbol.replace("USDT", "");
    for (const b of st.breakouts.filter((x) => x.time === ev.candle.t)) {
      const vol = b.volumeConfirmed ? "放量" : "未放量";
      if (b.type === "breakout" && a.breakout) {
        this.push({ level: "warn", kind: "breakout", symbol: ev.symbol, title: `${coin} ${ev.interval} 突破阻力`, body: `收盘 ${fmtPrice(ev.candle.c)} 站上 ${fmtPrice(b.level)}（${vol}）` }, `bo|${ev.symbol}|${ev.interval}|${Math.round(b.level)}`);
        if (b.volumeConfirmed) this.emit("breakout", { symbol: ev.symbol, key: `bo|${ev.symbol}|${ev.interval}|${ev.candle.t}`, reason: `${ev.interval} 放量突破 ${fmtPrice(b.level)}` });
      } else if (b.type === "breakdown" && a.supportBreak) {
        this.push({ level: "warn", kind: "support_break", symbol: ev.symbol, title: `${coin} ${ev.interval} 跌破支撑`, body: `收盘 ${fmtPrice(ev.candle.c)} 跌破 ${fmtPrice(b.level)}（${vol}）` }, `bd|${ev.symbol}|${ev.interval}|${Math.round(b.level)}`);
        if (b.volumeConfirmed) this.emit("breakout", { symbol: ev.symbol, key: `bd|${ev.symbol}|${ev.interval}|${ev.candle.t}`, reason: `${ev.interval} 放量跌破 ${fmtPrice(b.level)}` });
      } else if ((b.type === "false_breakout_up" || b.type === "false_breakout_down") && a.breakout) {
        this.push({ level: "info", kind: "breakout", symbol: ev.symbol, title: `${coin} ${ev.interval} 疑似假突破`, body: `${b.type === "false_breakout_up" ? "上破" : "下破"} ${fmtPrice(b.level)} 后收回` }, `fb|${ev.symbol}|${ev.interval}|${Math.round(b.level)}`);
      }
    }
  }
  onNews(items) {
    if (!this.settings.get().alerts.news) return;
    const now = Date.now();
    for (const n of items) {
      if (n.impact !== "high" || now - n.publishedAt > 2 * 36e5) continue;
      const tag = n.verification === "official" ? "官方" : n.verification === "verified" ? "多源核实" : "待核实";
      this.push({ level: n.verification === "unverified" ? "info" : "warn", kind: "news", title: `突发${CATEGORY_LABEL[n.category]}新闻（${tag}）`, body: n.title }, `news|${n.id}`, 24 * 36e5);
    }
  }
  onSignalChange(prev, next) {
    if (!this.settings.get().alerts.signalChange) return;
    const coin = next.symbol.replace("USDT", "");
    this.push(
      { level: next.signal === "WAIT" ? "info" : "warn", kind: "signal_change", symbol: next.symbol, title: `${coin} 信号变化：${SIG[prev.signal]} → ${SIG[next.signal]}`, body: next.summary.slice(0, 120) },
      `sig|${next.symbol}|${next.signal}`,
      6e4
    );
  }
}
function resourcePath(name) {
  return electron.app.isPackaged ? path.join(process.resourcesPath, "resources", name) : path.join(electron.app.getAppPath(), "resources", name);
}
const log$2 = createLogger("window");
class WindowManager extends events.EventEmitter {
  constructor(settings) {
    super();
    this.settings = settings;
  }
  win = null;
  ghost = false;
  clickThrough = false;
  animTimer = null;
  saveTimer = null;
  snapping = false;
  quitting = false;
  hintShown = false;
  create() {
    const s = this.settings.get().window;
    const size = WINDOW_SIZES[s.size];
    const pos = this.restorePosition(s.size, size.width, size.height);
    const win = new electron.BrowserWindow({
      width: size.width,
      height: size.height,
      x: pos.x,
      y: pos.y,
      frame: false,
      transparent: false,
      resizable: false,
      maximizable: false,
      fullscreenable: false,
      minimizable: true,
      show: false,
      backgroundColor: "#080B12",
      roundedCorners: true,
      title: "NEURAL TRADE",
      icon: resourcePath("icon.png"),
      alwaysOnTop: s.alwaysOnTop,
      webPreferences: {
        preload: path.join(__dirname, "../preload/index.js"),
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: true,
        spellcheck: false,
        backgroundThrottling: true
      }
    });
    this.win = win;
    if (s.alwaysOnTop) win.setAlwaysOnTop(true, "floating");
    win.setOpacity(s.opacity);
    win.once("ready-to-show", () => win.show());
    win.on("moved", () => this.onMoved());
    win.on("close", (e) => {
      if (!this.quitting) {
        e.preventDefault();
        win.hide();
        if (!this.hintShown && electron.Notification.isSupported()) {
          this.hintShown = true;
          new electron.Notification({ title: "NEURAL TRADE 仍在后台运行", body: "可通过托盘图标或 Ctrl+Alt+H 恢复窗口" }).show();
        }
      }
    });
    for (const ev of ["show", "hide", "minimize", "restore"]) {
      win.on(ev, () => {
        this.emitState();
        this.emit("visibility", win.isVisible() && !win.isMinimized());
      });
    }
    win.webContents.on("will-navigate", (e, url) => {
      if (!url.startsWith("http://localhost") && !url.startsWith("file://")) e.preventDefault();
    });
    win.webContents.setWindowOpenHandler(({ url }) => {
      if (/^https:\/\//i.test(url)) void electron.shell.openExternal(url);
      return { action: "deny" };
    });
    electron.screen.on("display-removed", () => this.ensureOnScreen());
    electron.screen.on("display-metrics-changed", () => this.ensureOnScreen());
    const devUrl = process.env["ELECTRON_RENDERER_URL"];
    if (devUrl) void win.loadURL(devUrl);
    else void win.loadFile(path.join(__dirname, "../renderer/index.html"));
    return win;
  }
  state() {
    const s = this.settings.get().window;
    const w = this.win;
    return {
      size: s.size,
      alwaysOnTop: s.alwaysOnTop,
      opacity: s.opacity,
      ghost: this.ghost,
      clickThrough: this.clickThrough,
      focusMode: s.focusMode,
      visible: !!w && w.isVisible(),
      minimized: !!w && w.isMinimized()
    };
  }
  emitState() {
    this.emit("state", this.state());
  }
  // ---------------- 位置 / 多显示器 ----------------
  restorePosition(size, w, h) {
    const saved = this.settings.get().window.positions[size];
    if (saved) {
      const visible = electron.screen.getAllDisplays().some((d) => {
        const a2 = d.workArea;
        return saved.x + w > a2.x + 40 && saved.x < a2.x + a2.width - 40 && saved.y >= a2.y - 10 && saved.y < a2.y + a2.height - 40;
      });
      if (visible) return { x: saved.x, y: saved.y };
    }
    const a = electron.screen.getPrimaryDisplay().workArea;
    if (size === "small") return { x: a.x + a.width - w - 24, y: a.y + 24 };
    return { x: Math.round(a.x + (a.width - w) / 2), y: Math.round(a.y + (a.height - h) / 2) };
  }
  ensureOnScreen() {
    const w = this.win;
    if (!w) return;
    const b = w.getBounds();
    const d = electron.screen.getDisplayMatching(b);
    const a = d.workArea;
    const x = Math.min(Math.max(b.x, a.x), a.x + a.width - b.width);
    const y = Math.min(Math.max(b.y, a.y), a.y + a.height - b.height);
    if (x !== b.x || y !== b.y) w.setPosition(x, y);
  }
  onMoved() {
    const w = this.win;
    if (!w || this.animTimer || this.snapping) return;
    const s = this.settings.get().window;
    if (s.snap) {
      const b = w.getBounds();
      const a = electron.screen.getDisplayMatching(b).workArea;
      const t = s.snapThreshold;
      let { x, y } = b;
      if (Math.abs(b.x - a.x) <= t) x = a.x;
      else if (Math.abs(a.x + a.width - (b.x + b.width)) <= t) x = a.x + a.width - b.width;
      if (Math.abs(b.y - a.y) <= t) y = a.y;
      else if (Math.abs(a.y + a.height - (b.y + b.height)) <= t) y = a.y + a.height - b.height;
      if (x !== b.x || y !== b.y) {
        this.snapping = true;
        w.setPosition(x, y);
        setTimeout(() => this.snapping = false, 60);
      }
    }
    this.schedulePositionSave();
  }
  schedulePositionSave() {
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      const w = this.win;
      if (!w) return;
      const b = w.getBounds();
      const s = this.settings.get().window;
      const d = electron.screen.getDisplayMatching(b);
      this.settings.update({ window: { positions: { ...s.positions, [s.size]: { x: b.x, y: b.y, displayId: d.id } } } });
    }, 500);
  }
  // ---------------- 尺寸切换（平滑动画） ----------------
  setSize(size) {
    const w = this.win;
    if (!w) return;
    const cur = this.settings.get().window.size;
    if (cur === size && w.isVisible()) return;
    const target = WINDOW_SIZES[size];
    const from = w.getBounds();
    const a = electron.screen.getDisplayMatching(from).workArea;
    const anchorRight = from.x + from.width / 2 > a.x + a.width / 2;
    const anchorBottom = from.y + from.height / 2 > a.y + a.height / 2;
    const saved = this.settings.get().window.positions[size];
    let tx = anchorRight ? from.x + from.width - target.width : from.x;
    let ty = anchorBottom ? from.y + from.height - target.height : from.y;
    if (saved && electron.screen.getDisplayMatching({ x: saved.x, y: saved.y, width: target.width, height: target.height }).id === electron.screen.getDisplayMatching(from).id) {
      tx = saved.x;
      ty = saved.y;
    }
    tx = Math.min(Math.max(tx, a.x), a.x + a.width - target.width);
    ty = Math.min(Math.max(ty, a.y), a.y + a.height - target.height);
    this.settings.update({ window: { size } });
    this.emitState();
    if (!w.isVisible()) w.show();
    this.animate(from, { x: tx, y: ty, width: target.width, height: target.height });
  }
  animate(from, to) {
    const w = this.win;
    if (!w) return;
    if (this.animTimer) clearInterval(this.animTimer);
    if (this.settings.get().ui.reduceMotion) {
      w.setResizable(true);
      w.setBounds(to);
      w.setResizable(false);
      return;
    }
    const dur = 180;
    const t0 = Date.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    w.setResizable(true);
    this.animTimer = setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / dur);
      const e = ease(p);
      const lerp = (a, b) => Math.round(a + (b - a) * e);
      w.setBounds({ x: lerp(from.x, to.x), y: lerp(from.y, to.y), width: lerp(from.width, to.width), height: lerp(from.height, to.height) });
      if (p >= 1) {
        clearInterval(this.animTimer);
        this.animTimer = null;
        w.setBounds(to);
        w.setResizable(false);
        this.schedulePositionSave();
      }
    }, 16);
  }
  // ---------------- 置顶 / 透明 / 穿透 ----------------
  setAlwaysOnTop(v) {
    this.win?.setAlwaysOnTop(v, "floating");
    this.settings.update({ window: { alwaysOnTop: v } });
    this.emitState();
  }
  setOpacity(v) {
    const o = Math.max(0.15, Math.min(1, v));
    this.settings.update({ window: { opacity: o } });
    if (!this.ghost) this.win?.setOpacity(o);
    this.emitState();
  }
  toggleGhost() {
    this.ghost = !this.ghost;
    const s = this.settings.get().window;
    this.win?.setOpacity(this.ghost ? s.ghostOpacity : s.opacity);
    this.emitState();
  }
  setClickThrough(v, shortcutHint) {
    const w = this.win;
    if (!w) return;
    this.clickThrough = v;
    w.setIgnoreMouseEvents(v);
    if (v) {
      if (!w.isVisible()) w.showInactive();
      if (electron.Notification.isSupported())
        new electron.Notification({ title: "鼠标穿透已开启", body: `窗口不再响应鼠标。按 ${shortcutHint ?? "Ctrl+Alt+M"} 或通过托盘菜单关闭。` }).show();
    }
    log$2.info(`鼠标穿透：${v}`);
    this.emitState();
  }
  setFocusMode(v) {
    this.settings.update({ window: { focusMode: v } });
    this.emitState();
  }
  toggleVisible() {
    const w = this.win;
    if (!w) return;
    if (w.isVisible() && !w.isMinimized()) w.hide();
    else this.show();
  }
  show() {
    const w = this.win;
    if (!w) return;
    if (w.isMinimized()) w.restore();
    w.show();
    w.focus();
    this.ensureOnScreen();
  }
  /** 一键恢复：取消穿透与透明、显示并居中到可见区域 */
  restoreNormal() {
    if (this.clickThrough) this.setClickThrough(false);
    if (this.ghost) this.toggleGhost();
    if (this.settings.get().window.opacity < 0.6) this.setOpacity(1);
    this.show();
  }
  resetPosition() {
    const w = this.win;
    if (!w) return;
    const s = this.settings.get().window;
    this.settings.update({ window: { positions: {} } });
    const size = WINDOW_SIZES[s.size];
    const p = this.restorePosition(s.size, size.width, size.height);
    w.setPosition(p.x, p.y);
    this.show();
  }
  send(channel, payload) {
    const w = this.win;
    if (w && !w.isDestroyed()) w.webContents.send(channel, payload);
  }
}
class TrayController {
  constructor(wm, settings, onAnalyze, onQuit) {
    this.wm = wm;
    this.settings = settings;
    this.onAnalyze = onAnalyze;
    this.onQuit = onQuit;
  }
  tray = null;
  create() {
    let img = electron.nativeImage.createFromPath(resourcePath("tray.png"));
    if (img.isEmpty()) img = electron.nativeImage.createFromPath(resourcePath("icon.png")).resize({ width: 16, height: 16 });
    this.tray = new electron.Tray(img);
    this.tray.setToolTip("NEURAL TRADE");
    this.tray.on("click", () => this.wm.toggleVisible());
    this.tray.on("double-click", () => this.wm.restoreNormal());
    this.refresh();
    this.wm.on("state", () => this.refresh());
  }
  refresh() {
    if (!this.tray) return;
    const st = this.wm.state();
    const sc = this.settings.get().window.shortcuts;
    const acc = (s) => s.replace("CommandOrControl", "Ctrl");
    const menu = electron.Menu.buildFromTemplate([
      { label: st.visible ? "隐藏窗口" : "显示窗口", accelerator: acc(sc.toggleVisible), click: () => this.wm.toggleVisible() },
      { label: "恢复正常（取消穿透与透明）", click: () => this.wm.restoreNormal() },
      { type: "separator" },
      {
        label: "窗口尺寸",
        submenu: [
          { label: "LARGE 1200×760", type: "radio", checked: st.size === "large", accelerator: acc(sc.sizeLarge), click: () => this.wm.setSize("large") },
          { label: "MEDIUM 760×480", type: "radio", checked: st.size === "medium", accelerator: acc(sc.sizeMedium), click: () => this.wm.setSize("medium") },
          { label: "SMALL 340×200", type: "radio", checked: st.size === "small", accelerator: acc(sc.sizeSmall), click: () => this.wm.setSize("small") }
        ]
      },
      { label: "窗口置顶", type: "checkbox", checked: st.alwaysOnTop, accelerator: acc(sc.toggleTop), click: (i) => this.wm.setAlwaysOnTop(i.checked) },
      { label: `一键透明（${Math.round(this.settings.get().window.ghostOpacity * 100)}%）`, type: "checkbox", checked: st.ghost, accelerator: acc(sc.toggleGhost), click: () => this.wm.toggleGhost() },
      { label: "鼠标穿透", type: "checkbox", checked: st.clickThrough, accelerator: acc(sc.toggleClickThrough), click: (i) => this.wm.setClickThrough(i.checked, acc(sc.toggleClickThrough)) },
      { label: "专注模式", type: "checkbox", checked: st.focusMode, accelerator: acc(sc.toggleFocus), click: (i) => this.wm.setFocusMode(i.checked) },
      { type: "separator" },
      { label: "立即 AI 分析", accelerator: acc(sc.analyzeNow), click: () => this.onAnalyze() },
      { label: "重置窗口位置", click: () => this.wm.resetPosition() },
      { type: "separator" },
      { label: `退出 NEURAL TRADE v${electron.app.getVersion()}`, click: () => this.onQuit() }
    ]);
    this.tray.setContextMenu(menu);
  }
  destroy() {
    this.tray?.destroy();
    this.tray = null;
  }
}
const log$1 = createLogger("shortcuts");
function registerShortcuts(map, wm, onAnalyze) {
  electron.globalShortcut.unregisterAll();
  const errors = [];
  const acc = (s) => s.replace("CommandOrControl", "Ctrl");
  const actions = {
    toggleVisible: () => wm.toggleVisible(),
    toggleGhost: () => wm.toggleGhost(),
    toggleClickThrough: () => wm.setClickThrough(!wm.state().clickThrough, acc(map.toggleClickThrough)),
    sizeLarge: () => wm.setSize("large"),
    sizeMedium: () => wm.setSize("medium"),
    sizeSmall: () => wm.setSize("small"),
    toggleTop: () => wm.setAlwaysOnTop(!wm.state().alwaysOnTop),
    analyzeNow: onAnalyze,
    toggleFocus: () => wm.setFocusMode(!wm.state().focusMode)
  };
  for (const [name, accel] of Object.entries(map)) {
    if (!accel) continue;
    try {
      const ok = electron.globalShortcut.register(accel, actions[name]);
      if (!ok) errors.push(`${acc(accel)}（${name}）已被其他程序占用`);
    } catch (e) {
      errors.push(`${acc(accel)}（${name}）格式无效`);
    }
  }
  if (errors.length) log$1.warn("快捷键注册失败：" + errors.join("；"));
  return errors;
}
const isSym = (s) => SYMBOLS.includes(s);
const isMkt = (m) => m === "spot" || m === "perp";
const isIv = (i) => INTERVALS.includes(i);
const isSize = (s) => s === "large" || s === "medium" || s === "small";
function assertArgs(ok) {
  if (!ok) throw new Error("参数无效");
}
function toLine(times, s) {
  const out = [];
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (v !== null && isFinite(v)) out.push({ time: Math.floor(times[i] / 1e3), value: v });
  }
  return out;
}
function registerIpc(sv) {
  const handle = (ch, fn) => {
    electron.ipcMain.handle(ch, async (_e, ...args) => fn(...args));
  };
  handle("settings:get", () => sv.settings.get());
  handle("settings:update", (patch) => sv.settings.update(patch));
  handle("settings:reset-section", (k) => sv.settings.resetSection(k));
  handle("market:snapshot", () => sv.market.snapshot());
  handle("market:candles", async (s, m, iv) => {
    assertArgs(isSym(s) && isMkt(m) && isIv(iv));
    return sv.market.getCandles(s, m, iv);
  });
  handle("market:overlay", async (s, m, iv) => {
    assertArgs(isSym(s) && isMkt(m) && isIv(iv));
    const all = await sv.market.getCandles(s, m, iv);
    const { closed } = splitClosed(all, sv.market.now());
    if (closed.length < 30) return null;
    const ser = computeSeries(closed, INTERVAL_MS[iv]);
    const times = closed.map((c) => c.t);
    const swings = findSwings(closed, iv === "1d" || iv === "1w" ? 2 : 3);
    const atrLast = ser.atr14[ser.atr14.length - 1];
    return {
      symbol: s,
      market: m,
      interval: iv,
      ema20: toLine(times, ser.ema20),
      ema50: toLine(times, ser.ema50),
      ema200: toLine(times, ser.ema200),
      bbUpper: toLine(times, ser.bb.upper),
      bbLower: toLine(times, ser.bb.lower),
      vwap: toLine(times, ser.vwap),
      rsi: toLine(times, ser.rsi14),
      macdHist: toLine(times, ser.macd.hist),
      levels: findLevels(closed, swings.slice(-40), atrLast),
      patterns: detectPatterns(closed, ser.volMa20, 60),
      swings: analyzeStructure(swings).swings,
      breakouts: detectBreakouts(closed, swings, ser.volMa20, 3)
    };
  });
  handle("market:watch", async (s, m, iv) => {
    assertArgs(isSym(s) && isMkt(m) && isIv(iv));
    await sv.market.watch(s, m, iv);
  });
  handle("market:reconnect", () => sv.market.restart());
  handle("rules:evaluate", (s, m) => {
    assertArgs(isSym(s) && isMkt(m));
    const st = sv.settings.get();
    const rules = evaluateRules({
      symbol: s,
      market: m,
      frames: sv.market.framesSync(s, m),
      ticker: sv.market.ticker(s, m),
      now: sv.market.now(),
      staleSeconds: st.market.staleSeconds,
      newsCount: 0,
      verifiedNewsCount: 0
    });
    return { rules, long: buildPlan("LONG", rules, st.risk, m), short: buildPlan("SHORT", rules, st.risk, m) };
  });
  handle("ai:providers", () => sv.ai.providers());
  handle("ai:save-provider", (cfg) => sv.ai.saveProvider(cfg));
  handle("ai:add-provider", (kind) => {
    assertArgs(["openai", "deepseek", "openai_compatible"].includes(kind));
    return sv.ai.addProvider(kind);
  });
  handle("ai:delete-provider", (id) => sv.ai.deleteProvider(String(id)));
  handle("ai:set-key", (id, key2) => {
    assertArgs(typeof id === "string" && typeof key2 === "string");
    return sv.ai.setKey(id, key2);
  });
  handle("ai:delete-key", (id) => sv.ai.deleteKey(String(id)));
  handle("ai:fetch-models", (id) => sv.ai.fetchModels(String(id)));
  handle("ai:test", (id, model) => sv.ai.test(String(id), model ? String(model) : void 0));
  handle("analysis:run", (o) => {
    assertArgs(!!o && isSym(o.symbol) && isMkt(o.market));
    return { requestId: sv.analysis.run({ symbol: o.symbol, market: o.market, dual: o.dual, trigger: "manual" }) };
  });
  handle("analysis:cancel", (id) => sv.analysis.cancel(String(id)));
  handle("analysis:latest", (s, m) => {
    assertArgs(isSym(s) && isMkt(m));
    return sv.analysis.latest(s, m);
  });
  handle("analysis:latest-dual", (s, m) => {
    assertArgs(isSym(s) && isMkt(m));
    return sv.analysis.latestDual(s, m);
  });
  handle("analysis:history", (o) => sv.store.history(o?.symbol && isSym(o.symbol) ? o.symbol : void 0, Math.min(200, o?.limit ?? 50)));
  handle("news:list", () => sv.news.list());
  handle("news:refresh", () => sv.news.refresh());
  handle("news:providers", () => sv.news.providers());
  handle("news:set-key", (id, key2) => {
    sv.secrets.set(`news:${String(id)}`, String(key2));
    return sv.news.providers();
  });
  handle("news:delete-key", (id) => {
    sv.secrets.delete(`news:${String(id)}`);
    return sv.news.providers();
  });
  handle("news:test", (id) => sv.news.test(String(id)));
  handle("usage:summary", () => sv.ai.usage());
  handle("alerts:list", () => sv.alerts.list());
  handle("alerts:clear", () => sv.store.clearAlerts());
  handle("win:state", () => sv.wm.state());
  handle("win:set-size", (s) => {
    assertArgs(isSize(s));
    sv.wm.setSize(s);
    return sv.wm.state();
  });
  handle("win:toggle-ghost", () => {
    sv.wm.toggleGhost();
    return sv.wm.state();
  });
  handle("win:set-opacity", (v) => {
    sv.wm.setOpacity(Number(v));
    return sv.wm.state();
  });
  handle("win:set-click-through", (v) => {
    sv.wm.setClickThrough(!!v, sv.settings.get().window.shortcuts.toggleClickThrough.replace("CommandOrControl", "Ctrl"));
    return sv.wm.state();
  });
  handle("win:set-top", (v) => {
    sv.wm.setAlwaysOnTop(!!v);
    return sv.wm.state();
  });
  handle("win:set-focus-mode", (v) => {
    sv.wm.setFocusMode(!!v);
    return sv.wm.state();
  });
  handle("win:hide", () => sv.wm.win?.hide());
  handle("win:minimize", () => sv.wm.win?.minimize());
  handle("win:quit", () => sv.quit());
  handle("app:open-external", async (url) => {
    if (typeof url !== "string" || !/^https:\/\//i.test(url)) return false;
    await electron.shell.openExternal(url);
    return true;
  });
  handle("app:info", () => ({
    version: electron.app.getVersion(),
    platform: process.platform,
    userData: electron.app.getPath("userData"),
    encryption: sv.secrets.available(),
    shortcutErrors: sv.shortcutErrors(),
    logPath: logPath()
  }));
}
const log = createLogger("main");
if (!electron.app.requestSingleInstanceLock()) {
  electron.app.quit();
} else {
  electron.app.setAppUserModelId("com.neuraltrade.terminal");
  process.on("uncaughtException", (e) => log.error("uncaughtException", e.stack ?? e.message));
  process.on("unhandledRejection", (e) => log.error("unhandledRejection", String(e?.stack ?? e)));
  void electron.app.whenReady().then(boot);
}
async function boot() {
  const settings = new SettingsStore();
  const secrets = new SecretStore();
  const store = new Store();
  await store.init();
  await applyProxy(settings.get().network);
  const wm = new WindowManager(settings);
  const market = new MarketService(settings);
  const news = new NewsService(settings, secrets, store);
  const ai = new AIService(settings, secrets, store);
  const analysis = new AnalysisService(settings, market, news, ai, store);
  const alerts = new AlertService(settings, market, news, store);
  let shortcutErrors = [];
  const analyzeNow = () => {
    const s = settings.get();
    wm.send("shortcut:analyze", null);
    analysis.run({ symbol: s.market.symbol, market: s.market.marketType, trigger: "manual", dual: s.analysis.dualModel });
  };
  const quit = () => {
    wm.quitting = true;
    electron.app.quit();
  };
  const sv = { settings, secrets, store, market, news, ai, analysis, alerts, wm, shortcutErrors: () => shortcutErrors, quit };
  registerIpc(sv);
  wm.create();
  const tray = new TrayController(wm, settings, analyzeNow, quit);
  tray.create();
  shortcutErrors = registerShortcuts(settings.get().window.shortcuts, wm, analyzeNow);
  market.on("tickers", (t) => wm.send("market:tickers", t));
  market.on("conns", (c) => wm.send("market:conn", c));
  market.on("candle", (ev) => wm.send("market:candle", ev));
  analysis.on("progress", (p) => wm.send("analysis:progress", p));
  analysis.on("result", (r2) => {
    wm.send("analysis:result", r2);
    if (r2.gating_notes.some((n) => n.includes("上限") || n.includes("预算")))
      alerts.push({ level: "warn", kind: "budget", title: "AI 调用已受限", body: r2.gating_notes.find((n) => n.includes("上限") || n.includes("预算")) ?? "" }, "budget", 36e5);
  });
  analysis.on("dual", (d) => wm.send("analysis:dual", d));
  analysis.on("signal-change", ({ prev, next }) => alerts.onSignalChange(prev, next));
  alerts.on("alert", (a) => wm.send("alerts:new", a));
  alerts.on("breakout", (b) => analysis.eventTrigger(b.symbol, b.key, b.reason));
  news.on("updated", (items) => wm.send("news:updated", items));
  wm.on("state", (s) => wm.send("win:state", s));
  wm.on("visibility", (v) => {
    market.setVisible(v);
    wm.send("app:visibility", { visible: v });
  });
  settings.on("change", (next, prev) => {
    wm.send("settings:changed", next);
    if (JSON.stringify(next.network) !== JSON.stringify(prev.network)) {
      void applyProxy(next.network).then(() => market.restart());
    } else {
      const mk = (m) => [m.exchange, m.binanceSpotRest, m.binanceSpotWs, m.binanceFutRest, m.binanceFutWs, m.okxRest, m.okxWs].join("|");
      if (mk(next.market) !== mk(prev.market)) void market.restart();
    }
    if (JSON.stringify(next.window.shortcuts) !== JSON.stringify(prev.window.shortcuts)) {
      shortcutErrors = registerShortcuts(next.window.shortcuts, wm, analyzeNow);
      tray.refresh();
    }
    if (next.news.refreshMinutes !== prev.news.refreshMinutes) news.schedule();
    if (JSON.stringify(next.news.providers) !== JSON.stringify(prev.news.providers)) void news.refresh();
    if (next.window.ghostOpacity !== prev.window.ghostOpacity) tray.refresh();
  });
  alerts.start();
  analysis.start();
  news.start();
  market.start().catch((e) => log.error("行情启动失败", e));
  electron.powerMonitor.on("resume", () => {
    log.info("系统唤醒，重启行情连接");
    void market.restart();
    void news.refresh();
  });
  electron.app.on("second-instance", () => wm.restoreNormal());
  electron.app.on("before-quit", () => {
    wm.quitting = true;
  });
  electron.app.on("will-quit", () => {
    electron.globalShortcut.unregisterAll();
    market.stop();
    news.stop();
    settings.flush();
    store.flush();
    tray.destroy();
  });
  electron.app.on("window-all-closed", () => {
  });
  const m0 = settings.get().market;
  market.watch(m0.symbol, m0.marketType, m0.chartInterval).catch(() => {
  });
  log.info(`NEURAL TRADE ${electron.app.getVersion()} 已启动`);
}
