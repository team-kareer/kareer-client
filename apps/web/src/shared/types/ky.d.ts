import '@toss/ky';

declare module '@toss/ky' {
  interface Options {
    duplex?: 'half';
  }
}

export {};
