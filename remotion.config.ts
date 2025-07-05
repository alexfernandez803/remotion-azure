import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

Config.setChromiumOpenGlRenderer('angle-egl');
Config.setVideoImageFormat('jpeg');
Config.setChromeMode('chrome-for-testing');