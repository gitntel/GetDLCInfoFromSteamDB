import creamApi4500 from './formats/creamApi4500.txt?raw';
import creamApi3410 from './formats/creamApi3410.txt?raw';
import greenLuma2020BatchMode from './formats/greenLuma2020BatchMode.txt?raw';
import lumaEmuOnlyDlcsList from './formats/lumaEmuOnlyDlcsList.txt?raw';
import codexDlc00000DlcName from './formats/codexDlc00000DlcName.txt?raw';
import threeDmGameOnlyDlcsList from './formats/threeDmGameOnlyDlcsList.txt?raw';
import skidrowOnlyDlcsList from './formats/skidrowOnlyDlcsList.txt?raw';
import appIdAppIdName from './formats/appIdAppIdName.txt?raw';
import appIdName from './formats/appIdName.txt?raw';

const formats = {
  creamApi4500: {
    name: 'CreamAPI v4.5.0.0',
    file: {
      name: 'cream_api.ini',
      text: creamApi4500,
    },
  },
  creamApi3410: {
    name: 'CreamAPI v3.4.1.0',
    file: {
      name: 'cream_api.ini',
      text: creamApi3410,
    },
  },
  greenLuma2020BatchMode: {
    name: 'GreenLuma 2020 [BATCH MODE]',
    file: {
      name: '[data]appID[/data]_GreenLuma.bat',
      text: greenLuma2020BatchMode,
    },
  },
  lumaEmuOnlyDlcsList: {
    name: 'LUMAEMU (ONLY DLCS LIST)',
    file: {
      name: '[data]appID[/data]_lumaemu.ini',
      text: lumaEmuOnlyDlcsList,
    },
  },
  codexDlc00000DlcName: {
    name: 'CODEX (DLC00000 = DLCName)',
    file: {
      name: '[data]appID[/data]_codex.ini',
      text: codexDlc00000DlcName,
    },
  },
  threeDmGameOnlyDlcsList: {
    name: '3DMGAME (ONLY DLCS LIST)',
    file: {
      name: '[data]appID[/data]_3dmgame.ini',
      text: threeDmGameOnlyDlcsList,
    },
  },
  skidrowOnlyDlcsList: {
    name: 'SKIDROW (ONLY DLCS LIST)',
    file: {
      name: '[data]appID[/data]_skidrow.ini',
      text: skidrowOnlyDlcsList,
    },
  },
  appIdAppIdName: {
    name: 'APPID = APPIDNAME',
    file: {
      name: '[data]appID[/data]_appid_appidname.ini',
      text: appIdAppIdName,
    },
  },
  appIdName: {
    name: 'APPIDNAME',
    file: {
      name: '[data]appID[/data]_appidname.ini',
      text: appIdName,
    },
  },
};

export default formats;