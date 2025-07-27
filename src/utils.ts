// Date and time utilities
export const dateUtils = {
  formatDate: (date: Date, format: string = 'yyyy-MM-dd') => {
    const pad = (num: number) => String(num).padStart(2, '0');
    return format
      .replace('yyyy', String(date.getFullYear()))
      .replace('MM', pad(date.getMonth() + 1))
      .replace('dd', pad(date.getDate()))
      .replace('HH', pad(date.getHours()))
      .replace('mm', pad(date.getMinutes()))
      .replace('ss', pad(date.getSeconds()));
  },

  getRelativeTime: (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  },

  isToday: (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  },
};

// String manipulation utilities
export const stringUtils = {
  capitalize: (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
  truncate: (str: string, length: number) => str.length > length ? str.substring(0, length) + '...' : str,
  pluralize: (word: string, count: number) => count === 1 ? word : word + 's',
  slugify: (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
};

// Array manipulation utilities
export const arrayUtils = {
  shuffle: (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  groupBy: (array: any[], key: string) => {
    return array.reduce((result, item) => {
      const groupKey = item[key];
      if (!result[groupKey]) result[groupKey] = [];
      result[groupKey].push(item);
      return result;
    }, {} as Record<string, any[]>);
  },

  findIndexBy: (array: any[], key: string, value: any) => {
    return array.findIndex(item => item[key] === value);
  },
};

// Object utilities
export const objectUtils = {
  mergeDeep: (target: object, source: object) => {
    const output = { ...target };
    if (typeof source !== 'object' || source === null) return output;
    Object.keys(source).forEach((key) => {
      if (source[key] && typeof source[key] === 'object') {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
    return output;
  },

  pick: (obj: object, keys: string[]) => {
    return keys.reduce((result, key) => {
      if (obj.hasOwnProperty(key)) result[key] = obj[key];
      return result;
    }, {} as Record<string, any>);
  },

  omit: (obj: object, keys: string[]) => {
    return Object.keys(obj).reduce((result, key) => {
      if (!keys.includes(key)) result[key] = obj[key];
      return result;
    }, {} as Record<string, any>);
  },
};

// Math utilities
export const mathUtils = {
  clamp: (value: number, min: number, max: number) => Math.min(Math.max(value, min), max),
  randomInt: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
  roundTo: (value: number, precision: number) => {
    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
  },
};

// Validation utilities
export const validationUtils = {
  isEmail: (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  isPhoneNumber: (phone: string) => {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phone);
  },

  isUrl: (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
};
