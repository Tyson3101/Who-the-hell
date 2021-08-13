declare var io: () => {
  on: (envName: string, callback: Function) => any;
  emit: (envName: string, ...params: any) => any;
  off: (envName: string, callback: Function) => any;
};
