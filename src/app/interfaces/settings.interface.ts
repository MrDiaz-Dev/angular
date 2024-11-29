export interface SettingsResponse {
  code: number;
  message: string;
  data: Settings;
}
export interface Settings {
  heightPalletFoot: SettingItem;
  stackableIfLowerThen: SettingItem;
  safetyMargin: SettingItem;
  buildUpPalletHeight: SettingItem;
  volumetricPalletHeight: SettingItem;
  volumePalletFoot: SettingItem;
}

interface SettingItem {
  value: number;
  UoM: string;
}
