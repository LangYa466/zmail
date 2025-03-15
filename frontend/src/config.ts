// 配置文件，用于管理域名和API地址设置

// 邮箱域名配置
export const EMAIL_DOMAIN = import.meta.env.VITE_EMAIL_DOMAIN || 'jnic.lol';

// API地址配置
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.mail.jnic.lol';

// 其他配置
export const DEFAULT_AUTO_REFRESH = true;
export const AUTO_REFRESH_INTERVAL = 10000; // 10秒 
