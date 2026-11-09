# NEURAL TRADE

NEURAL TRADE 是一个基于 Electron 的 Windows 桌面客户端。随程序提供的描述称，它用于 BTC / ETH 加密货币的 AI 分析与决策辅助，不自动交易。

本仓库整理自 Windows 发布包，包含从 `app.asar` 提取的编译后代码、界面资源以及部分运行资源。它不包含原始项目源码、完整依赖或构建配置，不能直接作为完整开发项目重新构建。代码未经过运行验证。

- `out/main/`：打包后的 Electron 主进程代码
- `out/preload/`：预加载代码
- `out/renderer/`：编译后的界面代码与资源
- `app.asar.unpacked/`：发布包中单独存放的运行资源
- `resources/`：应用图标资源

原始发布包中的 Electron 运行时、Windows 可执行文件和第三方依赖未包含在这份提取代码中。程序声明的许可证为 `UNLICENSED`；使用和再分发前请确认相应权利。
